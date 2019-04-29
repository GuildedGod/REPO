<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
$sql = "SELECT casey_leverage.leverage_ID, site_name, casey_leverage.project_description, casey_leverage.amount, casey_leverage.funding_type, current_year  FROM casey_leverage JOIN casey_reports ON casey_leverage.report_ID = casey_reports.report_ID  ORDER BY site_name, current_year";
// $sql = "SELECT * FROM casey_leverage WHERE report_ID = '" . $current_report_ID . "'";
$all_leverage = array();
$getData = mysql_query($sql);

while($row = mysql_fetch_array($getData)) {
$all_leverage[] = array(
			'leverage_ID'=>trim($row['leverage_ID']), 
			'site_name'=>trim($row['site_name']),
			'project_description'=>trim($row['project_description']),
			'amount'=>trim($row['amount']),
			'funding_type'=>trim($row['funding_type']),
			'current_year'=>trim($row['current_year']));
} // End while

if($all_leverage)
echo json_encode($all_leverage);

?>
