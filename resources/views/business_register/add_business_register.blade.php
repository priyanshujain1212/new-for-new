@extends('layouts.layout')

@section("content")
<addbusinessregistercomponent :particulars="{{ json_encode($particulars) }}"></addbusinessregistercomponent>
@endsection