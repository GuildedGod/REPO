<?php
include("php/code.php");  // Read the php functions used in the code
?>

<!DOCTYPE html>
<!-- saved from url=(0065)http://twitter.github.io/bootstrap/examples/starter-template.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Leverage | JDAI Submission System</title>
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
    <link href="http://twitter.github.io/bootstrap/assets/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://twitter.github.io/bootstrap/assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://twitter.github.io/bootstrap/assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://twitter.github.io/bootstrap/assets/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="http://twitter.github.io/bootstrap/assets/ico/apple-touch-icon-57-precomposed.png">
                                   <link rel="shortcut icon" href="http://twitter.github.io/bootstrap/assets/ico/favicon.png">
                                   
  <!-- JavaScript Code -->
    <script src="http://code.jquery.com/jquery-2.0.2.min.js"></script> 
    <script type="application/javascript" src="js/casey_include_form5.js"></script>
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
          <a class="brand" href="http://twitter.github.io/bootstrap/examples/starter-template.html#">Casey Foundation | Juvenile Detention Alternatives Initiative Submission System</a>
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
      <p>If you need help completing this form, consult the <a href="adminInstructions.php" target="_blank">Instructions</a> page. If you have questions about definitions of any of the data requested, consult the <a href="resultsreports.php" target="_blank">Results Reports 101</a> page. <br><br></p>

<center>
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
  <button class="btn disabled" onclick="location.href='form5.php'">Leverage</button>
  <button class="btn" onclick="location.href='form6.php'">Reforms</button>
  <button class="btn" onclick="location.href='form8.php'">Final Notes</button>
</div>
<br><br>
<h2>Influence Results</h2>
<h3>Leverage</h3>
<div id="show_current_leverage_table"></div>
</center>


<form class="navbar-form" action="form6.php" enctype="application/x-www-form-urlencoded" method="post">
 <legend> </legend>
  <div class="control-group">

  
  <div class="container-fluid">
  <div class="row-fluid">
    <div class="span12">
      <!--Sidebar content-->
  <h3>Add Leverage</h3>    
 <div class="control-group">
    <div class="controls">
    
      Description of Project: <input class="input-xxlarge" type="text" placeholder="Also include staff description..." id="leverage_project_description" autofocus>
      <br><br>
       Amount: <div class="input-prepend input-append">
  <span class="add-on">$</span>
  <input class="span4" type="text" id="leverage_amount" >
  <span class="add-on">.00</span>
</div>
       Funding Type: <select id="leverage_funding_type">
  <option>Local Government Funds</option>
  <option>State or Federal Grants</option>
  <option>Foundation/Private Grants</option>
  <option>In-Kind Match</option>
  <option>Other</option>
 </select>
    </div>
  </div>
  
  <h3>Edit Leverage</h3>    
 <div class="control-group">
    <div class="controls">
    
      Description of Project: <input class="span6" type="text" placeholder="Also include staff description..." id="new_leverage_project_description" autofocus>
       Item: <select name="leverage_to_update" id="leverage_to_update" class="span3" ></select>
       <br><br>
       Amount: <div class="input-prepend input-append">
  <span class="add-on">$</span>
  <input class="span4" type="text" id="new_leverage_amount" >
  <span class="add-on">.00</span>
</div>
       Funding Type: <select id="new_leverage_funding_type">
  <option>Local Government Funds</option>
  <option>State or Federal Grants</option>
  <option>Foundation/Private Grants</option>
  <option>In-Kind Match</option>
  <option>Other</option>
 </select>
    </div>
  </div>
</div>
 
 <center>
 <input class="btn btn-primary" type="button" id="add_leverage_button" value="Add New Leverage" />
 <input class="btn btn-primary" type="button" id="update_leverage_button" value="Update Leverage Entry" />
 <input class="btn btn-primary" type="button" id="continue_leverage_button"  onclick="location.href='form6.php'" value="Continue" />
 </center>


    </div>
  </div>
</div> 
  
  
  <div class="control-group">
    <div class="controls">
          </div>
  </div>
</form>

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

  

</body></html>