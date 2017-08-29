<?php
/*
If user is set, then parses the given string into Json format and adds the
user to the database (table named `users`).
*/
require ('db.php');

if(isset($_POST['user'])){
  $user = json_decode($_POST['user']);

  $name = mysqli_real_escape_string($conn, $user->name);
  $surname = mysqli_real_escape_string($conn, $user->surname);
  $email = mysqli_real_escape_string($conn, $user->email);

  $query = "INSERT INTO users (name, surname, email) VALUES('$name', '$surname', '$email')";

  if(mysqli_query($conn, $query)){
    echo "User Added";
  }else {
    echo "Error: " . mysqli_error($conn);
  }
}
?>
