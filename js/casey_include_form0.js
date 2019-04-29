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

var report_already_created = false;
var site_found_in_database = false;
var previously_selected_team_leader = null;

// Get all report info
$.post('php/get_reports.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		$.each(pushedData, function(i, serverData) { 
		
		//report_already_created = true;
		//site_found_in_database = true;
		
			// Check to see if a report has been created for this site already for the current year			
			if ((serverData.current_year == current_year) && (serverData.site_name === site_name)) 
			{
			  report_already_created = true;
			  current_report_ID = serverData.report_ID;
			  localStorage.current_report_ID = serverData.report_ID;
			  previously_selected_team_leader = serverData.team_leader_ID;				
			}
			
			// Check to see if the current year is not found but past report found
			if (serverData.site_name === site_name) 
			{
				site_found_in_database = true;
				previously_selected_team_leader = serverData.team_leader_ID;
			}
		}); // End each

		if (report_already_created == true) // Current year report found
			{
				$('#new_report_button').attr("disabled", true);
				$("#team_member_section").hide();
				
				//alert("Flag 1");	
				//alert(report_already_created);
				//alert(site_found_in_database);
			}
			else if ((site_found_in_database == true) && (report_already_created == false)) // Site has submitted report before, but not this year
			{
				$('#continue_report_button').attr("disabled", true);
				$("#team_member_section").hide();
				//alert("Flag 2");
				//alert(report_already_created);
				//alert(site_found_in_database);
			}
			else // Site has never submitted a report before and will need to pick a TATL
			{
				$('#continue_report_button').attr("disabled", true);
				//alert(report_already_created);
				//alert(site_found_in_database);
			}

}); // End Post

	

$(document).ready(function(){
	
  // New Report Button
  $('#new_report_button').click(function() {
	  var button_name = "new_report_button";
	  if (previously_selected_team_leader == null)
	  {
	  	var team_leader_ID2 = $('#team_leader_ID2').val();
	  }
	  else 
	  	var team_leader_ID2 = previously_selected_team_leader
	  
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