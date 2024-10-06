@extends('layouts.layout')

@section("content")
<addrasidcomponent :payment_types="{{ json_encode($payment_types) }}" :particulars="{{ json_encode($particulars) }}" :currency_list="{{ json_encode($currency_list) }}" :purchase_order_data="{{ json_encode($purchase_order_data) }}" :tax_options="{{ json_encode($tax_options) }}"></addrasidcomponent>
@endsection