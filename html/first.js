// This code runs when the patient submits the form.

document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the information entered by the patient.
    const patient = {
        name: document.getElementById("patientName").value,
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        phone: document.getElementById("phone").value,
        ageUnit: document.getElementById("ageUnit").value,
        area: document.getElementById("area").value,
        doctor: document.getElementById("doctor").value,
        date: document.getElementById("appointmentDate").value,
        time: document.getElementById("appointmentTime").value
    };

    // Save the patient information in the browser.
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));

    // Create an enquiry number and open the confirmation page.
    const enquiryId = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("lastEnquiryId", enquiryId);

    window.location.href = "success.html";
});
