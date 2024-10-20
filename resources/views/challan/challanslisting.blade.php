@extends('layouts.newlayout')

@section("content")
<challanslistingcomponent :order_data="{{ json_encode($order_data) }}" :total_data="{{ json_encode($total_data) }}" ></challanslistingcomponent>
@endsection