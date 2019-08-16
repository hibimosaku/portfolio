##sql接続（参考）
```
<?php
function getDb(){
	$dsn='mysql:dbname=ss572696_proren;host=157.112.187.123;charset=utf8';
	$user='ss572696_user';
	$passwd='pass111';
//try{
	$db=new PDO($dsn,$user,$passwd);
//	print'接続に成功しました';
	return $db;
//}catch(PDOException $e){
//	print "接続エラー:{$e->getMessage()}";
}	


function e($str,$charset='utf-8'){
	return htmlspecialchars($str,ENT_QUOTES or ENT_HTML5, $charset);
}

?>
```