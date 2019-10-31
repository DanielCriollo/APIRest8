<?php
    //call connectionDB file
    include ("connectionDB.php");

    //Get XML input values

    $Email=$_POST['email'];

    //Create SQL INSERT

    $sql="INSERT INTO users (email) VALUES ('$Email')";
    
    //Execute SQL and validate operation

    $conn->query($sql);

    if( $conn->query($sql)===TRUE){
        echo "User has been registered into DataBase";
    }else{
        die("The error is: ".$conn->error);
    }


    ?>