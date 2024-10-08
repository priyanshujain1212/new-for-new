@extends('layouts.layout')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
@endpush

@section("content")
    <dashboardcomponent :access="{{ json_encode($access)}}" :store="{{ json_encode($store)}}"></dashboardcomponent>
@endsection