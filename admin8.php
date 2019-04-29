<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>All Submissions | JDAI Results Administration Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Yearly graphical data</title>
    
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
                            
    <!-- CSS -->
    <link rel="stylesheet" href="css/yearly_chart.css" />
    <!-- JavaScript Code -->
    <script id="canvas_js" src="js/canvasjs.min.js"></script>
	<script src="http://code.jquery.com/jquery-2.0.2.min.js"></script> 
    <!--<script src="js/jquery-2.1.1.min.js"></script>-->
    <script src="js/casey_include_admin8.js"></script>

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
    
    <!-- ====================================================        
        Default navigation buttons
     =================================================-->

    <div class="container" id="mainBody">

        <h2>JDAI Graphical Results Administration Dashboard</h2>
        <legend>Impact Results Yearly Comparison</legend>
        Site: 
                    <select id="site_selection">
                        <option value="Select Site">Select Site
                        </option>
                    </select>
                    
                    Impact: 
                    <select id="impact_selection" class="span2">
                        <option value="Select Impact">Select Impact</option>
                        <option value="adp">Average Daily Population</option>
                        <option value="aa">Annual Admissions</option>
                        <option value="alos">ALOS</option>
                        <option value="placement">Placement</option>
                        <option value="yoc_adp">YOC ADP</option>
                        <option value="yoc_aa">YOC Annual Admissions</option>
                        <option value="yoc_alos">YOC ALOS</option>
                        <option value="yoc_com">YOC Commitments</option>
                        <option value="fta_rate">FTA Rate</option>
                        <option value="re_arrest">Re Arrest</option>
                        <option value="juvenile_crime">Juvenile Crime</option>
                    </select>
        <br />


        <!-- ====================================================         
        Chart container
     =================================================-->

        <div class="wrapper" style="width: 80%; height: 400px;">
            <div id="yearlyChart_container_adp" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_aa" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_alos" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_placements" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_yocAdp" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_yocCom" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_yocAa" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_yocAlos" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_fta" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_reArr" class="layer" style="width: 100%; height: 400px;">
            </div>
            <div id="yearlyChart_container_juvCrime" class="layer" style="width: 100%; height: 400px;">
            </div>
        </div>



     <!-- ======= Data containers  =====================-->
        <div class="wrapper2" style="width: 80%; height: 400px;">
            <div id="adpData_container" class="hide_this layer" style="width: 80%; height: 400px;">
               <h4>Average Daily Population</h4>
                <table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>ADP: <strong><span id="adp_baseline_2009"></span></strong><br></center></td>
                        <td><center>ADP: <strong><span id="adp_baseline_2010"></span></strong><br></center></td>
                        <td><center>ADP: <strong><span id="adp_baseline_2011"></span></strong><br></center></td>
                        <td><center>ADP: <strong><span id="adp_baseline_2012"></span></strong><br></center></td>
                        <td><center>ADP: <strong><span id="adp_recent_2013"></span></strong><br></center></td> 
                        <td><center>ADP: <strong><span id="adp_recent_2014"></span></strong><br></center></td>
                    </tr>
                </table>
            </div>

            <div id="admissionsData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>Annual Admissions</h4>
					<table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>Annual Admissions: <strong><span id="annual_admission_baseline_2009">
                        </span></strong><br></center></td>
                        <td><center>Annual Admissions: <strong><span id="annual_admission_baseline_2010">
                        </span></strong><br></center></td>
                        <td><center>Annual Admissions: <strong><span id="annual_admission_baseline_2011">
                        </span></strong><br></center></td>
                        <td><center>Annual Admissions: <strong><span id="annual_admission_baseline_2012">
                        </span></strong><br></center></td>
                        <td><center>Annual Admissions: <strong><span id="annual_admission_recent_2013">
                        </span></strong><br></center></td> 
                        <td><center>Annual Admissions: <strong><span id="annual_admission_recent_2014">
                        </span></strong><br></center></td>
                    </tr>
                </table>
            </div>

            <div id="alosData_container" class="hide_this layer" style="width: 80%; height: 400px;">
				<h4>ALOS</h4>
				  <table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>ALOS (in Days): <strong><span id="alos_baseline_2009">
                        </span></strong><br></center></td>
                        <td><center>ALOS (in Days): <strong><span id="alos_baseline_2010">
                        </span></strong><br></center></td>
                        <td><center>ALOS (in Days): <strong><span id="alos_baseline_2011">
                        </span></strong><br></center></td>
                        <td><center>ALOS (in Days): <strong><span id="alos_baseline_2012">
                        </span></strong><br></center></td>
                        <td><center>ALOS (in Days): <strong><span id="alos_recent_2013">
                        </span></strong><br></center></td> 
                        <td><center>ALOS (in Days): <strong><span id="alos_recent_2014">
                        </span></strong><br></center></td>
                    </tr>
                </table>
            </div>

            <div id="placementsData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>State Commitments</h4>
				<table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>State Commitments: <strong><span id="state_commitment_baseline_2009">
                        </span></strong><br></center></td>
                        <td><center>State Commitments: <strong><span id="state_commitment_baseline_2010">
                        </span></strong><br></center></td>
                        <td><center>State Commitments: <strong><span id="state_commitment_baseline_2011">
                        </span></strong><br></center></td>
                        <td><center>State Commitments: <strong><span id="state_commitment_baseline_2012">
                        </span></strong><br></center></td>
                        <td><center>State Commitments: <strong><span id="state_commitment_recent_2013">
                        </span></strong><br></center></td> 
                        <td><center>State Commitments: <strong><span id="state_commitment_recent_2014">
                        </span></strong><br></center></td>
                    </tr>
                </table>
            </div>

            <div id="yocADPData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>YOC ADP</h4>
                <table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>YOC ADP: <strong><span id="yoc_in_adp_baseline_2009">
                        </span></strong><br></center></td>
                        <td><center>YOC ADP: <strong><span id="yoc_in_adp_baseline_2010">
                        </span></strong><br></center></td>
                        <td><center>YOC ADP: <strong><span id="yoc_in_adp_baseline_2011">
                        </span></strong><br></center></td>
                        <td><center>YOC ADP: <strong><span id="yoc_in_adp_baseline_2012">
                        </span></strong><br></center></td>
                        <td><center>YOC ADP: <strong><span id="yoc_in_adp_recent_2013">
                        </span></strong><br></center></td> 
                        <td><center>YOC ADP: <strong><span id="yoc_in_adp_recent_2014">
                        </span></strong><br></center></td>
                    </tr><br>
                </table>   
            </div>

            <div id="yocAAData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>YOC Annual Admissions</h4>
				 <table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>YOC Admitted: <strong><span id="yoc_admitted_baseline_2009">
                        </span></strong><br></center></td>
                        <td><center>YOC Admitted: <strong><span id="yoc_admitted_baseline_2010">
                        </span></strong><br></center></td>
                        <td><center>YOC Admitted: <strong><span id="yoc_admitted_baseline_2011">
                        </span></strong><br></center></td>
                        <td><center>YOC Admitted: <strong><span id="yoc_admitted_baseline_2012">
                        </span></strong><br></center></td>
                        <td><center>YOC Admitted: <strong><span id="yoc_admitted_recent_2013">
                        </span></strong><br></center></td> 
                        <td><center>YOC Admitted: <strong><span id="yoc_admitted_recent_2014">
                        </span></strong><br></center></td>
                    </tr><br>
                </table>
            </div>

            <div id="yocALOSData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>YOC ALOS</h4>
				<table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>ALOS of YOC: <strong><span id="alos_of_yoc_baseline_2009">
                        </span></strong><br></center></td>
                        <td><center>ALOS of YOC: <strong><span id="alos_of_yoc_baseline_2010">
                        </span></strong><br></center></td>
                        <td><center>ALOS of YOC: <strong><span id="alos_of_yoc_baseline_2011">
                        </span></strong><br></center></td>
                        <td><center>ALOS of YOC: <strong><span id="alos_of_yoc_baseline_2012">
                        </span></strong><br></center></td>
                        <td><center>ALOS of YOC: <strong><span id="alos_of_yoc_recent_2013">
                        </span></strong><br></center></td> 
                        <td><center>ALOS of YOC: <strong><span id="alos_of_yoc_recent_2014">
                        </span></strong><br></center></td>
                    </tr><br>
                </table>         
            </div>

            <div id="yocCommitmentsData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>YOC State Commitments</h4>
                <table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center># of YOC State Commitments: <strong><span id="yoc_state_commitments_baseline_2009">
                        </span></strong><br></center></td>
                        <td><center># of YOC State Commitments: <strong><span id="yoc_state_commitments_baseline_2010">
                        </span></strong><br></center></td>
                        <td><center># of YOC State Commitments: <strong><span id="yoc_state_commitments_baseline_2011">
                        </span></strong><br></center></td>
                        <td><center># of YOC State Commitments: <strong><span id="yoc_state_commitments_baseline_2012">
                        </span></strong><br></center></td>
                        <td><center># of YOC State Commitments: <strong><span id="yoc_state_commitments_recent_2013">
                        </span></strong><br></center></td> 
                        <td><center># of YOC State Commitments: <strong><span id="yoc_state_commitments_recent_2014">
                        </span></strong><br></center></td>
                    </tr><br>
                </table> 
            </div>

            <div id="ftaRateData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>FTA Rate</h4>
                <table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>FTA Rate: <strong><span id="fta_rate_baseline_2009"></span>
                        <br>FTA Indicator:<span id="fta_indicator2_2009"></span></strong><br></center></td>
                        <td><center>FTA Rate: <strong><span id="fta_rate_baseline_2010"></span>
                        <br>FTA Indicator:<span id="fta_indicator2_2010"></span></strong><br></center></td>
                        <td><center>FTA Rate: <strong><span id="fta_rate_baseline_2011"></span>
                        <br>FTA Indicator:<span id="fta_indicator2_2011"></span></strong><br></center></td>
                        <td><center>FTA Rate: <strong><span id="fta_rate_baseline_2012"></span>
                        <br>FTA Indicator:<span id="fta_indicator2_2012"></span></strong><br></center></td>
                        <td><center>FTA Rate: <strong><span id="fta_rate_recent_2013"></span>
                        <br>FTA Indicator:<span id="fta_indicator2_2013"></span></strong><br></center></td> 
                        <td><center>FTA Rate: <strong><span id="fta_rate_recent_2014"></span>
                        <br>FTA Indicator:<span id="fta_indicator2_2014"></span></strong><br></center></td>
                    </tr><br>
                </table> 
            </div>

            <div id="reArrestData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>Re Arrests</h4>
				<table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                    </tr>
                    <tr>
						<td><center>Re-Arrest (%): <strong><span id="re_arrest_baseline_2009"></span>
                        <br>Re-Arrest Indicator:<span id="re_arrest_indicator2_2009"></span></strong><br></center></td>
                        <td><center>Re-Arrest (%): <strong><span id="re_arrest_baseline_2010"></span>
                        <br>Re-Arrest Indicator:<span id="re_arrest_indicator2_2010"></span></strong><br></center></td>
                        <td><center>Re-Arrest (%): <strong><span id="re_arrest_baseline_2011"></span>
                        <br>Re-Arrest Indicator:<span id="re_arrest_indicator2_2011"></span></strong><br></center></td>
                        <td><center>Re-Arrest (%): <strong><span id="re_arrest_baseline_2012"></span>
                        <br>Re-Arrest Indicator:<span id="re_arrest_indicator2_2012"></span></strong><br></center></td>
                        <td><center>Re-Arrest (%): <strong><span id="re_arrest_recent_2013"></span>
                        <br>Re-Arrest Indicator:<span id="re_arrest_indicator2_2013"></span></strong><br></center></td> 
                        <td><center>Re-Arrest (%): <strong><span id="re_arrest_recent_2014"></span>
                        <br>Re-Arrest Indicator:<span id="re_arrest_indicator2_2014"></span></strong><br></center></td>
                    </tr><br>
                </table> 
            </div>

            <div id="juvenileCrimeData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                <h4>Juvenile Crime</h4>
				<table class="table table-bordered table-striped">
                    <tr>
                        <th><center><h4>2009</h4></center></th>
                        <th><center><h4>2010</h4></center></th>
                        <th><center><h4>2011</h4></center></th>
                        <th><center><h4>2012</h4></center></th>
                        <th><center><h4>2013</h4></center></th>
                        <th><center><h4>2014</h4></center></th>
                   </tr>
                    <tr>
					 <td><center>Juvenile Crime: <strong><span id="juvenile_crime_baseline_2009"></span></strong><br>
                     Juvenile Crime Indicator:<strong><span id="juvenile_crime_indicator2_2009"></span></strong><br></center></td>
                     <td><center>Juvenile Crime: <strong><span id="juvenile_crime_baseline_2010"></span></strong><br>
                     Juvenile Crime Indicator:<strong><span id="juvenile_crime_indicator2_2010"></span></strong><br></center></td>
                     <td><center>Juvenile Crime: <strong><span id="juvenile_crime_baseline_2011"></span></strong><br>
                     Juvenile Crime Indicator:<strong><span id="juvenile_crime_indicator2_2011"></span></strong><br></center></td>
                     <td><center>Juvenile Crime: <strong><span id="juvenile_crime_baseline_2012"></span></strong><br>
                     Juvenile Crime Indicator:<strong><span id="juvenile_crime_indicator2_2012"></span></strong><br></center></td>
                     <td><center>Juvenile Crime: <strong><span id="juvenile_crime_recent_2013"></span></strong><br>
                     Juvenile Crime Indicator:<strong><span id="juvenile_crime_indicator2_2013"></span></strong><br></center></td>
                     <td><center>Juvenile Crime: <strong><span id="juvenile_crime_recent_2014"></span></strong><br>
                     Juvenile Crime Indicator:<strong><span id="juvenile_crime_indicator2_2014"></span></strong><br></center></td>
                    </tr><br>
                </table>   
            </div>
        </div>

		<footer>
        <center><p>© 2014 The Annie E. Casey Foundation | Privacy Statement | Terms of Use</p></center>
      </footer>

    </div> <!-- /container -->

    </div>
</body>


</html>
