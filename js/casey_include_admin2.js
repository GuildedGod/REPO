// JavaScript Document

var website_header_variable = 'http://jdaiannualreports.com/'; // Must change when moved to the new server
var selected_year = localStorage.selected_year; 
var current_year = 2014; // current_date.getFullYear();
if (selected_year != ('2014' || '2013' || '2012' || '2011' || '2010'))
 localStorage.selected_year = current_year;
var allReportYears = new Array();
var allReportSiteNames = new Array();
var currentReportsTable = "";
var currentYearReportsTable = "";
var current_record_status = '';
var jdai_username;
var site_name = localStorage.jdai_site_name;
var current_report_ID = localStorage.current_report_ID;


$(document).ready(function(){
	
	// Return to the administrative home page button
	$('#return_to_dashboard_home_button').click(function() {
	window.location.href = website_header_variable + 'admin1.php'; 
	});
	
	// Edit the selelcted report button
	$('#edit_the_report_button').click(function() {
	window.location.href = website_header_variable + 'form1.html'; 
	});
	
	// Label report as submitted to JDAI button
	$('#submit_form_to_jdai_button').click(function() {
	var button_name = "submit_form_to_jdai_button";
	$.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function(data) {
	alert("Report has been submitted to JDAI");
	});
	});
	
	// Button to label the report as in progress
	$('#make_report_in_progress_button').click(function() {
		var button_name = "make_report_in_progress_button";
		$.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function(data) {
		alert("Report has been marked In-Progress");
		});
	});
	
	// Button to make the form final
	$('#make_form_final_button').click(function() {
		var button_name = "make_form_final_button";
		$.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function(data) {
		alert("Report has been marked as completed and is now final");
		});
	});
	
	// Only show buttons that make sense on the admin page
	if (localStorage.team_leader_name != 'Administration')
	{
	  $('#make_form_final_button').attr("disabled", true);
	}

  // Get all report info
  $.post('php/get_reports.php', function(data) {
		  var pushedData = jQuery.parseJSON(data);
		    console.log("pushed is type: " + typeof (pushedData));

		    console.log("pushed data: ");
       
		    console.dir(pushedData);
		    $.each(pushedData, function (i, serverData) {
			  
		     // Only show the data for the selected report
			  if (localStorage.current_report_ID == serverData.report_ID) 
			  {
			       console.log("check1");
				// Items for report view
				$('#baseline_start_date').text(serverData.baseline_start);
				$('#baseline_finish_date').text(serverData.baseline_finish);
				$('#recent_start_date').text(serverData.recent_start);
				$('#recent_finish_date').text(serverData.recent_finish);
				$('#site_name').text(serverData.site_name);
				$('#team_leader_ID').text(serverData.team_leader_ID); 
				$('#total_detention_capacity').text(serverData.total_detention_capacity);
				$('#jdai_username').text(serverData.jdai_username);
				$('#team_leader_ID').text(serverData.team_leader_ID);
				$('#baseline_start').text(serverData.baseline_start);
				$('#baseline_finish').text(serverData.baseline_finish);
				$('#recent_start').text(serverData.recent_start);
				$('#recent_finish').text(serverData.recent_finish);

                      // numbers (percentages calculated below)
				$('#adp_baseline').text(serverData.adp_baseline);
				$('#adp_recent').text(serverData.adp_recent);
				$('#annual_admission_baseline').text(serverData.annual_admission_baseline);
				$('#annual_admission_recent').text(serverData.annual_admission_recent);
				$('#alos_baseline').text(serverData.alos_baseline);
				$('#alos_recent').text(serverData.alos_recent);
				$('#state_commitment_baseline').text(serverData.state_commitment_baseline);
				$('#state_commitment_recent').text(serverData.state_commitment_recent);
				$('#fta_rate_baseline').text((serverData.fta_rate_baseline*100).toFixed(1));
				$('#fta_rate_recent').text((serverData.fta_rate_recent*100).toFixed(1));
				$('#juvenile_crime_baseline').text(serverData.juvenile_crime_baseline);
				$('#juvenile_crime_recent').text(serverData.juvenile_crime_recent);
				$('#re_arrest_baseline').text((serverData.re_arrest_baseline*100).toFixed(1));
				$('#re_arrest_recent').text((serverData.re_arrest_recent*100).toFixed(1));
				$('#fta_indicator2').text(serverData.fta_indicator);
				$('#re_arrest_indicator2').text(serverData.re_arrest_indicator);
				$('#juvenile_crime_indicator2').text(serverData.juvenile_crime_indicator);
				$('#yoc_in_adp_baseline').text(serverData.yoc_in_adp_baseline);
				$('#yoc_in_adp_recent').text(serverData.yoc_in_adp_recent);
				$('#yoc_state_commitments_baseline').text(serverData.yoc_state_commitments_baseline);
				$('#yoc_state_commitments_recent').text(serverData.yoc_state_commitments_recent);
				$('#yoc_admitted_baseline').text(serverData.yoc_admitted_baseline);
				$('#yoc_admitted_recent').text(serverData.yoc_admitted_recent);
				$('#alos_of_yoc_baseline').text(serverData.alos_of_yoc_baseline);
				$('#alos_of_yoc_recent').text(serverData.alos_of_yoc_recent);
				$('#usability_notes').text(serverData.usability_notes);
				$('#report_notes').text(serverData.report_notes);
						
		// Calculations
		
		// Annual Daily Population
		var adp_baseline_minus_recent = serverData.adp_recent - serverData.adp_baseline;
		$('#adp_change_number').text(adp_baseline_minus_recent.toFixed(1));
		var adp_baseline_minus_recent_percent = adp_baseline_minus_recent/serverData.adp_baseline*100;
		$('#adp_change_percent').text(adp_baseline_minus_recent_percent.toFixed(1));
		
		// Annual Admissions
		var annual_admission_baseline_minus_recent = serverData.annual_admission_recent - serverData.annual_admission_baseline;
		$('#annual_admissions_change_number').text(annual_admission_baseline_minus_recent.toFixed(1));
		var annual_admissions_change_percent = annual_admission_baseline_minus_recent/serverData.annual_admission_baseline*100;
		$('#annual_admissions_change_percent').text(annual_admissions_change_percent.toFixed(1));
		
		// ALOS
		var alos_baseline_minus_recent = serverData.alos_recent - serverData.alos_baseline;
		$('#alos_change_number').text(alos_baseline_minus_recent.toFixed(1));
		var alos_change_percent = alos_baseline_minus_recent/serverData.alos_baseline*100;
		$('#alos_change_percent').text(alos_change_percent.toFixed(1)); 
		
		// State Commitments
		var state_commitment_baseline_minus_recent = serverData.state_commitment_recent - serverData.state_commitment_baseline;
		$('#state_commitment_change_number').text(state_commitment_baseline_minus_recent.toFixed(1));
		var state_commitment_change_percent = state_commitment_baseline_minus_recent/serverData.state_commitment_baseline*100;
		$('#state_commitment_change_percent').text(state_commitment_change_percent.toFixed(1));
		
		// FTA Rate
		var fta_rate_baseline_minus_recent = (serverData.fta_rate_recent - serverData.fta_rate_baseline) * 100;
		$('#fta_rate_change_number').text(fta_rate_baseline_minus_recent.toFixed(1));
		
		// Re-Arrest
		var re_arrest_baseline_minus_recent = (serverData.re_arrest_recent - serverData.re_arrest_baseline) * 100;
		$('#re_arrest_rate_change').text(re_arrest_baseline_minus_recent.toFixed(1));
		
		// Juvenile Crime 
		var juvenile_crime_baseline_minus_recent = serverData.juvenile_crime_recent - serverData.juvenile_crime_baseline;
		$('#juvenile_crime_change_number').text(juvenile_crime_baseline_minus_recent.toFixed(1));
		var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent/serverData.juvenile_crime_baseline*100;
		$('#juvenile_crime_change_percent').text(juvenile_crime_change_percent.toFixed(1));
		
		// YOC in ADP
		var yoc_in_adp_baseline_minus_recent = serverData.yoc_in_adp_recent - serverData.yoc_in_adp_baseline;
		$('#yoc_in_adp_recent_change_number').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
		var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent/serverData.yoc_in_adp_baseline*100;
		$('#yoc_in_adp_recent_change_percent').text(yoc_in_adp_change_percent.toFixed(1));
		
	  // # of YOC State Commitments
	  var yoc_state_commitments_baseline_minus_recent = serverData.yoc_state_commitments_recent - serverData.yoc_state_commitments_baseline;
	  $('#yoc_committed_changes_number').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
	  var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent/serverData.yoc_state_commitments_baseline*100;
	  $('#yoc_committed_changes_percent').text(yoc_state_commitments_change_percent.toFixed(1));
	  
		// # of YOC Admitted
		var yoc_admitted_baseline_minus_recent = serverData.yoc_admitted_recent - serverData.yoc_admitted_baseline;
		$('#yoc_admitted_change_number').text(yoc_admitted_baseline_minus_recent.toFixed(1));
		var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent/serverData.yoc_admitted_baseline*100;
		$('#yoc_admitted_change_percent').text(yoc_admitted_change_percent.toFixed(1));
		
		// ALOS of YOC
		var alos_of_yoc_baseline_minus_recent = serverData.alos_of_yoc_recent - serverData.alos_of_yoc_baseline;
		$('#alos_of_yoc_change_number').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
		var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent/serverData.alos_of_yoc_baseline*100;
		$('#alos_of_yoc_change_percent').text(alos_of_yoc_change_percent.toFixed(1));	

     // post Average Daily pop chart



  var adp_Chart = new CanvasJS.Chart("adpChart_container", {

       title: {
            text: "Average Daily Population Changes"
       },
       data: [//array of dataSeries              
         { //dataSeries object

              /*** Change type "column" to "bar", "area", "line" or "pie"***/
              type: "column",
              dataPoints: [
              { label: "Baseline", y: parseFloat($('#adp_baseline').text()) },
              { label: "Recent", y: parseFloat($('#adp_recent').text()) }
              ]
         }

       ]
  });
 // $('#adp_baseline').text(serverData.adp_baseline);
  //$('#adp_recent').text(serverData.adp_recent);
  adp_Chart.render();


 // $("#adpChart_container").css("position", "relative");






                      /* */

  var admissions_chart = new CanvasJS.Chart("admissionsChanges_container", {

       title: {
            text: "Annual Admissions Changes"
       },
       data: [//array of dataSeries              
         { //dataSeries object

              
              type: "column",
              dataPoints: [
              { label: "Baseline", y: parseFloat($('#annual_admission_baseline').text()) },
              { label: "Recent", y: parseFloat($('#annual_admission_recent').text()) }
              ]
         }
       ]
  });
			       // $('#adp_baseline').text(serverData.adp_baseline);
			       //$('#adp_recent').text(serverData.adp_recent);
  admissions_chart.render();


  var alos_chart = new CanvasJS.Chart("alos_container", {

       title: {
            text: "ALOS Changes"
       },
       data: [//array of dataSeries              
         { //dataSeries object


              type: "column",
              dataPoints: [
              { label: "Baseline", y: parseFloat($('#alos_baseline').text()) },
              { label: "Recent", y: parseFloat($('#alos_recent').text()) }
              ]
         }
       ]
  });
			       // $('#adp_baseline').text(serverData.adp_baseline);
			       //$('#adp_recent').text(serverData.adp_recent);
  alos_chart.render();



  var placements_chart = new CanvasJS.Chart("placements_container", {

       title: {
            text: "Commitments"
       },
       data: [//array of dataSeries              
         { //dataSeries object


              type: "column",
              dataPoints: [
              { label: "State Commitments Baseline", y: parseFloat($('#state_commitment_baseline').text()) },
              { label: "State Commitments Recent", y: parseFloat($('#state_commitment_recent').text()) }
              ]
         }
       ]
  });
			       // $('#adp_baseline').text(serverData.adp_baseline);
			       //$('#adp_recent').text(serverData.adp_recent);
  placements_chart.render();


  var public_saftey_chart = new CanvasJS.Chart("public_saftey_container", {

       title: {
            text: "Public Safety"
       },
       data: [//array of dataSeries              
         { //dataSeries object


              type: "column",
              showInLegend: true,
              name: "Baseline",
              legendText: "Baseline",

              dataPoints: [
              { label: "FTA Rate", y: parseFloat($('#fta_rate_baseline').text()) },
              { label: "Re-Arrest", y: parseFloat($('#re_arrest_baseline').text()) },
              { label: "Juvenile Crime", y: parseFloat($('#juvenile_crime_baseline').text()) }
              ]
         },

          { //dataSeries object


               type: "column",
               showInLegend: true,
               name: "Recent",
               legendText: "Recent",
               dataPoints: [
               { label: "FTA Rate", y: parseFloat($('#fta_rate_recent').text()) },
               { label: "Re-Arrest", y: parseFloat($('#re_arrest_recent').text()) },
               { label: "Juvenile Crime", y: parseFloat($('#juvenile_crime_recent').text()) }
               ]
          }


       ]
  });
			       // $('#adp_baseline').text(serverData.adp_baseline);
			       //$('#adp_recent').text(serverData.adp_recent);
  public_saftey_chart.render();


  var race_diosproportionality_chart = new CanvasJS.Chart("racial_ethnic_disproportionality_container", {

       title: {
            text: "Racial/Ethnic Disproportionality"
       },
       data: [//array of dataSeries              
         { //dataSeries object


              type: "column",
              showInLegend: true,
              name: "Baseline",
              legendText: "Baseline",
              dataPoints: [
              { label: "YOC in ADP", y: parseFloat($('#yoc_in_adp_baseline').text()) },
              { label: "# of YOC State Commitements", y: parseFloat($('#yoc_state_commitments_baseline').text()) },
              { label: "# of YOC Admitted", y: parseFloat($('#yoc_admitted_baseline').text()) },
              { label: "ALOS of YOC", y: parseFloat($('#alos_of_yoc_baseline').text()) }
              ]
         },

          { //dataSeries object


               type: "column",
               showInLegend: true,
               name: "Recent",
               legendText: "Recent",
               dataPoints: [
               { label: "YOC in ADP", y: parseFloat($('#yoc_in_adp_recent').text()) },
              { label: "# of YOC State Commitements", y: parseFloat($('#yoc_state_commitments_recent').text()) },
              { label: "# of YOC Admitted", y: parseFloat($('#yoc_admitted_recent').text()) },
              { label: "ALOS of YOC", y: parseFloat($('#alos_of_yoc_recent').text()) }

               ]
          }


       ]
  });
			       // $('#adp_baseline').text(serverData.adp_baseline);
			       //$('#adp_recent').text(serverData.adp_recent);
  race_diosproportionality_chart.render();

                      /* 
  var public_saftey_chart = new CanvasJS.Chart("public_saftey_container", {

       title: {
            text: "Public Saftey changes"
       },
       data: [//array of dataSeries              
         { //dataSeries object


              type: "column",
              dataPoints: [
              { label: "baseline", y: parseFloat($('#annual_admission_baseline').text()) },
              { label: "recent", y: parseFloat($('#annual_admission_recent').text()) }
              ]
         }
       ]
  });
			       // $('#adp_baseline').text(serverData.adp_baseline);
			       //$('#adp_recent').text(serverData.adp_recent);
  public_saftey_chart.render();

*/
                      /* 
  var yoc_adp_chart = new CanvasJS.Chart("admissionsChanges_container", {

       title: {
            text: "Annual Admissions changes"
       },
       data: [//array of dataSeries              
         { //dataSeries object


              type: "column",
              dataPoints: [
              { label: "baseline", y: parseFloat($('#annual_admission_baseline').text()) },
              { label: "recent", y: parseFloat($('#annual_admission_recent').text()) }
              ]
         }
       ]
  });
			       // $('#adp_baseline').text(serverData.adp_baseline);
			       //$('#adp_recent').text(serverData.adp_recent);
  yoc_adp_chart.render();
*/


  //$(".canvasjs-chart-canvas").css("position", "relative");




			  }
			});
	
	}); // End Post








	// Get all reform info
