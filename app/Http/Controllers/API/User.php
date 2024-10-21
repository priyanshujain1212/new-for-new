<?php

namespace App\Http\Controllers\API;

use Exception;
use Validator;

use Firebase\JWT\JWT;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Config;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

use App\Models\User as UserModel;
use App\Models\UserToken as UserTokenModel;
use App\Models\Customer as CustomerModel;
use App\Models\Role as RoleModel;
use App\Models\Store as StoreModel;
use App\Models\UserStore as UserStoreModel;
use App\Models\SettingEmail as SettingEmailModel;
use App\Models\Language as LanguageModel;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\UserResource;

use App\Http\Resources\Collections\UserCollection;

use App\Http\Controllers\API\Role as RoleAPI;

use App\Mail\ForgotPassword;

class User extends Controller
{
    /**
     * Authenticate API
     *
     * @return \Illuminate\Http\Response
     */

     public function checkFirstLogin(Request $request)
     {
         $request->validate([
             'contact' => 'required|string',
         ]);
         $contact = $request->input('contact');
         $user = UserModel::where('email', $contact)->orWhere('phone', $contact)->first();
         if ($user) {
             $isFirstLogin = $user->fresh_login; 
          
             return response()->json(['isFirstLogin' => $isFirstLogin, 'name' => $user->fullname]);
           
         }
         $customer = CustomerModel::where('email', $contact)->orWhere('phone', $contact)->first();
       
         if ($customer) {
             $isFirstLogin = $customer->fresh_login;
             return response()->json(['isFirstLogin' => $isFirstLogin, 'name' => $customer->name]);
         }

         
         return response()->json(['isFirstLogin' => false], 404);
     }

         /**
     * Authenticate API
     *
     * @return \Illuminate\Http\Response
     */

     public function authenticate(Request $request)
     {
         try {
             // Validate the input for email/phone and password
             $validator = Validator::make($request->all(), [
                 'contact' => 'required|string|max:255', // Validate either email or phone
                 'password' => $this->get_validation_rules("password", true)
             ]);
     
             if ($validator->fails()) {
                 return response()->json($this->generate_response([
                     "message" => $validator->errors()->first(),
                     "status_code" => 400
                 ]));
             }
     
             // Attempt to authenticate the user using contact (email or phone)
             $user = $this->authenticateUser($request->contact, $request->password, 'user');
             if ($user) {
                 return response()->json($this->generate_response($user, 'SUCCESS'));
             }
     
             $customer = $this->authenticateUser($request->contact, $request->password, 'customer');
             if ($customer) {
                 return response()->json($this->generate_response($customer, 'SUCCESS'));
             }
     
             throw new Exception("Invalid contact or password", 401);
     
         } catch (Exception $e) {
             return response()->json($this->generate_response([
                 "message" => $e->getMessage(),
                 "status_code" => $e->getCode() ?: 400
             ]));
         }
     }
     
         /**
     * Authenticate API
     *
     * @return \Illuminate\Http\Response
     */

     private function authenticateUser($contact, $password, $type)
     {
         $model = $type === 'user' ? UserModel::class : CustomerModel::class;
         $modelInstance = new $model;
     
         // Attempt to find user by email or phone
         $data = $model::select($modelInstance->getTable() . '.*')
             ->roleJoin()
             ->where(function($query) use ($contact) {
                 // Check for both email and phone
                 $query->where('email', '=', $contact)
                       ->orWhere('phone', '=', $contact);
             })
             ->first();
     
         if ($data && Hash::check($password, $data->password)) {
             $first_link = $this->get_user_default_link($data, $type);
             $data->initial_link = $first_link ? route($first_link->route) : "/";
             if ($data->initial_link == "/") {
                 throw new Exception("You don't have access to the system. Please contact the system administrator.", 401);
             }
     
             $access_token = $this->generate_access_token($data, $type);
             $detail = $model::find($data->id);
             $resource = $type === 'user' ? new UserResource($detail) : new CustomerResource($detail);
             $resource = collect($resource);
             $resource['access_token'] = $access_token;
           
             return [
                 "message" => "Authenticated successfully",
                 "data" => $resource,
                 "link" => $data->initial_link
             ];
         }
     
         return null; // Return null if authentication fails
     }
     
    
         /**
     * Authenticate API
     *
     * @return \Illuminate\Http\Response
     */
    
