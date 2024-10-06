@extends('layouts.layout')

@section("content")
<addchallancomponent :payment_types="{{ json_encode($payment_types) }}" :particulars="{{ json_encode($particulars) }}" :currency_list="{{ json_encode($currency_list) }}" :challan_order_data="{{ json_encode($challan_order_data) }}" :tax_options="{{ json_encode($tax_options) }}"></addchallancomponent>
@endsection