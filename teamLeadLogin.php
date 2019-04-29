<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Sign in to JDAI Portal</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
      }
	  
	  /* Wrapper for page content to push down footer */
      #wrap {
        min-height: 100%;
        height: auto !important;
        height: 100%;
        /* Negative indent footer by it's height */
        margin: 0 auto -60px;
      }

      /* Set the fixed height of the footer here */
      #push,
      #footer {
        height: 60px;
      }
      #footer {
        background-color: #f5f5f5;
      }

      .form-signin {
        max-width: 300px;
        padding: 19px 29px 29px;
        margin: 0 auto 20px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        -webkit-border-radius: 5px;
           -moz-border-radius: 5px;
                border-radius: 5px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
           -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
                box-shadow: 0 1px 2px rgba(0,0,0,.05);
      }
      .form-signin .form-signin-heading,
      .form-signin .checkbox {
        margin-bottom: 10px;
      }
      .form-signin input[type="text"],
      .form-signin input[type="password"] {
        font-size: 16px;
        height: auto;
        margin-bottom: 15px;
        padding: 7px 9px;
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
    <script type="application/javascript" src="js/casey_include_teamLeadLogin.js"></script>
    <!--<script type="application/javascript" src="js/casey_include.js"></script>-->
  </head>

  <body>

    <div class="container">

      <form class="form-signin" id="teamLeadLogin" action="admin1.php">
        <h2 class="form-signin-heading">JDAI Site Sign In</h2>
        <select id="team_leader_ID3">
        <option>Administration</option>
        <option>Bridgette Butler</option>
        <option>Bill Thorne</option>
        <option>Dana Shoenberg</option>
        <option>Danielle Lipow</option>
        <option>Denny Atherton</option>
        <option>Doug Mitchell</option>
        <option>Earl Ross</option>
        <option>Frank Orlando</option>
        <option>Gail D. Mumford</option>
        <option>Gina Peralta</option>
        <option>James Bell</option>
        <option>Jason Szanyi</option>
        <option>Jeff Bradley</option>
        <option>Jim Payne</option>
        <option>Jim Thorne</option>
        <option>John Rhoads</option>
        <option>Judy Cox</option>
        <option>Kelly Dedel</option>
        <option>Laura Ridolfi</option>
        <option>Lisa Macaluso</option>
        <option>Manager</option>
        <option>Marcia Rincon-Gallardo</option>
        <option>Mark Soler</option>
        <option>Meghan Guevara</option>
        <option>Melissa Spooner</option>
        <option>Michael Finley</option>
        <option>Miquel Lewis</option>
        <option>Orlando Martinez</option>
        <option>Rand Young</option>
        <option>Raquel Mariscal</option>
        <option>Regina Lurry</option>
        <option>Rick Jensen</option>
        <option>Saleem Shakir</option>
        <option>Scott MacDonald</option>
        <option>Stephanie Vetter</option>
        <option>Tiana Davis</option>
        <option>Tommy Jewel</option>
        <option>Other/Not Sure</option>
        </select>
        <input type="password" class="input-block-level" id="user_password" placeholder="Password">
        <!--<label class="checkbox">
          <input type="checkbox" value="remember-me"> Remember me
        </label>-->
       <!-- <input class="btn btn-large btn-primary" type="button" id="ta_tl_login_page_button" value="Sign in" /> --> 
           <button class="btn btn-large btn-primary" type="submit" id ="ta_tl_login_page_button">Sign in</button>
        <br /><br />
        Notice: If you are unable to log in we recommend that you clear your browser cache.  We have made some changes to the website's URL.  To do this refer to <a href="http://kb.iu.edu/data/ahic.html" target="_blank">http://kb.iu.edu/data/ahic.html</a>.
      </form>
<div id="push"></div>
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
