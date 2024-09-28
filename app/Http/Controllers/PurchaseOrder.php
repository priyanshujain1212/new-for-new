<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

use App\Models\MasterStatus;
use App\Models\Store as StoreModel;
use App\Models\BillingCounter as BillingCounterModel;
use App\Models\StorePayment as StorePaymentModel;
use App\Models\PurchaseOrder as PurchaseOrderModel;
use App\Models\Country as CountryModel;
use App\Models\MasterStatus as MasterStatusModel;
use App\Models\MasterTaxOption as MasterTaxOptionModel;

use App\Http\Resources\PurchaseOrderResource;

use Mpdf\Mpdf;

class PurchaseOrder extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
        //check access
        $data['menu_key'] = 'MM_RASIDS_ORDERS';
        check_access(array($data['menu_key']));
        // dd($data['menu_key'] );
        return view('purchase_order.rasids', $data);
    }

    //This is the function that loads the add/edit page
    public function addrasid(Request $request, $slack = null){
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
            ['particular_to', '=', 'RASID']
        ])->pluck('counter_name')->toArray();
        
        $data['tax_options'] = MasterTaxOptionModel::select('tax_option_constant', 'label')
        ->active()
        ->get();

        $data['purchase_order_data'] = null;
        if(isset($slack)){
            
            $purchase_order = PurchaseOrderModel::where('slack', '=', $slack)->first();
            if (empty($purchase_order)) {
                abort(404);
            }
            
            $purchase_order_data = new PurchaseOrderResource($purchase_order);
            $data['purchase_order_data'] = $purchase_order_data;
        }
        // dd($data['purchase_order_data']);
        return view('purchase_order.addrasid', $data);
    }

    //This is the function that loads the detail page
    public function detail($slack){
        $data['menu_key'] = 'MM_RASID_ORDERS';
        $data['action_key'] = 'A_DETAIL_RASID';
        check_access([$data['action_key']]);

        $purchase_order = PurchaseOrderModel::where('slack', '=', $slack)->first();
       
        if (empty($purchase_order)) {
            abort(404);
        }

        $purchase_order_data = new PurchaseOrderResource($purchase_order);
        
        $data['purchase_order_data'] = $purchase_order_data;
        
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

        return view('purchase_order.rasid_detail', $data);
    }

    //This is the function that loads the print purchase order page
    public function print_purchase_order(Request $request, $slack){
        $data['menu_key'] = 'MM_ORDERS';
        $data['sub_menu_key'] = 'SM_PURCHASE_ORDERS';
        check_access([$data['sub_menu_key']]);

        $purchase_order = PurchaseOrderModel::where('slack', '=', $slack)->first();
        
        if (empty($purchase_order)) {
            abort(404);
        }

        $purchase_order_data = new PurchaseOrderResource($purchase_order);

        $print_logo_path = config("app.invoice_print_logo");
       
        $print_data = view('purchase_order.invoice.po_print', ['data' => json_encode($purchase_order_data), 'logo_path' => $print_logo_path])->render();

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
        $mpdf->Output('purchase_order_'.$purchase_order_data['po_number'].'.pdf', \Mpdf\Output\Destination::INLINE);
        //return view('purchase_order.invoice.po_print', ['data' => json_encode($purchase_order_data)]);
    }
}
