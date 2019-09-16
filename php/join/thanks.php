<?php
require_once 'common.php';

session_start();

// if($_SESSION['name']=''){
//   header('location:index.php');
//   exit();
// }
$options = array(
	'salt' => mcrypt_create_iv(22, MCRYPT_DEV_RANDOM),
	'cost' => 12
);

$name=$_SESSION['name'];
$email=$_SESSION['email'];
$password=password_hash($_SESSION['password'],PASSWORD_DEFAULT, $options);


$db=getDb();

$stmt=$db->prepare('insert into 
                    members(name,email,password)
                    values(?,?,?)');
$stmt->bindValue('1',$name);
$stmt->bindValue('2',$email);
$stmt->bindValue('3',$password);
$stmt->execute();
$rec=$stmt->fetch();
print_r($rec);
?>

<p>ユーザ登録が完了しました</p>
<p><a href="../">ログインする</a></p>