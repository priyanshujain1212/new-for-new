<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

use App\Models\MasterStatus;
use App\Models\Store as StoreModel;
use App\Models\BillingCounter as BillingCounterModel;
use App\Models\StorePayment as StorePaymentModel;
use App\Models\ChallanOrder as ChallanOrderModel;
use App\Models\Country as CountryModel;
use App\Models\MasterStatus as MasterStatusModel;
use App\Models\MasterTaxOption as MasterTaxOptionModel;

use App\Http\Resources\ChallanOrderResource;

use Mpdf\Mpdf;

class Challan extends Controller
{

    public function loadlisting(Request $request)
    {
        try {
            $data['menu_key'] = 'MM_CHALLANS';
            $data['action_key'] = 'A_VIEW_CHALLAN_LISTING';
            if (check_access(array($data['menu_key'],$data['action_key']), true) == false) {
                return $this->no_access_response_for_listing_table();
            }
    
            // $draw = $request->draw;
            // $limit = $request->length;
            // $offset = $request->start;
            // $order_by = $request->order[0]["column"] ?? 0;
            // $order_direction = $request->order[0]["dir"] ?? 'desc';
            // $order_by_column = $request->columns[$order_by]['name'] ?? 'created_at';
            // $filter_string = $request->search['value'] ?? '';
            // $filter_columns = array_filter(data_get($request->columns, '*.name'));
    
            $logged_user_code = $request->logged_user_code;
            $logged_supplier_id = $request->logged_supplier_id;
    
            // Initialize query variable
            
    
            // Super Admin (SA) case
            if ($logged_user_code === 'SA') {
                $query = ChallanOrderModel::select('challan_orders.*', 'master_status.label as status_label', 'master_status.color as status_color', 'user_created.fullname')
                // ->take($limit)
                // ->skip($offset)
                ->statusJoin()
                ->createdUser()
    
                // ->when($order_by_column, function ($query, $order_by_column) use ($order_direction) {
                //     $query->orderBy($order_by_column, $order_direction);
                // }, function ($query) {
                //     $query->orderBy('created_at', 'desc');
                // })
    
                // ->when($filter_string, function ($query, $filter_string) use ($filter_columns) {
                //     $query->where(function ($query) use ($filter_string, $filter_columns){
                //         foreach($filter_columns as $filter_column){
                //             $query->orWhere($filter_column, 'like', '%'.$filter_string.'%');
                //         }
                //     });
                // })

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

                $data['order_data'] = $challan_orders;
                $data['total_data']= $total_count;
              
            return view('challan.challanslisting', $data);
        } catch (Exception $e) {
            return response()->json($this->generate_response([
                "message" => $e->getMessage(),
                "status_code" => $e->getCode()
            ]));
        }
    }
    


    //This is the function that loads the listing page
    public function index(Request $request){
        //check access
        $data['menu_key'] = 'MM_RASIDS_ORDERS';
        check_access(array($data['menu_key']));

        return view('challan.challans', $data);
    }

    //This is the function that loads the add/edit page
    public function addchallan(Request $request, $slack = null){
        //check access
        $data['menu_key'] = 'MM_ORDERS';
        $data['sub_menu_key'] = 'SM_PURCHASE_ORDERS';
        $data['action_key'] = ($slack == null)?'A_ADD_RASID':'A_EDIT_RASID';
        check_access(array($data['action_key']));

        $store_slack = $request->logged_user_store_slack;

        $currency_data = StoreModel::where('slack', '=', $store_slack)
        ->pluck('currency_code')->toArray();

        // dd($currency_data);
        $data['currency_list'] = CountryModel::where('currency_code', '=', $currency_data)
        ->pluck('currency_symbol')->toArray();


        // dd($data['currency_list']);

        $data['payment_types'] = StorePaymentModel::where('store_slack', $request->logged_user_store_slack)->pluck('payment')->toArray();

        $data['particulars'] = BillingCounterModel::where([
            ['store_slack', '=', $request->logged_user_store_slack],
            ['particular_to', '=', 'CHALLAN']
        ])->pluck('counter_name')->toArray();

        $data['tax_options'] = MasterTaxOptionModel::select('tax_option_constant', 'label')
        ->active()
        ->get();

        $data['challan_order_data'] = null;
        if(isset($slack)){
            
            $purchase_order = ChallanOrderModel::where('slack', '=', $slack)->first();
            if (empty($purchase_order)) {
                abort(404);
            }
           
            $challan_order_data = new ChallanOrderResource($purchase_order);
            $data['challan_order_data'] = $challan_order_data;
        }
        return view('challan.addchallan', $data);
    }

    //This is the function that loads the detail page
    public function detail($slack){
        $data['menu_key'] = 'MM_RASID_ORDERS';
        $data['action_key'] = 'A_DETAIL_RASID';
        check_access([$data['action_key']]);

        $purchase_order = ChallanOrderModel::where('slack', '=', $slack)->first();
    
        if (empty($purchase_order)) {
            abort(404);
        }

        $challan_order_data = new ChallanOrderResource($purchase_order);
        
        $data['challan_order_data'] = $challan_order_data;
        
        $po_statuses = [];
        
        if(check_access(['A_EDIT_STATUS_RASID'] ,true)){
            $po_statuses = MasterStatusModel::select('label','value_constant')->where([
                ['value_constant', '!=', strtoupper('CREATED')],
                ['key', '=', 'PURCHASE_ORDER_STATUS'],
                ['status', '=', '1']
            ])->active()->orderBy('value', 'asc')->get();
        }

        $data['po_statuses'] = $po_statuses;

        $data['delete_po_access'] = check_access(['A_DELETE_RASID'] ,true);

        $data['create_invoice_from_po_access'] = check_access(['A_CREATE_INVOICE_FROM_PO'] ,true);

        return view('challan.challan_detail', $data);
    }

    //This is the function that loads the print purchase order page
    public function print_purchase_order(Request $request, $slack){
        $data['menu_key'] = 'MM_ORDERS';
        $data['sub_menu_key'] = 'SM_PURCHASE_ORDERS';
        check_access([$data['sub_menu_key']]);

        $purchase_order = ChallanOrderModel::where('slack', '=', $slack)->first();
        
        if (empty($purchase_order)) {
            abort(404);
        }

        $challan_order_data = new ChallanOrderResource($purchase_order);

        $print_logo_path = config("app.invoice_print_logo");
       
        $print_data = view('purchase_order.invoice.po_print', ['data' => json_encode($challan_order_data), 'logo_path' => $print_logo_path])->render();

        $mpdf_config = [
            'mode'          => 'utf-8',
            'format'        => 'A4',
            'orientation'   => 'P',
            'margin_left'   => 7,
            'margin_right'  => 7,
            'margin_top'    => 7,
            'margin_bottom' => 7,
            'tempDir' => storage_path()."/pdf_temp" 
        ];

        $stylesheet = File::get(public_path('css/purchase_order_print_invoice.css'));
        $mpdf = new Mpdf($mpdf_config);
        $mpdf->SetDisplayMode('real');
        $mpdf->WriteHTML($stylesheet,\Mpdf\HTMLParserMode::HEADER_CSS);
        $mpdf->SetHTMLFooter('<div class="footer">Page: {PAGENO}/{nb}</div>');
        $mpdf->WriteHTML($print_data);
        header('Content-Type: application/pdf');
        $mpdf->Output('purchase_order_'.$challan_order_data['po_number'].'.pdf', \Mpdf\Output\Destination::INLINE);
        //return view('purchase_order.invoice.po_print', ['data' => json_encode($challan_order_data)]);
    }
}
