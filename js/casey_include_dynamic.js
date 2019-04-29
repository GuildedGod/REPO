

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
//---------------- jifill variables----------------------
var globalSeverData = {};
var currentReport = {};

var globalSitesList = [];
var globalReportList = [];


function hideChart() {


     // hide all info divs


     // hide chart divs
     $("#adpChart_container").addClass("invis");
     $("#admissionsChanges_container").addClass("invis");
     $("#alos_container").addClass("invis");
     $("#placements_container").addClass("invis");
     $("#public_saftey_container").addClass("invis");

     $("#yocADP_container").addClass("invis");
     $("#yocAA_container").addClass("invis");
     $("#yocALOS_container").addClass("invis");
     $("#yocCommitments_container").addClass("invis");

     $("#ftaRate_container").addClass("invis");
     $("#reArrest_container").addClass("invis");
     $("#juvenileCrime_container").addClass("invis");

     // hide all chart divs


}


function hideInfo() {

     $("#adpData_container").addClass("hide_this");
     $("#admissionsData_container").addClass("hide_this");
     $("#alosData_container").addClass("hide_this");
     $("#placementsData_container").addClass("hide_this");
     $("#racialEthnicDisproportionalityData_container").addClass("hide_this");
     $("#yocADPData_container").addClass("hide_this");
     $("#yocAAData_container").addClass("hide_this");
     $("#yocALOSData_container").addClass("hide_this");
     $("#yocCommitmentsData_container").addClass("hide_this");
     $("#ftaRateData_container").addClass("hide_this");
     $("#reArrestData_container").addClass("hide_this");
     $("#juvenileCrimeData_container").addClass("hide_this");


}

