// JavaScript Document

// Global Variables

// Check if user has HTML5 support
if (typeof(Storage) =="undefined") {
  var browser_data = 'WARNING: Local Storage is not present found in this browser. You will need the latest version of Firefox, Chrome or Safari to use this software!';
  // $('#local_storage_status').text(browser_data);
  alert(browser_data);
} else {
var browser_data = 	'Your browser has passed the first compliance test. LocalStorage is active in this browser. Congrats!';
// $('#local_storage_status').text(browser_data);
// alert(browser_data);
}


// var jdai_username = localStorage.jdai_reporting_tool_username;
var current_year = 2013; // current_date.getFullYear();
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

// Set date variable for cookies implementation
/* var current_date2 = new Date();
var expireDate = new Date();
expireDate.setMonth(expireDate.getMonth()+1) // Cookie expires now in one month; expireDate.toGMTString(); */

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

// Leverage Global Variables
var allLeverageIDs = new Array();
var allLeverageReportIDs = new Array();
var allLeverageProjectDescriptions = new Array();
var allLeverageAmounts = new Array();
var allLeverageFundingTypes = new Array();
var currentLeverageCounter = 0;
var currentLeverageTable = "";
var currentLeverageIDs = new Array();
var currentLeverageProjectDescriptions = new Array();
var currentLeverageAmounts = new Array();
var currentLeverageFundingTypes = new Array();
var allLeverageIDs2 = new Array();
var allLeverageSiteName2 = new Array();
var allLeverageProjectDescriptions2 = new Array();
var allLeverageAmounts2 = new Array();
var allLeverageFundingTypes2 = new Array();

// Media Global Variables
var allMediaIDs = new Array();
var allMediaReportIDs = new Array();
var allMediaNames = new Array();
var allMediaTypes = new Array();
var allMediaDates = new Array();
var currentMediaCounter = 0;
var currentMediaTable = "";
var currentMediaIDs = new Array();
var currentMediaNames = new Array();
var currentMediaTypes = new Array();
var currentMediaDates = new Array();
var allMediaSite_Name = new Array();
var allMediaIDs2 = new Array();
var allMediaNames2 = new Array();
var allMediaTypes2 = new Array();
var allMediaDates2 = new Array();

