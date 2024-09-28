<template>
    <div class="row">
        <div class="col-md-12">

            <div class="d-flex flex-wrap mb-4">
                <div class="mr-auto">
                   <div class="d-flex">
                        <div>
                            <span class="text-title"> {{ $t("Dashboard") }} </span>
                        </div>
                    </div>
                </div>
                <div class="">
                   </div>
            </div>

            <div class="d-flex flex-wrap mb-4">
                <div class="col-md-12">
                    <div class="row">
                        
                        <div class="d-flex align-items-start flex-column p-1 mb-1 col-md-6 box">
                            <div class="col-12 p-3 bg-light">

                                <div class="d-flex flex-wrap box-content">
                                    <div class="d-flex col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                                       <div class='stat_chart_container'> 
                                            <canvas id="today_sales_count_chart" class=""></canvas>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-end flex-column col-sm-12 col-md-12 col-lg-4 col-xl-4 p-0">
                                        <div class="p-2">{{ $t("Total Piad Rasid - Piad Amount") }}</div>

                                        <div class="mt-auto p-2">
                                            <span class="text-headline">
                                                <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                                <span v-else>{{ get_total_and_paid_raisd.formatted }}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="d-flex align-items-start flex-column p-1 mb-1 col-md-6 box">
                            <div class="col-12 p-3 bg-light">
                                
                                <div class="d-flex flex-wrap box-content">
                                    <div class="d-flex col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                                       <div class='stat_chart_container'> 
                                            <canvas id="today_sales_value_chart" class=""></canvas>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-end flex-column col-sm-12 col-md-12 col-lg-4 col-xl-4 p-0">
                                        <div class="p-2">{{ $t("Total Unpaid Rasids - Unpaid Amount") }} ({{ store_currency }})</div>

                                        <div class="mt-auto p-2">
                                            <span class="text-headline">
                                                <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                                <span v-else>{{ get_total_and_unpaid_raisd.formatted }}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            
            <div class="d-flex flex-wrap mb-4">
                <div class="col-md-12">
                    <div class="row">
                        
                        <div class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="get_total_rasid.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Rasid") }}</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ get_total_rasid.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="get_total_rasid_amount.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Rasid Amount") }} ({{ store_currency }})</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ get_total_rasid_amount.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="get_total_paid_rasid.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Paid Rasid") }}</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ get_total_paid_rasid.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="get_total_paid_rasid_amount.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Paid Rasid Amount") }} ({{ store_currency }})</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ get_total_paid_rasid_amount.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="get_total_unpaid_rasid.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Unpaid Rasid") }}</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ get_total_unpaid_rasid.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="get_total_unpaid_rasid_amount.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Unapid Rasid Amount") }} ({{ store_currency }})</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ get_total_unpaid_rasid_amount.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="access === 'Store_Admin' || access === 'Main_admin'" class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="customer_count.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Customers") }}</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ customer_count.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="access === 'Main_admin'" class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="store_count.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Stores") }}</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ store_count.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="access === 'Main_admin'" class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="active_store_count.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total Active Stores") }}</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ active_store_count.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="access === 'Main_admin'" class="d-flex align-items-start flex-column p-1 mb-1 col-md-3 box" :title="inactive_store_count.raw">
                            <div class="col-12 p-3 bg-light">
                                <div class="d-flex align-items-end flex-column box-content">
                                    <div class="p-2">{{ $t("Total In-Active Stores") }}</div>

                                    <div class="mt-auto p-2">
                                        <span class="text-headline">
                                            <i class='fa fa-circle-notch fa-spin' v-if="stats_processing == true"></i>
                                            <span v-else>{{ inactive_store_count.formatted }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>  
<script>
    'use strict';
    
    import DatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    
    import { Chart, registerables } from 'chart.js';
    import moment from "moment";
    import { Field, Form, ErrorMessage } from 'vee-validate';
    import axios from 'axios';

    // Register Chart.js components
    Chart.register(...registerables);

    export default {
        data() {
            return {
                date: {
                    lang: 'en',
                    format: "YYYY-MM",
                },
                get_total_and_paid_raisd: {
                    raw: '-',
                    formatted: '-',
                },
                get_total_and_unpaid_raisd: {
                    raw: '-',
                    formatted: '-'
                },
                store_currency: this.store.currency_code,
                stats_processing: false,
                todays_sales_count_chart_color: '#41C6AC',
                todays_sales_count_chart_fill_color: '#b3e8de',
                todays_sales_value_chart_color: '#3185fc',
                todays_sales_value_chart_fill_color: '#adcefe',
                get_total_rasid: { raw: '-', formatted: '-' },
                get_total_rasid_amount: { raw: '-', formatted: '-' },
                get_total_paid_rasid: { raw: '-', formatted: '-' },
                get_total_paid_rasid_amount: { raw: '-', formatted: '-' },
                get_total_unpaid_rasid: { raw: '-', formatted: '-' },
                get_total_unpaid_rasid_amount: { raw: '-', formatted: '-' },
                customer_count: { raw: '-', formatted: '-' },
                store_count: { raw: '-', formatted: '-' },
                active_store_count: { raw: '-', formatted: '-' },
                inactive_store_count: { raw: '-', formatted: '-' },
                total_and_paid_chart_config: {
                    type: 'line',
                    data: {
                        datasets: [],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        title: { display: false, text: '' },
                        elements: {
                            line: { tension: 0.4 }
                        },
                        layout: {
                            padding: { top: 10 }
                        },
                        legend: { display: false },
                        scales: {
                            x: {
                                ticks: { fontSize: 10 },
                                title: { display: true, text: 'Day of the Month' },
                                grid: { display: false, drawBorder: true, drawOnChartArea: false },
                            },
                            y: {
                                ticks: { beginAtZero: true },
                                title: { display: true, text: 'Value' },
                                grid: { display: false, drawBorder: false, drawOnChartArea: false },
                            }
                        }
                    }
                },
                total_and_unpaid_chart_config: {
                    type: 'line',
                    data: {
                        datasets: [],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        title: { display: false, text: '' },
                        elements: {
                            line: { tension: 0.4 }
                        },
                        layout: {
                            padding: { top: 10 }
                        },
                        legend: { display: false },
                        scales: {
                            x: {
                                ticks: { fontSize: 10 },
                                title: { display: true, text: 'Day of the Month' },
                                grid: { display: false, drawBorder: true, drawOnChartArea: false },
                            },
                            y: {
                                ticks: { beginAtZero: true },
                                title: { display: true, text: 'Value' },
                                grid: { display: false, drawBorder: false, drawOnChartArea: false },
                            }
                        }
                    }
                },
            }
        },
        props: {
            store: [Array, Object],
            access: '',
        },
        mounted() {
            console.log('Dashboard loaded');
            this.fire_requests();
        },
        methods: {
            set_form_data() {
                var formData = new FormData();
                formData.append("access_token", window.settings.access_token);
                return formData;
            },
            fire_requests() {
                this.get_dashboard_stats();
            },
            get_dashboard_stats() {
                var formData = this.set_form_data();
                this.stats_processing = true;

                axios.post('/api/get_dashboard_stats', formData).then((response) => {
                    this.stats_processing = false;
                    if (response.data.status_code === 200) {
                        this.updateDashboardData(response.data.data);
                        this.createCharts(response.data.data);
                    } else {
                        this.resetDashboardData();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            updateDashboardData(data) {
                this.get_total_and_paid_raisd.raw = data.get_total_and_paid_raisd.count_raw;
                this.get_total_and_paid_raisd.formatted = data.get_total_and_paid_raisd.count_formatted;
                this.get_total_and_unpaid_raisd.raw = data.get_total_and_unpaid_raisd.count_raw;
                this.get_total_and_unpaid_raisd.formatted = data.get_total_and_unpaid_raisd.count_formatted;
                this.get_total_rasid.raw = data.get_total_rasid.count_raw;
                this.get_total_rasid.formatted = data.get_total_rasid.count_formatted;
                this.get_total_rasid_amount.raw = data.get_total_rasid_amount.count_raw;
                this.get_total_rasid_amount.formatted = data.get_total_rasid_amount.count_formatted;
                this.get_total_paid_rasid.raw = data.get_total_paid_rasid.count_raw;
                this.get_total_paid_rasid.formatted = data.get_total_paid_rasid.count_formatted;
                this.get_total_paid_rasid_amount.raw = data.get_total_paid_rasid_amount.count_raw;
                this.get_total_paid_rasid_amount.formatted = data.get_total_paid_rasid_amount.count_formatted;
                this.get_total_unpaid_rasid.raw = data.get_total_unpaid_rasid.count_raw;
                this.get_total_unpaid_rasid.formatted = data.get_total_unpaid_rasid.count_formatted;
                this.get_total_unpaid_rasid_amount.raw = data.get_total_unpaid_rasid_amount.count_raw;
                this.get_total_unpaid_rasid_amount.formatted = data.get_total_unpaid_rasid_amount.count_formatted;
                this.customer_count.raw = data.customer_count.count_raw;
                this.customer_count.formatted = data.customer_count.count_formatted;
                this.store_count.raw = data.store_count.count_raw;
                this.store_count.formatted = data.store_count.count_formatted;
                this.active_store_count.raw = data.active_store_count.count_raw;
                this.active_store_count.formatted = data.active_store_count.count_formatted;
                this.inactive_store_count.raw = data.inactive_store_count.count_raw;
                this.inactive_store_count.formatted = data.inactive_store_count.count_formatted;
            },
            resetDashboardData() {
                this.get_total_and_paid_raisd = { raw: '-', formatted: '-' };
                this.get_total_and_unpaid_raisd = { raw: '-', formatted: '-' };
                this.get_total_rasid = { raw: '-', formatted: '-' };
                this.get_total_rasid_amount = { raw: '-', formatted: '-' };
                this.get_total_paid_rasid = { raw: '-', formatted: '-' };
                this.get_total_paid_rasid_amount = { raw: '-', formatted: '-' };
                this.get_total_unpaid_rasid = { raw: '-', formatted: '-' };
                this.get_total_unpaid_rasid_amount = { raw: '-', formatted: '-' };
                this.customer_count = { raw: '-', formatted: '-' };
                this.store_count = { raw: '-', formatted: '-' };
                this.active_store_count = { raw: '-', formatted: '-' };
                this.inactive_store_count = { raw: '-', formatted: '-' };
            },
            createCharts(data) {
                this.create_chart('total_and_paid_chart', this.total_and_paid_chart_config, data.get_total_and_paid_raisd.chart);
                this.create_chart('total_and_unpaid_chart', this.total_and_unpaid_chart_config, data.get_total_and_unpaid_raisd.chart);
            },
            create_chart(canvas_id, chart_data, chartResponse) {
                var ctx = document.getElementById(canvas_id);
                if (!ctx) return; // Ensure the canvas exists

                chart_data.data.labels = chartResponse.x_axis;
                chart_data.data.datasets = [{
                    label: canvas_id === 'total_and_paid_chart' ? 'Total Paid Rasids - Total Paid Amount' : 'Total Unpaid Rasids - Total Unpaid Amount',
                    borderWidth: 2,
                    borderColor: canvas_id === 'total_and_paid_chart' ? this.todays_sales_count_chart_color : this.todays_sales_value_chart_color,
                    backgroundColor: canvas_id === 'total_and_paid_chart' ? this.todays_sales_count_chart_fill_color : this.todays_sales_value_chart_fill_color,
                    pointRadius: 3,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#FFF',
                    data: chartResponse.y_axis
                }];

                new Chart(ctx, {
                    type: chart_data.type,
                    data: chart_data.data,
                    options: chart_data.options,
                });
            },
        }
    }
</script>
>