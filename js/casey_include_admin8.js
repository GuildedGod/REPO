/*===============================================
Gosha variables (may or may not be used)
===============================================*/




/*===============================================
jifill variables and functions
===============================================*/

var currentReports = [];

var report_2009 = {};
var report_2010 = {};
var report_2011 = {};
var report_2012 = {};
var report_2013 = {};
var report_2014 = {};


var globalSitesList = [];

var globalSeverData = {};


/*===============================================
 (extra comment bar)
===============================================*/


/*===============================================
Extra functions
===============================================*/

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


    $("#yearlyChart_container_adp").removeClass("top_show");
    $("#yearlyChart_container_aa").removeClass("top_show");
    $("#yearlyChart_container_alos").removeClass("top_show");
    $("#yearlyChart_container_placements").removeClass("top_show");
    $("#yearlyChart_container_yocAdp").removeClass("top_show");
    $("#yearlyChart_container_yocCom").removeClass("top_show");
    $("#yearlyChart_container_yocAa").removeClass("top_show");
    $("#yearlyChart_container_yocAlos").removeClass("top_show");
    $("#yearlyChart_container_fta").removeClass("top_show");
    $("#yearlyChart_container_reArr").removeClass("top_show");
    $("#yearlyChart_container_juvCrime").removeClass("top_show");

    

}