$.post('php/get_reforms.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		$.each(pushedData, function(i, serverData) { 
		var this_particular_report_ID_number = serverData.report_ID;
			if (localStorage.current_report_ID == this_particular_report_ID_number)
			{
			// To populate span tags
			  $('#governance_structure2').text(serverData.governance_structure);
			  $('#work_plan2').text(serverData.work_plan);
			  $('#purpose_of_detention2').text(serverData.purpose_of_detention);
			  $('#red_authority2').text(serverData.red_authority);
			  $('#utilization_study2').text(serverData.utilization_study);
			  $('#comprehensive_detention_population_reports2').text(serverData.comprehensive_detention_population_reports);
			  $('#comprehensive_rai_reports2').text(serverData.comprehensive_rai_reports);
			  $('#comprehensive_atd_reports2').text(serverData.comprehensive_atd_reports);
			  $('#field_criteria_for_police2').text(serverData.field_criteria_for_police);
			  $('#detention_screening_tool2').text(serverData.detention_screening_tool);
			  $('#screening_24_72').text(serverData.screening_24_7);
			  $('#home_detention2').text(serverData.home_detention);
			  $('#day_evening_reporting2').text(serverData.day_evening_reporting);
			  $('#shelter_foster_care_beds2').text(serverData.shelter_foster_care_beds);
			  $('#atd_placement_coordination2').text(serverData.atd_placement_coordination);
			  $('#weekly_detention_review2').text(serverData.weekly_detention_review);
			  $('#revised_speedy_trail_rules2').text(serverData.revised_speedy_trail_rules);
			  $('#expeditor2').text(serverData.expeditor);
			  $('#targeting_stuck_cases2').text(serverData.targeting_stuck_cases);
			  $('#court_notification_system2').text(serverData.court_notification_system);
			  $('#sanctions_incentives_grid2').text(serverData.sanctions_incentives_grid);
			  $('#differential_warrant_policy2').text(serverData.differential_warrant_policy);
			  $('#placement_expediting2').text(serverData.placement_expediting);
			  $('#formal_mandate2').text(serverData.formal_mandate);
			  $('#community_engagement2').text(serverData.community_engagement);
			  $('#disaggregated_data2').text(serverData.disaggregated_data);
			  $('#special_detention_case_reforms2').text(serverData.special_detention_case_reforms);
			  $('#jdai_facility_standards2').text(serverData.jdai_facility_standards);
			  $('#self_assessment_inspection2').text(serverData.self_assessment_inspection);
			  $('#formal_mandate2').text(serverData.formal_mandate);
			  $('#corrections_plan2').text(serverData.corrections_plan);
			}
		});
}); // End Post

