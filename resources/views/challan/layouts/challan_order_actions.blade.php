<div class="action-buttons d-flex-center">
    @if (check_access(array('A_DETAIL_RASID'), true))
        <a href="{{ $challan_order['detail_link'] }}" class="btn btn-sm btn-outline-primary mr-2">
            <i class="fas fa-eye"></i> {{ __("View") }}
        </a>
    @endif

    @if (check_access(array('A_EDIT_RASID'), true))
        <a href="editchallan/{{ $challan_order['slack'] }}" class="btn btn-sm btn-outline-warning mr-2">
            <i class="fas fa-edit"></i> {{ __("Edit") }}
        </a>
    @endif

    @if ($challan_order['update_stock'] == 0) 
        <a href="print_challan_order/{{ $challan_order['slack'] }}" class="btn btn-sm btn-outline-success">
            <i class="fas fa-print"></i> {{ __("Print") }}
        </a>
    @endif

    @if ($challan_order['update_stock'] == 1) <!-- Display print button if status is clear (0) -->
        <a href="print_challan_order/{{ $challan_order['slack'] }}" class="btn btn-sm btn-outline-success">
            <i class="fas fa-payment"></i> {{ __("Payment") }}
        </a>
    @endif

    <button class="btn btn-sm btn-outline-primary " dropdown-toggle actions-dropdown-btn" type="button" id="poStatusDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class=" actions-dropdown"></i> {{ __("Change status") }}
    </button>
    @if ($challan_order['update_stock'] == 0)
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="poStatusDropdown">
        @if (check_access(['A_EDIT_STATUS_RASID'], true) && isset($po_statuses))
            @foreach($po_statuses as $status)
                <a href="javascript:void(0);" class="dropdown-item" onclick="updateStatus('{{ $challan_order['slack'] }}', '{{ $status->value_constant }}')">
                    {{ $status->label }}
                </a>
            @endforeach
        @endif
        @endif
</div>

</div>

<script>
import axios from 'axios';
    
function updateStatus(slack, status) {
    axios.post('/api/update_po_status/'+ slack, {
        status: status,
        access_token: window.settings.access_token
    })
    .then(response => {
        if (response.status === 200) {
            // Handle success - maybe reload the table or display a success message
            alert('Status updated successfully');
            location.reload(); 
        }
    })
    .catch(error => {
        console.error(error);
        // Handle error - display error message
        alert('Error updating status');
    });
}
</script>
