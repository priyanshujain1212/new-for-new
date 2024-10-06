<?php

namespace App\Http\Controllers\API;

use Exception;
use Validator;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Config;

use App\Http\Resources\StoreResource;
use App\Models\Store as StoreModel;
use App\Models\UserStore as UserStoreModel;
use App\Models\StorePayment as StorePaymentModel;
use App\Models\Taxcode as TaxcodeModel;
use App\Models\Discountcode as DiscountcodeModel;
use App\Models\Country as CountryModel;
use App\Models\Customer as CustomerModel;
use App\Models\Account as AccountModel;
use App\Models\MasterAccountType as MasterAccountTypeModel;
use App\Models\MasterBillingType as MasterBillingTypeModel;
use App\Models\Role as RoleModel;
use App\Models\Language as LanguageModel;

use App\Http\Resources\Collections\StoreCollection;

class Store extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $data['action_key'] = 'A_VIEW_STORE_LISTING';
    
            // Check if the user has access to the store listing
            if (check_access([$data['action_key']], true) == false) {
                return $this->no_access_response_for_listing_table();
            }
    
            $item_array = [];
            $draw = $request->draw;
            $limit = $request->length;
            $offset = $request->start;
            $order_by = $request->order[0]["column"];
            $order_direction = $request->order[0]["dir"];
            $order_by_column = $request->columns[$order_by]['name'];
            $filter_string = $request->search['value'];
            $filter_columns = array_filter(data_get($request->columns, '*.name'));
    
            $logged_user_code = $request->logged_user_code;
            $logged_customer_id = $request->logged_customer_id;
            $store_ids = [];
    
            // Super Admin (SA) case
            if ($logged_user_code === 'SA') {
                $query = StoreModel::select('stores.*', 'master_status.label as status_label', 'master_status.color as status_color', 'user_created.fullname')
                    ->take($limit)
                    ->skip($offset)
                    ->statusJoin()
                    ->createdUser()
                    ->orderBy($order_by_column ?? 'created_at', $order_direction ?? 'desc')
                    ->when($filter_string, function ($query) use ($filter_string, $filter_columns) {
                        $query->where(function ($query) use ($filter_string, $filter_columns) {
                            foreach ($filter_columns as $filter_column) {
                                $query->orWhere($filter_column, 'like', '%' . $filter_string . '%');
                            }
                        });
                    })
                    ->get();
            }
    
            // Handle customer case using store_slack from CustomerModel
            elseif ($logged_customer_id) {
                $customer_slack = $request->logged_customer_slack;
                $store_id = CustomerModel::where('slack', $customer_slack)
                    ->pluck('store_id')
                    ->toArray();
    
                if (!empty($store_id)) {
                    $query = StoreModel::select('stores.*', 'master_status.label as status_label', 'master_status.color as status_color', 'user_created.fullname')
                        ->whereIn('stores.id', $store_id)
                        ->take($limit)
                        ->skip($offset)
                        ->statusJoin()
                        ->createdUser()
                        ->orderBy($order_by_column ?? 'created_at', $order_direction ?? 'desc')
                        ->when($filter_string, function ($query) use ($filter_string, $filter_columns) {
                            $query->where(function ($query) use ($filter_string, $filter_columns) {
                                foreach ($filter_columns as $filter_column) {
                                    $query->orWhere($filter_column, 'like', '%' . $filter_string . '%');
                                }
                            });
                        })
                        ->get();
                } else {
                    $query = collect(); // No stores found
                }
            }
    
            // Handle logged user case
            elseif ($request->logged_user_id != null) {
                $user_id = $request->logged_user_id;
                $store_ids = UserStoreModel::where('user_id', $user_id)
                    ->pluck('store_id')
                    ->toArray();
    
                if (!empty($store_ids)) {
                    $query = StoreModel::select('stores.*', 'master_status.label as status_label', 'master_status.color as status_color', 'user_created.fullname')
                        ->whereIn('stores.id', $store_ids)
                        ->take($limit)
                        ->skip($offset)
                        ->statusJoin()
                        ->createdUser()
                        ->orderBy($order_by_column ?? 'created_at', $order_direction ?? 'desc')
                        ->when($filter_string, function ($query) use ($filter_string, $filter_columns) {
                            $query->where(function ($query) use ($filter_string, $filter_columns) {
                                foreach ($filter_columns as $filter_column) {
                                    $query->orWhere($filter_column, 'like', '%' . $filter_string . '%');
                                }
                            });
                        })
                        ->get();
                } else {
                    $query = collect(); // No stores found
                }
            }
    
            // Debugging purposes
            // dd($query);
    
            // Get total count for pagination
            $total_count = !empty($store_ids)
                ? StoreModel::whereIn('id', $store_ids)->count()
                : StoreModel::count(); // Count for SA or no restrictions
    
            // Format the data for response
            $stores = StoreResource::collection($query);
            foreach ($stores as $key => $store) {
                $store = $store->toArray($request);
    
                $item_array[$key][] = $store['store_code'];
                $item_array[$key][] = $store['name'];
                $item_array[$key][] = isset($store['status']['label']) 
                    ? view('common.status', ['status_data' => ['label' => $store['status']['label'], "color" => $store['status']['color']]])->render() 
                    : '-';
                $item_array[$key][] = $store['created_at_label'];
                $item_array[$key][] = $store['updated_at_label'];
                $item_array[$key][] = isset($store['created_by']['fullname']) 
                    ? $store['created_by']['fullname'] 
                    : '-';
                $item_array[$key][] = view('store.layouts.store_actions', ['store' => $store])->render();
            }
    
            // Return the response as JSON
            return response()->json([
                'draw' => $draw,
                'recordsTotal' => $total_count,
                'recordsFiltered' => $total_count,
                'data' => $item_array,
            ]);
        } catch (Exception $e) {
            return response()->json($this->generate_response([
                'message' => $e->getMessage(),
                'status_code' => $e->getCode(),
            ]));
        }
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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

            if(!check_access(['A_ADD_STORE'], true)){
                throw new Exception("Invalid request", 400);
            }

            $this->validate_request($request);

            $store_data_exists = StoreModel::select('id')
            ->where('store_code', '=', trim($request->store_code))
            ->first();
            if (!empty($store_data_exists)) {
                throw new Exception("Store code already assigned to a store", 400);
            }

            $country_data = CountryModel::select('id')
            ->where('id', '=', trim($request->country))
            ->active()
            ->first();
            if (empty($country_data)) {
                throw new Exception("Invalid country selected", 400);
            }

            $currency_data = CountryModel::select('currency_code', 'currency_name')
            ->where('currency_code', '=', trim($request->currency_code))
            ->active()
            ->first();
            if (empty($currency_data)) {
                throw new Exception("Invalid currency selected", 400);
            }

            $store_data_exists = StoreModel::select('id')
            ->where('store_code', '=', trim($request->store_code))
            ->first();
            if (!empty($store_data_exists)) {
                throw new Exception("Store code already assigned to a store", 400);
            }
            DB::beginTransaction();
            
            $store = [
                "slack" => $this->generate_slack("stores"),
                "store_code" =>  mt_rand(100,999),
                //  strtoupper(trim($request->store_code)),
                "name" => $request->name,
                "tax_number" => $request->tax_number,
                "address" => $request->address,
                "country_id" => $request->country,
                "pincode" => $request->pincode,
                "primary_contact" => $request->primary_contact,
                "secondary_contact" => $request->secondary_contact,
                "primary_email" => $request->primary_email,
                // "secondary_email" => $request->secondary_email,
                "invoice_type" => $request->invoice_type,
                "currency_code" => $currency_data->currency_code,
                "currency_name" => $currency_data->currency_name,
                "status" => $request->status,
                "online_payment" => $request->online_payment,
                "created_by" => $request->logged_user_id
            ];
            
            $store_id = StoreModel::create($store)->id;

            $this->create_default_business_account($request, $store_id);

            $store_slack = StoreModel::where('id', $store_id)->value('slack'); 

            $payment_types = explode("," , $request->payment_types);

            if(count($payment_types)>0){
                $payment_types = array_unique($payment_types);
                foreach ($payment_types as $payment_type){
                    $store_payment = [
                        'store_id' => $store_id,
                        'store_slack' => $store_slack,
                        'payment' => $payment_type,
                    ];
                    StorePaymentModel::create($store_payment);
                }
            }


            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => 'Store updated successfully', 
                    "data"    => $store['slack']
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

            if(!check_access(['A_DETAIL_STORE'], true)){
                throw new Exception("Invalid request", 400);
            }

            $item = StoreModel::select('*')
            ->where('slack', $slack)
            ->first();

            $item_data = new StoreResource($item);

            return response()->json($this->generate_response(
                array(
                    "message" => "Store loaded successfully", 
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

            if(!check_access(['A_VIEW_STORE_LISTING'], true)){
                throw new Exception("Invalid request", 400);
            }

            $list = new StoreCollection(StoreModel::select('*')
            ->orderBy('created_at', 'desc')->paginate());

            return response()->json($this->generate_response(
                array(
                    "message" => "Stores loaded successfully", 
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
     * @param  int  $slack
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slack)
    {
        try {

            if(!check_access(['A_EDIT_STORE'], true)){
                throw new Exception("Invalid request", 400);
            }

            $this->validate_request($request);

            $store_data_exists = StoreModel::select('id')
            ->where([
                ['slack', '!=', $slack],
                ['store_code', '=', trim($request->store_code)]
            ])
            ->first();
            if (!empty($store_data_exists)) {
                throw new Exception("Store code already assigned to a store", 400);
            }

            $tax_code_id = NULL;
            if(isset($request->tax_code)){
                $taxcode_data = TaxcodeModel::select('id')
                ->where('slack', '=', trim($request->tax_code))
                ->active()
                ->first();
                if (empty($taxcode_data)) {
                    throw new Exception("Tax code not found or inactive in the system", 400);
                }
                $tax_code_id = $taxcode_data->id;
            }
            
            $discount_code_id = NULL;
            if(isset($request->discount_code)){
                $discount_code_data = DiscountcodeModel::select('id')
                ->where('slack', '=', trim($request->discount_code))
                ->active()
                ->first();
                if (empty($discount_code_data)) {
                    throw new Exception("Discount code not found or inactive in the system", 400);
                }
                $discount_code_id = $discount_code_data->id;
            }

            $store_code_data = StoreModel::select('store_code')
            ->where('slack','=',$slack)
            ->first();
            $store_code = $store_code_data->store_code;

            $country_data = CountryModel::select('id')
            ->where('id', '=', trim($request->country))
            ->active()
            ->first();
            if (empty($country_data)) {
                throw new Exception("Invalid country selected", 400);
            }

            $currency_data = CountryModel::select('currency_code', 'currency_name')
            ->where('currency_code', '=', trim($request->currency_code))
            ->active()
            ->first();
            if (empty($currency_data)) {
                throw new Exception("Invalid currency selected", 400);
            }

            if($request->status == 0){
                $active_store_exists = StoreModel::select('id')
                ->where([
                    ['slack', '!=', $slack],
                    ['status', '=', 1]
                ])
                ->count();
                if ($active_store_exists == 0) {
                    throw new Exception("Atleast one store needs to be active in the system", 400);
                }
            }

            if($request->restaurant_waiter_role != '' && $request->restaurant_chef_role != ''){
                if($request->restaurant_waiter_role == $request->restaurant_chef_role){
                    throw new Exception("Chef and Waiter roles cannot be the same", 400);
                }
            }

            $billing_type = MasterBillingTypeModel::select('id', 'label')
            ->active()
            ->where('billing_type_constant', '=', trim($request->restaurant_billing_type))
            ->first();

            $waiter_role = RoleModel::select('id', 'slack', 'role_code', 'label')->resolveSuperAdminRole()->active()->where('slack' , '=', trim($request->restaurant_waiter_role))->first();

            $chef_role = RoleModel::select('id', 'slack', 'role_code', 'label')->resolveSuperAdminRole()->active()->where('slack' , '=', trim($request->restaurant_chef_role))->first();

            $language = LanguageModel::select("id")->where('language_constant', '=', trim($request->menu_language))->active()->first();

            DB::beginTransaction();

            $store = [
                "store_code" => $store_code,
                "name" => $request->name,
                "tax_number" => $request->tax_number,
                "tax_code_id" => $tax_code_id,
                "discount_code_id" => $discount_code_id,
                "address" => $request->address,
                "country_id" => $request->country,
                "pincode" => $request->pincode,
                "primary_contact" => $request->primary_contact,
                "secondary_contact" => $request->secondary_contact,
                "primary_email" => $request->primary_email,
               "invoice_type" => $request->invoice_type,
                "currency_code" => $currency_data->currency_code,
                "currency_name" => $currency_data->currency_name,
                "menu_language_id" => (isset($language) && !empty($language))?$language->id:'',
                "status" => $request->status,
                "online_payment" => $request->online_payment,
                "updated_by" => $request->logged_user_id
            ];

            $action_response = StoreModel::where('slack', $slack)
            ->update($store);

            $store = StoreModel::select('id')
            ->where('slack', '=', $slack)
            ->first();
    
            if (!$store) {
                throw new \Exception('Store not found.');
            }
        
            $store_id = $store->id;

            $current_payment_types = StorePaymentModel::where('store_slack', '=' , $slack)->pluck('payment')->toArray();
            (count($current_payment_types)>0)?sort($current_payment_types):$current_payment_types;

            $payment_types = explode("," , $request->payment_types);
            (count($payment_types)>0)?sort($payment_types):$payment_types;

            if(count($payment_types)>0 && ($current_payment_types != $payment_types)){
                StorePaymentModel::where('store_slack', '=' , $slack)->delete();

                $payment_types = array_unique($payment_types);

                foreach ($payment_types as $payment_type){
                     $store_payment = [
                        'store_id' => $store_id,
                        'store_slack' => $slack,
                        'payment' => $payment_type,
                    ];
                    StorePaymentModel::create($store_payment);
                }
            }
            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "Store updated successfully", 
                    "data"    => $store
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

    public function create_default_business_account($request, $store_id){
        
        $account_exists = AccountModel::select('id')
        ->where('store_id', '=', trim($store_id))
        ->first();
        
        if (!empty($account_exists)) {
            return;   
        }

        $account_type_data = MasterAccountTypeModel::select('id')
        ->where('account_type_constant', '=', 'BASIC')
        ->first();

        $account = [
            "slack" => $this->generate_slack("accounts"),
            "store_id" => $store_id,
            "account_code" => Str::random(6),
            "account_type" => $account_type_data->id,
            "label" => 'Default Sales Account',
            "description" => 'Default Sales Account',
            "initial_balance" => 0,
            "pos_default" => 1,
            "status" => 1,
            "created_by" => $request->logged_user_id
        ];
        
        $account_id = AccountModel::create($account)->id;
        
        $code_start_config = Config::get('constants.unique_code_start.account');
        $code_start = (isset($code_start_config))?$code_start_config:100;
        
        $account_code = [
            "account_code" => ($code_start+$account_id)
        ];

        AccountModel::withoutGlobalScopes()->where('id', $account_id)
        ->update($account_code);
    }

    public function validate_request($request)
    {
        $validator = Validator::make($request->all(), [
            'name' => $this->get_validation_rules("name_label", true),
            'address' => $this->get_validation_rules("text", true),
            'pincode' => $this->get_validation_rules("pincode", false),
            'store_code' => $this->get_validation_rules("codes", false),
            'tax_number' => $this->get_validation_rules("name_label", false),
            'primary_contact' => $this->get_validation_rules("phone", false),
            'secondary_contact' => $this->get_validation_rules("phone", false),
            'primary_email' => $this->get_validation_rules("email", false),
            'secondary_email' => $this->get_validation_rules("email", false),
            'invoice_type' => 'max:50|required',
            'status' => $this->get_validation_rules("status", true),
        ]);
        $validation_status = $validator->fails();
        if($validation_status){
            throw new Exception($validator->errors());
        }
    }
}