// Training Global Variables
var allTrainingIDs = new Array();
var allTrainingReportIDs = new Array();
var allTrainingNames = new Array();
var allNumberTrained = new Array();
var allTrainingDates = new Array();
var allTrainingFocusAreas = new Array();
var currentTrainingCounter = 0;
var currentTrainingTable = "";
var currentTrainingIDs = new Array();
var currentTrainingNames = new Array();
var currentNumberTrained = new Array();
var currentTrainingDates = new Array();
var currentTrainingFocusAreas = new Array();
var allTrainingSiteName = new Array();

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
		currentReportsTable = '<table class="table table-hover">';
		currentReportsTable += '<colgroup><col span="1" style="width: 6%;"><col span="1" style="width: 12%;">';
		currentReportsTable += '<col span="1" style="width: 25%;"><col span="1" style="width: 12%;">';
		currentReportsTable += '<col span="1" style="width: 25%;"><col span="1" style="width: 20%;"></colgroup>';
		currentReportsTable += "<tr><th>Year</th><th>Status</th><th>Site</th><th>Report Created</th>>";
		currentReportsTable += "<th>Submitter</th><th> </th></tr><tbody>";
		currentYearReportsTable = '<table class="table table-hover" id="currentYearReportsTable">';
		currentYearReportsTable += '<colgroup><col span="1" style="width: 6%;"><col span="1" style="width: 12%;">';
		currentYearReportsTable += '<col span="1" style="width: 25%;"><col span="1" style="width: 12%;">';
		currentYearReportsTable += '<col span="1" style="width: 25%;"><col span="1" style="width: 20%;"></colgroup>';
		currentYearReportsTable += "<tr><th>Year</th><th>Status</th><th>Site</th><th>Report Created</th>>";
		currentYearReportsTable += "<th>Submitter</th><th> </th></tr><tbody>";
		$.each(pushedData, function(i, serverData) { 
			allReportYears[i] = serverData.current_year;
			allReportSiteNames[i] = serverData.site_name;
			
			// assign table row color
			if (serverData.current_status == "In-Progress")
			current_record_status = "warning";
			if (serverData.current_status == "Completed")
			current_record_status = "success";
			if (serverData.current_status == "Submitted")
			current_record_status = "error";
			if (serverData.current_status == "Final")
			current_record_status = "info";
			
			currentReportsTable += '<tr class="' + current_record_status + '">';
			currentReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
			currentReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.recent_finish + '</td><td>' + serverData.jdai_username + '</td>';
			currentReportsTable += '<td> </td></tr>';
			
			
			
			// show every reports for the current year
			if ((allReportYears[i] == current_year) && (localStorage.getItem("team_leader_name") === "Administration" /*|| "Manager"*/)) {
			// if ((allReportYears[i] == current_year) && ($.cookie("team_leader_name") === "Administration")) {
			currentYearReportsTable += '<tr class="' + current_record_status + '" id="' + serverData.report_ID + '">';
			currentYearReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
			currentYearReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.recent_finish + '</td><td>' + serverData.jdai_username + '</td>';
			currentYearReportsTable += '<td> </td></tr>';
			$('#selected_report_to_view').append('<option value="' + serverData.report_ID + '">'+ serverData.site_name +'</option>');
			}
		
			// show every reports period (Need to edit) 
			/* if ((allReportYears[i] == current_year) && (localStorage.getItem("team_leader_name") === "Administration")) {
			currentYearReportsTable += '<tr class="' + current_record_status + '" id="' + serverData.report_ID + '">';
			currentYearReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
			currentYearReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.recent_finish + '</td><td>' + serverData.jdai_username + '</td>';
			currentYearReportsTable += '<td> </td></tr>';
			$('#selected_report_to_view').append('<option value="' + serverData.report_ID + '">'+ serverData.site_name +'</option>');
			} */
			
			// show reports for the current year for a selected Team Leader
			if ((allReportYears[i] == current_year) && (localStorage.getItem("team_leader_name") == serverData.team_leader_ID)) {
			// if ((allReportYears[i] == current_year) && ($.cookie("team_leader_name") == serverData.team_leader_ID)) {
			currentYearReportsTable += '<tr class="' + current_record_status + '" id="' + serverData.report_ID + '">';
			currentYearReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
			currentYearReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.recent_finish + '</td><td>' + serverData.jdai_username + '</td>';
			currentYearReportsTable += '<td> </td></tr>';
			$('#selected_report_to_view').append('<option value="' + serverData.report_ID + '">'+ serverData.site_name +'</option>');
			//allReportedSites[allReportedSitesCounter] = serverData.site_name;
			//allReportedSitesID[allReportedSitesCounter] = serverData.report_ID;
			//allReportedSitesCounter++;
			}
			
			if ((allReportYears[i] == current_year) && (allReportSiteNames[i] === site_name))
			{
			report_already_created = true;
			current_report_ID = serverData.report_ID;
			localStorage.current_report_ID = serverData.report_ID;
			// document.cookie = 'current_report_ID=' + serverData.report_ID + '; expires=' + expireDate.toGMTString();
			
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
		
		// Only show buttons that make sense
		if (report_already_created)
		{
		  $('#new_report_button').attr("disabled", true);
		  $("#team_member_section").hide();
		}
		else
		{
		  $('#continue_report_button').attr("disabled", true);
		}
		currentReportsTable += "</table>";
		currentYearReportsTable += "</table>";
		$('#show_currentReportsTable').html(currentReportsTable);
		$('#show_currentYearReportsTable').html(currentYearReportsTable);
		

		/* var team_leader_dropdown_length = unique_team_leader_dropdown_string.length;
		for (j = 0; j < team_leader_dropdown_length; j++) {
		$('#team_leader_ID').append('<option value="' + unique_team_leader_dropdown_string[j] + '">'+ unique_team_leader_dropdown_string[j] +'</option>');
		}
		$('#team_leader_ID').val(myvalue).attr("selected", "selected");		*/	

}); // End Post


$(document).ready(function() {

$('#local_storage_status').text(browser_data);


		
// Get all reform info
$.post('php/get_reforms.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		$.each(pushedData, function(i, serverData) { 
		var this_particular_report_ID_number = serverData.report_ID;
		    // if ($.cookie("current_report_ID") == this_particular_report_ID_number)
			if (localStorage.current_report_ID == this_particular_report_ID_number)
			{
			// To populate dropdowns
			$('#governance_structure').val(serverData.governance_structure);
			$('#work_plan').val(serverData.work_plan);
			$('#purpose_of_detention').val(serverData.purpose_of_detention);
			$('#red_authority').val(serverData.red_authority);
			$('#utilization_study').val(serverData.utilization_study);
			$('#comprehensive_detention_population_reports').val(serverData.comprehensive_detention_population_reports);
			$('#comprehensive_rai_reports').val(serverData.comprehensive_rai_reports);
			$('#comprehensive_atd_reports').val(serverData.comprehensive_atd_reports);
			$('#field_criteria_for_police').val(serverData.field_criteria_for_police);
			$('#detention_screening_tool').val(serverData.detention_screening_tool);
			$('#screening_24_7').val(serverData.screening_24_7);
			$('#home_detention').val(serverData.home_detention);
			$('#day_evening_reporting').val(serverData.day_evening_reporting);
			$('#shelter_foster_care_beds').val(serverData.shelter_foster_care_beds);
			$('#atd_placement_coordination').val(serverData.atd_placement_coordination);
			$('#weekly_detention_review').val(serverData.weekly_detention_review);
			$('#revised_speedy_trail_rules').val(serverData.revised_speedy_trail_rules);
			$('#expeditor').val(serverData.expeditor);
			$('#targeting_stuck_cases').val(serverData.targeting_stuck_cases);
			$('#court_notification_system').val(serverData.court_notification_system);
			$('#sanctions_incentives_grid').val(serverData.sanctions_incentives_grid);
			$('#differential_warrant_policy').val(serverData.differential_warrant_policy);
			$('#placement_expediting').val(serverData.placement_expediting);
			$('#formal_mandate').val(serverData.formal_mandate);
			$('#community_engagement').val(serverData.community_engagement);
			$('#disaggregated_data').val(serverData.disaggregated_data);
			$('#special_detention_case_reforms').val(serverData.special_detention_case_reforms);
			$('#jdai_facility_standards').val(serverData.jdai_facility_standards);
			$('#self_assessment_inspection').val(serverData.self_assessment_inspection);
			$('#formal_mandate').val(serverData.formal_mandate);
			$('#corrections_plan').val(serverData.corrections_plan);
			
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


// Get leverage info
$.post('php/get_leverage.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentLeverageTable = '<table class="table table-striped">';
		currentLeverageTable += "<tr><th>Description</th><th>Amount</th><th>Funding Type</th></tr>";
		// Get all the leverage info from the database
		$.each(pushedData, function(i, serverData) { 
			allLeverageIDs[i] = serverData.leverage_ID;
			allLeverageReportIDs[i] = serverData.report_ID;
			allLeverageProjectDescriptions[i] = serverData.project_description;
			allLeverageAmounts[i] = serverData.amount;
			allLeverageFundingTypes[i] = serverData.funding_type;
			// Get just the leverage info from the current report
			// if (allLeverageReportIDs[i] == $.cookie("current_report_ID"))
			if (allLeverageReportIDs[i] == localStorage.current_report_ID)
			{
				// alert("found a leverage for the current report");
				currentLeverageIDs[currentLeverageCounter] = allLeverageIDs[i];
				currentLeverageProjectDescriptions[currentLeverageCounter] = allLeverageProjectDescriptions[i];
				currentLeverageAmounts[currentLeverageCounter] = allLeverageAmounts[i];
				currentLeverageFundingTypes[currentLeverageCounter] = allLeverageFundingTypes[i];
				currentLeverageTable += "<tr><td>" + allLeverageProjectDescriptions[i];
				currentLeverageTable += "</td><td>" + allLeverageAmounts[i] + "</td><td>" + allLeverageFundingTypes[i] + "</td></tr>";
				$('#leverage_to_update').append('<option value="' + allLeverageIDs[i] + '">'+ allLeverageProjectDescriptions[i] +'</option>');
				currentLeverageCounter++; // keep count of the number of leverage items for the current report
			}
		});
		currentLeverageTable += "</table>";
		$('#show_current_leverage_table').html(currentLeverageTable);
		// alert("Number of leverage found for the current report: " + currentLeverageCounter);
}); // End Post	

// Get ALL leverage info
$.post('php/get_all_leverage.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentAllLeverageTable = '<table class="table table-striped">';
		currentAllLeverageTable += "<tr><th>Year</th><th>Site Name</th><th>Description</th><th>Amount</th><th>Funding Type</th></tr>";
		var currentAllLeverageCounter = 0;
		var thisProjectDescription = "";
		// Get all the leverage info from the database
		$.each(pushedData, function(i, serverData) { 
			allLeverageProjectDescriptions2[i] = serverData.project_description;
			allLeverageAmounts2[i] = serverData.amount;
			allLeverageFundingTypes2[i] = serverData.funding_type;
			allLeverageSiteName2[i] = serverData.site_name;
			currentAllLeverageTable += "<tr><td>2013</td><td>" + allLeverageSiteName2[i]+"</td><td>"+ allLeverageProjectDescriptions2[i];
			currentAllLeverageTable += "</td><td> $" + allLeverageAmounts2[i] + "</td><td>" + allLeverageFundingTypes2[i] + "</td></tr>";
			currentAllLeverageCounter++; // keep count of the number of leverage items for the current report
		});
		currentAllLeverageTable += "</table>";
		$('#show_current_all_leverage_table').html(currentAllLeverageTable);
		// alert("Number of leverage found for the current report: " + currentLeverageCounter);
}); // End Post	

// Get media info
$.post('php/get_media.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentMediaTable = '<table class="table table-striped">';
		currentMediaTable += "<tr><th>Media Name</th><th>Date</th><th>Type</th></tr>";
		// Get all the media info from the database
		$.each(pushedData, function(i, serverData) { 
			allMediaIDs[i] = serverData.media_ID;
			allMediaReportIDs[i] = serverData.report_ID;
			allMediaNames[i] = serverData.media_name;
			allMediaTypes[i] = serverData.media_type;
			allMediaDates[i] = serverData.media_date;
			// Get just the media info from the current report
			// (allMediaReportIDs[i] == $.cookie("current_report_ID"))
			if (allMediaReportIDs[i] == localStorage.current_report_ID)
			{
				// alert("found a media entry for the current report");
				currentMediaIDs[currentMediaCounter] = allMediaIDs[i];
				currentMediaNames[currentMediaCounter] = allMediaNames[i];
				currentMediaTypes[currentMediaCounter] = allMediaTypes[i];
				currentMediaDates[currentMediaCounter] = allMediaDates[i];
				currentMediaTable += "<tr><td>" + allMediaNames[i];
				currentMediaTable += "</td><td>" + allMediaDates[i] + "</td><td>" + allMediaTypes[i] + "</td></tr>";
				$('#media_to_update').append('<option value="' + allMediaIDs[i] + '">'+ allMediaNames[i] +'</option>');
				currentMediaCounter++; // keep count of the number of leverage items for the current report
			}
		});
		currentMediaTable += "</table>";
		$('#show_current_media_table').html(currentMediaTable);
		$('#show_current_media_table2').html(currentMediaTable);
		// alert("Number of media found for the current report: " + currentMediaCounter);
}); // End Post	

// Get ALL media info
$.post('php/get_all_media.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentAllMediaTable = '<table class="table table-striped">';
		currentAllMediaTable += "<tr><th>Year</th><th>Site Name</th><th>Media Name</th><th>Date</th><th>Type</th></tr>";
		// Get all the media info from the database
		$.each(pushedData, function(i, serverData) { 
			allMediaIDs2[i] = serverData.media_ID;
			allMediaSite_Name[i] = serverData.site_name;
			allMediaNames2[i] = serverData.media_name;
			allMediaTypes2[i] = serverData.media_type;
			allMediaDates2[i] = serverData.media_date;
			// Get just the media info from the current report
			currentAllMediaTable += "<tr><td>2013</td><td>" + allMediaSite_Name[i] + "</td><td>" + allMediaNames2[i];
			currentAllMediaTable += "</td><td>" + allMediaDates2[i] + "</td><td>" + allMediaTypes2[i] + "</td></tr>";	
		});
		currentAllMediaTable += "</table>";
		$('#show_current_all_media_table').html(currentAllMediaTable);
		// alert("Number of media found for the current report: " + currentMediaCounter);
}); // End Post	

// Get training info
$.post('php/get_trainings.php', function(data) {
	  var pushedData = jQuery.parseJSON(data);
	  currentTrainingTable = '<table class="table table-striped"><tr><th>Training Name</th>';
	  currentTrainingTable += "<th>Date</th><th># of People</th><th>Focus Area</th></tr>";
	  // Get all the media info from the database
	  $.each(pushedData, function(i, serverData) { 
		  allTrainingIDs[i] = serverData.training_ID;
		  allTrainingReportIDs[i] = serverData.report_ID;
		  allTrainingNames[i] = serverData.training_name;
		  allNumberTrained[i] = serverData.number_trained;
		  allTrainingFocusAreas[i] = serverData.jdai_focus_area;
		  allTrainingDates[i] = serverData.training_date;
		  // Get just the media info from the current report
		  if (allTrainingReportIDs[i] == localStorage.current_report_ID)
		  // if (allTrainingReportIDs[i] == $.cookie("current_report_ID"))
		  {
			  // alert("found a media entry for the current report");
			  currentTrainingIDs[currentTrainingCounter] = allTrainingIDs[i];
			  currentTrainingNames[currentTrainingCounter] = allTrainingNames[i];
			  currentNumberTrained[currentTrainingCounter] = allNumberTrained[i];
			  currentTrainingDates[currentTrainingCounter] = allTrainingDates[i];
			  currentTrainingFocusAreas[currentTrainingCounter] = allTrainingFocusAreas[i];
			  currentTrainingTable += "<tr><td>" + allTrainingNames[i] + "</td><td>" + allTrainingDates[i];
			  currentTrainingTable += "</td><td>" + allNumberTrained[i] + "</td><td>" + allTrainingFocusAreas[i] + "</td></tr>";
			  $('#training_to_update').append('<option value="' + allTrainingIDs[i] + '">'+ allTrainingNames[i] +'</option>');
			  currentTrainingCounter++; // keep count of the number of leverage items for the current report
		  }
		});
		currentTrainingTable += "</table>";
		$('#show_current_training_table').html(currentTrainingTable);
		// alert("Number of Training found for the current report: " + currentTrainingCounter);
		
}); // End Post	

// Get ALL training info
$.post('php/get_all_trainings.php', function(data) {
	  var pushedData = jQuery.parseJSON(data);
	  currentAllTrainingTable = '<table class="table table-striped"><tr><th>Site Name</th><th>Training Name</th>';
	  currentAllTrainingTable += "<th>Date</th><th># of People</th><th>Focus Area</th></tr>";
	  // Get all the media info from the database
	  $.each(pushedData, function(i, serverData) { 
		  allTrainingSiteName[i] = serverData.site_name;
		  allTrainingNames[i] = serverData.training_name;
		  allNumberTrained[i] = serverData.number_trained;
		  allTrainingFocusAreas[i] = serverData.jdai_focus_area;
		  allTrainingDates[i] = serverData.training_date;
		  currentAllTrainingTable += "<tr><td>" + allTrainingSiteName[i] + "</td><td>" + allTrainingNames[i] + "</td><td>" + allTrainingDates[i];
		  currentAllTrainingTable += "</td><td>" + allNumberTrained[i] + "</td><td>" + allTrainingFocusAreas[i] + "</td></tr>";
		});
		currentAllTrainingTable += "</table>";
		$('#show_current_all_training_table').html(currentAllTrainingTable);
		// alert("Number of Training found for the current report: " + currentTrainingCounter);
		
}); // End Post	

// Get Users
$.post('php/get_users.php', function(data) {
	  var pushedData = jQuery.parseJSON(data);
	  var userDropDown = '<select id="user_list" name="selectedUser" class="span4">';
	  // Get all the media info from the database
	  $.each(pushedData, function(i, serverData) { 
		  allUserSitesID[i] = serverData.sitesID;
		  allUserPasswords[i] = serverData.password;
		  allUsers[i] = serverData.user;
		  allUserTeamLeaders[i] = serverData.teamLeader;
		  userDropDown += '<option>' + allUserSitesID[i] + '</option>';
		});	
		userDropDown += '</select>';
		$('#show_user_drop_down_list').html(userDropDown);
}); // End Post	

// Insert and Update Buttons

// Site Login Button
$('#site_login_page_button').click(function() {
	var button_name = "site_login_page_button";
	var site_name_login = $('#user_list').val();
	var selected_user_password = $('#user_password').val();
	var password_found = false;
	for (var i = 0; i < allUserSitesID.length; i++)
	  {	  
	   if ((allUserSitesID[i] == site_name_login) && (allUserPasswords[i] == selected_user_password)) {
	   localStorage.jdai_site_name = site_name_login;
	   // alert("jdai_site_name = " + localStorage.jdai_site_name); // Test Mode
	   /// alert("localStorage.team_leader_name = " + localStorage.team_leader_name); // Test Mode
	   // document.cookie = 'jdai_site_name=site_name_login; expires=Thu, 2 Aug 2014 20:47:11 UTC; path=/';
	   // document.cookie = 'jdai_site_name=' + site_name_login + '; expires=' + expireDate.toGMTString();
	   // window.location.href = website_header_variable + 'form0.html';
	   window.location.pathname = 'form0.html'; // 'casey/form0.html';
	   // alert("Bingo Twice");
	   password_found = true;
	   } // End if
	
	} // End for loop
	if (!password_found)
	alert("Bad Login. Try again.");
	// location.reload(); 
});

// TA TL Login Button
$('#ta_tl_login_page_button').click(function() {
	var button_name = "site_login_page_button";
	var site_name_login = $('#team_leader_ID3').val();
	var selected_user_password = $('#user_password').val();
	var password_found = false;
	// var all_team_leaders = new Array();
	// var all_team_leaders_passwords = new Array();
	for (var i = 1; i <= all_team_leaders.length; i++)
	  {	  
	   if ((all_team_leaders[i] == site_name_login) && (all_team_leaders_passwords[i] == selected_user_password)) {
	   localStorage.team_leader_name = site_name_login;
	   // alert("jdai_site_name = " + localStorage.jdai_site_name);
	   // alert("localStorage.team_leader_name = " + localStorage.team_leader_name);
	   // document.cookie = 'team_leader_name=site_name_login; expires=Thu, 2 Aug 2014 20:47:11 UTC; path=/';
	   // document.cookie = 'team_leader_name=' + site_name_login + '; expires=' + expireDate.toGMTString();
	   // alert("Bingo");
	   // window.location.href = website_header_variable + 'form0.html';
	   window.location.pathname = 'admin1.php';// 'casey/admin1.php';
	   // alert("Bingo Twice");
	   password_found = true;
	   } // End if
	
	} // End for loop
	if (!password_found)
	alert("Bad Login. Try again.");
	// location.reload(); 
});


// New Report Button
$('#new_report_button').click(function() {
	var button_name = "new_report_button";
	var team_leader_ID2 = $('#team_leader_ID2').val();
	
	// Set the current report ID throughout the program
	localStorage.current_report_ID = date_time;
	// document.cookie = 'current_report_ID=date_time; expires=Thu, 2 Aug 2014 20:47:11 UTC; path=/';
	// document.cookie = 'current_report_ID=' + date_time + '; expires=' + expireDate.toGMTString();
	current_report_ID = date_time;
	
	$.post('php/sql_queries.php', {site_name: site_name, current_year: current_year, button_name: button_name, team_leader_ID2: team_leader_ID2, current_report_ID: current_report_ID }, function(data) {
	//location.reload();
	// $('#save_status').text(data); // Test Mode
	window.location.href = website_header_variable + 'form1.html';
	 });
});

$('#continue_report_button').click(function() {
	//localStorage.current_report_ID = date_time;
	// current_report_ID = date_time;
});

$('#return_to_dashboard_home_button').click(function() {
	window.location.href = website_header_variable + 'admin1.php'; 
});

$('#view_all_leverage').click(function() {
	window.location.href = website_header_variable + 'admin4.php'; 
});

$('#view_all_media').click(function() {
	window.location.href = website_header_variable + 'admin5.php'; 
});

$('#view_all_trainings').click(function() {
	window.location.href = website_header_variable + 'admin6.php'; 
});

$('#edit_the_report_button').click(function() {
	window.location.href = website_header_variable + 'form1.html'; 
});

$('#submit_form_to_jdai_button').click(function() {
	var button_name = "submit_form_to_jdai_button";
	$.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function(data) {
	// $('#save_status').text(data);
	//location.reload();
	alert("Report has been submitted to JDAI");
	});
	// window.location.href = website_header_variable + 'admin1.php';
});

