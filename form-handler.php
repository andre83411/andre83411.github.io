<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'andreamontes.rei@gmail.com';
$email_subject = 'New Web Message';
$email_body = "User Name: $name .\n".
              "User Email: $visitor_email .\n".
              "User Subject: $subject .\n".
              "User Message: $message .\n";

?>