<?php

namespace App\Http\Controllers;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


use App\Http\Resources\ProductResource;
use App\Http\Resources\StockTransferResource;
use App\Http\Resources\StockTransferProductResource;

class Product extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
    
    }

    //This is the function that loads the add/edit page
    public function add_product($slack = null){

    }

    //This is the function that loads the detail page
    public function detail($slack){
       
    }

    //This is the function that loads the barcode generate page
    public function generate_barcode(){
          
    }
}
