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
  $staff_name=$_POST['name'];
  $staff_pass=$_POST['pass'];  
  $staff_name=htmlspecialchars($staff_name,ENT_QUOTES,'UTF-8');
  $staff_pass=htmlspecialchars($staff_pass,ENT_QUOTES,'UTF-8');
  $dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  $stmt=$dbh->prepare('UPDATE mst_staff SET name=?,password=? WHERE code=?');
  $stmt->bindValue(1,$staff_name);
  $stmt->bindValue(2,$staff_pass);
  $stmt->bindValue(3,$staff_code);
  $stmt->execute();


  $dbh=null;


}catch(Exception $e){
  print 'ただいま障害により大変ご迷惑をお掛けしております。';
  exit();
}
?>
修正しました。<br>
<br>
<a href="staff_list.php">戻る</a>

</body>
</html>