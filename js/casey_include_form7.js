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
var training_ID;
var button_name;
var lastLeverageNumber = 0;
var allReportYears = new Array();
var allReportSiteNames = new Array();

// Training Global Variables
var currentTrainingTable = "";
var currentTrainingIDs = new Array();
var currentTrainingNames = new Array();
var currentNumberTrained = new Array();
var currentTrainingDates = new Array();
var currentTrainingFocusAreas = new Array();


$(document).ready(function() {

// Get training info
$.post('php/get_trainings.php', function(data) {
	  var pushedData = jQuery.parseJSON(data);
	  currentTrainingTable = '<table class="table table-striped"><tr><th>Training Name</th>';
	  currentTrainingTable += "<th>Date</th><th># of People</th><th>Focus Area</th></tr>";
	  // Get all the media info from the database
	  $.each(pushedData, function(i, serverData) { 
		  // Get just the media info from the current report
		  if (serverData.report_ID == localStorage.current_report_ID)
		  {
			  currentTrainingTable += "<tr><td>" + serverData.training_name + "</td><td>" + serverData.training_date;
			  currentTrainingTable += "</td><td>" + serverData.number_trained + "</td><td>" + serverData.jdai_focus_area + "</td></tr>";
			  $('#training_to_update').append('<option value="' + serverData.training_ID + '">'+ serverData.training_name +'</option>');
		  }
		});
		currentTrainingTable += "</table>";
		$('#show_current_training_table').html(currentTrainingTable);
		// alert("Number of Training found for the current report: " + currentTrainingCounter);
		
}); // End Post	

// Update Training Button
$('#update_training_button').click(function() {
	var button_name = "update_training_button";
	var training_name = $('#new_training_name').val();
	var number_trained = $('#new_number_trained').val();
	var jdai_focus_area = $('#new_jdai_focus_area').val();
	var training_day = $('#new_training_day').val();
	var training_month = $('#new_training_month').val();
	var training_year = $('#new_training_year').val(); 
	var training_ID = $('#training_to_update').val();
	$.post('php/sql_queries.php', {training_name: training_name, number_trained: number_trained, jdai_focus_area: jdai_focus_area, training_day: training_day, training_month: training_month, training_year: training_year, current_report_ID: current_report_ID, training_ID: training_ID,  button_name: button_name  }, function(data) {
		$('#save_status').text(data);
		location.reload();
	 });	 
});

// Add Training Button
$('#add_training_button').click(function() {
	var button_name = "add_training_button";
	var training_name = $('#training_name').val();
	var number_trained = $('#number_trained').val();
	var jdai_focus_area = $('#jdai_focus_area').val();
	var training_day = $('#training_day').val();
	var training_month = $('#training_month').val();
	var training_year = $('#training_year').val();
	$.post('php/sql_queries.php', {training_name: training_name, number_trained: number_trained, jdai_focus_area: jdai_focus_area, training_day: training_day, training_month: training_month, training_year: training_year, current_report_ID: current_report_ID, training_ID: training_ID,  button_name: button_name  }, function(data) {
	$('#save_status').text(data);
	location.reload();
	 });
});

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





















































