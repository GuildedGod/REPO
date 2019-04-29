// JavaScript Document


//var website_header_variable = 'http://jdaiannualreports.com/'; // Must change when moved to the new server

// http://morehousecs.com/jassiem/casey_2/

var website_header_variable = 'http://morehousecs.com/jassiem/casey_2/';

var selected_year = localStorage.selected_year; 
var current_year = 2014;

$(document).ready(function(){
	//alert("Page works");
	//alert("boo");
	// Store all team leaders and assign them passwords...
	var all_team_leaders = new Array();
	var all_team_leaders_passwords = new Array();
	all_team_leaders[1] = "Cathy Jo Waltz"; all_team_leaders_passwords[1] = "5000";
	all_team_leaders[2] = "Dana Shoenberg"; all_team_leaders_passwords[2] = "5001";
	all_team_leaders[3] = "Danielle Lipow"; all_team_leaders_passwords[3] = "5002";
	all_team_leaders[4] = "Doug Mitchell"; all_team_leaders_passwords[4] = "5003";
	all_team_leaders[5] = "Frank Orlando"; all_team_leaders_passwords[5] = "5004";
	all_team_leaders[6] = "James Bell"; all_team_leaders_passwords[6] = "5005";
	all_team_leaders[7] = "Jim Payne"; all_team_leaders_passwords[7] = "5006";
	all_team_leaders[8] = "Jeff Bradley"; all_team_leaders_passwords[8] = "5007";
	all_team_leaders[9] = "Jim Payne"; all_team_leaders_passwords[9] = "5008";
	all_team_leaders[10] = "John Rhoads"; all_team_leaders_passwords[10] = "5009";
	all_team_leaders[11] = "Judy Cox"; all_team_leaders_passwords[11] = "5010";
	all_team_leaders[12] = "Lisa Macaluso"; all_team_leaders_passwords[12] = "5011";
	all_team_leaders[13] = "Mark Soler"; all_team_leaders_passwords[13] = "5012";
	all_team_leaders[14] = "Meghan Guevara"; all_team_leaders_passwords[14] = "5013";
	all_team_leaders[15] = "Michael Finley"; all_team_leaders_passwords[15] = "5014";
	all_team_leaders[16] = "Miquel Lewis"; all_team_leaders_passwords[16] = "5015";
	all_team_leaders[17] = "Orlando Martinez"; all_team_leaders_passwords[17] = "5016";
	all_team_leaders[18] = "Rand Young"; all_team_leaders_passwords[18] = "5017";
	all_team_leaders[19] = "Rick Jensen"; all_team_leaders_passwords[19] = "5018";
	all_team_leaders[20] = "Stephanie Vetter"; all_team_leaders_passwords[20] = "5019";
	all_team_leaders[21] = "Steve Teske"; all_team_leaders_passwords[21] = "5020";
	all_team_leaders[22] = "Tommy Jewel"; all_team_leaders_passwords[22] = "5021";
	all_team_leaders[23] = "William P. Siffermann"; all_team_leaders_passwords[23] = "5022";
	all_team_leaders[24] = "William Pfalzgraf"; all_team_leaders_passwords[24] = "5023"; 
	all_team_leaders[25] = "Administration"; all_team_leaders_passwords[25] = "5024";    // Administration Password
	all_team_leaders[26] = "Beth Oprisch"; all_team_leaders_passwords[26] = "5025";
	all_team_leaders[28] = "Keri Nash"; all_team_leaders_passwords[28] = "5027";
	all_team_leaders[27] = "Laura Ridolfi"; all_team_leaders_passwords[27] = "5026";
	all_team_leaders[29] = "Tzach Asher"; all_team_leaders_passwords[29] = "5028";
	all_team_leaders[30] = "Denny Atherton"; all_team_leaders_passwords[30] = "5030";
	all_team_leaders[31] = "Gail D. Mumford"; all_team_leaders_passwords[31] = "5032";
	all_team_leaders[32] = "Gina Peralta"; all_team_leaders_passwords[32] = "5033";
	all_team_leaders[33] = "Jason Szanyi"; all_team_leaders_passwords[33] = "5034";
	all_team_leaders[34] = "Kelly Dedel"; all_team_leaders_passwords[34] = "5035"; 
	all_team_leaders[35] = "Marcia Rincon-Gallardo"; all_team_leaders_passwords[35] = "5036";
	all_team_leaders[36] = "Raquel Mariscal"; all_team_leaders_passwords[36] = "5037";
	all_team_leaders[37] = "Scott MacDonald"; all_team_leaders_passwords[37] = "5039";
	all_team_leaders[38] = "Saleem Shakir"; all_team_leaders_passwords[38] = "5038";
	all_team_leaders[39] = "Tiana Davis"; all_team_leaders_passwords[39] = "5040";
	all_team_leaders[40] = "Earl Ross"; all_team_leaders_passwords[40] = "5031";
	all_team_leaders[41] = "Manager"; all_team_leaders_passwords[41] = "5041";
	// November 2014 Credentials
	all_team_leaders[42] = "Bridgette Butler"; all_team_leaders_passwords[42] = "5042";
	all_team_leaders[43] = "Jim Thorne"; all_team_leaders_passwords[43] = "5043";
	all_team_leaders[44] = "Melissa Spooner"; all_team_leaders_passwords[44] = "5044";
	all_team_leaders[45] = "Bill Thorne"; all_team_leaders_passwords[45] = "5045";
	all_team_leaders[46] = "Regina Lurry"; all_team_leaders_passwords[46] = "5046";
	
	
	
	

	// TA TL Login Button
	$('#ta_tl_login_page_button').click(function () {
          /* 
		var button_name = "ta_tl_login_page_button";
		var site_name_login = $('#team_leader_ID3').val();
		var selected_user_password = $('#user_password').val();
		var password_found = false;
		for (var i = 1; i <= all_team_leaders.length; i++)
		  {	  
		   if ((all_team_leaders[i] == site_name_login) && (all_team_leaders_passwords[i] == selected_user_password)) {
		   localStorage.team_leader_name = site_name_login;
		   localStorage.selected_year = current_year;
		 //  window.location.pathname = 'admin1.php';

		   window.location.pathname = '/jassiem/casey_2/admin1.php';
		   // alert("Bingo Twice");
		   password_found = true;
		   } // End if
		
		} // End for loop
		if (!password_found)
		alert("Bad Login. Try again.");
		// location.reload(); */
	});

	// Code just in case the user presses the enter key and not the submit button
	$("form input").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $('button[type=button] .default').click();
				
				// Start of regular functional code for button press
				var button_name = "ta_tl_login_page_button";
				var site_name_login = $('#team_leader_ID3').val();
				var selected_user_password = $('#user_password').val();
				var password_found = false;
				for (var i = 1; i <= all_team_leaders.length; i++)
				  {	  
				   if ((all_team_leaders[i] == site_name_login) && (all_team_leaders_passwords[i] == selected_user_password)) {
				   localStorage.team_leader_name = site_name_login;
				   localStorage.selected_year = current_year;
				   window.location.pathname = '/jassiem/casey_2/admin1.php'; // change 
				        // alert("Bingo Twice");
				  // alert("pwd found");
				   password_found = true;
				   } // End if
				
				} // End for loop
				if (!password_found)
				alert("Bad Login. Try again.");
				// location.reload(); 
				
		};
				
    }); // End of enter press function

	$("#teamLeadLogin").submit(function () {

	     var button_name = "ta_tl_login_page_button";
	     var site_name_login = $('#team_leader_ID3').val();
	     var selected_user_password = $('#user_password').val();
	     var password_found = false;
	     for (var i = 1; i <= all_team_leaders.length; i++) {
	          if ((all_team_leaders[i] == site_name_login) && (all_team_leaders_passwords[i] == selected_user_password)) {
	               localStorage.team_leader_name = site_name_login;
	               localStorage.selected_year = current_year;
	               //  window.location.pathname = 'admin1.php';

	               window.location.pathname = '/jassiem/casey_2/admin1.php';
	               // alert("Bingo Twice");
	               password_found = true;
	          } // End if

	     } // End for loop
	     if (!password_found)
	     {


	          alert("Bad Login. Try again.");
 
	          return false;
	     }
	          

	    
	     // location.reload(); 
	});

  }) // End of document ready function