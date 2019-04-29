<?php
include("../db/dbconnect.php"); // List first; Contains the connection information to the database 

$button_name = mysql_real_escape_string(htmlentities($_POST['button_name']));

///////////////////////////////////////////////////////////////////////	
// Add a new report to the database
	if ($button_name == "new_report_button") {
	
	// Create and format the date
	// $date = date_create(); 
    // $cool_date =  date_format($date, 'Y-m-d H:i:s') . "\n"; 
	
	// Get passed values from button and login
	$site_name = mysql_real_escape_string(htmlentities($_POST['site_name']));
	$current_year = mysql_real_escape_string(htmlentities($_POST['current_year']));
	$team_leader_ID2 = mysql_real_escape_string(htmlentities($_POST['team_leader_ID2']));
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	$last_year = $current_year - 1;
	
	// Get the baseline info from the 2012 report
	$result = mysql_query("SELECT * FROM casey_reports WHERE site_name = '" . $site_name . "' AND current_year = '" . $last_year . "';", $conn);
	$data = mysql_fetch_assoc($result);
	// $futureStart = date('Y-m-d',strtotime('+1 year', $data['recent_start']));
	// $futureFinish = date('Y-m-d',strtotime('+1 year', $data['recent_finish']));
	
	$sql = "INSERT INTO casey_reports (report_ID, site_name, current_year, baseline_start, baseline_finish, recent_start, recent_finish, adp_baseline, annual_admission_baseline, alos_baseline, state_commitment_baseline, fta_rate_baseline, yoc_state_commitments_baseline, yoc_admitted_baseline, alos_of_yoc_baseline, juvenile_crime_baseline, yoc_in_adp_baseline, re_arrest_baseline, team_leader_ID, total_detention_capacity) VALUES ('" . $current_report_ID . "', '" . $site_name . "', '" . $current_year . "', '" . $data['baseline_start'] . "', '" . $data['baseline_finish'] . "', '" . $data['recent_start'] . "', '" . $data['recent_finish'] . "', '" . $data['adp_baseline'] . "', '" . $data['annual_admission_baseline'] . "', '" . $data['alos_baseline'] . "', '" . $data['state_commitment_baseline'] . "', '" . $data['fta_rate_baseline'] . "', '" . $data['yoc_state_commitments_baseline'] . "', '" . $data['yoc_admitted_baseline'] . "', '" . $data['alos_of_yoc_baseline'] . "', '" . $data['juvenile_crime_baseline'] . "', '" . $data['yoc_in_adp_baseline'] . "', '" . $data['re_arrest_baseline'] . "', '" . $team_leader_ID2 . "', '" . $data['total_detention_capacity'] . "');";
	 
	$update = mysql_query($sql, $conn);
	
	// Insert a record in each table for the current report
	$sql2  = "INSERT INTO casey_reforms (report_ID) VALUES ('"  . $current_report_ID . "'); ";
	$update2 = mysql_query($sql2, $conn);
	
	if (($update === true) && ($update2 === true)){
		echo 'Database has been updated.' . $sql . "<br>" . $sql2;
	} else if (($update === false) || ($update2 === false)) {
		echo 'There was an error updating your settings. ' . $sql . " " . $sql2;
		}
	} // End button query if	
	
	/*
	///////////////////////////////////////////////////////////////////////	
// Add a new report to the database
	if ($button_name == "new_report_button") {
	
	// Create and format the date
	$date = date_create(); 
    $cool_date =  date_format($date, 'Y-m-d H:i:s') . "\n"; 
	
	// Get passed values from button and login
	$site_name = mysql_real_escape_string(htmlentities($_POST['site_name']));
	$current_year = mysql_real_escape_string(htmlentities($_POST['current_year']));
	$team_leader_ID2 = mysql_real_escape_string(htmlentities($_POST['team_leader_ID2']));
	$last_year = $current_year - 1;
	
	$is_there_a_report_from_last_year = "false"; // Initialize the value
	$result = mysql_query("SELECT COUNT(*) AS ReportMadeLastYear FROM casey_reports WHERE site_name = '" . $site_name . "' AND current_year = '" . $last_year . "';", $conn);
	$data = mysql_fetch_assoc($result);
    if ($data['ReportMadeLastYear'] > 0)
	{
		$is_there_a_report_from_last_year = "true";
		$result = mysql_query("SELECT * FROM casey_reports WHERE site_name = '" . $site_name . "' AND current_year = '" . $last_year . "';", $conn);
		$data = mysql_fetch_assoc($result);
		$sql1 = "INSERT INTO casey_reports (report_ID, site_name, current_year, baseline_start, baseline_finish, recent_start, recent_finish, adp_baseline, annual_admission_baseline, alos_baseline, state_commitment_baseline, fta_rate_baseline, yoc_state_commitments_baseline, yoc_admitted_baseline, alos_of_yoc_baseline, juvenile_crime_baseline, yoc_in_adp_baseline, re_arrest_baseline, team_leader_ID2) VALUES ('" . $cool_date . "', '" . $site_name . "', '" . $current_year . "', '" . $data['baseline_start'] . "', '" . $data['baseline_finish'] . "', '" . $data['recent_start'] . "', '" . $data['recent_finish'] . "', '" . $data['adp_baseline'] . "', '" . $data['annual_admission_baseline'] . "', '" . $data['alos_baseline'] . "', '" . $data['state_commitment_baseline'] . "', '" . $data['fta_rate_baseline'] . "', '" . $data['yoc_state_commitments_baseline'] . "', '" . $data['yoc_admitted_baseline'] . "', '" . $data['alos_of_yoc_baseline'] . "', '" . $data['juvenile_crime_baseline'] . "', '" . $data['yoc_in_adp_baseline'] . "', '" . $data['re_arrest_baseline'] . "', '" . $data['team_leader_ID2'] . "');";
	}
	
	// Generic insert statement (if no report last year)
	$sql = "INSERT INTO casey_reports (report_ID, site_name, current_year) VALUES ('" . $cool_date . "', '" . $site_name . "', '" . $current_year . "');";
	
	// Swap out insert statements for one with baseline if report last year
	if ($is_there_a_report_from_last_year == "true")
	$sql = $sql1;
	 
	$update = mysql_query($sql, $conn);
	if ($update === true){
		
		// Insert a record in each table for the current report
		$sql3  = "INSERT INTO casey_reforms (reform_ID, report_ID) VALUES ('" . $cool_date . "', '" . $cool_date . "'); ";
		$update3 = mysql_query($sql3, $conn);
		if ($update3 === true){
			// echo 'Database has been updated.' . $sql . $is_there_a_report_from_last_year;
			echo $cool_date;
		} // End if
		else if ($update3 === false) 
		{
			echo 'There was an error updating your settings (with the extra insert statements) . ' . $sql3;
		} // End if
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql . $cool_date;
		}
	} // End button query if
	*/

