<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>PHP_study</title>
<link rel="stylesheet" href="animate.css">
</head>
<body>
<div class="animated bounce">
<h2>リスト</h2>
</div>
<?php

require_once 'common.php';

try{
$dbh=getDb();
$stmt=$dbh->prepare('select * from mst_staff where 1');
$stmt->execute();

$dbh=null;
print 'スタッフ一覧<br><br>';

print '<form method="post" action="staff_branch.php">';
while(true){
  $rec=$stmt->fetch(PDO::FETCH_ASSOC);
  if($rec==false){
    break;
  }
  print '<input type="radio" name="staffcode" value="'.$rec['code'].'">';

  print $rec['name'];
  print '<br>';
}
print '<input type="submit" name="disp" value="参照">';
print '<input type="submit" name="add" value="追加">';
print '<input type="submit" name="edit" value="修正">';
print '<input type="submit" name="delete" value="削除">';
print '</form>';
}
catch(Exception $e){
  print 'ただいま障害により大変ご迷惑をお掛けしております。';
  exit();
}
?>
</body>
</html>