function fillAllDivData() {
    // fill all div data

    // 2009


    //---------------
    $("#adp_baseline_2009").text(report_2009.adp_baseline)
   // $("#adp_recent_2009").text(report_2009.adp_recent)
   // var adp_baseline_minus_recent = report_2009.adp_recent - report_2009.adp_baseline;
   // var adp_baseline_minus_recent_percent = adp_baseline_minus_recent / report_2009.adp_baseline * 100;

   // $("#adp_change_number_2009").text(adp_baseline_minus_recent.toFixed(1))
  //  $("#adp_change_percent_2009").text(adp_baseline_minus_recent_percent.toFixed(1))



    //----------------------------------
    $("#annual_admission_baseline_2009").text(report_2009.annual_admission_baseline);
  //  $("#annual_admission_recent_2009").text(report_2009.annual_admission_recent);

    //var annual_admission_baseline_minus_recent = report_2009.annual_admission_recent - report_2009.annual_admission_baseline;

    // var annual_admissions_change_percent = annual_admission_baseline_minus_recent / report_2009.annual_admission_baseline * 100;



    //$("#annual_admissions_change_number_2009").text(annual_admission_baseline_minus_recent.toFixed(1));
    // $("#annual_admissions_change_percent_2009").text(annual_admissions_change_percent.toFixed(1));


    //----------------------

    $("#alos_baseline_2009").text(report_2009.alos_baseline);
    // $("#alos_recent_2009").text(report_2009.alos_recent);

    // var alos_baseline_minus_recent = report_2009.alos_recent - report_2009.alos_baseline;
    // $('#alos_change_number_2009').text(alos_baseline_minus_recent.toFixed(1));
    // var alos_change_percent = alos_baseline_minus_recent / report_2009.alos_baseline * 100;
    //  $('#alos_change_percent_2009').text(alos_change_percent.toFixed(1));
    //--------------------------------

    $("#state_commitment_baseline_2009").text(report_2009.state_commitment_baseline);
    //$("#state_commitment_recent_2009").text(report_2009.state_commitment_recent);

    //var state_commitment_baseline_minus_recent = report_2009.state_commitment_recent - report_2009.state_commitment_baseline;
    //$('#state_commitment_change_number_2009').text(state_commitment_baseline_minus_recent.toFixed(1));
    //var state_commitment_change_percent = state_commitment_baseline_minus_recent / report_2009.state_commitment_baseline * 100;
    //$('#state_commitment_change_percent_2009').text(state_commitment_change_percent.toFixed(1));

    //-------------------------------

    $("#fta_rate_baseline_2009").text((report_2009.fta_rate_baseline * 100).toFixed(1));
    //$("#fta_rate_recent_2009").text((report_2009.fta_rate_recent * 100).toFixed(1));


    //var fta_rate_baseline_minus_recent = (report_2009.fta_rate_recent - report_2009.fta_rate_baseline) * 100;
    //$('#fta_rate_change_number_2009').text(fta_rate_baseline_minus_recent.toFixed(1));

    $("#re_arrest_baseline_2009").text((report_2009.re_arrest_baseline * 100).toFixed(1));

    //$("#re_arrest_recent_2009").text((report_2009.re_arrest_recent * 100).toFixed(1));

    //var re_arrest_baseline_minus_recent = (report_2009.re_arrest_recent - report_2009.re_arrest_baseline) * 100;
    //$('#re_arrest_rate_change_2009').text(re_arrest_baseline_minus_recent.toFixed(1));

    $("#juvenile_crime_baseline_2009").text(report_2009.juvenile_crime_baseline);
    //$("#juvenile_crime_recent_2009").text(report_2009.juvenile_crime_recent);

    //var juvenile_crime_baseline_minus_recent = report_2009.juvenile_crime_recent - report_2009.juvenile_crime_baseline;
    //$('#juvenile_crime_change_number_2009').text(juvenile_crime_baseline_minus_recent.toFixed(1));
    //    var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent / report_2009.juvenile_crime_baseline * 100;
    //$('#juvenile_crime_change_percent_2009').text(juvenile_crime_change_percent.toFixed(1));

    $("#fta_indicator2_2009").text(report_2009.fta_indicator);
    $("#re_arrest_indicator2_2009").text(report_2009.re_arrest_indicator);
    $("#juvenile_crime_indicator2_2009").text(report_2009.juvenile_crime_indicator);


    //--------------------------
    $("#yoc_in_adp_baseline_2009").text(report_2009.yoc_in_adp_baseline);
    // $("#yoc_in_adp_recent_2009").text(report_2009.yoc_in_adp_recent);

    // var yoc_in_adp_baseline_minus_recent = report_2009.yoc_in_adp_recent - report_2009.yoc_in_adp_baseline;
    //$('#yoc_in_adp_recent_change_number_2009').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
    // var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent / report_2009.yoc_in_adp_baseline * 100;
    // $('#yoc_in_adp_recent_change_percent_2009').text(yoc_in_adp_change_percent.toFixed(1));

    $("#yoc_state_commitments_baseline_2009").text(report_2009.yoc_state_commitments_baseline);
    // $("#yoc_state_commitments_recent_2009").text(report_2009.yoc_state_commitments_recent);

    //  var yoc_state_commitments_baseline_minus_recent = report_2009.yoc_state_commitments_recent - report_2009.yoc_state_commitments_baseline;
    //  $('#yoc_committed_changes_number_2009').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
    // var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent / report_2009.yoc_state_commitments_baseline * 100;
    // $('#yoc_committed_changes_percent_2009').text(yoc_state_commitments_change_percent.toFixed(1));


    $("#yoc_admitted_baseline_2009").text(report_2009.yoc_admitted_baseline);
    // $("#yoc_admitted_recent_2009").text(report_2009.yoc_admitted_recent);

    //var yoc_admitted_baseline_minus_recent = report_2009.yoc_admitted_recent - report_2009.yoc_admitted_baseline;
    // $('#yoc_admitted_change_number_2009').text(yoc_admitted_baseline_minus_recent.toFixed(1));
    //  var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent / report_2009.yoc_admitted_baseline * 100;
    // $('#yoc_admitted_change_percent_2009').text(yoc_admitted_change_percent.toFixed(1));

    $("#alos_of_yoc_baseline_2009").text(report_2009.alos_of_yoc_baseline);
    // $("#alos_of_yoc_recent_2009").text(report_2009.alos_of_yoc_recent);

    //  var alos_of_yoc_baseline_minus_recent = report_2009.alos_of_yoc_recent - report_2009.alos_of_yoc_baseline;
    //  $('#alos_of_yoc_change_number_2009').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
    //  var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent / report_2009.alos_of_yoc_baseline * 100;
    //  $('#alos_of_yoc_change_percent_2009').text(alos_of_yoc_change_percent.toFixed(1));



    //============================
    //  2010
    //===========================

    //---------------
    $("#adp_baseline_2010").text(report_2010.adp_baseline)
    // $("#adp_recent_2010").text(report_2010.adp_recent)
    // var adp_baseline_minus_recent = report_2010.adp_recent - report_2010.adp_baseline;
    // var adp_baseline_minus_recent_percent = adp_baseline_minus_recent / report_2010.adp_baseline * 100;

    //  $("#adp_change_number_2010").text(adp_baseline_minus_recent.toFixed(1))
    //  $("#adp_change_percent_2010").text(adp_baseline_minus_recent_percent.toFixed(1))



    //----------------------------------
    $("#annual_admission_baseline_2010").text(report_2010.annual_admission_baseline);
    //   $("#annual_admission_recent_2010").text(report_2010.annual_admission_recent);

    //  var annual_admission_baseline_minus_recent = report_2010.annual_admission_recent - report_2010.annual_admission_baseline;
    //
    // var annual_admissions_change_percent = annual_admission_baseline_minus_recent / report_2010.annual_admission_baseline * 100;


    //
    // $("#annual_admissions_change_number_2010").text(annual_admission_baseline_minus_recent.toFixed(1));
    //$("#annual_admissions_change_percent_2010").text(annual_admissions_change_percent.toFixed(1));


    //----------------------

    $("#alos_baseline_2010").text(report_2010.alos_baseline);
    // $("#alos_recent_2010").text(report_2010.alos_recent);

    // var alos_baseline_minus_recent = report_2010.alos_recent - report_2010.alos_baseline;
    //$('#alos_change_number_2010').text(alos_baseline_minus_recent.toFixed(1));
    //  var alos_change_percent = alos_baseline_minus_recent / report_2010.alos_baseline * 100;
    // $('#alos_change_percent_2010').text(alos_change_percent.toFixed(1));
    //--------------------------------

    $("#state_commitment_baseline_2010").text(report_2010.state_commitment_baseline);
    //  $("#state_commitment_recent_2010").text(report_2010.state_commitment_recent);

    //  var state_commitment_baseline_minus_recent = report_2010.state_commitment_recent - report_2010.state_commitment_baseline;
    //  $('#state_commitment_change_number_2010').text(state_commitment_baseline_minus_recent.toFixed(1));
    // var state_commitment_change_percent = state_commitment_baseline_minus_recent / report_2010.state_commitment_baseline * 100;
    // $('#state_commitment_change_percent_2010').text(state_commitment_change_percent.toFixed(1));

    //-------------------------------

    $("#fta_rate_baseline_2010").text((report_2010.fta_rate_baseline * 100).toFixed(1));
    //  $("#fta_rate_recent_2010").text((report_2010.fta_rate_recent * 100).toFixed(1));


    //   var fta_rate_baseline_minus_recent = (report_2010.fta_rate_recent - report_2010.fta_rate_baseline) * 100;
    //   $('#fta_rate_change_number_2010').text(fta_rate_baseline_minus_recent.toFixed(1));

    $("#re_arrest_baseline_2010").text((report_2010.re_arrest_baseline * 100).toFixed(1));

    //  $("#re_arrest_recent_2010").text((report_2010.re_arrest_recent * 100).toFixed(1));

    //  var re_arrest_baseline_minus_recent = (report_2010.re_arrest_recent - report_2010.re_arrest_baseline) * 100;
    //  $('#re_arrest_rate_change_2010').text(re_arrest_baseline_minus_recent.toFixed(1));

    $("#juvenile_crime_baseline_2010").text(report_2010.juvenile_crime_baseline);
    //  $("#juvenile_crime_recent_2010").text(report_2010.juvenile_crime_recent);

    //  var juvenile_crime_baseline_minus_recent = report_2010.juvenile_crime_recent - report_2010.juvenile_crime_baseline;
    //   $('#juvenile_crime_change_number_2010').text(juvenile_crime_baseline_minus_recent.toFixed(1));
    //   //   var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent / report_2010.juvenile_crime_baseline * 100;
    //   $('#juvenile_crime_change_percent_2010').text(juvenile_crime_change_percent.toFixed(1));

    $("#fta_indicator2_2010").text(report_2010.fta_indicator);
    $("#re_arrest_indicator2_2010").text(report_2010.re_arrest_indicator);
    $("#juvenile_crime_indicator2_2010").text(report_2010.juvenile_crime_indicator);


    //--------------------------
    $("#yoc_in_adp_baseline_2010").text(report_2010.yoc_in_adp_baseline);
    // $("#yoc_in_adp_recent_2010").text(report_2010.yoc_in_adp_recent);

    //   var yoc_in_adp_baseline_minus_recent = report_2010.yoc_in_adp_recent - report_2010.yoc_in_adp_baseline;
    //  $('#yoc_in_adp_recent_change_number_2010').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
    //   var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent / report_2010.yoc_in_adp_baseline * 100;
    //   $('#yoc_in_adp_recent_change_percent_2010').text(yoc_in_adp_change_percent.toFixed(1));

    $("#yoc_state_commitments_baseline_2010").text(report_2010.yoc_state_commitments_baseline);
    //    $("#yoc_state_commitments_recent_2010").text(report_2010.yoc_state_commitments_recent);

    //  var yoc_state_commitments_baseline_minus_recent = report_2010.yoc_state_commitments_recent - report_2010.yoc_state_commitments_baseline;
    //   $('#yoc_committed_changes_number_2010').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
    //  var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent / report_2010.yoc_state_commitments_baseline * 100;
    // $('#yoc_committed_changes_percent_2010').text(yoc_state_commitments_change_percent.toFixed(1));


    $("#yoc_admitted_baseline_2010").text(report_2010.yoc_admitted_baseline);
    // $("#yoc_admitted_recent_2010").text(report_2010.yoc_admitted_recent);

    //  var yoc_admitted_baseline_minus_recent = report_2010.yoc_admitted_recent - report_2010.yoc_admitted_baseline;
    //  $('#yoc_admitted_change_number_2010').text(yoc_admitted_baseline_minus_recent.toFixed(1));
    //  var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent / report_2010.yoc_admitted_baseline * 100;
    //  $('#yoc_admitted_change_percent_2010').text(yoc_admitted_change_percent.toFixed(1));

    $("#alos_of_yoc_baseline_2010").text(report_2010.alos_of_yoc_baseline);
    //  $("#alos_of_yoc_recent_2010").text(report_2010.alos_of_yoc_recent);

    //  var alos_of_yoc_baseline_minus_recent = report_2010.alos_of_yoc_recent - report_2010.alos_of_yoc_baseline;
    // $('#alos_of_yoc_change_number_2010').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
    // var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent / report_2010.alos_of_yoc_baseline * 100;
    //  $('#alos_of_yoc_change_percent_2010').text(alos_of_yoc_change_percent.toFixed(1));




    //============================
    //  2011
    //===========================

    //---------------
    $("#adp_baseline_2011").text(report_2011.adp_baseline)
    // $("#adp_recent_2011").text(report_2011.adp_recent)
    // var adp_baseline_minus_recent = report_2011.adp_recent - report_2011.adp_baseline;
    // var adp_baseline_minus_recent_percent = adp_baseline_minus_recent / report_2011.adp_baseline * 100;

    // $("#adp_change_number_2011").text(adp_baseline_minus_recent.toFixed(1))
    // $("#adp_change_percent_2011").text(adp_baseline_minus_recent_percent.toFixed(1))



    //----------------------------------
    $("#annual_admission_baseline_2011").text(report_2011.annual_admission_baseline);
    //  $("#annual_admission_recent_2011").text(report_2011.annual_admission_recent);

    //  var annual_admission_baseline_minus_recent = report_2011.annual_admission_recent - report_2011.annual_admission_baseline;

    //  var annual_admissions_change_percent = annual_admission_baseline_minus_recent / report_2011.annual_admission_baseline * 100;



    //  $("#annual_admissions_change_number_2011").text(annual_admission_baseline_minus_recent.toFixed(1));
    // $("#annual_admissions_change_percent_2011").text(annual_admissions_change_percent.toFixed(1));


    //----------------------

    $("#alos_baseline_2011").text(report_2011.alos_baseline);
    // $("#alos_recent_2011").text(report_2011.alos_recent);

    // var alos_baseline_minus_recent = report_2011.alos_recent - report_2011.alos_baseline;
    // $('#alos_change_number_2011').text(alos_baseline_minus_recent.toFixed(1));
    // var alos_change_percent = alos_baseline_minus_recent / report_2011.alos_baseline * 100;
    // $('#alos_change_percent_2011').text(alos_change_percent.toFixed(1));
    //--------------------------------

    $("#state_commitment_baseline_2011").text(report_2011.state_commitment_baseline);
    //  $("#state_commitment_recent_2011").text(report_2011.state_commitment_recent);

    // var state_commitment_baseline_minus_recent = report_2011.state_commitment_recent - report_2011.state_commitment_baseline;
    // $('#state_commitment_change_number_2011').text(state_commitment_baseline_minus_recent.toFixed(1));
    // var state_commitment_change_percent = state_commitment_baseline_minus_recent / report_2011.state_commitment_baseline * 100;
    // $('#state_commitment_change_percent_2011').text(state_commitment_change_percent.toFixed(1));

    //-------------------------------

    $("#fta_rate_baseline_2011").text((report_2011.fta_rate_baseline * 100).toFixed(1));
    // $("#fta_rate_recent_2011").text((report_2011.fta_rate_recent * 100).toFixed(1));


    //  var fta_rate_baseline_minus_recent = (report_2011.fta_rate_recent - report_2011.fta_rate_baseline) * 100;
    //  $('#fta_rate_change_number_2011').text(fta_rate_baseline_minus_recent.toFixed(1));

    $("#re_arrest_baseline_2011").text((report_2011.re_arrest_baseline * 100).toFixed(1));

    //  $("#re_arrest_recent_2011").text((report_2011.re_arrest_recent * 100).toFixed(1));

    //  var re_arrest_baseline_minus_recent = (report_2011.re_arrest_recent - report_2011.re_arrest_baseline) * 100;
    //  $('#re_arrest_rate_change_2011').text(re_arrest_baseline_minus_recent.toFixed(1));

    $("#juvenile_crime_baseline_2011").text(report_2011.juvenile_crime_baseline);
    //  $("#juvenile_crime_recent_2011").text(report_2011.juvenile_crime_recent);

    // var juvenile_crime_baseline_minus_recent = report_2011.juvenile_crime_recent - report_2011.juvenile_crime_baseline;
    // $('#juvenile_crime_change_number_2011').text(juvenile_crime_baseline_minus_recent.toFixed(1));
    // var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent / report_2011.juvenile_crime_baseline * 100;
    // $('#juvenile_crime_change_percent_2011').text(juvenile_crime_change_percent.toFixed(1));

    $("#fta_indicator2_2011").text(report_2011.fta_indicator);
    $("#re_arrest_indicator2_2011").text(report_2011.re_arrest_indicator);
    $("#juvenile_crime_indicator2_2011").text(report_2011.juvenile_crime_indicator);


    //--------------------------
    $("#yoc_in_adp_baseline_2011").text(report_2011.yoc_in_adp_baseline);
    // $("#yoc_in_adp_recent_2011").text(report_2011.yoc_in_adp_recent);

    //  var yoc_in_adp_baseline_minus_recent = report_2011.yoc_in_adp_recent - report_2011.yoc_in_adp_baseline;
    // $('#yoc_in_adp_recent_change_number_2011').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
    // var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent / report_2011.yoc_in_adp_baseline * 100;
    // $('#yoc_in_adp_recent_change_percent_2011').text(yoc_in_adp_change_percent.toFixed(1));

    $("#yoc_state_commitments_baseline_2011").text(report_2011.yoc_state_commitments_baseline);
    //  $("#yoc_state_commitments_recent_2011").text(report_2011.yoc_state_commitments_recent);

    // var yoc_state_commitments_baseline_minus_recent = report_2011.yoc_state_commitments_recent - report_2011.yoc_state_commitments_baseline;
    //  $('#yoc_committed_changes_number_2011').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
    //  var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent / report_2011.yoc_state_commitments_baseline * 100;
    //  $('#yoc_committed_changes_percent_2011').text(yoc_state_commitments_change_percent.toFixed(1));


    $("#yoc_admitted_baseline_2011").text(report_2011.yoc_admitted_baseline);
    // $("#yoc_admitted_recent_2011").text(report_2011.yoc_admitted_recent);

    // var yoc_admitted_baseline_minus_recent = report_2011.yoc_admitted_recent - report_2011.yoc_admitted_baseline;
    // $('#yoc_admitted_change_number_2011').text(yoc_admitted_baseline_minus_recent.toFixed(1));
    //  var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent / report_2011.yoc_admitted_baseline * 100;
    //  $('#yoc_admitted_change_percent_2011').text(yoc_admitted_change_percent.toFixed(1));

    $("#alos_of_yoc_baseline_2011").text(report_2011.alos_of_yoc_baseline);
    //  $("#alos_of_yoc_recent_2011").text(report_2011.alos_of_yoc_recent);

    //   var alos_of_yoc_baseline_minus_recent = report_2011.alos_of_yoc_recent - report_2011.alos_of_yoc_baseline;
    //   $('#alos_of_yoc_change_number_2011').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
    //   var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent / report_2011.alos_of_yoc_baseline * 100;
    //  $('#alos_of_yoc_change_percent_2011').text(alos_of_yoc_change_percent.toFixed(1));




    //============================
    //  2012
    //===========================


    //---------------
    $("#adp_baseline_2012").text(report_2012.adp_baseline)
    // $("#adp_recent_2012").text(report_2012.adp_recent)
    // var adp_baseline_minus_recent = report_2012.adp_recent - report_2012.adp_baseline;
    //  var adp_baseline_minus_recent_percent = adp_baseline_minus_recent / report_2012.adp_baseline * 100;

    //  $("#adp_change_number_2012").text(adp_baseline_minus_recent.toFixed(1))
    //  $("#adp_change_percent_2012").text(adp_baseline_minus_recent_percent.toFixed(1))



    //----------------------------------
    $("#annual_admission_baseline_2012").text(report_2012.annual_admission_baseline);
    //   $("#annual_admission_recent_2012").text(report_2012.annual_admission_recent);

    //   var annual_admission_baseline_minus_recent = report_2012.annual_admission_recent - report_2012.annual_admission_baseline;

    //  var annual_admissions_change_percent = annual_admission_baseline_minus_recent / report_2012.annual_admission_baseline * 100;



    //  $("#annual_admissions_change_number_2012").text(annual_admission_baseline_minus_recent.toFixed(1));
    //$("#annual_admissions_change_percent_2012").text(annual_admissions_change_percent.toFixed(1));


    //----------------------

    $("#alos_baseline_2012").text(report_2012.alos_baseline);
    // $("#alos_recent_2012").text(report_2012.alos_recent);

    // var alos_baseline_minus_recent = report_2012.alos_recent - report_2012.alos_baseline;
    // $('#alos_change_number_2012').text(alos_baseline_minus_recent.toFixed(1));
    // var alos_change_percent = alos_baseline_minus_recent / report_2012.alos_baseline * 100;
    //  $('#alos_change_percent_2012').text(alos_change_percent.toFixed(1));
    //--------------------------------

    $("#state_commitment_baseline_2012").text(report_2012.state_commitment_baseline);
    //  $("#state_commitment_recent_2012").text(report_2012.state_commitment_recent);

    // var state_commitment_baseline_minus_recent = report_2012.state_commitment_recent - report_2012.state_commitment_baseline;
    // $('#state_commitment_change_number_2012').text(state_commitment_baseline_minus_recent.toFixed(1));
    //  var state_commitment_change_percent = state_commitment_baseline_minus_recent / report_2012.state_commitment_baseline * 100;
    //  $('#state_commitment_change_percent_2012').text(state_commitment_change_percent.toFixed(1));

    //-------------------------------

    $("#fta_rate_baseline_2012").text((report_2012.fta_rate_baseline * 100).toFixed(1));
    //  $("#fta_rate_recent_2012").text((report_2012.fta_rate_recent * 100).toFixed(1));


    // var fta_rate_baseline_minus_recent = (report_2012.fta_rate_recent - report_2012.fta_rate_baseline) * 100;
    // $('#fta_rate_change_number_2012').text(fta_rate_baseline_minus_recent.toFixed(1));

    $("#re_arrest_baseline_2012").text((report_2012.re_arrest_baseline * 100).toFixed(1));

    //  $("#re_arrest_recent_2012").text((report_2012.re_arrest_recent * 100).toFixed(1));

    // var re_arrest_baseline_minus_recent = (report_2012.re_arrest_recent - report_2012.re_arrest_baseline) * 100;
    // $('#re_arrest_rate_change_2012').text(re_arrest_baseline_minus_recent.toFixed(1));

    $("#juvenile_crime_baseline_2012").text(report_2012.juvenile_crime_baseline);
    // $("#juvenile_crime_recent_2012").text(report_2012.juvenile_crime_recent);

    // var juvenile_crime_baseline_minus_recent = report_2012.juvenile_crime_recent - report_2012.juvenile_crime_baseline;
    // $('#juvenile_crime_change_number_2012').text(juvenile_crime_baseline_minus_recent.toFixed(1));
    //  var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent / report_2012.juvenile_crime_baseline * 100;
    //  $('#juvenile_crime_change_percent_2012').text(juvenile_crime_change_percent.toFixed(1));

    $("#fta_indicator2_2012").text(report_2012.fta_indicator);
    $("#re_arrest_indicator2_2012").text(report_2012.re_arrest_indicator);
    $("#juvenile_crime_indicator2_2012").text(report_2012.juvenile_crime_indicator);


    //--------------------------
    $("#yoc_in_adp_baseline_2012").text(report_2012.yoc_in_adp_baseline);
    // $("#yoc_in_adp_recent_2012").text(report_2012.yoc_in_adp_recent);

    //  var yoc_in_adp_baseline_minus_recent = report_2012.yoc_in_adp_recent - report_2012.yoc_in_adp_baseline;
    //  $('#yoc_in_adp_recent_change_number_2012').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
    //  var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent / report_2012.yoc_in_adp_baseline * 100;
    // $('#yoc_in_adp_recent_change_percent_2012').text(yoc_in_adp_change_percent.toFixed(1));

    $("#yoc_state_commitments_baseline_2012").text(report_2012.yoc_state_commitments_baseline);
    // $("#yoc_state_commitments_recent_2012").text(report_2012.yoc_state_commitments_recent);

    //var yoc_state_commitments_baseline_minus_recent = report_2012.yoc_state_commitments_recent - report_2012.yoc_state_commitments_baseline;
    //$('#yoc_committed_changes_number_2012').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
    // var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent / report_2012.yoc_state_commitments_baseline * 100;
    // $('#yoc_committed_changes_percent_2012').text(yoc_state_commitments_change_percent.toFixed(1));


    $("#yoc_admitted_baseline_2012").text(report_2012.yoc_admitted_baseline);
    // $("#yoc_admitted_recent_2012").text(report_2012.yoc_admitted_recent);

    //  var yoc_admitted_baseline_minus_recent = report_2012.yoc_admitted_recent - report_2012.yoc_admitted_baseline;
    //  $('#yoc_admitted_change_number_2012').text(yoc_admitted_baseline_minus_recent.toFixed(1));
    //  var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent / report_2012.yoc_admitted_baseline * 100;
    //  $('#yoc_admitted_change_percent_2012').text(yoc_admitted_change_percent.toFixed(1));

    $("#alos_of_yoc_baseline_2012").text(report_2012.alos_of_yoc_baseline);
    //  $("#alos_of_yoc_recent_2012").text(report_2012.alos_of_yoc_recent);

    // var alos_of_yoc_baseline_minus_recent = report_2012.alos_of_yoc_recent - report_2012.alos_of_yoc_baseline;
    // $('#alos_of_yoc_change_number_2012').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
    // var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent / report_2012.alos_of_yoc_baseline * 100;
    //$('#alos_of_yoc_change_percent_2012').text(alos_of_yoc_change_percent.toFixed(1));



    //============================
    //  2013
    //===========================

    //---------------
    // $("#adp_baseline_2013").text(report_2013.adp_baseline)
    $("#adp_recent_2013").text(report_2013.adp_recent)
    // var adp_baseline_minus_recent = report_2013.adp_recent - report_2013.adp_baseline;
    // var adp_baseline_minus_recent_percent = adp_baseline_minus_recent / report_2013.adp_baseline * 100;

    // $("#adp_change_number_2013").text(adp_baseline_minus_recent.toFixed(1))
    // $("#adp_change_percent_2013").text(adp_baseline_minus_recent_percent.toFixed(1))



    //----------------------------------
    // $("#annual_admission_baseline_2013").text(report_2013.annual_admission_baseline);
    $("#annual_admission_recent_2013").text(report_2013.annual_admission_recent);

    // var annual_admission_baseline_minus_recent = report_2013.annual_admission_recent - report_2013.annual_admission_baseline;

    //var annual_admissions_change_percent = annual_admission_baseline_minus_recent / report_2013.annual_admission_baseline * 100;



    //$("#annual_admissions_change_number_2013").text(annual_admission_baseline_minus_recent.toFixed(1));
    //  $("#annual_admissions_change_percent_2013").text(annual_admissions_change_percent.toFixed(1));


    //----------------------

    //  $("#alos_baseline_2013").text(report_2013.alos_baseline);
    $("#alos_recent_2013").text(report_2013.alos_recent);

    //  var alos_baseline_minus_recent = report_2013.alos_recent - report_2013.alos_baseline;
    //  $('#alos_change_number_2013').text(alos_baseline_minus_recent.toFixed(1));
    // var alos_change_percent = alos_baseline_minus_recent / report_2013.alos_baseline * 100;
    // $('#alos_change_percent_2013').text(alos_change_percent.toFixed(1));
    //--------------------------------

    //  $("#state_commitment_baseline_2013").text(report_2013.state_commitment_baseline);
    $("#state_commitment_recent_2013").text(report_2013.state_commitment_recent);

    // var state_commitment_baseline_minus_recent = report_2013.state_commitment_recent - report_2013.state_commitment_baseline;
    // $('#state_commitment_change_number_2013').text(state_commitment_baseline_minus_recent.toFixed(1));
    // var state_commitment_change_percent = state_commitment_baseline_minus_recent / report_2013.state_commitment_baseline * 100;
    // $('#state_commitment_change_percent_2013').text(state_commitment_change_percent.toFixed(1));

    //-------------------------------

    // $("#fta_rate_baseline_2013").text((report_2013.fta_rate_baseline * 100).toFixed(1));
    $("#fta_rate_recent_2013").text((report_2013.fta_rate_recent * 100).toFixed(1));


    // var fta_rate_baseline_minus_recent = (report_2013.fta_rate_recent - report_2013.fta_rate_baseline) * 100;
    // $('#fta_rate_change_number_2013').text(fta_rate_baseline_minus_recent.toFixed(1));

    //  $("#re_arrest_baseline_2013").text((report_2013.re_arrest_baseline * 100).toFixed(1));

    $("#re_arrest_recent_2013").text((report_2013.re_arrest_recent * 100).toFixed(1));

    //  var re_arrest_baseline_minus_recent = (report_2013.re_arrest_recent - report_2013.re_arrest_baseline) * 100;
    //  $('#re_arrest_rate_change_2013').text(re_arrest_baseline_minus_recent.toFixed(1));

    // $("#juvenile_crime_baseline_2013").text(report_2013.juvenile_crime_baseline);
    $("#juvenile_crime_recent_2013").text(report_2013.juvenile_crime_recent);

    //  var juvenile_crime_baseline_minus_recent = report_2013.juvenile_crime_recent - report_2013.juvenile_crime_baseline;
    //  $('#juvenile_crime_change_number_2013').text(juvenile_crime_baseline_minus_recent.toFixed(1));
    //  var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent / report_2013.juvenile_crime_baseline * 100;
    //  $('#juvenile_crime_change_percent_2013').text(juvenile_crime_change_percent.toFixed(1));

    $("#fta_indicator2_2013").text(report_2013.fta_indicator);
    $("#re_arrest_indicator2_2013").text(report_2013.re_arrest_indicator);
    $("#juvenile_crime_indicator2_2013").text(report_2013.juvenile_crime_indicator);


    //--------------------------
    //  $("#yoc_in_adp_baseline_2013").text(report_2013.yoc_in_adp_baseline);
    $("#yoc_in_adp_recent_2013").text(report_2013.yoc_in_adp_recent);

    //  var yoc_in_adp_baseline_minus_recent = report_2013.yoc_in_adp_recent - report_2013.yoc_in_adp_baseline;
    //  $('#yoc_in_adp_recent_change_number_2013').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
    //  var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent / report_2013.yoc_in_adp_baseline * 100;
    // $('#yoc_in_adp_recent_change_percent_2013').text(yoc_in_adp_change_percent.toFixed(1));

    // $("#yoc_state_commitments_baseline_2013").text(report_2013.yoc_state_commitments_baseline);
    $("#yoc_state_commitments_recent_2013").text(report_2013.yoc_state_commitments_recent);

    // var yoc_state_commitments_baseline_minus_recent = report_2013.yoc_state_commitments_recent - report_2013.yoc_state_commitments_baseline;
    //$('#yoc_committed_changes_number_2013').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
    //var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent / report_2013.yoc_state_commitments_baseline * 100;
    // $('#yoc_committed_changes_percent_2013').text(yoc_state_commitments_change_percent.toFixed(1));


    //  $("#yoc_admitted_baseline_2013").text(report_2013.yoc_admitted_baseline);
    $("#yoc_admitted_recent_2013").text(report_2013.yoc_admitted_recent);

    //  var yoc_admitted_baseline_minus_recent = report_2013.yoc_admitted_recent - report_2013.yoc_admitted_baseline;
    //  $('#yoc_admitted_change_number_2013').text(yoc_admitted_baseline_minus_recent.toFixed(1));
    // var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent / report_2013.yoc_admitted_baseline * 100;
    // $('#yoc_admitted_change_percent_2013').text(yoc_admitted_change_percent.toFixed(1));

    //   $("#alos_of_yoc_baseline_2013").text(report_2013.alos_of_yoc_baseline);
    $("#alos_of_yoc_recent_2013").text(report_2013.alos_of_yoc_recent);

    // var alos_of_yoc_baseline_minus_recent = report_2013.alos_of_yoc_recent - report_2013.alos_of_yoc_baseline;
    // $('#alos_of_yoc_change_number_2013').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
    // var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent / report_2013.alos_of_yoc_baseline * 100;
    // $('#alos_of_yoc_change_percent_2013').text(alos_of_yoc_change_percent.toFixed(1));



    //============================
    //  2014
    //===========================


    // fill all div data


    //---------------
    // $("#adp_baseline_2014").text(report_2014.adp_baseline)
    $("#adp_recent_2014").text(report_2014.adp_recent)
    // var adp_baseline_minus_recent = report_2014.adp_recent - report_2014.adp_baseline;
    //  var adp_baseline_minus_recent_percent = adp_baseline_minus_recent / report_2014.adp_baseline * 100;

    //$("#adp_change_number_2014").text(adp_baseline_minus_recent.toFixed(1))
    // $("#adp_change_percent_2014").text(adp_baseline_minus_recent_percent.toFixed(1))



    //----------------------------------
    // $("#annual_admission_baseline_2014").text(report_2014.annual_admission_baseline);
    $("#annual_admission_recent_2014").text(report_2014.annual_admission_recent);

    // var annual_admission_baseline_minus_recent = report_2014.annual_admission_recent - report_2014.annual_admission_baseline;

    //var annual_admissions_change_percent = annual_admission_baseline_minus_recent / report_2014.annual_admission_baseline * 100;



    //  $("#annual_admissions_change_number_2014").text(annual_admission_baseline_minus_recent.toFixed(1));
    //$("#annual_admissions_change_percent_2014").text(annual_admissions_change_percent.toFixed(1));


    //----------------------

    //   $("#alos_baseline_2014").text(report_2014.alos_baseline);
    $("#alos_recent_2014").text(report_2014.alos_recent);

    //   var alos_baseline_minus_recent = report_2014.alos_recent - report_2014.alos_baseline;
    //  $('#alos_change_number_2014').text(alos_baseline_minus_recent.toFixed(1));
    //  var alos_change_percent = alos_baseline_minus_recent / report_2014.alos_baseline * 100;
    //  $('#alos_change_percent_2014').text(alos_change_percent.toFixed(1));
    //--------------------------------

    // $("#state_commitment_baseline_2014").text(report_2014.state_commitment_baseline);
    $("#state_commitment_recent_2014").text(report_2014.state_commitment_recent);

    // var state_commitment_baseline_minus_recent = report_2014.state_commitment_recent - report_2014.state_commitment_baseline;
    // $('#state_commitment_change_number_2014').text(state_commitment_baseline_minus_recent.toFixed(1));
    // var state_commitment_change_percent = state_commitment_baseline_minus_recent / report_2014.state_commitment_baseline * 100;
    // $('#state_commitment_change_percent_2014').text(state_commitment_change_percent.toFixed(1));

    //-------------------------------

    // $("#fta_rate_baseline_2014").text((report_2014.fta_rate_baseline * 100).toFixed(1));
    $("#fta_rate_recent_2014").text((report_2014.fta_rate_recent * 100).toFixed(1));


    //  var fta_rate_baseline_minus_recent = (report_2014.fta_rate_recent - report_2014.fta_rate_baseline) * 100;
    //  $('#fta_rate_change_number_2014').text(fta_rate_baseline_minus_recent.toFixed(1));

    //   $("#re_arrest_baseline_2014").text((report_2014.re_arrest_baseline * 100).toFixed(1));

    $("#re_arrest_recent_2014").text((report_2014.re_arrest_recent * 100).toFixed(1));

    //   var re_arrest_baseline_minus_recent = (report_2014.re_arrest_recent - report_2014.re_arrest_baseline) * 100;
    //   $('#re_arrest_rate_change_2014').text(re_arrest_baseline_minus_recent.toFixed(1));

    //   $("#juvenile_crime_baseline_2014").text(report_2014.juvenile_crime_baseline);
    $("#juvenile_crime_recent_2014").text(report_2014.juvenile_crime_recent);

    //  var juvenile_crime_baseline_minus_recent = report_2014.juvenile_crime_recent - report_2014.juvenile_crime_baseline;
    //  $('#juvenile_crime_change_number_2014').text(juvenile_crime_baseline_minus_recent.toFixed(1));
    //  var juvenile_crime_change_percent = juvenile_crime_baseline_minus_recent / report_2014.juvenile_crime_baseline * 100;
    //  $('#juvenile_crime_change_percent_2014').text(juvenile_crime_change_percent.toFixed(1));

    $("#fta_indicator2_2014").text(report_2014.fta_indicator);
    $("#re_arrest_indicator2_2014").text(report_2014.re_arrest_indicator);
    $("#juvenile_crime_indicator2_2014").text(report_2014.juvenile_crime_indicator);


    //--------------------------
    //  $("#yoc_in_adp_baseline_2014").text(report_2014.yoc_in_adp_baseline);
    $("#yoc_in_adp_recent_2014").text(report_2014.yoc_in_adp_recent);

    //  var yoc_in_adp_baseline_minus_recent = report_2014.yoc_in_adp_recent - report_2014.yoc_in_adp_baseline;
    //  $('#yoc_in_adp_recent_change_number_2014').text(yoc_in_adp_baseline_minus_recent.toFixed(1));
    //  var yoc_in_adp_change_percent = yoc_in_adp_baseline_minus_recent / report_2014.yoc_in_adp_baseline * 100;
    //  $('#yoc_in_adp_recent_change_percent_2014').text(yoc_in_adp_change_percent.toFixed(1));

    //  $("#yoc_state_commitments_baseline_2014").text(report_2014.yoc_state_commitments_baseline);
    $("#yoc_state_commitments_recent_2014").text(report_2014.yoc_state_commitments_recent);

    //  var yoc_state_commitments_baseline_minus_recent = report_2014.yoc_state_commitments_recent - report_2014.yoc_state_commitments_baseline;
    //  $('#yoc_committed_changes_number_2014').text(yoc_state_commitments_baseline_minus_recent.toFixed(1));
    //  var yoc_state_commitments_change_percent = yoc_state_commitments_baseline_minus_recent / report_2014.yoc_state_commitments_baseline * 100;
    //  $('#yoc_committed_changes_percent_2014').text(yoc_state_commitments_change_percent.toFixed(1));


    //  $("#yoc_admitted_baseline_2014").text(report_2014.yoc_admitted_baseline);
    $("#yoc_admitted_recent_2014").text(report_2014.yoc_admitted_recent);

    // var yoc_admitted_baseline_minus_recent = report_2014.yoc_admitted_recent - report_2014.yoc_admitted_baseline;
    //  $('#yoc_admitted_change_number_2014').text(yoc_admitted_baseline_minus_recent.toFixed(1));
    //  var yoc_admitted_change_percent = yoc_admitted_baseline_minus_recent / report_2014.yoc_admitted_baseline * 100;
    // $('#yoc_admitted_change_percent_2014').text(yoc_admitted_change_percent.toFixed(1));

    // $("#alos_of_yoc_baseline_2014").text(report_2014.alos_of_yoc_baseline);
    $("#alos_of_yoc_recent_2014").text(report_2014.alos_of_yoc_recent);

    // var alos_of_yoc_baseline_minus_recent = report_2014.alos_of_yoc_recent - report_2014.alos_of_yoc_baseline;
    //  $('#alos_of_yoc_change_number_2014').text(alos_of_yoc_baseline_minus_recent.toFixed(1));
    // var alos_of_yoc_change_percent = alos_of_yoc_baseline_minus_recent / report_2014.alos_of_yoc_baseline * 100;
    //  $('#alos_of_yoc_change_percent_2014').text(alos_of_yoc_change_percent.toFixed(1));




}

