<?php
include("php/code.php");  // Read the php functions used in the code
?>

<!DOCTYPE html>
<!-- saved from url=(0065)http://twitter.github.io/bootstrap/examples/starter-template.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Reforms Implemented | JDAI Submission System</title>
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
    <script type="application/javascript" src="js/casey_include_form6.js"></script>
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
  <button class="btn" onclick="location.href='form5.php'">Leverage</button>
  <button class="btn disabled" onclick="location.href='form6.php'">Reforms</button>
  <button class="btn" onclick="location.href='form8.php'">Final Notes</button>
</div>
<br><br>
<h2>Influence Results</h2>
<h3>Detention Reforms Implemented</h3>
</center>


<form class="navbar-form" action="form8.php" enctype="application/x-www-form-urlencoded" method="post">
 <legend> </legend>
  <div class="control-group">

  
  <div class="container-fluid">
  <div class="row-fluid">
    <div class="span12">
      <!--Sidebar content-->
      
 <div class="control-group">
    <div class="controls">
Rate the extent to which your site is <strong>currently</strong> implementing each of these key strategies, using the following six-point scale:
<ul>
<li><strong>Not Pursuing</strong> (the site has not made a decision to pursue implementation of the practice)</li>
<li><strong>Not Yet Started</strong> (the site has made a decision to implement the practice, but has not started yet)</li>
<li><strong>Planning</strong> (the site is actively planning and otherwise preparing to implement the practice)</li>
<li><strong>Developing</strong> (the site is actively developing an implementation of the practice)</li>
<li><strong>Piloting</strong> (the site is piloting or testing the practice on a limited or experimental basis, or is in the early stages of implementation)</li>
<li><strong>Fully Implemented</strong> (the site has implemented the practice, and has been using it continuously for at least 90 days)</li>
</ul>
 <legend>Collaboration</legend>
 Governance Structure: <select id="governance_structure">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="governance_structure_button" value="?" onClick="alert('Effective JDAI collaboratives organize themselves into a broad-based committee including all of the partners (sometimes called a committee of the whole), a series of specialized subcommittees to focus on implementing specific reforms, and a multi-agency, multi-disciplinary leadership group (sometimes called an executive committee).')" />
 <br>
  Work Plan: <select id="work_plan">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="work_plan_button" value="?" onClick="alert('Effective JDAI collaboratives coordinate their reform efforts across multiple agencies and areas of work by creating and actively maintaining a written work plan, including specific tasks, assignments, deliverables, and target completion dates. ')" />
 <br>
  "Purpose of Detention" Clarification: <select id="purpose_of_detention">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="purpose_of_detention_button" value="?" onClick="alert('JDAI collaboratives should articulate in writing a consensus definition of the permissible grounds for detaining youth, based on local statutes, the values of local stakeholders, and the shared aspirations of their JDAI collaborative. ')" />
 <br>
  RED Authority: <select id="red_authority">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="red_authority_button" value="?" onClick="alert('JDAI collaboratives should have as an express part of their mandate the responsibility to identify and eliminate racial and ethnic disparities in the use of detention.')" />
 <br><br>

 <legend>Data Driven Decision Making</legend>
  Utilization Study: <select id="utilization_study">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="utilization_study_button" value="?" onClick="alert('JDAI depends on objective data analysis to guide detention reform planning and policy development. At the outset of their JDAI work, and periodically thereafter, sites collect detailed, comprehensive data on their detention population, utilization and operations. They thoroughly analyze this data to gain insight about who is being detained and why, and to identify areas where opportunities to reduce unnecessary detention could exist. ')" />
 <br>
  Comprehensive Detention Population Reports (at least quarterly): <select id="comprehensive_detention_population_reports">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="comprehensive_detention_population_reports_button" value="?" onClick="alert('JDAI sites establish regular, on-going reporting on their detention admissions, releases, average lengths of stay and average daily population. All indicators are disaggregated by gender, race / ethnicity, and offense or other reason for detention.')" />
 <br>
  Comprehensive RAI Reports (at least quarterly): <select id="comprehensive_rai_reports">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="comprehensive_rai_reports_button" value="?" onClick="alert('JDAI sites establish regular, on-going reporting on their detention screening process, including all screening decisions by assessed risk level, overrides of the sites structured risk assessment instruments, and the number of referrals that are not screened. All indicators are disaggregated by gender, race / ethnicity, and offense or other reason for detention referral. ')" />
  <br>
   Comprehensive ATD Reports (at least quarterly): <select id="comprehensive_atd_reports">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="comprehensive_atd_reports_button" value="?" onClick="alert('JDAI sites establish regular, on-going reporting on their use of detention alternative programs, including the number of youth referred, the number that successfully complete the programs, the reasons for unsuccessful completion, and program-by-program utilization metrics. All indicators are disaggregated by program, gender, race / ethnicity, and offense or other reason for detention referral.')" />
  <br> <br>
  
  <legend>Objective Admissions</legend>
   Field criteria for law enforcement: <select id="field_criteria_for_police">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="field_criteria_for_police_button" value="?" onClick="alert('Written criteria, sometimes structured in the form of an MOU between detention and law enforcement, that identify the situations or types of cases for which it is appropriate for law enforcement to take youth directly to court, to a reception center or other non-secure location, or to a detention center for further screening.')" />
  <br>
   Detention Screening Tool: <select id="detention_screening_tool">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="detention_screening_tool_button" value="?" onClick="alert('JDAI sites use Risk Assessment Instruments (RAIs) as a tool for Objective Detention Admissions Screening to ensure that youth are screened and treated consistently, according to state statute and locally determined risk criteria. Screening instruments are “triage” tools and use a point scale to assign points for each risk factor to produce a total risk score that would fall into a “high/medium/low” scheme. The total risk score is then compared to an outcome or decision scale indicating a detention result: youth scoring “high” are held in secure detention; youth scoring “low” are released outright; and youth who score in the medium range are eligible for release to detention alternatives.')" />
  <br>
   24x7 Screening: <select id="screening_24_7">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="screening_24_7_button" value="?" onClick="alert('Detention screening, including the use of an objective screening instrument and the authority to make decisions to release youth with or without conditions, takes place 24 hours/day and seven days/week.')" />
  <br> <br>
  
 <legend>Alternatives to Detention</legend>
   Home detention: <select id="home_detention">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="home_detention_button" value="?" onClick="alert('ATD programs are designed and implemented to safely divert youth who would otherwise be securely detained to non-secure forms of supervision, service or custody. Home detention is the least restrictive ATD and can be used in combination with other alternatives.')" />
  <br>
   Day/Evening Reporting: <select id="day_evening_reporting">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="day_evening_reporting_button" value="?" onClick="alert('Day and evening reporting centers target youth needing extra supervision during the day and/or evening.  A combination of programming is available to youth and the centers are usually community-based and operated by a youth-service agency.')" />
  <br>
  Shelter/Foster Care Beds: <select id="shelter_foster_care_beds">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="shelter_foster_care_beds_button" value="?" onClick="alert('Short-term respite or crisis beds are ATDs reserved for those youth who do not need to be securely detained, but do not have a viable home environment to be returned to pending adjudication. ')" />
  <br>
  ATD Placement coordination: <select id="atd_placement_coordination">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="atd_placement_coordination_button" value="?" onClick="alert('Placement coordination typically occurs prior to detention hearings.  This person, using the RAI and accessing a full array of ATDs, seeks to faciliate the release from detention of youth who could be safely released with an appropriate ATD.')" />
 <br> <br>
 
 
 <legend>Case Processing</legend>
