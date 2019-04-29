<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$current_report_ID = mysql_real_escape_string(htmlentities($_POST['current_report_ID']));
$sql = "SELECT * FROM casey_leverage";
// $sql = "SELECT * FROM casey_leverage WHERE report_ID = '" . $current_report_ID . "'";
$leverage = array();
$getData = mysql_query($sql);

while($row = mysql_fetch_array($getData)) {
$leverage[] = array(
			'leverage_ID'=>trim($row['leverage_ID']), 
			'report_ID'=>trim($row['report_ID']),
			'project_description'=>trim($row['project_description']),
			'amount'=>trim($row['amount']),
			'funding_type'=>trim($row['funding_type']));
} // End while

if($leverage)
echo json_encode($leverage);

?>
