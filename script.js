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

        window.location.href = "employee.html";

    }

    // Invalid Login
    else {

        document.getElementById("message").innerHTML =
            "Invalid User ID or Password";

    }

}
