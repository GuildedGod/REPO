// JavaScript Document

// Global Variables

// var jdai_username = localStorage.jdai_reporting_tool_username;
var current_year = 2014; // current_date.getFullYear();
var selected_year = localStorage.selected_year; 
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
// alert("jdai_site_name = " + localStorage.jdai_site_name);
//var site_name = $.cookie('jdai_site_name');
var current_report_ID = $.trim(localStorage.current_report_ID);
// alert("current_report_ID = " + localStorage.current_report_ID);
//var current_report_ID = $.cookie("current_report_ID");
var website_header_variable = 'http://jdaiannualreports.com/'; // Must change when moved to the new server
var media_ID;
var reform_ID;
var leverage_ID;
var training_ID;
var button_name;
var lastLeverageNumber = 0;
var allReportYears = new Array();
var allReportSiteNames = new Array();

var allUserSitesID = new Array();
var allUserPasswords = new Array();
var allUsers = new Array();
var allUserTeamLeaders = new Array();

var currentReportsTable = "";
var currentYearReportsTable = "";
var current_record_status = '';
var report_already_created = false;
var team_leader_dropdown_string = new Array();
var unique_team_leader_dropdown_string = new Array();
var current_team_leader_ID = "";
var allReportedSites = new Array();
var allReportedSitesID = new Array();
var allReportedSitesCounter = 0;

// Prepopulate Data

