---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#general


<!-- START_66df3678904adde969490f2278b8f47f -->
## Authenticate the request for channel access.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/broadcasting/auth" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/broadcasting/auth"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET broadcasting/auth`

`POST broadcasting/auth`


<!-- END_66df3678904adde969490f2278b8f47f -->

<!-- START_aca3c6199433995dfc3251f56a0e0c00 -->
## Authenticate API

> Example request:

```bash
curl -X POST \
    "http://localhost/api/user/authenticate" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user/authenticate"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/user/authenticate`


<!-- END_aca3c6199433995dfc3251f56a0e0c00 -->

<!-- START_37fde119a0a320213e07d9c4e6303959 -->
## api/user/forgot_password
> Example request:

```bash
curl -X POST \
    "http://localhost/api/user/forgot_password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user/forgot_password"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/user/forgot_password`


<!-- END_37fde119a0a320213e07d9c4e6303959 -->

<!-- START_d66bae11d5c638661df8141d489ce16d -->
## api/user/reset_password
> Example request:

```bash
curl -X POST \
    "http://localhost/api/user/reset_password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user/reset_password"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/user/reset_password`


<!-- END_d66bae11d5c638661df8141d489ce16d -->

<!-- START_0a247542178b87f40753c50e22ce2740 -->
## api/add_customer_order
> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_customer_order" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_customer_order"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_customer_order`


<!-- END_0a247542178b87f40753c50e22ce2740 -->

<!-- START_306f4cd4f160dbe96728f5ade7c044c2 -->
## api/get_customer_order_product_addon_groups
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_customer_order_product_addon_groups" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_customer_order_product_addon_groups"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_customer_order_product_addon_groups`


<!-- END_306f4cd4f160dbe96728f5ade7c044c2 -->

<!-- START_d1e53e2a661b09e45d29a44c766082d4 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/generate_otp" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/generate_otp"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/generate_otp`


<!-- END_d1e53e2a661b09e45d29a44c766082d4 -->

<!-- START_21b99c0d143bf5bced59234443b0ffda -->
## api/get_stripe_payment_intent_public
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_stripe_payment_intent_public" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_stripe_payment_intent_public"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_stripe_payment_intent_public`


<!-- END_21b99c0d143bf5bced59234443b0ffda -->

<!-- START_c0aa173ffbcff9a976526d6195fe8972 -->
## api/record_stripe_payment_success_public
> Example request:

```bash
curl -X POST \
    "http://localhost/api/record_stripe_payment_success_public" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/record_stripe_payment_success_public"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/record_stripe_payment_success_public`


<!-- END_c0aa173ffbcff9a976526d6195fe8972 -->

<!-- START_829f592c0e73f6c227eb83ceb6987424 -->
## api/record_razorpay_payment_success_public
> Example request:

```bash
curl -X POST \
    "http://localhost/api/record_razorpay_payment_success_public" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/record_razorpay_payment_success_public"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/record_razorpay_payment_success_public`


<!-- END_829f592c0e73f6c227eb83ceb6987424 -->

<!-- START_9dd2dad17e7a80f0ff0e182d03f13415 -->
## api/get_paypal_order_data_public
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_paypal_order_data_public" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_paypal_order_data_public"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_paypal_order_data_public`


<!-- END_9dd2dad17e7a80f0ff0e182d03f13415 -->

<!-- START_1126d5c7cd305eb67f3f27cd6faa936a -->
## api/get_qr_order_history
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_qr_order_history" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_qr_order_history"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_qr_order_history`


<!-- END_1126d5c7cd305eb67f3f27cd6faa936a -->

<!-- START_12e37982cc5398c7100e59625ebb5514 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/users" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/users"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/users`


<!-- END_12e37982cc5398c7100e59625ebb5514 -->

<!-- START_ab8bb1ee4d244b07d6a521e591586a5f -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_user"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_user`


<!-- END_ab8bb1ee4d244b07d6a521e591586a5f -->

<!-- START_598a2de9f1f52418b60749cce87d363d -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_user/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_user/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_user/{slack}`


<!-- END_598a2de9f1f52418b60749cce87d363d -->

<!-- START_624ec05996e104e764e16809ced131bf -->
## api/reset_user_password/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/reset_user_password/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/reset_user_password/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/reset_user_password/{slack}`


<!-- END_624ec05996e104e764e16809ced131bf -->

<!-- START_a1b69688c7d631b567dec0ea6c8917a9 -->
## api/load_users
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_users" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_users"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_users`


<!-- END_a1b69688c7d631b567dec0ea6c8917a9 -->

<!-- START_b92dbf8e5af7fce93f8b3cf2664afe84 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/user/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/user/{slack}`


<!-- END_b92dbf8e5af7fce93f8b3cf2664afe84 -->

<!-- START_522c93b6322eb76fa5cf31c9059841b2 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/user_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/user_list`


<!-- END_522c93b6322eb76fa5cf31c9059841b2 -->

<!-- START_884f2335dfa927d764c284a3e1d9742e -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_basic_profile" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_basic_profile"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_basic_profile`


<!-- END_884f2335dfa927d764c284a3e1d9742e -->

<!-- START_d2a8dfe2d9c2f49a66662569f45711bc -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_password"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_password`


<!-- END_d2a8dfe2d9c2f49a66662569f45711bc -->

<!-- START_f64101760f212f8a2baf3f2ebc9e726b -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_profile_image" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_profile_image"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_profile_image`


<!-- END_f64101760f212f8a2baf3f2ebc9e726b -->

<!-- START_d1e6ef342ba93b8e8bf1993f9cbd9320 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/remove_profile_image" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/remove_profile_image"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/remove_profile_image`


<!-- END_d1e6ef342ba93b8e8bf1993f9cbd9320 -->

<!-- START_373ec61f1b23827a63b47c981585c7dc -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_profile_store" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_profile_store"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_profile_store`


<!-- END_373ec61f1b23827a63b47c981585c7dc -->

<!-- START_1004c9d25bcbe0685e1d8a1cada51163 -->
## api/update_profile_language
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_profile_language" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_profile_language"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_profile_language`


<!-- END_1004c9d25bcbe0685e1d8a1cada51163 -->

<!-- START_a3218b1c089cb8f076367ee77c7ba3a9 -->
## api/get_dashboard_stats
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_dashboard_stats" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_dashboard_stats"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_dashboard_stats`


<!-- END_a3218b1c089cb8f076367ee77c7ba3a9 -->

<!-- START_d1a4580085ae06ea3fd9700659e660d0 -->
## api/get_order_chart_stats
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_order_chart_stats" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_order_chart_stats"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_order_chart_stats`


<!-- END_d1a4580085ae06ea3fd9700659e660d0 -->

<!-- START_340545dbda29df1154f3d97337774d1b -->
## api/get_recent_trasactions
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_recent_trasactions" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_recent_trasactions"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_recent_trasactions`


<!-- END_340545dbda29df1154f3d97337774d1b -->

<!-- START_e4d2100f404894796b3fa8299e4d0723 -->
## api/get_billing_counter_stats
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_billing_counter_stats" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_billing_counter_stats"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_billing_counter_stats`


<!-- END_e4d2100f404894796b3fa8299e4d0723 -->

<!-- START_90c780acaefab9740431579512d07101 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/roles" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/roles"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/roles`


<!-- END_90c780acaefab9740431579512d07101 -->

<!-- START_caf74ce4cc422f563946bd9c444c7583 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_role" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_role"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_role`


<!-- END_caf74ce4cc422f563946bd9c444c7583 -->

<!-- START_062506d72f31798301eb053340413216 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_role/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_role/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_role/{slack}`


<!-- END_062506d72f31798301eb053340413216 -->

<!-- START_1d33cc4a31f53a7bd1a1fc88bb46723e -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/role/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/role/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/role/{slack}`


<!-- END_1d33cc4a31f53a7bd1a1fc88bb46723e -->

<!-- START_1d60a11700cfc1dd4071a454f76b3c00 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/role_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/role_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/role_list`


<!-- END_1d60a11700cfc1dd4071a454f76b3c00 -->

<!-- START_089467e7ea475fb2aca445b2d23f6e7d -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/customers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/customers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/customers`


<!-- END_089467e7ea475fb2aca445b2d23f6e7d -->

<!-- START_7d1e8ce205093ebf88e2968b670643c3 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_customer" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_customer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_customer`


<!-- END_7d1e8ce205093ebf88e2968b670643c3 -->

<!-- START_9ecf04ebcc5e4e54deeea11255d68408 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_customer/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_customer/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_customer/{slack}`


<!-- END_9ecf04ebcc5e4e54deeea11255d68408 -->

<!-- START_1f8f7a5cb9f0f3bfe55e66738bcea5f5 -->
## api/load_customers
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_customers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_customers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_customers`


<!-- END_1f8f7a5cb9f0f3bfe55e66738bcea5f5 -->

<!-- START_97cf9d107ad0b833f7e466eda504a4f8 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/customer/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/customer/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/customer/{slack}`


<!-- END_97cf9d107ad0b833f7e466eda504a4f8 -->

<!-- START_4a2f10b7242c81c47a37dad69a97c2bf -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/customer_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/customer_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/customer_list`


<!-- END_4a2f10b7242c81c47a37dad69a97c2bf -->

<!-- START_2335abbed7f782ea7d7dd6df9c738d74 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/categories" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/categories"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/categories`


<!-- END_2335abbed7f782ea7d7dd6df9c738d74 -->

<!-- START_6b96e6d7b696ce24c8c981ded6cca6a5 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_category" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_category"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_category`


<!-- END_6b96e6d7b696ce24c8c981ded6cca6a5 -->

<!-- START_59ea9a27008fc86bbe481bd9052d21d3 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_category/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_category/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_category/{slack}`


<!-- END_59ea9a27008fc86bbe481bd9052d21d3 -->

<!-- START_eb22556b2793cc779a1aa6efde5d18a6 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/category/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/category/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/category/{slack}`


<!-- END_eb22556b2793cc779a1aa6efde5d18a6 -->

<!-- START_6c195dfda1a9f3ea573810dd8e0e41bf -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/category_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/category_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/category_list`


<!-- END_6c195dfda1a9f3ea573810dd8e0e41bf -->

<!-- START_5aaeb2b92fa120a0025f5686cfdf3c1f -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/suppliers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/suppliers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/suppliers`


<!-- END_5aaeb2b92fa120a0025f5686cfdf3c1f -->

<!-- START_16b5afb26f788eaed2ef0fa9e80f36b6 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_supplier" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_supplier"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_supplier`


<!-- END_16b5afb26f788eaed2ef0fa9e80f36b6 -->

<!-- START_2a1587b6ef7b6ce679d572cf39c18a19 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_supplier/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_supplier/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_supplier/{slack}`


<!-- END_2a1587b6ef7b6ce679d572cf39c18a19 -->

<!-- START_71cd6ac7cf6a4e38ee6142d3cb33a408 -->
## api/load_suppliers
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_suppliers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_suppliers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_suppliers`


<!-- END_71cd6ac7cf6a4e38ee6142d3cb33a408 -->

<!-- START_398fc4a52fd2acc5c711ea0e892b625f -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/supplier/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/supplier/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/supplier/{slack}`


<!-- END_398fc4a52fd2acc5c711ea0e892b625f -->

<!-- START_946aa450e6a0f8b7ab96ec2255b9f832 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/supplier_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/supplier_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/supplier_list`


<!-- END_946aa450e6a0f8b7ab96ec2255b9f832 -->

<!-- START_05b4383f00fd57c4828a831e7057e920 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/products"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/products`


<!-- END_05b4383f00fd57c4828a831e7057e920 -->

<!-- START_c78a4061853250316be080ae670c5dbc -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_product" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_product"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_product`


<!-- END_c78a4061853250316be080ae670c5dbc -->

<!-- START_4d51957789071c093d031c91a14646f4 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_product/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_product/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_product/{slack}`


<!-- END_4d51957789071c093d031c91a14646f4 -->

<!-- START_99ff74ad39f13e57a73d0ae2d5b1d91e -->
## get products from order page.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_product" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_product"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_product`


<!-- END_99ff74ad39f13e57a73d0ae2d5b1d91e -->

<!-- START_d624773da078bcd285a3faee64d7d9e1 -->
## api/generate_barcodes
> Example request:

```bash
curl -X POST \
    "http://localhost/api/generate_barcodes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/generate_barcodes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/generate_barcodes`


<!-- END_d624773da078bcd285a3faee64d7d9e1 -->

