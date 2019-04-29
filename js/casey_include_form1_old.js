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
if (selected_year == null) {
localStorage.selected_year = current_year;
}

function seeReport(x,y)
	{
	  localStorage.current_report_ID = x;
	  localStorage.jdai_site_name = y;
	  window.location.href = website_header_variable + 'admin2.php';
	}

$(document).ready(function(){
	
	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
	
	// Keep the selected tab highlighted
	if (selected_year == '2014')
	$('#myTab li:eq(0) a').tab('show');
	if (selected_year == '2013')
	$('#myTab li:eq(1) a').tab('show');
	if (selected_year == '2012')
	$('#myTab li:eq(2) a').tab('show');
	if (selected_year == '2011')
	$('#myTab li:eq(3) a').tab('show');
	
	// Select a report from the list to view more details
	$('#view_selected_report_button').click(function() {
	localStorage.current_report_ID = $('#selected_report_to_view').val();
	localStorage.jdai_site_name = $('#selected_report_to_view').find(":selected").text();
	window.location.href = website_header_variable + 'admin2.php';
	});
	
	// Get all report info
	$.post('php/get_reports_admin1.php', function(data) {
			var pushedData = jQuery.parseJSON(data);
			currentYearReportsTable = '<table class="table table-hover" id="currentYearReportsTable">';
			currentYearReportsTable += '<colgroup><col span="1" style="width: 6%;"><col span="1" style="width: 12%;">';
			currentYearReportsTable += '<col span="1" style="width: 30%;"><col span="1" style="width: 12%;">';
			currentYearReportsTable += '<col span="1" style="width: 30%;"><col span="1" style="width: 10%;"></colgroup>';
			currentYearReportsTable += "<tr><th>Year</th><th>Status</th><th>Site</th><th>Team Leader</th>";
			currentYearReportsTable += "<th>Submitter</th><th> </th></tr><tbody>";
			$.each(pushedData, function(i, serverData) { 
					
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
				currentReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.team_leader_ID + '</td><td>' + serverData.jdai_username + '</td>';
				currentReportsTable += '<td> </td></tr>';
							
				// create an array to hold report locations for sorting
				var sitesArray = [];
				var thisHereSiteName = serverData.site_name
				
				// show every reports for the current year
				if ((serverData.current_year == selected_year) && (localStorage.getItem("team_leader_name") === "Administration")) {
				currentYearReportsTable += '<tr class="' + current_record_status + '" id="' + serverData.report_ID + '">';
				currentYearReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
				currentYearReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.team_leader_ID + '</td><td>' + serverData.jdai_username + '</td>';
				currentYearReportsTable += '<td> <input class="btn btn-primary" type="button" value="View Report" onclick="var x = ';
				currentYearReportsTable +=  "'" + serverData.report_ID + "'";
				currentYearReportsTable += '; var y = ';
				currentYearReportsTable +=  "'" + serverData.site_name + "'";
				currentYearReportsTable += '; seeReport(x,y);">';
				currentYearReportsTable += '</td></tr>';
				$('#selected_report_to_view').append('<option value="' + serverData.report_ID + '">'+ serverData.site_name +'</option>');
				}
				
				// show reports for the current year for a selected Team Leader
				if ((serverData.current_year == selected_year) && (localStorage.getItem("team_leader_name") == serverData.team_leader_ID)) {
				currentYearReportsTable += '<tr class="' + current_record_status + '" id="' + serverData.report_ID + '">';
				currentYearReportsTable += '<td>' + serverData.current_year + '</td><td>' + serverData.current_status + '</td>';
				currentYearReportsTable += '<td>' + serverData.site_name + '</td><td>' + serverData.team_leader_ID + '</td><td>' + serverData.jdai_username + '</td>';
				currentYearReportsTable += '<td> <input class="btn btn-primary" type="button" value="View Report" onclick="var x = ';
				currentYearReportsTable +=  "'" + serverData.report_ID + "'";
				currentYearReportsTable += '; var y = ';
				currentYearReportsTable +=  "'" + serverData.site_name + "'";
				currentYearReportsTable += '; seeReport(x,y);">';
				currentYearReportsTable += '</td></tr>';
				$('#selected_report_to_view').append('<option value="' + serverData.report_ID + '">'+ serverData.site_name +'</option>');
				}
				
				if ((serverData.current_year == current_year) && (serverData.site_name === site_name))
				{
				report_already_created = true;
				current_report_ID = serverData.report_ID;
				localStorage.current_report_ID = serverData.report_ID;
				} // End if
			});
			
			currentYearReportsTable += "</tbody></table>";
			$('#show_currentYearReportsTable1').html(currentYearReportsTable);
			$('#show_currentYearReportsTable2').html(currentYearReportsTable);
			$('#show_currentYearReportsTable3').html(currentYearReportsTable);
			$('#show_currentYearReportsTable4').html(currentYearReportsTable);
			$('#show_currentYearReportsTable5').html(currentYearReportsTable);
				
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