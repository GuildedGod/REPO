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

// Get Users
/*
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
*/

// Insert and Update Buttons

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
	
	// Data Validation checks for Impact Results
	/*
	// Check Baseline ADP
	// Checks the baseline ADP based on the Annual Admissions Baseline and the ALOS Baseline
	var temp_adp_baseline = (annual_admission_baseline / 365) * alos_baseline; // Calculate 
	var temp_adp_min_baseline = temp_adp_baseline - (temp_adp_baseline / 5);
	var temp_adp_max_baseline = temp_adp_baseline + (temp_adp_baseline / 5);
	if ((adp_baseline < temp_adp_min_baseline) || (adp_baseline > temp_adp_max_baseline))
	{
		alert("You have entered a baseline ADP that is more than 20 percent higher or lower than expected, based on the baseline Admissions and baseline ALOS you entered and the typical relationship between ADP, Admissions and ALOS described on the 'Results Reports 101' page on this site. You can continue entering data in your Results Report, but please check your baseline data and consider making revisions. Contact your TATL if you need further assistance.");
		// alert("temp_adp_baseline = " + temp_adp_baseline);
	}
	
	// Check Recent ADP
	// Checks the recent ADP based on the Annual Admissions Recent and the ALOS Recent
	var temp_adp_recent = (annual_admission_recent / 365) * alos_recent; // Calculate 
	var temp_adp_min_recent = temp_adp_recent - (temp_adp_recent / 5);
	var temp_adp_max_recent = temp_adp_recent + (temp_adp_recent / 5);
	if ((adp_recent < temp_adp_min_recent) || (adp_recent > temp_adp_max_recent))
	{
		alert("You have entered a recent ADP that is more than 20 percent higher or lower than expected, based on the recent Admissions and recent ALOS you entered and the typical relationship between ADP, Admissions and ALOS described on the 'Results Reports 101' page on this site. You can continue entering data in your Results Report, but please check your recent data and consider making revisions. Contact your TATL if you need further assistance."); 
	}
	
	// Check YOC Baseline ADP
	var temp_yoc_adp_baseline = (yoc_admitted_baseline / 365) * alos_of_yoc_baseline; // Calculate 
	var temp_yoc_adp_min_baseline = temp_yoc_adp_baseline - (temp_yoc_adp_baseline / 5);
	var temp_yoc_adp_max_baseline = temp_yoc_adp_baseline + (temp_yoc_adp_baseline / 5);
	if ((yoc_in_adp_baseline < temp_yoc_adp_min_baseline) || (yoc_in_adp_baseline > temp_yoc_adp_max_baseline))
	{
		alert("You have entered a baseline YOC ADP that is more than 20 percent higher or lower than expected, based on the baseline YOC Admissions and baseline YOC ALOS you entered and the typical relationship between ADP, Admissions and ALOS described on the 'Results Reports 101' page on this site. You can continue entering data in your Results Report, but please check your baseline YOC data and consider making revisions. Contact your TATL if you need further assistance.");
	}
	
	// Check YOC Recent ADP
	var temp_yoc_adp_recent = (yoc_admitted_recent / 365) * alos_of_yoc_recent; // Calculate 
	var temp_yoc_adp_min_recent = temp_yoc_adp_recent - (temp_yoc_adp_recent / 5);
	var temp_yoc_adp_max_recent = temp_yoc_adp_recent + (temp_yoc_adp_recent / 5);	
	if ((yoc_in_adp_recent < temp_yoc_adp_min_recent) || (yoc_in_adp_recent > temp_yoc_adp_max_recent))
	{
		alert("You have entered a recent YOC ADP that is more than 20 percent higher or lower than expected, based on the recent YOC Admissions and recent YOC ALOS you entered and the typical relationship between ADP, Admissions and ALOS described on the 'Results Reports 101' page on this site. You can continue entering data in your Results Report, but please check your recent YOC data and consider making revisions. Contact your TATL if you need further assistance.");
	}
	
	// Check is YOC admitted is greater than total admitted
	if (yoc_admitted_baseline > annual_admission_baseline)
	{
		alert("You have entered a baseline YOC Admissions count that exceeds the baseline total Admissions count you have entered. You can continue entering data in your Results Report, but please check your baseline Admissions data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}
	
	// Check to see if YOC admitted recent is greater than total admitted recent
	if (yoc_admitted_recent > annual_admission_recent)
	{
		alert("You have entered a recent YOC Admissions count that exceeds the recent total Admissions count you have entered. You can continue entering data in your Results Report, but please check your recent Admissions data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}
	
	// Check to see if YOC ADP baseline is greater than total ADP baseline
	if (yoc_in_adp_baseline > adp_baseline)
	{
		alert("You have entered a baseline YOC ADP that exceeds the baseline total ADP you have entered. You can continue entering data in your Results Report, but please check your baseline ADP data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}
	
	// Check to see if YOC ADP recent is greater than total ADP recent
	if (yoc_in_adp_recent > adp_recent)
	{
		alert("You have entered a recent YOC ADP that exceeds the recent total ADP you have entered. You can continue entering data in your Results Report, but please check your recent ADP data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}
	
	
	
	
	// Check to see if YOC state commitment baseline is greater than total state commitment baseline
	
	if (yoc_state_commitments_baseline > state_commitment_baseline)
	{
		alert("You have entered a baseline YOC Commitments count that exceeds the baseline total Commitments count you have entered. You can continue entering data in your Results Report, but please check your baseline Commitments data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance."); 
		alert("yoc_state_commitments_baseline = " + yoc_state_commitments_baseline);
		alert("state_commitment_baseline = " + state_commitment_baseline);
	}




	// Check to see if YOC state commitment recent is greater than total state commitment recent
	if (yoc_state_commitments_recent > state_commitment_recent)
	{
		alert("You have entered a recent YOC Commitments count that exceeds the recent total Commitments count you have entered. You can continue entering data in your Results Report, but please check your recent Commitments data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}	
	*/
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
	
	// Data Validation checks for Impact Results
	
	/*
	// Check Baseline ADP
	// Checks the baseline ADP based on the Annual Admissions Baseline and the ALOS Baseline
	var temp_adp_baseline = (annual_admission_baseline / 365) * alos_baseline; // Calculate 
	var temp_adp_min_baseline = temp_adp_baseline - (temp_adp_baseline / 5);
	var temp_adp_max_baseline = temp_adp_baseline + (temp_adp_baseline / 5);
	if ((adp_baseline < temp_adp_min_baseline) || (adp_baseline > temp_adp_max_baseline))
	{
		alert("You have entered a baseline ADP that is more than 20 percent higher or lower than expected, based on the baseline Admissions and baseline ALOS you entered and the typical relationship between ADP, Admissions and ALOS described on the 'Results Reports 101' page on this site. You can continue entering data in your Results Report, but please check your baseline data and consider making revisions. Contact your TATL if you need further assistance.");
		// alert("temp_adp_baseline = " + temp_adp_baseline);
	}
	
	// Check Recent ADP
	// Checks the recent ADP based on the Annual Admissions Recent and the ALOS Recent
	var temp_adp_recent = (annual_admission_recent / 365) * alos_recent; // Calculate 
	var temp_adp_min_recent = temp_adp_recent - (temp_adp_recent / 5);
	var temp_adp_max_recent = temp_adp_recent + (temp_adp_recent / 5);
	if ((adp_recent < temp_adp_min_recent) || (adp_recent > temp_adp_max_recent))
	{
		alert("You have entered a recent ADP that is more than 20 percent higher or lower than expected, based on the recent Admissions and recent ALOS you entered and the typical relationship between ADP, Admissions and ALOS described on the 'Results Reports 101' page on this site. You can continue entering data in your Results Report, but please check your recent data and consider making revisions. Contact your TATL if you need further assistance."); 
	}
	
	// Check YOC Baseline ADP
	var temp_yoc_adp_baseline = (yoc_admitted_baseline / 365) * alos_of_yoc_baseline; // Calculate 
	var temp_yoc_adp_min_baseline = temp_yoc_adp_baseline - (temp_yoc_adp_baseline / 5);
	var temp_yoc_adp_max_baseline = temp_yoc_adp_baseline + (temp_yoc_adp_baseline / 5);
	if ((yoc_in_adp_baseline < temp_yoc_adp_min_baseline) || (yoc_in_adp_baseline > temp_yoc_adp_max_baseline))
	{
		alert("You have entered a baseline YOC ADP that is more than 20 percent higher or lower than expected, based on the baseline YOC Admissions and baseline YOC ALOS you entered and the typical relationship between ADP, Admissions and ALOS described on the 'Results Reports 101' page on this site. You can continue entering data in your Results Report, but please check your baseline YOC data and consider making revisions. Contact your TATL if you need further assistance.");
	}
	
	// Check YOC Recent ADP
	var temp_yoc_adp_recent = (yoc_admitted_recent / 365) * alos_of_yoc_recent; // Calculate 
	var temp_yoc_adp_min_recent = temp_yoc_adp_recent - (temp_yoc_adp_recent / 5);
	var temp_yoc_adp_max_recent = temp_yoc_adp_recent + (temp_yoc_adp_recent / 5);	
	if ((yoc_in_adp_recent < temp_yoc_adp_min_recent) || (yoc_in_adp_recent > temp_yoc_adp_max_recent))
	{
		alert("You have entered a recent YOC ADP that is more than 20 percent higher or lower than expected, based on the recent YOC Admissions and recent YOC ALOS you entered and the typical relationship between ADP, Admissions and ALOS described on the 'Results Reports 101' page on this site. You can continue entering data in your Results Report, but please check your recent YOC data and consider making revisions. Contact your TATL if you need further assistance.");
	}
	
	// Check is YOC admitted is greater than total admitted
	if (yoc_admitted_baseline > annual_admission_baseline)
	{
		alert("You have entered a baseline YOC Admissions count that exceeds the baseline total Admissions count you have entered. You can continue entering data in your Results Report, but please check your baseline Admissions data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}
	
	// Check to see if YOC admitted recent is greater than total admitted recent
	if (yoc_admitted_recent > annual_admission_recent)
	{
		alert("You have entered a recent YOC Admissions count that exceeds the recent total Admissions count you have entered. You can continue entering data in your Results Report, but please check your recent Admissions data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}
	
	// Check to see if YOC ADP baseline is greater than total ADP baseline
	if (yoc_in_adp_baseline > adp_baseline)
	{
		alert("You have entered a baseline YOC ADP that exceeds the baseline total ADP you have entered. You can continue entering data in your Results Report, but please check your baseline ADP data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}
	
	// Check to see if YOC ADP recent is greater than total ADP recent
	if (yoc_in_adp_recent > adp_recent)
	{
		alert("You have entered a recent YOC ADP that exceeds the recent total ADP you have entered. You can continue entering data in your Results Report, but please check your recent ADP data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}
	
	
	
	
	
	
	// Check to see if YOC state commitment baseline is greater than total state commitment baseline
	
	if (yoc_state_commitments_baseline > state_commitment_baseline)
	{
		alert("You have entered a baseline YOC Commitments count that exceeds the baseline total Commitments count you have entered. You can continue entering data in your Results Report, but please check your baseline Commitments data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance."); 
		alert("yoc_state_commitments_baseline = " + yoc_state_commitments_baseline);
		alert("state_commitment_baseline = " + state_commitment_baseline);
	}




	// Check to see if YOC state commitment recent is greater than total state commitment recent
	if (yoc_state_commitments_recent > state_commitment_recent)
	{
		alert("You have entered a recent YOC Commitments count that exceeds the recent total Commitments count you have entered. You can continue entering data in your Results Report, but please check your recent Commitments data and consider making revisions. Check the 'Results Reports 101' page on this site for more details, and contact your TATL if you need further assistance.");  
	}		
	*/
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





















































