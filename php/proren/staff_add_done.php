

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

  $staff_name=$_POST['name'];
  $staff_pass=$_POST['pass'];  
  $staff_name=htmlspecialchars($staff_name,ENT_QUOTES,'UTF-8');
  $staff_pass=htmlspecialchars($staff_pass,ENT_QUOTES,'UTF-8');
  $dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  $stmt=$dbh->prepare('INSERT INTO mst_staff(name,password) VALUES(?,?)');
  $data[]=$staff_name;
  $data[]=$staff_pass;
  $stmt->execute($data);

  $dbh=null;

  print $staff_name;
  print 'さんを追加しました。<br>';

}catch(Exception $e){
  print 'ただいま障害により大変ご迷惑をお掛けしております。';
  exit();
}
?>
<a href="staff_list.php">戻る</a>

</body>
</html>