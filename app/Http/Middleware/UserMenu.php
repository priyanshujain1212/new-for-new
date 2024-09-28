<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Menu as MenuModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class UserMenu
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
        $menu_array = [];
        $logged_in_user = $request->logged_user_id;
        $logged_in_customer = $request->logged_customer_id;
        $restaurant_mode = $request->logged_user_store_restaurant_mode;

        // Check if logged in as user
        if ($logged_in_user !== null) {
            if ($request->logged_user_role_id == 1) {
                // Fetch all menus for admin role
                $menus = MenuModel::select('*')
                    ->active()
                    ->orderByRaw('FIELD(type , "MAIN_MENU", "SUB_MENU") ASC')
                    ->orderBy('sort_order', 'ASC')
                    ->when($restaurant_mode == 0, function ($query) {
                        $query->where('menus.is_restaurant_menu', 0);
                    })
                    ->get();
            } else {
                // Fetch user-specific menus
                $menus = DB::table('user_menus')
                    ->select('menus.*')
                    ->join('menus', 'menus.id', '=', 'user_menus.menu_id')
                    ->where('user_menus.user_id', $logged_in_user)
                    ->orderByRaw('FIELD(type , "MAIN_MENU", "SUB_MENU") ASC')
                    ->orderBy('sort_order', 'ASC')
                    ->when($restaurant_mode == 0, function ($query) {
                        $query->where('menus.is_restaurant_menu', 0);
                    })
                    ->get();
            }
        }

        // Check if logged in as customer
        elseif ($logged_in_customer !== null) {
            // Fetch customer-specific menus
            $menus = DB::table('customer_menus')
                ->select('menus.*')
                ->join('menus', 'menus.id', '=', 'customer_menus.menu_id')
                ->where('customer_menus.customer_id', $logged_in_customer)
                ->orderByRaw('FIELD(type , "MAIN_MENU", "SUB_MENU") ASC')
                ->orderBy('sort_order', 'ASC')
                ->when($restaurant_mode == 0, function ($query) {
                    $query->where('menus.is_restaurant_menu', 0);
                })
                ->get();
        }

        // Process menus
        foreach ($menus as $menu) {
            if ($menu->type === 'MAIN_MENU') {
                // Add main menu to array
                $menu_array[$menu->id] = [
                    'menu_key' => $menu->menu_key,
                    'label'    => $menu->label,
                    'route'    => $menu->route,
                    'icon'     => $menu->icon,
                ];
            } elseif ($menu->type === 'SUB_MENU' && isset($menu_array[$menu->parent])) {
                // Add submenu to parent main menu
                unset($menu_array[$menu->parent]['route']); // Remove route for main menu with submenus
                $menu_array[$menu->parent]['sub_menu'][] = [
                    'sub_menu_id' => $menu->id,
                    'menu_key'    => $menu->menu_key,
                    'label'       => $menu->label,
                    'route'       => $menu->route,
                ];
            }
        }

        // Share menus with all views
        View::share('menus', $menu_array);

        // Add quick links based on access permissions
        $quick_links = $this->getQuickLinks($request);
        View::share('quick_links', $quick_links);

        return $next($request);
    }

    /**
     * Get quick links based on access permissions.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    private function getQuickLinks($request)
    {
        $quick_links = [];

        if (check_access(['A_ADD_NOTIFICATION'], true)) {
            $quick_links[] = ['label' => 'New Notification', 'route' => route('add_notification')];
        }
        if (check_access(['SM_RESTAURANT_KITCHEN'], true) && $request->logged_user_store_restaurant_mode == 1) {
            $quick_links[] = ['label' => 'Kitchen View', 'route' => route('kitchen')];
        }
        if (check_access(['SM_RESTAURANT_WAITER'], true) && $request->logged_user_store_restaurant_mode == 1) {
            $quick_links[] = ['label' => 'Waiter View', 'route' => route('waiter')];
        }
        if (check_access(['A_ADD_CUSTOMER'], true)) {
            $quick_links[] = ['label' => 'New Customer', 'route' => route('add_customer')];
        }
        if (check_access(['A_ADD_ORDER'], true)) {
            $quick_links[] = ['label' => 'New Order', 'route' => route('add_order')];
        }
        if (check_access(['A_ADD_TRANSACTION'], true)) {
            $quick_links[] = ['label' => 'New Transaction', 'route' => route('add_transaction')];
        }
        if (check_access(['A_ADD_INVOICE'], true)) {
            $quick_links[] = ['label' => 'New Invoice', 'route' => route('add_invoice')];
        }
        if (check_access(['A_ADD_RASID'], true)) {
            $quick_links[] = ['label' => 'New Purchase Order', 'route' => route('addrasid')];
        }
        if (check_access(['A_ADD_QUOTATION'], true)) {
            $quick_links[] = ['label' => 'New Quotation', 'route' => route('add_quotation')];
        }
        if (check_access(['A_ADD_BOOKING'], true)) {
            $quick_links[] = ['label' => 'New Booking', 'route' => route('add_booking')];
        }

        return $quick_links;
    }
}
