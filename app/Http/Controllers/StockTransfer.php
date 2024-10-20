<?php

namespace App\Http\Controllers;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\StockTransfer as StockTransferModel;
use App\Models\Store as StoreModel;
use App\Models\MasterStatus as MasterStatusModel;

use App\Http\Resources\StoreResource;
use App\Http\Resources\StockTransferResource;

class StockTransfer extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
        
    }

    //This is the function that loads the add/edit page
    public function add_stock_transfer($slack = null){
       
    }

    //This is the function that loads the detail page
    public function detail($slack){
       
    }

    //This is the function that loads the verify page
    public function verify_stock_transfer($slack){
        
        
    }
}
