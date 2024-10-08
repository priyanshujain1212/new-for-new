@extends('layouts.empty_layout')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/store.css') }}">
@endpush

@section("content")
<seltrustcomponent :stores="{{ json_encode($stores) }}" :is_super_admin="{{ json_encode($is_super_admin) }}"></seltrustcomponent>
@endsection