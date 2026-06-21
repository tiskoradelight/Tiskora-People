// =========================
// TISKORA PEOPLE v2.0
// PART 1
// =========================


// -------------------------
// LOGIN
// -------------------------

function login() {

    let userId = document.getElementById("userId").value;
    let password = document.getElementById("password").value;

    // Admin Login

    if (userId === "TD000" && password === "TISKORA123") {

        localStorage.setItem("currentUser", "TD000");

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

    else {

        document.getElementById("message").innerHTML =
            "Invalid User ID or Password";

    }

}



// -------------------------
// LOGOUT
// -------------------------

function logout() {

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

}



// -------------------------
// CHECK IN
// -------------------------

function checkIn() {

    let currentUser = localStorage.getItem("currentUser");

    let checkInTime = new Date();

    localStorage.setItem(

        currentUser + "_checkInTime",

        checkInTime

    );

    document.getElementById("checkInTime").innerHTML =
        checkInTime.toLocaleTimeString();

}



// -------------------------
// CHECK OUT
// -------------------------

function checkOut() {

    let currentUser = localStorage.getItem("currentUser");

    let checkOutTime = new Date();

    localStorage.setItem(

        currentUser + "_checkOutTime",

        checkOutTime

    );

    document.getElementById("checkOutTime").innerHTML =
        checkOutTime.toLocaleTimeString();


    let checkInTime =
        new Date(

            localStorage.getItem(
                currentUser + "_checkInTime"
            )

        );


    let difference = checkOutTime - checkInTime;


    let hours = Math.floor(

        difference / (1000 * 60 * 60)

    );


    let minutes = Math.floor(

        (difference % (1000 * 60 * 60))
        / (1000 * 60)

    );


    let totalHours =

        hours + " Hours " + minutes + " Minutes";


    document.getElementById("workingHours").innerHTML =
        totalHours;


    let history = JSON.parse(

        localStorage.getItem(

            currentUser + "_attendanceHistory"

        )

    ) || [];


    history.push({

        date: new Date().toLocaleDateString(),

        checkIn: checkInTime.toLocaleTimeString(),

        checkOut: checkOutTime.toLocaleTimeString(),

        workingHours: totalHours

    });


    localStorage.setItem(

        currentUser + "_attendanceHistory",

        JSON.stringify(history)

    );


    showAttendanceHistory();

}
// =========================
// TISKORA PEOPLE v2.0
// PART 2
// =========================


// -------------------------
// SAVE PROFILE
// -------------------------

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



// -------------------------
// ATTENDANCE HISTORY
// -------------------------

function showAttendanceHistory() {

    let currentUser = localStorage.getItem("currentUser");


    let history = JSON.parse(

        localStorage.getItem(

            currentUser + "_attendanceHistory"

        )

    ) || [];


    let table = document.getElementById("attendanceTable");


    if (!table) {

        return;

    }


    table.innerHTML = "";


    history.forEach(function(item) {

        table.innerHTML += `

        <tr>

            <td>${item.date}</td>

            <td>${item.checkIn}</td>

            <td>${item.checkOut}</td>

            <td>${item.workingHours}</td>

        </tr>

        `;

    });

}



// -------------------------
// EMPLOYEE DETAILS
// -------------------------

function loadEmployeeDetails() {

    let currentUser = localStorage.getItem("currentUser");


    if (!document.getElementById("employeeName")) {

        return;

    }


    if (currentUser == "TD001") {

        document.getElementById("employeeName").innerHTML =
            "Anjali";

        document.getElementById("employeeId").innerHTML =
            "TD001";

        document.getElementById("department").innerHTML =
            "Operations";

        document.getElementById("designation").innerHTML =
            "Executive";

    }


    else if (currentUser == "TD002") {

        document.getElementById("employeeName").innerHTML =
            "Prachi";

        document.getElementById("employeeId").innerHTML =
            "TD002";

        document.getElementById("department").innerHTML =
            "Operations";

        document.getElementById("designation").innerHTML =
            "Executive";

    }


    else if (currentUser == "TD003") {

        document.getElementById("employeeName").innerHTML =
            "Abhay";

        document.getElementById("employeeId").innerHTML =
            "TD003";

        document.getElementById("department").innerHTML =
            "Inventory";

        document.getElementById("designation").innerHTML =
            "Executive";

    }


    else if (currentUser == "TD004") {

        document.getElementById("employeeName").innerHTML =
            "Rahul";

        document.getElementById("employeeId").innerHTML =
            "TD004";

        document.getElementById("department").innerHTML =
            "Marketing";

        document.getElementById("designation").innerHTML =
            "Executive";

    }

}
// =========================
// TISKORA PEOPLE v2.0
// PART 3
// =========================


// -------------------------
// ADMIN DASHBOARD
// -------------------------

function loadAdminDashboard() {

    let table = document.getElementById("adminAttendanceTable");

    if (!table) {

        return;

    }

    let employees = [

        {
            id: "TD001",
            name: "Anjali",
            department: "Operations"
        },

        {
            id: "TD002",
            name: "Prachi",
            department: "Operations"
        },

        {
            id: "TD003",
            name: "Abhay",
            department: "Inventory"
        },

        {
            id: "TD004",
            name: "Rahul",
            department: "Marketing"
        }

    ];


    table.innerHTML = "";

    let presentCount = 0;


    employees.forEach(function(employee) {

        let checkIn = localStorage.getItem(

            employee.id + "_checkInTime"

        );

        let checkOut = localStorage.getItem(

            employee.id + "_checkOutTime"

        );


        let status = "Absent";


        if (checkIn) {

            status = "Present";

            presentCount++;

        }


        table.innerHTML += `

        <tr>

            <td>${employee.id}</td>

            <td>${employee.name}</td>

            <td>${employee.department}</td>

            <td>${status}</td>

            <td>

            ${checkIn ?

                new Date(checkIn).toLocaleTimeString()

                :

                "--"

            }

            </td>

            <td>

            ${checkOut ?

                new Date(checkOut).toLocaleTimeString()

                :

                "--"

            }

            </td>

        </tr>

        `;

    });


    if (document.getElementById("totalEmployees")) {

        document.getElementById("totalEmployees").innerHTML = 4;

    }

    if (document.getElementById("presentEmployees")) {

        document.getElementById("presentEmployees").innerHTML =
            presentCount;

    }

    if (document.getElementById("absentEmployees")) {

        document.getElementById("absentEmployees").innerHTML =
            4 - presentCount;

    }

}



// -------------------------
// WINDOW LOAD
// -------------------------

window.onload = function() {

    let currentUser = localStorage.getItem("currentUser");


    if (

        document.getElementById("checkInTime") &&

        localStorage.getItem(currentUser + "_checkInTime")

    ) {

        document.getElementById("checkInTime").innerHTML =

            new Date(

                localStorage.getItem(

                    currentUser + "_checkInTime"

                )

            ).toLocaleTimeString();

    }


    if (

        document.getElementById("checkOutTime") &&

        localStorage.getItem(currentUser + "_checkOutTime")

    ) {

        document.getElementById("checkOutTime").innerHTML =

            new Date(

                localStorage.getItem(

                    currentUser + "_checkOutTime"

                )

            ).toLocaleTimeString();

    }


    showAttendanceHistory();

    loadEmployeeDetails();

    loadAdminDashboard();

};
