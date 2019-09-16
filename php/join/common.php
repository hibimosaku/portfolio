<?php
function e($str){
  return htmlspecialchars($str,ENT_QUOTES);
}
function getDb(){
  $dsn='mysql:dbname=ss572696_minibbs; host=157.112.187.123; charset=utf8';
  $usr='ss572696_user';
  $passwd='pass111';
  $db=new PDO($dsn,$usr,$passwd);
  return $db;

}



?>