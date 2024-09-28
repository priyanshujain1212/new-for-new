class BillingCounter{
    load_listing_table(){
        "use strict";
        var listing_table = $('#listing-table').DataTable({
            ajax: {
                url  : '/api/particulars',
                type : 'POST',
                data : {
                    access_token : window.settings.access_token
                }
            },
            columns: [
                { name: 'billing_counters.billing_counter_code' },
                { name: 'billing_counters.counter_name' },
                { name: 'billing_counters.particular_to' },
                { name: 'master_status.label' },
                { name: 'billing_counters.created_at' },
                { name: 'billing_counters.updated_at' },
                { name: 'user_created.fullname' }
            ],
            order: [[ 4, "desc" ]],
            columnDefs: [
                { "orderable": false, "targets": [7] }
            ]
        });
    }
}