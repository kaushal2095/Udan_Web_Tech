<?php
 
 include_once "db_conn.php";

 if(isset($_POST["newsletter"])){

  $query=mysqli_query($con,"INSERT INTO data VALUES ('','".$_POST['search']."')");

  if($query){
  	echo "Thankyou for subscribing us..";
  }
  else{
  	echo "Error: <br>" . mysqli_error($con);
  }

 }


  if(isset($_POST["join"])){

$to = "pawankumar03082000@gmail.com";
$subject = "Inquiry ,phone no.".$_POST["phone"];
$msg = $_POST["message"];
$headers = "From:".$_POST["email"];

  if(mail($to,$subject,$msg,$headers)){
  	echo "pass";
  }
  else{
  	echo "not send";
  }

  }

?>