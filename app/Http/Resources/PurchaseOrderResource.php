<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $invoices = $this->invoices;
        foreach($invoices as $key => $invoice){
            $invoices[$key]['detail_link'] = (check_access(['A_DETAIL_INVOICE'], true))?route('invoice_detail', ['slack' => $invoice->slack]):'';
        }

        return [
            'slack' => $this->slack,
            'po_number' => $this->po_number,
            'po_reference' => $this->po_reference,
            'order_date' => $this->parseDateOnly($this->order_date),
            'order_date_raw' => $this->order_date,
            'customer_id' => $this->customer_id,
            'customer_code'=> $this->customer_code,
            'customer_name' => $this->customer_name,
            'customer_address' => $this->customer_address,
            'customer' => new CustomerResource($this->customer),
            'currency_name' => $this->currency_name,
            'currency_code' => $this->currency_code,
            'payment_type' => $this->payment_type,
            'transaction_id' => $this->transaction_id,
            'transaction_date' => $this->transaction_date,
            'total_order_amount' => $this->total_order_amount,
            'tax_option_data' => new MasterTaxOptionResource($this->tax_option_data),
            'update_stock' => $this->update_stock,
            'terms' => $this->terms,
            'products' => PurchaseOrderProductResource::collection($this->products),
            'store' => new StoreResource($this->storeData),
            'status' => new MasterStatusResource($this->status_data),
            'detail_link' => (check_access(['A_DETAIL_RASID'], true))?route('rasid_detail', ['slack' => $this->slack]):'',
            'created_at_label' => $this->parseDate($this->created_at),
            'updated_at_label' => $this->parseDate($this->updated_at),
            'created_by' => new UserResource($this->createdUser),
            'updated_by' => new UserResource($this->updatedUser)
        ];
    }
}