$('#make_report_in_progress_button').click(function() {
	var button_name = "make_report_in_progress_button";
	$.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function(data) {
	// $('#save_status').text(data);
	//location.reload();
	alert("Report has been marked In-Progress");
	});
	// window.location.href = website_header_variable + 'admin1.php';
});

$('#make_form_final_button').click(function() {
	var button_name = "make_form_final_button";
	$.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function(data) {
	// $('#save_status').text(data);
	//location.reload();
	alert("Report has been marked as completed and is now final");
	});
	// window.location.href = website_header_variable + 'admin1.php';
});

$('#view_selected_report_button').click(function() {
	localStorage.current_report_ID = $('#selected_report_to_view').val();
	// document.cookie = 'current_report_ID=$("#selected_report_to_view").val(); expires=Thu, 2 Aug 2014 20:47:11 UTC; path=/';
	//document.cookie = 'current_report_ID=' + $("#selected_report_to_view").val() + '; expires=' + expireDate.toGMTString();
	localStorage.jdai_site_name = $('#selected_report_to_view').find(":selected").text();
	// document.cookie = 'jdai_site_name=$("#selected_report_to_view").find(":selected").text(); expires=Thu, 2 Aug 2014 20:47:11 UTC; path=/';
	//document.cookie = 'jdai_site_name=' + $("#selected_report_to_view").find(":selected").text() + '; expires=' + expireDate.toGMTString();
	/*if (localStorage.getItem("team_leader_name") == "Manager") {
	window.location.href = website_header_variable + 'admin3.php'; 
	} else {*/
		window.location.href = website_header_variable + 'admin2.php';
	/*}*/
});

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

