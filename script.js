function login() {

    let userId = document.getElementById("userId").value;
    let password = document.getElementById("password").value;

    // Admin Login
    if (userId === "TD000" && password === "TISKORA123") {

        window.location.href = "admin.html";

    }

    // Employee Login
    javascript
else if (
    (userId === "TD001" && password === "123456") ||
    (userId === "TD002" && password === "123456") ||
    (userId === "TD003" && password === "123456") ||
    (userId === "TD004" && password === "123456")
) {

    localStorage.setItem("currentUser", userId);

    window.location.href = "employee.html";

}



    // Invalid Login
    else {

        document.getElementById("message").innerHTML =
            "Invalid User ID or Password";

    }

}
function logout(){

    window.location.href = "login.html";

}
function checkIn(){

    let time = new Date().toLocaleTimeString();

    document.getElementById("checkInTime").innerHTML = time;

}

function checkOut(){

    let time = new Date().toLocaleTimeString();

    document.getElementById("checkOutTime").innerHTML = time;

}
```javascript
window.onload = function () {

    let currentUser = localStorage.getItem("currentUser");

    if (currentUser == "TD001") {

        document.getElementById("employeeName").innerHTML = "Anjali";
        document.getElementById("employeeId").innerHTML = "TD001";
        document.getElementById("department").innerHTML = "Operations";
        document.getElementById("designation").innerHTML = "Executive";

    }

    else if (currentUser == "TD002") {

        document.getElementById("employeeName").innerHTML = "Prachi";
        document.getElementById("employeeId").innerHTML = "TD002";
        document.getElementById("department").innerHTML = "Operations";
        document.getElementById("designation").innerHTML = "Executive";

    }

    else if (currentUser == "TD003") {

        document.getElementById("employeeName").innerHTML = "Abhay";
        document.getElementById("employeeId").innerHTML = "TD003";
        document.getElementById("department").innerHTML = "Inventory";
        document.getElementById("designation").innerHTML = "Executive";

    }

    else if (currentUser == "TD004") {

        document.getElementById("employeeName").innerHTML = "Rahul";
        document.getElementById("employeeId").innerHTML = "TD004";
        document.getElementById("department").innerHTML = "Marketing";
        document.getElementById("designation").innerHTML = "Executive";

    }

}
```
