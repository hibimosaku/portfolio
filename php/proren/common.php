<?php
function getDb(){
  $dsn ='mysql:dbname=ss572696_pronami;host=157.112.187.123;charset=utf8';
  $usr='ss572696_user';
  $password='pass111';
  $dbh=new PDO($dsn,$usr,$password);
  return $dbh;
}
function e($str){
  return htmlspecialchars($str);
}


?>