// Reforms Continue Button
$('#reforms_continue_button').click(function() {
	var button_name = "update_reforms_button";
	var governance_structure = $('#governance_structure').val();
	var work_plan = $('#work_plan').val();
	var purpose_of_detention = $('#purpose_of_detention').val();
	var red_authority = $('#red_authority').val();
	var utilization_study = $('#utilization_study').val();
	var comprehensive_detention_population_reports = $('#comprehensive_detention_population_reports').val();
	var comprehensive_rai_reports = $('#comprehensive_rai_reports').val();
	var comprehensive_atd_reports = $('#comprehensive_atd_reports').val();
	var field_criteria_for_police = $('#field_criteria_for_police').val();
	var detention_screening_tool = $('#detention_screening_tool').val();
	var screening_24_7 = $('#screening_24_7').val();
	var home_detention = $('#home_detention').val();
	var day_evening_reporting = $('#day_evening_reporting').val();
	var shelter_foster_care_beds = $('#shelter_foster_care_beds').val();
	var atd_placement_coordination = $('#atd_placement_coordination').val();
	var weekly_detention_review = $('#weekly_detention_review').val();
	var revised_speedy_trail_rules = $('#revised_speedy_trail_rules').val();
	var expeditor = $('#expeditor').val();
	var targeting_stuck_cases = $('#targeting_stuck_cases').val();
	var court_notification_system = $('#court_notification_system').val();
	var sanctions_incentives_grid = $('#sanctions_incentives_grid').val();
	var differential_warrant_policy = $('#differential_warrant_policy').val();
	var placement_expediting = $('#placement_expediting').val();
	var formal_mandate = $('#formal_mandate').val();
	var community_engagement = $('#community_engagement').val();
	var disaggregated_data = $('#disaggregated_data').val();
	var special_detention_case_reforms = $('#special_detention_case_reforms').val();
	var jdai_facility_standards = $('#jdai_facility_standards').val();
	var self_assessment_inspection = $('#self_assessment_inspection').val();
	var corrections_plan = $('#corrections_plan').val();
	
	$.post('php/sql_queries.php', {
	button_name: button_name, 
	governance_structure: governance_structure, 
	work_plan: work_plan, 
	purpose_of_detention: purpose_of_detention, 
	red_authority: red_authority, 
	utilization_study: utilization_study, 
	comprehensive_detention_population_reports: comprehensive_detention_population_reports,
	comprehensive_rai_reports: comprehensive_rai_reports, 
	comprehensive_atd_reports: comprehensive_atd_reports, 
	field_criteria_for_police: field_criteria_for_police, 
	detention_screening_tool: detention_screening_tool, 
	screening_24_7: screening_24_7,
	home_detention: home_detention, 
	day_evening_reporting: day_evening_reporting, 
	shelter_foster_care_beds: shelter_foster_care_beds,
	atd_placement_coordination : atd_placement_coordination, 
	weekly_detention_review: weekly_detention_review, 	
	revised_speedy_trail_rules: revised_speedy_trail_rules, 
	expeditor: expeditor, targeting_stuck_cases: targeting_stuck_cases,
	court_notification_system: court_notification_system,
	sanctions_incentives_grid: sanctions_incentives_grid, 
	differential_warrant_policy: differential_warrant_policy,
	placement_expediting: placement_expediting, 
	formal_mandate: formal_mandate, community_engagement: community_engagement,
	disaggregated_data: disaggregated_data, 
	special_detention_case_reforms: special_detention_case_reforms,
	jdai_facility_standards: jdai_facility_standards, 
	self_assessment_inspection: self_assessment_inspection,
	corrections_plan: corrections_plan,
	site_name: site_name, 
	current_report_ID: current_report_ID, reform_ID: reform_ID, button_name: button_name  }, function(data) {
	// $('#save_status').text(data);
	// location.reload();
	window.location.href = website_header_variable + 'form8.php'; 
	 });
});

