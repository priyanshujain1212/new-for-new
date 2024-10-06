<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class StoreScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        $table = $model->getTable();
        $store_id = null;

        // Access the request data
        $request = request();
        
        // Check if logged_user_id exists or logged_customer_id exists in the request
        if ($request->logged_user_id !== null) {
            $store_id = $request->logged_user_store_id;  // Use user store ID
        } elseif ($request->logged_customer_id !== null) {
            $store_id = $request->logged_customer_store_id;  // Use customer store ID
        }

        // Apply the store_id filter if it's available
        if ($store_id !== null) {
            $builder->where($table . '.store_id', '=', $store_id);
        }
    }
}