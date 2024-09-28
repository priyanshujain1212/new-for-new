@php 
    $data = json_decode($data); 
    $colspan = 5+((isset($data->tax_option_data) && count($data->tax_option_data->component_array) > 0)?count($data->tax_option_data->component_array):1);
@endphp
<!DOCTYPE html>
<html>
    <head>
        <title>Purchase Order #{{ $data->po_number }}</title>
    </head>
    <body>
        
        <table>
            <tr>
            <td class='v-top w-50 pr-20px'>
                    <div class='bold display-block'> </div>
                        <div class='display-block'> <td><h2>{{ $data->store->name }}</h2></td></div>
                        <div>
                            {{ $data->store->address }}
                            @if ($data->store->pincode != '')
                            Pincode: {{ $data->store->pincode }}
                            @endif
                        </div>
                        @if ($data->store->primary_email != '')
                            <div>Email 1: {{ $data->store->primary_email }}</div>
                        @endif
                       @if ($data->store->primary_contact != '')
                            <div>Contact No 1: {{ $data->store->primary_contact }}</div>
                        @endif
                        @if ($data->store->secondary_contact != '')
                            <div>Contact No 2: {{ $data->store->secondary_contact }}</div>
                        @endif
                    </div>
                </td>
           
            </tr>
        </table>

        <div class='mb-1rem'>
            <table class='w-100'>
                <tr>
                    <td class='w-50'>
                        <div class='display-block'>Rasid Number: {{ $data->po_number }}</div>
                        <div class='display-block'>Reference Number: {{ $data->po_reference }}</div>
                        <div class='display-block'>Rasid Date: {{ $data->order_date }}</div>
                    </td>
                    <td class='right'>
                        @if($logo_path != '')
                        <img src="{{ $logo_path }}" class='h-50px'/>
                        @endif
                    </td>
                </tr>
            </table>
        </div>

        <table class='w-100 mb-1rem'>
            <tr>
                <td class='v-top w-50 pr-20px'>
                    <div class='bold display-block'>Customer </div>
                    <div class='display-block'>({{ $data->customer_code }}) {{ $data->customer_name }}</div>
                    <div class='pr-100px'>
                        {{ $data->customer_address }}
                        @if ($data->store->pincode != '')
                        Pincode: {{ $data->store->pincode }}
                        @endif
                        @if ($data->customer->email != '')
                            Email: {{ $data->customer->email }}
                        @endif
                        @if ($data->customer->phone != '')
                            Contact No: {{ $data->customer->phone }}
                        @endif
                    </div>
                </td>
                
            </tr>
        </table>


        <div class="mb-1rem">
            <table class="w-100 product-table mb-1rem">
                <thead>
                    <tr>
                    <th class="left">#</th>
                    <th class="left">Product Description</th>
                    <th class="right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    
                    @foreach ($data->products as $item_key => $po_products)
                    <tr v-for="(po_product, key, index) in products" v-bind:value="$po_products->product_slack" v-bind:key="index">
                        <td>{{ $item_key+1 }}</td>
                        <td>{{ ($po_products->product_code != ''? $po_products->product_code." - ": '') }}{{ $po_products->name }}</td>

                        <td class="right">{{ $po_products->total_amount }}</td>
                    </tr>
                    @endforeach
                    <tr>
                        
                    </tr>
                  
                </tbody>
             
            </table>
            <div class="mb-1rem">
            <div colspan="{{$colspan}}" class="right bold" style="">Total (INCL Tax) {{   "-"     }} {{ $data->total_order_amount }}</div>
            </div>
            @if($data->currency_code != '')
            <div>
                <small>All prices are in {{ $data->currency_name }} ({{ $data->currency_code }})</small>
            </div>
            @endif
        </div>

        @if($data->terms != '')
        <div class="mb-1rem">
            <div class='bold display-block'>Terms</div>
            <pre>{{ $data->terms }}</pre>
        </div>
        @endif

        <div class='center'>
            <div class='display-block'>Thank You!</div>
        </div>

    </body>
</html>