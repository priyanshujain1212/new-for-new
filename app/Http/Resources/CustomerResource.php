<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $profile_image = config('constants.upload.profile.default');
        if($this->profile_image != ''){
            $profile_image = config('constants.upload.profile.view_path').'medium_'.$this->profile_image;
        }

        return [
            'slack' => $this->slack,
            'type' => $this->customer_type,
            'name' => $this->name,
            'customer_code' => $this->customer_code,
            'email' => $this->email,
            'role' => new RoleResource($this->role),
            'phone' => $this->phone,
            'address' => $this->address,
            'dob' => $this->parseDateOnly($this->dob),
            'profile_images' => $this->profile_image,
            'profile_image' => $profile_image,
            'dob_raw' => $this->dob,
            'status' => new MasterStatusResource($this->status_data),
            'detail_link' => (check_access(['A_DETAIL_CUSTOMER'], true))?route('customer', ['slack' => $this->slack]):'',
            'created_at_label' => $this->parseDate($this->created_at),
            'updated_at_label' => $this->parseDate($this->updated_at),
            'created_by' => new UserResource($this->createdUser),
            'updated_by' => new UserResource($this->updatedUser)
        ];
    }
}