     public function sendOtp(Request $request)
     {
         // Validate the request
         $request->validate([
             'contact' => 'required|string|max:255',
             'name' => 'required|string|max:255', // Validate the name
         ]);
         
         $contact = $request->input('contact');
         $name = $request->input('name'); // Retrieve the name from the request
       
        // Add country code
        $mobileNumber = '91' . $contact;

         // Generate the OTP
         $otp = str_pad(rand(0, pow(10, 6) - 1), 6, '0', STR_PAD_LEFT); // Generates a 6-digit OTP
     
         // Prepare the message
         $message = "Hello {$name}, your one-time password is: {$otp}. Thank you!";
         
         // Send the OTP via MSG91
         $authKey = "431994A46TGRRVsfMG6703dd85P1";  // Replace with your actual Auth Key
         $route = "4";  // Use '4' for transactional SMS without sender ID
     
         $postData = array(
             'authkey' => $authKey,
             'mobiles' => $mobileNumber,
             'message' => urlencode($message),
             'route' => $route,
              'sender' => 'ECHO'
         );
     
         // API URL
         $url = "http://api.msg91.com/api/sendhttp.php";
     
         // Initialize cURL
         $ch = curl_init();
         curl_setopt_array($ch, array(
             CURLOPT_URL => $url,
             CURLOPT_RETURNTRANSFER => true,
             CURLOPT_POST => true,
             CURLOPT_POSTFIELDS => $postData,
             CURLOPT_SSL_VERIFYHOST => 0,
             CURLOPT_SSL_VERIFYPEER => 0
         ));
     
         // Execute cURL
         $output = curl_exec($ch);
         
         // Check for cURL errors
         if (curl_errno($ch)) {
             Log::error('cURL error: ' . curl_error($ch));
             return response()->json(['success' => false, 'message' => 'Error sending OTP.'], 500);
         }
         
         // Close cURL
         curl_close($ch);
   
         // Check response
         if ($output != NULL) {
             // Store the OTP in the session for later verification
             session(['otp' => $otp,
                      'output' => $output]);
             return response()->json(['success' => true, 'message' => 'OTP sent successfully.']);
         } else {
             Log::error('Failed to send message. Response: ' . $output);
             return response()->json(['success' => false, 'message' => 'Failed to send message.'], 400);
         }
     }
         /**
     * Authenticate API
     *
     * @return \Illuminate\Http\Response
     */

     
    
