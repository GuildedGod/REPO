// JavaScript Document

var website_header_variable = 'http://jdaiannualreports.com/'; // Must change when moved to the new server
var selected_year = localStorage.selected_year; 
var allReportYears = new Array();
var allReportSiteNames = new Array();
var currentReportsTable = "";
var currentYearReportsTable = "";
var current_record_status = '';
var jdai_username;
var site_name = localStorage.jdai_site_name;
var current_year = 2014; // current_date.getFullYear();
if (selected_year == null) {
localStorage.selected_year = current_year;
}

// Get all report info
$.post('php/get_reports.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		$.each(pushedData, function(i, serverData) { 
		
			// create an array to hold report locations for sorting				
			if ((serverData.current_year == current_year) && (serverData.site_name === site_name))
			{
			  report_already_created = true;
			  current_report_ID = serverData.report_ID;
			  localStorage.current_report_ID = serverData.report_ID;	
			  $('#new_report_button').attr("disabled", true);
			  $("#team_member_section").hide();					
			}
			else
			{
			  $('#continue_report_button').attr("disabled", true);
			}
		});

}); // End Post

$(document).ready(function(){
	
	// New Report Button
  $('#new_report_button').click(function() {
	  var button_name = "new_report_button";
	  var team_leader_ID2 = $('#team_leader_ID2').val();
	  
	  // Set the current report ID throughout the program
	  localStorage.current_report_ID = date_time;
	  current_report_ID = date_time;
	  
	  $.post('php/sql_queries.php', {site_name: site_name, current_year: current_year, button_name: button_name, team_leader_ID2: team_leader_ID2, current_report_ID: current_report_ID }, function(data) {
	  window.location.href = website_header_variable + 'form1.html';
	   });
  });
  
  $('#continue_report_button').click(function() {
	// Functionality done in the onClick of the button
  });
	
})