/*Register page validation start*/
function validateForm() {
    const name = document.getElementById("name").value;
    const namePattern = /^[A-Za-z ]+$/;
    if (!name || !namePattern.test(name)) {
        alert("Please enter a valid name (letters only).");
        return false;
    }

    const bloodGroup = document.getElementById("blood-group").value;
    if (!bloodGroup) {
        alert("Please select a blood group.");
        return false;
    }

    const mobile = document.getElementById("mobile").value;
    const mobilePattern = /^[0-9]{10}$/; 
    if (!mobile || !mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const password = document.getElementById("pass").value;
    if (!password || password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    return true;
}
/*Register page validation end*/