// Get all report info
$.post('php/get_reports.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		$.each(pushedData, function(i, serverData) { 
			allReportYears[i] = serverData.current_year;
			allReportSiteNames[i] = serverData.site_name;
						
			if ((serverData.current_year == current_year) && (serverData.site_name === site_name))
			{
			report_already_created = true;
			current_report_ID = serverData.report_ID;
			localStorage.current_report_ID = serverData.report_ID;
			
			// Create baseline start
			var this_baseline_start = serverData.baseline_start;
			var this_date = this_baseline_start.split("-");
			$('#baseline_start_year').val(this_date[0]);
			$('#baseline_start_month').val(this_date[1]);
			$('#baseline_start_day').val(this_date[2]);
			$('#baseline_start_date').text(this_baseline_start);
			
			// Create baseline finish
			var this_baseline_finish = serverData.baseline_finish;
			this_date = this_baseline_finish.split("-");
			$('#baseline_finish_year').val(this_date[0]);
			$('#baseline_finish_month').val(this_date[1]);
			$('#baseline_finish_day').val(this_date[2]);
			$('#baseline_finish_date').text(this_baseline_finish);
			
			// Create recent start 
			var this_recent_start = serverData.recent_start;
			this_date = this_recent_start.split("-");
			$('#recent_start_year').val(this_date[0]);
			$('#recent_start_month').val(this_date[1]);
			$('#recent_start_day').val(this_date[2]);
			$('#recent_start_date').text(this_recent_start);
			
			// Create recent finish
			var this_recent_finish = serverData.recent_finish;
			this_date = this_recent_finish.split("-");
			$('#recent_finish_year').val(this_date[0]);
			$('#recent_finish_month').val(this_date[1]);
			$('#recent_finish_day').val(this_date[2]);
			$('#recent_finish_date').text(this_recent_finish);
			$('#site_name').val(serverData.site_name);
			$('#team_leader_ID').val(serverData.team_leader_ID);
			// var temp = $('select#team_leader_ID').text(current_team_leader_ID);
			$('#total_detention_capacity').val(serverData.total_detention_capacity);
			$('#jdai_username').val(serverData.jdai_username);
			$('#adp_baseline').val(serverData.adp_baseline);
			$('#adp_recent').val(serverData.adp_recent);
			$('#annual_admission_baseline').val(serverData.annual_admission_baseline);
			$('#annual_admission_recent').val(serverData.annual_admission_recent);
			$('#alos_baseline').val(serverData.alos_baseline);
			$('#alos_recent').val(serverData.alos_recent);
			$('#state_commitment_baseline').val(serverData.state_commitment_baseline);
			$('#state_commitment_recent').val(serverData.state_commitment_recent);
			
			// Need to convert
			$('#fta_rate_baseline').val(serverData.fta_rate_baseline*100);
			$('#fta_rate_recent').val(serverData.fta_rate_recent*100);
			$('#juvenile_crime_baseline').val(serverData.juvenile_crime_baseline);
			$('#juvenile_crime_recent').val(serverData.juvenile_crime_recent);
			$('#re_arrest_baseline').val((serverData.re_arrest_baseline*100).toFixed(1));
			$('#re_arrest_recent').val((serverData.re_arrest_recent*100).toFixed(1));
			$('#fta_indicator').val(serverData.fta_indicator);
			$('#re_arrest_indicator').val(serverData.re_arrest_indicator);
			$('#juvenile_crime_indicator').val(serverData.juvenile_crime_indicator);
			$('#yoc_in_adp_baseline').val(serverData.yoc_in_adp_baseline);
			$('#yoc_in_adp_recent').val(serverData.yoc_in_adp_recent);
			$('#yoc_state_commitments_baseline').val(serverData.yoc_state_commitments_baseline);
			$('#yoc_state_commitments_recent').val(serverData.yoc_state_commitments_recent);
			$('#yoc_admitted_baseline').val(serverData.yoc_admitted_baseline);
			$('#yoc_admitted_recent').val(serverData.yoc_admitted_recent);
			$('#alos_of_yoc_baseline').val(serverData.alos_of_yoc_baseline);
			$('#alos_of_yoc_recent').val(serverData.alos_of_yoc_recent);
			$('#usability_notes').val(serverData.usability_notes);
			$('#report_notes').val(serverData.report_notes);
			
			// For View Reports $('#save_status').text(data);
			$('#site_name').text(serverData.site_name);
			$('#team_leader_ID').text(serverData.team_leader_ID); //$('#team_leader_ID').text(serverData.team_leader_ID);
			$('#total_detention_capacity').text(serverData.total_detention_capacity);
			$('#jdai_username').text(serverData.jdai_username);
			$('#team_leader_ID').text(serverData.team_leader_ID);
			$('#baseline_start').text(serverData.baseline_start);
			$('#baseline_finish').text(serverData.baseline_finish);
			$('#recent_start').text(serverData.recent_start);
			$('#recent_finish').text(serverData.recent_finish);
			$('#adp_baseline').text(serverData.adp_baseline);
			$('#adp_recent').text(serverData.adp_recent);
			$('#annual_admission_baseline').text(serverData.annual_admission_baseline);
			$('#annual_admission_recent').text(serverData.annual_admission_recent);
			$('#alos_baseline').text(serverData.alos_baseline);
			$('#alos_recent').text(serverData.alos_recent);
			$('#state_commitment_baseline').text(serverData.state_commitment_baseline);
			$('#state_commitment_recent').text(serverData.state_commitment_recent);
			$('#fta_rate_baseline').text((serverData.fta_rate_baseline*100).toFixed(1));
			$('#fta_rate_recent').text((serverData.fta_rate_recent*100).toFixed(1));
			$('#juvenile_crime_baseline').text(serverData.juvenile_crime_baseline);
			$('#juvenile_crime_recent').text(serverData.juvenile_crime_recent);
			$('#re_arrest_baseline').text((serverData.re_arrest_baseline*100).toFixed(1));
			$('#re_arrest_recent').text((serverData.re_arrest_recent*100).toFixed(1));
			$('#fta_indicator2').text(serverData.fta_indicator);
			$('#re_arrest_indicator2').text(serverData.re_arrest_indicator);
			$('#juvenile_crime_indicator2').text(serverData.juvenile_crime_indicator);
			$('#yoc_in_adp_baseline').text(serverData.yoc_in_adp_baseline);
			$('#yoc_in_adp_recent').text(serverData.yoc_in_adp_recent);
			$('#yoc_state_commitments_baseline').text(serverData.yoc_state_commitments_baseline);
			$('#yoc_state_commitments_recent').text(serverData.yoc_state_commitments_recent);
			$('#yoc_admitted_baseline').text(serverData.yoc_admitted_baseline);
			$('#yoc_admitted_recent').text(serverData.yoc_admitted_recent);
			$('#alos_of_yoc_baseline').text(serverData.alos_of_yoc_baseline);
			$('#alos_of_yoc_recent').text(serverData.alos_of_yoc_recent);
			$('#usability_notes').text(serverData.usability_notes);
			$('#report_notes').text(serverData.report_notes);
					
	// Calculations
	
	// Declare all variables as zero here?????
	
	// Annual Daily Population
	var adp_baseline_minus_recent = serverData.adp_recent - serverData.adp_baseline;
	$('#adp_change_number').val(adp_baseline_minus_recent.toFixed(1));
	$('#adp_change_number').text(adp_baseline_minus_recent.toFixed(1));
	var adp_baseline_minus_recent_percent = adp_baseline_minus_recent/serverData.adp_baseline*100;
	$('#adp_change_percent').val(adp_baseline_minus_recent_percent.toFixed(1));
	$('#adp_change_percent').text(adp_baseline_minus_recent_percent.toFixed(1));
	
	// Annual Admissions
	var annual_admission_baseline_minus_recent = serverData.annual_admission_recent - serverData.annual_admission_baseline;
	$('#annual_admissions_change_number').val(annual_admission_baseline_minus_recent.toFixed(1));
	$('#annual_admissions_change_number').text(annual_admission_baseline_minus_recent.toFixed(1));
	var annual_admissions_change_percent = annual_admission_baseline_minus_recent/serverData.annual_admission_baseline*100;
	$('#annual_admissions_change_percent').val(annual_admissions_change_percent.toFixed(1));
	$('#annual_admissions_change_percent').text(annual_admissions_change_percent.toFixed(1));
	
	// ALOS
	var alos_baseline_minus_recent = serverData.alos_recent - serverData.alos_baseline;
	$('#alos_change_number').val(alos_baseline_minus_recent.toFixed(1));
	$('#alos_change_number').text(alos_baseline_minus_recent.toFixed(1));
	var alos_change_percent = alos_baseline_minus_recent/serverData.alos_baseline*100;
	$('#alos_change_percent').val(alos_change_percent.toFixed(1));
	$('#alos_change_percent').text(alos_change_percent.toFixed(1)); 
	
	// State Commitments
	var state_commitment_baseline_minus_recent = serverData.state_commitment_recent - serverData.state_commitment_baseline;
	$('#state_commitment_change_number').val(state_commitment_baseline_minus_recent.toFixed(1));
	$('#state_commitment_change_number').text(state_commitment_baseline_minus_recent.toFixed(1));
	var state_commitment_change_percent = state_commitment_baseline_minus_recent/serverData.state_commitment_baseline*100;
	$('#state_commitment_change_percent').val(state_commitment_change_percent.toFixed(1));
	$('#state_commitment_change_percent').text(state_commitment_change_percent.toFixed(1));
	
	// FTA Rate
	var fta_rate_baseline_minus_recent = (serverData.fta_rate_recent - serverData.fta_rate_baseline) * 100;
	$('#fta_rate_change_number').val(fta_rate_baseline_minus_recent.toFixed(1));
	$('#fta_rate_change_number').text(fta_rate_baseline_minus_recent.toFixed(1));
	
	// Re-Arrest
	var re_arrest_baseline_minus_recent = (serverData.re_arrest_recent - serverData.re_arrest_baseline) * 100;
	$('#re_arrest_rate_change').val(re_arrest_baseline_minus_recent.toFixed(1));
	$('#re_arrest_rate_change').text(re_arrest_baseline_minus_recent.toFixed(1));
	
	// Juvenile Crime 
	var juvenile_crime_baseline_minus_recent = serverData.juvenile_crime_recent - serverData.juvenile_crime_baseline;
	$('#juvenile_crime_change_number').val(juvenile_crime_baseline_minus_recent.toFixed(1));
	$('#juvenile_crime_change_number').text(juvenile_crime_baseline_minus_recent.toFixed(1));
	var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent/serverData.juvenile_crime_baseline*100;
	$('#juvenile_crime_change_percent').val(juvenile_crime_change_percent.toFixed(1));
	$('#juvenile_crime_change_percent').text(juvenile_crime_change_percent.toFixed(1));
	
	// YOC in ADP
	var yoc_in_adp_baseline_minus_recent = serverData.yoc_in_adp_recent - serverData.yoc_in_adp_baseline;
	$('#yoc_in_adp_recent_change_number').val(yoc_in_adp_baseline_minus_recent.toFixed(1));
	$('#yoc_in_adp_recent_change_number').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
	var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent/serverData.yoc_in_adp_baseline*100;
	$('#yoc_in_adp_recent_change_percent').val(yoc_in_adp_change_percent.toFixed(1));
	$('#yoc_in_adp_recent_change_percent').text(yoc_in_adp_change_percent.toFixed(1));
	
  // # of YOC State Commitments
  var yoc_state_commitments_baseline_minus_recent = serverData.yoc_state_commitments_recent - serverData.yoc_state_commitments_baseline;
  $('#yoc_committed_changes_number').val(yoc_state_commitments_baseline_minus_recent.toFixed(1));
  $('#yoc_committed_changes_number').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
  var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent/serverData.yoc_state_commitments_baseline*100;
  $('#yoc_committed_changes_percent').val(yoc_state_commitments_change_percent.toFixed(1));
  $('#yoc_committed_changes_percent').text(yoc_state_commitments_change_percent.toFixed(1));
  
	// # of YOC Admitted
	var yoc_admitted_baseline_minus_recent = serverData.yoc_admitted_recent - serverData.yoc_admitted_baseline;
	$('#yoc_admitted_change_number').val(yoc_admitted_baseline_minus_recent.toFixed(1));
	$('#yoc_admitted_change_number').text(yoc_admitted_baseline_minus_recent.toFixed(1));
	var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent/serverData.yoc_admitted_baseline*100;
	$('#yoc_admitted_change_percent').val(yoc_admitted_change_percent.toFixed(1));	
	$('#yoc_admitted_change_percent').text(yoc_admitted_change_percent.toFixed(1));
	
	// ALOS of YOC
	var alos_of_yoc_baseline_minus_recent = serverData.alos_of_yoc_recent - serverData.alos_of_yoc_baseline;
	$('#alos_of_yoc_change_number').val(alos_of_yoc_baseline_minus_recent.toFixed(1));
	$('#alos_of_yoc_change_number').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
	var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent/serverData.alos_of_yoc_baseline*100;
	$('#alos_of_yoc_change_percent').val(alos_of_yoc_change_percent.toFixed(1));
	$('#alos_of_yoc_change_percent').text(alos_of_yoc_change_percent.toFixed(1));	
			}
		});
		
}); // End Post


