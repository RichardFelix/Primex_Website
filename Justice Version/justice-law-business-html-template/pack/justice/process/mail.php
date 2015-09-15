<?php
// Information to be modified
$to_email = "rfelixmail@gmail.com"; // email address to which the form data will be sent
$subject = "Contact Request"; // subject of the email that is sent
if(trim($_POST["contact_name"])=='')
{
echo 'Please Fill The Name Field';
}
elseif(trim($_POST["contact_email"])=='')
{
echo 'Please Fill The Valid Email Field';
}elseif (filter_var($_POST["contact_email"], FILTER_VALIDATE_EMAIL) === false) {
  echo $_POST["contact_email"]." is not a valid email address";
} 
elseif(trim($_POST["contact_message"])=='')
{
echo 'Please Fill The Message';
}
else
{
	$con='';
$nam = strip_tags($_POST["contact_name"]);
$ema = strip_tags($_POST["contact_email"]);
if(isset($_POST["contact_phoneno"]) && $_POST["contact_phoneno"]!='')
$con = strip_tags($_POST["contact_phoneno"]);
$com = strip_tags($_POST["contact_message"]);


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: <' .$ema. '>' . "\r\n";
$headers .= "Reply-To: ".$ema."\r\n";

$email_body = 
	"<strong>From: </strong>" . $nam . "<br />
	<strong>Email: </strong>" . $ema . "<br />";
	if(isset($_POST["contact_phoneno"]) && $_POST["contact_phoneno"]!='')
$email_body .="<strong>Contact No: </strong>" . $con . "<br />";	
	$email_body .="<strong>Message: </strong>" . $com;
	

// Assuming there's no error, send the email and redirect to Thank You page
	
if( mail($to_email, $subject, $email_body, $headers) ) {	
	echo '<i class="glyphicon glyphicon-ok"></i> Thank you ' .$nam. '. Your Email was successfully sent!';
} else {	
	echo '<i class="glyphicon glyphicon-remove"></i> Sorry ' .$nam. '. Your Email was not sent. Resubmit form again Please..';
}
}