<!-- START_9daf9624ba770d4af4fbf4311fc9ca7d -->
## get products for po page.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_product_for_po" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_product_for_po"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_product_for_po`


<!-- END_9daf9624ba770d4af4fbf4311fc9ca7d -->

<!-- START_19992f950fc8673206400cb302cb4706 -->
## api/load_product_for_stock_transfer
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_product_for_stock_transfer" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_product_for_stock_transfer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_product_for_stock_transfer`


<!-- END_19992f950fc8673206400cb302cb4706 -->

<!-- START_8ef518ae9370c97f6b6940460038fb7f -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/product/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/product/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/product/{slack}`


<!-- END_8ef518ae9370c97f6b6940460038fb7f -->

<!-- START_b6a89243ec331d8ce7755ed59dc15482 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/product_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/product_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/product_list`


<!-- END_b6a89243ec331d8ce7755ed59dc15482 -->

<!-- START_a40108f48e15456b7dca10da0e0465a4 -->
## api/delete_product_image
> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_product_image" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_product_image"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_product_image`


<!-- END_a40108f48e15456b7dca10da0e0465a4 -->

<!-- START_a1fb9b40b562cf3420a77bc7c2c716e9 -->
## api/load_ingredients
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_ingredients" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_ingredients"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_ingredients`


<!-- END_a1fb9b40b562cf3420a77bc7c2c716e9 -->

<!-- START_0e41f3d24f0cc80bf10d0af342c67006 -->
## api/load_addon_group_product
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_addon_group_product" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_addon_group_product"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_addon_group_product`


<!-- END_0e41f3d24f0cc80bf10d0af342c67006 -->

<!-- START_a0c2c6d07f320a3fb7d79b41f6819460 -->
## get add on groups for order page.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_product_addon_groups" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_product_addon_groups"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_product_addon_groups`


<!-- END_a0c2c6d07f320a3fb7d79b41f6819460 -->

<!-- START_ef7ee0806ed905a44749c11f89fa96c8 -->
## api/load_variant_products
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_variant_products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_variant_products"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_variant_products`


<!-- END_ef7ee0806ed905a44749c11f89fa96c8 -->

<!-- START_d05014cfb281e39d71264f17c796ff51 -->
## api/remove_variant_product
> Example request:

```bash
curl -X POST \
    "http://localhost/api/remove_variant_product" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/remove_variant_product"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/remove_variant_product`


<!-- END_d05014cfb281e39d71264f17c796ff51 -->

<!-- START_cd6f70d31f97821d95d30961ff03600f -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/tax_codes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/tax_codes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/tax_codes`


<!-- END_cd6f70d31f97821d95d30961ff03600f -->

<!-- START_a5e2d9750fb0e30068fff1f419e4c6bb -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_tax_code" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_tax_code"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_tax_code`


<!-- END_a5e2d9750fb0e30068fff1f419e4c6bb -->

<!-- START_ff7ce1607ced38cbe01e08c96a279170 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_tax_code/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_tax_code/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_tax_code/{slack}`


<!-- END_ff7ce1607ced38cbe01e08c96a279170 -->

<!-- START_8ac723db74ea33af568f70e20072a5b5 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/tax_code/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/tax_code/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/tax_code/{slack}`


<!-- END_8ac723db74ea33af568f70e20072a5b5 -->

<!-- START_f2392ed12a7045dbfd8092cabad0e5cc -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/tax_code_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/tax_code_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/tax_code_list`


<!-- END_f2392ed12a7045dbfd8092cabad0e5cc -->

<!-- START_285c87403b6cfdebe26bc357f22e870f -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/orders" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/orders"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/orders`


<!-- END_285c87403b6cfdebe26bc357f22e870f -->

<!-- START_bf1e4a62dd0aee3b23ae5f6a7a440732 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_order" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_order"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_order`


<!-- END_bf1e4a62dd0aee3b23ae5f6a7a440732 -->

<!-- START_46dfe089d3584e6f832305db5c8d5c2e -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_order/{slack}`


<!-- END_46dfe089d3584e6f832305db5c8d5c2e -->

<!-- START_99f9d9fe0d4a5fc17378d2ce28b5decb -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_order/{slack}`


<!-- END_99f9d9fe0d4a5fc17378d2ce28b5decb -->

<!-- START_cb89dbf21f766abdec7ed3c7a0320c6d -->
## api/get_hold_list
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_hold_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_hold_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_hold_list`


<!-- END_cb89dbf21f766abdec7ed3c7a0320c6d -->

<!-- START_6d61c38b865fc2a39c9e136e7d5c3790 -->
## api/get_in_kitchen_order_list
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_in_kitchen_order_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_in_kitchen_order_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_in_kitchen_order_list`


<!-- END_6d61c38b865fc2a39c9e136e7d5c3790 -->

<!-- START_b5c3cc62b25ac2c89ae883a48b1fe6f1 -->
## api/update_kitchen_order_status
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_kitchen_order_status" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_kitchen_order_status"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_kitchen_order_status`


<!-- END_b5c3cc62b25ac2c89ae883a48b1fe6f1 -->

<!-- START_8ae1a596d728db249475b9362007ee93 -->
## api/get_register_order_amount
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_register_order_amount" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_register_order_amount"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_register_order_amount`


<!-- END_8ae1a596d728db249475b9362007ee93 -->

<!-- START_985c1576540139e69837ee5ef4f1ede9 -->
## api/get_running_order_list
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_running_order_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_running_order_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_running_order_list`


<!-- END_985c1576540139e69837ee5ef4f1ede9 -->

<!-- START_43513ec3e002c5eb9cf055d619a59947 -->
## api/share_invoice_sms/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/share_invoice_sms/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/share_invoice_sms/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/share_invoice_sms/{slack}`


<!-- END_43513ec3e002c5eb9cf055d619a59947 -->

<!-- START_6a0424af36f5976cb3c73a5dc5e586ea -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/order/{slack}`


<!-- END_6a0424af36f5976cb3c73a5dc5e586ea -->

<!-- START_f8636dcc5d234e2ed50b6cf348c54a92 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/order_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/order_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/order_list`


<!-- END_f8636dcc5d234e2ed50b6cf348c54a92 -->

<!-- START_2c5595a159bbfddfa64e80b7563d0c3e -->
## api/get_waiter_order_list
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_waiter_order_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_waiter_order_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_waiter_order_list`


<!-- END_2c5595a159bbfddfa64e80b7563d0c3e -->

<!-- START_380b233c6c7b6e50929277b073c0f3fe -->
## api/update_kitchen_item_status
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_kitchen_item_status" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_kitchen_item_status"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_kitchen_item_status`


<!-- END_380b233c6c7b6e50929277b073c0f3fe -->

<!-- START_5a76420c7d0940572fbf9249f4cf5fef -->
## api/get_digital_menu_orders_list
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_digital_menu_orders_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_digital_menu_orders_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_digital_menu_orders_list`


<!-- END_5a76420c7d0940572fbf9249f4cf5fef -->

<!-- START_ed5dbf94192a9e5120891f7fde963f8a -->
## api/get_digital_menu_orders
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_digital_menu_orders" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_digital_menu_orders"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_digital_menu_orders`


<!-- END_ed5dbf94192a9e5120891f7fde963f8a -->

<!-- START_a7e2bbb41a64a26f3ad812743de0c5a4 -->
## api/send_order_to_kitchen
> Example request:

```bash
curl -X POST \
    "http://localhost/api/send_order_to_kitchen" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/send_order_to_kitchen"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/send_order_to_kitchen`


<!-- END_a7e2bbb41a64a26f3ad812743de0c5a4 -->

<!-- START_085fd236501c2a3501a77700efdb8f4e -->
## api/toggle_order_dismissed_from_screen_status
> Example request:

```bash
curl -X POST \
    "http://localhost/api/toggle_order_dismissed_from_screen_status" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/toggle_order_dismissed_from_screen_status"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/toggle_order_dismissed_from_screen_status`


<!-- END_085fd236501c2a3501a77700efdb8f4e -->

<!-- START_d9f8df164a11c6e501c18cb2990d7d6c -->
## api/get_merge_order_list
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_merge_order_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_merge_order_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_merge_order_list`


<!-- END_d9f8df164a11c6e501c18cb2990d7d6c -->

<!-- START_625aa6fa8477c5d058d0c76e06821710 -->
## api/merge_order
> Example request:

```bash
curl -X POST \
    "http://localhost/api/merge_order" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/merge_order"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/merge_order`


<!-- END_625aa6fa8477c5d058d0c76e06821710 -->

<!-- START_7ffa425e2d39fc947c3357c5bb84dce7 -->
## api/unmerge_order
> Example request:

```bash
curl -X POST \
    "http://localhost/api/unmerge_order" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/unmerge_order"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/unmerge_order`


<!-- END_7ffa425e2d39fc947c3357c5bb84dce7 -->

<!-- START_318c837814faa65bd129e59fb8c48161 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/stores" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/stores"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/stores`


<!-- END_318c837814faa65bd129e59fb8c48161 -->

<!-- START_2def22fe3447b93362a2b43fc62524b5 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/addtrust" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/addtrust"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/addtrust`


<!-- END_2def22fe3447b93362a2b43fc62524b5 -->

<!-- START_c069fc97a831d2bb7b57fe053c9764c1 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_store/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_store/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_store/{slack}`


<!-- END_c069fc97a831d2bb7b57fe053c9764c1 -->

<!-- START_a62c0845fee3a0d676669f77f03b6a05 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/store/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/store/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/store/{slack}`


<!-- END_a62c0845fee3a0d676669f77f03b6a05 -->

<!-- START_624472b9f7e560d41e90657bec0870ff -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/store_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/store_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/store_list`


<!-- END_624472b9f7e560d41e90657bec0870ff -->

<!-- START_b43378a8ac5cc6aea00790e7a30e0596 -->
## api/import_data
> Example request:

```bash
curl -X POST \
    "http://localhost/api/import_data" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/import_data"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/import_data`


<!-- END_b43378a8ac5cc6aea00790e7a30e0596 -->

<!-- START_3c52f5d965e7183e022794c369de7abf -->
## api/update_data
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_data" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_data"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_data`


<!-- END_3c52f5d965e7183e022794c369de7abf -->

<!-- START_e32053bec33c309f0ce23660e50530c3 -->
## api/download_reference_sheet
> Example request:

```bash
curl -X POST \
    "http://localhost/api/download_reference_sheet" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/download_reference_sheet"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/download_reference_sheet`


<!-- END_e32053bec33c309f0ce23660e50530c3 -->

<!-- START_b7af9a3b0e9bf364ae62851e0d14ba13 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/discount_codes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/discount_codes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/discount_codes`


<!-- END_b7af9a3b0e9bf364ae62851e0d14ba13 -->

<!-- START_bb043ae5e2b9c0656c0a3ad57f36c25a -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_discount_code" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_discount_code"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_discount_code`


<!-- END_bb043ae5e2b9c0656c0a3ad57f36c25a -->

<!-- START_a083285b92e0167a4761d24b7ccdfc85 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_discount_code/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_discount_code/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_discount_code/{slack}`


<!-- END_a083285b92e0167a4761d24b7ccdfc85 -->

<!-- START_0eda13888ac12aa92150f68e80ada346 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/discount_code/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/discount_code/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/discount_code/{slack}`


<!-- END_0eda13888ac12aa92150f68e80ada346 -->

<!-- START_7658a08551c001f9099a93f662e81377 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/discount_code_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/discount_code_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/discount_code_list`


<!-- END_7658a08551c001f9099a93f662e81377 -->

<!-- START_1424995cd7497ea1c9b038f3de5a9795 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/payment_methods" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/payment_methods"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/payment_methods`


<!-- END_1424995cd7497ea1c9b038f3de5a9795 -->

<!-- START_baedeb012c72b1e1bc86c962d04d4dd1 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_payment_method" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_payment_method"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_payment_method`


<!-- END_baedeb012c72b1e1bc86c962d04d4dd1 -->

<!-- START_17b9aa4e591216c65300675c833cc4fe -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_payment_method/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_payment_method/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_payment_method/{slack}`


<!-- END_17b9aa4e591216c65300675c833cc4fe -->

<!-- START_fb1f11392fe06f9947870e46ecb63161 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/payment_method/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/payment_method/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/payment_method/{slack}`


<!-- END_fb1f11392fe06f9947870e46ecb63161 -->

<!-- START_6bef3406f8fd604d2e273bbde7db483f -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/payment_method_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/payment_method_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/payment_method_list`


<!-- END_6bef3406f8fd604d2e273bbde7db483f -->

