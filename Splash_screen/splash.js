// Wait until the splash animation finishes
setTimeout(() => {

    // Check whether the user is logged in
    const isLoggedIn = localStorage.getItem("loggedIn");

    // Make the splash screen disappear
    document.querySelector("#splash-screen").classList.add("hide");

    // Wait for the disappearance animation
    setTimeout(() => {

        if (isLoggedIn === "true") {
            window.location.href = "../main.html";
        } else {
            window.location.href = "../Login_screen/login.html";
        }

    }, 600);

}, 5000);
