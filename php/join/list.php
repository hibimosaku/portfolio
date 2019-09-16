<?php
require_once 'common.php';
session_start();
$db=getDb();
$stmt=$db->query('select * from members');
$rec=$stmt->fetch();

print_r($rec);
print ($rec['name']);
// foreach($rec as $member){
//   $id=$member['id'];
//   $name=$member['name'];
//   $email=$member['email'];
// }

?>
<table>
  <tr>
    <th>No</th>
    <th>name</th>
    <th>email</th>
  </tr>
  <tr>
    <th><?php print($rec['id']); ?></th>
    <th><?php print($rec['name']); ?></th>
    <th><?php print($rec['email']); ?></th>
  </tr>

</table>