function renderChart(impact) {


    //---------------------------------------------------------------------------------------


    /*===============================================
    ADP chart definition
    ===============================================*/





    var adp_chart = new CanvasJS.Chart("yearlyChart_container_adp", {

        title: {
            text: "Average Daily Population Changes"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.adp_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.adp_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.adp_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.adp_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.adp_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.adp_recent) } // 2014 recent

              ]


          }]
    });


    //---------------------------------------------------------------------------------------

    /*===============================================
    AA chart definition
    ===============================================*/



    

    var admissions_chart = new CanvasJS.Chart("yearlyChart_container_aa", {

        title: {
            text: "Annual Admissions Changes"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.annual_admission_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.annual_admission_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.annual_admission_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.annual_admission_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.annual_admission_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.annual_admission_recent) } // 2014 recent

              ]


          }]
    });




    //---------------------------------------------------------------------------------------

    /*===============================================
    ALOS chart definition
    ===============================================*/








    var alos_chart = new CanvasJS.Chart("yearlyChart_container_alos", {

        title: {
            text: "ALOS Changes"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.alos_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.alos_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.alos_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.alos_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.alos_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.alos_recent) } // 2014 recent

              ]


          }]
    });


    //---------------------------------------------------------------------------------------


    /*===============================================
    Placement chart definition
    ===============================================*/



    var placements_chart = new CanvasJS.Chart("yearlyChart_container_placements", {

        title: {
            text: "Placement Changes"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.state_commitment_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.state_commitment_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.state_commitment_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.state_commitment_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.state_commitment_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.state_commitment_recent) } // 2014 recent

              ]


          }]
    });


    //---------------------------------------------------------------------------------------


    /*===============================================
    YOC ADP chart definition
    ===============================================*/


    var yocADP_chart = new CanvasJS.Chart("yearlyChart_container_yocAdp", {

        title: {
            text: "YOC ADP"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.yoc_in_adp_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.yoc_in_adp_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.yoc_in_adp_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.yoc_in_adp_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.yoc_in_adp_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.yoc_in_adp_recent) } // 2014 recent

              ]


          }]
    });

    //---------------------------------------------------------------------------------------


    /*===============================================
    YOC Commitments chart definition
    ===============================================*/


    var yocCommitments_chart = new CanvasJS.Chart("yearlyChart_container_yocCom", {

        title: {
            text: "YOC Commitments"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.yoc_state_commitments_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.yoc_state_commitments_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.yoc_state_commitments_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.yoc_state_commitments_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.yoc_state_commitments_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.yoc_state_commitments_recent) } // 2014 recent

              ]


          }]
    });

    //---------------------------------------------------------------------------------------



    /*===============================================
    YOC AA chart definition
    ===============================================*/


    var yocAdmitted_chart = new CanvasJS.Chart("yearlyChart_container_yocAa", {

        title: {
            text: "YOC Annual Admissions"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.yoc_admitted_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.yoc_admitted_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.yoc_admitted_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.yoc_admitted_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.yoc_admitted_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.yoc_admitted_recent) } // 2014 recent

              ]


          }]
    });
    //---------------------------------------------------------------------------------------

    //ALOS 

    /*===============================================
    YOC ALOS chart definition
    ===============================================*/

    var yocALOS_chart = new CanvasJS.Chart("yearlyChart_container_yocAlos", {

        title: {
            text: "YOC ALOS"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.alos_of_yoc_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.alos_of_yoc_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.alos_of_yoc_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.alos_of_yoc_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.alos_of_yoc_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.alos_of_yoc_recent) } // 2014 recent

              ]


          }]
    });

    //---------------------------------------------------------------------------------------

    //FTA 

    /*===============================================
    FTA chart definition
    ===============================================*/


    var ftaRate_chart = new CanvasJS.Chart("yearlyChart_container_fta", {

        title: {
            text: "FTA Rate"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat((report_2009.fta_rate_baseline * 100).toFixed(1)) }, // 2009 baseline
              { label: "2010", y: parseFloat((report_2010.fta_rate_baseline * 100).toFixed(1)) }, //2010 recent
            { label: "2011", y: parseFloat((report_2011.fta_rate_baseline * 100).toFixed(1)) }, // 2011 recent
            { label: "2012", y: parseFloat((report_2012.fta_rate_baseline * 100).toFixed(1)) }, //2012 recent
            { label: "2013", y: parseFloat((report_2013.fta_rate_recent * 100).toFixed(1)) }, // 2013 recent
            { label: "2014", y: parseFloat((report_2014.fta_rate_recent * 100).toFixed(1)) } // 2014 recent

              ]


          }]
    });



    //---------------------------------------------------------------------------------------

    //Re Arrest 


    /*===============================================
    Re Arrest chart definition
    ===============================================*/




    var reArrest_chart = new CanvasJS.Chart("yearlyChart_container_reArr", {

        title: {
            text: "Re Arrest"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat((report_2009.re_arrest_baseline * 100).toFixed(1)) }, // 2009 baseline
              { label: "2010", y: parseFloat((report_2010.re_arrest_baseline * 100).toFixed(1)) }, //2010 recent
            { label: "2011", y: parseFloat((report_2011.re_arrest_baseline * 100).toFixed(1)) }, // 2011 recent
            { label: "2012", y: parseFloat((report_2012.re_arrest_baseline * 100).toFixed(1)) }, //2012 recent
            { label: "2013", y: parseFloat((report_2013.re_arrest_recent * 100).toFixed(1)) }, // 2013 recent
            { label: "2014", y: parseFloat((report_2014.re_arrest_recent * 100).toFixed(1)) } // 2014 recent

              ]


          }]
    });






    //---------------------------------------------------------------------------------------

    //Juvenile Crime 


    /*===============================================
    Juvenile chart definition
    ===============================================*/



    var juvenileCrime_chart = new CanvasJS.Chart("yearlyChart_container_juvCrime", {

        title: {
            text: "Juvenile Crime"
        },
        data: [//array of dataSeries              
          { //dataSeries object


              type: "column",

              dataPoints: [
              { label: "2009", y: parseFloat(report_2009.juvenile_crime_baseline) }, // 2009 baseline
              { label: "2010", y: parseFloat(report_2010.juvenile_crime_baseline) }, //2010 recent
            { label: "2011", y: parseFloat(report_2011.juvenile_crime_baseline) }, // 2011 recent
            { label: "2012", y: parseFloat(report_2012.juvenile_crime_baseline) }, //2012 recent
            { label: "2013", y: parseFloat(report_2013.juvenile_crime_recent) }, // 2013 recent
            { label: "2014", y: parseFloat(report_2014.juvenile_crime_recent) } // 2014 recent

              ]


          }]
    });


    //---------------------------------------------------------

    fillAllDivData();
    hideInfo();
    var selct2 = $("#impact_selection").val();

    switch (selct2) {
        case "adp":
            adp_chart.render();
            $("#yearlyChart_container_adp").addClass("top_show");
            $("#adpData_container").removeClass("hide_this");
            break;

        case "aa":
            admissions_chart.render();
            $("#yearlyChart_container_aa").addClass("top_show");
            $("#admissionsData_container").removeClass("hide_this");
            break;
        case "alos":
            alos_chart.render();
            $("#yearlyChart_container_alos").addClass("top_show");
            $("#alosData_container").removeClass("hide_this");
            break;
        case "placement":
            placements_chart.render();
            $("#yearlyChart_container_placements").addClass("top_show");
            $("#placementsData_container").removeClass("hide_this");
            break;
        case "yoc_adp":
            yocADP_chart.render();
            $("#yearlyChart_container_yocAdp").addClass("top_show");
            $("#yocADPData_container").removeClass("hide_this");
            break;
        case "yoc_aa":
            yocAdmitted_chart.render();
            $("#yearlyChart_container_yocAa").addClass("top_show");
            $("#yocAAData_container").removeClass("hide_this");
            break;
        case "yoc_alos":
            yocALOS_chart.render();
            $("#yearlyChart_container_yocAlos").addClass("top_show");
            $("#yocALOSData_container").removeClass("hide_this");
            break;
        case "yoc_com":
            yocCommitments_chart.render();
            $("#yearlyChart_container_yocCom").addClass("top_show");
            $("#yocCommitmentsData_container").removeClass("hide_this");
            break;
        case "fta_rate":
            ftaRate_chart.render();
            $("#yearlyChart_container_fta").addClass("top_show");
            $("#ftaRateData_container").removeClass("hide_this");
            break;
        case "re_arrest":
            reArrest_chart.render();
            $("#yearlyChart_container_reArr").addClass("top_show");
            $("#reArrestData_container").removeClass("hide_this");
            break;
        case "juvenile_crime":
            juvenileCrime_chart.render();
            $("#yearlyChart_container_juvCrime").addClass("top_show");
            $("#juvenileCrimeData_container").removeClass("hide_this");
            break;

    }

}

