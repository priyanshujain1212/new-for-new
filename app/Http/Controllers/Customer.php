<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role as RoleModel;
use App\Models\Customer as CustomerModel;
use App\Models\MasterStatus;

use App\Http\Resources\CustomerResource;

class Customer extends Controller
{
    //This is the function that loads the listing page
    public function index(Request $request){
        //check access
        $data['menu_key'] = 'MM_CUSTOMERS';
        check_access(array($data['menu_key']));
        
        return view('customer.customers', $data);
    }

    public function exportCustomers()
{
    // Get all customers from the database
    $customers = CustomerModel::select('name', 'role_id', 'email', 'phone', 'address', 'dob', 'status', 'store_id')->get();

    // Prepare the CSV file name
    $fileName = 'customer_format.csv';

    // Create a file pointer
    $handle = fopen('php://output', 'w');

    // Set the headers for the CSV file
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="' . $fileName . '"');

    // Add the CSV column headers
    fputcsv($handle, ['NAME*', 'ROLE_ID*', 'EMAIL*', 'PHONE*', 'ADDRESS*', 'DOB*', 'STATUS*', 'STORE_ID*']);

    // Loop through each customer and add to the CSV
    foreach ($customers as $customer) {
        fputcsv($handle, [
            $customer->name,
            $customer->role_id,
            $customer->email,
            $customer->phone,
            $customer->address,
            $customer->dob,
            $customer->status,
            $customer->store_id,
        ]);
    }

    // Close the file pointer
    fclose($handle);
    exit; // Terminate the script after downloading
}

    //This is the function that loads the add/edit page
    public function add_customer($slack = null){
        //check access
        $data['menu_key'] = 'MM_USER';
        $data['action_key'] = ($slack == null)?'A_ADD_CUSTOMER':'A_EDIT_CUSTOMER';
        check_access(array($data['action_key']));

        $data['statuses'] = MasterStatus::select('value', 'label')->filterByKey('CUSTOMER_STATUS')->active()->sortValueAsc()->get();
       
        $data['roles'] = RoleModel::select('slack', 'label')->resolveSuperAdminRole()->active()->sortLabelAsc()->get();

        $data['customer_data'] = null;
        if(isset($slack)){
            $customer = CustomerModel::where('customers.slack', $slack)
            ->first();

            if (empty($customer)) {
                abort(404);
            }
            $customer_data = new CustomerResource($customer);
            $data['customer_data'] = $customer_data;
        }

        return view('customer.add_customer', $data);
    }

    //This is the function that loads the detail page
    public function detail($slack){
        $data['menu_key'] = 'MM_USER';
        $data['action_key'] = 'A_DETAIL_CUSTOMER';
        check_access([$data['action_key']]);

        $customer = CustomerModel::where('slack', $slack)
        ->first();
        
        if (empty($customer)) {
            abort(404);
        }

        $customer_data = new CustomerResource($customer);
        
        $data['customer_data'] = $customer_data;

        return view('customer.customer_detail', $data);
    }
}
