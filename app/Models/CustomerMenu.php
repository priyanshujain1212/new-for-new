<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerMenu extends Model
{
    protected $table = 'customer_menus';
    protected $hidden = ['id'];
    protected $fillable = ['customer_id', 'menu_id', 'created_by'];

    public function customer(){
        return $this->belongsTo('App\Models\Customer', 'id', 'customer_id');
    }

    public function menu(){
        return $this->belongsTo('App\Models\Menu', 'id', 'menu_id');
    }
}