/*===============================================
document.ready function
===============================================*/

$(function () {
    // Handler for .ready() called.












    // get site list from database with ajax

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


    $.post('php/get_reports.php', function (data) {
        var pushedData = jQuery.parseJSON(data);

        $.extend(globalSeverData, pushedData);
        console.log("Global server data is: ");
        console.dir(globalSeverData);

    }); // End Post



    $("#site_selection").change(function () {


        // add reports of said site to global list

        var selct = $("#site_selection").val();
        var selct2 = $("#impact_selection").val();
        if (selct != "Select Site") {
            $.each(globalSeverData, function (i, localReport) { // out of the reports from the selected site

                if (selct == localReport.site_name) // if report is found, make it the current report
                {
                    // add report to report list

                    currentReports.push(localReport);

                    // print the year to the console to analyze:

                    console.log("current year: " + localReport.current_year);

                    switch (localReport.current_year) {

                        case "2009":

                            $.extend(report_2009, localReport);
                            console.log("year 2009 found");
                            console.dir(report_2009);
                            break;

                        case "2010":

                            $.extend(report_2010, localReport);
                            console.log("year 2010 found");
                            console.dir(report_2010);
                            break;

                        case "2011":
                            $.extend(report_2011, localReport);
                            console.log("year 2011 found");
                            console.dir(report_2011);
                            break;

                        case "2012":
                            $.extend(report_2012, localReport);
                            console.log("year 2012 found");
                            console.dir(report_2012);
                            break;

                        case "2013":
                            $.extend(report_2013, localReport);
                            console.log("year 2013 found");
                            console.dir(report_2013);
                            break;

                        case "2014":
                            $.extend(report_2014, localReport);
                            console.log("year 2014 found");
                            console.dir(report_2014);
                            break;


                    }
                }



            });


            if (selct2 != "Select Impact") {

                console.log("change chart render");
                renderChart(selct2);


            }

            console.log("end year listing");
        }
        else {
            alert("Please select a site");
        }

        //




    });


    $("#impact_selection").change(function () {


        var selct = $("#site_selection").val();
        var selct2 = $("#impact_selection").val();

        if (selct != "#site_selection") {
            if (selct2 != "Select Impact") {


                renderChart(selct2);


            }
            else {
                alert("Please select an impact");
            }

        }
        else {
            alert("Please select a site");

        }

    });
});