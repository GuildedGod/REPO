<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Final Report | JDAI Submission System</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
	  textarea{
		  width:100%;
	  }
    </style>
    <link href="css/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png">
    <link rel="shortcut icon" href="ico/favicon.png">
                                   
  <!-- JavaScript Code -->
    <script src="http://code.jquery.com/jquery-2.0.2.min.js"></script>
    <script type="application/javascript" src="js/casey_include_form8.js"></script>
  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#">Casey Foundation | Juvenile Detention Alternatives Initiative Submission System</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li><a href="index.html">Home</a></li>
              <li><a href="adminInstructions.php">Instructions</a></li>
              <li><a href="form0.html">Current Report</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">
    <h1>2014 JDAI Results Submission Form</h1>
    <br><br><center>
    <script>
// Only show buttons that make sense on the admin page
if (localStorage.team_leader_name)
{
  document.write('<input class="btn btn-info" type="button" id="return_to_dashboard_button" value="Return to Administrative Dashboard"  onclick="location.href=\'admin2.php\'" />');
}
</script>
<br><br>
    <div class="btn-group">
<button class="btn" onclick="location.href='form0.html'">Instructions</button>
  <button class="btn" onclick="location.href='form1.html'">Impact Results</button>
  <button class="btn" onclick="location.href='form3.php'">Media</button>
  <button class="btn" onclick="location.href='form7.php'">Trainings</button>
  <button class="btn" onclick="location.href='form5.php'">Leverage</button>
  <button class="btn" onclick="location.href='form6.php'">Reforms</button>
  <button class="btn disabled" onclick="location.href='form8.php'">Final Notes</button>
  </div><br><br>
  
      
      <h2>Final Report</h2></center>
      <p>Here is the section where you would just print out a summary of what the user selected.</p>
      <legend>Report Overview</legend>
      
 <div class="row">
  <div class="span4">
    Site Name: <strong><span id="site_name"></span></strong><br>
    Total Detention Capacity: <strong><span id="total_detention_capacity"></span></strong> 
  </div>
  <div class="span4">
     Person Completing the report: <strong><span id="jdai_username"></span></strong><br>
     TA/Team Leader: <strong><span id="team_leader_ID"></span></strong>
  </div>
  <div class="span4">
   Baseline Period: <strong><span id="baseline_start_date"></span> to <span id="baseline_finish_date"></span></strong><br>
   Recent Report Period: <strong><span id="recent_start_date"></span> to <span id="recent_finish_date"></span></strong><br>
  </div>
