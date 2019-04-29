<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$reforms = array();
$getData = mysql_query("SELECT * FROM casey_reforms");

while($row = mysql_fetch_array($getData)) {
$reforms[] = array(
			'reform_ID'=>trim($row['reform_ID']), 
			'report_ID'=>trim($row['report_ID']),
			'governance_structure'=>trim($row['governance_structure']),
			'work_plan'=>trim($row['work_plan']),
			'purpose_of_detention'=>trim($row['purpose_of_detention']),
			'red_authority'=>trim($row['red_authority']),
			'utilization_study'=>trim($row['utilization_study']),
			'comprehensive_detention_population_reports'=>trim($row['comprehensive_detention_population_reports']),
			'comprehensive_rai_reports'=>trim($row['comprehensive_rai_reports']),
			'comprehensive_atd_reports'=>trim($row['comprehensive_atd_reports']),
			'field_criteria_for_police'=>trim($row['field_criteria_for_police']),
			'detention_screening_tool'=>trim($row['detention_screening_tool']),
			'screening_24_7'=>trim($row['screening_24_7']),
			'home_detention'=>trim($row['home_detention']),
			'day_evening_reporting'=>trim($row['day_evening_reporting']),
			'shelter_foster_care_beds'=>trim($row['shelter_foster_care_beds']),
			'atd_placement_coordination'=>trim($row['atd_placement_coordination']),
			'weekly_detention_review'=>trim($row['weekly_detention_review']),
			'revised_speedy_trail_rules'=>trim($row['revised_speedy_trail_rules']),
			'targeting_stuck_cases'=>trim($row['targeting_stuck_cases']),
			'court_notification_system'=>trim($row['court_notification_system']),
			'sanctions_incentives_grid'=>trim($row['sanctions_incentives_grid']),
			'differential_warrant_policy'=>trim($row['differential_warrant_policy']),
			'placement_expediting'=>trim($row['placement_expediting']),
			'formal_mandate'=>trim($row['formal_mandate']),
			'community_engagement'=>trim($row['community_engagement']),
			'disaggregated_data'=>trim($row['disaggregated_data']),
			'special_detention_case_reforms'=>trim($row['special_detention_case_reforms']),
			'jdai_facility_standards'=>trim($row['jdai_facility_standards']),
			'self_assessment_inspection'=>trim($row['self_assessment_inspection']),
			'expeditor'=>trim($row['expeditor']),
			'corrections_plan'=>trim($row['corrections_plan']),
			'rating'=>trim($row['rating']));
} // End while

if($reforms)
echo json_encode($reforms);

?>
















