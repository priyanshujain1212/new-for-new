@extends('layouts.layout')

@section("content")
<div class="row">
    <div class="col-md-12">
        
        <div class="d-flex flex-wrap mb-4">
            <div class="mr-auto">
                <span class="text-title">{{ __("Suppliers") }}</span>
            </div>
            <div class="">
                @if (check_access(array('A_ADD_SUPPLIER'), true))
                    <a href="{{ route('add_supplier')}}" role="button" class="btn btn-primary">{{ __("New Supplier") }}</a>
                @endif
            </div>
        </div>

        <div class="table-responsive">
            <table id="listing-table" class="table display nowrap w-100">
                <thead>
                    <tr>
                        <th>{{ __("Supplier Name") }}</th>
                        <th>{{ __("Supplier Code") }}</th>
                        <th>{{ __("Status") }}</th>
                        <th>{{ __("Created On") }}</th>
                        <th>{{ __("Updated On") }}</th>
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
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('js/datatable.js') }}"></script>
    <script src="{{ asset('js/pages/suppliers.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> <!-- Add Bootstrap JS -->
    <script>
        'use strict';
        var suppliers = new Suppliers();
        suppliers.load_listing_table();
    </script>
@endpush