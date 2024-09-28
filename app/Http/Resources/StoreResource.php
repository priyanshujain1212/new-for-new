<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\MasterStatusResource;

class StoreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        
        return [
            'slack' => $this->slack,
            'store_code' => $this->store_code,
            'store_id' => $this->id,
            'name' => $this->name,
            'tax_number' => $this->tax_number,
            'address' => $this->address,
            'pincode' => $this->pincode,
            'primary_contact' => $this->primary_contact,
            'secondary_contact' => $this->secondary_contact,
            'primary_email' => $this->primary_email,
            'country' => new CountryResource($this->country),
            'tax_code' => new TaxcodeResource($this->tax_code),
            'status' => new MasterStatusResource($this->status_data),
            'online_payment' => $this->onlinePaymentStatus ? new MasterStatusResource($this->onlinePaymentStatus) : null,
            'detail_link' => (check_access(['A_DETAIL_STORE'], true))?route('store', ['slack' => $this->slack]):'',
            'invoice_type' => $this->invoice_print_type,
            'currency_code' => $this->currency_code,
            'currency_name' => $this->currency_name,
            'menu_language' => new LanguageResource($this->menu_language),
            'created_at_label' => $this->parseDate($this->created_at),
            'updated_at_label' => $this->parseDate($this->updated_at),
            'created_by' => new UserResource($this->createdUser),
            'updated_by' => new UserResource($this->updatedUser)
        ];
    }
}
