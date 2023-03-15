<?php

$api_key = '02430b19e4558410c2f608d82ee4cab6'; // Replace with your Mailtrap API key
$url = $_GET['url'];

$headers = array(
  'Authorization: Bearer ' . $api_key,
  'Content-Type: application/json'
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
curl_close($ch);

echo $result;
?>