  <?php
	// This file contains the connection information to the database
	// $conn = @mysql_connect("vmentor.db.7745288.hostedresource.com", "vmentor", "Morehouse1") or die( "Err:Conn" );
	$conn = @mysql_connect("vmentor.db.7744994.hostedresource.com", "vmentor", "Morehouse1!") or die( "Err:Conn" );
   	$rs = @mysql_select_db("vmentor", $conn) or die( "Err:Conn" ); 
  ?>