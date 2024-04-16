<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Validate email (you can add more validation)
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Save the email to your database or perform other actions (e.g., send to email list service)
        // For demonstration purposes, let's just print the email here
        echo "Thank you for subscribing! Email: " . $email;
    } else {
        echo "Invalid email address";
    }
} else {
    // Redirect or display an error message if someone tries to access this script directly
    header("Location: index.html");
    exit();
}
?>