Weekly Detention Review: <select id="weekly_detention_review">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="weekly_detention_review_button" value="?" onClick="alert('Weekly detention reviews are a formal mechanism to routinely review detained cases, to identify changes in status that might lead to release, to ensure timely follow-through, to minimize the likelihood that cases &quot;fall though the cracks&quot;, and to identify specific causes of delay.  In many jurisdictions, detention reviews are conducted weekly by groups of stakeholders charged with eliminating delays in specific types of cases.  Often, these case reviews are organized and led by a case expediter (see below).  Detention reviews lead to expedited release and also establish a culture in which &quot;every bed day counts&quot;.')" />
<br>
Revised “Speedy Trial” Rules: <select id="revised_speedy_trail_rules">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="revised_speedy_trail_rules_button" value="?" onClick="alert('Every state (and many localities) has rules, either statutory or court mandated, regarding how much time should or may elapse between key events in the processing of a delinquency case.  In addition, organizations like the National Council of Juvenile and Family Court Judges have created model standards that suggest what experts consider to be reasonable timeframes that protect due process rights while facilitating swift administration of justice.  In their best iterations, these case processing expectations not only establish how long the system has to accomplish certain tasks; they also establish consequences for failing to meet those timeframes.  Youth in detention, as well as youth in detention alternative programs, should be handled more quickly than youth who are at liberty.  ')" />
<br>
Expediter: <select id="expeditor">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="expeditor_button" value="?" onClick="alert('A common strategy to accelerate releases from detention that is employed in many JDAI sites is the designation of a staff person to serve as “expediter”.  Case expediters are charged with identifying cases that can be released and taking whatever steps might be needed to secure that release as quickly as possible. Case expediters use data and objective criteria to identify cases appropriate for release; collaborate with system, community and family stakeholders to develop release plans; have access to, and strong working relationships with, court and related stakeholders to secure the necessary authorizations; and draw upon a wide array of community and system resources to ensure that release plans can be executed successfully.')" />
<br>
Targeting “stuck” Cases: <select id="targeting_stuck_cases">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="targeting_stuck_cases_button" value="?" onClick="alert('Through their detention utilization studies and case processing reviews, JDAI sites identify types of cases that tend to get &quot;stuck&quot; in detention, often due to processes that only apply to a minority of detained youth but take a long time to complete when they do occur (e.g. completion of psychological evaluations and dispositional reports, transfers of youth to dispositional placements, referrals of youth the ATD programs). Sites develop targeted strategies to reduce these administrative and case processing delays, and to ensure that youth affected by them do not remain in detention for any longer than necessary.')" />
<br>
 <br> <br>
 
 <legend>Special Populations</legend>