// Update Reforms Button
$('#update_reforms_button').click(function() {
	var button_name = "update_reforms_button";
	var governance_structure = $('#governance_structure').val();
	var work_plan = $('#work_plan').val();
	var purpose_of_detention = $('#purpose_of_detention').val();
	var red_authority = $('#red_authority').val();
	var utilization_study = $('#utilization_study').val();
	var comprehensive_detention_population_reports = $('#comprehensive_detention_population_reports').val();
	var comprehensive_rai_reports = $('#comprehensive_rai_reports').val();
	var comprehensive_atd_reports = $('#comprehensive_atd_reports').val();
	var field_criteria_for_police = $('#field_criteria_for_police').val();
	var detention_screening_tool = $('#detention_screening_tool').val();
	var screening_24_7 = $('#screening_24_7').val();
	var home_detention = $('#home_detention').val();
	var day_evening_reporting = $('#day_evening_reporting').val();
	var shelter_foster_care_beds = $('#shelter_foster_care_beds').val();
	var atd_placement_coordination = $('#atd_placement_coordination').val();
	var weekly_detention_review = $('#weekly_detention_review').val();
	var revised_speedy_trail_rules = $('#revised_speedy_trail_rules').val();
	var expeditor = $('#expeditor').val();
	var targeting_stuck_cases = $('#targeting_stuck_cases').val();
	var court_notification_system = $('#court_notification_system').val();
	var sanctions_incentives_grid = $('#sanctions_incentives_grid').val();
	var differential_warrant_policy = $('#differential_warrant_policy').val();
	var placement_expediting = $('#placement_expediting').val();
	var formal_mandate = $('#formal_mandate').val();
	var community_engagement = $('#community_engagement').val();
	var disaggregated_data = $('#disaggregated_data').val();
	var special_detention_case_reforms = $('#special_detention_case_reforms').val();
	var jdai_facility_standards = $('#jdai_facility_standards').val();
	var self_assessment_inspection = $('#self_assessment_inspection').val();
	var corrections_plan = $('#corrections_plan').val();
	
	$.post('php/sql_queries.php', {
	button_name: button_name, 
	governance_structure: governance_structure, 
	work_plan: work_plan, 
	purpose_of_detention: purpose_of_detention, 
	red_authority: red_authority, 
	utilization_study: utilization_study, 
	comprehensive_detention_population_reports: comprehensive_detention_population_reports,
	comprehensive_rai_reports: comprehensive_rai_reports, 
	comprehensive_atd_reports: comprehensive_atd_reports, 
	field_criteria_for_police: field_criteria_for_police, 
	detention_screening_tool: detention_screening_tool, 
	screening_24_7: screening_24_7,
	home_detention: home_detention, 
	day_evening_reporting: day_evening_reporting, 
	shelter_foster_care_beds: shelter_foster_care_beds,
	atd_placement_coordination : atd_placement_coordination, 
	weekly_detention_review: weekly_detention_review, 	
	revised_speedy_trail_rules: revised_speedy_trail_rules, 
	expeditor: expeditor, targeting_stuck_cases: targeting_stuck_cases,
	court_notification_system: court_notification_system,
	sanctions_incentives_grid: sanctions_incentives_grid, 
	differential_warrant_policy: differential_warrant_policy,
	placement_expediting: placement_expediting, 
	formal_mandate: formal_mandate, community_engagement: community_engagement,
	disaggregated_data: disaggregated_data, 
	special_detention_case_reforms: special_detention_case_reforms,
	jdai_facility_standards: jdai_facility_standards, 
	self_assessment_inspection: self_assessment_inspection,
	corrections_plan: corrections_plan,
	site_name: site_name, 
	current_report_ID: current_report_ID, reform_ID: reform_ID, button_name: button_name  }, function(data) {
	// $('#save_status').text(data); // Test Mode
	alert("Changes saved.");
	location.reload();
	 });
});

