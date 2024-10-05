

$(document).on("click", "#menu-toggle", function () {
    "use strict";
    $('.side-nav').toggleClass('active');
});

$(function () {
    "use strict";
    // For Bootstrap 5: Initializes tooltips for elements with data-bs-toggle="tooltip"
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});