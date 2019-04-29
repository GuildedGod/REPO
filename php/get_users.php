<?php

include("../db/dbconnect.php"); // List first; Contains the connection information to the database

$users = array();
$getData = mysql_query("SELECT * FROM casey_users ORDER BY sitesID");

while($row = mysql_fetch_array($getData)) {
$users[] = array(
			'sitesID'=>trim($row['sitesID']), 
			'password'=>trim($row['password']),
			'user'=>trim($row['user']),
			'teamLeader'=>trim($row['teamLeader']),
			'status'=>trim($row['status']));
			
} // End while

if($users)
echo json_encode($users);

?>
