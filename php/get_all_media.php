<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$all_media = array();
$getData = mysql_query("SELECT media_ID, site_name, media_name, media_date, media_type FROM casey_media JOIN casey_reports ON casey_media.report_ID = casey_reports.report_ID ORDER BY site_name");
//$sql = "SELECT casey_leverage.leverage_ID, site_name, casey_leverage.project_description, casey_leverage.amount, casey_leverage.funding_type  FROM casey_leverage JOIN casey_reports ON casey_leverage.report_ID = casey_reports.report_ID";
while($row = mysql_fetch_array($getData)) {
$all_media[] = array(
			'media_ID'=>trim($row['media_ID']), 
			'site_name'=>trim($row['site_name']),
			'media_name'=>trim($row['media_name']),
			'media_date'=>trim($row['media_date']),
			'media_type'=>trim($row['media_type']));
} // End while

if($all_media)
echo json_encode($all_media);

?>
