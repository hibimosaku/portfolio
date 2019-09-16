<?php
require_once 'common.php';
session_start();

if (!empty($_POST)) {
    if ($_POST['name']=='') {
        $error['name']='blank';
    }
    if ($_POST['email']=='') {
        $error['email']='blank';
    }
    if (strlen($_POST['password'])<4) {
        $error['password']='length';
    }
    if ($_POST['password']=='') {
        $error['password']='blank';
    }
    // $fileName=$_FILES['image']['name'];
    // if(!empty($fileName)){
    //   $ext=substr($fileName,-3);
    //   if($ext !='jpg' && $ext != 'gif'){
    //     $error['image'] = 'type';
    //   }
    // }

    if (empty($error)) {
        // $image=date('YmHis') . $_FILES['image']['name'];
        // move_uploaded_file($_FILES['image']['tmp_name'], '../member_picture/' .$image);

        $_SESSION['join']=$_POST;
        $_SESSION['join']['image']=$image;
        header('location:check.php');
        exit();
    }
}
if($_GET['action']=='rewrite'){
   $_POST['name']=$_SESSION['name'];
   $_POST['email']=$_SESSION['email'];
   $_POST['password']=$_SESSION['password'];


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
<form action="check.php" method="post" enctype="multipart/form-data">
<dl>
  <dt>ニックネーム<span class="required">必須</span></dt>
  <dd><input type="text" name="name" size="35" maxlength="255" value="<?php echo e($_POST['name']); ?>">
    <?php if($error['name']=='blank'): ?>
      <p class="error">*ニックネームを入力してください。</p>
    <?php endif; ?>
  </dd>
  <dt>メールアドレス<span class="required">必須</span></dt>
  <dd><input type="text" name="email" size="35" maxlength="255" value="<?php echo e($_POST['email']); ?>"></dd>
    <?php if($error['email']=='blank'): ?>
      <p class="error">メールアドレスを入力してください</p>
    <?php endif; ?>
  <dt>パスワード<span class="required">必須</span></dt>
  <dd><input type="password" name="password" size="10" maxlength="20" value="<?php echo e($_POST['password']); ?>"></dd>
    <?php if($error['password']=='blank'): ?>
      <p class="error">パスワードを入力してください</p>
    <?php endif; ?>
    <?php if($error['password']=='length'): ?>
      <p class="error">パスワードは4文字以上で入力してください</p>
    <?php endif; ?>
  
<!--    
  <dt>写真など<span class="required">必須</span></dt>
  <dd><input type="file" name="image" size="35"></dd>
    <?php if($error['image']=='type'): ?>
      <p class="error">*写真などは「.gif」または「.jpg」の画像を指定してください</p>
    <?php endif; ?>

    <?php if(!empty($error)): ?>
      <p class="error">*恐れ入りますが、画像を改めて指定してください</p>
    <?php endif; ?>
-->
</dl>
<div>
  <input type="submit" value="入力内容を確認する">
</div>

</form>
</body>
</html>