<?php
// Connect to the database (adjust these settings as needed)
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process the form data
$name = $_POST['name'];
$phone = $_POST['number'];
$email = $_POST['email'];
$funDate = $_POST['funDate'];
$funDetails = $_POST['funDetails'];

$sql = "INSERT INTO database_table (Name, Number, Email, FunctionDate,FunctionDetails) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $phone, $email, $funDate, $funDetails);

if ($stmt->execute()) {
    echo "Submitted Successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$stmt->close();
$conn->close();
?>
