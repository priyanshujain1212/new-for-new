<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Http\Resources\SettingAppResource;
use App\Http\Resources\UserResource;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;


use Mpdf\Mpdf;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config;

use Razorpay\Api\Api;

class Order extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
      
    }

    //This is the function that loads the add/edit page
    public function add_order(Request $request, $slack = null){

    }

    //This is the function that loads the detail page
    public function detail($slack){
      
    }

    //This is the function that loads the print order page
    public function print_order(Request $request, $slack, $type = 'INLINE'){
       
    }

    public function print_kot(Request $request, $slack, $type = 'INLINE'){
     
    }

    public function get_order_data($slack){
 
    }

    public function payment_gateway($type, $slack){
      
    }

    public function get_order_data_public($slack){
     
    }

    public function detail_public_view($slack){
        
      
    }

    public function order_summary(Request $request, $slack){
      
    }

    public function digital_menu_orders(){
      
    }

    public function payment_gateway_public(Request $request, $type, $slack){

    }

    public function print_order_public(Request $request, $slack){
     
    }
}
