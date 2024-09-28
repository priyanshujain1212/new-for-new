<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

use App\Models\Scopes\StoreScope;

class PurchaseOrder extends Model
{
    protected $table = 'purchase_orders';
    protected $hidden = ['id', 'store_id', 'customer_id'];
    protected $fillable = ['slack', 'store_id', 'po_number', 'transaction_id','transaction_date', 'po_reference', 'order_date', 'customer_id', 'customer_code', 'customer_name', 'customer_address', 'currency_name', 'currency_code', 'total_order_amount', 'terms', 'update_stock', 'status', 'created_by', 'updated_by', 'created_at', 'updated_at','payment_type'];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new StoreScope);
    }

    public function scopeActive($query){
        return $query->where('status', 1);
    }

    public function scopeClosed($query){
        return $query->where('status', 4);
    }

    public function scopeStatusJoin($query){
        return $query->leftJoin('master_status', function ($join) {
            $join->on('master_status.value', '=', 'purchase_orders.status');
            $join->where('master_status.key', '=', 'PURCHASE_ORDER_STATUS');
        });
    }
    public function scopeCustomer($query){
        return $query->leftJoin('customers AS customer', function ($join) {
            $join->on('customer.id', '=', 'purchase_orders.customer_id')
                 ->whereColumn('customer.customer_code', 'purchase_orders.customer_code');
        });
    }
    

    public function scopeCreatedUser($query){
        return $query->leftJoin('users AS user_created', function ($join) {
            $join->on('user_created.id', '=', 'purchase_orders.created_by');
        });
    }

    public function scopeUpdatedUser($query){
        return $query->leftJoin('users AS user_updated', function ($join) {
            $join->on('user_created.id', '=', 'purchase_orders.updated_by');
        });
    }

    /* For view files */

    public function createdUser(){
        return $this->hasOne('App\Models\User', 'id', 'created_by')->select(['slack', 'fullname', 'email', 'user_code']);
    }

    public function updatedUser(){
        return $this->hasOne('App\Models\User', 'id', 'updated_by')->select(['slack', 'fullname', 'email', 'user_code']);
    }

    public function storeData(){
        return $this->hasOne('App\Models\Store', 'id', 'store_id');
    }
    
    public function customer(){
        return $this->hasOne('App\Models\Customer', 'id', 'customer_id')->select(['slack', 'name', 'email', 'customer_code']);
    }

    public function products(){
        return $this->hasMany('App\Models\PurchaseOrderProduct', 'purchase_order_id', 'id')->where('purchase_order_products.status', 1);
    }

    public function status_data(){
        return $this->hasOne('App\Models\MasterStatus', 'value', 'status')->where('key', 'PURCHASE_ORDER_STATUS');
    }

    public function tax_option_data(){
        return $this->hasOne('App\Models\MasterTaxOption', 'id', 'tax_option_id')->where('master_tax_option.status', 1);
    }

    public function invoices(){
        return $this->hasMany('App\Models\Invoice', 'parent_po_id', 'id')->select('slack', 'invoice_number')->orderBy('id', 'desc');
    }

    public function parseDateOnly($date){
        return ($date != null)?Carbon::parse($date)->format(config("app.date_format")):null;
    }

    public function parseDate($date){
        return ($date != null)?Carbon::parse($date)->format(config("app.date_time_format")):null;
    }
}