$(document).ready(function() {

	
	// Data Validation checks for Impact Results
	
	// Check Baseline ADP
	var temp_adp_baseline = (annual_admission_baseline / 365) * alos_baseline; // Calculate 
	var temp_adp_min_baseline = temp_adp_baseline - (temp_adp_baseline / 5);
	var temp_adp_max_baseline = temp_adp_baseline + (temp_adp_baseline / 5);
	if ((annual_admission_baseline < temp_adp_min_baseline) || (annual_admission_baseline > temp_adp_max_baseline))
	{
		alert("Error with calculating baseline ADP");
	}
	
	// Check Resent ADP
	var temp_adp_recent = (annual_admission_recent / 365) * alos_recent; // Calculate 
	var temp_adp_min_recent = temp_adp_recent - (temp_adp_recent / 5);
	var temp_adp_max_recent = temp_adp_recent + (temp_adp_recent / 5);
	if ((annual_admission_recent < temp_adp_min_recent) || (annual_admission_recent > temp_adp_max_recent))
	{
		alert("Error with calculating recent ADP");
	}
	
	// Check YOC Baseline ADP
	var temp_yoc_adp_baseline = (yoc_admitted_baseline / 365) * alos_of_yoc_baseline; // Calculate 
	var temp_yoc_adp_min_baseline = temp_yoc_adp_baseline - (temp_yoc_adp_baseline / 5);
	var temp_yoc_adp_max_baseline = temp_yoc_adp_baseline + (temp_yoc_adp_baseline / 5);
	if ((yoc_admitted_baseline < temp_adp_min_recent) || (yoc_admitted_baseline > temp_adp_max_recent))
	{
		alert("Error with calculating baseline YOC ADP");
	}
	
	// Check YOC Resent ADP
	var temp_yoc_adp_recent = (yoc_admitted_recent / 365) * alos_of_yoc_recent; // Calculate 
	var temp_yoc_adp_min_recent = temp_yoc_adp_recent - (temp_yoc_adp_recent / 5);
	var temp_yoc_adp_max_recent = temp_yoc_adp_recent + (temp_yoc_adp_recent / 5);	
	if ((yoc_admitted_recent < temp_adp_min_recent) || (yoc_admitted_recent > temp_adp_max_recent))
	{
		alert("Error with calculating recent YOC ADP");
	}
	
	// Check is YOC admitted is greater than total admitted
	if (yoc_admitted_baseline > annual_admission_baseline)
	{
		alert("Error: Either your YOC baseline is too high, or your annual admissions baseline is too low."); 
	}
	
	// Check to see if YOC admitted recent is greater than total admitted recent
	if (yoc_admitted_recent > annual_admission_recent)
	{
		alert("Error: Either your YOC recent is too high, or your annual admissions recent is too low."); 
	}
	
	// Check to see if YOC ADP baseline is greater than total ADP baseline
	if (yoc_in_adp_baseline > adp_baseline)
	{
		alert("Error: Either your YOC ADP baseline is too high, or your total ADP baseline is too low."); 
	}
	
	// Check to see if YOC ADP recent is greater than total ADP recent
	if (yoc_in_adp_recent > adp_recent)
	{
		alert("Error: Either your YOC ADP recent is too high, or your total ADP recent is too low."); 
	}
	
	// Check to see if YOC state commitment baseline is greater than total state commitment baseline
	if (yoc_state_commitments_baseline > state_commitment_baseline)
	{
		alert("Error: Either your YOC state committments baseline is too high, or your total state commitment baseline is too low."); 
	}
	
	// Check to see if YOC state commitment recent is greater than total state commitment recent
	if (yoc_state_commitments_recent > state_commitment_recent)
	{
		alert("Error: Either your YOC state committments recent is too high, or your total state commitment recent is too low."); 
	}	


// Get media info
$.post('php/get_media.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentMediaTable = '<table class="table table-striped">';
		currentMediaTable += "<tr><th>Media Name</th><th>Date</th><th>Type</th></tr>";
		// Get all the media info from the database
		$.each(pushedData, function(i, serverData) { 
			// Get just the media info from the current report
			if ((serverData.report_ID == localStorage.current_report_ID) && (serverData.report_ID.indexOf(current_year) >= 0))
			{
				currentMediaTable += "<tr><td>" + serverData.media_name;
				currentMediaTable += "</td><td>" + serverData.media_date + "</td><td>" + serverData.media_type + "</td></tr>";
				$('#media_to_update').append('<option value="' + serverData.media_ID + '">'+ serverData.media_name +'</option>');
			}
		});
		currentMediaTable += "</table>";
		$('#show_current_media_table').html(currentMediaTable);
}); // End Post	

// Get leverage info
$.post('php/get_leverage.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentLeverageTable = '<table class="table table-striped">';
		currentLeverageTable += "<tr><th>Description</th><th>Amount</th><th>Funding Type</th></tr>";
		// Get all the leverage info from the database
		$.each(pushedData, function(i, serverData) { 
			// Get just the leverage info from the current report
			// if (serverData.report_ID == localStorage.current_report_ID)
			if ((serverData.report_ID == localStorage.current_report_ID) && (serverData.report_ID.indexOf(current_year) >= 0))
			{
				// alert(serverData.report_ID.indexOf("2014"));
				currentLeverageTable += "<tr><td>" + serverData.project_description;
				currentLeverageTable += "</td><td> $" + serverData.amount + "</td><td>" + serverData.funding_type + "</td></tr>";
				$('#leverage_to_update').append('<option value="' + serverData.leverage_ID + '">'+ serverData.project_description +'</option>');
			}
		});
		currentLeverageTable += "</table>";
		$('#show_current_leverage_table').html(currentLeverageTable);
}); // End Post	