function fillAllDivData() {
     // fill all div data


     //---------------
     $("#adp_baseline").text(currentReport.adp_baseline)
     $("#adp_recent").text(currentReport.adp_recent)
     var adp_baseline_minus_recent = currentReport.adp_recent - currentReport.adp_baseline;
     var adp_baseline_minus_recent_percent = adp_baseline_minus_recent / currentReport.adp_baseline * 100;

     $("#adp_change_number").text(adp_baseline_minus_recent.toFixed(1))
     $("#adp_change_percent").text(adp_baseline_minus_recent_percent.toFixed(1))



     //----------------------------------
     $("#annual_admission_baseline").text(currentReport.annual_admission_baseline);
     $("#annual_admission_recent").text(currentReport.annual_admission_recent);

     var annual_admission_baseline_minus_recent = currentReport.annual_admission_recent - currentReport.annual_admission_baseline;

     var annual_admissions_change_percent = annual_admission_baseline_minus_recent / currentReport.annual_admission_baseline * 100;



     $("#annual_admissions_change_number").text(annual_admission_baseline_minus_recent.toFixed(1));
     $("#annual_admissions_change_percent").text(annual_admissions_change_percent.toFixed(1));


     //----------------------

     $("#alos_baseline").text(currentReport.alos_baseline);
     $("#alos_recent").text(currentReport.alos_recent);

     var alos_baseline_minus_recent = currentReport.alos_recent - currentReport.alos_baseline;
     $('#alos_change_number').text(alos_baseline_minus_recent.toFixed(1));
     var alos_change_percent = alos_baseline_minus_recent / currentReport.alos_baseline * 100;
     $('#alos_change_percent').text(alos_change_percent.toFixed(1));
     //--------------------------------

     $("#state_commitment_baseline").text(currentReport.state_commitment_baseline);
     $("#state_commitment_recent").text(currentReport.state_commitment_recent);

     var state_commitment_baseline_minus_recent = currentReport.state_commitment_recent - currentReport.state_commitment_baseline;
     $('#state_commitment_change_number').text(state_commitment_baseline_minus_recent.toFixed(1));
     var state_commitment_change_percent = state_commitment_baseline_minus_recent / currentReport.state_commitment_baseline * 100;
     $('#state_commitment_change_percent').text(state_commitment_change_percent.toFixed(1));

     //-------------------------------

     $("#fta_rate_baseline").text((currentReport.fta_rate_baseline * 100).toFixed(1));
     $("#fta_rate_recent").text((currentReport.fta_rate_recent * 100).toFixed(1));


     var fta_rate_baseline_minus_recent = (currentReport.fta_rate_recent - currentReport.fta_rate_baseline) * 100;
     $('#fta_rate_change_number').text(fta_rate_baseline_minus_recent.toFixed(1));

     $("#re_arrest_baseline").text((currentReport.re_arrest_baseline * 100).toFixed(1));

     $("#re_arrest_recent").text((currentReport.re_arrest_recent * 100).toFixed(1));

     var re_arrest_baseline_minus_recent = (currentReport.re_arrest_recent - currentReport.re_arrest_baseline) * 100;
     $('#re_arrest_rate_change').text(re_arrest_baseline_minus_recent.toFixed(1));

     $("#juvenile_crime_baseline").text(currentReport.juvenile_crime_baseline);
     $("#juvenile_crime_recent").text(currentReport.juvenile_crime_recent);

     var juvenile_crime_baseline_minus_recent = currentReport.juvenile_crime_recent - currentReport.juvenile_crime_baseline;
     $('#juvenile_crime_change_number').text(juvenile_crime_baseline_minus_recent.toFixed(1));
     var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent / currentReport.juvenile_crime_baseline * 100;
     $('#juvenile_crime_change_percent').text(juvenile_crime_change_percent.toFixed(1));

     $("#fta_indicator2").text(currentReport.fta_indicator);
     $("#re_arrest_indicator2").text(currentReport.re_arrest_indicator);
     $("#juvenile_crime_indicator2").text(currentReport.juvenile_crime_indicator);


     //--------------------------
     $("#yoc_in_adp_baseline").text(currentReport.yoc_in_adp_baseline);
     $("#yoc_in_adp_recent").text(currentReport.yoc_in_adp_recent);

     var yoc_in_adp_baseline_minus_recent = currentReport.yoc_in_adp_recent - currentReport.yoc_in_adp_baseline;
     $('#yoc_in_adp_recent_change_number').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
     var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent / currentReport.yoc_in_adp_baseline * 100;
     $('#yoc_in_adp_recent_change_percent').text(yoc_in_adp_change_percent.toFixed(1));

     $("#yoc_state_commitments_baseline").text(currentReport.yoc_state_commitments_baseline);
     $("#yoc_state_commitments_recent").text(currentReport.yoc_state_commitments_recent);

     var yoc_state_commitments_baseline_minus_recent = currentReport.yoc_state_commitments_recent - currentReport.yoc_state_commitments_baseline;
     $('#yoc_committed_changes_number').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
     var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent / currentReport.yoc_state_commitments_baseline * 100;
     $('#yoc_committed_changes_percent').text(yoc_state_commitments_change_percent.toFixed(1));


     $("#yoc_admitted_baseline").text(currentReport.yoc_admitted_baseline);
     $("#yoc_admitted_recent").text(currentReport.yoc_admitted_recent);

     var yoc_admitted_baseline_minus_recent = currentReport.yoc_admitted_recent - currentReport.yoc_admitted_baseline;
     $('#yoc_admitted_change_number').text(yoc_admitted_baseline_minus_recent.toFixed(1));
     var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent / currentReport.yoc_admitted_baseline * 100;
     $('#yoc_admitted_change_percent').text(yoc_admitted_change_percent.toFixed(1));

     $("#alos_of_yoc_baseline").text(currentReport.alos_of_yoc_baseline);
     $("#alos_of_yoc_recent").text(currentReport.alos_of_yoc_recent);

     var alos_of_yoc_baseline_minus_recent = currentReport.alos_of_yoc_recent - currentReport.alos_of_yoc_baseline;
     $('#alos_of_yoc_change_number').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
     var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent / currentReport.alos_of_yoc_baseline * 100;
     $('#alos_of_yoc_change_percent').text(alos_of_yoc_change_percent.toFixed(1));





}
function fillDivData(divIndicator) {


     switch (divIndicator) {

          case "adp":

               $("#adp_baseline").text(currentReport.adp_baseline)
               $("#adp_recent").text(currentReport.adp_recent)
               var adp_baseline_minus_recent = currentReport.adp_recent - currentReport.adp_baseline;
               var adp_baseline_minus_recent_percent = adp_baseline_minus_recent / currentReport.adp_baseline * 100;

               $("#adp_change_number").text(adp_baseline_minus_recent.toFixed(1))
               $("#adp_change_percent").text(adp_baseline_minus_recent_percent.toFixed(1))



               break;

          case "admissions":

               $("#annual_admission_baseline").text(currentReport.annual_admission_baseline);
               $("#annual_admission_recent").text(currentReport.annual_admission_recent);

               var annual_admission_baseline_minus_recent = currentReport.annual_admission_recent - currentReport.annual_admission_baseline;

               var annual_admissions_change_percent = annual_admission_baseline_minus_recent / currentReport.annual_admission_baseline * 100;



               $("#annual_admissions_change_number").text(annual_admission_baseline_minus_recent.toFixed(1));
               $("#annual_admissions_change_percent").text(annual_admissions_change_percent.toFixed(1));
               break;

          case "alos":

               $("#alos_baseline").text(currentReport.alos_baseline);
               $("#alos_recent").text(currentReport.alos_recent);

               var alos_baseline_minus_recent = currentReport.alos_recent - currentReport.alos_baseline;
               $('#alos_change_number').text(alos_baseline_minus_recent.toFixed(1));
               var alos_change_percent = alos_baseline_minus_recent / currentReport.alos_baseline * 100;
               $('#alos_change_percent').text(alos_change_percent.toFixed(1));
               break;

          case "placements":

               $("#state_commitment_baseline").text(currentReport.state_commitment_baseline);
               $("#state_commitment_recent").text(currentReport.state_commitment_recent);

               var state_commitment_baseline_minus_recent = currentReport.state_commitment_recent - currentReport.state_commitment_baseline;
               $('#state_commitment_change_number').text(state_commitment_baseline_minus_recent.toFixed(1));
               var state_commitment_change_percent = state_commitment_baseline_minus_recent / currentReport.state_commitment_baseline * 100;
               $('#state_commitment_change_percent').text(state_commitment_change_percent.toFixed(1));

               break;

          case "publicsaftey":

               $("#fta_rate_baseline").text((currentReport.fta_rate_baseline * 100).toFixed(1));
               $("#fta_rate_recent").text((currentReport.fta_rate_recent * 100).toFixed(1));


               var fta_rate_baseline_minus_recent = (currentReport.fta_rate_recent - currentReport.fta_rate_baseline) * 100;
               $('#fta_rate_change_number').text(fta_rate_baseline_minus_recent.toFixed(1));

               $("#re_arrest_baseline").text((currentReport.re_arrest_baseline * 100).toFixed(1));

               $("#re_arrest_recent").text((currentReport.re_arrest_recent * 100).toFixed(1));

               var re_arrest_baseline_minus_recent = (currentReport.re_arrest_recent - currentReport.re_arrest_baseline) * 100;
               $('#re_arrest_rate_change').text(re_arrest_baseline_minus_recent.toFixed(1));

               $("#juvenile_crime_baseline").text(currentReport);
               $("#juvenile_crime_recent").text(currentReport);

               var juvenile_crime_baseline_minus_recent = currentReport.juvenile_crime_recent - currentReport.juvenile_crime_baseline;
               $('#juvenile_crime_change_number').text(juvenile_crime_baseline_minus_recent.toFixed(1));
               var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent / currentReport.juvenile_crime_baseline * 100;
               $('#juvenile_crime_change_percent').text(juvenile_crime_change_percent.toFixed(1));

               $("#fta_indicator2").text(currentReport.fta_indicator);
               $("#re_arrest_indicator2").text(currentReport.re_arrest_indicator);
               $("#juvenile_crime_indicator2").text(currentReport.juvenile_crime_indicator);
               break;


          case "yoc":
               $("#yoc_in_adp_baseline").text(currentReport.yoc_in_adp_baseline);
               $("#yoc_in_adp_recent").text(currentReport.yoc_in_adp_recent);

               var yoc_in_adp_baseline_minus_recent = currentReport.yoc_in_adp_recent - currentReport.yoc_in_adp_baseline;
               $('#yoc_in_adp_recent_change_number').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
               var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent / currentReport.yoc_in_adp_baseline * 100;
               $('#yoc_in_adp_recent_change_percent').text(yoc_in_adp_change_percent.toFixed(1));

               $("#yoc_state_commitments_baseline").text(currentReport.yoc_state_commitments_baseline);
               $("#yoc_state_commitments_recent").text(currentReport.yoc_state_commitments_recent);

               var yoc_state_commitments_baseline_minus_recent = currentReport.yoc_state_commitments_recent - currentReport.yoc_state_commitments_baseline;
               $('#yoc_committed_changes_number').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
               var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent / currentReport.yoc_state_commitments_baseline * 100;
               $('#yoc_committed_changes_percent').text(yoc_state_commitments_change_percent.toFixed(1));


               $("#yoc_admitted_baseline").text(currentReport.yoc_admitted_baseline);
               $("#yoc_admitted_recent").text(currentReport.yoc_admitted_recent);

               var yoc_admitted_baseline_minus_recent = currentReport.yoc_admitted_recent - currentReport.yoc_admitted_baseline;
               $('#yoc_admitted_change_number').text(yoc_admitted_baseline_minus_recent.toFixed(1));
               var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent / currentReport.yoc_admitted_baseline * 100;
               $('#yoc_admitted_change_percent').text(yoc_admitted_change_percent.toFixed(1));

               $("#alos_of_yoc_baseline").text(currentReport.alos_of_yoc_baseline);
               $("#alos_of_yoc_recent").text(currentReport.alos_of_yoc_recent);

               var alos_of_yoc_baseline_minus_recent = currentReport.alos_of_yoc_recent - currentReport.alos_of_yoc_baseline;
               $('#alos_of_yoc_change_number').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
               var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent / currentReport.alos_of_yoc_baseline * 100;
               $('#alos_of_yoc_change_percent').text(alos_of_yoc_change_percent.toFixed(1));


               break;


          default:

               break;
     }






}
function renderChart(reportObj, chartType) // also shows graphical info
{
     hideInfo();
     hideChart();
     var siteval = $("#site_selection").val();

     var reportval = $("#report_selection").val();

     if (!(siteval == "Select Site")) {

          console.log('foo1');
          console.log("value of site selectbox is: " + $("#site_selection").val());
          if (!(reportval == "Select Report")) {

               // make all charts


               console.log("current report data: ");
               console.dir(currentReport);


               console.log("Type of adp is: " + typeof (currentReport.adp_baseline));

               console.log("Type of parse adp is: " + typeof (parseFloat(currentReport.adp_baseline)));


               //---------------------------------------------------------------------------------------
               var adp_chart = new CanvasJS.Chart("adpChart_container", {

                    title: {
                         text: "Average Daily Population Changes"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object

                           /*** Change type "column" to "bar", "area", "line" or "pie"***/
                           type: "column",
                           dataPoints: [
                           { label: "baseline", y: parseFloat(currentReport.adp_baseline) },
                           { label: "recent", y: parseFloat(currentReport.adp_recent) }
                           ]
                      }
                    ]
               });


               //---------------------------------------------------------------------------------------

               var admissions_chart = new CanvasJS.Chart("admissionsChanges_container", {

                    title: {
                         text: "Annual Admissions Changes"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "baseline", y: parseFloat(currentReport.annual_admission_baseline) },
                           { label: "recent", y: parseFloat(currentReport.annual_admission_recent) }
                           ]
                      }
                    ]
               });

               //---------------------------------------------------------------------------------------
               var alos_chart = new CanvasJS.Chart("alos_container", {

                    title: {
                         text: "ALOS Changes"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat(currentReport.alos_baseline) },
                           { label: "Recent", y: parseFloat(currentReport.alos_recent) }
                           ]
                      }
                    ]
               });


               //---------------------------------------------------------------------------------------
               var placements_chart = new CanvasJS.Chart("placements_container", {

                    title: {
                         text: "Placement Changes"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat(currentReport.state_commitment_baseline) },
                           { label: "Recent", y: parseFloat(currentReport.state_commitment_recent) }
                           ]
                      }
                    ]
               });


               //---------------------------------------------------------------------------------------
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
                           { label: "FTA Rate", y: (parseFloat(currentReport.fta_rate_baseline) * 100).toFixed(1) },
                           { label: "Re-Arrest", y: (parseFloat(currentReport.re_arrest_baseline) * 100).toFixed(1) },
                           { label: "Juvenile Crime", y: parseFloat(currentReport.juvenile_crime_baseline) }
                           ]
                      },

                       { //dataSeries object


                            type: "column",
                            showInLegend: true,
                            name: "Baseline",
                            legendText: "Baseline",
                            dataPoints: [
                            { label: "FTA Rate", y: (parseFloat(currentReport.fta_rate_recent) * 100).toFixed(1) },
                            { label: "Re-Arrest", y: (parseFloat(currentReport.re_arrest_recent) * 100).toFixed(1) },
                            { label: "Juvenile Crime", y: parseFloat(currentReport.juvenile_crime_recent) }
                            ]
                       }


                    ]
               });

               //---------------------------------------------------------------------------------------
               var race_disproportionality_chart = new CanvasJS.Chart("racial_ethnic_disproportionality_container", {

                    title: {
                         text: "Race Disproportionality"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           showInLegend: true,
                           name: "Baseline",
                           legendText: "Baseline",
                           dataPoints: [
                           { label: "YOC in ADP", y: parseFloat(currentReport.yoc_in_adp_baseline) },
                           { label: "# of YOC State Commitements", y: parseFloat(currentReport.yoc_state_commitments_baseline) },
                           { label: "# of YOC Admitted", y: parseFloat(currentReport.yoc_admitted_baseline) },
                           { label: "ALOS of YOC", y: parseFloat(currentReport.alos_of_yoc_baseline) }
                           ]
                      },

                       { //dataSeries object


                            type: "column",
                            showInLegend: true,
                            name: "Recent",
                            legendText: "Recent",
                            dataPoints: [
                            { label: "YOC in ADP", y: parseFloat(currentReport.yoc_in_adp_recent) },
                           { label: "# of YOC State Commitements", y: parseFloat(currentReport.yoc_state_commitments_recent) },
                           { label: "# of YOC Admitted", y: parseFloat(currentReport.yoc_admitted_recent) },
                           { label: "ALOS of YOC", y: parseFloat(currentReport.alos_of_yoc_recent) }

                            ]
                       }


                    ]
               });



               //---------------------------------------------------------------------------------------
               var yocADP_chart = new CanvasJS.Chart("yocADP_container", {

                    title: {
                         text: "YOC ADP"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat(currentReport.yoc_in_adp_baseline) },
                           { label: "Recent", y: parseFloat(currentReport.yoc_in_adp_recent) }
                           ]
                      }
                    ]
               });
               //---------------------------------------------------------------------------------------

               var yocCommitments_chart = new CanvasJS.Chart("yocCommitments_container", {

                    title: {
                         text: "YOC Commitments"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat(currentReport.yoc_state_commitments_baseline) },
                           { label: "Recent", y: parseFloat(currentReport.yoc_state_commitments_recent) }
                           ]
                      }
                    ]
               });

               //---------------------------------------------------------------------------------------

               var yocAdmitted_chart = new CanvasJS.Chart("yocAA_container", {

                    title: {
                         text: "YOC Annual Admissions"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat(currentReport.yoc_admitted_baseline) },
                           { label: "Recent", y: parseFloat(currentReport.yoc_admitted_recent) }
                           ]
                      }
                    ]
               });

               //---------------------------------------------------------------------------------------

               //ALOS 

               var yocALOS_chart = new CanvasJS.Chart("yocALOS_container", {

                    title: {
                         text: "YOC ALOS"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat(currentReport.alos_of_yoc_baseline) },
                           { label: "Recent", y: parseFloat(currentReport.alos_of_yoc_recent) }
                           ]
                      }
                    ]
               });


               //---------------------------------------------------------------------------------------

               //FTA 

               var ftaRate_chart = new CanvasJS.Chart("ftaRate_container", {

                    title: {
                         text: "FTA Rate"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat((currentReport.fta_rate_baseline * 100).toFixed(1)) },
                           { label: "Recent", y: parseFloat((currentReport.fta_rate_recent * 100).toFixed(1)) }
                           ]
                      }
                    ]
               });



               //---------------------------------------------------------------------------------------

               //Re Arrest 


               var reArrest_chart = new CanvasJS.Chart("reArrest_container", {

                    title: {
                         text: "Re Arrest"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat((currentReport.re_arrest_baseline * 100).toFixed(1)) },
                           { label: "Recent", y: parseFloat((currentReport.re_arrest_recent * 100).toFixed(1)) }
                           ]
                      }
                    ]
               });


               //---------------------------------------------------------------------------------------

               //Juvenile Crime 

               var juvenileCrime_chart = new CanvasJS.Chart("juvenileCrime_container", {

                    title: {
                         text: "Juvenile Crime"
                    },
                    data: [//array of dataSeries              
                      { //dataSeries object


                           type: "column",
                           dataPoints: [
                           { label: "Baseline", y: parseFloat(currentReport.juvenile_crime_baseline) },
                           { label: "Recent", y: parseFloat(currentReport.juvenile_crime_recent) }
                           ]
                      }
                    ]
               });

               // render selected charts


               hideInfo();
               hideChart();
               switch (chartType) {

                    case "adp":

                         console.log("adp chart render");

                         adp_chart.render();
                         $("#adpChart_container").removeClass("invis");
                         $("#adpData_container").removeClass("hide_this");

                         break;

                    case "aa":
                         console.log("aa chart render");
                         admissions_chart.render();
                         $("#admissionsChanges_container").removeClass("invis");
                         $("#admissionsData_container").removeClass("hide_this");
                         break;

                    case "alos":
                         console.log("alos chart render");
                         alos_chart.render();
                         $("#alos_container").removeClass("invis");
                         $("#alosData_container").removeClass("hide_this");
                         break;
                    case "yoc_adp":
                         console.log("yoc adp chart render");
                         yocADP_chart.render();
                         $("#yocADP_container").removeClass("invis");
                         $("#yocADPData_container").removeClass("hide_this");
                         break;
                    case "yoc_aa":
                         console.log("yoc aa chart render");
                         yocAdmitted_chart.render();
                         $("#yocAA_container").removeClass("invis");
                         $("#yocAAData_container").removeClass("hide_this");
                         break;
                    case "yoc_alos":
                         console.log("yoc alos chart render");
                         yocALOS_chart.render();
                         $("#yocALOS_container").removeClass("invis");
                         $("#yocALOSData_container").removeClass("hide_this");
                         break;
                    case "commitments":
                         console.log("commitments chart render");
                         placements_chart.render();
                         $("#placements_container").removeClass("invis");
                         $("#placementsData_container").removeClass("hide_this");
                         break;
                    case "yoc_commitments":
                         console.log("yoc commitments chart render");
                         yocCommitments_chart.render();
                         $("#yocCommitments_container").removeClass("invis");
                         $("#yocCommitmentsData_container").removeClass("hide_this");
                         break;
                    case "fta_rate":
                         ftaRate_chart.render();
                         $("#ftaRate_container").removeClass("invis");
                         $("#ftaRateData_container").removeClass("hide_this");
                         break;
                    case "re_arrest":
                         reArrest_chart.render();
                         $("#reArrest_container").removeClass("invis");
                         $("#reArrestData_container").removeClass("hide_this");
                         break;
                    case "juvenileCrime":
                         juvenileCrime_chart.render();
                         $("#juvenileCrime_container").removeClass("invis");
                         $("#juvenileCrimeData_container").removeClass("hide_this");
                         break;




                    default:

                         break;

               }


          }
          else {
               alert("Please select a report!");
          }
     }
     else {
          alert("Please select a site!");
          console.log("foo2");
     }

}

