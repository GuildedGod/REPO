<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$all_trainings = array();
$getData = mysql_query("SELECT site_name, training_name, number_trained, jdai_focus_area, training_date FROM casey_trainings JOIN casey_reports ON casey_trainings.report_ID = casey_reports.report_ID ORDER BY site_name");

while($row = mysql_fetch_array($getData)) {
$all_trainings[] = array(
			'training_ID'=>trim($row['training_ID']), 
			'site_name'=>trim($row['site_name']),
			'training_name'=>trim($row['training_name']),
			'number_trained'=>trim($row['number_trained']),
			'jdai_focus_area'=>trim($row['jdai_focus_area']),
			'training_date'=>trim($row['training_date']));
} // End while

if($all_trainings)
echo json_encode($all_trainings);

?>
