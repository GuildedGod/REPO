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
var reform_ID;
var button_name;
var lastLeverageNumber = 0;
var allReportYears = new Array();
var allReportSiteNames = new Array();


$(document).ready(function() {

// Get all reform info
$.post('php/get_reforms.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		$.each(pushedData, function(i, serverData) { 
			if (localStorage.current_report_ID == serverData.report_ID)
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


}); // End Document Ready Function





















































