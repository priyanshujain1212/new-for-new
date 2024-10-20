<?php

namespace App\Http\Controllers;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

use App\Http\Resources\QuotationResource;

use Mpdf\Mpdf;

class Quotation extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
      
    }

    //This is the function that loads the add/edit page
    public function add_quotation($slack = null){
     
    }

    //This is the function that loads the detail page
    public function detail($slack){
    
    }

    //This is the function that loads the print purchase order page
    public function print_quotation(Request $request, $slack){
       
    }
    
}
