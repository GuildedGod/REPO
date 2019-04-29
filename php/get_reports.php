<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$reports = array();
$getData = mysql_query("SELECT * FROM casey_reports ORDER BY site_name");

while($row = mysql_fetch_array($getData)) {
$reports[] = array(
			'report_ID'=>trim($row['report_ID']), 
			'site_name'=>trim($row['site_name']),
			'total_detention_capacity'=>trim($row['total_detention_capacity']),
			'jdai_username'=>trim($row['jdai_username']),
			'team_leader_ID'=>trim($row['team_leader_ID']),
			'baseline_start'=>trim($row['baseline_start']),
			'baseline_finish'=>trim($row['baseline_finish']),
			'recent_start'=>trim($row['recent_start']),
			'recent_finish'=>trim($row['recent_finish']),
			'adp_baseline'=>trim($row['adp_baseline']),
			'adp_recent'=>trim($row['adp_recent']),
			'annual_admission_baseline'=>trim($row['annual_admission_baseline']),
			'annual_admission_recent'=>trim($row['annual_admission_recent']),
			'alos_baseline'=>trim($row['alos_baseline']),
			'alos_recent'=>trim($row['alos_recent']),
			'state_commitment_baseline'=>trim($row['state_commitment_baseline']),
			'state_commitment_recent'=>trim($row['state_commitment_recent']),
			'fta_rate_baseline'=>trim($row['fta_rate_baseline']),
			'fta_rate_recent'=>trim($row['fta_rate_recent']),
			'juvenile_crime_baseline'=>trim($row['juvenile_crime_baseline']),
			'juvenile_crime_recent'=>trim($row['juvenile_crime_recent']),
			'juvenile_crime_baseline'=>trim($row['juvenile_crime_baseline']),
			're_arrest_baseline'=>trim($row['re_arrest_baseline']),
			're_arrest_recent'=>trim($row['re_arrest_recent']),
			'fta_indicator'=>trim($row['fta_indicator']),
			're_arrest_indicator'=>trim($row['re_arrest_indicator']),
			'juvenile_crime_indicator'=>trim($row['juvenile_crime_indicator']),
			'yoc_in_adp_baseline'=>trim($row['yoc_in_adp_baseline']),
			'yoc_in_adp_recent'=>trim($row['yoc_in_adp_recent']),
			'yoc_state_commitments_baseline'=>trim($row['yoc_state_commitments_baseline']),
			'yoc_state_commitments_recent'=>trim($row['yoc_state_commitments_recent']),
			'yoc_admitted_baseline'=>trim($row['yoc_admitted_baseline']),
			'yoc_admitted_recent'=>trim($row['yoc_admitted_recent']),
			'alos_of_yoc_baseline'=>trim($row['alos_of_yoc_baseline']),
			'current_year'=>trim($row['current_year']),
			'current_status'=>trim($row['current_status']),
			'report_notes'=>trim($row['report_notes']),
			'usability_notes'=>trim($row['usability_notes']),
			'alos_of_yoc_recent'=>trim($row['alos_of_yoc_recent']));
			
} // End while

if($reports)
echo json_encode($reports);

?>
