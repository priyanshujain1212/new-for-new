@extends('layouts.layout')

@section("content")
<challanorderdetailcomponent :po_statuses="{{ json_encode($po_statuses) }}" :purchase_order_data="{{ json_encode($challan_order_data) }}" :delete_po_access="{{ json_encode($delete_po_access) }}" :create_invoice_from_po_access="{{ json_encode($create_invoice_from_po_access) }}"></challanorderdetailcomponent>
@endsection