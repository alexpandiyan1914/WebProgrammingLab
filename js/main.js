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

/*Search page start*/
let isBackButtonClicked = false;
function goBack() {  
    isBackButtonClicked = true;
    window.history.back();
}

function resetMessage() {
    
    document.getElementById("donor-list").innerHTML = "";
    document.getElementById("output_heading").innerText = "";
    alert("Can we reset the Form ?");
}

function search_validation() {
    if (isBackButtonClicked) {
        return true;  
    }

    let bloodGroup = document.getElementById("bgroup_search").value;
    let state = document.getElementById("state_search").value;
    let country = document.getElementById("country_search").value;
    let district = document.getElementById("district_search").value;

    if (bloodGroup === "Select blood-group") {
        alert("Please select a valid Blood Group.\n");
        return false;
    }
    if (state === "Select State") {
        alert("Please select a valid State.\n");
        return false;
    }
    if (country === "Select Country") {
        alert("Please select a valid Country.\n");
        return false;
    }
    if (district === "Select District") {
        alert("Please select a valid District.\n");
        return false;
    }    
    return true;
};

const donors = [
    { name: "Alexpandiyan A", bloodGroup: "o+", city: "Madurai", contact: "1234...." },
    { name: "Prem kumar M", bloodGroup: "O+", city: "Madurai", contact: "1234...." },
    { name: "Sri charan S", bloodGroup: "O+", city: "Madurai", contact: "1234...." },
    { name: "Pavan B", bloodGroup: "O+", city: "Madurai", contact: "1234...." },
    { name: "Sangkrishna", bloodGroup: "A+", city: "chennai", contact: "1234...." },
    { name: "Alagan A", bloodGroup: "A+", city: "Chennai", contact: "1234...." },
    { name: "Kanishk samurai K", bloodGroup: "O+", city: "Salem", contact: "1234...." },
    { name: "Agasthiya S", bloodGroup: "O+", city: "Salem", contact: "1234...." }
];

function findDonors(event) {
    event.preventDefault();   

    search_validation(); 
    if (!search_validation()) {
        return false; 
    }

    let selectedGroup = document.getElementById("bgroup_search").value;
    let donorListDiv = document.getElementById("donor-list");
    let outputHeading = document.getElementById("output_heading");
    donorListDiv.innerHTML = "";


    let filteredDonors = donors.filter(donor => donor.bloodGroup === selectedGroup);

    if (filteredDonors.length === 0) {
        donorListDiv.innerHTML = "<p>No donors found for this blood group.</p>";
        return false;
    }

    outputHeading.style.display = "block";  

    filteredDonors.forEach(donor => {
        let donorCard = `
            <div class="donor-card" style="border: 1px solid #ccc; padding: 10px; margin: 5px; border-radius: 5px;">
                <strong>${donor.name}</strong><br>
                Blood Group: ${donor.bloodGroup} <br>
                City: ${donor.city} <br>
                Contact: ${donor.contact}
            </div>
        `;
        donorListDiv.innerHTML += donorCard;
    });

    return false; 
}

function highlightButton() {
    let button = document.getElementById("find-button");
    button.style.backgroundColor = "red"; 
    button.style.transform = "scale(1.1)";
    button.style.border = "2px solid white";

    setTimeout(() => {
        button.style.backgroundColor = ""; 
        button.style.transform = "scale(1)"; 
        button.style.border = ""; 
    }, 3000); 
}

function doubleclick(){
    alert("double clicked !");
}

function goBack() {
    window.history.back();  // This takes the user to the previous page in history
}
