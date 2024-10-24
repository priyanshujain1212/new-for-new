<?php

namespace App\Http\Controllers\API;

use Exception;
use Validator;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Config;
use App\Models\Scopes\StoreScope;

use Illuminate\Support\Facades\Schema;

use App\Http\Resources\ChallanOrderResource;

use App\Models\ChallanOrder as ChallanOrderModel;
use App\Models\Store as StoreModel;
use App\Models\BillingCounter as BillingCounterModel;
use App\Models\ChallanOrderProduct as ChallanOrderProductModel;
use App\Models\Supplier as SupplierModel;
use App\Models\UserStore as UserStoreModel;
use App\Models\Product as ProductModel;
use App\Models\Country as CountryModel;
use App\Models\MasterStatus as MasterStatusModel;
use App\Models\MasterTaxOption as MasterTaxOptionModel;

use App\Http\Resources\Collections\ChallanOrderCollection;
use Illuminate\Support\Facades\Log;

use App\Http\Controllers\API\Invoice as InvoiceAPI;

class ChallanOrder extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $data['action_key'] = 'A_VIEW_CHALLAN_LISTING';
            if (check_access(array($data['action_key']), true) == false) {
                return $this->no_access_response_for_listing_table();
            }
    
            $draw = $request->draw;
            $limit = $request->length;
            $offset = $request->start;
            $order_by = $request->order[0]["column"] ?? 0;
            $order_direction = $request->order[0]["dir"] ?? 'desc';
            $order_by_column = $request->columns[$order_by]['name'] ?? 'created_at';
            $filter_string = $request->search['value'] ?? '';
            $filter_columns = array_filter(data_get($request->columns, '*.name'));
    
            $logged_user_code = $request->logged_user_code;
            $logged_supplier_id = $request->logged_supplier_id;
    
            // Initialize query variable
            
    
            // Super Admin (SA) case
            if ($logged_user_code === 'SA') {
                $query = ChallanOrderModel::select('challan_orders.*', 'master_status.label as status_label', 'master_status.color as status_color', 'user_created.fullname')
                ->take($limit)
                ->skip($offset)
                ->statusJoin()
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

                ->get();
            }
            // Handle customer case using store_slack from SupplierModel
            elseif ($request->logged_supplier_id !=null) {
                $store_id = (array) $request->logged_user_store_id;
                $po_number = ChallanOrderModel::whereIn('store_id', $store_id)
                                ->pluck('po_number')
                                ->toArray();
    
                   
                if (!empty($po_number)) {
                    $query = ChallanOrderModel::select('challan_orders.*', 'master_status.label as status_label', 'master_status.color as status_color', 'user_created.fullname')
                        ->whereIn('challan_orders.po_number', $po_number)
                        ->take($limit)
                ->skip($offset)
                ->statusJoin()
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

                ->get();
                }
            }
            // Handle logged user case
            elseif ($request->logged_user_id != null) {
                $store_id = (array) $request->logged_user_store_id;
                $po_number = ChallanOrderModel::whereIn('store_id', $store_id)->pluck('po_number')->toArray();
            
                if (!empty($po_number)) {
                    $query = ChallanOrderModel::select('challan_orders.*', 'master_status.label as status_label', 'master_status.color as status_color', 'user_created.fullname')
                        ->whereIn('challan_orders.po_number', $po_number)
                        ->take($limit)
                ->skip($offset)
                ->statusJoin()
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

                ->get();
                }
            }
   
            // Check if $query is empty before passing to resource
            if ($query->isEmpty()) {
                $challan_orders = collect(); // Handle no data case
            } else {
                $challan_orders = ChallanOrderResource::collection($query);
            }


            $po_statuses = [];
        
            if(check_access(['A_EDIT_STATUS_RASID'] ,true)){
                $po_statuses = MasterStatusModel::select('label','value_constant')->where([
                    ['value_constant', '!=', strtoupper('CREATED')],
                    ['key', '=', 'PURCHASE_ORDER_STATUS'],
                    ['status', '=', '1']
                ])->active()->orderBy('value', 'asc')->get();
            }
    


            // Total count (for pagination)
            $total_count = ChallanOrderModel::count();
    
         // Prepare response data
            $item_array = [];

         foreach ($challan_orders as $key => $challan_order) {
        $challan_order = $challan_order->toArray($request);

        $item_array[$key][] = $challan_order['po_number'];
        $item_array[$key][] = ($challan_order['supplier_name'] != '') ? $challan_order['supplier_name'] : '-';
        $item_array[$key][] = ($challan_order['order_date'] != '') ? $challan_order['order_date'] : '-';
        $item_array[$key][] = $challan_order['total_order_amount'];

        // Conditionally determine status
        $status_color = $challan_order['update_stock'] == 1 ? 'label red-label' : 'label green-label';
        $status_label = $challan_order['update_stock'] == 1 ? 'Due' : 'Cleared';

        $item_array[$key][] = view('common.status', [
            'status_data' => [
                'label' => $status_label,
                'color' => $status_color
            ]
        ])->render();

        $item_array[$key][] = (isset($challan_order['created_by']) && isset($challan_order['created_by']['fullname'])) ? $challan_order['created_by']['fullname'] : '-';
        $item_array[$key][] = view('challan.layouts.challan_order_actions', [
            'challan_order' => $challan_order,
            'po_statuses' => $po_statuses
        ])->render();
            
    }


