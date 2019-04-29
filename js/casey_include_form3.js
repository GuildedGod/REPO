// JavaScript Document

// Global Variables

// var jdai_username = localStorage.jdai_reporting_tool_username;
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
var media_ID;
var button_name;
var allReportYears = new Array();
var allReportSiteNames = new Array();

// Media Global Variables
var currentMediaCounter = 0;
var currentMediaTable = "";
var currentMediaIDs = new Array();
var currentMediaNames = new Array();
var currentMediaTypes = new Array();
var currentMediaDates = new Array();

$(document).ready(function() {
	
// Get media info
$.post('php/get_media.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentMediaTable = '<table class="table table-striped">';
		currentMediaTable += "<tr><th>Media Name</th><th>Date</th><th>Type</th></tr>";
		// Get all the media info from the database
		$.each(pushedData, function(i, serverData) { 
			// Get just the media info from the current report
			if (serverData.report_ID == localStorage.current_report_ID)
			{
				currentMediaTable += "<tr><td>" + serverData.media_name;
				currentMediaTable += "</td><td>" + serverData.media_date + "</td><td>" + serverData.media_type + "</td></tr>";
				$('#media_to_update').append('<option value="' + serverData.media_ID + '">'+ serverData.media_name +'</option>');
				currentMediaCounter++; // keep count of the number of leverage items for the current report
			}
		});
		currentMediaTable += "</table>";
		$('#show_current_media_table').html(currentMediaTable);
}); // End Post	

// Update Media Button
$('#update_media_button').click(function() {
	var button_name = "update_media_button";
	var media_name = $('#new_media_name').val();
	var media_type = $('#new_media_type').val();
	var media_month = $('#new_media_month').val();
	var media_day = $('#new_media_day').val();
	var media_year = $('#new_media_year').val();
	var media_to_update = $('#media_to_update').val();
	// alert(media_to_update);
	$.post('php/sql_queries.php', { media_to_update: media_to_update, media_name: media_name, media_type: media_type, media_month: media_month, media_day: media_day, media_year: media_year, button_name: button_name  }, function(data) {
	$('#save_status').text(data);
	location.reload();
	
	 });
});

// Add Media Button
$('#add_media_button').click(function() {
	var button_name = "add_media_button";
	var media_name = $('#media_name').val();
	var media_type = $('#media_type').val();
	var media_month = $('#media_month').val();
	var media_day = $('#media_day').val();
	var media_year = $('#media_year').val();
	$.post('php/sql_queries.php', { media_name: media_name, media_type: media_type, media_month: media_month, media_day: media_day, media_year: media_year, current_report_ID: current_report_ID, media_ID: media_ID,  button_name: button_name  }, function(data) {
	$('#save_status').text(data);
	location.reload();
	 });
});

// Only show buttons that make sense on the admin page
if (localStorage.team_leader_name != 'Administration')
{
  $('#make_form_final_button').attr("disabled", true);
}

// Fill select boxes

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





















































