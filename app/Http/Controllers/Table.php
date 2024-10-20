<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


use App\Http\Resources\TableResource;
use App\Http\Resources\UserResource;

class Table extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
      
    }

    //This is the function that loads the add/edit page
    public function add_table(Request $request, $slack = null){
      
    }

    //This is the function that loads the detail page
    public function detail($slack){
       
    }
}
