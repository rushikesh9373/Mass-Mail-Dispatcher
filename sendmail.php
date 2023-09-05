<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $csvFile = $_FILES['csvFile']['tmp_name'];
    $emailContent = $_POST['emailContent'];

    $csvData = file($csvFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    $invalidEmails = [];
    $validEmails = [];

    foreach ($csvData as $line) {
        $email = trim($line);
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $validEmails[] = $email;
        } else {
            $invalidEmails[] = $email;
        }
    }

    // Send emails to valid addresses
    foreach ($validEmails as $email) {
        $subject = 'Your Subject Here'; // Set your subject
        $headers = 'From: your@example.com'; // Set your sender email address
        $message = $emailContent; // Use the provided email content

        mail($email, $subject, $message, $headers);
    }

    // Return the results
    $response = [
        'validEmails' => $validEmails,
        'invalidEmails' => $invalidEmails,
    ];

    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    echo 'Method not allowed';
}
?>