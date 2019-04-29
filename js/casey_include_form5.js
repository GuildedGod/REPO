// JavaScript Document

// Global Variables

var current_year = 2014; // current_date.getFullYear();
var current_date = new Date();

// Create date time stamp
var todays_month = current_date.getMonth() + 1;
if (todays_month < 10)
 todays_month = "0" + todays_month;
var todays_day = current_date.getDate(); 
if (todays_day < 10)
 todays_day = "0" + todays_day;
var todays_hour = current_date.getHours(); 
if (todays_hour < 10)
 todays_hour = "0" + todays_hour;
var todays_minute = current_date.getMinutes();
if (todays_minute < 10)
 todays_minute = "0" + todays_minute;
var todays_seconds = current_date.getSeconds();
if (todays_seconds < 10)
 todays_seconds = "0" + todays_seconds;

var date_time = current_date.getFullYear() + "-" + todays_month + "-" + todays_day  + " " + todays_hour + ":" + todays_minute + ":" + todays_seconds;

var jdai_username;
var site_name = localStorage.jdai_site_name;
var current_report_ID = $.trim(localStorage.current_report_ID);
var website_header_variable = 'http://jdaiannualreports.com/'; // Must change when moved to the new server
var leverage_ID;
var button_name;

// Leverage Global Variables
var currentLeverageCounter = 0;
var currentLeverageTable = "";
var currentLeverageIDs = new Array();
var currentLeverageProjectDescriptions = new Array();
var currentLeverageAmounts = new Array();
var currentLeverageFundingTypes = new Array();


$(document).ready(function() {
	
// Get leverage info
$.post('php/get_leverage.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentLeverageTable = '<table class="table table-striped">';
		currentLeverageTable += "<tr><th>Description</th><th>Amount</th><th>Funding Type</th></tr>";
		// Get all the leverage info from the database
		$.each(pushedData, function(i, serverData) { 
			// Get just the leverage info from the current report
			if (serverData.report_ID == localStorage.current_report_ID)
			{
				currentLeverageTable += "<tr><td>" + serverData.project_description;
				currentLeverageTable += "</td><td> $" + serverData.amount + "</td><td>" + serverData.funding_type + "</td></tr>";
				$('#leverage_to_update').append('<option value="' + serverData.leverage_ID + '">'+ serverData.project_description +'</option>');
			}
		});
		currentLeverageTable += "</table>";
		$('#show_current_leverage_table').html(currentLeverageTable);
}); // End Post	

// Update Leverage Button
$('#update_leverage_button').click(function() {
	var button_name = "update_leverage_button";
	var leverage_project_description = $('#new_leverage_project_description').val();
	var leverage_amount = $('#new_leverage_amount').val();
	var leverage_funding_type = $('#new_leverage_funding_type').val();
	var leverage_ID  = $('#leverage_to_update').val();
	$.post('php/sql_queries.php', { leverage_project_description: leverage_project_description, leverage_amount: leverage_amount, leverage_funding_type: leverage_funding_type, current_report_ID: current_report_ID, leverage_ID: leverage_ID, button_name: button_name  }, function(data) {
	$('#save_status').text(data);
	location.reload();
	 });
});

// Add Leverage Button
$('#add_leverage_button').click(function() {
	var button_name = "add_leverage_button";
	var leverage_project_description = $('#leverage_project_description').val();
	var leverage_amount = $('#leverage_amount').val();
	var leverage_funding_type = $('#leverage_funding_type').val();
	$.post('php/sql_queries.php', { leverage_project_description: leverage_project_description, leverage_amount: leverage_amount, leverage_funding_type: leverage_funding_type, current_report_ID: current_report_ID,  button_name: button_name  }, function(data) {
	
	$('#save_status').text(data);
	location.reload();
	 });
});

// Month Loop
for (i = 1; i < 32; i++) {
	$('#baseline_start_day').append('<option value="' + i + '">'+ i +'</option>');
	$('#baseline_finish_day').append('<option value="' + i + '">'+ i +'</option>');
	$('#recent_start_day').append('<option value="' + i + '">'+ i +'</option>');
	$('#recent_finish_day').append('<option value="' + i + '">'+ i +'</option>');
}

	current_month_num = "01";
	current_month = "Jan";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');

	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');

	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "02";
	current_month = "Feb";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "03";
	current_month = "Mar";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "04";
	current_month = "Apr";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "05";
	current_month = "May";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "06";
	current_month = "June";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "07";
	current_month = "July";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "08";
	current_month = "Aug";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "09";
	current_month = "Sept";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "10";
	current_month = "Oct";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "11";
	current_month = "Nov";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
	current_month_num = "12";
	current_month = "Dec";
    $('#baseline_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#baseline_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_start_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	$('#recent_finish_month').append('<option value="' + current_month_num + '">'+ current_month +'</option>');
	
}); // End Document Ready Function





















































