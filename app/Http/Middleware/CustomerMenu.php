<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Menu as MenuModel;
use App\Models\Customer as CustomerModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class CustomerMenu
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $menu_array = array();
        $logged_in_customer = $request->logged_customer_id;
         $restaurant_mode = $request->logged_user_store_restaurant_mode;

   
            $menus = DB::table('customer_menus')
            ->select('menus.*')
            ->join('menus', 'menus.id', '=', 'customer_menus.menu_id')
            ->where('customer_menus.user_id', $logged_in_user)
            ->orderByRaw('FIELD(type , "MAIN_MENU", "SUB_MENU") ASC')
            ->orderBy('sort_order', 'ASC')
            ->when($restaurant_mode == 0, function ($menus) {
                $menus->where('menus.is_restaurant_menu', 0);
            })
            ->get();
        
        
        foreach($menus as $menu){
            if($menu->type == "MAIN_MENU"){
                $menu_array[$menu->id] = [
                    "menu_key" => $menu->menu_key,
                    "label" => $menu->label,
                    "route" => $menu->route,
                    "icon"  => $menu->icon
                ];
            }else if($menu->type == "SUB_MENU"){
                if(isset($menu_array[$menu->parent])){
                    unset($menu_array[$menu->parent]["route"]);
                    $menu_array[$menu->parent]['sub_menu'][] = [
                        "sub_menu_id" => $menu->id,
                        "menu_key" => $menu->menu_key,
                        "label" => $menu->label,
                        "route" => $menu->route
                    ];
                }
            }
        }
        
        View::share('menus', $menu_array);

        $quick_links = [];
        if(check_access(array('A_ADD_NOTIFICATION'), true)){
            $quick_links[] = [
                'label' => 'New Notification',
                'route' => route('add_notification')
            ];
        }
        if(check_access(array('SM_RESTAURANT_KITCHEN'), true) && $request->logged_user_store_restaurant_mode == 1){
            $quick_links[] = [
                'label' => 'Kitchen View',
                'route' => route('kitchen')
            ];
        }
        if(check_access(array('SM_RESTAURANT_WAITER'), true) && $request->logged_user_store_restaurant_mode == 1){
            $quick_links[] = [
                'label' => 'Waiter View',
                'route' => route('waiter')
            ];
        }
        if(check_access(array('A_ADD_CUSTOMER'), true)){
            $quick_links[] = [
                'label' => 'New Customer',
                'route' => route('add_customer')
            ];
        }
        if(check_access(array('A_ADD_ORDER'), true)){
            $quick_links[] = [
                'label' => 'New Order',
                'route' => route('add_order')
            ];
        }
        if(check_access(array('A_ADD_TRANSACTION'), true)){
            $quick_links[] = [
                'label' => 'New Transaction',
                'route' => route('add_transaction')
            ];
        }
        if(check_access(array('A_ADD_INVOICE'), true)){
            $quick_links[] = [
                'label' => 'New Invoice',
                'route' => route('add_invoice')
            ];
        }
        if(check_access(array('A_ADD_RASID'), true)){
            $quick_links[] = [
                'label' => 'New Purchase Order',
                'route' => route('addrasid')
            ];
        }
        if(check_access(array('A_ADD_QUOTATION'), true)){
            $quick_links[] = [
                'label' => 'New Quotation',
                'route' => route('add_quotation')
            ];
        }
        if(check_access(array('A_ADD_BOOKING'), true)){
            $quick_links[] = [
                'label' => 'New Booking',
                'route' => route('add_booking')
            ];
        }

        View::share('quick_links', $quick_links);

        return $next($request);
    }
}
