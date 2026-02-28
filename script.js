// ================================
// SAFE INITIALIZATION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const ACCESS_KEY = "VIDYA2026";

    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            const passInput = document.getElementById("passkey");
            const errorText = document.getElementById("error");

            if (!passInput) return;

            const enteredKey = passInput.value.trim();

            if (enteredKey === ACCESS_KEY) {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                if (errorText) {
                    errorText.innerText = "Invalid Access Key";
                }
            }
        });
    }

    // Protect dashboard page
    if (window.location.pathname.includes("dashboard.html")) {
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "index.html";
        }
    }

});
