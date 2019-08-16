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
<h2>スタッフ修正</h2>
<br>
<br>
<form method="post" action="staff_edit_check.php">
  <input type="hidden" name="code" value="<?php print $staff_code; ?>">
スタッフ名<br>
  <input type="text" name="name" style="width:200px" value="<?php print $staff_name; ?>">
  <br> 
パスワードを入力してください。<br>
　<input type="password" name="pass" style="width:100px"><br>
パスワードをもう一度入力してください。<br>
  <input type="password" name="pass2" style="width:100px"><br>
  <input type="button" onclick="history.back()" value="戻る">
  <input type="submit" value="OK">

</form>
</body>
</html>