<?php

namespace App\Http\Controllers;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;


use App\Http\Resources\StockReturnResource;

use Mpdf\Mpdf;

class StockReturn extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
       
    }

    //This is the function that loads the add/edit page
    public function add_stock_return($slack = null){
        }

    //This is the function that loads the detail page
    public function detail($slack){
       
    }

    //This is the function that loads the print purchase order page
    public function print_stock_return(Request $request, $slack){
       
    }

}
