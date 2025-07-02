<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'connect.php';   // ✅ Add semicolon

header('Content-Type: application/json');

$students = [];
$sql = "SELECT ID, firstName, lastName, email, phoneNumber, program, imageName FROM students";

if($result = mysqli_query($con, $sql))
{
    $count = 0;
    while ($row = mysqli_fetch_assoc($result))
    {
        $students[$count]['ID'] = $row['ID'];               // ✅ Match column names
        $students[$count]['firstName'] = $row['firstName'];
        $students[$count]['lastName'] = $row['lastName'];
        $students[$count]['email'] = $row['email'];
        $students[$count]['phone'] = $row['phoneNumber'];   // ✅ Match SELECT field
        $students[$count]['program'] = $row['program'];
        $students[$count]['imageName'] = $row['imageName'];
        // If you have typeID, add it too!
        // $students[$count]['typeID'] = $row['typeID'];
        $count++;
    }

    echo json_encode(['data' => $students]);
}
else
{
    http_response_code(404);
}
?>
