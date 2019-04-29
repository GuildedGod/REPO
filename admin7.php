<?php

?>

<html>

<head>
     <meta charset="utf-8">
     <title>Graphical Report Information</title>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="description" content="">
     <meta name="author" content="">
     <link href="css/bootstrap.css" rel="stylesheet" />
     <link rel="stylesheet" href="css/dynamic_chart.css" />
     <style>
          body {
               padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
          }
     </style>



     <!-- JavaScript Code -->
     <script id="canvas_js" src="js/canvasjs.min.js"></script>
     


     <script src="http://code.jquery.com/jquery-2.0.2.min.js"></script>
     <script id="dynamic_chart_js" src="js/casey_include_dynamic.js"></script>

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
                    </div>
                    <!--/.nav-collapse -->
               </div>
          </div>
     </div>



     <div class="container" id="mainBody">

          <h2>JDAI Graphical Results Administration Dashboard</h2>
          <legend>Submission Details</legend>
          <table id="site_selection_table">

               <tr>
                    <th>Site</th>
                    <th>Report</th>
               </tr>
               <tr>



                    <td id="bel" class="chart_table">
                         <select id="site_selection">
                              <option value="Select Site">Select Site</option>
                         </select>


                    </td>

                    <td class="chart_table">
                         <select id="report_selection">
                              <option value="Select Report">Select Report</option>

                         </select></td>
               </tr>

          </table>
          <div id="colmask">

               <div id="colleft">
                    <div id="col1_l">
                         <br />


                         <br />

                         <br />

                         <table id="headlineIndicators_table" class="table table-bordered table-hover">
                              <tr class="danger">
                                   <!--<th class="chart_table" id="indicator_header">Indicator</th>-->
                                   <td class="danger" id="indicator_header">Indicator</td>

                              </tr>
								
    
                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="adp_p" style="color: blue;">Average Daily Population (ADP)</a><br />
                                        
                                   </td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="annual_admissions_p" style="color: blue;">Annual Admissions</a><br />
                                   </td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="alos_p" style="color: blue;">Avg. Length of Stay (ALOS) in days</a><br />
                                   </td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                       
                                        <a id="yoc_adp_p" style="color: blue;">Youth of Color (YOC) ADP</a></td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="yoc_annual_admissions_p" style="color: blue;">YOC Annual Admissions</a></td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="yoc_alos_p" style="color: blue;">YOC ALOS in days*</a></td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="commitements_p" style="color: blue;">Commitments Total</a></td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="yoc_commitments_p" style="color: blue;">YOC Commitments</a></td>
                              </tr>

                              <!--                                                  -->

                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="fta_rate_p" style="color: blue;">FTA Rate</a></td>
                              </tr>

                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="reArrest_p" style="color: blue;">Re-Arrest Rate</a></td>
                              </tr>

                              <tr class="">
                                   <td class="inner_table">
                                        
                                        <a id="juvenileCrime_p" style="color: blue;">Juvenile Crime</a></td>
                              </tr>

                              <!-- 
                              <tr class="">
                                   <td class="inner_table">
                                        <br />
                                        <a id="juvenile_crime_indicator_p" style="color: blue;">Juvenile Crime Indicator:</a></td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        <br />
                                        <a id="deliquency_pettitions_filed_p" style="color: blue;">Delinquency Petitions FIled</a></td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        <br />
                                        <a id="felony_petitions_filed" style="color: blue;">Felony Petitions Filed</a></td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        <br />
                                        <a id="juvenile_arrests_p" style="color: blue;">Juvenile Arrests</a></td>
                              </tr>
                              <tr class="">
                                   <td class="inner_table">
                                        <br />
                                        <a id="juvenile_intakes_p" style="color: blue;">Juvenile Intakes</a></td>
                              </tr>

