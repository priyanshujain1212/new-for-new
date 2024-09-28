<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StorePayment extends Model
{
    protected $table = 'store_payment';
    protected $hidden = ['id'];
    protected $fillable = ['store_id', 'payment', 'store_slack'];

    public function storeById(){
        return $this->belongsTo('App\Models\Store', 'id', 'store_id');
    }

    public function storeBySlack(){
        return $this->belongsTo('App\Models\Store', 'store_slack', 'store_slack');
    }

    public function scopeResolveSuperAdminRole($query){
        $query->where('store_payment.id', '!=', 1);
    }

    public function scopeSortLabelAsc($query){
        return $query->orderBy('store_payment.payment', 'asc');
    }
}