class PurchaseOrders{
    load_listing_table(){
        "use strict";
        var listing_table = $('#listing-table').DataTable({
            ajax: {
                url  : '/api/rasid',
                type : 'POST',
                data : {
                    access_token : window.settings.access_token
                }
            },
            columns: [
                { name: 'purchase_orders.po_number' },
                { name: 'purchase_orders.customer_name' },
                { name: 'purchase_orders.order_date' },
                { name: 'purchase_orders.total_order_amount' },
                { name: 'master_status.label' },
                { name: 'user_created.fullname' },
            ],
            order: [[ 5, "desc" ]],
            columnDefs: [
                { "orderable": false, "targets": [6] }
            ]
        });
    }
}