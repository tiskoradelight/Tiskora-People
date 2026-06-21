function login() {

    let userId = document.getElementById("userId").value;
    let password = document.getElementById("password").value;

    // Admin Login
    if (userId === "TD000" && password === "TISKORA123") {

        window.location.href = "admin.html";

    }

    // Employee Login
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


function logout() {

    window.location.href = "login.html";

}


function checkIn() {

    let checkInTime = new Date();

    localStorage.setItem("checkInTime", checkInTime);

    document.getElementById("checkInTime").innerHTML =
        checkInTime.toLocaleTimeString();

}


function checkOut() {

    let checkOutTime = new Date();

    localStorage.setItem("checkOutTime", checkOutTime);

    document.getElementById("checkOutTime").innerHTML =
        checkOutTime.toLocaleTimeString();

    let checkInTime = new Date(localStorage.getItem("checkInTime"));

    let difference = checkOutTime - checkInTime;

    let hours = Math.floor(difference / (1000 * 60 * 60));

    let minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );

    let workingHours =
        hours + " Hours " + minutes + " Minutes";

    document.getElementById("workingHours").innerHTML =
        workingHours;


    let attendance =
        JSON.parse(localStorage.getItem("attendance")) || [];

    attendance.push({

        date: new Date().toLocaleDateString(),

        checkIn:
            checkInTime.toLocaleTimeString(),

        checkOut:
            checkOutTime.toLocaleTimeString(),

        workingHours:
            workingHours

    });

    localStorage.setItem(
        "attendance",
        JSON.stringify(attendance)
    );

    showAttendance();

}


function saveProfile() {

    let currentUser = localStorage.getItem("currentUser");

    let profile = {

        photo: document.getElementById("photoUrl").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value

    };

    localStorage.setItem(
        currentUser + "_profile",
        JSON.stringify(profile)
    );

    alert("Profile Saved Successfully");

}


function showAttendance() {

    let attendance =
        JSON.parse(localStorage.getItem("attendance")) || [];

    let table =
        document.getElementById("attendanceTable");

    if (!table) return;

    table.innerHTML = "";

    attendance.forEach(function(record) {

        table.innerHTML += `

        <tr>

            <td>${record.date}</td>

            <td>${record.checkIn}</td>

            <td>${record.checkOut}</td>

            <td>${record.workingHours}</td>

        </tr>

        `;

    });

}



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


    if (localStorage.getItem("checkInTime")) {

        document.getElementById("checkInTime").innerHTML =
            new Date(localStorage.getItem("checkInTime")).toLocaleTimeString();

    }

    if (localStorage.getItem("checkOutTime")) {

        document.getElementById("checkOutTime").innerHTML =
            new Date(localStorage.getItem("checkOutTime")).toLocaleTimeString();

    }

    showAttendance();

}