// Continue to prepare the response
$response = [
    'draw' => $draw,
    'recordsTotal' => $total_count,
    'recordsFiltered' => $total_count,
    'data' => $item_array
];

    
            return response()->json($response);
        } catch (Exception $e) {
            return response()->json($this->generate_response([
                "message" => $e->getMessage(),
                "status_code" => $e->getCode()
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
        Log::info('Incoming Request:', $request->all());
        try {

            if(!check_access(['A_ADD_RASID'], true)){
                throw new Exception("Invalid request", 400);
            }

            $this->validate_request($request);

            DB::beginTransaction();

            $po_data = $this->form_po_array($request);
            
            if(!empty($po_data['po_data'])){
                
                $po = $po_data['po_data'];
               
                $po['slack'] = $this->generate_slack("challan_orders");
                $po['created_at'] = now();
                $po['created_by'] = $request->logged_user_id;

                $po_id = ChallanOrderModel::create($po)->id;
            }
            
            
            if(!empty($po_data['po_products'])){
                
                $po_products = $po_data['po_products'];

                array_walk($po_products, function (&$item, $key) use ($po_id, $request){
                    
                    $item['slack'] = $this->generate_slack("challan_order_products");
                    $item['challan_order_id'] = $po_id; 
                    $item['created_at'] = now();
                    $item['created_by'] = $request->logged_user_id;

                    ChallanOrderProductModel::insert($item);
                  
                });
            }
            
            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "Challan order created successfully", 
                    "data"    => $po['slack']
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

            if(!check_access(['A_DETAIL_RASID'], true)){
                throw new Exception("Invalid request", 400);
            }

            $item = ChallanOrderModel::select('*')
            ->where('slack', $slack)
            ->first();

            $item_data = new ChallanOrderResource($item);

            return response()->json($this->generate_response(
                array(
                    "message" => "Challan order loaded successfully", 
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

            if(!check_access(['A_VIEW_RASID_LISTING'], true)){
                throw new Exception("Invalid request", 400);
            }

            $list = new ChallanOrderCollection(ChallanOrderModel::select('*')
            ->orderBy('created_at', 'desc')->paginate());

            return response()->json($this->generate_response(
                array(
                    "message" => "Challan order loaded successfully", 
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

            if(!check_access(['A_EDIT_RASID'], true)){
                throw new Exception("Invalid request", 400);
            }

            $this->validate_request($request);

            $po_details = ChallanOrderModel::where('slack', $slack)->first();

            $po_status = MasterStatusModel::select('value_constant')->where([
                ['value', '=', $po_details->status],
                ['key', '=', 'PURCHASE_ORDER_STATUS'],
                ['status', '=', '1']
            ])->active()->first();

            DB::beginTransaction();

            $request->po_slack = $slack;

            $po_data = $this->form_po_array($request);
            
            if(!empty($po_data['po_data'])){
                
                $po = $po_data['po_data'];
            
                $po['updated_at'] = now();
                $po['updated_by'] = $request->logged_user_id;

                $action_response = ChallanOrderModel::where('slack', $slack)
                ->update($po);
            }
            
            $po_id = $po_details->id;

            if(!empty($po_data['po_products'])){
                
                if(count($po_data['po_products']) > 0){
                    ChallanOrderProductModel::where('challan_order_id', $po_id)->delete();
                }

                $po_products = $po_data['po_products'];

                array_walk($po_products, function (&$item, $key) use ($po_id, $request){

                    $item['slack'] = $this->generate_slack("challan_order_products");
                    $item['challan_order_id'] = $po_id;
                    $item['updated_at'] = now();
                    $item['updated_by'] = $request->logged_user_id;

                    ChallanOrderProductModel::insert($item);

                });

                $this->update_stock_from_po($request, $slack, $po_status->value_constant, true);
            }
            
            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "Challan order updated successfully", 
                    "data"    => $po_details['slack']
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
    public function destroy($slack)
    {
        try{

            if(!check_access(['A_DELETE_RASID'], true)){
                throw new Exception("Invalid request", 400);
            }
          

            $po_detail = ChallanOrderModel::select('id')->where('slack', $slack)->get();
            if (empty($po_detail)) {
                throw new Exception("Invalid purchase order provided", 400);
            }
            $po_id = $po_detail->id;

            DB::beginTransaction();

            ChallanOrderProductModel::where('challan_order_id', $po_id)->delete();
            ChallanOrderModel::where('id', $po_id)->delete();

            DB::commit();

            $forward_link = route('challan_orders');

            return response()->json($this->generate_response(
                array(
                    "message" => "Challan order deleted successfully", 
                    "data" => $slack,
                    "link" => $forward_link
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

    public function update_po_status(Request $request, $slack)
    {
        try {

            if(!check_access(['A_EDIT_STATUS_RASID'], true)){
                throw new Exception("Invalid request", 400);
            }

            $status_constant = $request->status;
            
            $po_details = ChallanOrderModel::where('slack', $slack)->first();
            if(empty($po_details)){
                throw new Exception("Invalid Challan Order selected");
            }

            $po_status = MasterStatusModel::select('value')->where([
                ['value_constant', '=', strtoupper($status_constant)],
                ['key', '=', 'PURCHASE_ORDER_STATUS'],
                ['status', '=', '1']
            ])->active()->first();
            if(empty($po_status)){
                throw new Exception("Invalid status provided");
            }

            DB::beginTransaction();
            
            $po = [];
            $po['status'] = $po_status->value;
            $po['update_stock'] = $po_status->value;
            $po['updated_at'] = now();
            $po['updated_by'] = $request->logged_user_id;

            $action_response = ChallanOrderModel::where('slack', $slack)
            ->update($po);

            $this->update_stock_from_po($request, $slack, strtoupper($status_constant));

            DB::commit();

            return response()->json($this->generate_response(
                array(
                    "message" => "Challan order status changed successfully", 
                    "data"    => $po_details->slack
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

    public function form_po_array($request){
      
        $po_slack = $request->po_slack;

        $products = $request->particulars;

        if( empty((array) $products) ){
            throw new Exception("Product list cannot be empty");
        }

        $supplier_data = SupplierModel::select('id', 'name', 'supplier_code',  'address',)
        ->where('supplier_code', '=',$request->supplier_code)
        ->active()
        ->first();
        if (empty($supplier_data)) {
            throw new Exception("Invalid supplier selected", 400);
        }

        // $po_number_details = ChallanOrderModel::where([
        //     ['po_reference', '=', trim($request->po_reference)],
        //     ['status', '!=', 0],
        // ])
        // ->when($po_slack, function ($query, $po_slack) {
        //     return $query->where('slack', '!=', $po_slack);
        // })->first();
        // if(!empty($po_number_details)){
        //     throw new Exception("Challan order reference no ".trim($request->po_reference)." is already used");
        // }

        $po_ref_details = ChallanOrderModel::where([
            ['po_number', '=', trim($request->po_number)],
            ['status', '!=', 0],
        ])->when($po_slack, function ($query, $po_slack) {
            return $query->where('slack', '!=', $po_slack);
        })->first();
        if(!empty($po_ref_details)){
            throw new Exception("Challan order no ".trim($request->po_number)." is already used");
        }

        $currency_code = $request->logged_user_store_currency;

        $currency_data = CountryModel::select('currency_code', 'currency_name')
        ->where('currency_code', '=', $currency_code)
        ->active()
        ->first();
        if (empty($currency_data)) {
            throw new Exception("Invalid currency selected", 400);
        }

        $selected_particulars = $request->particulars;
       
       

        foreach ($selected_particulars as $selected_particular) {
            $product_name = $selected_particular['name'] ?? null;
            $item_total = $selected_particular['amount'] ?? null;
        
           
            if ($product_name === null || $item_total === null) {
                throw new Exception("Invalid data in selected_particulars array", 400);
            }
            $product_data = BillingCounterModel::select('slack', 'billing_counter_code', 'store_slack', 'counter_name')
                ->where('counter_name', '=', $product_name)
                ->first();
            if (empty($product_data)) {
                throw new Exception("Particular " . $product_name . " is not currently available", 400);
            }
            
            $po_products[] = [
                'challan_order_id' => 0,
                'product_slack' => $product_data->slack,
                'product_code' => $product_data->product_code,
                'name' => $product_name,
                'total_amount' => $item_total,
            ];
        }
         $total_order_amount = $request->grand_total;

        $challan_order = [
            "store_id" => $request->logged_user_store_id,
            "po_number" => $request->po_number,
            "po_reference" => $request->po_reference,
            "order_date" => $request->order_date,
            "payment_date" => $request->payment_date,
            'supplier_id' => $supplier_data->id,
            'supplier_code' => $supplier_data->supplier_code,
            'supplier_name' => $supplier_data->name,
            'supplier_address' => $supplier_data->address,
            "currency_name" => $currency_data->currency_name,
            "currency_code" => $currency_data->currency_code,
            "update_stock" => $request->update_stock,
            "terms" => $request->terms,
            "status" => $request->update_stock,
            "total_order_amount" => $total_order_amount,
            "payment_type" => $request->payment_type,
            ];

        return [
            'po_data' => $challan_order,
            'po_products' => $po_products
        ];
    }


    public function filter_challan_orders(Request $request){
        try{

            $keyword = $request->keyword;

            $po_list = ChallanOrderModel::select("*")
            ->where('po_number', 'like', $keyword.'%')
            ->orWhere('po_reference', 'like', $keyword.'%')
            ->orWhere('supplier_code', 'like', $keyword.'%')
            ->orWhere('supplier_name', 'like', $keyword.'%')
            ->limit(25)
            ->get();
            
            $pos = ChallanOrderResource::collection($po_list);
           
            return response()->json($this->generate_response(
                array(
                    "message" => "Challan orders filtered successfully", 
                    "data" => $pos
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
        $request->merge(['products' => json_decode($request->selected_particulars, true)]);

        $validator = Validator::make($request->all(), [
            'po_number' => 'max:50|required',
            'order_date' => 'date|nullable',
            'terms' => $this->get_validation_rules("text", false),
            'products.*.name' => $this->get_validation_rules("name_label", true),
          
        ]);
        $validation_status = $validator->fails();
        if($validation_status){
            throw new Exception($validator->errors());
        }
    }

    public function update_stock_from_po(Request $request, $slack, $po_status, $po_update = false){
        
        $po_data = ChallanOrderModel::select('*')->where('slack', $slack)->first();
        if (empty($po_data)) {
            throw new Exception("Invalid purchase order provided", 400);
        }

        if($po_data->update_stock == 0){
            return false;
        }

        $challan_order_data = new ChallanOrderResource($po_data);

        $products = $challan_order_data->products;

        if(count($products)>0){
            foreach($products as $product){

                if($product->product_id != '' && $product->quantity > 0){

                    if($po_update == false){
                        if($product->stock_update == 0 && $po_status == 'CLOSED'){
                            $product_data = ProductModel::find($product->product_id);
                            $product_data->increment('quantity', $product->quantity);

                            $item = [];
                            $item['stock_update'] = 1;
                            $item['updated_at'] = now();
                            $item['updated_by'] = $request->logged_user_id;
                            ChallanOrderProductModel::where('id', $product->id)
                            ->update($item);
                        }

                        if($product->stock_update == 1 && $po_status != 'CLOSED'){
                            $product_data = ProductModel::find($product->product_id);
                            $product_data->decrement('quantity', $product->quantity);

                            $item = [];
                            $item['stock_update'] = 0;
                            $item['updated_at'] = now();
                            $item['updated_by'] = $request->logged_user_id;
                            ChallanOrderProductModel::where('id', $product->id)
                            ->update($item);
                        }
                    }
                    if($po_update == true){

                        if($product->stock_update == 1 && $po_status == 'CLOSED'){
                            $product_data = ProductModel::find($product->product_id);
                            $product_data->decrement('quantity', $product->quantity);

                            $item = [];
                            $item['stock_update'] = 0;
                            $item['updated_at'] = now();
                            $item['updated_by'] = $request->logged_user_id;
                            ChallanOrderProductModel::where('id', $product->id)
                            ->update($item);
                        }

                        if($product->stock_update == 0 && $po_status == 'CLOSED'){
                            $product_data = ProductModel::find($product->product_id);
                            $product_data->increment('quantity', $product->quantity);

                            $item = [];
                            $item['stock_update'] = 1;
                            $item['updated_at'] = now();
                            $item['updated_by'] = $request->logged_user_id;
                            ChallanOrderProductModel::where('id', $product->id)
                            ->update($item);
                        }
                    }
                }

            }
        }

    }

    public function generate_invoice_from_po(Request $request, $slack){
        try {
            $challan_order = ChallanOrderModel::where('slack', '=', $slack)->first()->makeVisible(['id']);
            
            $challan_order_id = $challan_order->id;
            
            if (empty($challan_order)) {
                throw new Exception("Unable to fetch purchase order details");
            }

            $challan_order_data = new ChallanOrderResource($challan_order);
            $challan_order_data_decoded = json_decode(json_encode($challan_order_data, true));
            
            $request->request->add([
                'parent_po_id' => $challan_order_id,
                'bill_to' => 'Customer',
                'php ' => $challan_order_data_decoded->customer->slack,
                'currency' => $challan_order_data_decoded->currency_code,
                'invoice_date' => $challan_order_data_decoded->order_date_raw,
                'invoice_reference' => 'FPO-'. strtoupper(Str::random(6)),
                'terms' => $challan_order_data_decoded->terms
            ]);

            $po_products = collect($challan_order_data_decoded->products);
            
            foreach ($po_products as $item) {

                $products[] =[
                    'slack' => $item->product_slack,
                    'name' => $item->name,
                    'amount' => $item->total_amount,
                ];
            };
           

            $request->request->add([
                'products' => json_encode($products)
            ]);
            
            $invoice_api = new InvoiceAPI();
            $response = $invoice_api->store($request);
            $response = $response->getData();
           
            if($response->status_code == 0 || $response->status_code == 400){
                throw new Exception($response->msg);
            }
           
            $invoice_link = route('invoice_detail', ['slack' => $response->data]);
            
            return response()->json($this->generate_response(
                array(
                    "message" => $response->msg, 
                    "data" => $response->data,
                    "link" => $invoice_link,
                    "new_tab" => true
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
}