// Update Impact Results Button
$('#update_impact_results_button').click(function() {
	var button_name = "update_impact_results_button";
	var jdai_username = $('#jdai_username').val();
	var total_detention_capacity = $('#total_detention_capacity').val();
	var team_leader_ID = $('#team_leader_ID').val();
	var baseline_start_month = $('#baseline_start_month').val();
	var baseline_start_day = $('#baseline_start_day').val();
	var baseline_start_year = $('#baseline_start_year').val();
	var recent_start_month = $('#recent_start_month').val();
	var recent_start_day = $('#recent_start_day').val();
	var recent_start_year = $('#recent_start_year').val();
	var baseline_finish_month = $('#baseline_finish_month').val();
	var baseline_finish_day = $('#baseline_finish_day').val();
	var baseline_finish_year = $('#baseline_finish_year').val();
	var recent_finish_month = $('#recent_finish_month').val();
	var recent_finish_day = $('#recent_finish_day').val();
	var recent_finish_year = $('#recent_finish_year').val();
	var adp_baseline = $('#adp_baseline').val();
	var adp_recent = $('#adp_recent').val();
	var annual_admission_baseline = $('#annual_admission_baseline').val();
	var annual_admission_recent = $('#annual_admission_recent').val();
	var alos_baseline = $('#alos_baseline').val();
	var alos_recent = $('#alos_recent').val();
	var state_commitment_baseline = $('#state_commitment_baseline').val();
	var state_commitment_recent = $('#state_commitment_recent').val();
	var fta_rate_baseline = $('#fta_rate_baseline').val()/100;
	var fta_rate_recent = $('#fta_rate_recent').val()/100;
	var juvenile_crime_baseline = $('#juvenile_crime_baseline').val();
	var juvenile_crime_recent = $('#juvenile_crime_recent').val();
	var re_arrest_baseline = $('#re_arrest_baseline').val()/100;
	var re_arrest_recent = $('#re_arrest_recent').val()/100;
	var fta_indicator = $('#fta_indicator').val();
	var re_arrest_indicator = $('#re_arrest_indicator').val();
	var juvenile_crime_indicator = $('#juvenile_crime_indicator').val();
	var yoc_in_adp_baseline = $('#yoc_in_adp_baseline').val();
	var yoc_in_adp_recent = $('#yoc_in_adp_recent').val();
	var yoc_state_commitments_baseline = $('#yoc_state_commitments_baseline').val();
	var yoc_state_commitments_recent = $('#yoc_state_commitments_recent').val();
	var yoc_admitted_baseline = $('#yoc_admitted_baseline').val();
	var yoc_admitted_recent = $('#yoc_admitted_recent').val();
	var alos_of_yoc_baseline = $('#alos_of_yoc_baseline').val();
	var alos_of_yoc_recent = $('#alos_of_yoc_recent').val();
	
	// Only show buttons that make sense on the admin page
	if (localStorage.team_leader_name == 'Administration1')
	{
	  // $('#make_form_final_button').attr("disabled", true);
	  alert("It works");
	} else if (localStorage.team_leader_name == 'Administration2')
	{
		
	
	} else {
	
	$.post('php/sql_queries.php', { site_name: site_name, 
		total_detention_capacity: total_detention_capacity,
		jdai_username: jdai_username, 
		team_leader_ID: team_leader_ID,
		baseline_start_month: baseline_start_month,
		baseline_start_day: baseline_start_day,
		baseline_start_year: baseline_start_year,
		recent_start_month: recent_start_month,
		recent_start_day: recent_start_day,
		recent_start_year: recent_start_year,
		baseline_finish_month: baseline_finish_month,
		baseline_finish_day: baseline_finish_day,
		baseline_finish_year: baseline_finish_year,
		recent_finish_month: recent_finish_month,
		recent_finish_day: recent_finish_day,
		recent_finish_year: recent_finish_year,
		adp_baseline: adp_baseline, 
		adp_recent: adp_recent, 
		annual_admission_baseline: annual_admission_baseline,
		annual_admission_recent: annual_admission_recent,
		alos_baseline: alos_baseline, 
		alos_recent: alos_recent,
		state_commitment_baseline: state_commitment_baseline,
		state_commitment_recent: state_commitment_recent,
		fta_rate_baseline: fta_rate_baseline, 
		fta_rate_recent: fta_rate_recent,
		juvenile_crime_baseline: juvenile_crime_baseline, 
		juvenile_crime_recent: juvenile_crime_recent,
		re_arrest_baseline: re_arrest_baseline, 
		re_arrest_recent: re_arrest_recent,
		fta_indicator: fta_indicator, 
		re_arrest_indicator: re_arrest_indicator,
		juvenile_crime_indicator: juvenile_crime_indicator, 
		yoc_in_adp_baseline: yoc_in_adp_baseline,
		yoc_in_adp_recent: yoc_in_adp_recent, 
		yoc_state_commitments_baseline: yoc_state_commitments_baseline,
		yoc_state_commitments_recent: yoc_state_commitments_recent, 
		yoc_admitted_baseline: yoc_admitted_baseline, 
		yoc_admitted_recent: yoc_admitted_recent,
		alos_of_yoc_baseline: alos_of_yoc_baseline, 
		alos_of_yoc_recent: alos_of_yoc_recent,
		current_report_ID: current_report_ID, jdai_username: jdai_username, button_name: button_name  }, function(data) {
		// $('#save_status').text(data); // Test Mode
		alert("Changes saved.");
	    location.reload();
	 	});
	 } // End else
});


