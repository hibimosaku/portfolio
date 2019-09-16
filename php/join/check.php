<?php
require_once 'common.php';
session_start();
if ($_POST!='') {
    $name=e($_POST['name']);
    $email=e($_POST['email']);
    $password=e($_POST['password']);
    $_SESSION['name']=$name;
    $_SESSION['email']=$email;
    $_SESSION['password']=$password;
}
?>


<!Doctype>
<html lang="ja">
<head>
<title>join</title>
<meta charset="utf-8">
</head>
<body>
<p>次のフォームに必要事項をご記入</p>
<form action="thanks.php" method="post" enctype="multipart/form-data">
<dl>
  <dt>ニックネーム</dt>
  <dd><?php print $name; ?></dd>
  <dt>メールアドレス</dt>
  <dd><?php print $email; ?></dd>
  <dt>パスワード</dt>
  <dd>【表示されません】</dd>
  <dt>写真など</dt>
  <dd></dd>
</dl>
<div>
  <a href="index.php?action=rewrite">&laquo:&nbsp:書き直す</a><br>
  <input type="submit" value="登録する">
</div>
</form>
</body>
</html>