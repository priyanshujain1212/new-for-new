<?php

namespace App\Http\Controllers;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



use App\Http\Resources\BusinessRegisterResource;

use Mpdf\Mpdf;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config;
use Carbon\Carbon;

class BusinessRegister extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
       
    }

    //This is the function that loads the add/edit page
    public function add_business_register(){
      
    }

    //This is the function that loads the detail page
    public function detail($slack){
      
    }

    public function get_free_billing_counters(){
       
    }

    public function print_register_report(Request $request, $slack = '', $type = 'INLINE'){
       
        
    }

    public function business_register_report_data($business_register_slack){
        
       
    }

    public function register_summary(Request $request, $slack){
     
    }
}
