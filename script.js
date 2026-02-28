const ACCESS_KEY = "VIDYA2026";

function login() {
    const key = document.getElementById("passkey").value;

    if (key === ACCESS_KEY) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid Access Key";
    }
}

if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}
