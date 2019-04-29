<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$media = array();
$getData = mysql_query("SELECT * FROM casey_media");

while($row = mysql_fetch_array($getData)) {
$media[] = array(
			'media_ID'=>trim($row['media_ID']), 
			'report_ID'=>trim($row['report_ID']),
			'media_name'=>trim($row['media_name']),
			'media_date'=>trim($row['media_date']),
			'media_type'=>trim($row['media_type']));
} // End while

if($media)
echo json_encode($media);

?>
