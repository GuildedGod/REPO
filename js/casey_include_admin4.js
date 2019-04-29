// JavaScript Document

var website_header_variable = 'http://jdaiannualreports.com/'; // Must change when moved to the new server
var selected_year = localStorage.selected_year; 
var allReportYears = new Array();
var allReportSiteNames = new Array();
var currentReportsTable = "";
var currentYearReportsTable = "";
var current_record_status = '';
var jdai_username;
var site_name = localStorage.jdai_site_name;
var current_year = 2014; // current_date.getFullYear();

if (selected_year == null) {
localStorage.selected_year = current_year;
}

// Leverage Global Variables
var allLeverageIDs2 = new Array();
var allLeverageSiteName2 = new Array();
var allLeverageProjectDescriptions2 = new Array();
var allLeverageAmounts2 = new Array();
var allLeverageFundingTypes2 = new Array();
var totalLeverage = 0;
var totalLeverageAmountCurrentYear = 0;
var currentYearLeverageNumber = 0;
var totalLocalGovernment = 0;
var totalLocalGovernmentAmount = 0;
var currentYearLocalGovernment = 0;
var currentYearLocalGovernmentAmount = 0;
var totalStateFederal = 0;
var totalStateFederalAmount = 0;
var currentYearStateFederal = 0;
var currentYearStateFederalAmount = 0;
var totalFoundation = 0;
var totalFoundationAmount = 0;
var currentYearFoundation = 0;
var currentYearFoundationAmount = 0;
var totalMatch = 0;
var totalMatchAmount = 0;
var currentYearMatch = 0;
var currentYearMatchAmount = 0;
var totalOther = 0;
var totalOtherAmount = 0;
var currentYearOther = 0;
var currentYearOtherAmount = 0;

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

