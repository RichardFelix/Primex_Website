<?php
$api_key = "dee761eaf60402076d7f4d25fa57fbe8-us11";
$list_id = "7c34a95ccf";

require('Mailchimp.php');
$Mailchimp = new Mailchimp( $api_key );
$Mailchimp_Lists = new Mailchimp_Lists( $Mailchimp );
$subscriber = $Mailchimp_Lists->subscribe( $list_id, array( 'email' => htmlentities($_REQUEST['email']) ) );

if ($subscriber['leid']!="" ) {
   echo "success";
}
else
{
    echo "fail";
}

?>
