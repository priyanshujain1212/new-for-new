@extends('layouts.layout')

@section("content")
<addcustomercomponent :roles="{{ json_encode($roles) }}" :statuses="{{ json_encode($statuses) }}" :customer_data="{{ json_encode($customer_data) }}"></addcustomercomponent>
@endsection