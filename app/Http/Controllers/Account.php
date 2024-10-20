<?php

namespace App\Http\Controllers;

use App\Models\MasterStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Account as AccountModel;
use App\Models\MasterAccountType as MasterAccountTypeModel;

use App\Http\Resources\AccountResource;

class Account extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
        //check access
     
    }

    //This is the function that loads the add/edit page
    public function add_account($slack = null){
       

      
    }

    //This is the function that loads the detail page
    public function detail($slack){
        
    }
}
