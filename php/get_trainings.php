<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$trainings = array();
$getData = mysql_query("SELECT * FROM casey_trainings");

while($row = mysql_fetch_array($getData)) {
$trainings[] = array(
			'training_ID'=>trim($row['training_ID']), 
			'report_ID'=>trim($row['report_ID']),
			'training_name'=>trim($row['training_name']),
			'number_trained'=>trim($row['number_trained']),
			'jdai_focus_area'=>trim($row['jdai_focus_area']),
			'training_date'=>trim($row['training_date']));
} // End while

if($trainings)
echo json_encode($trainings);

?>
