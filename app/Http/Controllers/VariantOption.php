<?php

namespace App\Http\Controllers;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\VariantOption as VariantOptionModel;

use App\Http\Resources\VariantOptionResource;

class VariantOption extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
    
    }

    //This is the function that loads the add/edit page
    public function add_variant_option($slack = null){
       
    }

    //This is the function that loads the detail page
    public function detail($slack){
      
    }
}