<!-- START_582322a27e57e10a8422a6d37d1fe080 -->
## api/user_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/user_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/user_report`


<!-- END_582322a27e57e10a8422a6d37d1fe080 -->

<!-- START_a05f017efe361159754782860e5432bc -->
## api/category_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/category_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/category_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/category_report`


<!-- END_a05f017efe361159754782860e5432bc -->

<!-- START_00332646b812266ab5634a6c2b9990c9 -->
## api/customer_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/customer_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/customer_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/customer_report`


<!-- END_00332646b812266ab5634a6c2b9990c9 -->

<!-- START_6d1f0e6fcfea7d543487aa9773104987 -->
## api/supplier_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/supplier_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/supplier_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/supplier_report`


<!-- END_6d1f0e6fcfea7d543487aa9773104987 -->

<!-- START_098b35cbaf1068c1e2c536359e7a5be1 -->
## api/taxcode_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/taxcode_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/taxcode_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/taxcode_report`


<!-- END_098b35cbaf1068c1e2c536359e7a5be1 -->

<!-- START_bf209e9092eea8adfff771838a89c44c -->
## api/discountcode_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/discountcode_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/discountcode_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/discountcode_report`


<!-- END_bf209e9092eea8adfff771838a89c44c -->

<!-- START_ad4ff8214c4cb46c687d3d7fa8429710 -->
## api/product_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/product_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/product_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/product_report`


<!-- END_ad4ff8214c4cb46c687d3d7fa8429710 -->

<!-- START_623412f8f0587828a8ac238844ad688f -->
## api/store_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/store_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/store_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/store_report`


<!-- END_623412f8f0587828a8ac238844ad688f -->

<!-- START_526bace4a86021c1decbdf71c823ab22 -->
## api/order_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/order_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/order_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/order_report`


<!-- END_526bace4a86021c1decbdf71c823ab22 -->

<!-- START_9bafa439136ca8b73865592e4b21d3c2 -->
## api/purchase_order_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/purchase_order_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/purchase_order_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/purchase_order_report`


<!-- END_9bafa439136ca8b73865592e4b21d3c2 -->

<!-- START_687fd3de62e8ab7070186ff4a0f7869c -->
## api/invoice_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/invoice_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/invoice_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/invoice_report`


<!-- END_687fd3de62e8ab7070186ff4a0f7869c -->

<!-- START_1b1899d5d37451b8ed04177c3b69bf77 -->
## api/quotation_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/quotation_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/quotation_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/quotation_report`


<!-- END_1b1899d5d37451b8ed04177c3b69bf77 -->

<!-- START_2c7cceea618bf270e273c1c32264c588 -->
## api/transaction_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/transaction_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/transaction_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/transaction_report`


<!-- END_2c7cceea618bf270e273c1c32264c588 -->

<!-- START_530852f0e79f26d6a99f67847e204a19 -->
## api/get_trending_products
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_trending_products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_trending_products"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_trending_products`


<!-- END_530852f0e79f26d6a99f67847e204a19 -->

<!-- START_ef63291a780805b1f3817b52d89419f8 -->
## api/get_category_performance
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_category_performance" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_category_performance"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_category_performance`


<!-- END_ef63291a780805b1f3817b52d89419f8 -->

<!-- START_10c81757035181a02b19ebd32fc2851b -->
## api/product_alert_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/product_alert_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/product_alert_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/product_alert_report`


<!-- END_10c81757035181a02b19ebd32fc2851b -->

<!-- START_fa3252689b510c96ff4965f7059f94a5 -->
## api/store_stock_chart
> Example request:

```bash
curl -X POST \
    "http://localhost/api/store_stock_chart" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/store_stock_chart"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/store_stock_chart`


<!-- END_fa3252689b510c96ff4965f7059f94a5 -->

<!-- START_458e89ae70c638ae90c5e0cf42cc983f -->
## api/sale_tax_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/sale_tax_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/sale_tax_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/sale_tax_report`


<!-- END_458e89ae70c638ae90c5e0cf42cc983f -->

<!-- START_55c74221be689cdeed35bfcd62f811e0 -->
## api/billing_counter_report
> Example request:

```bash
curl -X POST \
    "http://localhost/api/billing_counter_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/billing_counter_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/billing_counter_report`


<!-- END_55c74221be689cdeed35bfcd62f811e0 -->

<!-- START_e2f326114ad9f5fd65bea4a14ada0c21 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/challan" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/challan"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/challan`


<!-- END_e2f326114ad9f5fd65bea4a14ada0c21 -->

<!-- START_18f556793b29b7945d5d60d8cad59844 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/rasid" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/rasid"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/rasid`


<!-- END_18f556793b29b7945d5d60d8cad59844 -->

<!-- START_80a0ee543c34bc0487202ceb4b930aec -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/addrasid" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/addrasid"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/addrasid`


<!-- END_80a0ee543c34bc0487202ceb4b930aec -->

<!-- START_43f455bac77b2ba7a5506103ff3af18b -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_purchase_order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_purchase_order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_purchase_order/{slack}`


<!-- END_43f455bac77b2ba7a5506103ff3af18b -->

<!-- START_2a60a14feeeaa977a0abe4c951803b3e -->
## api/update_po_status/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_po_status/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_po_status/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_po_status/{slack}`


<!-- END_2a60a14feeeaa977a0abe4c951803b3e -->

<!-- START_86938451d229da405c60ba26b16e8382 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_purchase_order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_purchase_order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_purchase_order/{slack}`


<!-- END_86938451d229da405c60ba26b16e8382 -->

<!-- START_bdf286f61f61f4af353c85e9692fad36 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/purchase_order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/purchase_order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/purchase_order/{slack}`


<!-- END_bdf286f61f61f4af353c85e9692fad36 -->

<!-- START_68bf5f60c230d5f5da57f47e4e3ca474 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/purchase_order_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/purchase_order_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/purchase_order_list`


<!-- END_68bf5f60c230d5f5da57f47e4e3ca474 -->

<!-- START_855e4439bc292e6e30e01fcdc786a5bb -->
## api/generate_invoice_from_po/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/generate_invoice_from_po/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/generate_invoice_from_po/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/generate_invoice_from_po/{slack}`


<!-- END_855e4439bc292e6e30e01fcdc786a5bb -->

<!-- START_9257ae13036b7cdade5143b5b22672f3 -->
## api/add_setting_email
> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_setting_email" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_setting_email"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_setting_email`


<!-- END_9257ae13036b7cdade5143b5b22672f3 -->

<!-- START_5af72fdb3269eaebb75127eda9cbebd4 -->
## api/update_setting_email/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_setting_email/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_setting_email/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_setting_email/{slack}`


<!-- END_5af72fdb3269eaebb75127eda9cbebd4 -->

<!-- START_b76ee76524dd92eda98d9d5fcb793849 -->
## api/send_test_email
> Example request:

```bash
curl -X POST \
    "http://localhost/api/send_test_email" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/send_test_email"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/send_test_email`


<!-- END_b76ee76524dd92eda98d9d5fcb793849 -->

<!-- START_2b2ea216456e50f22b778a1a64123f61 -->
## api/update_setting_app
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_setting_app" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_setting_app"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_setting_app`


<!-- END_2b2ea216456e50f22b778a1a64123f61 -->

<!-- START_f3511883528837b98ca62cf49c8b4292 -->
## api/remove_company_logo
> Example request:

```bash
curl -X POST \
    "http://localhost/api/remove_company_logo" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/remove_company_logo"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/remove_company_logo`


<!-- END_f3511883528837b98ca62cf49c8b4292 -->

<!-- START_3842873d36ab9d6b7340004480b2dfb9 -->
## api/clear_app_cache
> Example request:

```bash
curl -X POST \
    "http://localhost/api/clear_app_cache" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/clear_app_cache"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/clear_app_cache`


<!-- END_3842873d36ab9d6b7340004480b2dfb9 -->

<!-- START_7034a956333a4f96d313aa827edb2fb8 -->
## api/clear_app_storage
> Example request:

```bash
curl -X POST \
    "http://localhost/api/clear_app_storage" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/clear_app_storage"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/clear_app_storage`


<!-- END_7034a956333a4f96d313aa827edb2fb8 -->

<!-- START_3525a2bbc7d49ca5e149533ee067bc78 -->
## api/deactivate
> Example request:

```bash
curl -X POST \
    "http://localhost/api/deactivate" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/deactivate"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/deactivate`


<!-- END_3525a2bbc7d49ca5e149533ee067bc78 -->

<!-- START_bad19279d8fb805c0c319cd41cbe2494 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/sms_settings" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/sms_settings"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/sms_settings`


<!-- END_bad19279d8fb805c0c319cd41cbe2494 -->

<!-- START_81c54d5568796935ba819883868524a4 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_setting_sms/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_setting_sms/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_setting_sms/{slack}`


<!-- END_81c54d5568796935ba819883868524a4 -->

<!-- START_0da2e983d41b02aa7088dc1682369bef -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/sms_setting/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/sms_setting/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/sms_setting/{slack}`


<!-- END_0da2e983d41b02aa7088dc1682369bef -->

<!-- START_4582f079340025a1a707304241074393 -->
## api/filter_orders
> Example request:

```bash
curl -X POST \
    "http://localhost/api/filter_orders" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/filter_orders"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/filter_orders`


<!-- END_4582f079340025a1a707304241074393 -->

<!-- START_8696e6d39d7a11c82c283b612e94635d -->
## api/filter_customers
> Example request:

```bash
curl -X POST \
    "http://localhost/api/filter_customers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/filter_customers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/filter_customers`


<!-- END_8696e6d39d7a11c82c283b612e94635d -->

<!-- START_5721851baf05ea9ad2e72747ea7dbeb1 -->
## api/filter_purchase_orders
> Example request:

```bash
curl -X POST \
    "http://localhost/api/filter_purchase_orders" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/filter_purchase_orders"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/filter_purchase_orders`


<!-- END_5721851baf05ea9ad2e72747ea7dbeb1 -->

<!-- START_3fdd5079d7bfabf66d78b4187ae62cf6 -->
## api/filter_users
> Example request:

```bash
curl -X POST \
    "http://localhost/api/filter_users" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/filter_users"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/filter_users`


<!-- END_3fdd5079d7bfabf66d78b4187ae62cf6 -->

<!-- START_618061fb16bc140a7a88f9e8ee1c46de -->
## api/filter_invoices
> Example request:

```bash
curl -X POST \
    "http://localhost/api/filter_invoices" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/filter_invoices"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/filter_invoices`


<!-- END_618061fb16bc140a7a88f9e8ee1c46de -->

<!-- START_ff2857f96effad506eb100ccc1941b4e -->
## api/filter_quotations
> Example request:

```bash
curl -X POST \
    "http://localhost/api/filter_quotations" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/filter_quotations"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/filter_quotations`


<!-- END_ff2857f96effad506eb100ccc1941b4e -->

<!-- START_717adce90df8876b80f1e519229376d6 -->
## api/filter_transactions
> Example request:

```bash
curl -X POST \
    "http://localhost/api/filter_transactions" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/filter_transactions"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/filter_transactions`


<!-- END_717adce90df8876b80f1e519229376d6 -->

<!-- START_cd0c98812be65e8e12b1dc86469bc64f -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/invoices" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/invoices"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/invoices`


<!-- END_cd0c98812be65e8e12b1dc86469bc64f -->

<!-- START_011b938783eacee0654130e62381f0a3 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_invoice" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_invoice"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_invoice`


<!-- END_011b938783eacee0654130e62381f0a3 -->

<!-- START_42c30d1d7cc575eb2edfb0469dc437d1 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_invoice/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_invoice/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_invoice/{slack}`


<!-- END_42c30d1d7cc575eb2edfb0469dc437d1 -->

<!-- START_916e3f80e3cb4e727d0dd951f203321c -->
## api/update_invoice_status/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_invoice_status/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_invoice_status/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_invoice_status/{slack}`


<!-- END_916e3f80e3cb4e727d0dd951f203321c -->

<!-- START_f8c9985daa1640858f16887b415fcdfe -->
## api/load_bill_to_list
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_bill_to_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_bill_to_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_bill_to_list`


<!-- END_f8c9985daa1640858f16887b415fcdfe -->

<!-- START_f26d86e73bbe19c0855179db6af6d5ce -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_invoice/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_invoice/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_invoice/{slack}`


<!-- END_f26d86e73bbe19c0855179db6af6d5ce -->

<!-- START_07ad47f097e77c905e993529f4fe82ac -->
## api/get_invoice_pending_payment_data/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_invoice_pending_payment_data/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_invoice_pending_payment_data/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_invoice_pending_payment_data/{slack}`


