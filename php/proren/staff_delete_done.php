<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>PHP_study</title>
</head>
<body>
<?php
require_once 'common.php';


try{

  $dbh=getDb();

  $staff_code=$_POST['code'];
  $dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  $stmt=$dbh->prepare('delete from mst_staff WHERE code=?');
  $stmt->bindValue(1,$staff_code);
  $stmt->execute();


  $dbh=null;


}catch(Exception $e){
  print 'ただいま障害により大変ご迷惑をお掛けしております。';
  exit();
}
?>
削除しました。<br>
<br>
<a href="staff_list.php">戻る</a>

</body>
</html>