Court Notification System: <select id="court_notification_system">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="court_notification_system_button" value="?" onClick="alert('Court notification systems are a common strategy implemented by many jurisdictions to reduce the number of failures to appear. Court notification systems use diligent, intentional, and oftentimes creative methods - extending beyond traditional service by mail - to remind youth of their court dates/times and to facilitate their appearance.')" />
<br>
Sanctions/Incentives Grid: <select id="sanctions_incentives_grid">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="sanctions_incentives_grid_button" value="?" onClick="alert('Sanctions/incentives grids are structured decision-making guides to help probation officers respond more effectively and consistently to probation violations, and to reduce the frequency with which those violations result in inappropriate secure detention. Grids incorporate structured assessment of the youth&rsquo;s level of risk and the severity of their misconduct on probation; allow for a wide range of responses and sanctions short of secure detention, including non-judicial options (e.g. administrative admonishment, enhanced contact requirements, community service, ATD programs) and judicial options (e.g. judicial admonishment, house arrest); include incentives for good conduct as well as sanctions for misconduct; and seek to ensure that responses to the youth&rsquo;s behavior occur as immediately as possible, both to minimize delay and to maximize the impact on youth behavior. ')" />
<br>
Differential Warrant Policy: <select id="differential_warrant_policy">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="differential_warrant_policy_button" value="?" onClick="alert('JDAI sites develop court policies that differentiate how warrants can be handled, based on the risk that the youth poses to public safety and the circumstances prompting issuance of the warrant. Rather than having all youth brought to detention when they are picked up on a warrant, differential  policies allow some youth to be summoned into court directly, or held in a non-secure setting until they appear before the judge who issued the warrant. ')" />
<br>
<!--Placement Expediting: <select id="placement_expediting">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="placement_expediting_button" value="?" onClick="alert('')" />-->
<br>
 <br> <br>
 <legend>Racial & Ethnic Disparities</legend>