<!-- END_07ad47f097e77c905e993529f4fe82ac -->

<!-- START_8ebcc3b89b9c9a827c281cb7e3b28260 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/invoice/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/invoice/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/invoice/{slack}`


<!-- END_8ebcc3b89b9c9a827c281cb7e3b28260 -->

<!-- START_1e042d70a779b67f166348047dfb3b18 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/invoice_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/invoice_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/invoice_list`


<!-- END_1e042d70a779b67f166348047dfb3b18 -->

<!-- START_ad0bb64a812b6d129e8fffc69a87ff19 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/quotations" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/quotations"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/quotations`


<!-- END_ad0bb64a812b6d129e8fffc69a87ff19 -->

<!-- START_24f33ced56818762cedfcb2640c60f75 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_quotation" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_quotation"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_quotation`


<!-- END_24f33ced56818762cedfcb2640c60f75 -->

<!-- START_8da30ca47378423648094b1e907646bd -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_quotation/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_quotation/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_quotation/{slack}`


<!-- END_8da30ca47378423648094b1e907646bd -->

<!-- START_b2a538c24b6dcbd8c203744981b78b29 -->
## api/update_quotation_status/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_quotation_status/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_quotation_status/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_quotation_status/{slack}`


<!-- END_b2a538c24b6dcbd8c203744981b78b29 -->

<!-- START_89e2de35258e8faba51bbdac0ae46569 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_quotation/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_quotation/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_quotation/{slack}`


<!-- END_89e2de35258e8faba51bbdac0ae46569 -->

<!-- START_00bda7dfb8d4c0cc577ecda723d4aea9 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/quotation/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/quotation/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/quotation/{slack}`


<!-- END_00bda7dfb8d4c0cc577ecda723d4aea9 -->

<!-- START_86a9044853e8d78ce228fe65eff90ce6 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/quotation_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/quotation_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/quotation_list`


<!-- END_86a9044853e8d78ce228fe65eff90ce6 -->

<!-- START_c64c6cfd1f95341a314a8d6597a37db3 -->
## api/get_stripe_payment_intent
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_stripe_payment_intent" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_stripe_payment_intent"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_stripe_payment_intent`


<!-- END_c64c6cfd1f95341a314a8d6597a37db3 -->

<!-- START_2e26f5da738e66fd7098282e8ae56f04 -->
## api/record_stripe_payment_success
> Example request:

```bash
curl -X POST \
    "http://localhost/api/record_stripe_payment_success" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/record_stripe_payment_success"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/record_stripe_payment_success`


<!-- END_2e26f5da738e66fd7098282e8ae56f04 -->

<!-- START_6b4722c832b6fc342aba101777300fbb -->
## api/record_razorpay_payment_success
> Example request:

```bash
curl -X POST \
    "http://localhost/api/record_razorpay_payment_success" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/record_razorpay_payment_success"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/record_razorpay_payment_success`


<!-- END_6b4722c832b6fc342aba101777300fbb -->

<!-- START_581b6d46db46ce3593d979a145e08a05 -->
## api/get_paypal_order_data
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_paypal_order_data" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_paypal_order_data"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_paypal_order_data`


<!-- END_581b6d46db46ce3593d979a145e08a05 -->

<!-- START_2e3bad94a1c50a2d03acc0ec870caefa -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/accounts" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/accounts"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/accounts`


<!-- END_2e3bad94a1c50a2d03acc0ec870caefa -->

<!-- START_8058d37731aedc6c8812832920b3840b -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_account" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_account"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_account`


<!-- END_8058d37731aedc6c8812832920b3840b -->

<!-- START_fa57c8ee8d0fd977a0cd9d47ecdbcbac -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_account/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_account/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_account/{slack}`


<!-- END_fa57c8ee8d0fd977a0cd9d47ecdbcbac -->

<!-- START_62a4829fb20a1262c6556a8f1c82f211 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/account/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/account/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/account/{slack}`


<!-- END_62a4829fb20a1262c6556a8f1c82f211 -->

<!-- START_81f3737bf4ced8326900730f3eccdbfa -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/account_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/account_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/account_list`


<!-- END_81f3737bf4ced8326900730f3eccdbfa -->

<!-- START_a524d236dd691776be3315d40786a1db -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/transactions" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/transactions"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/transactions`


<!-- END_a524d236dd691776be3315d40786a1db -->

<!-- START_39d85e33e07a207c33308170899074dc -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_transaction" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_transaction"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_transaction`


<!-- END_39d85e33e07a207c33308170899074dc -->

<!-- START_f9767b39e43cd48ad47b64fef932ee4e -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_transaction/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_transaction/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_transaction/{slack}`


<!-- END_f9767b39e43cd48ad47b64fef932ee4e -->

<!-- START_afde28f1c70943f73a592da3f9c2f882 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_transaction/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_transaction/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_transaction/{slack}`


<!-- END_afde28f1c70943f73a592da3f9c2f882 -->

<!-- START_761c715741e3d25c07d22292a250e030 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/transaction/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/transaction/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/transaction/{slack}`


<!-- END_761c715741e3d25c07d22292a250e030 -->

<!-- START_8eb53495d1a61e58828200e99a322b1e -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/transaction_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/transaction_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/transaction_list`


<!-- END_8eb53495d1a61e58828200e99a322b1e -->

<!-- START_54f7dc26f9839fcf1fb39e7faf645e65 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/tables" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/tables"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/tables`


<!-- END_54f7dc26f9839fcf1fb39e7faf645e65 -->

<!-- START_007f56938e836a778922fb2ba5b70f0f -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_table" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_table"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_table`


<!-- END_007f56938e836a778922fb2ba5b70f0f -->

<!-- START_f8dad077c6d8b27f2b3de17ac38345ba -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_table/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_table/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_table/{slack}`


<!-- END_f8dad077c6d8b27f2b3de17ac38345ba -->

<!-- START_ef7caec73cd6663b2a25accbd80669ff -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_table/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_table/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_table/{slack}`


<!-- END_ef7caec73cd6663b2a25accbd80669ff -->

<!-- START_7da4139ad875abf8751610673dcca398 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/table/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/table/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/table/{slack}`


<!-- END_7da4139ad875abf8751610673dcca398 -->

<!-- START_fb725f725e49b2faa6c9b8e0079b1b50 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/table_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/table_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/table_list`


<!-- END_fb725f725e49b2faa6c9b8e0079b1b50 -->

<!-- START_dd1dfd1b326573bf604e2352cfae7ed3 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/targets" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/targets"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/targets`


<!-- END_dd1dfd1b326573bf604e2352cfae7ed3 -->

<!-- START_ab1b09437ae00c62cf028bda8278cb02 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_target" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_target"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_target`


<!-- END_ab1b09437ae00c62cf028bda8278cb02 -->

<!-- START_ca4a408c03cef3b40fb786bbfff037aa -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_target/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_target/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_target/{slack}`


<!-- END_ca4a408c03cef3b40fb786bbfff037aa -->

<!-- START_133765d33b9a0e31f7019b7400f411fa -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_target/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_target/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_target/{slack}`


<!-- END_133765d33b9a0e31f7019b7400f411fa -->

<!-- START_513a12b2b1f2bd7830d47bcbe8ca27f2 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/target/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/target/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/target/{slack}`


<!-- END_513a12b2b1f2bd7830d47bcbe8ca27f2 -->

<!-- START_890650a6e2745b3f739e18ac0caa11c1 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/target_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/target_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/target_list`


<!-- END_890650a6e2745b3f739e18ac0caa11c1 -->

<!-- START_423f371369e1e1f36e8a4071c52a6aa7 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/stock_transfers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/stock_transfers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/stock_transfers`


<!-- END_423f371369e1e1f36e8a4071c52a6aa7 -->

<!-- START_461f87b9415ca5f094af3bc40056ba14 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_stock_transfer" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_stock_transfer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_stock_transfer`


<!-- END_461f87b9415ca5f094af3bc40056ba14 -->

<!-- START_ad7f6dead60f5f21b665fe0f118bfb6c -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_stock_transfer/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_stock_transfer/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_stock_transfer/{slack}`


<!-- END_ad7f6dead60f5f21b665fe0f118bfb6c -->

<!-- START_989356acd2373d6991583cc0895be2c3 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_stock_transfer/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_stock_transfer/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_stock_transfer/{slack}`


<!-- END_989356acd2373d6991583cc0895be2c3 -->

<!-- START_f950ab55b1bd22cb09bbc5f3fa80b895 -->
## api/reject_stock_transfer_product/{slack}
> Example request:

```bash
curl -X POST \
    "http://localhost/api/reject_stock_transfer_product/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/reject_stock_transfer_product/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/reject_stock_transfer_product/{slack}`


<!-- END_f950ab55b1bd22cb09bbc5f3fa80b895 -->

<!-- START_beb05092a72cc853327718527f1c4153 -->
## api/merge_product_stock
> Example request:

```bash
curl -X POST \
    "http://localhost/api/merge_product_stock" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/merge_product_stock"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/merge_product_stock`


<!-- END_beb05092a72cc853327718527f1c4153 -->

<!-- START_1721ffda9c4112e645272a192c245254 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/stock_transfer/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/stock_transfer/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/stock_transfer/{slack}`


<!-- END_1721ffda9c4112e645272a192c245254 -->

<!-- START_e97593cf11924b0030cff7a57b70d26c -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/stock_transfer_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/stock_transfer_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/stock_transfer_list`


<!-- END_e97593cf11924b0030cff7a57b70d26c -->

<!-- START_0bc48422aad83e54ba44c2a3acea5fee -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/stock_returns" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/stock_returns"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/stock_returns`


<!-- END_0bc48422aad83e54ba44c2a3acea5fee -->

<!-- START_863302ab9a1ee38f7087824bb94fe0ba -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_stock_return" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_stock_return"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_stock_return`


<!-- END_863302ab9a1ee38f7087824bb94fe0ba -->

<!-- START_16c8ee7bca59cb585c04bb8c7afb3ec2 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_stock_return/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_stock_return/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_stock_return/{slack}`


<!-- END_16c8ee7bca59cb585c04bb8c7afb3ec2 -->

<!-- START_4a2c71ff6fefbb5e5471d85955c86788 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_stock_return/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_stock_return/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_stock_return/{slack}`


<!-- END_4a2c71ff6fefbb5e5471d85955c86788 -->

<!-- START_59698b33e94d537ced0f5f54a857c14f -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/stock_return/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/stock_return/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/stock_return/{slack}`


<!-- END_59698b33e94d537ced0f5f54a857c14f -->

<!-- START_a106250868ca9937597d68317a8d1a52 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/stock_return_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/stock_return_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/stock_return_list`


<!-- END_a106250868ca9937597d68317a8d1a52 -->

<!-- START_e3e4b7925cb9217b5886830dd505827e -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/notifications" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/notifications"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/notifications`


<!-- END_e3e4b7925cb9217b5886830dd505827e -->

<!-- START_feefc8b3ad232576062083827b103c3b -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_notification" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_notification"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_notification`


<!-- END_feefc8b3ad232576062083827b103c3b -->

<!-- START_6e82577f8c30de30f6b1fe66cb2ba074 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_notification/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_notification/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_notification/{slack}`


<!-- END_6e82577f8c30de30f6b1fe66cb2ba074 -->

<!-- START_d5324493ad2be9b8eb4a002c807d0ab2 -->
## api/load_notification
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_notification" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_notification"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_notification`


<!-- END_d5324493ad2be9b8eb4a002c807d0ab2 -->

<!-- START_bf6cf95a0f12d9f21e6d3d508d397ee5 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/notification/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/notification/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/notification/{slack}`


<!-- END_bf6cf95a0f12d9f21e6d3d508d397ee5 -->

<!-- START_09d4e9a763464e4cf38367eddea65b47 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/notification_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/notification_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/notification_list`


<!-- END_09d4e9a763464e4cf38367eddea65b47 -->

<!-- START_f7a192091c76c1a9174c67efe5ce3d79 -->
## api/mark_as_read
> Example request:

```bash
curl -X POST \
    "http://localhost/api/mark_as_read" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/mark_as_read"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/mark_as_read`


<!-- END_f7a192091c76c1a9174c67efe5ce3d79 -->

<!-- START_e372826d3c83829761ca79d5359f5593 -->
## api/remove_all_notifications
> Example request:

```bash
curl -X POST \
    "http://localhost/api/remove_all_notifications" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/remove_all_notifications"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/remove_all_notifications`


