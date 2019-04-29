<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Submission Details | JDAI Results Administration Dashboard</title>
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
    <script>
function myFunction()
{
var x;
var r=confirm("You have a potential error below. Still submit?");
if (r==true)
  {
  x='<button class="btn btn-success" type="button" disabled="disabled">Submit the Form to JDAI</button>';
  y='<div class="alert alert-info"><strong>Congrats:</strong> Your submission form has been submitted to JDAI for final review.</div>';
document.getElementById("demo2").innerHTML=y;
  }
else
  {
  x='<button class="btn btn-success" type="button">Submit the Form to JDAI</button>';
  }
document.getElementById("demo").innerHTML=x;
}

</script>
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
    <script src="js/jquery.maskMoney.min.js" type="text/javascript"></script>
    <script type="application/javascript" src="js/casey_include_admin4.js"></script>
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
    <p class="lead">Below are statistics on leverage for this year and all years in the system. Also, all leverage record from the system is listed. </p>
   <input class="btn btn-primary" type="button" id="return_to_dashboard_home_button" value="Return to Dashboard Home" />
   <input class="btn btn-primary" type="button" id="view_all_media" value="View All Media" />
   <input class="btn btn-primary" type="button" id="view_all_trainings" value="View All Trainings" /><br><br>
    <legend>Leverage Statistics</legend>
    <h4>All Years</h4>
    <table class="table table-striped table-condensed table-bordered">
      <tr class="info"><td>Total Leverage: </td><td><span id="currentAllLeverageCounter" style="font-weight:bold"></span></td>
      <td>Total Leverage Amount</td><td><span id="totalLeverage" style="font-weight:bold"></span></td></tr> 
      <tr><td>Total Local Government #: </td><td><span id="totalLocalGovernment" style="font-weight:bold"></span></td>
      <td>Total Local Government Amount: </td><td><span id="totalLocalGovernmentAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Total State Federal #: </td><td><span id="totalStateFederal" style="font-weight:bold"></span></td>
      <td>Total State Federal Amount: </td><td><span id="totalStateFederalAmount" style="font-weight:bold"></span></td></tr> 
      <tr><td>Total Foundation/Private Grants #: </td><td><span id="totalFoundation" style="font-weight:bold"></span></td>
      <td>Total Foundation/Private Grants Amount: </td><td><span id="totalFoundationAmount" style="font-weight:bold"></span></td></tr>   
      <tr><td>Total In-Kind Match #: </td><td><span id="totalMatch" style="font-weight:bold"></span></td>
      <td>Total In-Kind Match Amount: </td><td><span id="totalMatchAmount" style="font-weight:bold"></span></td></tr>  
      <tr><td>Total Other #: </td><td><span id="totalOther" style="font-weight:bold"></span></td>
      <td>Total Other Amount: </td><td><span id="totalOtherAmount" style="font-weight:bold"></span></td></tr>
      </table>
      <h4>Current Year</h4>
      <table class="table table-striped table-condensed table-bordered">
      <tr class="info"><td>Leverage # for Current Year: </td><td><span id="currentYearLeverageNumber" style="font-weight:bold"></span></td>					
      <td>Current Year Leverage Number:</td><td><span id="totalLeverageAmountCurrentYear" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year Government #:</td><td><span id="currentYearLocalGovernment" style="font-weight:bold"></span></td>
      <td>Curent Year Government Amount:</td><td><span id="currentYearLocalGovernmentAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year  State Federal #:</td><td><span id="currentYearStateFederal" style="font-weight:bold"></span></td>
      <td>Curent Year State Federal Amount:</td><td><span id="currentYearStateFederalAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year Foundation/Private Grants #:</td><td><span id="currentYearFoundation" style="font-weight:bold"></span></td>
      <td>Curent Year Foundation/Private Grants Amount:</td><td><span id="currentYearFoundationAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year In-Kind Match #:</td><td><span id="currentYearMatch" style="font-weight:bold"></span></td>
      <td>Curent Year In-Kind Match Amount:</td><td><span id="currentYearMatchAmount" style="font-weight:bold"></span></td></tr>
      <tr><td>Curent Year Other #:</td><td><span id="currentYearOther" style="font-weight:bold"></span></td>
      <td>Curent Year Other Amount:</td><td><span id="currentYearOtherAmount" style="font-weight:bold"></span></td></tr>
      </table>
  
<!--<div class="alert alert-success">
  Your form is completed and ready for submission to JDAI. 
</div>      -->

   <!--<input class="btn" type="button" id="make_report_in_progress_button" value="Label Report as In-Progress" />
   <input class="btn btn-success" type="button" id="submit_form_to_jdai_button" value="Submit the Form to JDAI" />
   <input class="btn btn-danger" type="button" id="make_form_final_button" value="Make Form Final" />
   <button class="btn btn-primary" type="button">Return to Dashboard Home</button>
   <button class="btn btn-primary" type="button"  onclick="location.href='form1.html'">Edit the Form</button>
   <span id="demo"><button class="btn btn-success" type="button"  onclick="myFunction()">Submit the Form to JDAI</button></span>
   -->
   <br>
   <legend>All Leverage</legend>
      
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
