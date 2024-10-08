@php
    $navbar_logo = config("app.navbar_logo");
    $user_slack = session('slack');
    $customer_slack = session('slack');
@endphp

<topnavcomponent  @if(isset($logged_user_data))
        :user_slack="{{ json_encode($user_slack) }}"
        :logged_user_data="{{ json_encode($logged_user_data) }}"
    @elseif(isset($logged_customer_data))
        :customer_slack="{{ json_encode($customer_slack) }}"
        :logged_customer_data="{{ json_encode($logged_customer_data) }}"
    @endif
    :navbar_logo="{{ json_encode($navbar_logo) }}" :quick_links="{{ json_encode($quick_links) }}" 
    ></topnavcomponent>