<!-- END_e372826d3c83829761ca79d5359f5593 -->

<!-- START_ad88b5d2ab3e043fadb77fe59bf7bda9 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/business_registers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/business_registers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/business_registers`


<!-- END_ad88b5d2ab3e043fadb77fe59bf7bda9 -->

<!-- START_788a92ed0aa8215b935a0c2ca9266458 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/open_register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/open_register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/open_register`


<!-- END_788a92ed0aa8215b935a0c2ca9266458 -->

<!-- START_1f1d2e2ac854893c1fc6aecc1e71683c -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/close_register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/close_register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/close_register`


<!-- END_1f1d2e2ac854893c1fc6aecc1e71683c -->

<!-- START_8ad5ca71f2bca3a2cf8d94d43554488f -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_register/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_register/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_register/{slack}`


<!-- END_8ad5ca71f2bca3a2cf8d94d43554488f -->

<!-- START_a2e38fe83768c531f547fc433967bad3 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/business_register/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/business_register/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/business_register/{slack}`


<!-- END_a2e38fe83768c531f547fc433967bad3 -->

<!-- START_9b53023ed8fb2e41bb476d9bc2513872 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/business_register_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/business_register_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/business_register_list`


<!-- END_9b53023ed8fb2e41bb476d9bc2513872 -->

<!-- START_901ad1f7beb3a79ead4a4561ab1f9119 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/sms_templates" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/sms_templates"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/sms_templates`


<!-- END_901ad1f7beb3a79ead4a4561ab1f9119 -->

<!-- START_e9b71f5c2657a519ce09c6a288c460f4 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_sms_template/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_sms_template/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_sms_template/{slack}`


<!-- END_e9b71f5c2657a519ce09c6a288c460f4 -->

<!-- START_24c72a5125388e747ed30d2b2752decf -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/particulars" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/particulars"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/particulars`


<!-- END_24c72a5125388e747ed30d2b2752decf -->

<!-- START_81fc510610ff0d4776daab71690393ca -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/addparticular" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/addparticular"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/addparticular`


<!-- END_81fc510610ff0d4776daab71690393ca -->

<!-- START_0dc9b60b1f0bf837c57e50cb6d69c735 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_billing_counter/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_billing_counter/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_billing_counter/{slack}`


<!-- END_0dc9b60b1f0bf837c57e50cb6d69c735 -->

<!-- START_684f283aaacbd20be58350d517eec9cd -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/billing_counter/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/billing_counter/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/billing_counter/{slack}`


<!-- END_684f283aaacbd20be58350d517eec9cd -->

<!-- START_dda72dcaf0723207cba1d113e6b23b99 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/billing_counter_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/billing_counter_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/billing_counter_list`


<!-- END_dda72dcaf0723207cba1d113e6b23b99 -->

<!-- START_c2b625aa44af3c91ba888f8dac6b8d06 -->
## api/get_billing_master_account_type
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_billing_master_account_type" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_billing_master_account_type"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_billing_master_account_type`


<!-- END_c2b625aa44af3c91ba888f8dac6b8d06 -->

<!-- START_2b207603a7279482f53ee4be934a3881 -->
## api/get_billing_type
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_billing_type" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_billing_type"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_billing_type`


<!-- END_2b207603a7279482f53ee4be934a3881 -->

<!-- START_5b87cd37e2712f28643ba40c54442ea1 -->
## api/get_master_invoice_print_type
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_master_invoice_print_type" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_master_invoice_print_type"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_master_invoice_print_type`


<!-- END_5b87cd37e2712f28643ba40c54442ea1 -->

<!-- START_fb858aad27ceaacf741cc0c6ed440ba3 -->
## api/get_master_order_type
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_master_order_type" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_master_order_type"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_master_order_type`


<!-- END_fb858aad27ceaacf741cc0c6ed440ba3 -->

<!-- START_52880da1119213d59d517d1f2a82889c -->
## api/get_master_status
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_master_status" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_master_status"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_master_status`


<!-- END_52880da1119213d59d517d1f2a82889c -->

<!-- START_b7fe49be6b02f8579b8eb7d83b01e230 -->
## api/get_master_transaction_type
> Example request:

```bash
curl -X POST \
    "http://localhost/api/get_master_transaction_type" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/get_master_transaction_type"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/get_master_transaction_type`


<!-- END_b7fe49be6b02f8579b8eb7d83b01e230 -->

<!-- START_9957ef660bd928830c591df6aeec9dbc -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/measurement_units" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/measurement_units"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/measurement_units`


<!-- END_9957ef660bd928830c591df6aeec9dbc -->

<!-- START_4b4f4b22a93230ff295676ab63cfd90c -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_measurement_unit" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_measurement_unit"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_measurement_unit`


<!-- END_4b4f4b22a93230ff295676ab63cfd90c -->

<!-- START_ee3779a8a6f384493fda55d022bc70fb -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_measurement_unit/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_measurement_unit/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_measurement_unit/{slack}`


<!-- END_ee3779a8a6f384493fda55d022bc70fb -->

<!-- START_ddf493aa4e798759fe96cd97ceeb2976 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/measurement_unit/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/measurement_unit/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/measurement_unit/{slack}`


<!-- END_ddf493aa4e798759fe96cd97ceeb2976 -->

<!-- START_ce76922269284b0f3fb185e039c22edd -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/measurement_unit_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/measurement_unit_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/measurement_unit_list`


<!-- END_ce76922269284b0f3fb185e039c22edd -->

<!-- START_733d98025a8f90cc4fb723d941116aa8 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/bookings" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/bookings"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/bookings`


<!-- END_733d98025a8f90cc4fb723d941116aa8 -->

<!-- START_aaa97999a50899b5ff1cfab823f241fa -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_booking" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_booking"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_booking`


<!-- END_aaa97999a50899b5ff1cfab823f241fa -->

<!-- START_bb72e6e23be63f61c70b475a8ed6b043 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_booking/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_booking/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_booking/{slack}`


<!-- END_bb72e6e23be63f61c70b475a8ed6b043 -->

<!-- START_6c9b66a448ed0ab9b17b87e82c3fe692 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/booking/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/booking/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/booking/{slack}`


<!-- END_6c9b66a448ed0ab9b17b87e82c3fe692 -->

<!-- START_affe76ba482643cb4da5662170a85d46 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/booking_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/booking_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/booking_list`


<!-- END_affe76ba482643cb4da5662170a85d46 -->

<!-- START_71257e14456426b4f39ebd2a2e1f3dfd -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/delete_booking/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/delete_booking/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/delete_booking/{slack}`


<!-- END_71257e14456426b4f39ebd2a2e1f3dfd -->

<!-- START_aeafee85e9123d616ecb4f5f73a34868 -->
## api/load_events
> Example request:

```bash
curl -X POST \
    "http://localhost/api/load_events" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/load_events"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/load_events`


<!-- END_aeafee85e9123d616ecb4f5f73a34868 -->

<!-- START_7714c78d8a8b7212af76833c9aeef3e0 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/addon_groups" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/addon_groups"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/addon_groups`


<!-- END_7714c78d8a8b7212af76833c9aeef3e0 -->

<!-- START_f654822e48be5f1e0e66cf98d349a1bb -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_addon_group" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_addon_group"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_addon_group`


<!-- END_f654822e48be5f1e0e66cf98d349a1bb -->

<!-- START_dbf1b59d8c074e595285cc90d0d76f4a -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_addon_group/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_addon_group/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_addon_group/{slack}`


<!-- END_dbf1b59d8c074e595285cc90d0d76f4a -->

<!-- START_c23493f5cc195826e8767490a420d7f9 -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/addon_group/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/addon_group/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/addon_group/{slack}`


<!-- END_c23493f5cc195826e8767490a420d7f9 -->

<!-- START_74e5f87120b0180dfa594aa4b5c7e67e -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/addon_group_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/addon_group_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/addon_group_list`


<!-- END_74e5f87120b0180dfa594aa4b5c7e67e -->

<!-- START_76ff7910cb1a6e99f0828acc2ea5842a -->
## Display a listing of the resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/variant_options" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/variant_options"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/variant_options`


<!-- END_76ff7910cb1a6e99f0828acc2ea5842a -->

<!-- START_4c825e367a1cc600302109d41f133c90 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/add_variant_option" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/add_variant_option"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add_variant_option`


<!-- END_4c825e367a1cc600302109d41f133c90 -->

<!-- START_11e743715419478decfe5b328b0d710a -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/update_variant_option/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/update_variant_option/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/update_variant_option/{slack}`


<!-- END_11e743715419478decfe5b328b0d710a -->

<!-- START_2d0d3f1e5fbdb2b507fdf6a56acc766d -->
## Display the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/variant_option/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/variant_option/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/variant_option/{slack}`


<!-- END_2d0d3f1e5fbdb2b507fdf6a56acc766d -->

<!-- START_0a850f0bac08b252c3c544faf7037fc9 -->
## list all the specified resource.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/variant_option_list" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/variant_option_list"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/variant_option_list`


<!-- END_0a850f0bac08b252c3c544faf7037fc9 -->

<!-- START_53be1e9e10a08458929a2e0ea70ddb86 -->
## /
> Example request:

```bash
curl -X GET \
    -G "http://localhost/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET /`


<!-- END_53be1e9e10a08458929a2e0ea70ddb86 -->

<!-- START_568bd749946744d2753eaad6cfad5db6 -->
## logout
> Example request:

```bash
curl -X GET \
    -G "http://localhost/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET logout`


<!-- END_568bd749946744d2753eaad6cfad5db6 -->

<!-- START_a58d8f790b0ec3b8cb9dd3d0ebc79442 -->
## forgot_password
> Example request:

```bash
curl -X GET \
    -G "http://localhost/forgot_password" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/forgot_password"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET forgot_password`


<!-- END_a58d8f790b0ec3b8cb9dd3d0ebc79442 -->

<!-- START_30aeb7a08df25808e17801481932dc53 -->
## reset_password/{user_slack}/{forgot_password_token}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/reset_password/1/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/reset_password/1/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET reset_password/{user_slack}/{forgot_password_token}`


<!-- END_30aeb7a08df25808e17801481932dc53 -->

<!-- START_a6b0a80a542ea5fb96ec00e762ac0073 -->
## generate_lockout_password/{password_string?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/generate_lockout_password/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/generate_lockout_password/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET generate_lockout_password/{password_string?}`


<!-- END_a6b0a80a542ea5fb96ec00e762ac0073 -->

<!-- START_c0f505b72e10817948e65eb5eb744708 -->
## search
> Example request:

```bash
curl -X GET \
    -G "http://localhost/search" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/search"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET search`


<!-- END_c0f505b72e10817948e65eb5eb744708 -->

<!-- START_30059a09ef3f0284c40e4d06962ce08d -->
## dashboard
> Example request:

```bash
curl -X GET \
    -G "http://localhost/dashboard" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/dashboard"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET dashboard`


<!-- END_30059a09ef3f0284c40e4d06962ce08d -->

<!-- START_4dd179f93410c0707bd97c40749e1d7b -->
## billing_counter_dashboard
> Example request:

```bash
curl -X GET \
    -G "http://localhost/billing_counter_dashboard" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/billing_counter_dashboard"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET billing_counter_dashboard`


<!-- END_4dd179f93410c0707bd97c40749e1d7b -->

<!-- START_89966bfb9ab533cc3249b91a9090d3dc -->
## users
> Example request:

```bash
curl -X GET \
    -G "http://localhost/users" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/users"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET users`


<!-- END_89966bfb9ab533cc3249b91a9090d3dc -->

<!-- START_26922f9bdf2b22e46134f28b14e14d01 -->
## user/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/user/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/user/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET user/{slack}`


<!-- END_26922f9bdf2b22e46134f28b14e14d01 -->

<!-- START_500b651e3e03ccf90aafec4f2596ae30 -->
## add_user
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_user"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_user`


<!-- END_500b651e3e03ccf90aafec4f2596ae30 -->

<!-- START_c07a2e53fc55e7834b885dc859a748ff -->
## edit_user/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_user/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_user/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_user/{slack?}`


<!-- END_c07a2e53fc55e7834b885dc859a748ff -->

<!-- START_0991b8189961eedd66c83e4d6d5a708f -->
## profile/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/profile/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/profile/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET profile/{slack}`


<!-- END_0991b8189961eedd66c83e4d6d5a708f -->

