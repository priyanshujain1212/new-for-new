<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],


    'phonepe' => [
        'api_url' => env('PHONEPE_API_URL', 'https://api-preprod.phonepe.com/apis/pg-sandbox'),
        'merchant_id' => env('PHONEPE_MERCHANT_ID'),
        'salt_key' => env('PHONEPE_SALT_KEY'),
        'salt_index' => env('PHONEPE_SALT_INDEX'),
    ],

    'google_pay' => [
        'merchant_id' => env('GOOGLE_PAY_MERCHANT_ID'),
        'environment' => env('GOOGLE_PAY_ENVIRONMENT'), // TEST or PRODUCTION
    ],


];
