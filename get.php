<?php
/*
  Prints the list of all the users from database named `users` in Json format.
*/
require('db.php');

$query = "SELECT * FROM users";

$result = mysqli_query($conn, $query);
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);
?>
