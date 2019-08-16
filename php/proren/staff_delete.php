<?php
require_once 'common.php';

try{

$staff_code=$_GET['staffcode'];
$dbh=getDb();
$stmt = $dbh->prepare('select name from mst_staff where code=?');
$stmt->bindValue(1,$staff_code);
$stmt->execute();
$rec=$stmt->fetch();
$staff_name=$rec['name'];
$dbh=null;
}catch(Exception $e){
  print 'ただいま障害により大変ご迷惑をお掛けしております。';
  exit();
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>PHP_study</title>
</head>
<body>
<h2>スタッフ削除</h2>
<?php print $rec['name']; ?>
<br>
このスタッフを削除してよろしいでしょうか？<br>
<form method="post" action="staff_delete_done.php">
  <input type="hidden" name="code" value="<?php print $staff_code; ?>">
  <input type="button" onclick="history.back()" value="戻る">
  <input type="submit" value="OK">

</form>
</body>
</html>