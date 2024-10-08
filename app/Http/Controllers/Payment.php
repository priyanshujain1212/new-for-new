<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;


use App\Models\MasterStatus;
use App\Models\Store as StoreModel;
use App\Models\BillingCounter as BillingCounterModel;
use App\Models\StorePayment as StorePaymentModel;
use App\Models\PurchaseOrder as PurchaseOrderModel;
use App\Models\Country as CountryModel;
use App\Models\Customer as CustomerModel;
use App\Models\MasterStatus as MasterStatusModel;
use App\Models\MasterTaxOption as MasterTaxOptionModel;
use Ixudra\Curl\Facades\Curl;
use App\Http\Resources\PurchaseOrderResource;

use Mpdf\Mpdf;

class Payment extends Controller
{
    public function phonepe(Request $request, $slack)
    {
        // Retrieve order details from your database
    $purchaseOrder = PurchaseOrderModel::where('slack', $slack)->firstOrFail();
    $totalAmount = $purchaseOrder->total_order_amount * 100; // Amount in paise
    $customer_code = $purchaseOrder->customer_code;
    $customer_number = CustomerModel::select('phone')
        ->where('customer_code', '=', $customer_code)
        ->first();

    $payload = [
        "merchantId" => "PGTESTPAYUAT86",
        "merchantTransactionId" => uniqid(), // Unique transaction ID
        "merchantUserId" => $customer_code,
        "amount" => $totalAmount,
        "redirectUrl" => route('response', ['slack' => $slack, 'customer_code' => $customer_code]),
        "redirectMode" => 'POST',
        "callbackUrl" => route('response', ['slack' => $slack, 'customer_code' => $customer_code]),
        "mobileNumber" => $customer_number->phone,
        "paymentInstrument" => [
            "type" => "PAY_PAGE"
        ]
    ];

    $encode = base64_encode(json_encode($payload));
    $saltkey = '96434309-7796-489d-8924-ab56988a6076';
    $saltIndex = 1;

    $string = $encode . '/pg/v1/pay' . $saltkey;
    $sha256 = hash('sha256', $string);
    $finalXHeader = $sha256 . '###' . $saltIndex;
   
    $response = null;

        $response = Curl::to('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay')
            ->withHeader('content-Type:application/json')
            ->withHeader('X-VERIFY:' . $finalXHeader)
            ->withData(json_encode(['request' => $encode]))
            ->post();

        $returnData = json_decode($response);

        // Check if the response is successful
        if (isset($returnData->success) && $returnData->success) {
            // Check if redirect info exists
            if (isset($returnData->data->instrumentResponse->redirectInfo->url)) {
                return redirect()->to($returnData->data->instrumentResponse->redirectInfo->url);
                dd($returnData);
            } else {
                // Handle missing redirect URL
                return redirect()->route('response')->with('error', 'Redirect URL not found.');
            }
        } elseif (isset($returnData->code) && $returnData->code == "TOO_MANY_REQUESTS") {
            $retryCount++;
            sleep(1); // Wait for 1 second before retrying
        } else {
            // Handle other errors
            return redirect()->route('response')->with('error', 'Payment initiation failed. Please try again.');
        
    }

    // If max retries reached
    return redirect()->route('response')->with('error', 'Max retries reached. Please try again later.');
}
 
public function response(Request $request)
{

    $input = $request->all();

    $saltkey = '96434309-7796-489d-8924-ab56988a6076'; // Use your actual salt key
    $saltIndex = 1;
   
    $finalXheader = hash('sha256','/pg/v1/status/'.$input['merchantId'].'/'.$input['transactionId'].$saltkey).'###'.$saltIndex;

    $response = Curl::to('https://api-preprod.phonepe.com/apis/merchant-simulator/pg/v1/status/'.$input['merchantId'].'/'.$input['transactionId'])
                ->withHeader('content-type:application/json')
                ->withHeader('accept:application/json')
                ->withHeader('X-VERIFY:'.$finalXheader)
                ->withHeader('x-MERCHANT-ID'.$input['transactionId'])
                ->get();

                $returnData = json_decode($response);

$transactionId = $returnData->data->transactionId;
$type = $returnData->data->paymentInstrument->type;

    // Now process the payment details
    if ($returnData->code === "PAYMENT_SUCCESS") {
        $slack = $request->get('slack');
        $customer_code = $request->get('customer_code');

        $purchaseOrder = PurchaseOrderModel::where('slack', $slack)
        ->where('customer_code', $input['customer_code'])
        ->first();

        if ($purchaseOrder) {
       
        $purchaseOrder->update([
        'status' => 'completed',  
        'update_stock' => 0,
        'transaction_id' => $transactionId,
        'transaction_date' => now(),
        'payment_type' => $type, // Assuming you want to add this
        ]);

        return redirect()->route('rasids');

        // Redirect to the success page after 1 second
    
    } else {
        // Handle other payment status codes
        // return redirect()->route('some.route')->with('error', 'Payment failed: ' . $input['code']);
    }
    }}

}
  