// Update Impact Results and Continue Button
$('#update_impact_results_continue_button').click(function() {
	// alert("I work");
	var button_name = "update_impact_results_button";
	var jdai_username = $('#jdai_username').val();
	var total_detention_capacity = $('#total_detention_capacity').val();
	var team_leader_ID = $('#team_leader_ID').val();
	var baseline_start_month = $('#baseline_start_month').val();
	var baseline_start_day = $('#baseline_start_day').val();
	var baseline_start_year = $('#baseline_start_year').val();
	var recent_start_month = $('#recent_start_month').val();
	var recent_start_day = $('#recent_start_day').val();
	var recent_start_year = $('#recent_start_year').val();
	var baseline_finish_month = $('#baseline_finish_month').val();
	var baseline_finish_day = $('#baseline_finish_day').val();
	var baseline_finish_year = $('#baseline_finish_year').val();
	var recent_finish_month = $('#recent_finish_month').val();
	var recent_finish_day = $('#recent_finish_day').val();
	var recent_finish_year = $('#recent_finish_year').val();
	var adp_baseline = $('#adp_baseline').val();
	var adp_recent = $('#adp_recent').val();
	var annual_admission_baseline = $('#annual_admission_baseline').val();
	var annual_admission_recent = $('#annual_admission_recent').val();
	var alos_baseline = $('#alos_baseline').val();
	var alos_recent = $('#alos_recent').val();
	var state_commitment_baseline = $('#state_commitment_baseline').val();
	var state_commitment_recent = $('#state_commitment_recent').val();
	var fta_rate_baseline = $('#fta_rate_baseline').val()/100;
	var fta_rate_recent = $('#fta_rate_recent').val()/100;
	var juvenile_crime_baseline = $('#juvenile_crime_baseline').val();
	var juvenile_crime_recent = $('#juvenile_crime_recent').val();
	var re_arrest_baseline = $('#re_arrest_baseline').val()/100;
	var re_arrest_recent = $('#re_arrest_recent').val()/100;
	var fta_indicator = $('#fta_indicator').val();
	var re_arrest_indicator = $('#re_arrest_indicator').val();
	var juvenile_crime_indicator = $('#juvenile_crime_indicator').val();
	var yoc_in_adp_baseline = $('#yoc_in_adp_baseline').val();
	var yoc_in_adp_recent = $('#yoc_in_adp_recent').val();
	var yoc_state_commitments_baseline = $('#yoc_state_commitments_baseline').val();
	var yoc_state_commitments_recent = $('#yoc_state_commitments_recent').val();
	var yoc_admitted_baseline = $('#yoc_admitted_baseline').val();
	var yoc_admitted_recent = $('#yoc_admitted_recent').val();
	var alos_of_yoc_baseline = $('#alos_of_yoc_baseline').val();
	var alos_of_yoc_recent = $('#alos_of_yoc_recent').val();
	
	$.post('php/sql_queries.php', { site_name: site_name, 
		total_detention_capacity: total_detention_capacity,
		jdai_username: jdai_username, 
		team_leader_ID: team_leader_ID, 
		baseline_start_month: baseline_start_month,
		baseline_start_day: baseline_start_day,
		baseline_start_year: baseline_start_year,
		recent_start_month: recent_start_month,
		recent_start_day: recent_start_day,
		recent_start_year: recent_start_year,
		baseline_finish_month: baseline_finish_month,
		baseline_finish_day: baseline_finish_day,
		baseline_finish_year: baseline_finish_year,
		recent_finish_month: recent_finish_month,
		recent_finish_day: recent_finish_day,
		recent_finish_year: recent_finish_year,
		adp_baseline: adp_baseline, 
		adp_recent: adp_recent, 
		annual_admission_baseline: annual_admission_baseline,
		annual_admission_recent: annual_admission_recent,
		alos_baseline: alos_baseline, 
		alos_recent: alos_recent,
		state_commitment_baseline: state_commitment_baseline,
		state_commitment_recent: state_commitment_recent,
		fta_rate_baseline: fta_rate_baseline, 
		fta_rate_recent: fta_rate_recent,
		juvenile_crime_baseline: juvenile_crime_baseline, 
		juvenile_crime_recent: juvenile_crime_recent,
		re_arrest_baseline: re_arrest_baseline, 
		re_arrest_recent: re_arrest_recent,
		fta_indicator: fta_indicator, 
		re_arrest_indicator: re_arrest_indicator,
		juvenile_crime_indicator: juvenile_crime_indicator, 
		yoc_in_adp_baseline: yoc_in_adp_baseline,
		yoc_in_adp_recent: yoc_in_adp_recent, 
		yoc_state_commitments_baseline: yoc_state_commitments_baseline,
		yoc_state_commitments_recent: yoc_state_commitments_recent, 
		yoc_admitted_baseline: yoc_admitted_baseline, 
		yoc_admitted_recent: yoc_admitted_recent,
		alos_of_yoc_baseline: alos_of_yoc_baseline, 
		alos_of_yoc_recent: alos_of_yoc_recent,
		current_report_ID: current_report_ID, button_name: button_name  }, function(data) {
		// $('#save_status').text(data);
		window.location.href = website_header_variable + 'form3.php'; 
	    // location.reload();
	 });
	 
});

// Only show buttons that make sense on the admin page
if (localStorage.team_leader_name != 'Administration')
{
  $('#make_form_final_button').attr("disabled", true);
}



var all_team_leaders = new Array();
var all_team_leaders_passwords = new Array();

all_team_leaders[1] = "Cathy Jo Waltz"; all_team_leaders_passwords[1] = "5000";
all_team_leaders[2] = "Dana Shoenberg"; all_team_leaders_passwords[2] = "5001";
all_team_leaders[3] = "Danielle Lipow"; all_team_leaders_passwords[3] = "5002";
all_team_leaders[4] = "Doug Mitchell"; all_team_leaders_passwords[4] = "5003";
all_team_leaders[5] = "Frank Orlando"; all_team_leaders_passwords[5] = "5004";
all_team_leaders[6] = "James Bell"; all_team_leaders_passwords[6] = "5005";
all_team_leaders[7] = "James Payne"; all_team_leaders_passwords[7] = "5006";
all_team_leaders[8] = "Jeff Bradley"; all_team_leaders_passwords[8] = "5007";

all_team_leaders[9] = "Jim Payne"; all_team_leaders_passwords[9] = "5008";
all_team_leaders[10] = "John Rhoads"; all_team_leaders_passwords[10] = "5009";
all_team_leaders[11] = "Judy Cox"; all_team_leaders_passwords[11] = "5010";
all_team_leaders[12] = "Lisa Macaluso"; all_team_leaders_passwords[12] = "5011";
all_team_leaders[13] = "Mark Soler"; all_team_leaders_passwords[13] = "5012";
all_team_leaders[14] = "Meghan Guevara"; all_team_leaders_passwords[14] = "5013";
all_team_leaders[15] = "Michael Finley"; all_team_leaders_passwords[15] = "5014";
all_team_leaders[16] = "Miquel Lewis"; all_team_leaders_passwords[16] = "5015";
all_team_leaders[17] = "Orlando Martinez"; all_team_leaders_passwords[17] = "5016";
all_team_leaders[18] = "Rand Young"; all_team_leaders_passwords[18] = "5017";
all_team_leaders[19] = "Rick Jensen"; all_team_leaders_passwords[19] = "5018";
all_team_leaders[20] = "Stephanie Vetter"; all_team_leaders_passwords[20] = "5019";
all_team_leaders[21] = "Steve Teske"; all_team_leaders_passwords[21] = "5020";
all_team_leaders[22] = "Tommy Jewel"; all_team_leaders_passwords[22] = "5021";
all_team_leaders[23] = "William P. Siffermann"; all_team_leaders_passwords[23] = "5022";
all_team_leaders[24] = "William Pfalzgraf"; all_team_leaders_passwords[24] = "5023"; 
all_team_leaders[25] = "Administration"; all_team_leaders_passwords[25] = "5024";
all_team_leaders[26] = "Beth Oprisch"; all_team_leaders_passwords[26] = "5025";
all_team_leaders[28] = "Keri Nash"; all_team_leaders_passwords[28] = "5027";
all_team_leaders[27] = "Laura Ridolfi"; all_team_leaders_passwords[27] = "5026";
all_team_leaders[29] = "Tzach Asher"; all_team_leaders_passwords[29] = "5028";