// Get leverage info
$.post('php/get_leverage.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentLeverageTable = '<table class="table table-striped">';
		currentLeverageTable += "<tr><th>Description</th><th>Amount</th><th>Funding Type</th></tr>";
		// Get all the leverage info from the database
		$.each(pushedData, function(i, serverData) { 
			// Get just the leverage info from the current report
			if (serverData.report_ID == localStorage.current_report_ID)
			{
				currentLeverageTable += "<tr><td>" + serverData.project_description;
				currentLeverageTable += "</td><td>" + serverData.amount + "</td><td>" + serverData.funding_type + "</td></tr>";
			}
		});
		currentLeverageTable += "</table>";
		$('#show_current_leverage_table').html(currentLeverageTable);
}); // End Post	

// Get media info
$.post('php/get_media.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		currentMediaTable = '<table class="table table-striped">';
		currentMediaTable += "<tr><th>Media Name</th><th>Date</th><th>Type</th></tr>";
		// Get all the media info from the database
		$.each(pushedData, function(i, serverData) { 
			// Get just the media info from the current report
			if (serverData.report_ID == localStorage.current_report_ID)
			{
				currentMediaTable += "<tr><td>" +  serverData.media_name;
				currentMediaTable += "</td><td>" + serverData.media_date + "</td><td>" + serverData.media_type + "</td></tr>";
			}
		});
		currentMediaTable += "</table>";
		$('#show_current_media_table').html(currentMediaTable);
}); // End Post	

// Get training info
$.post('php/get_trainings.php', function(data) {
	  var pushedData = jQuery.parseJSON(data);
	  currentTrainingTable = '<table class="table table-striped"><tr><th>Training Name</th>';
	  currentTrainingTable += "<th>Date</th><th># of People</th><th>Focus Area</th></tr>";
	  // Get all the media info from the database
	  $.each(pushedData, function(i, serverData) { 
		  // Get just the media info from the current report
		  if (serverData.report_ID == localStorage.current_report_ID)
		  {
			  currentTrainingTable += "<tr><td>" + serverData.training_name + "</td><td>" + serverData.training_date;
			  currentTrainingTable += "</td><td>" + serverData.number_trained + "</td><td>" + serverData.jdai_focus_area + "</td></tr>";
		  }
		});
		currentTrainingTable += "</table>";
		$('#show_current_training_table').html(currentTrainingTable);
}); // End Post	

  })