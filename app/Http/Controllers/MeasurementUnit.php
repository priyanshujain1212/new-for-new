<?php

namespace App\Http\Controllers;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



use App\Http\Resources\MeasurementUnitResource;

class MeasurementUnit extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
     
    }

    //This is the function that loads the add/edit page
    public function add_measurement_unit($slack = null){
       
    }

    //This is the function that loads the detail page
    public function detail($slack){
       
    }
}
