function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const validPasswords = {
        "Joshy": "https://trusted-weed-sites.vercel.app/",
        "Demetri": "https://trusted-weed-sites.vercel.app/"
    };

    if (validPasswords[passwordInput]) {
        window.location.href = validPasswords[passwordInput];
    } else {
        alert("Invalid password. Please try again.");
    }
}
