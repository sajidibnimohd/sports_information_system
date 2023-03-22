function logout() {
    // get a reference to the logout button
    var logoutButton = document.getElementById("logout-button");
    // delete the "loggedIn" cookie
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.href = location.href;
}