</div>
<br>
      <legend>Impact Results</legend>
 <div class="row">
  <div class="span3">
  	
       <h4>Average Daily Population</h4>
       ADP Baseline: <strong><span id="adp_baseline"></span></strong><br>
       ADP Recent: <strong><span id="adp_recent"></span></strong><br>
       ADP Changes (#): <strong><span id="adp_change_number"></span></strong><br>
       ADP Changes (%): <strong><span id="adp_change_percent"></span>%</strong><br>
      
       Annual Admissions Baseline: <strong><span id="annual_admission_baseline"></span></strong><br>
       Annual Admissions Recent: <strong><span id="annual_admission_recent"></span></strong><br>
       Admissions Changes (#): <strong><span id="annual_admissions_change_number"></span></strong><br>
       Admissions Changes (%): <strong><span id="annual_admissions_change_percent"></span>%</strong><br>
       
       ALOS Baseline (in Days): <strong><span id="alos_baseline"></span></strong><br>
       ALOS Recent (in Days):<strong><span id="alos_recent"></span></strong><br>
       ALOS Changes (#): <strong><span id="alos_change_number"></span></strong><br>
       ALOS Changes (%): <strong><span id="alos_change_percent"></span>%</strong><br>
  </div>
  <div class="span3">
     <h4>Placements</h4>
     State Commitments Baseline: <strong><span id="state_commitment_baseline"></span></strong><br>
     State Commitments Recent: <strong><span id="state_commitment_recent"></span></strong><br>
     Commitment Changes (#): <strong><span id="state_commitment_change_number"></span></strong><br>
     Commitment Changes (%): <strong><span id="state_commitment_change_percent"></span>%</strong><br>
  </div>
  <div class="span3">   
     <h4>Public Safety</h4>
     FTA Rate Baseline: <strong><span id="fta_rate_baseline"></span></strong><br>
     FTA Rate Recent: <strong><span id="fta_rate_recent"></span></strong><br>
     FTA Rate Change (#): <strong><span id="fta_rate_change_number"></span></strong><br>
     
     Re-Arrest Baseline (%): <strong><span id="re_arrest_baseline"></span></strong><br>
     Re-Arrest Recent: <strong><span id="re_arrest_recent"></span></strong><br>
     Re-Arrest Rate Change (#): <strong><span id="re_arrest_rate_change"></span></strong><br>
     
     Juvenile Crime Baseline: <strong><span id="juvenile_crime_baseline"></span></strong><br>
     Juvenile Crime Recent: <strong><span id="juvenile_crime_recent"></span></strong><br>
     JuvCrime Changes (#) <strong><span id="juvenile_crime_change_number"></span></strong><br>
     JuvCrime Changes (%) <strong><span id="juvenile_crime_change_percent"></span>%</strong><br>
     
     FTA Indicator: <br><strong><span id="fta_indicator2"></span></strong><br>
     Re-Arrest Indicator: <br><strong><span id="re_arrest_indicator2"></span></strong><br>
     Juvenile Crime Indicator: <br><strong><span id="juvenile_crime_indicator2"></span></strong><br>
     <br>
  </div>
  <div class="span3">
      <h4>Racial/Ethic Disproportionality</h4>
      YOC in ADP Baseline: <strong><span id="yoc_in_adp_baseline"></span></strong><br>
      YOC in ADP Recent: <strong><span id="yoc_in_adp_recent"></span></strong><br>
      YOC in ADP Changes (#): <strong><span id="yoc_in_adp_recent_change_number"></span></strong><br>
      YOC in ADP Changes (%): <strong><span id="yoc_in_adp_recent_change_percent"></span>%</strong><br>
      <br>
      
      <h4></h4>
      # of YOC State Commitments Baseline: <strong><span id="yoc_state_commitments_baseline"></span></strong><br>
      # of YOC State Commitments Recent: <strong><span id="yoc_state_commitments_recent"></span></strong><br>
      YOC Committed Changes (#): <strong><span id="yoc_committed_changes_number"></span></strong><br>
      YOC Committed Changes (%): <strong><span id="yoc_committed_changes_percent"></span>%</strong><br>
      
      # of YOC Admitted Baseline: <strong><span id="yoc_admitted_baseline"></span></strong><br>
      # of YOC Admitted Recent: <strong><span id="yoc_admitted_recent"></span></strong><br>
      YOC Admitted Changes (#): <strong><span id="yoc_admitted_change_number"></span></strong><br>
      YOC Admitted Changes (%): <strong><span id="yoc_admitted_change_percent"></span>%</strong><br>
      
      ALOS of YOC Baseline: <strong><span id="alos_of_yoc_baseline"></span></strong><br>
      ALOS of YOC Recent: <strong><span id="alos_of_yoc_recent"></span></strong><br>
      YOC ALOS Change (#): <strong><span id="alos_of_yoc_change_number"></span></strong><br>
      YOC ALOS Change (%): <strong><span id="alos_of_yoc_change_percent"></span>%</strong><br> 
  </div>
</div>
      <legend>Media Coverage</legend>
      <div id="show_current_media_table"></div>
      <legend>JDAI-Specific Tranings</legend>
      <div id="show_current_training_table"></div>
      <legend>Leverage</legend>
      <div id="show_current_leverage_table"></div>
      
      <legend>Detention Reforms Implemented</legend>
      <div class="row">
  <div class="span4">
       <h4>Collaboration</h4>
       Governance Structure: <strong><span id="governance_structure2"></span></strong><br>
       Work Plan: <strong><span id="work_plan2"></span></strong><br>
       "Purpose of Detention" Clarification: <strong><span id="purpose_of_detention2"></span></strong><br>
       RED Authority: <strong><span id="red_authority2"></span></strong><br>
       
       <h4>Data Driven Decision Making</h4>
       Utilization Study: <strong><span id="utilization_study2"></span></strong><br>
       Comprehensive Detention Population Reports (at least quarterly): <strong><span id="comprehensive_detention_population_reports2"></span></strong><br>
       Comprehensive RAI Reports (at least quarterly): <strong><span id="comprehensive_rai_reports2"></span></strong><br>
       Comprehensive ATD Reports (at least quarterly): <strong><span id="comprehensive_atd_reports2"></span></strong><br>
       
       <h4>Objective Admissions</h4>
       Field criteria for police: <strong><span id="field_criteria_for_police2"></span></strong><br>
       Detention Screening Tool: <strong><span id="detention_screening_tool2"></span></strong><br>
       24x7 Screening: <strong><span id="screening_24_72"></span></strong><br>
  </div>
  <div class="span4">
     <h4>Alternatives to Detention</h4>
     Home detention: <strong><span id="home_detention2"></span></strong><br>
     Day/Evening Reporting:  <strong><span id="day_evening_reporting2"></span></strong><br>
     Shelter/Foster Care Beds: <strong><span id="shelter_foster_care_beds2"></span></strong><br>
     ATD Placement coordination: <strong><span id="atd_placement_coordination2"></span></strong><br>
     
     <h4>Case Processing</h4>
     Weekly Detention Review: <strong><span id="weekly_detention_review2"></span></strong><br>
     Revised “Speedy Trial” Rules:  <strong><span id="revised_speedy_trail_rules2"></span></strong><br>
     Expeditor: <strong><span id="expeditor2"></span></strong><br>
     Targeting “stuck” Cases: <strong><span id="targeting_stuck_cases2"></span></strong><br>
     
     <h4>Special Populations</h4>
     Court Notification System: <strong><span id="court_notification_system2"></span></strong><br>
     Sanctions/Incentives Grid:  <strong><span id="sanctions_incentives_grid2"></span></strong><br>
     Differential Warrant Policy: <strong><span id="differential_warrant_policy2"></span></strong><br>
     <!--Placement Expediting: <strong><span id="placement_expediting2"></span></strong><br>-->
  </div>
  <div class="span4">
     <h4>Racial & Ethnic Disparities</h4>
     Formal Mandate: <strong><span id="formal_mandate2"></span></strong><br>
     Community Engagement:  <strong><span id="community_engagement2"></span></strong><br>
     Disaggregated Data: <strong><span id="disaggregated_data2"></span></strong><br>
     Special Detention Case Reforms: <strong><span id="special_detention_case_reforms2"></span></strong><br>
     
     <h4>Conditions of Confinement</h4>
     JDAI Facility Standards: <strong><span id="jdai_facility_standards2"></span></strong><br>
     Self-Assessment / Inspection:  <strong><span id="self_assessment_inspection2"></span></strong><br>
     Corrections Plan: <strong><span id="corrections_plan2"></span></strong><br>
  </div>
</div>
      <br>
      <legend>Report Content Feedback</legend>
      <p>Enter any special notes you have below about the contents of the report: <br />
      <textarea id="report_notes" rows="3" placeholder="Share any comments about your experience here..." width="50" autofocus></textarea></p>
      <legend>New Portal Interface Feedback</legend>
      <p>Enter any special notes you have below about the new interface: <br />
      <textarea id="usability_notes" rows="3" placeholder="Share any comments about your experience here..." width="50"></textarea></p>
      <p><input id="final_notes_save_button" class="btn btn-large btn-primary" type="button" 
      value="Save Report" />
      <input id="final_notes_submit_button" class="btn btn-large btn-primary btn-success" type="button" value="Save Report and Submit to your TATL" />
<br></p>
      
<div id="save_status"></div>

    <footer>
        <center><p>© 2014 The Annie E. Casey Foundation | Privacy Statement | Terms of Use</p></center>
      </footer>

    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap-transition.js"></script>
    <script src="js/bootstrap-alert.js"></script>
    <script src="js/bootstrap-modal.js"></script>
    <script src="js/bootstrap-dropdown.js"></script>
    <script src="js/bootstrap-scrollspy.js"></script>
    <script src="js/bootstrap-tab.js"></script>
    <script src="js/bootstrap-tooltip.js"></script>
    <script src="js/bootstrap-popover.js"></script>
    <script src="js/bootstrap-button.js"></script>
    <script src="js/bootstrap-collapse.js"></script>
    <script src="js/bootstrap-carousel.js"></script>
    <script src="js/bootstrap-typeahead.js">
</script><script src="js/jquery.cookie.js"></script>

  </body>
</html>
