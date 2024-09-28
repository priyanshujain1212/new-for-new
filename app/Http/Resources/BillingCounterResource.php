<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BillingCounterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $request->request->add(['blocking_recurring_data_in_transaction' => true]);
        
        return [
            'slack' => $this->slack,
              // 'store_id' => new StoreResource($this->id),
            'billing_counter_code' => $this->billing_counter_code,
            'particular_to' => $this->particular_to,
            'counter_name' => $this->counter_name,
            'description' => $this->description,
           'status' => new MasterStatusResource($this->status_data),
            'detail_link' => (check_access(['A_DETAIL_PARTICULAR'], true))?route('billing_counter', ['slack' => $this->slack]):'',
            'created_at_label' => $this->parseDate($this->created_at),
            'updated_at_label' => $this->parseDate($this->updated_at),
            'created_by' => new UserResource($this->createdUser),
            'updated_by' => new UserResource($this->updatedUser)
        ];
    }
}
