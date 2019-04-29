<?php
function showDateForm()
{
echo '<select name="DateOfBirth_Day" >
        <option>- Day -</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
    </select> 
      <select name="Month">
<option>- Month -</option>
<option value = "1">January</option>
<option value = "2">February</option>
<option value = "3">March</option>
<option value = "4">April</option>
<option value = "5">May</option>
<option value = "6">June</option>
<option value = "7">July</option>
<option value = "8">August</option>
<option value = "9">September</option>
<option value = "10">October</option>
<option value = "11">November</option>
<option value = "12">December</option> 
</select>
      <select>
  <option>2013</option>
  <option>2012</option>
  <option>2011</option>
 </select><br/>';
} // End of function

function mediaTrainingForm()
{
echo 'Description of Training: <input class="input-xxlarge" type="text" placeholder="Insert training here...">
      <br><br>';
	 showDateForm();
	 echo '<br>
     Number of Persons Trained: <input type="text" class="input-mini" placeholder="##">
       JDAI Focus Areas: <select class="span3">
  <option>Use of Data</option>
  <option>Reducing Racial/Ethnic Disparities</option>
  <option>Special Populations</option>
 </select>';
} // End of function


function mediaTypeForm()
{
	echo 'Media Type: <label class="radio inline"> 
  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
  Newspaper 
</label>
<label class="radio inline">
  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
  Magazine 
</label>
<label class="radio inline">
  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
 Website 
</label>
<label class="radio inline">
  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
 TV 
</label>
<label class="radio inline">
  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
  Other
</label><br>
Name of Media: <input class="span8" type="text" placeholder="Also include brief description">';
} // End of function

function showMeetingForm()
{
	echo '
	Description of Session: <input class="input-xxlarge" type="text" placeholder="Include Meetings, Conferences and Presentations">
      <br><br>
       Number of Times: <input type="text" class="input-mini" placeholder="##">
       Number of Attendees: <input type="text" class="input-mini" placeholder="##">
       Type: <select>
  <option>Conference</option>
  <option>Meeting</option>
  <option>Presentation</option>
 </select>';
} // End of function

function showLeverageForm()
{
	echo '
Description of Project: <input class="input-xxlarge" type="text" placeholder="Also include staff description...">
      <br><br>
       Amount: <div class="input-prepend input-append">
  <span class="add-on">$</span>
  <input class="span4" id="appendedPrependedInput" type="text">
  <span class="add-on">.00</span>
</div>
       Funding Type: <select>
  <option>Local Government</option>
  <option>Foundation/Private Grants</option>
  <option>Other</option>
 </select>';
}
// End of function

function showReformsForm()
{
	echo '
Specific Reforms Implemented: <input class="input-xxlarge" type="text" placeholder="Enter text here...">
      <br><br>
       JDAI Focus Area: <input type="text" class="input-xlarge" placeholder="Enter text here...">
       Reform Type: <select>
  <option>Policy Change</option>
  <option>Program Change</option>
  <option>Practice Change</option>
 </select>';
}
// End of function

?>