///////////////////////////////////////////////////////////////////////	
// Update a leverage activity that has already been added to the database
	if ($button_name == "update_leverage_button") {
	$leverage_project_description = mysql_real_escape_string(htmlentities($_POST['leverage_project_description']));
	$leverage_amount = mysql_real_escape_string(htmlentities($_POST['leverage_amount']));
	$leverage_funding_type = mysql_real_escape_string(htmlentities($_POST['leverage_funding_type']));
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	$leverage_ID = mysql_real_escape_string(htmlentities($_POST['leverage_ID']));
	
	// Find the ID of the current report 
	//  $result = mysql_query("SELECT report_ID FROM casey_reports ORDER BY report_ID DESC LIMIT 1;", $conn);
	//  $data = mysql_fetch_assoc($result);
	//  $current_report_ID = $data['report_ID'];
	
	$sql = "UPDATE casey_leverage SET project_description = '" . $leverage_project_description . "', amount = '" . $leverage_amount . "', funding_type = '" . $leverage_funding_type . "' WHERE leverage_ID = '". $leverage_ID . "';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	
///////////////////////////////////////////////////////////////////////	
// Add a leverage activity that has already been added to the database
	if ($button_name == "add_leverage_button") {
	$leverage_project_description = mysql_real_escape_string(htmlentities($_POST['leverage_project_description']));
	$leverage_amount = mysql_real_escape_string(htmlentities($_POST['leverage_amount']));
	$leverage_funding_type = mysql_real_escape_string(htmlentities($_POST['leverage_funding_type']));
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	$leverage_ID = mysql_real_escape_string(htmlentities($_POST['leverage_ID']));
	$jdai_username = mysql_real_escape_string(htmlentities($_POST['jdai_username']));
	
	$sql = "INSERT INTO casey_leverage (report_ID, project_description, amount, funding_type) VALUES ('" . $current_report_ID . "', '" . $leverage_project_description . "', " . $leverage_amount . ", '" . $leverage_funding_type . "');";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated bro. ' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if

///////////////////////////////////////////////////////////////////////	
// Update a media activity that has already been added to the database
	if ($button_name == "update_media_button") {
	$media_name = mysql_real_escape_string(htmlentities($_POST['media_name']));
	$media_type = mysql_real_escape_string(htmlentities($_POST['media_type']));
	$media_month = mysql_real_escape_string(htmlentities($_POST['media_month']));
	$media_day = mysql_real_escape_string(htmlentities($_POST['media_day']));
	$media_year = mysql_real_escape_string(htmlentities($_POST['media_year']));
	$media_ID = mysql_real_escape_string(htmlentities($_POST['media_to_update']));
	
	$sql = "UPDATE casey_media SET media_name = '" . $media_name . "', media_type = '" . $media_type . "', media_date = '" . $media_year . "-" . $media_month . "_" . $media_day . "' WHERE media_ID = '". $media_ID . "';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.';
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	
///////////////////////////////////////////////////////////////////////	
// Add a new media activity to the database
	if ($button_name == "add_media_button") {
	$media_name = mysql_real_escape_string(htmlentities($_POST['media_name']));
	$media_type = mysql_real_escape_string(htmlentities($_POST['media_type']));
	$media_month = mysql_real_escape_string(htmlentities($_POST['media_month']));
	$media_day = mysql_real_escape_string(htmlentities($_POST['media_day']));
	$media_year = mysql_real_escape_string(htmlentities($_POST['media_year']));
	$media_ID = mysql_real_escape_string(htmlentities($_POST['media_ID']));
	$jdai_username = mysql_real_escape_string(htmlentities($_POST['jdai_username']));
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	
	$sql = "INSERT INTO casey_media (report_ID, media_name, media_type, media_date) VALUES ('" . $current_report_ID . "', '" . $media_name . "', '" . $media_type . "', '" . $media_year . "-" . $media_month . "-" . $media_day . "');";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if

///////////////////////////////////////////////////////////////////////	
// Update a reform activity that has already been added to the database
	if ($button_name == "update_reforms_button") {
	$governance_structure = mysql_real_escape_string(htmlentities($_POST['governance_structure']));
	$work_plan = mysql_real_escape_string(htmlentities($_POST['work_plan']));
	$purpose_of_detention = mysql_real_escape_string(htmlentities($_POST['purpose_of_detention']));
	$red_authority = mysql_real_escape_string(htmlentities($_POST['red_authority']));
	$utilization_study = mysql_real_escape_string(htmlentities($_POST['utilization_study']));
	$comprehensive_detention_population_reports = mysql_real_escape_string(htmlentities($_POST['comprehensive_detention_population_reports']));
	$comprehensive_rai_reports = mysql_real_escape_string(htmlentities($_POST['comprehensive_rai_reports']));
	$comprehensive_atd_reports = mysql_real_escape_string(htmlentities($_POST['comprehensive_atd_reports']));
	$field_criteria_for_police = mysql_real_escape_string(htmlentities($_POST['field_criteria_for_police']));
	$detention_screening_tool = mysql_real_escape_string(htmlentities($_POST['detention_screening_tool']));
	$screening_24_7 = mysql_real_escape_string(htmlentities($_POST['screening_24_7']));
	$home_detention = mysql_real_escape_string(htmlentities($_POST['home_detention']));
	$day_evening_reporting = mysql_real_escape_string(htmlentities($_POST['day_evening_reporting']));
	$shelter_foster_care_beds = mysql_real_escape_string(htmlentities($_POST['shelter_foster_care_beds']));
	$atd_placement_coordination = mysql_real_escape_string(htmlentities($_POST['atd_placement_coordination']));
	$weekly_detention_review = mysql_real_escape_string(htmlentities($_POST['weekly_detention_review']));
	$revised_speedy_trail_rules = mysql_real_escape_string(htmlentities($_POST['revised_speedy_trail_rules']));
	$expeditor = mysql_real_escape_string(htmlentities($_POST['expeditor']));
	$targeting_stuck_cases = mysql_real_escape_string(htmlentities($_POST['targeting_stuck_cases']));
	$court_notification_system = mysql_real_escape_string(htmlentities($_POST['court_notification_system']));
	$sanctions_incentives_grid = mysql_real_escape_string(htmlentities($_POST['sanctions_incentives_grid']));
	$differential_warrant_policy = mysql_real_escape_string(htmlentities($_POST['differential_warrant_policy']));
	$placement_expediting = mysql_real_escape_string(htmlentities($_POST['placement_expediting']));
	$formal_mandate = mysql_real_escape_string(htmlentities($_POST['formal_mandate']));
	$community_engagement = mysql_real_escape_string(htmlentities($_POST['community_engagement']));
	$disaggregated_data = mysql_real_escape_string(htmlentities($_POST['disaggregated_data']));
	$special_detention_case_reforms = mysql_real_escape_string(htmlentities($_POST['special_detention_case_reforms']));
	$jdai_facility_standards = mysql_real_escape_string(htmlentities($_POST['jdai_facility_standards']));
	$self_assessment_inspection = mysql_real_escape_string(htmlentities($_POST['self_assessment_inspection']));
	$corrections_plan = mysql_real_escape_string(htmlentities($_POST['corrections_plan']));
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	$reform_ID = mysql_real_escape_string(htmlentities($_POST['reform_ID']));
	$jdai_username = mysql_real_escape_string(htmlentities($_POST['jdai_username']));
	$site_name = mysql_real_escape_string(htmlentities($_POST['site_name']));
	
	$sql = "UPDATE casey_reforms SET " .
	"governance_structure = '" . $governance_structure . 
	"', work_plan = '" . $work_plan . 
	"', purpose_of_detention = '" . $purpose_of_detention . 
	"', red_authority = '" . $red_authority . 
	"', utilization_study = '" . $utilization_study . 
	"', comprehensive_detention_population_reports = '" . $comprehensive_detention_population_reports . 
	"', comprehensive_rai_reports = '" . $comprehensive_rai_reports . 
	"', comprehensive_atd_reports = '" . $comprehensive_atd_reports . 
	"', field_criteria_for_police = '" . $field_criteria_for_police . 
	"', detention_screening_tool = '" . $detention_screening_tool . 
	"', screening_24_7 = '" . $screening_24_7 . 
	"', home_detention = '" . $home_detention . 
	"', day_evening_reporting = '" . $day_evening_reporting . 
	"', shelter_foster_care_beds = '" . $shelter_foster_care_beds . 
	"', atd_placement_coordination = '" . $atd_placement_coordination  . 
	"', weekly_detention_review = '" . $weekly_detention_review  . 
	"', revised_speedy_trail_rules = '" . $revised_speedy_trail_rules . 
	"', targeting_stuck_cases = '" . $targeting_stuck_cases . 
	"', court_notification_system = '" . $court_notification_system . 
	"', sanctions_incentives_grid = '" . $sanctions_incentives_grid . 
	"', differential_warrant_policy = '" . $differential_warrant_policy . 
	"', placement_expediting = '" . $placement_expediting . 
	"', formal_mandate = '" . $formal_mandate . 
	"', community_engagement = '" . $community_engagement .
	"', disaggregated_data = '" . $disaggregated_data .
	"', special_detention_case_reforms = '" . $special_detention_case_reforms .
	"', jdai_facility_standards = '" . $jdai_facility_standards .
	"', self_assessment_inspection = '" . $self_assessment_inspection .
	"', expeditor = '" . $expeditor .
	"', corrections_plan  = '" . $corrections_plan  . 
	"' WHERE report_ID = '". $current_report_ID . "';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	

///////////////////////////////////////////////////////////////////////	
// Update a trainings activity that has already been added to the database
	if ($button_name == "update_training_button") {
	$training_name = mysql_real_escape_string(htmlentities($_POST['training_name']));
	$number_trained = mysql_real_escape_string(htmlentities($_POST['number_trained']));
	$jdai_focus_area = mysql_real_escape_string(htmlentities($_POST['jdai_focus_area']));
	$training_month = mysql_real_escape_string(htmlentities($_POST['training_month']));
	$training_day = mysql_real_escape_string(htmlentities($_POST['training_day']));
	$training_year = mysql_real_escape_string(htmlentities($_POST['training_year']));
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	$training_ID = mysql_real_escape_string(htmlentities($_POST['training_ID']));
	$jdai_username = mysql_real_escape_string(htmlentities($_POST['jdai_username']));
	
	$sql = "UPDATE casey_trainings SET training_name = '" . $training_name . "', number_trained = " . $number_trained . ", jdai_focus_area = '" . $jdai_focus_area . "', training_date = '" . $training_year . "-" . $training_month . "-" . $training_day . "' WHERE training_ID = '". $training_ID . "';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	
///////////////////////////////////////////////////////////////////////	
// Add a new training activity to the database
	if ($button_name == "add_training_button") {
	$training_name = mysql_real_escape_string(htmlentities($_POST['training_name']));
	$number_trained = mysql_real_escape_string(htmlentities($_POST['number_trained']));
	$jdai_focus_area = mysql_real_escape_string(htmlentities($_POST['jdai_focus_area']));
	$training_month = mysql_real_escape_string(htmlentities($_POST['training_month']));
	$training_day = mysql_real_escape_string(htmlentities($_POST['training_day']));
	$training_year = mysql_real_escape_string(htmlentities($_POST['training_year']));
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	$training_ID = mysql_real_escape_string(htmlentities($_POST['training_ID']));
	$jdai_username = mysql_real_escape_string(htmlentities($_POST['jdai_username']));
	
	$sql = "INSERT INTO casey_trainings (report_ID, training_name, number_trained, jdai_focus_area, training_date) VALUES ('" . $current_report_ID . "', '" . $training_name . "', '" . $number_trained . "', '" . $jdai_focus_area . "', '" . $training_year . "-" . $training_month . "-" . $training_day . "');";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	
///////////////////////////////////////////////////////////////////////	
// Update a report notes section that has already been added to the database
	if ($button_name == "final_notes_save_button") {
	$report_notes = mysql_real_escape_string(htmlentities($_POST['report_notes']));
	$usability_notes = mysql_real_escape_string(htmlentities($_POST['usability_notes']));
	$current_status = mysql_real_escape_string(htmlentities($_POST['current_status']));
	$site_name = mysql_real_escape_string(htmlentities($_POST['site_name']));
	
	// Find the ID of the current report 
	$result = mysql_query("SELECT report_ID FROM casey_reports WHERE site_name = '" . $site_name . "'  ORDER BY report_ID DESC LIMIT 1;", $conn);
	$data = mysql_fetch_assoc($result);
	$current_report_ID = $data['report_ID'];
	
	$sql = "UPDATE casey_reports SET report_notes = '" . $report_notes . "', usability_notes = '" . $usability_notes . "', current_status = '" . $current_status . "' WHERE report_ID = '". $current_report_ID . "';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	
	
///////////////////////////////////////////////////////////////////////	
// Update button to submit form from TA TL to JDAI
// $.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function(data) {
	if ($button_name == "submit_form_to_jdai_button") {
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	
	$sql = "UPDATE casey_reports SET current_status = 'Completed' WHERE report_ID = '". $current_report_ID . "';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	
///////////////////////////////////////////////////////////////////////	
// Update button to make current form "in - progress"
// $.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function(data) {
	if ($button_name == "make_report_in_progress_button") {
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	
	$sql = "UPDATE casey_reports SET current_status = 'In-Progress' WHERE report_ID = '". $current_report_ID . "';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	

///////////////////////////////////////////////////////////////////////	
// Update button to submit form from JDAI to Final
	if ($button_name == "make_form_final_button") {
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	
	$sql = "UPDATE casey_reports SET current_status = 'Final' WHERE report_ID = '". $current_report_ID . "';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if
	
	
///////////////////////////////////////////////////////////////////////	
// Update the impact results that have already been added to the database
	if ($button_name == "update_impact_results_button") {
		/*
		baseline_start_month: baseline_start_month,
		baseline_start_day: baseline_start_day,
		baseline_start_year: baseline_start_year,
		recent_start_month: recent_start_month,
		recent_start_day: recent_start_day,
		recent_finish_year: recent_finish_year,
		*/
	$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
	$site_name = mysql_real_escape_string(htmlentities($_POST['site_name']));
	$total_detention_capacity = mysql_real_escape_string(htmlentities($_POST['total_detention_capacity']));
	$jdai_username = mysql_real_escape_string(htmlentities($_POST['jdai_username']));
	$team_leader_ID = mysql_real_escape_string(htmlentities($_POST['team_leader_ID']));
	$baseline_start_month = mysql_real_escape_string(htmlentities($_POST['baseline_start_month']));
	$baseline_start_day = mysql_real_escape_string(htmlentities($_POST['baseline_start_day']));
	$baseline_start_year = mysql_real_escape_string(htmlentities($_POST['baseline_start_year']));
	$recent_start_month = mysql_real_escape_string(htmlentities($_POST['recent_start_month']));
	$recent_start_day = mysql_real_escape_string(htmlentities($_POST['recent_start_day']));
	$recent_start_year = mysql_real_escape_string(htmlentities($_POST['recent_start_year']));
	
	$baseline_finish_month = mysql_real_escape_string(htmlentities($_POST['baseline_finish_month']));
	$baseline_finish_day = mysql_real_escape_string(htmlentities($_POST['baseline_finish_day']));
	$baseline_finish_year = mysql_real_escape_string(htmlentities($_POST['baseline_finish_year']));
	$recent_finish_month = mysql_real_escape_string(htmlentities($_POST['recent_finish_month']));
	$recent_finish_day = mysql_real_escape_string(htmlentities($_POST['recent_finish_day']));
	$recent_finish_year = mysql_real_escape_string(htmlentities($_POST['recent_finish_year']));
	
	$adp_baseline = mysql_real_escape_string(htmlentities($_POST['adp_baseline']));
	$adp_recent = mysql_real_escape_string(htmlentities($_POST['adp_recent']));
	$annual_admission_baseline = mysql_real_escape_string(htmlentities($_POST['annual_admission_baseline']));
	$annual_admission_recent = mysql_real_escape_string(htmlentities($_POST['annual_admission_recent']));
	$alos_baseline = mysql_real_escape_string(htmlentities($_POST['alos_baseline']));
	$alos_recent = mysql_real_escape_string(htmlentities($_POST['alos_recent']));
	$state_commitment_baseline = mysql_real_escape_string(htmlentities($_POST['state_commitment_baseline']));
	$state_commitment_recent = mysql_real_escape_string(htmlentities($_POST['state_commitment_recent']));
	$fta_rate_baseline = mysql_real_escape_string(htmlentities($_POST['fta_rate_baseline']));
	$fta_rate_recent = mysql_real_escape_string(htmlentities($_POST['fta_rate_recent']));
	$juvenile_crime_baseline = mysql_real_escape_string(htmlentities($_POST['juvenile_crime_baseline']));
	$juvenile_crime_recent = mysql_real_escape_string(htmlentities($_POST['juvenile_crime_recent']));
	$re_arrest_baseline = mysql_real_escape_string(htmlentities($_POST['re_arrest_baseline']));
	$re_arrest_recent = mysql_real_escape_string(htmlentities($_POST['re_arrest_recent']));
	$fta_indicator = mysql_real_escape_string(htmlentities($_POST['fta_indicator']));
	$re_arrest_indicator = mysql_real_escape_string(htmlentities($_POST['re_arrest_indicator']));
	$juvenile_crime_indicator = mysql_real_escape_string(htmlentities($_POST['juvenile_crime_indicator']));
	$yoc_in_adp_baseline = mysql_real_escape_string(htmlentities($_POST['yoc_in_adp_baseline']));
	$yoc_in_adp_recent = mysql_real_escape_string(htmlentities($_POST['yoc_in_adp_recent']));
	$yoc_state_commitments_baseline = mysql_real_escape_string(htmlentities($_POST['yoc_state_commitments_baseline']));
	$yoc_state_commitments_recent = mysql_real_escape_string(htmlentities($_POST['yoc_state_commitments_recent']));
	$yoc_admitted_baseline = mysql_real_escape_string(htmlentities($_POST['yoc_admitted_baseline']));
	$yoc_admitted_recent = mysql_real_escape_string(htmlentities($_POST['yoc_admitted_recent']));
	$alos_of_yoc_baseline = mysql_real_escape_string(htmlentities($_POST['alos_of_yoc_baseline']));
	$alos_of_yoc_recent = mysql_real_escape_string(htmlentities($_POST['alos_of_yoc_recent']));
	
    // Find the ID of the current report 
	//$result = mysql_query("SELECT report_ID FROM casey_reports ORDER BY report_ID DESC LIMIT 1;", $conn);
	//$data = mysql_fetch_assoc($result);
	//$current_report_ID = $data['report_ID'];
	
	$sql = "UPDATE casey_reports SET" .  
	" total_detention_capacity = " . $total_detention_capacity .  
	", jdai_username = '" . $jdai_username .  
	"', team_leader_ID = '" . $team_leader_ID .
	"', baseline_start = '" . $baseline_start_year . "-" . $baseline_start_month . "-" . $baseline_start_day . 
	"', baseline_finish = '" . $baseline_finish_year . "-" . $baseline_finish_month . "-" . $baseline_finish_day . 
	"', recent_start = '" . $recent_start_year . "-" . $recent_start_month . "-" . $recent_start_day .
	"', recent_finish = '" . $recent_finish_year . "-" . $recent_finish_month . "-" . $recent_finish_day . 
	"', adp_baseline = " . $adp_baseline .
	", adp_recent = " . $adp_recent .
	", annual_admission_baseline = " . $annual_admission_baseline .
	", annual_admission_recent = " . $annual_admission_recent .
	", alos_baseline = " . $alos_baseline .
	", alos_recent = " . $alos_recent .
	", state_commitment_baseline = " . $state_commitment_baseline .
	", state_commitment_recent = " . $state_commitment_recent .
	", fta_rate_baseline = " . $fta_rate_baseline .
	", fta_rate_recent = " . $fta_rate_recent .
	", juvenile_crime_baseline = " . $juvenile_crime_baseline .
	", juvenile_crime_recent = " . $juvenile_crime_recent .
	", re_arrest_baseline = " . $re_arrest_baseline .
	", re_arrest_recent = " . $re_arrest_recent .
	", fta_indicator = '" . $fta_indicator .
	"', re_arrest_indicator = '" . $re_arrest_indicator .
	"', juvenile_crime_indicator = '" . $juvenile_crime_indicator .
	"', yoc_in_adp_baseline = " . $yoc_in_adp_baseline .
	", yoc_in_adp_recent = " . $yoc_in_adp_recent .
	", yoc_state_commitments_baseline = " . $yoc_state_commitments_baseline .
	", yoc_state_commitments_recent = " . $yoc_state_commitments_recent .
	", yoc_admitted_baseline = " . $yoc_admitted_baseline .
	", yoc_admitted_recent = " . $yoc_admitted_recent .
	", alos_of_yoc_baseline = " . $alos_of_yoc_baseline .
	", alos_of_yoc_recent = " . $alos_of_yoc_recent .
	" WHERE report_ID = '". $current_report_ID . 
	"';";
	
	$update = mysql_query($sql, $conn);
		if ($update === true){
		echo 'Database has been updated.' . $sql;
	} else if ($update === false) {
		echo 'There was an error updating your settings. ' . $sql;
		}
	} // End button query if	


















?>
