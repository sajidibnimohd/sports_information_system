  // Check if the user is logged in
  if (document.cookie.includes("loggedIn=true")) {
    // If the user is logged in, change the button to a logout button
    document.getElementById("login-logout-button").textContent = "Logout";
    document.getElementById("login-logout-button").setAttribute("onclick", "logout()");
  } else {
    // If the user is not logged in, keep the button as a login button
    document.getElementById("login-logout-button").setAttribute("href", "Admin Login.html");
  }