Formal Mandate: <select id="formal_mandate">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="formal_mandate_button" value="?" onClick="alert('The responsibilty to reduce RED in JDAI sites is shared at the policy-level collaborative, and can be institutionalized by a formal mandate, MOU or resolution to reduce racial/ethnic disparties. ')" />
<br>
Community Engagement: <select id="community_engagement">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="community_engagement_button" value="?" onClick="alert('JDAI sites intentionally seek ways to engage communities of color in their detention reform efforts, at the policy and practice levels. Sites adopt a variety of different approaches to secure that engagement, but the hallmarks of a site that is doing it successfully include: consistent, active participation by recognized leaders from communities of color in collaborative committees and workgroups; representation of those communities not just at the steering committee level, but on relevant workgroups and standing subcommittees; and partnerships with community-based organizations that are not limited to JDAI committee meetings, but rather extend into the day-to-day delivery of services and operation of programs in communities of color.')" />
<br>
Disaggregated Data: <select id="disaggregated_data">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="disaggregated_data_button" value="?" onClick="alert('All data for JDAI is disaggregaged by race and ethnicity, and used strategically to identify and address disparities. Sites use this disaggregated data to understand the scale, scope, and underlying causes of racial / ethnic disparities in their juvenile justice systems; to analyze the impact of changes in policy, practices and programs on all racial / ethnic groups, especially those who are over-represented in secure detention; and to set priorities for their detention reform efforts, so that reducing disparities remains a central strategic concern.')" />
<br>
Special Detention Case Reforms: <select id="special_detention_case_reforms">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="special_detention_case_reforms_button" value="?" onClick="alert('Special detention cases - probation violators, warrants, and youth held in detention awaiting placement - are often the most difficult segments of the detention population to reduce. But compared with other types of detention cases that are easier to reduce, these special detention cases are often  disproportionately youth of color. Insufficient focus on reducing these populations, in favor of detention reforms that focus on &quot;easier&quot; cases that include more White youth, can therefore aggravate disparities. JDAI sites adopt an intentional focus to ensure that these populations are not overlooked, as a means to combat RED.')" />

 <br> <br>
 <legend>Conditions of Confinement</legend>
JDAI Facility Standards: <select id="jdai_facility_standards">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="jdai_facility_standards_button" value="?" onClick="alert('To ensure that detention facilities meet constitutional and statutory legal requirements and standards of best professional practice, JDAI has a comprehensive set of detention facility standards. JDAI sites evaluate their facilities against these standards every 2 years, and work to incorpate the standards into their policies, procedures and operating norms.')" />
<br>
Self-Assessment / Inspection: <select id="self_assessment_inspection">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="self_assessment_inspection_button" value="?" onClick="alert('JDAI sites conduct an assessment of their juvenile detention facilities during Phase One of JDAI, usually the first or second year in JDAI, and repeat one every 2 years.  A team of volunteers are trained to conduct the assessement.')" />
<br>
Corrections Plan: <select id="corrections_plan">
  <option>Not Considering</option>
  <option>Not Yet Started</option>
  <option>Planning/Designing</option>
   <option>Developing/Testing</option>
  <option>Piloting/Implementing</option>
  <option>Fully Implemented</option>
 </select> <input class="btn btn-info" type="button" id="corrections_plan_button" value="?" onClick="alert('Following the detention facility assessment, the team should prepare a narrative report that summarizes all areas of non-compliance, areas in need of improvement and recommendations for a corrective action plan. The corrective action plan should include specific implementation steps for each recommendation, and specific follow-up procedures to ensure that the plan is carried out.')" />
<br> <br>
    </div>
  </div>
</div>
 
 <center>

 <input class="btn btn-primary" type="button" id="update_reforms_button" value="Save Entry »" />
 <input class="btn btn-primary" type="button" id="reforms_continue_button" value="Save & Continue »" /><br><br>
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