// Get training info
$.post('php/get_trainings.php', function(data) {
	  var pushedData = jQuery.parseJSON(data);
	  currentTrainingTable = '<table class="table table-striped"><tr><th>Training Name</th>';
	  currentTrainingTable += "<th>Date</th><th># of People</th><th>Focus Area</th></tr>";
	  // Get all the media info from the database
	  $.each(pushedData, function(i, serverData) { 
		  // Get just the media info from the current report
		  if ((serverData.report_ID == localStorage.current_report_ID) && (serverData.report_ID.indexOf(current_year) >= 0))
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

// Get all reform info
$.post('php/get_reforms.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		$.each(pushedData, function(i, serverData) { 
			if (localStorage.current_report_ID == serverData.report_ID)
			{
			
			// To populate span tags
			  $('#governance_structure2').text(serverData.governance_structure);
			  $('#work_plan2').text(serverData.work_plan);
			  $('#purpose_of_detention2').text(serverData.purpose_of_detention);
			  $('#red_authority2').text(serverData.red_authority);
			  $('#utilization_study2').text(serverData.utilization_study);
			  $('#comprehensive_detention_population_reports2').text(serverData.comprehensive_detention_population_reports);
			  $('#comprehensive_rai_reports2').text(serverData.comprehensive_rai_reports);
			  $('#comprehensive_atd_reports2').text(serverData.comprehensive_atd_reports);
			  $('#field_criteria_for_police2').text(serverData.field_criteria_for_police);
			  $('#detention_screening_tool2').text(serverData.detention_screening_tool);
			  $('#screening_24_72').text(serverData.screening_24_7);
			  $('#home_detention2').text(serverData.home_detention);
			  $('#day_evening_reporting2').text(serverData.day_evening_reporting);
			  $('#shelter_foster_care_beds2').text(serverData.shelter_foster_care_beds);
			  $('#atd_placement_coordination2').text(serverData.atd_placement_coordination);
			  $('#weekly_detention_review2').text(serverData.weekly_detention_review);
			  $('#revised_speedy_trail_rules2').text(serverData.revised_speedy_trail_rules);
			  $('#expeditor2').text(serverData.expeditor);
			  $('#targeting_stuck_cases2').text(serverData.targeting_stuck_cases);
			  $('#court_notification_system2').text(serverData.court_notification_system);
			  $('#sanctions_incentives_grid2').text(serverData.sanctions_incentives_grid);
			  $('#differential_warrant_policy2').text(serverData.differential_warrant_policy);
			  $('#placement_expediting2').text(serverData.placement_expediting);
			  $('#formal_mandate2').text(serverData.formal_mandate);
			  $('#community_engagement2').text(serverData.community_engagement);
			  $('#disaggregated_data2').text(serverData.disaggregated_data);
			  $('#special_detention_case_reforms2').text(serverData.special_detention_case_reforms);
			  $('#jdai_facility_standards2').text(serverData.jdai_facility_standards);
			  $('#self_assessment_inspection2').text(serverData.self_assessment_inspection);
			  $('#formal_mandate2').text(serverData.formal_mandate);
			  $('#corrections_plan2').text(serverData.corrections_plan);
			}
		});
		// alert("Report ID1 is: " + current_report_ID);
}); // End Post


// Final Notes Save Button
$('#final_notes_save_button').click(function() {
	var button_name = "final_notes_save_button";
	var report_notes = $('#report_notes').val();
	var usability_notes = $('#usability_notes').val();
	var current_status = "In-Progress";
	$.post('php/sql_queries.php', {report_notes: report_notes, usability_notes: usability_notes, current_status: current_status, site_name: site_name, current_year: current_year, button_name: button_name }, function(data) {
	//$('#save_status').text(data);
	alert("Report saved.");
	location.reload();
	 });
});

// Final Notes Submit Button
$('#final_notes_submit_button').click(function() {
	var button_name = "final_notes_save_button"; // This is done on purpose, don't change
	var report_notes = $('#report_notes').val();
	var usability_notes = $('#usability_notes').val();
	var current_status = "Submitted";
	$.post('php/sql_queries.php', {report_notes: report_notes, usability_notes: usability_notes, current_status: current_status, site_name: site_name, current_year: current_year, button_name: button_name }, function(data) {
    // $('#save_status').text(data);
	//location.reload();
	window.location.href = website_header_variable + 'form9.html'; 
	 });
});

}); // End Document Ready Function





















































