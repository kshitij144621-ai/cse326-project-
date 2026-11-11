
// Step 1: Select Form
let form = document.getElementById("waitForm");

// Step 2: Submit Event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Step 3: Get Input Values
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let priority = document.getElementById("priority").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    // Step 4: Check Contact
    if (mobile === "" && email === "") {
        alert("Enter Mobile Number or Email");
        return;
    }

    // Step 5: Check Mobile Number
    if (mobile !== "" && !/^[0-9]{10}$/.test(mobile)) {
        alert("Enter Valid 10 Digit Mobile Number");
        return;
    }

    // Step 6: Success Message
    alert("Form Submitted Successfully!");

    // Step 7: Print Data
    console.log("Name:", name);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("Priority:", priority);
    console.log("Date:", date);
    console.log("Time:", time);

    // Step 8: Clear Form
    form.reset();

});