    public function verifyOtp(Request $request)
    {
        $request->validate([
            'contact' => 'required|string|max:255',
            'otp' => 'required|string|max:6',
            'newPassword' => 'required|string|min:8', // You can set your own password rules
        ]);
    
        $contact = $request->input('contact');
        $otp = $request->input('otp');
        $newPassword = $request->input('newPassword');
    
        // Check if the OTP matches
        if (session('otp') !== $otp) {
            return response()->json(['success' => false, 'message' => 'Invalid OTP.'], 400);
        }
    
        // Attempt to find the user in UserModel or CustomerModel
        $user = UserModel::where('email', $contact)->orWhere('phone', $contact)->first();
    
        // If not found, check in CustomerModel
        if (!$user) {
            $user = CustomerModel::where('email', $contact)->orWhere('phone', $contact)->first();
        }
    
        // If the user or customer is not found
        if (!$user) {
            return response()->json(['success' => false, 'message' => 'User not found.'], 404);
        }
    
        // Start the transaction
        DB::beginTransaction();
        try {
            // Hash the new password
            $hashed_password = Hash::make($newPassword);
    
            // Update the user's password and reset fresh_login status
            $user->password = $hashed_password; 
            $user->fresh_login = 0; // Reset fresh_login status
            $user->save(); // Save changes to the database
    
            // Clear the OTP from the session
            session()->forget('otp');
    
            // Commit the transaction
            DB::commit();
            $isFirstLogin = $user->fresh_login; 
            
            // return response()->json(['isFirstLogin' => $isFirstLogin,
    
            return response()->json(['success' => true, 'isFirstLogin' => $isFirstLogin, 'message' => 'Password updated successfully.']);
        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollBack();
            return response()->json(['success' => false, 'message' => 'Failed to update password.'], 500);
        }
    }
    


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {

            $data['action_key'] = 'A_VIEW_USER_LISTING';
            if(check_access(array($data['action_key']), true) == false){
                $response = $this->no_access_response_for_listing_table();
                return $response;
            }

            $item_array = array();

            $draw = $request->draw;
            $limit = $request->length;
            $offset = $request->start;
            
            $order_by = $request->order[0]["column"];
            $order_direction = $request->order[0]["dir"];
            $order_by_column =  $request->columns[$order_by]['name'];

            $filter_string = $request->search['value'];
            $filter_columns = array_filter(data_get($request->columns, '*.name'));
            
            $query = UserModel::select('users.*', 'master_status.label as status_label', 'master_status.color as status_color', 'roles.status as role_status' , 'roles.label as role_label')
            ->take($limit)
            ->skip($offset)
            ->statusJoin()
            ->roleJoin()
            ->createdUser()

            ->when($order_by_column, function ($query, $order_by_column) use ($order_direction) {
                $query->orderBy($order_by_column, $order_direction);
            }, function ($query) {
                $query->orderBy('created_at', 'desc');
            })

            ->when($filter_string, function ($query, $filter_string) use ($filter_columns) {
                $query->where(function ($query) use ($filter_string, $filter_columns){
                    foreach($filter_columns as $filter_column){
                        $query->orWhere($filter_column, 'like', '%'.$filter_string.'%');
                    }
                });
            })
            ->hideSuperAdminRole()
            ->hideCurrentLoggedUser($request->logged_user_id)
            ->get();

            $users = UserResource::collection($query);
           
            $total_count = UserModel::select('id')->hideSuperAdminRole()->hideCurrentLoggedUser($request->logged_user_id)->get()->count();

            $item_array = [];
            foreach($users as $key => $user){

                $user = $user->toArray($request);

                $item_array[$key][] = $user['user_code'];
                $item_array[$key][] = $user['fullname'];
                $item_array[$key][] = $user['email'];
                $item_array[$key][] = $user['phone'];
                $item_array[$key][] = (isset($user['role']['status']))?view('common.status_indicators', ['status' => $user['role']['status']])->render(). $user['role']['label']:'-';
                $item_array[$key][] = (isset($user['status']['label']))?view('common.status', ['status_data' => ['label' => $user['status']['label'], "color" => $user['status']['color']]])->render():'-';
                $item_array[$key][] = $user['created_at_label'];
                $item_array[$key][] = (isset($user['updated_at_label']))?$user['updated_at_label']:'-';
                $item_array[$key][] = (isset($user['created_by']) && isset($user['created_by']['fullname']))?$user['created_by']['fullname']:'-';
                $item_array[$key][] = view('user.layouts.user_actions', array('user' => $user))->render();
            }

            $response = [
                'draw' => $draw,
                'recordsTotal' => $total_count,
                'recordsFiltered' => $total_count,
                'data' => $item_array
            ];
            
            return response()->json($response);
        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {

            if(!check_access(['A_ADD_USER'], true)){
                throw new Exception("Invalid request", 400);
            }

            $this->validate_request($request);
            
            //check user email already exists
            $user_email_exists = UserModel::where('email', $request->email)->first();
            if ($user_email_exists) {
                throw new Exception("Email is already added, try signing in");
            }

            $role_data = RoleModel::select('id')->where('slack', '=', $request->role)->resolveSuperAdminRole()->active()->first();
            if (!$role_data) {
                throw new Exception("Invalid role selected", 400);
            }

            $password = Str::random(6);
            $hashed_password = Hash::make($password);

            DB::beginTransaction();

            $user = [
                "slack" => $this->generate_slack("users"),
                "user_code" => Str::random(6),
                "email" => $request->email,
                "password" => $hashed_password,
                "fullname" => $request->fullname,
                "phone" => $request->phone,
                "role_id" => $role_data->id,
                "status" => $request->status,
                "created_by" => $request->logged_user_id
            ];
            
            $user_id = UserModel::create($user)->id;

            $code_start_config = Config::get('constants.unique_code_start.user');
            $code_start = (isset($code_start_config))?$code_start_config:100;
            
            $user_code = [
                "user_code" => ($code_start+$user_id)
            ];
            UserModel::where('id', $user_id)
            ->update($user_code);

            $role_api = new RoleAPI();
            $role_api->update_user_roles($request, $role_data->id);

            $this->update_user_stores($request, $user['slack']);

            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "User created successfully", 
                    "data"    => $user['slack']
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $slack
     * @return \Illuminate\Http\Response
     */
    public function show($slack)
    { 
        try {

            if(!check_access(['A_DETAIL_USER'], true)){
                throw new Exception("Invalid request", 400);
            }

            $item = UserModel::select('*')
            ->where('slack', $slack)
            ->first();

            $item_data = new UserResource($item);

            return response()->json($this->generate_response(
                array(
                    "message" => "User loaded successfully", 
                    "data"    => $item_data
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }  
    }

    /**
     * list all the specified resource.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function list(Request $request)
    {
        try {

            if(!check_access(['A_VIEW_USER_LISTING'], true)){
                throw new Exception("Invalid request", 400);
            }

            $list = new UserCollection(UserModel::select('*')
            ->hideSuperAdminRole()
            ->orderBy('created_at', 'desc')->paginate());

            return response()->json($this->generate_response(
                array(
                    "message" => "Users loaded successfully", 
                    "data"    => $list
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slack
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slack)
    {
        try {

            if(!check_access(['A_EDIT_USER'], true)){
                throw new Exception("Invalid request", 400);
            }

            $this->validate_request($request);

            //check user role
            $user_role = UserModel::select('role_id')->where('slack', '=', $slack)->first();
            if($user_role->role_id == 1){
                throw new Exception("Invalid request", 400);
            }

            //check user email already exists
            $user_email_exists = UserModel::where('email', '=',$request->email)->where('slack', '!=', $slack)->first();
            if ($user_email_exists) {
                throw new Exception("Email is already used by another user");
            }

            $role_data = RoleModel::select('id')->where('slack', '=', $request->role)->resolveSuperAdminRole()->active()->first();
            if (!$role_data) {
                throw new Exception("Invalid role selected", 400);
            }

            DB::beginTransaction();

            $user = [        
                "email" => $request->email,
                "fullname" => $request->fullname,
                "phone" => $request->phone,
                "role_id" => $role_data->id,
                "status" => $request->status,
                "updated_by" => $request->logged_user_id
            ];

            $data = UserModel::where('slack', $slack)
            ->update($user);

            $role_api = new RoleAPI();
            $role_api->update_user_roles($request, $role_data->id);

            $this->update_user_stores($request, $slack);

            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "User updated successfully", 
                    "data"    => $data
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slack
     * @return \Illuminate\Http\Response
     */
    public function update_basic_profile(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email'     => $this->get_validation_rules("email", true),
                'fullname' => $this->get_validation_rules("fullname", true),
                'phone'  => $this->get_validation_rules("phone", true),
            ]);
            $validation_status = $validator->fails();
            if($validation_status){
                throw new Exception($validator->errors());
            }

            $user_slack = $request->logged_user_slack;

            if(empty($user_slack)){
                throw new Exception("Invalid request", 400);
            }

            //check user email already exists
            $user_email_exists = UserModel::where('email', $request->email)->where('slack', '!=', $user_slack)->first();
            if ($user_email_exists) {
                throw new Exception("Email is already used by another user");
            }

            $user = [        
                "email" => $request->email,
                "fullname" => $request->fullname,
                "phone" => $request->phone,
            ];

            $data = UserModel::where('slack',$user_slack)
            ->update($user);

            return response()->json($this->generate_response(
                array(
                    "message" => "Profile updated successfully", 
                    "data"    => $data
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slack
     * @return \Illuminate\Http\Response
     */
    public function update_password(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'current_password' => $this->get_validation_rules("password", true),
                'new_password' => $this->get_validation_rules("new_password", true),
            ]);
            $validation_status = $validator->fails();
            if($validation_status){
                throw new Exception($validator->errors());
            }

            $user_slack = $request->logged_user_slack;

            if(empty($user_slack)){
                throw new Exception("Invalid request", 400);
            }

            $old_hashed_password = Hash::make($request->current_password);
            $new_hashed_password = Hash::make($request->new_password);

            //check old hashed password matches
            $password_matches = UserModel::where('slack', $user_slack)->first();
            if (Hash::check($request->current_password, $password_matches->password) == false) {
                throw new Exception("Current password doesn't match");
            }

            $user = array(
                "password" => $new_hashed_password,
                "init_password" => null
            );
            
            $data = UserModel::updateOrCreate(
                ['slack' => $user_slack],
                $user
            )->save();

            return response()->json($this->generate_response(
                array(
                    "message" => "Password updated successfully", 
                    "data"    => $data
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slack
     * @return \Illuminate\Http\Response
     */
    public function update_profile_image(Request $request)
    {
        try {
            
            $user_slack = $request->logged_user_slack;
            $photo = $request->profile_photo;

            if(empty($user_slack)){
                throw new Exception("Invalid request", 400);
            }

            $user_image = UserModel::select('profile_image')->where('slack', '=', $user_slack)->first();

            Storage::disk('profile')->delete(
                [
                    $user_image->profile_image,
                    'medium_'.$user_image->profile_image,
                    'small_'.$user_image->profile_image
                ]
            );

            $upload_dir = Config::get('constants.upload.profile.upload_path');

            $extension = $photo->getClientOriginalExtension();
            $path = Storage::disk('profile')->putFileAs('/', $photo, $user_slack.'.'.$extension);
            
            $filename = basename($path);

            //large image
            $image = Image::make($photo);
            $large_path = $upload_dir.$filename;
            $image->resize(400, 400, function ($constraint) {
                $constraint->aspectRatio();
            });
            $image->resizeCanvas(400, 400, 'center', false, 'F5F5F5');
            $image->save($large_path);
            $image->destroy();

            //medium image
            $image = Image::make($photo);
            $medium_path = $upload_dir.'medium_'.$filename;
            $image->fit(100);
            $image->fit(100, 100, function ($constraint) {
                $constraint->upsize();
            });
            $image->save($medium_path);
            $image->destroy();

            //small image
            $image = Image::make($photo);
            $small_path = $upload_dir.'small_'.$filename;
            $image->fit(35);
            $image->fit(35, 35, function ($constraint) {
                $constraint->upsize();
            });
            $image->save($small_path);
            $image->destroy();

            $user = [        
                "profile_image" => $filename,
            ];

            $data = UserModel::where('slack', $user_slack)
            ->update($user);

            return response()->json($this->generate_response(
                array(
                    "message" => "Profile photo updated successfully", 
                    "data"    => $data
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slack
     * @return \Illuminate\Http\Response
     */
    public function remove_profile_image(Request $request)
    {
        try {
            
            $user_slack = $request->logged_user_slack;

            if(empty($user_slack)){
                throw new Exception("Invalid request", 400);
            }

            $user_image = UserModel::select('profile_image')->where('slack', '=', $user_slack)->first();

            Storage::disk('profile')->delete(
                [
                    $user_image->profile_image,
                    'medium_'.$user_image->profile_image,
                    'small_'.$user_image->profile_image
                ]
            );

            $user = [        
                "profile_image" => '',
            ];

            $data = UserModel::where('slack',$user_slack)
            ->update($user);
            

            return response()->json($this->generate_response(
                array(
                    "message" => "Profile photo removed successfully", 
                    "data"    => $data
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function update_user_stores(Request $request, $user_slack){
        
        if($user_slack == ''){
            return;
        }

        $selected_stores = explode(",", $request->user_stores);

        $user_data = UserModel::select('id')->where('slack', '=', $user_slack)->first();
        if(empty($user_data)){
            return;
        }

        $user_stores = UserStoreModel::where('user_id', '=', $user_data->id)
        ->pluck('store_id')
        ->toArray();
        (count($user_stores) >0 )?sort($user_stores):$user_stores;

        $selected_stores_array = StoreModel::whereIn('slack', $selected_stores)
        ->pluck('id')
        ->toArray();
        (count($selected_stores_array) >0 )?sort($selected_stores_array):$selected_stores_array;

        if($user_stores != $selected_stores_array){

            $user_stores_array = [];
            foreach($selected_stores_array as $selected_stores_array_item){
                $user_stores_array[] = [
                    'user_id' => $user_data->id,
                    'store_id' => $selected_stores_array_item,
                    'created_by' => $request->logged_user_id,
                    "created_at"=> now(),
                    "updated_at"=> now()
                ];
            }

            UserStoreModel::where('user_id', $user_data->id)->delete();
            UserStoreModel::insert($user_stores_array);

        }
    }

    public function get_user_default_link($data, $type = 'user'){
        //Get the default link
        if ($type == 'user') {
            $default_link = '/';
        if ($data->role_id != 1) {
            $default_link = DB::table('user_menus')
            ->select('menus.id', 'menus.route')
            ->leftJoin('menus', function ($join) {
                $join->on('menus.id', '=', 'user_menus.menu_id');
                $join->where('menus.status', '=', 1);
            })
            ->where('user_menus.user_id', $data->id)
            ->whereRaw("menus.route IS NOT NULL and menus.route !='' ")
            ->orderBy('sort_order', 'ASC')
            ->orderBy('menus.parent', 'ASC')
            ->get()
            ->first();
        }else{
            $default_link = DB::table('menus')
            ->select('menus.id', 'menus.route')
            ->where("menus.status", '=', 1)
            ->whereRaw("menus.route IS NOT NULL and menus.route !='' ")
            ->orderBy('sort_order', 'ASC')
            ->orderBy('menus.parent', 'ASC')
            ->get()
            ->first();
        }
        return $default_link;
    }elseif ($type == 'customer') {
        $default_link = '/';
        if ($data->role_id != 1) {
            $default_link = DB::table('customer_menus')
            ->select('menus.id', 'menus.route')
            ->leftJoin('menus', function ($join) {
                $join->on('menus.id', '=', 'customer_menus.menu_id');
                $join->where('menus.status', '=', 1);
            })
            ->where('customer_menus.customer_id', $data->id)
            ->whereRaw("menus.route IS NOT NULL and menus.route !='' ")
            ->orderBy('sort_order', 'ASC')
            ->orderBy('menus.parent', 'ASC')
            ->get()
            ->first();
        }else{
            $default_link = DB::table('menus')
            ->select('menus.id', 'menus.route')
            ->where("menus.status", '=', 1)
            ->whereRaw("menus.route IS NOT NULL and menus.route !='' ")
            ->orderBy('sort_order', 'ASC')
            ->orderBy('menus.parent', 'ASC')
            ->get()
            ->first();
        }
        return $default_link;
    }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slack
     * @return \Illuminate\Http\Response
     */
    public function update_profile_store(Request $request)
    {   
        try {
            $validator = Validator::make($request->all(), [
                'store' => $this->get_validation_rules("slack", true),
            ]);
            $validation_status = $validator->fails();
            if($validation_status){
                throw new Exception($validator->errors());
            }

            $store_slack    = $request->store;
            $user_slack     = $request->logged_user_slack;

            if(empty($user_slack)){
                throw new Exception("Invalid request", 400);
            }

            $user_data = UserModel::select('*')->where('slack', '=', $user_slack)->active()->first();
            if(empty($user_data)){
                throw new Exception("Invalid request", 400);
            }

            $store_data = StoreModel::select('stores.id','store_code', 'name', 'address')
            ->where('slack', '=', trim($store_slack))
            ->active()
            ->first();

            $user_stores = UserStoreModel::where('user_id', '=', $user_data->id)
            ->pluck('store_id')
            ->toArray();
            (count($user_stores) >0 )?sort($user_stores):$user_stores;

            if(!in_array($store_data->id, $user_stores) && $request->logged_user_role_id != 1){
                throw new Exception("Invalid request", 400);
            }

            $user = [        
                "store_id" => $store_data->id,
            ];

            $data = UserModel::where('slack', $user_slack)
            ->update($user);

            $first_link = $this->get_user_default_link($user_data);
            $default_link = (!empty($first_link))?route($first_link->route):"/";

            return response()->json($this->generate_response(
                array(
                    "message" => "User store updated successfully", 
                    "data"    => $data,
                    "link"    => $default_link
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function forgot_password(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'email' => $this->get_validation_rules("email", true),
            ]);
            $validation_status = $validator->fails();
            if($validation_status){
                throw new Exception($validator->errors());
            }

            $email = $request->email;
            $reset_tries = 0;

            $user_data = UserModel::select('id', 'slack', 'email', 'password_reset_max_tries', 'password_reset_last_tried_on')->where('email', $email)->first();
            if (!$user_data) {
                throw new Exception("There is no user with email: ".$email);
            }

            if($user_data->password_reset_last_tried_on != ""){
                $current_date = date("Y-m-d");
                $last_tried_date = date("Y-m-d",strtotime($user_data->password_reset_last_tried_on));

                if($last_tried_date == $current_date && $user_data->password_reset_max_tries >= 3){
                    throw new Exception("You have already tried 3 times today. Please contact administrator for password reset.", 400);
                }
                
                if( $last_tried_date == $current_date && $user_data->password_reset_max_tries < 3){
                    $reset_tries = $user_data->password_reset_max_tries+1;
                }else if($last_tried_date != $current_date){
                    $reset_tries = $reset_tries+1;
                }
            }else{
                $reset_tries = $reset_tries+1;
            }

            $password_token = Str::random(50);

            $email_setting = SettingEmailModel::select('*')->active()->first();

            if (!$email_setting) {
                throw new Exception("Email setting not configured. Please contact administrator for password reset.");
            }   

            DB::beginTransaction();

            Mail::to($user_data->email)->send(new ForgotPassword(['user_slack' => $user_data->slack, 'password_reset_token' => $password_token]));

            $password_array = [        
                "password_reset_token" => $password_token,
                "password_reset_max_tries" => $reset_tries,
                "password_reset_last_tried_on" => now()
            ];

            $data = UserModel::where('id',$user_data->id)
            ->update($password_array);

            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "Password reset email sent", 
                    "data"    => $data
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function reset_password(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'new_password' => $this->get_validation_rules("new_password", true),
                'new_password_confirmation' => $this->get_validation_rules("password", true),
            ]);
            $validation_status = $validator->fails();
            if($validation_status){
                throw new Exception($validator->errors());
            }

            $user_slack = $request->user_slack;
            $password_reset_token = $request->password_reset_token;

            if(empty($user_slack) || empty($password_reset_token)){
                throw new Exception("Invalid request", 400);
            }

            $user_data = UserModel::select('slack')->where([
                ['slack', '=', $user_slack],
                ['password_reset_token', '=', $password_reset_token],
            ])->first();
            if (!$user_data) {
                throw new Exception("Invalid request");
            }

            $new_password_hashed_password = Hash::make($request->new_password);
            $new_password_confirmation_hashed_password = Hash::make($request->new_password_confirmation);

            //check hashed password matches
            if (Hash::check($request->new_password_confirmation, $new_password_hashed_password) == false) {
                throw new Exception("Passwords doesn't match");
            }

            $user = array(
                "password" => $new_password_hashed_password,
                "init_password" => null,
                "password_reset_token" => null,
                "password_reset_max_tries" => null,
                "password_reset_last_tried_on" => null,
            );

            $data = UserModel::where('slack',$user_data->slack)
            ->update($user);

            return response()->json($this->generate_response(
                array(
                    "message" => "Password updated successfully", 
                    "data"    => $data
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function validate_request($request)
    {
        $validator = Validator::make($request->all(), [
            'email'     => $this->get_validation_rules("email", true),
            'fullname' => $this->get_validation_rules("fullname", true),
            'phone'  => $this->get_validation_rules("phone", true),
            'role'  => $this->get_validation_rules("role", true),
            'status'  => $this->get_validation_rules("status", true),
        ]);
        $validation_status = $validator->fails();
        if($validation_status){
            throw new Exception($validator->errors());
        }
    }

    public function reset_user_password(Request $request, $slack){
        try {
            
            if($request->is_super_admin == false){
                throw new Exception("Invalid request", 400);
            }

            //check user role
            $user_role = UserModel::select('role_id')->where('slack', '=', $slack)->first();
            if($user_role->role_id == 1){
                throw new Exception("Invalid request", 400);
            }

            DB::beginTransaction();

            $password = Str::random(10);
            $new_hashed_password = Hash::make($password);

            $user = array(
                "password" => $new_hashed_password,
                "init_password" => null,
            );

            $data = UserModel::where('slack', $slack)
            ->update($user);

            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "User password reset successfully", 
                    "data"    => ['secret' => $password]
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function remove_expired_session($slack, $type = 'user')
    {
        if ($type == 'user') {
            $detail = UserModel::where('slack', $slack)->first();
            $id = $detail->id;
            $token_column = 'user_id';
        } elseif ($type == 'customer') {
            $detail = CustomerModel::where('slack', $slack)->first();
            $id = $detail->id;
            $token_column = 'customer_id';
        } else {
            throw new Exception("Invalid type provided");
        }

        $tokens = UserTokenModel::select('session_id')->where($token_column, $id)->get();

        if (count($tokens) > 0) {
            foreach ($tokens as $token) {
                $session_data = DB::table('sessions')->select('last_activity')->where('id', $token->session_id)->first();
                if ($session_data) {
                    $last_activity = $session_data->last_activity;
                    $current_time_stamp = time();
                    $days_difference = round(abs($current_time_stamp - $last_activity) / 60 / 60 / 24, 2);
                    if ($days_difference >= 2) {
                        UserTokenModel::where('session_id', $token->session_id)->delete();
                        DB::table('sessions')->where('id', '=', $token->session_id)->delete();
                    }
                }
            }
        }
    }

    public function filter_users(Request $request){
        try{

            $keyword = $request->keyword;

            $user_list = UserModel::select("*")
            ->where('user_code', 'like', $keyword.'%')
            ->orWhere('fullname', 'like', $keyword.'%')
            ->orWhere('email', 'like', $keyword.'%')
            ->orWhere('phone', 'like', $keyword.'%')
            ->limit(25)
            ->get();
            
            $users = UserResource::collection($user_list);
           
            return response()->json($this->generate_response(
                array(
                    "message" => "Users filtered successfully", 
                    "data" => $users
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function update_profile_language(Request $request)
    {   
        try {
            $validator = Validator::make($request->all(), [
                'lang_code' => $this->get_validation_rules("string", true),
            ]);
            $validation_status = $validator->fails();
            if($validation_status){
                throw new Exception($validator->errors());
            }

            $lang_code    = $request->lang_code;
            $user_slack     = $request->logged_user_slack;

            if(empty($user_slack)){
                throw new Exception("Invalid request", 400);
            }

            $language_data = LanguageModel::select('id')->where('language_constant', '=', $lang_code)->active()->first();
            if(empty($language_data)){
                throw new Exception("Invalid request", 400);
            }

            $user = [        
                "language_id" => $language_data->id,
            ];

            $data = UserModel::where('slack', $user_slack)
            ->update($user);

            return response()->json($this->generate_response(
                array(
                    "message" => "User language updated successfully", 
                    "data"    => $data,
                ), 'SUCCESS'
            ));

        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function load_user_list(Request $request)
    {
        try {
            $keywords = $request->keywords;
            $role_slack = $request->role;
            $waiter = $request->waiter;

            $role_data = RoleModel::where('slack', '=', $role_slack)->first();

            $user_list = UserModel::select('*')
            ->when($keywords, function ($query, $keywords) {
                $query->where(function($query) use ($keywords){
                    $query->where('fullname', 'like', $keywords.'%')
                    ->orWhere('email', 'like', $keywords.'%')
                    ->orWhere('phone', 'like', $keywords.'%')
                    ->orWhere('user_code', 'like', $keywords.'%');
                });
            })
            ->when(($role_slack != ''), function ($query, $role_slack) use ($role_data){
                $query->where('role_id', '=', $role_data->id);
            })
            ->when(($waiter == true), function ($query){
                $query->hideSuperAdminRole();
            })
            ->active()
            ->get();
            
            $users = UserResource::collection($user_list);

            return response()->json($this->generate_response(
                array(
                    "message" => "Users loaded successfully", 
                    "data"    => $users
                ), 'SUCCESS'
            ));
            
        }catch(Exception $e){
            return response()->json($this->generate_response(
                array(
                    "message" => $e->getMessage(),
                    "status_code" => $e->getCode()
                )
            ));
        }
    }

    public function generate_access_token($data, $type = 'user') {
        // Generate access token based on type
        if ($type == 'user') {
            $encode_array = array(
                "user_id" => $data->id,  // Use $data instead of $user_data
                "user_slack" => $data->slack  // Use $data instead of $user_data
            );
            $access_token = $this->jwt_encode($encode_array);
            $this->remove_expired_session($data->slack, 'user');
            $this->set_user_session($data, $access_token);
            $session_id = request()->session()->getId();
            $user_token_array = [
                'user_id' => $data->id,  // Use $data instead of $user_data
                'access_token' => $access_token,
                'session_id' => $session_id
            ];
            UserTokenModel::create($user_token_array)->id;
          
            return $access_token;
        } elseif ($type == 'customer') {
            $encode_array = array(
                "customer_id" => $data->id,  // Use $data instead of $customer_data
                "customer_slack" => $data->slack  // Use $data instead of $customer_data
            );
            $access_token = $this->jwt_encode($encode_array);
            $this->remove_expired_session($data->slack, 'customer');
            $this->set_customer_session($data, $access_token);
            $session_id = request()->session()->getId();
            $user_token_array = [
                'customer_id' => $data->id,  // Use $data instead of $customer_data
                'access_token' => $access_token,
                'session_id' => $session_id
            ];
            UserTokenModel::create($user_token_array)->id;
            return $access_token;
        }
    }
    

}