<!-- START_4944c7beb85d50506720ec175d64389e -->
## edit_profile
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_profile" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_profile"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_profile`


<!-- END_4944c7beb85d50506720ec175d64389e -->

<!-- START_de5f4fc289db0f6abcc69bfdae1b0989 -->
## roles
> Example request:

```bash
curl -X GET \
    -G "http://localhost/roles" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/roles"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET roles`


<!-- END_de5f4fc289db0f6abcc69bfdae1b0989 -->

<!-- START_1cb514f2564dc0e7e4bf5eaf2bb82cb6 -->
## role/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/role/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/role/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET role/{slack}`


<!-- END_1cb514f2564dc0e7e4bf5eaf2bb82cb6 -->

<!-- START_e349b1e9f08dce23177e21b37e85a8d8 -->
## add_role
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_role" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_role"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_role`


<!-- END_e349b1e9f08dce23177e21b37e85a8d8 -->

<!-- START_4aed06e93fddaff597cff7b01536d327 -->
## edit_role/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_role/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_role/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_role/{slack?}`


<!-- END_4aed06e93fddaff597cff7b01536d327 -->

<!-- START_43e71c1a43e02edabf49d19d44c9c051 -->
## customers
> Example request:

```bash
curl -X GET \
    -G "http://localhost/customers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/customers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET customers`


<!-- END_43e71c1a43e02edabf49d19d44c9c051 -->

<!-- START_262c5b0f1a7c200b5ea9c435a6b1f880 -->
## customer/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/customer/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/customer/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET customer/{slack}`


<!-- END_262c5b0f1a7c200b5ea9c435a6b1f880 -->

<!-- START_1317e42c1804fcfb755075762c713931 -->
## add_customer
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_customer" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_customer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_customer`


<!-- END_1317e42c1804fcfb755075762c713931 -->

<!-- START_c3a24dcc9fb2788891c360d79cd926ff -->
## edit_customer/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_customer/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_customer/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_customer/{slack?}`


<!-- END_c3a24dcc9fb2788891c360d79cd926ff -->

<!-- START_fcdf2da1997bd4d8d126f782bc06524c -->
## products
> Example request:

```bash
curl -X GET \
    -G "http://localhost/products" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/products"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET products`


<!-- END_fcdf2da1997bd4d8d126f782bc06524c -->

<!-- START_9668007cf81270cb64cab5d6e0a24071 -->
## product/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/product/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/product/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET product/{slack}`


<!-- END_9668007cf81270cb64cab5d6e0a24071 -->

<!-- START_5d6439530e1f1642dbb6d129d0ad3443 -->
## add_product
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_product" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_product"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_product`


<!-- END_5d6439530e1f1642dbb6d129d0ad3443 -->

<!-- START_67293a33314d861568a31e9b93a44648 -->
## edit_product/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_product/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_product/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_product/{slack?}`


<!-- END_67293a33314d861568a31e9b93a44648 -->

<!-- START_742ea62b8df64ab6c8a1b27794cb74c5 -->
## generate_barcode
> Example request:

```bash
curl -X GET \
    -G "http://localhost/generate_barcode" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/generate_barcode"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET generate_barcode`


<!-- END_742ea62b8df64ab6c8a1b27794cb74c5 -->

<!-- START_31b2be4397f19eec1f7c461126b0902c -->
## add_new_stock_transfer_product/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_new_stock_transfer_product/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_new_stock_transfer_product/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_new_stock_transfer_product/{slack?}`


<!-- END_31b2be4397f19eec1f7c461126b0902c -->

<!-- START_6a107a131f853e92450ac742beba0e7f -->
## categories
> Example request:

```bash
curl -X GET \
    -G "http://localhost/categories" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/categories"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET categories`


<!-- END_6a107a131f853e92450ac742beba0e7f -->

<!-- START_9debd84b8927ae551176492cabd4b4f6 -->
## category/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/category/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/category/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET category/{slack}`


<!-- END_9debd84b8927ae551176492cabd4b4f6 -->

<!-- START_63d3a90837c899b4ab71dcba777ddc0b -->
## add_category
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_category" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_category"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_category`


<!-- END_63d3a90837c899b4ab71dcba777ddc0b -->

<!-- START_9eecd51b994f119ca4c9bb53f54551cf -->
## edit_category/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_category/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_category/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_category/{slack?}`


<!-- END_9eecd51b994f119ca4c9bb53f54551cf -->

<!-- START_4ffa3db5c26010d69cb261bb70ad60a4 -->
## suppliers
> Example request:

```bash
curl -X GET \
    -G "http://localhost/suppliers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/suppliers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET suppliers`


<!-- END_4ffa3db5c26010d69cb261bb70ad60a4 -->

<!-- START_d4064081794fe16e1a15b93f280a21fb -->
## supplier/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/supplier/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/supplier/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET supplier/{slack}`


<!-- END_d4064081794fe16e1a15b93f280a21fb -->

<!-- START_739468648ff14a83c6b86516e6c41e06 -->
## add_supplier
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_supplier" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_supplier"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_supplier`


<!-- END_739468648ff14a83c6b86516e6c41e06 -->

<!-- START_c09b6374d266a6e274b118d4fc558826 -->
## edit_supplier/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_supplier/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_supplier/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_supplier/{slack?}`


<!-- END_c09b6374d266a6e274b118d4fc558826 -->

<!-- START_381404ca06142f6444811489bb417968 -->
## tax_codes
> Example request:

```bash
curl -X GET \
    -G "http://localhost/tax_codes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/tax_codes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET tax_codes`


<!-- END_381404ca06142f6444811489bb417968 -->

<!-- START_c7fa4a06dfbae45bb58018b68e0df7af -->
## tax_code/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/tax_code/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/tax_code/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET tax_code/{slack}`


<!-- END_c7fa4a06dfbae45bb58018b68e0df7af -->

<!-- START_8f4c365e8362a254398d192f144677ad -->
## add_tax_code
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_tax_code" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_tax_code"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_tax_code`


<!-- END_8f4c365e8362a254398d192f144677ad -->

<!-- START_d0ab113256627b28104bcc13140e9ec1 -->
## edit_tax_code/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_tax_code/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_tax_code/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_tax_code/{slack?}`


<!-- END_d0ab113256627b28104bcc13140e9ec1 -->

<!-- START_b5c3d96b6f223c292187fb2933f21034 -->
## orders
> Example request:

```bash
curl -X GET \
    -G "http://localhost/orders" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/orders"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET orders`


<!-- END_b5c3d96b6f223c292187fb2933f21034 -->

<!-- START_ef5aff16f8ab85069d3eb66d5424f34d -->
## order/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET order/{slack}`


<!-- END_ef5aff16f8ab85069d3eb66d5424f34d -->

<!-- START_c7b0ddc4b4914ddb2e383b85bb9a623c -->
## add_order
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_order" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_order"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_order`


<!-- END_c7b0ddc4b4914ddb2e383b85bb9a623c -->

<!-- START_7e338e536770926017a0cb8d9aad0147 -->
## edit_order/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_order/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_order/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_order/{slack?}`


<!-- END_7e338e536770926017a0cb8d9aad0147 -->

<!-- START_2ac48aae82293e6dcbc3f67c7a24daa5 -->
## print_order/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/print_order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/print_order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET print_order/{slack}`


<!-- END_2ac48aae82293e6dcbc3f67c7a24daa5 -->

<!-- START_39e1a53bc5f6d471bde4f9cafb29c8a7 -->
## print_kot/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/print_kot/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/print_kot/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET print_kot/{slack}`


<!-- END_39e1a53bc5f6d471bde4f9cafb29c8a7 -->

<!-- START_ac7d27df583acc8a8877076c3c72d977 -->
## order_summary/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/order_summary/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/order_summary/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET order_summary/{slack}`


<!-- END_ac7d27df583acc8a8877076c3c72d977 -->

<!-- START_6baff1a8825ee0fdae785911a94b6848 -->
## trusts
> Example request:

```bash
curl -X GET \
    -G "http://localhost/trusts" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/trusts"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET trusts`


<!-- END_6baff1a8825ee0fdae785911a94b6848 -->

<!-- START_0d86ad37fb7e43fed26909a347b3370f -->
## store/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/store/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/store/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET store/{slack}`


<!-- END_0d86ad37fb7e43fed26909a347b3370f -->

<!-- START_0fb0af9f69c361a51f24ee1f87e35116 -->
## addtrust
> Example request:

```bash
curl -X GET \
    -G "http://localhost/addtrust" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/addtrust"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET addtrust`


<!-- END_0fb0af9f69c361a51f24ee1f87e35116 -->

<!-- START_b3c197d03bed80f726ede9866cf0d095 -->
## edittrust/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edittrust/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edittrust/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edittrust/{slack?}`


<!-- END_b3c197d03bed80f726ede9866cf0d095 -->

<!-- START_148d173284575ef46c389c4d3548f4ec -->
## seltrust
> Example request:

```bash
curl -X GET \
    -G "http://localhost/seltrust" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/seltrust"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET seltrust`


<!-- END_148d173284575ef46c389c4d3548f4ec -->

<!-- START_f0a2dfb24815ee010b07301b4a0e040c -->
## import_data
> Example request:

```bash
curl -X GET \
    -G "http://localhost/import_data" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/import_data"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET import_data`


<!-- END_f0a2dfb24815ee010b07301b4a0e040c -->

<!-- START_2549e9c30b3a19efaa3c29f9d7be5383 -->
## update_data
> Example request:

```bash
curl -X GET \
    -G "http://localhost/update_data" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/update_data"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET update_data`


<!-- END_2549e9c30b3a19efaa3c29f9d7be5383 -->

<!-- START_468e2aa4d95fe2443cf57ec824fbe4cc -->
## discount_codes
> Example request:

```bash
curl -X GET \
    -G "http://localhost/discount_codes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/discount_codes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET discount_codes`


<!-- END_468e2aa4d95fe2443cf57ec824fbe4cc -->

<!-- START_e7b3f288a46b2799ee407bf50cc5d6cf -->
## discount_code/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/discount_code/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/discount_code/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET discount_code/{slack}`


<!-- END_e7b3f288a46b2799ee407bf50cc5d6cf -->

<!-- START_73c6dc7d3cd4bab6b0700dfcbee35d46 -->
## add_discount_code
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_discount_code" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_discount_code"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_discount_code`


<!-- END_73c6dc7d3cd4bab6b0700dfcbee35d46 -->

<!-- START_5972853dcca92742d0096981b0bab955 -->
## edit_discount_code/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_discount_code/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_discount_code/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_discount_code/{slack?}`


<!-- END_5972853dcca92742d0096981b0bab955 -->

<!-- START_52ffb86b2a1361c0c116b38bff18965a -->
## payment_methods
> Example request:

```bash
curl -X GET \
    -G "http://localhost/payment_methods" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/payment_methods"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET payment_methods`


<!-- END_52ffb86b2a1361c0c116b38bff18965a -->

<!-- START_922543e8d642dfe7eea67f0c6812bede -->
## payment_method/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/payment_method/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/payment_method/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET payment_method/{slack}`


<!-- END_922543e8d642dfe7eea67f0c6812bede -->

<!-- START_4181e6d93f95e852973ecf019ce3e48a -->
## add_payment_method
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_payment_method" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_payment_method"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_payment_method`


<!-- END_4181e6d93f95e852973ecf019ce3e48a -->

<!-- START_d235faac4de8c02991e040739bf543a0 -->
## edit_payment_method/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_payment_method/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_payment_method/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_payment_method/{slack?}`


<!-- END_d235faac4de8c02991e040739bf543a0 -->

<!-- START_a15f7b6b3247906990e7cf3ef84426bf -->
## download_reports
> Example request:

```bash
curl -X GET \
    -G "http://localhost/download_reports" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/download_reports"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET download_reports`


<!-- END_a15f7b6b3247906990e7cf3ef84426bf -->

<!-- START_845f8690e47f4e592b842baaa736824a -->
## best_seller_report
> Example request:

```bash
curl -X GET \
    -G "http://localhost/best_seller_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/best_seller_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET best_seller_report`


<!-- END_845f8690e47f4e592b842baaa736824a -->

<!-- START_7f4070cec6aff132361201a047daf332 -->
## day_wise_sale_report
> Example request:

```bash
curl -X GET \
    -G "http://localhost/day_wise_sale_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/day_wise_sale_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET day_wise_sale_report`


<!-- END_7f4070cec6aff132361201a047daf332 -->

<!-- START_498bc6d96b9ba50efd67ee885d3e9928 -->
## catgeory_report
> Example request:

```bash
curl -X GET \
    -G "http://localhost/catgeory_report" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/catgeory_report"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET catgeory_report`