all_team_leaders[30] = "Denny Atherton"; all_team_leaders_passwords[30] = "5030";
all_team_leaders[31] = "Gail D. Mumford"; all_team_leaders_passwords[31] = "5032";
all_team_leaders[32] = "Gina Peralta"; all_team_leaders_passwords[32] = "5033";
all_team_leaders[33] = "Jason Szanyi"; all_team_leaders_passwords[33] = "5034";
all_team_leaders[34] = "Kelly Dedel"; all_team_leaders_passwords[34] = "5035"; 
all_team_leaders[35] = "Marcia Rincon-Gallardo"; all_team_leaders_passwords[35] = "5036";
all_team_leaders[36] = "Raquel Mariscal"; all_team_leaders_passwords[36] = "5037";
all_team_leaders[37] = "Scott MacDonald"; all_team_leaders_passwords[37] = "5039";
all_team_leaders[38] = "Saleem Shakir"; all_team_leaders_passwords[38] = "5038";
all_team_leaders[39] = "Tiana Davis"; all_team_leaders_passwords[39] = "5040";
all_team_leaders[40] = "Earl Ross"; all_team_leaders_passwords[40] = "5031";
all_team_leaders[41] = "Manager"; all_team_leaders_passwords[41] = "5041";

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
	
/*

$('#currentYearReportsTable tr').click(function (event) {
	alert($(this).attr('id')); //trying to alert id of the clicked row 
	var selected_report_id = $("#view_selected_report").attr("name");         
});

var select = document.getElementById("baseline_start_month");
select.options[select.options.length] = new Option('Jan', '01');
select.options[select.options.length] = new Option('Feb', '02');
select.options[select.options.length] = new Option('Mar', '03');
select.options[select.options.length] = new Option('Apr', '04');
select.options[select.options.length] = new Option('May', '05');
select.options[select.options.length] = new Option('June', '06');
select.options[select.options.length] = new Option('July', '07');
select.options[select.options.length] = new Option('Aug', '08');
select.options[select.options.length] = new Option('Sept', '09');
select.options[select.options.length] = new Option('Oct', '10');
select.options[select.options.length] = new Option('Nov', '11');
select.options[select.options.length] = new Option('Dec', '12');

var select = document.getElementById("baseline_finish_month");
select.options[select.options.length] = new Option('Jan', '01');
select.options[select.options.length] = new Option('Feb', '02');
select.options[select.options.length] = new Option('Mar', '03');
select.options[select.options.length] = new Option('Apr', '04');
select.options[select.options.length] = new Option('May', '05');
select.options[select.options.length] = new Option('June', '06');
select.options[select.options.length] = new Option('July', '07');
select.options[select.options.length] = new Option('Aug', '08');
select.options[select.options.length] = new Option('Sept', '09');
select.options[select.options.length] = new Option('Oct', '10');
select.options[select.options.length] = new Option('Nov', '11');
select.options[select.options.length] = new Option('Dec', '12');

var select = document.getElementById("recent_start_month");
select.options[select.options.length] = new Option('Jan', '01');
select.options[select.options.length] = new Option('Feb', '02');
select.options[select.options.length] = new Option('Mar', '03');
select.options[select.options.length] = new Option('Apr', '04');
select.options[select.options.length] = new Option('May', '05');
select.options[select.options.length] = new Option('June', '06');
select.options[select.options.length] = new Option('July', '07');
select.options[select.options.length] = new Option('Aug', '08');
select.options[select.options.length] = new Option('Sept', '09');
select.options[select.options.length] = new Option('Oct', '10');
select.options[select.options.length] = new Option('Nov', '11');
select.options[select.options.length] = new Option('Dec', '12');

var select = document.getElementById("recent_finish_month");
select.options[select.options.length] = new Option('Jan', '01');
select.options[select.options.length] = new Option('Feb', '02');
select.options[select.options.length] = new Option('Mar', '03');
select.options[select.options.length] = new Option('Apr', '04');
select.options[select.options.length] = new Option('May', '05');
select.options[select.options.length] = new Option('June', '06');
select.options[select.options.length] = new Option('July', '07');
select.options[select.options.length] = new Option('Aug', '08');
select.options[select.options.length] = new Option('Sept', '09');
select.options[select.options.length] = new Option('Oct', '10');
select.options[select.options.length] = new Option('Nov', '11');
select.options[select.options.length] = new Option('Dec', '12');

var select = document.getElementById("fta_indicator");
select.options[select.options.length] = new Option('All Youth Hearings', 'All Youth Hearings');
select.options[select.options.length] = new Option('Hearings for ATD Youth', 'Hearings for ATD Youth');
select.options[select.options.length] = new Option('Hearings for ATD and or Released Youth', 'Hearings for ATD and or Released Youth');

var select = document.getElementById("re_arrest_indicator");
select.options[select.options.length] = new Option('All Youth on ATDs', 'All Youth on ATDs');
select.options[select.options.length] = new Option('All Youth on ATDs and or Released', 'All Youth on ATDs and or Released');

var select = document.getElementById("juvenile_crime_indicator");
select.options[select.options.length] = new Option('Total Felony Petitions Filed', 'Total Felony Petitions Filed');
select.options[select.options.length] = new Option('Other', 'Other');

var select = document.getElementById("recent_finish_day");
select.options[select.options.length] = new Option(' 1', '01');
select.options[select.options.length] = new Option(' 2', '02');
select.options[select.options.length] = new Option(' 3', '03');
select.options[select.options.length] = new Option(' 4', '04');
select.options[select.options.length] = new Option(' 5', '05');
select.options[select.options.length] = new Option(' 6', '06');
select.options[select.options.length] = new Option(' 7', '07');
select.options[select.options.length] = new Option(' 8', '08');
select.options[select.options.length] = new Option(' 9', '09');
select.options[select.options.length] = new Option('10', '10');
select.options[select.options.length] = new Option('11', '11');
select.options[select.options.length] = new Option('12', '12');
select.options[select.options.length] = new Option('13', '13');
select.options[select.options.length] = new Option('14', '14');
select.options[select.options.length] = new Option('15', '15');
select.options[select.options.length] = new Option('16', '16');
select.options[select.options.length] = new Option('17', '17');
select.options[select.options.length] = new Option('18', '18');
select.options[select.options.length] = new Option('19', '19');
select.options[select.options.length] = new Option('20', '20');
select.options[select.options.length] = new Option('21', '21');
select.options[select.options.length] = new Option('22', '22');
select.options[select.options.length] = new Option('23', '23');
select.options[select.options.length] = new Option('24', '24');
select.options[select.options.length] = new Option('25', '25');
select.options[select.options.length] = new Option('26', '26');
select.options[select.options.length] = new Option('27', '27');
select.options[select.options.length] = new Option('28', '28');
select.options[select.options.length] = new Option('29', '29');
select.options[select.options.length] = new Option('30', '30');
select.options[select.options.length] = new Option('31', '31');

if (serverData.team_leader_ID != "")
			team_leader_dropdown_string[i] = serverData.team_leader_ID;	
			$.each(team_leader_dropdown_string, function(i, el){
				if($.inArray(el, unique_team_leader_dropdown_string) === -1) unique_team_leader_dropdown_string.push(el);
			});
			unique_team_leader_dropdown_string.sort(); 
*/

}); // End Document Ready Function





















































