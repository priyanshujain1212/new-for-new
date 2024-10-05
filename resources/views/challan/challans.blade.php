@extends('layouts.layout')

@section("content")
<div class="row">
    <div class="col-md-12">
        
        <div class="d-flex flex-wrap mb-4">
            <div class="mr-auto">
                <span class="text-title">{{ __("Challan") }}</span>
            </div>
            <div class="">
                @if (check_access(array('A_ADD_RASID'), true))
                    <a href="{{ route('addchallan')}}" role="button" class="btn btn-primary">{{ __("New Challan") }}</a>
                @endif
            </div>
        </div>
        <div class="table-responsive">
        <table id="listing-table" class="table display nowrap w-100">
                <thead>
                    <tr>
                        <th>{{ __("Challan Number") }}</th>
                        <th>{{ __("Supplier Name") }}</th>
                        <th>{{ __("Rasid Date") }}</th>
                        <th>{{ __("Amount") }}</th>
                        <th>{{ __("Status") }}</th>
                        <th>{{ __("Created By") }}</th>
                        <th>{{ __("Action") }}</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>

    </div>
</div>
@endsection

@push('scripts')
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.0/js/jquery.dataTables.min.js"></script>

    <script src="{{ asset('plugins/datatables/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('js/datatable.js') }}"></script>
    <script src="{{ asset('js/pages/challans.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> <!-- Add Bootstrap JS -->
    <script>
        'use strict';
        var challans = new Challans();
        challans.load_listing_table();
    </script>
@endpush