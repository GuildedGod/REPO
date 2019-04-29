<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Current Leverage | JDAI Results Administration Dashboard</title>
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
    <script type="application/javascript" src="js/casey_include_currentLeverage.js"></script>
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
            <ul class="nav">
              <li><a href="index.html">Home</a></li>
              <li><a href="admin1.php">Admin Dashboard</a></li>
              <li><a href="adminInstructions.php">Instructions</a></li>
              <li><a href="form0.html">Current Report</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">
    <!--<span id="demo2"><div class="alert alert-error">
  <strong>Please note:</strong> Your submission form for the current year requires your attention before submission. 
</div></span>-->
    <h2>JDAI Results Administration Dashboard</h2>
    <p class="lead">Below are statistics on leverage for this year only. Every leverage record this report year in the system is listed. </p>
   <!--<input class="btn btn-primary" type="button" id="return_to_dashboard_home_button" value="Return to Dashboard Home" />
   <input class="btn btn-primary" type="button" id="view_all_media" value="View All Media" />
   <input class="btn btn-primary" type="button" id="view_all_trainings" value="View All Trainings" /><br><br>-->
    <legend>Current Year Leverage Statistics</legend>
      <h4>Current Year Leverage Numbers</h4>
      <table class="table table-striped table-condensed table-bordered">
      <tr><td width="30%">Leverage # for Current Year: </td>
      <td  width="10%"><span id="currentYearLeverageNumber" style="font-weight:bold"></span></td>
      <td rowspan="6"  width="60%"><div id="chartContainerCurrentLeverage" style="height: 300px; width: 100%;"></div></td></tr>					
      <tr><td>Curent Year Government #:</td><td><span id="currentYearLocalGovernment" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year  State Federal #:</td><td><span id="currentYearStateFederal" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year Foundation/Private Grants #:</td>
      <td><span id="currentYearFoundation" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year In-Kind Match #:</td><td><span id="currentYearMatch" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year Other #:</td><td><span id="currentYearOther" style="font-weight:bold"></span></td></tr>
      </table>
      
      <h4>Current Year Leverage Amounts</h4>
      <table class="table table-striped table-condensed table-bordered">
      <tr><td  width="30%">Leverage Amount for Current Year: </td>
      <td width="10%"><span id="totalCurrentAmount" style="font-weight:bold"></span></td>
      <td rowspan="7"  width="60%"><div id="chartContainerCurrentLeverageAmount" style="height: 280px; width: 100%;"></div></td></tr>
      <tr><td>Curent Year Government Amount:</td>
      <td><span id="currentYearLocalGovernmentAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year State Federal Amount:</td>
      <td><span id="currentYearStateFederalAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year Foundation/Private Grants Amount:</td><td><span id="currentYearFoundationAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year In-Kind Match Amount:</td><td><span id="currentYearMatchAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year Other Amount:</td><td><span id="currentYearOtherAmount" style="font-weight:bold"></span></td></tr>
      </table>
   <br>
   <legend>All Current Year Leverage</legend>
      
 <div class="row">
  <div class="span12">
   <div id="show_current_all_leverage_table"></div>
   
  </div>
</div>
<br>
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
