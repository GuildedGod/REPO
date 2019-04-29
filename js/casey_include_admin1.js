// JavaScript Document

var website_header_variable = 'http://jdaiannualreports.com/'; // Must change when moved to the new server
var selected_year = localStorage.selected_year; 
var allReportYears = new Array();
var allReportSiteNames = new Array();
var currentReportsTable = "";
var currentYearReportsTable = "";
var current_record_status = '';
var jdai_username;
var site_name = localStorage.jdai_site_name;
var current_year = 2014; // current_date.getFullYear();

$(document).ready(function(){
	
	// Select a report from the list to view more details
	$('#view_selected_report_button').click(function() {
	localStorage.current_report_ID = $('#selected_report_to_view').val();
	localStorage.jdai_site_name = $('#selected_report_to_view').find(":selected").text();
	window.location.href = website_header_variable + 'admin2.php';
	});
	
	// Get all report info
	$.post('php/get_reports_admin1.php', function(data) {
			var pushedData = jQuery.parseJSON(data);
			currentReportsTable = '<table class="table table-hover">';
			currentReportsTable += '<colgroup><col span="1" style="width: 6%;"><col span="1" style="width: 12%;">';
			currentReportsTable += '<col span="1" style="width: 25%;"><col span="1" style="width: 12%;">';
			currentReportsTable += '<col span="1" style="width: 25%;"><col span="1" style="width: 20%;"></colgroup>';
			currentReportsTable += "<tr><th>Year</th><th>Status</th><th>Site</th><th>Report Created</th>>";
			currentReportsTable += "<th>Submitter</th><th> </th></tr><tbody>";
			currentYearReportsTable = '<table class="table table-hover" id="currentYearReportsTable">';
			currentYearReportsTable += '<colgroup><col span="1" style="width: 6%;"><col span="1" style="width: 12%;">';
			currentYearReportsTable += '<col span="1" style="width: 25%;"><col span="1" style="width: 12%;">';
			currentYearReportsTable += '<col span="1" style="width: 25%;"><col span="1" style="width: 20%;"></colgroup>';
			currentYearReportsTable += "<tr><th>Year</th><th>Status</th><th>Site</th><th>Report Created</th>>";
			currentYearReportsTable += "<th>Submitter</th><th> </th></tr><tbody>";
			$.each(pushedData, function(i, serverData) { 
				allReportYears[i] = serverData.current_year;
				allReportSiteNames[i] = serverData.site_name;
				
				// assign table row color
				if (serverData.current_status == "In-Progress")
				current_record_status = "warning";
				if (serverData.current_status == "Completed")
				current_record_status = "success";
				if (serverData.current_status == "Submitted")
				current_record_status = "error";
				if (serverData.current_status == "Final")
				current_record_status = "info";
				
				currentReportsTable += '<tr class="' + current_record_status + '">';
				currentReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
				currentReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.recent_finish + '</td><td>' + serverData.jdai_username + '</td>';
				currentReportsTable += '<td> </td></tr>';
							
				// create an array to hold report locations for sorting
				var sitesArray = [];
				var thisHereSiteName = serverData.site_name
				
				// show every reports for the current year
				if ((allReportYears[i] == selected_year) && (localStorage.getItem("team_leader_name") === "Administration")) {
				currentYearReportsTable += '<tr class="' + current_record_status + '" id="' + serverData.report_ID + '">';
				currentYearReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
				currentYearReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.recent_finish + '</td><td>' + serverData.jdai_username + '</td>';
				currentYearReportsTable += '<td> <input class="btn btn-primary" type="button" id="view_this_report" value="View Report">';
				currentYearReportsTable += '</td></tr>';
				$('#selected_report_to_view').append('<option value="' + serverData.report_ID + '">'+ serverData.site_name +'</option>');
				}
				
				// show reports for the current year for a selected Team Leader
				if ((allReportYears[i] == current_year) && (localStorage.getItem("team_leader_name") == serverData.team_leader_ID)) {
				currentYearReportsTable += '<tr class="' + current_record_status + '" id="' + serverData.report_ID + '">';
				currentYearReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
				currentYearReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.recent_finish + '</td><td>' + serverData.jdai_username + '</td>';
				currentYearReportsTable += '<td> </td></tr>';
				sitesArray.push('<option value="' + serverData.report_ID + '">'+ serverData.site_name +'</option>');
				sitesArray.sort();
				$('#selected_report_to_view').text(sitesArray.toString());
				}
				
				// show reports for the current year for a selected SECOND Team Leader
				if ((allReportYears[i] == current_year) && (localStorage.getItem("team_leader_name") == serverData.team_leader_ID2)) {
				currentYearReportsTable += '<tr class="' + current_record_status + '" id="' + serverData.report_ID + '">';
				currentYearReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
				currentYearReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.recent_finish + '</td><td>' + serverData.jdai_username + '</td>';
				currentYearReportsTable += '<td> </td></tr>';
				sitesArray.push('<option value="' + serverData.report_ID + '">'+ serverData.site_name +'</option>');
				sitesArray.sort();
				$('#selected_report_to_view').text(sitesArray.toString());
				}
				
				if ((allReportYears[i] == current_year) && (allReportSiteNames[i] === site_name))
				{
				report_already_created = true;
				current_report_ID = serverData.report_ID;
				localStorage.current_report_ID = serverData.report_ID;
				} // End if
			});
			
			currentReportsTable += "</table>";
			currentYearReportsTable += "</table>";
			$('#show_currentReportsTable').html(currentReportsTable);
			$('#show_currentYearReportsTable').html(currentYearReportsTable);
				
	}); // End Post

	// Tab button actions for year selection
	$('#select_2014').click(function() {
		localStorage.selected_year = 2014;
		location.reload(); 
	});
	
	$('#select_2013').click(function() {
		localStorage.selected_year = 2013; 
		location.reload();
	});
	
	$('#select_2012').click(function() {
		localStorage.selected_year = 2012;
		location.reload(); 
	});
	
	$('#select_2011').click(function() {
		localStorage.selected_year = 2011;
		location.reload(); 
	});

  })