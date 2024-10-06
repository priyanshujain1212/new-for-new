<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ChallanOrderProduct extends Model
{
    protected $table = 'challan_order_products';
    protected $hidden = ['id', 'challan_order_id'];
    protected $fillable = ['slack', 'challan_order_id', 'product_id', 'product_slack', 'product_code', 'name', 'total_amount', 'stock_update', 'status', 'created_by', 'updated_by', 'created_at', 'updated_at'];

    public function scopeProduct($query){
        return $query->leftJoin('particulars', function ($join) {
            $join->on('particulars.id', '=', 'challan_order_products.product_id');
        });
    }

    public function scopeActive($query){
        return $query->where('challan_order_products.status', 1);
    }

    /* For view files */
    
    public function createdUser(){
        return $this->hasOne('App\Models\User', 'id', 'created_by')->select(['slack', 'fullname', 'email', 'user_code']);
    }

    public function updatedUser(){
        return $this->hasOne('App\Models\User', 'id', 'updated_by')->select(['slack', 'fullname', 'email', 'user_code']);
    }

    public function status_data(){
        return $this->hasOne('App\Models\MasterStatus', 'value', 'status')->where('key', 'PURCHASE_ORDER_PRODUCT_STATUS');
    }

    public function parseDate($date){
        return ($date != null)?Carbon::parse($date)->format(config("app.date_time_format")):null;
    }
}
