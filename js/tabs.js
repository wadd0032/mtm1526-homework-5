$(document).ready(function () {
	
	  $(".tab1").on('click', function (ev) {
        	$(".content").hide();
        	$(".content").load("tab1.html", function(){
            	$(this).fadeIn(1000);
       	 });
   	 });

	  $(".tab2").on('click', function (ev) {
        	$(".content").hide();
        	$(".content").load("tab2.html", function(){
            	$(this).fadeIn(1000);
       	 });
   	 });

	  $(".tab3").on('click', function (ev) {
        	$(".content").hide();
        	$(".content").load("tab3.html", function(){
            	$(this).fadeIn(1000);
       	 });
   	 });

	  $(".tab4").on('click', function (ev) {
        	$(".content").hide();
        	$(".content").load("tab4.html", function(){
            	$(this).fadeIn(1000);
       	 });
   	 });

});