// Get ALL leverage info
$.post('php/get_all_leverage.php', function(data) {
		var pushedData = jQuery.parseJSON(data);
		var currentAllLeverageTable = '<table class="table table-striped table-condensed">';
		currentAllLeverageTable += "<tr><th>Year</th><th>Site Name</th><th>Description</th><th>Amount</th><th>Funding Type</th></tr>";
		var currentAllLeverageCounter = 0;
		var thisProjectDescription = "";
		// Get all the leverage info from the database
		$.each(pushedData, function(i, serverData) { 
			allLeverageProjectDescriptions2[i] = serverData.project_description;
			allLeverageAmounts2[i] = serverData.amount;
			allLeverageFundingTypes2[i] = serverData.funding_type;
			allLeverageSiteName2[i] = serverData.site_name;
			currentAllLeverageTable += "<tr><td>" + serverData.current_year + "</td><td>" + allLeverageSiteName2[i]+"</td><td>"+ allLeverageProjectDescriptions2[i];
			currentAllLeverageTable += "</td><td> $" + commaSeparateNumber(allLeverageAmounts2[i]) + "</td><td>";
			currentAllLeverageTable += allLeverageFundingTypes2[i] + "</td></tr>";
			currentAllLeverageCounter++; // keep count of the number of leverage items for the current report
			
			// Total Leverage Stats
			totalLeverage = totalLeverage + parseInt(allLeverageAmounts2[i]); // Total amount of leverage
			if (allLeverageFundingTypes2[i] == "Local Government Funds") // Count number of Local Government Funds
			{
				totalLocalGovernment++;
				totalLocalGovernmentAmount = totalLocalGovernmentAmount + parseInt(allLeverageAmounts2[i]);
			}
			if (allLeverageFundingTypes2[i] == "State or Federal Grants") // Count number of Local Government Funds
			{
				totalStateFederal++;
				totalStateFederalAmount = totalStateFederalAmount + parseInt(allLeverageAmounts2[i]);
			}
			if (allLeverageFundingTypes2[i] == "Foundation/Private Grants") // Count number of Local Government Funds
			{
				totalFoundation++;
				totalFoundationAmount = totalFoundationAmount + parseInt(allLeverageAmounts2[i]);
			}
			if (allLeverageFundingTypes2[i] == "In-Kind Match") // Count number of Local Government Funds
			{
				totalMatch++;
				totalMatchAmount = totalMatchAmount + parseInt(allLeverageAmounts2[i]);
			}
			if (allLeverageFundingTypes2[i] == "Other") // Count number of Local Government Funds
			{
				totalOther++;
				totalOtherAmount = totalOtherAmount + parseInt(allLeverageAmounts2[i]);
			}
						
			// Current year Leverage stats
			if (serverData.current_year == current_year) 
			{
				totalLeverageAmountCurrentYear = totalLeverageAmountCurrentYear + parseInt(allLeverageAmounts2[i]); // Total leverage amount
				currentYearLeverageNumber++; // # of leverage
				if (allLeverageFundingTypes2[i] == "Local Government Funds") // Count number of Local Government Funds
				{
					currentYearLocalGovernment++;
					currentYearLocalGovernmentAmount = currentYearLocalGovernmentAmount + parseInt(allLeverageAmounts2[i]);
				}
				if (allLeverageFundingTypes2[i] == "State or Federal Grants") // Count number of Local Government Funds
				{
					currentYearStateFederal++;
					currentYearStateFederalAmount = currentYearStateFederalAmount + parseInt(allLeverageAmounts2[i]);
				}
				if (allLeverageFundingTypes2[i] == "Foundation/Private Grants") // Count number of Local Government Funds
				{
					currentYearFoundation++;
					currentYearFoundationAmount = currentYearFoundationAmount + parseInt(allLeverageAmounts2[i]);
				}
				if (allLeverageFundingTypes2[i] == "In-Kind Match") // Count number of Local Government Funds
				{
					currentYearMatch++;
					currentYearMatchAmount = currentYearMatchAmount + parseInt(allLeverageAmounts2[i]);
				}
				if (allLeverageFundingTypes2[i] == "Other") // Count number of Local Government Funds
				{
					currentYearOther++;
					currentYearOtherAmount = currentYearOtherAmount + parseInt(allLeverageAmounts2[i]);
				}
			}		
		});
		currentAllLeverageTable += "</table>";
		$('#show_current_all_leverage_table').html(currentAllLeverageTable);
		$('#currentAllLeverageCounter').html(currentAllLeverageCounter);
		$('#totalLeverage').html('$' + commaSeparateNumber(totalLeverage));
		$('#totalLeverageAmountCurrentYear').html('$' + commaSeparateNumber(totalLeverageAmountCurrentYear));
		$('#currentYearLeverageNumber').html(currentYearLeverageNumber);
		$('#totalLocalGovernment').html(totalLocalGovernment);
		$('#totalLocalGovernmentAmount').html('$' + commaSeparateNumber(totalLocalGovernmentAmount));
		$('#currentYearLocalGovernment').html(currentYearLocalGovernment);
		$('#currentYearLocalGovernmentAmount').html('$' + commaSeparateNumber(currentYearLocalGovernmentAmount));
		$('#totalStateFederal').html(totalStateFederal);
		$('#totalStateFederalAmount').html('$' + commaSeparateNumber(totalStateFederalAmount));
		$('#currentYearStateFederal').html(currentYearStateFederal);
		$('#currentYearStateFederalAmount').html('$' + commaSeparateNumber(currentYearStateFederalAmount));
		$('#totalFoundation').html(totalFoundation);
		$('#totalFoundationAmount').html('$' + commaSeparateNumber(totalFoundationAmount));
		$('#currentYearFoundation').html(currentYearFoundation);
		$('#currentYearFoundationAmount').html('$' + commaSeparateNumber(currentYearFoundationAmount));
		$('#totalMatch').html(totalMatch);
		$('#totalMatchAmount').html('$' + commaSeparateNumber(totalMatchAmount));
		$('#currentYearMatch').html(currentYearMatch);
		$('#currentYearMatchAmount').html('$' + commaSeparateNumber(currentYearMatchAmount));
		$('#totalOther').html(totalOther);
		$('#totalOtherAmount').html('$' + commaSeparateNumber(totalOtherAmount));
		$('#currentYearOther').html(currentYearOther);
		$('#currentYearOtherAmount').html('$' + commaSeparateNumber(currentYearOtherAmount));
		// alert("Number of leverage found for the current report: " + currentLeverageCounter);
}); // End Post	

