class Challans{
    load_listing_table(){
        "use strict";
        var listing_table = $('#listing-table').DataTable({
            ajax: {
                url  : '/api/challan',
                type : 'POST',
                data : {
                    access_token : window.settings.access_token
                }
            },
            columns: [
                { name: 'challans.po_number' },
                { name: 'challans.supplier_name' },
                { name: 'challans.order_date' },
             
                { name: 'challans.total_order_amount' },
                { name: 'master_status.label' },
                { name: 'user_created.fullname' },
            ],
            order: [[ 7, "desc" ]],
            columnDefs: [
                { "orderable": false, "targets": [8] }
            ]
        });
    }
}