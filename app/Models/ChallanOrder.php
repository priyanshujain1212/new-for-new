<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

use App\Models\Scopes\StoreScope;

class ChallanOrder extends Model
{
    protected $table = 'challan_orders';
    protected $hidden = ['id', 'store_id', 'supplier_id'];
    protected $fillable = ['slack', 'store_id', 'po_number', 'po_reference', 'order_date', 'supplier_id', 'supplier_code', 'supplier_name', 'supplier_address', 'currency_name', 'currency_code', 'total_order_amount', 'terms', 'update_stock', 'status', 'created_by', 'updated_by', 'created_at', 'updated_at','payment_type'];

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
            $join->on('master_status.value', '=', 'challan_orders.status');
            $join->where('master_status.key', '=', 'PURCHASE_ORDER_STATUS');
        });
    }
    public function scopeSupplier($query){
        return $query->leftJoin('suppliers AS supplier', function ($join) {
            $join->on('supplier.id', '=', 'challan_orders.supplier_id')
                 ->whereColumn('supplier.supplier_code', 'challan_orders.supplier_code');
        });
    }
    

    public function scopeCreatedUser($query){
        return $query->leftJoin('users AS user_created', function ($join) {
            $join->on('user_created.id', '=', 'challan_orders.created_by');
        });
    }

    public function scopeUpdatedUser($query){
        return $query->leftJoin('users AS user_updated', function ($join) {
            $join->on('user_created.id', '=', 'challan_orders.updated_by');
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
    
    public function supplier(){
        return $this->hasOne('App\Models\Supplier', 'id', 'supplier_id')->select(['slack', 'name', 'email', 'supplier_code']);
    }

    public function products(){
        return $this->hasMany('App\Models\ChallanOrderProduct', 'challan_order_id', 'id')->where('challan_order_products.status', 1);
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
