<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChallanOrderResource extends JsonResource
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
            'order_due_date' => $this->parseDateOnly($this->order_due_date),
            'order_date_raw' => $this->order_date,
            'payment_date' => $this->parseDateOnly($this->payment_date),
            'payment_date_raw' => $this->payment_date,
            'order_due_date_raw' => $this->order_due_date,
            'supplier_code' => $this->supplier_code,
            'supplier_name' => $this->supplier_name,
            'supplier_address' => $this->supplier_address,
            'customer' => new CustomerResource($this->customer),
            'currency_name' => $this->currency_name,
            'currency_code' => $this->currency_code,
            'subtotal_excluding_tax' => $this->subtotal_excluding_tax,
            'total_discount_amount' => $this->total_discount_amount,
            'total_after_discount' => $this->total_after_discount,
            'payment_type' => $this->payment_type,
            'total_tax_amount' => $this->total_tax_amount,
            'shipping_charge' => $this->shipping_charge,
            'packing_charge' => $this->packing_charge,
            'total_order_amount' => $this->total_order_amount,
            'tax_option_data' => new MasterTaxOptionResource($this->tax_option_data),
            'update_stock' => $this->update_stock,
            'terms' => $this->terms,
            'products' => ChallanOrderProductResource::collection($this->products),
            'store' => new StoreResource($this->storeData),
            'status' => new MasterStatusResource($this->status_data),
            'detail_link' => (check_access(['A_DETAIL_RASID'], true))?route('challan_detail', ['slack' => $this->slack]):'',
            'invoices' => $invoices,
            'created_at_label' => $this->parseDate($this->created_at),
            'updated_at_label' => $this->parseDate($this->updated_at),
            'created_by' => new UserResource($this->createdUser),
            'updated_by' => new UserResource($this->updatedUser)
        ];
    }
}
