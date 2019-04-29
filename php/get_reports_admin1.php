<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$reports = array();
$getData = mysql_query("SELECT * FROM casey_reports ORDER BY site_name");

while($row = mysql_fetch_array($getData)) {
$reports[] = array(
			'report_ID'=>trim($row['report_ID']), 
			'site_name'=>trim($row['site_name']),
			'jdai_username'=>trim($row['jdai_username']),
			'team_leader_ID'=>trim($row['team_leader_ID']),
			'team_leader_ID2'=>trim($row['team_leader_ID2']),
			'current_year'=>trim($row['current_year']),
			'current_status'=>trim($row['current_status']));
			
} // End while

if($reports)
echo json_encode($reports);

?>
