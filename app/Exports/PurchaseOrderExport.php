<?php

namespace App\Exports;

use App\Models\PurchaseOrder;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\Exportable;

use App\Http\Resources\PurchaseOrderResource;

use Carbon\Carbon;

class PurchaseOrderExport implements FromCollection, WithMapping, WithHeadings
{
    use Exportable;
    
    public function __construct(array $data = [])
    {
        $this->data = $data;
    }

    public function collection()
    {
        $from_created_date = $this->data['from_created_date'];
        $to_created_date = $this->data['to_created_date'];
        $status = $this->data['status'];
        

        $query = PurchaseOrder::query();

        if($from_created_date != ''){
            $from_created_date = strtotime($from_created_date);
            $from_created_date = date(config('app.sql_date_format'), $from_created_date);
            $from_created_date = $from_created_date . ' 00:00:00';
            $query = $query->where('addrasid.created_at', '>=', $from_created_date);
        }
        if($to_created_date != ''){
            $to_created_date = strtotime($to_created_date);
            $to_created_date = date(config('app.sql_date_format'), $to_created_date);
            $to_created_date = $to_created_date . ' 23:59:59';
            $query = $query->where('addrasid.created_at', '<=', $to_created_date);
        }
        if(isset($status)){
            $query = $query->where('addrasid.status', $status);
        }

        $addrasid = $query->get();

        return $addrasid;
    }

    public function headings(): array
    {
        return [
            'PO NUMBER',
            'PO REFERENCE',
            'ORDER DATE',
            'ORDER DUE DATE',
            'CUSTOMER CODE',
            'CUSTOMER NAME',
            'CUSTOMER ADDRESS',
            'CURRENCY NAME',
            'CURRENCY CODE',
            'TOTAL ORDER AMOUNT',
            'STATUS',
            'CREATED AT',
            'CREATED BY',
            'UPDATED AT',
            'UPDATED BY'
        ];
    }

    public function map($order): array
    {
        $order = collect(new PurchaseOrderResource($order));
        return [
            (isset($order['po_number']))?$order['po_number']:'',
            (isset($order['po_reference']))?$order['po_reference']:'',
            (isset($order['order_date']))?$order['order_date']:'',
            (isset($order['order_due_date']))?$order['order_due_date']:'',
            (isset($order['customer_code']))?$order['customer_code']:'',
            (isset($order['customer_name']))?$order['customer_name']:'',
            (isset($order['customer_address']))?$order['customer_address']:'',
            (isset($order['currency_name']))?$order['currency_name']:'',
            (isset($order['currency_code']))?$order['currency_code']:'',
            (isset($order['total_order_amount']))?$order['total_order_amount']:'',
            (isset($order['status']['label']))?$order['status']['label']:'',
            (isset($order['created_at_label']))?$order['created_at_label']:'',
            (isset($order['created_by']['fullname']))?$order['created_by']['fullname']:'',
            (isset($order['updated_at_label']))?$order['updated_at_label']:'',
            (isset($order['updated_by']['fullname']))?$order['updated_by']['fullname']:''
        ];
    }
}