-->


                         </table>

                         <br />

                         <br />


                    </div>
                    <div id="col1_r">
                         <div class="wrapper"  style="width: 80%; height: 400px;">



                              <div id="adpChart_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>
                              <div id="admissionsChanges_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>
                              <div id="alos_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>
                              <div id="placements_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>
                              <div id="public_saftey_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>

                              <div id="yocADP_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>

                              <div id="yocAA_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>

                              <div id="yocALOS_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>
                              <div id="yocCommitments_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>
                              <div id="ftaRate_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>

                              <div id="reArrest_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>
                              <div id="juvenileCrime_container" class="invis layer" style="width: 80%; height: 400px;">
                              </div>


                              <br />

                              <br />


                         </div>

                         <div class="wrapper2" style="width: 80%; height: 400px;">


                              <div id="adpData_container" class="hide_this layer" style="width: 80%; height: 400px;">

                                   <h4>Average Daily Population</h4>
                                   ADP Baseline: <strong><span id="adp_baseline"></span></strong>
                                   <br>
                                   ADP Recent: <strong><span id="adp_recent"></span></strong>
                                   <br>
                                   ADP Changes (#): <strong><span id="adp_change_number"></span></strong>
                                   <br>
                                   ADP Changes (%): <strong><span id="adp_change_percent"></span>%</strong><br>
                              </div>

                              <div id="admissionsData_container" class="hide_this layer" style="width: 80%; height: 400px;">

                                   <h4>Annual Admissions</h4>
                                   Annual Admissions Baseline: <strong><span id="annual_admission_baseline"></span></strong>
                                   <br>
                                   Annual Admissions Recent: <strong><span id="annual_admission_recent"></span></strong>
                                   <br>
                                   Admissions Changes (#): <strong><span id="annual_admissions_change_number"></span></strong>
                                   <br>
                                   Admissions Changes (%): <strong><span id="annual_admissions_change_percent"></span>%</strong><br>
                              </div>

                              <div id="alosData_container" class="hide_this layer" style="width: 80%; height: 400px;">
                                   <h4>ALOS</h4>
                                   ALOS Baseline (in Days): <strong><span id="alos_baseline"></span></strong>
                                   <br>
                                   ALOS Recent (in Days):<strong><span id="alos_recent"></span></strong><br>
                                   ALOS Changes (#): <strong><span id="alos_change_number"></span></strong>
                                   <br>
                                   ALOS Changes (%): <strong><span id="alos_change_percent"></span>%</strong><br>
                              </div>

                              <div id="placementsData_container" class="hide_this layer" style="width: 80%; height: 400px;">

                                   <h4>Placements</h4>
                                   State Commitments Baseline: <strong><span id="state_commitment_baseline"></span></strong>
                                   <br>
                                   State Commitments Recent: <strong><span id="state_commitment_recent"></span></strong>
                                   <br>
                                   Commitment Changes (#): <strong><span id="state_commitment_change_number"></span></strong>
                                   <br>
                                   Commitment Changes (%): <strong><span id="state_commitment_change_percent"></span>%</strong><br>
                              </div>

                              <div id="publicSafteyData_container" class="hide_this layer" style="width: 80%; height: 400px;">


                                   <h4>Public Safety</h4>

                              </div>


                              <div id="yocADPData_container" class="hide_this layer" style="width: 80%; height: 400px;">


                                   <h4>YOC ADP</h4>
                                   YOC in ADP Baseline: <strong><span id="yoc_in_adp_baseline"></span></strong>
                                   <br>
                                   YOC in ADP Recent: <strong><span id="yoc_in_adp_recent"></span></strong>
                                   <br>
                                   YOC in ADP Changes (#): <strong><span id="yoc_in_adp_recent_change_number"></span></strong>
                                   <br>
                                   YOC in ADP Changes (%): <strong><span id="yoc_in_adp_recent_change_percent"></span>%</strong><br>
                                   <br>
                              </div>

                              <div id="yocAAData_container" class="hide_this layer" style="width: 80%; height: 400px;">


                                   <h4>YOC Annual Admissions</h4>

                                   # of YOC Admitted Baseline: <strong><span id="yoc_admitted_baseline"></span></strong>
                                   <br>
                                   # of YOC Admitted Recent: <strong><span id="yoc_admitted_recent"></span></strong>
                                   <br>
                                   YOC Admitted Changes (#): <strong><span id="yoc_admitted_change_number"></span></strong>
                                   <br>
                                   YOC Admitted Changes (%): <strong><span id="yoc_admitted_change_percent"></span>%</strong><br>
                              </div>

                              <div id="yocALOSData_container" class="hide_this layer" style="width: 80%; height: 400px;">


                                   <h4>YOC ALOS</h4>

                                   ALOS of YOC Baseline: <strong><span id="alos_of_yoc_baseline"></span></strong>
                                   <br>
                                   ALOS of YOC Recent: <strong><span id="alos_of_yoc_recent"></span></strong>
                                   <br>
                                   YOC ALOS Change (#): <strong><span id="alos_of_yoc_change_number"></span></strong>
                                   <br>
                                   YOC ALOS Change (%): <strong><span id="alos_of_yoc_change_percent"></span>%</strong><br>
                              </div>

                              <div id="yocCommitmentsData_container" class="hide_this layer" style="width: 80%; height: 400px;">


                                   <h4>YOC State Commitments</h4>

                                   # of YOC State Commitments Baseline: <strong><span id="yoc_state_commitments_baseline"></span></strong>
                                   <br>
                                   # of YOC State Commitments Recent: <strong><span id="yoc_state_commitments_recent"></span></strong>
                                   <br>
                                   YOC Committed Changes (#): <strong><span id="yoc_committed_changes_number"></span></strong>
                                   <br>
                                   YOC Committed Changes (%): <strong><span id="yoc_committed_changes_percent"></span>%</strong><br>
                              </div>

                              <div id="ftaRateData_container" class="hide_this layer" style="width: 80%; height: 400px;">


                                   <h4>FTA Rate</h4>
                                   FTA Rate Baseline: <strong><span id="fta_rate_baseline"></span></strong>
                                   <br>
                                   FTA Rate Recent: <strong><span id="fta_rate_recent"></span></strong>
                                   <br>
                                   FTA Rate Change (#): <strong><span id="fta_rate_change_number"></span></strong>

                                  <br> FTA Indicator:
                    
                                   <strong><span id="fta_indicator2"></span></strong>
                                   <br>
                              </div>

                              <div id="reArrestData_container" class="hide_this layer" style="width: 80%; height: 400px;">


                                   <h4>Re Arrests</h4>
                                   Re-Arrest Baseline (%): <strong><span id="re_arrest_baseline"></span></strong>
                                   <br>
                                   Re-Arrest Recent: <strong><span id="re_arrest_recent"></span></strong>
                                   <br>
                                   Re-Arrest Rate Change (#): <strong><span id="re_arrest_rate_change"></span></strong>

                                    <br/>
                                   Re-Arrest Indicator:<strong><span id="re_arrest_indicator2"></span></strong>
                                   <br/>
                              </div>

                              <div id="juvenileCrimeData_container" class="hide_this layer" style="width: 80%; height: 400px;">


                                   <h4>Juvenile Crime</h4>
                                   Juvenile Crime Baseline: <strong><span id="juvenile_crime_baseline"></span></strong>
                                   <br>
                                   Juvenile Crime Recent: <strong><span id="juvenile_crime_recent"></span></strong>
                                   <br>
                                   JuvCrime Changes (#) <strong><span id="juvenile_crime_change_number"></span></strong>
                                   <br>
                                   JuvCrime Changes (%) <strong><span id="juvenile_crime_change_percent"></span>%</strong><br>
                                   Juvenile Crime Indicator:
                    
                                   <strong><span id="juvenile_crime_indicator2"></span></strong>
                                   <br/>
                              </div>

                         </div>



                    </div>
               </div>
          </div>
     </div>


     <div id="left-column">
     </div>
     <div id="right-column">
     </div>



     

</body>
</html>
