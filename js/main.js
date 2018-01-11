"use strict";
// Initialization custom Select
$(document).ready(function() {
    $('.sample-select').select2({
	    minimumResultsForSearch: Infinity
	});
    $('.tariff-plan').select2({
	    minimumResultsForSearch: Infinity
	});
	$('.discount-status').select2({
	    minimumResultsForSearch: Infinity
	});
});

// hide/show div depending on checkbox
$(function () {
    $("#additional-services").click(function () {
        if ($(this).is(":checked")) {
        	$(".additional-info").removeClass('hide');
        } else {
            $(".additional-info").addClass('hide');
        }
    });
});

// show hint
$(".tariff-box i").on({
    mouseenter: function () {
        $(".tooltip").addClass('active');
    },
    mouseleave: function () {
        $(".tooltip").removeClass('active');
    }
});


// decline of days
var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];
function decOfNum(number, titles)
{
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}

// Initialize range slider
var $range = $("#credit-term"),
    $input = $(".js-input"),
    instance,
    min = 1,
    max = 30;

$range.ionRangeSlider({
    type: "single",
    min: min,
    max: max,
    from: 15,
    onStart: function (obj) {
        this.value = obj.from;
          if(this.value ){
            this.postfix = decOfNum($("#credit-term").val(),[' день',' дня',' дней']);
        }

    },
    onChange: function (obj) {
        this.value = obj.from;
          if(this.value ){
            this.postfix = decOfNum($("#credit-term").val(),[' день',' дня',' дней']);
        }
    }
});