<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("405 Method Not Allowed");
}

// Now process the POST request
echo "POST request received!";
?>