<!-- END_498bc6d96b9ba50efd67ee885d3e9928 -->

<!-- START_8ac140f7857b4e4cef5c472b25763d5b -->
## product_quantity_alert
> Example request:

```bash
curl -X GET \
    -G "http://localhost/product_quantity_alert" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/product_quantity_alert"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET product_quantity_alert`


<!-- END_8ac140f7857b4e4cef5c472b25763d5b -->

<!-- START_b9eef5523e04ec99869ef40cdc8141ff -->
## store_stock_chart
> Example request:

```bash
curl -X GET \
    -G "http://localhost/store_stock_chart" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/store_stock_chart"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET store_stock_chart`


<!-- END_b9eef5523e04ec99869ef40cdc8141ff -->

<!-- START_447a644799d68ba5a4aebb09029cb3d7 -->
## email_setting
> Example request:

```bash
curl -X GET \
    -G "http://localhost/email_setting" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/email_setting"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET email_setting`


<!-- END_447a644799d68ba5a4aebb09029cb3d7 -->

<!-- START_092ed41cb19158bfb73b4ed61c5f6d71 -->
## edit_email_setting/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_email_setting/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_email_setting/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_email_setting/{slack?}`


<!-- END_092ed41cb19158bfb73b4ed61c5f6d71 -->

<!-- START_5fd9e6821beb7a4b923b245f26e03bbf -->
## app_setting
> Example request:

```bash
curl -X GET \
    -G "http://localhost/app_setting" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/app_setting"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET app_setting`


<!-- END_5fd9e6821beb7a4b923b245f26e03bbf -->

<!-- START_898039e40f1c6d186a0d14afb3d861d3 -->
## edit_app_setting
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_app_setting" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_app_setting"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_app_setting`


<!-- END_898039e40f1c6d186a0d14afb3d861d3 -->

<!-- START_d0fba903084ac3a0ae0410b93adb1da3 -->
## challans
> Example request:

```bash
curl -X GET \
    -G "http://localhost/challans" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/challans"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET challans`


<!-- END_d0fba903084ac3a0ae0410b93adb1da3 -->

<!-- START_853a30dadefb109c3ba18e2b654c5680 -->
## addchallan
> Example request:

```bash
curl -X GET \
    -G "http://localhost/addchallan" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/addchallan"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET addchallan`


<!-- END_853a30dadefb109c3ba18e2b654c5680 -->

<!-- START_4ecbe629b715c53f1cec27904b46ce5f -->
## rasids
> Example request:

```bash
curl -X GET \
    -G "http://localhost/rasids" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/rasids"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET rasids`


<!-- END_4ecbe629b715c53f1cec27904b46ce5f -->

<!-- START_f99775155bfe8c76de84ac94204b5991 -->
## purchase_order/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/purchase_order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/purchase_order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET purchase_order/{slack}`


<!-- END_f99775155bfe8c76de84ac94204b5991 -->

<!-- START_0db168fe337eeeb22f01a8f6f87bd250 -->
## addrasid
> Example request:

```bash
curl -X GET \
    -G "http://localhost/addrasid" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/addrasid"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET addrasid`


<!-- END_0db168fe337eeeb22f01a8f6f87bd250 -->

<!-- START_b1ceb601fb53eaf73fe8f281bb2bb0aa -->
## editrasid/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/editrasid/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/editrasid/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET editrasid/{slack?}`


<!-- END_b1ceb601fb53eaf73fe8f281bb2bb0aa -->

<!-- START_d4401caaae20de57229378d8f1ee7490 -->
## print_purchase_order/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/print_purchase_order/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/print_purchase_order/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET print_purchase_order/{slack}`


<!-- END_d4401caaae20de57229378d8f1ee7490 -->

<!-- START_f5f26892e3f3605a384c1378f3fbc116 -->
## invoices
> Example request:

```bash
curl -X GET \
    -G "http://localhost/invoices" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/invoices"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET invoices`


<!-- END_f5f26892e3f3605a384c1378f3fbc116 -->

<!-- START_31c23de083d260381c215628531862eb -->
## invoice/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/invoice/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/invoice/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET invoice/{slack}`


<!-- END_31c23de083d260381c215628531862eb -->

<!-- START_31c2c58df0548041daa2eece04f0fb6e -->
## add_invoice
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_invoice" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_invoice"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_invoice`


<!-- END_31c2c58df0548041daa2eece04f0fb6e -->

<!-- START_64ff1fde943afd4900ca7090f968c275 -->
## edit_invoice/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_invoice/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_invoice/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_invoice/{slack?}`


<!-- END_64ff1fde943afd4900ca7090f968c275 -->

<!-- START_fe96cdb15b03598f0c1797b63df75760 -->
## print_invoice/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/print_invoice/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/print_invoice/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET print_invoice/{slack}`


<!-- END_fe96cdb15b03598f0c1797b63df75760 -->

<!-- START_3b1906d05622406e691eea7d4e6ef429 -->
## quotations
> Example request:

```bash
curl -X GET \
    -G "http://localhost/quotations" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/quotations"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET quotations`


<!-- END_3b1906d05622406e691eea7d4e6ef429 -->

<!-- START_fb91d2348b1a9d172d335cefb6395a49 -->
## quotation/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/quotation/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/quotation/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET quotation/{slack}`


<!-- END_fb91d2348b1a9d172d335cefb6395a49 -->

<!-- START_dc24cdf8a990f77966a87fecf34fe53a -->
## add_quotation
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_quotation" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_quotation"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_quotation`


<!-- END_dc24cdf8a990f77966a87fecf34fe53a -->

<!-- START_c228c4f1948f06efd16bca08bf946374 -->
## edit_quotation/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_quotation/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_quotation/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_quotation/{slack?}`


<!-- END_c228c4f1948f06efd16bca08bf946374 -->

<!-- START_f81b7aa3473cdff3aef5c03b56e9eea2 -->
## print_quotation/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/print_quotation/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/print_quotation/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET print_quotation/{slack}`


<!-- END_f81b7aa3473cdff3aef5c03b56e9eea2 -->

<!-- START_dfc2468b6c66900c1ad6893ed2e9056f -->
## payment_gateway/{type}/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/payment_gateway/1/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/payment_gateway/1/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET payment_gateway/{type}/{slack}`


<!-- END_dfc2468b6c66900c1ad6893ed2e9056f -->

<!-- START_7301a4b24d2dee44eceb7751b6940dba -->
## accounts
> Example request:

```bash
curl -X GET \
    -G "http://localhost/accounts" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/accounts"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET accounts`


<!-- END_7301a4b24d2dee44eceb7751b6940dba -->

<!-- START_e167b9e89520ac623b07c3891b3a69f5 -->
## account/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/account/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/account/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET account/{slack}`


<!-- END_e167b9e89520ac623b07c3891b3a69f5 -->

<!-- START_96f16ac073ab8cc49af470b7b7432c70 -->
## add_account
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_account" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_account"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_account`


<!-- END_96f16ac073ab8cc49af470b7b7432c70 -->

<!-- START_9effdaeff7ddbfdedb5c88c0a269f505 -->
## edit_account/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_account/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_account/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_account/{slack?}`


<!-- END_9effdaeff7ddbfdedb5c88c0a269f505 -->

<!-- START_5955d0cf00e0465e459a6296091ec339 -->
## transactions
> Example request:

```bash
curl -X GET \
    -G "http://localhost/transactions" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/transactions"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET transactions`


<!-- END_5955d0cf00e0465e459a6296091ec339 -->

<!-- START_b014b85aabe10d5d44713c1ac0e7d82d -->
## transaction/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/transaction/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/transaction/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET transaction/{slack}`


<!-- END_b014b85aabe10d5d44713c1ac0e7d82d -->

<!-- START_5ba82176a2ec038527eee2accd922f26 -->
## add_transaction
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_transaction" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_transaction"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_transaction`


<!-- END_5ba82176a2ec038527eee2accd922f26 -->

<!-- START_48b28ba6f83abf7cb7ad6ff1f1c31f06 -->
## edit_transaction/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_transaction/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_transaction/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_transaction/{slack?}`


<!-- END_48b28ba6f83abf7cb7ad6ff1f1c31f06 -->

<!-- START_1943c3dab4832edc2ef7014e13eb32ce -->
## tables
> Example request:

```bash
curl -X GET \
    -G "http://localhost/tables" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/tables"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET tables`


<!-- END_1943c3dab4832edc2ef7014e13eb32ce -->

<!-- START_d85d40009a691c4f858ccff9efc42d96 -->
## table/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/table/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/table/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET table/{slack}`


<!-- END_d85d40009a691c4f858ccff9efc42d96 -->

<!-- START_081bda9e3328f717a98404ecd920a5e6 -->
## add_table
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_table" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_table"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_table`


<!-- END_081bda9e3328f717a98404ecd920a5e6 -->

<!-- START_3cfdfcaaa929e76ddcb2bfc6e8598c73 -->
## edit_table/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_table/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_table/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_table/{slack?}`


<!-- END_3cfdfcaaa929e76ddcb2bfc6e8598c73 -->

<!-- START_5c285aa3a5e2be93fed34d0c14dee0b5 -->
## kitchen
> Example request:

```bash
curl -X GET \
    -G "http://localhost/kitchen" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/kitchen"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET kitchen`


<!-- END_5c285aa3a5e2be93fed34d0c14dee0b5 -->

<!-- START_7119d7e4b3dca010b20a5f2952267fcd -->
## targets
> Example request:

```bash
curl -X GET \
    -G "http://localhost/targets" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/targets"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET targets`


<!-- END_7119d7e4b3dca010b20a5f2952267fcd -->

<!-- START_000f2a345dbff5e29406bc6e9af0be57 -->
## target/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/target/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/target/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET target/{slack}`


<!-- END_000f2a345dbff5e29406bc6e9af0be57 -->

<!-- START_ab4a735210d73daed8e8eb1ba1b53b39 -->
## add_target
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_target" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_target"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_target`


<!-- END_ab4a735210d73daed8e8eb1ba1b53b39 -->

<!-- START_8f71bd84d6560bc62de86ef3d3fe4717 -->
## edit_target/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_target/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_target/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_target/{slack?}`


<!-- END_8f71bd84d6560bc62de86ef3d3fe4717 -->

<!-- START_56975647c38f79fc609df5ddc1e548e7 -->
## stock_transfers
> Example request:

```bash
curl -X GET \
    -G "http://localhost/stock_transfers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/stock_transfers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET stock_transfers`


<!-- END_56975647c38f79fc609df5ddc1e548e7 -->

<!-- START_090457e7c5561d055703c25a73125b84 -->
## stock_transfer/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/stock_transfer/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/stock_transfer/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET stock_transfer/{slack}`


<!-- END_090457e7c5561d055703c25a73125b84 -->

<!-- START_8f4d824c98ef6e150b9d5d973d4bf4f8 -->
## add_stock_transfer
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_stock_transfer" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_stock_transfer"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_stock_transfer`


<!-- END_8f4d824c98ef6e150b9d5d973d4bf4f8 -->

<!-- START_12126d5d1446c474595e566a493b22f8 -->
## edit_stock_transfer/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_stock_transfer/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_stock_transfer/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_stock_transfer/{slack?}`


<!-- END_12126d5d1446c474595e566a493b22f8 -->

<!-- START_bed72959c887edd7a530ab3c9eceedf1 -->
## verify_stock_transfer/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/verify_stock_transfer/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/verify_stock_transfer/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET verify_stock_transfer/{slack?}`


<!-- END_bed72959c887edd7a530ab3c9eceedf1 -->

<!-- START_a951070cb8e71f2e8f3304f301294c85 -->
## stock_returns
> Example request:

```bash
curl -X GET \
    -G "http://localhost/stock_returns" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/stock_returns"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET stock_returns`


<!-- END_a951070cb8e71f2e8f3304f301294c85 -->

<!-- START_0e8030f0230ec7f33a071402b5134829 -->
## stock_return/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/stock_return/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/stock_return/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET stock_return/{slack}`


<!-- END_0e8030f0230ec7f33a071402b5134829 -->

<!-- START_1199278aa7f921aaf840ed8cea932f4e -->
## add_stock_return
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_stock_return" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_stock_return"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_stock_return`


<!-- END_1199278aa7f921aaf840ed8cea932f4e -->

<!-- START_66cded65bbb22c7695b47df287a2570a -->
## edit_stock_return/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_stock_return/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_stock_return/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_stock_return/{slack?}`


