<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $movie = $_POST["movie"];
    $seats = $_POST["seats"];
    $payment = $_POST["payment"];

    echo "<h2>Booking Confirmation</h2>";
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Movie: " . htmlspecialchars($movie) . "<br>";
    echo "Seats: " . htmlspecialchars($seats) . "<br>";
    echo "Payment Method: " . htmlspecialchars($payment) . "<br>";
    echo "<h3 style='color:green;'>Your ticket has been successfully booked!</h3>";
} else {
    echo "<h3 style='color:red;'>Invalid Request</h3>";
}
?>