$(document).ready(function () {





     $('#make_form_final_button').click(function () {
          var button_name = "make_form_final_button";
          $.post('php/sql_queries.php', { current_report_ID: current_report_ID, button_name: button_name }, function (data) {
               alert("Report has been marked as completed and is now final");
          });
     });

     // Only show buttons that make sense on the admin page
     if (localStorage.team_leader_name != 'Administration') {
          $('#make_form_final_button').attr("disabled", true);
     }



     // Get all report info
     $.post('php/get_reports.php', function (data) {
          var pushedData = jQuery.parseJSON(data);

          $.extend(globalSeverData, pushedData);
          console.log("Global server data is: ");
          console.dir(globalSeverData);
          $.each(pushedData, function (i, serverData) {

               // Only show the data for the selected report
               if (localStorage.current_report_ID == serverData.report_ID) {

                    // Items for report view
                    //serverData.baseline_start);
                    //serverData.baseline_finish);
                    //serverData.recent_start);
                    //serverData.recent_finish);
                    //serverData.site_name);
                    //serverData.team_leader_ID);
                    //serverData.total_detention_capacity);
                    //serverData.jdai_username);
                    //serverData.team_leader_ID);
                    //serverData.baseline_start);
                    //serverData.baseline_finish);
                    //serverData.recent_start);
                    //serverData.recent_finish);

                    //------------- numbers -------------------------
                    //serverData.adp_baseline);
                    //serverData.adp_recent);
                    //serverData.annual_admission_baseline);
                    //serverData.annual_admission_recent);
                    //serverData.alos_baseline);
                    //serverData.alos_recent);
                    //serverData.state_commitment_baseline);
                    //serverData.state_commitment_recent);
                    //serverData.fta_rate_baseline * 100).toFixed(1));
                    //serverData.fta_rate_recent * 100).toFixed(1));
                    //serverData.juvenile_crime_baseline);
                    //serverData.juvenile_crime_recent);
                    //serverData.re_arrest_baseline * 100).toFixed(1));
                    //serverData.re_arrest_recent * 100).toFixed(1));
                    //serverData.fta_indicator);
                    //serverData.re_arrest_indicator);
                    //serverData.juvenile_crime_indicator);
                    //serverData.yoc_in_adp_baseline);
                    //serverData.yoc_in_adp_recent);
                    //serverData.yoc_state_commitments_baseline);
                    //serverData.yoc_state_commitments_recent);
                    //serverData.yoc_admitted_baseline);
                    //serverData.yoc_admitted_recent);
                    //serverData.alos_of_yoc_baseline);
                    //serverData.alos_of_yoc_recent);
                    //serverData.usability_notes);
                    //serverData.report_notes);


                    // post Average Daily pop chart


               }
          });

     }); // End Post


     //populate site selection selectbox

     $.post('php/get_users.php', function (data) {
          // get site list
          var pushedData = jQuery.parseJSON(data);

          console.log("user obj is: ");
          console.dir(pushedData);



          // assign to global site list

          $.each(pushedData, function (i, serverData) {

               globalSitesList.push(serverData.sitesID)
          });

          // populate site selection box
          var appendVar = "";

          $.each(globalSitesList, function (i, siteID) {


               //     console.log("site ID: " + siteID);

               appendVar = '<option id="' + siteID + '" value="' + siteID + '">' + siteID + '</option>';
               $("#site_selection").append(appendVar);
          });

     });



     $("#site_selection").change(function () {
          console.log("site changed");
          hideInfo();
          hideChart();
          var selc1 = $("#site_selection").val();
          var localReport;
          if (!(selc1 == "Select Site")) {

               var appendVar = "";
               var reportID;
               $(".addedReports").remove();

               $.each(globalSeverData, function (i, localReport) {

                    // clear previous reports from select box
                    // console.log("boo");


                    if (selc1 == localReport.site_name) // if report is from this site, add to select box
                    {

                         //console.log("boo2");
                         // push report to report list
                         reportID = localReport.report_ID;

                         globalReportList.push(localReport);

                         appendVar = '<option class="addedReports" id="' + reportID + '" value="' + reportID + '">' + reportID + '</option>';

                         $("#report_selection").append(appendVar);
                    }

               });


               // add report id to select box /populate report select box

               /* 
               $.each(globalReportList, function (i, report) {

                    report.report_ID = reportID;
                    appendVar = '<option id="' + reportID + '" value="' + reportID + '">' + reportID + '</option>';

                    $("#report_selection").append(appendVar);

               });
                         
*/

          }


     });

     $("#report_selection").change(function () {

          hideInfo();
          hideChart();

          var selc2 = $("#report_selection").val();

          if (!(selc2 == "Select Report")) {

               // assign this report object to current report obj


               $.each(globalReportList, function (i, localReport) { // out of the reports from the selected site

                    if (selc2 == localReport.report_ID) // if report is found, make it the current report
                    {
                         // put report as current report

                         $.extend(currentReport, localReport);

                         fillAllDivData();// fill the div data accordingly
                         console.log("current report data: ");
                         console.dir(currentReport);
                    }

               });


          }


     });

     // links for charts

     $("#adp_p").click(function () {


          renderChart(currentReport, "adp");


     });

     $("#annual_admissions_p").click(function () {



          renderChart(currentReport, "aa");


     });

     $("#alos_p").click(function () {

          renderChart(currentReport, "alos");
     });

     $("#yoc_adp_p").click(function () {

          renderChart(currentReport, "yoc_adp");
     });

     $("#yoc_annual_admissions_p").click(function () {

          renderChart(currentReport, "yoc_aa");
     });

     $("#yoc_alos_p").click(function () {

          renderChart(currentReport, "yoc_alos");
     });

     $("#commitements_p").click(function () {

          renderChart(currentReport, "commitments");
     });

     $("#yoc_commitments_p").click(function () {

          renderChart(currentReport, "yoc_commitments");
     });


     //----------------Depreciated right now------------------
     $("#juvenile_crime_indicator_p").click(function () {
          // do nothing, just a header table entry
          // renderChart(currentReport, "juvenile_crime_indicator");
     });
     $("#deliquency_pettitions_filed_p").click(function () {

          renderChart(currentReport, "deliquency_pettitions_filed");
     });

     $("#felony_petitions_filed").click(function () {

          renderChart(currentReport, "felony_petitions_filed");
     });

     $("#juvenile_arrests_p").click(function () {

          renderChart(currentReport, "juvenile_arrests");
     });

     $("#juvenile_intakes_p").click(function () {

          renderChart(currentReport, "juvenile_intakes");
     });

     //----------------Depreciated right now ^^^^------------------




     $("#fta_rate_p").click(function () {

          renderChart(currentReport, "fta_rate");
     });

     $("#reArrest_p").click(function () {

          renderChart(currentReport, "re_arrest");
     });

     $("#juvenileCrime_p").click(function () {

          renderChart(currentReport, "juvenileCrime");
     });


});
