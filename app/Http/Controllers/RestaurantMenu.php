<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;

use App\Http\Resources\Collections\ProductCollection;

class RestaurantMenu extends Controller
{

    public function index(Request $request){
     
    }

    public function our_menu(Request $request, $store_slack, $table_slack = null){
    
    }
}