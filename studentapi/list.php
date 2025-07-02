<?php
    require 'connect.php'

    $students = [];
    $sql = "SELECT ID, firstName, lastname, email, phoneNumber, program, imageName FROM students";

    if($result = mysqli_query($con, $sql))
    {
        $count = 0;
        while ($row = mysqli_fetch_assoc($result))
        {
            $students[$count]['studentID'] = $row['studentID'];
            $contacts[$count]['firstName'] = $row['firstName'];
            $contacts[$count]['lastName'] = $row['lastName'];
            $contacts[$count]['email'] = $row['email'];
            $contacts[$count]['phone'] = $row['phone'];
            $contacts[$count]['program'] = $row['program'];
            $contacts[$count]['imageName'] = $row['imageName'];
            $contacts[$count]['typeID'] = $row['typeID'];

            $count++;
        }

      echo json_encode(['data'=>$students]);
    }
    else
    {
        http_response_code(404);
    }

    
?>

