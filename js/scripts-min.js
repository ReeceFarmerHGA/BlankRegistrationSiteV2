!function($){$(function(){"use strict";$(window).on("load",function(){var e=$("header.header").outerHeight()+parseInt($("header.header").css("margin-bottom"));$("section.hero").length>0?$("section.hero").css("margin-top",e):$("body").css("margin-top",e)}),$(window).on("scroll load",function(){$("header.header").addClass("sticky"),$(this).scrollTop()>200?$("header.header").addClass("sticky--stuck"):$("header.header").removeClass("sticky--stuck")}),$(".hero-main").slick({arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:4e3,infinite:!0,speed:600,fade:!0,cssEase:"linear"})})}(jQuery,this);