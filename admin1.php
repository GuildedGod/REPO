<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Submission Overview | JDAI Results Administration Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
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
    <script type="text/javascript" src="js/canvasjs.min.js"></script>
    <!--<script type="application/javascript" src="js/casey_include.js"></script>-->
    <script type="application/javascript" src="js/casey_include_admin1_new.js"></script>
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
          <a class="brand" href="#">Juvenile Detention Alternatives Initiative Submission System</a>
          <div class="nav-collapse collapse">
           <!--<p class="navbar-text pull-right">
              Logged in as <a href="#" class="navbar-link" id="username_login">Jane Doe</a>
            </p>-->
            <ul class="nav">
              <li><a href="index.html">Home</a></li>
              <li class="active"><a href="admin1.php">Admin Dashboard</a></li>
              <li><a href="adminInstructions.php">Instructions</a></li>
              <li><a href="form0.html">Current Report</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">
    <h2>JDAI Results Administration Dashboard</h2>  
      
      <!-- Content to display for administratiors -->
      <span id="admin_dashboard">
      <legend>JDAI Adminstrator Overview</legend>
      <table class="table table-striped table-condensed table-bordered">
      <tr><td width="30%">Total Number of Reports Started: </td><td width="10%"><span id="show_currentYearReportsCount" style="font-weight:bold"></span></td>
      <td rowspan="6" width="60%"><div id="chartContainer" style="height: 300px; width: 100%;"></div></td></tr>
      <tr><td>Number of Active Sites:</td><td><span id="active_site_count" style="font-weight:bold"></span></td></tr>
      <tr><td>Number of In-Progress Reports: </td><td><span id="show_currentYearReportsInProgress" style="font-weight:bold"></span>
      </td></tr><tr>				
      <td>Number of Submitted Reports: </td><td><span id="show_currentYearReportsSubmitted" style="font-weight:bold"></span></td></tr>
      <tr><td>Number of Completed Reports: </td><td><span id="show_currentYearReportsCompleted" style="font-weight:bold"></span></td>
      </tr><tr><td>Number of Final Reports: </td><td><span id="show_currentYearReportsFinal" style="font-weight:bold"></span></td></tr>
      </table>
      <br/> 
      <legend>JDAI Adminstrator Tools</legend>
      <button type="button" id="view_comparison_button" class="btn btn-success">Impact Results Yearly Comparison</button>
      <button type="button" id="view_comparison_vs_button" class="btn btn-success">Impact Results Baseline vs. Recent</button><br/><br/>
      <button type="button" id="view_cy_media_button" class="btn btn-success" disabled>View Current Year Media</button>
      <button type="button" id="view_cy_training_button" class="btn btn-success" disabled>View Current Year Trainings</button>
      <button type="button" id="view_cy_leverage_button" class="btn btn-success">View Current Year Leverage</button><br/><br/>
      <button type="button" id="view_media_button" class="btn btn-success">View All Media</button>
      <button type="button" id="view_training_button" class="btn btn-success">View All Trainings</button>
      <button type="button" id="view_leverage_button" class="btn btn-success">View All Leverage</button><br/><br/>
      <br/><br/>
      </span>
      
      <legend>JDAI Submissions</legend>
      <!-- Hint: If data does show up by default, select a year to begin-->
      <ul class="nav nav-tabs" role="tablist" id="myTab">
  <li><a href="#year_2014" role="tab" data-toggle="tab" id="select_2014">2014</a></li>
  <li class="active"><a href="#year_2013" role="tab" data-toggle="tab"  id="select_2013">2013</a></li>
  <li><a href="#year_2012" role="tab" data-toggle="tab" id="select_2012">2012</a></li>
  <li><a href="#year_2011" role="tab" data-toggle="tab" id="select_2011">2011</a></li>
</ul>
<!--View Report: <select name="selected_report_to_view" id="selected_report_to_view" class="span3" ></select>
      <input class="btn btn-primary" type="button" id="view_selected_report_button" value="View Selected Report" />-->
<div class="tab-content">
  <div class="tab-pane" id="year_2014">
  <div id="show_currentYearReportsTable1"></div>
       <div id="save_status"></div>
  </div>
  
  <div class="tab-pane fade in active" id="year_2013">
      <div id="show_currentYearReportsTable2"></div>
       <div id="save_status"></div>
  </div>
  
  <div class="tab-pane" id="year_2012">
  	<div id="show_currentYearReportsTable3"></div>
       <div id="save_status"></div>
  </div>
  
  <div class="tab-pane" id="year_2011">
  	<div id="show_currentYearReportsTable4"></div>
       <div id="save_status"></div>
  </div>
  
  <div class="tab-pane" id="year_2010">
	<div id="show_currentYearReportsTable5"></div>
       <div id="save_status"></div>
    
  </div>
</div>
      
      
      <footer>
        <center><p>© 2014 The Annie E. Casey Foundation | Privacy Statement | Terms of Use</p></center>
      </footer>

    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

  </body>
</html>
