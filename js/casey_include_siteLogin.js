// JavaScript Document

var website_header_variable = 'http://jdaiannualreports.com/'; // Must change when moved to the new server
var selected_year = localStorage.selected_year; 
var current_year = 2014;
var allUserSitesID = new Array();
var allUserPasswords = new Array();
var allUsers = new Array();
var allUserTeamLeaders = new Array();

$(document).ready(function(){
	//alert("Page works");
	
	// Get Users from the casey_users table
	$.post('php/get_users.php', function(data) {
		  var pushedData = jQuery.parseJSON(data);
		  var userDropDown = '<select id="user_list" name="selectedUser" class="span4">';
		  // Get all the media info from the database
		  $.each(pushedData, function(i, serverData) { 
			  allUserSitesID[i] = serverData.sitesID;
			  allUserPasswords[i] = serverData.password;
			  allUsers[i] = serverData.user;
			  allUserTeamLeaders[i] = serverData.teamLeader;
			  userDropDown += '<option>' + allUserSitesID[i] + '</option>';
			});	
			userDropDown += '</select>';
			$('#show_user_drop_down_list').html(userDropDown);
	}); // End Post	 

	
	// Site Login Button
	$('#site_login_page_button').click(function() {
		// alert('Form submitted!');
		var button_name = "site_login_page_button";
		var site_name_login = $('#user_list').val();
		var selected_user_password = $('#user_password').val();
		var password_found = false;
		
		for (var i = 0; i < allUserSitesID.length; i++)
		  {	  
		   if ((allUserSitesID[i] == site_name_login) && (allUserPasswords[i] == selected_user_password)) {
		   // alert('Password match found');
		   localStorage.jdai_site_name = site_name_login;
		   localStorage.selected_year = current_year;
		   window.location.pathname = 'form0.html'; // 'casey/form0.html';
		   password_found = true;		   
		   } // End if	
		   		
		} // End for loop
		if (!password_found)
		alert("Bad Login. Try again.");
	});

	// Code just in case the user presses the enter key and not the submit button
	$("form input").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $('button[type=button] .default').click();
				var button_name = "site_login_page_button";
				var site_name_login = $('#user_list').val();
				var selected_user_password = $('#user_password').val();
				var password_found = false;
				
				for (var i = 0; i < allUserSitesID.length; i++)
				  {	  
				   if ((allUserSitesID[i] == site_name_login) && (allUserPasswords[i] == selected_user_password)) {
				   alert('Password match found');
				   localStorage.jdai_site_name = site_name_login;
				   localStorage.selected_year = current_year;
				   window.location.pathname = 'form0.html'; // 'casey/form0.html';
				   password_found = true;		   
				   } // End if	
						
				} // End for loop
				if (!password_found)
				alert("Bad Login. Try again.");
					return false;
				} else {
					return true;
				}
    });

  })