<!-- END_66cded65bbb22c7695b47df287a2570a -->

<!-- START_fb542d10e14f8153d3c69e427a53d1b3 -->
## print_stock_return/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/print_stock_return/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/print_stock_return/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET print_stock_return/{slack}`


<!-- END_fb542d10e14f8153d3c69e427a53d1b3 -->

<!-- START_e4f3f8570b9b48dd1329d9b3eaed5bfc -->
## notifications
> Example request:

```bash
curl -X GET \
    -G "http://localhost/notifications" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/notifications"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET notifications`


<!-- END_e4f3f8570b9b48dd1329d9b3eaed5bfc -->

<!-- START_043e09e4ae1c2473bc484a2b32c45fba -->
## notification/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/notification/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/notification/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET notification/{slack}`


<!-- END_043e09e4ae1c2473bc484a2b32c45fba -->

<!-- START_e0136dcd6ebb2f87f0687eaecd75d04d -->
## add_notification
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_notification" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_notification"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_notification`


<!-- END_e0136dcd6ebb2f87f0687eaecd75d04d -->

<!-- START_94b2313fb7de39b57981a19e8bbd21f5 -->
## edit_notification/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_notification/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_notification/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_notification/{slack?}`


<!-- END_94b2313fb7de39b57981a19e8bbd21f5 -->

<!-- START_32007eff4c915296075968af046d0c8e -->
## business_registers
> Example request:

```bash
curl -X GET \
    -G "http://localhost/business_registers" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/business_registers"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET business_registers`


<!-- END_32007eff4c915296075968af046d0c8e -->

<!-- START_5ea590f0cb275d7a12d686a63d938089 -->
## business_register/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/business_register/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/business_register/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET business_register/{slack}`


<!-- END_5ea590f0cb275d7a12d686a63d938089 -->

<!-- START_0723f385c2dbd5a1f89b87df13cdba6c -->
## add_business_register
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_business_register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_business_register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_business_register`


<!-- END_0723f385c2dbd5a1f89b87df13cdba6c -->

<!-- START_d21a1b6061ce472160cda7a8de97b43a -->
## print_register_report/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/print_register_report/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/print_register_report/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET print_register_report/{slack?}`


<!-- END_d21a1b6061ce472160cda7a8de97b43a -->

<!-- START_50888149ef51beb4277a35a20586f6d0 -->
## register_summary/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/register_summary/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/register_summary/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET register_summary/{slack}`


<!-- END_50888149ef51beb4277a35a20586f6d0 -->

<!-- START_1f98a911a222e79ad600f48c8b18343e -->
## sms_settings
> Example request:

```bash
curl -X GET \
    -G "http://localhost/sms_settings" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/sms_settings"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET sms_settings`


<!-- END_1f98a911a222e79ad600f48c8b18343e -->

<!-- START_1666d665385a758a8e320346114d4cad -->
## sms_setting/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/sms_setting/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/sms_setting/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET sms_setting/{slack}`


<!-- END_1666d665385a758a8e320346114d4cad -->

<!-- START_cc3382bf344ca79004d08c3e6a440bd9 -->
## edit_sms_setting/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_sms_setting/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_sms_setting/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_sms_setting/{slack}`


<!-- END_cc3382bf344ca79004d08c3e6a440bd9 -->

<!-- START_6c916bb9e996eff0cf46029e7f434c0c -->
## sms_templates
> Example request:

```bash
curl -X GET \
    -G "http://localhost/sms_templates" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/sms_templates"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET sms_templates`


<!-- END_6c916bb9e996eff0cf46029e7f434c0c -->

<!-- START_de7762fdab60a8099db17fdf24bc6ce1 -->
## sms_template/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/sms_template/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/sms_template/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET sms_template/{slack}`


<!-- END_de7762fdab60a8099db17fdf24bc6ce1 -->

<!-- START_27c8d3cf6c9122221d98bcbab24fff43 -->
## edit_sms_template/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_sms_template/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_sms_template/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_sms_template/{slack}`


<!-- END_27c8d3cf6c9122221d98bcbab24fff43 -->

<!-- START_97781360909b6fe8caa8b1d258be200c -->
## particulars
> Example request:

```bash
curl -X GET \
    -G "http://localhost/particulars" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/particulars"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET particulars`


<!-- END_97781360909b6fe8caa8b1d258be200c -->

<!-- START_c622d42fb446f74c03c0b2700d5ed72f -->
## billing_counter/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/billing_counter/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/billing_counter/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET billing_counter/{slack}`


<!-- END_c622d42fb446f74c03c0b2700d5ed72f -->

<!-- START_6a2552fb0d3754a199f9d1294dad2266 -->
## addparticular
> Example request:

```bash
curl -X GET \
    -G "http://localhost/addparticular" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/addparticular"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET addparticular`


<!-- END_6a2552fb0d3754a199f9d1294dad2266 -->

<!-- START_b6a5b859d6cb27cbac392987af6af3ed -->
## edit_billing_counter/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_billing_counter/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_billing_counter/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_billing_counter/{slack?}`


<!-- END_b6a5b859d6cb27cbac392987af6af3ed -->

<!-- START_27051b1d4bbaf0eef20b64a24798544f -->
## measurement_units
> Example request:

```bash
curl -X GET \
    -G "http://localhost/measurement_units" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/measurement_units"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET measurement_units`


<!-- END_27051b1d4bbaf0eef20b64a24798544f -->

<!-- START_1d6890b701d822291734c4a57b5e9c15 -->
## measurement_unit/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/measurement_unit/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/measurement_unit/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET measurement_unit/{slack}`


<!-- END_1d6890b701d822291734c4a57b5e9c15 -->

<!-- START_a693694acb3535eb16206e18d32f2b44 -->
## add_measurement_unit
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_measurement_unit" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_measurement_unit"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_measurement_unit`


<!-- END_a693694acb3535eb16206e18d32f2b44 -->

<!-- START_7460bb189e97bdf2c6f202512f2ebb7f -->
## edit_measurement_unit/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_measurement_unit/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_measurement_unit/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_measurement_unit/{slack?}`


<!-- END_7460bb189e97bdf2c6f202512f2ebb7f -->

<!-- START_98e705cf4e45bc12ad577e734fc5dc83 -->
## waiter
> Example request:

```bash
curl -X GET \
    -G "http://localhost/waiter" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/waiter"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET waiter`


<!-- END_98e705cf4e45bc12ad577e734fc5dc83 -->

<!-- START_573da68a1d8409169c0359a375d6eb84 -->
## restaurant_menu
> Example request:

```bash
curl -X GET \
    -G "http://localhost/restaurant_menu" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/restaurant_menu"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET restaurant_menu`


<!-- END_573da68a1d8409169c0359a375d6eb84 -->

<!-- START_1ed58a4bd4ebb93b5f9ae2d7dd994d2b -->
## bookings
> Example request:

```bash
curl -X GET \
    -G "http://localhost/bookings" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/bookings"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET bookings`


<!-- END_1ed58a4bd4ebb93b5f9ae2d7dd994d2b -->

<!-- START_a764eaad7ce1a7f14254998db265c938 -->
## booking/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/booking/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/booking/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET booking/{slack}`


<!-- END_a764eaad7ce1a7f14254998db265c938 -->

<!-- START_94020f900006f5f009bd23b828c677ef -->
## add_booking
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_booking" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_booking"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_booking`


<!-- END_94020f900006f5f009bd23b828c677ef -->

<!-- START_d80de31bc605688ebf6461cef7c89ff3 -->
## edit_booking/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_booking/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_booking/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_booking/{slack?}`


<!-- END_d80de31bc605688ebf6461cef7c89ff3 -->

<!-- START_63918f8540a6e51cfc5859b5600cd360 -->
## calendar
> Example request:

```bash
curl -X GET \
    -G "http://localhost/calendar" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/calendar"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET calendar`


<!-- END_63918f8540a6e51cfc5859b5600cd360 -->

<!-- START_9126c973d54bba45c517e41a17423da9 -->
## digital_menu_orders
> Example request:

```bash
curl -X GET \
    -G "http://localhost/digital_menu_orders" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/digital_menu_orders"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET digital_menu_orders`


<!-- END_9126c973d54bba45c517e41a17423da9 -->

<!-- START_cfe84bc747cf52df91618849a5f73e79 -->
## addon_groups
> Example request:

```bash
curl -X GET \
    -G "http://localhost/addon_groups" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/addon_groups"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET addon_groups`


<!-- END_cfe84bc747cf52df91618849a5f73e79 -->

<!-- START_7d6ffb0cdad326f54d18902d5bf28d98 -->
## addon_group/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/addon_group/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/addon_group/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET addon_group/{slack}`


<!-- END_7d6ffb0cdad326f54d18902d5bf28d98 -->

<!-- START_2b8d55fed6360362c2cd6fe778f07f02 -->
## add_addon_group
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_addon_group" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_addon_group"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_addon_group`


<!-- END_2b8d55fed6360362c2cd6fe778f07f02 -->

<!-- START_d1a5a9b9b1bcda03c511fda5ebe946dc -->
## edit_addon_group/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_addon_group/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_addon_group/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_addon_group/{slack?}`


<!-- END_d1a5a9b9b1bcda03c511fda5ebe946dc -->

<!-- START_c48175a5c068339aea90be9038ff113f -->
## variant_options
> Example request:

```bash
curl -X GET \
    -G "http://localhost/variant_options" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/variant_options"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET variant_options`


<!-- END_c48175a5c068339aea90be9038ff113f -->

<!-- START_5be5fc8d70d1f2de55f03e13ae4b5a9e -->
## variant_option/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/variant_option/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/variant_option/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET variant_option/{slack}`


<!-- END_5be5fc8d70d1f2de55f03e13ae4b5a9e -->

<!-- START_0a89dba4e4970ee8e90c488bbda036f6 -->
## add_variant_option
> Example request:

```bash
curl -X GET \
    -G "http://localhost/add_variant_option" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/add_variant_option"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET add_variant_option`


<!-- END_0a89dba4e4970ee8e90c488bbda036f6 -->

<!-- START_3cecf0ded282e649f9605b17b9554a88 -->
## edit_variant_option/{slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/edit_variant_option/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/edit_variant_option/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET edit_variant_option/{slack?}`


<!-- END_3cecf0ded282e649f9605b17b9554a88 -->

<!-- START_4266a401775559ebd48c1e6e82944766 -->
## order_public/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/order_public/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/order_public/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET order_public/{slack}`


<!-- END_4266a401775559ebd48c1e6e82944766 -->

<!-- START_3ae3706d057b04259e6ecaed407b62da -->
## our_menu/{store_slack}/{table_slack?}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/our_menu/1/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/our_menu/1/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET our_menu/{store_slack}/{table_slack?}`


<!-- END_3ae3706d057b04259e6ecaed407b62da -->

<!-- START_7ee8a6b1c9571ca3e6dbf8af6427d68f -->
## qrmenu_payment/{type}/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/qrmenu_payment/1/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/qrmenu_payment/1/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET qrmenu_payment/{type}/{slack}`


<!-- END_7ee8a6b1c9571ca3e6dbf8af6427d68f -->

<!-- START_f3991dc99f36596e6701579ab4650125 -->
## print_order_public/{slack}
> Example request:

```bash
curl -X GET \
    -G "http://localhost/print_order_public/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/print_order_public/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET print_order_public/{slack}`


<!-- END_f3991dc99f36596e6701579ab4650125 -->

<!-- START_df215948089b17150147cf6c0fc98888 -->
## execute_database_migrations
> Example request:

```bash
curl -X GET \
    -G "http://localhost/execute_database_migrations" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/execute_database_migrations"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET execute_database_migrations`


<!-- END_df215948089b17150147cf6c0fc98888 -->

<!-- START_94c79caae03e2ec03ff4fc35acc47389 -->
## execute_create_storage_link
> Example request:

```bash
curl -X GET \
    -G "http://localhost/execute_create_storage_link" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/execute_create_storage_link"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET execute_create_storage_link`


<!-- END_94c79caae03e2ec03ff4fc35acc47389 -->

<!-- START_0a913d2e5ff386260e54c43e8ec79024 -->
## execute_initial_configs
> Example request:

```bash
curl -X GET \
    -G "http://localhost/execute_initial_configs" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/execute_initial_configs"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": ""
}
```

### HTTP Request
`GET execute_initial_configs`


<!-- END_0a913d2e5ff386260e54c43e8ec79024 -->


