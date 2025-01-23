// Smooth Scroll for Navigation Links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav ul li a, .footer-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});








// ---openPosition---

// Apply Button Event Listener
document.addEventListener("DOMContentLoaded", () => {
    const applyButtons = document.querySelectorAll(".apply-btn");

    applyButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your interest! Application details will be shared soon.");
        });
    });
});








// ---About---

// Simple script to add interactivity for any future features (e.g., dynamic content or form validation)
// Currently, it's set to be an empty script, but can be expanded later if needed.
console.log("Tata Power - About Us Page Loaded");







// ---Admin---

// Sample data for applications (this would be fetched from a server in real-world use)
const applications = [
    { fullName: "John Doe", email: "john.doe@example.com", phone: "1234567890", position: "UI/UX Design Intern", education: "Bachelor's Degree", status: "Under Review" },
    { fullName: "Jane Smith", email: "jane.smith@example.com", phone: "9876543210", position: "Software Development Intern", education: "Master's Degree", status: "Shortlisted" },
    { fullName: "Alice Brown", email: "alice.brown@example.com", phone: "5555555555", position: "Data Analyst Intern", education: "Other", status: "Rejected" },
];

// Function to display all applications in the table
function displayApplications(filteredApplications) {
    const tableBody = document.querySelector("#applications-table tbody");
    tableBody.innerHTML = ""; // Clear existing rows
    filteredApplications.forEach(application => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${application.fullName}</td>
            <td>${application.email}</td>
            <td>${application.phone}</td>
            <td>${application.position}</td>
            <td>${application.education}</td>
            <td>${application.status}</td>
            <td><button onclick="updateStatus(this, '${application.fullName}')">Update Status</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Filter applications based on the selected filters
function filterApplications() {
    const positionFilter = document.getElementById("position").value;
    const educationFilter = document.getElementById("education").value;
    const statusFilter = document.getElementById("status").value;

    const filteredApplications = applications.filter(application => {
        return (
            (positionFilter === "" || application.position === positionFilter) &&
            (educationFilter === "" || application.education === educationFilter) &&
            (statusFilter === "" || application.status === statusFilter)
        );
    });

    displayApplications(filteredApplications);
}

// Function to update the application status
function updateStatus(button, fullName) {
    const newStatus = prompt("Enter new status (Under Review, Shortlisted, Rejected):");
    if (newStatus) {
        const application = applications.find(app => app.fullName === fullName);
        if (application) {
            application.status = newStatus;
            button.parentElement.previousElementSibling.textContent = newStatus;
        }
    }
}

// Initialize the dashboard
document.addEventListener("DOMContentLoaded", () => {
    displayApplications(applications); // Display all applications initially
});









// ---faq---

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // Toggle answer visibility
        answer.style.display = isVisible ? 'none' : 'block';
    });
});






// ----contact-----


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formMessage = document.getElementById("formMessage");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if (name && email && message) {
        formMessage.textContent = "Thank you for contacting us, " + name + ". We'll get back to you shortly!";
        formMessage.style.display = "block";
    } else {
        formMessage.textContent = "Please fill in all fields before submitting.";
        formMessage.style.backgroundColor = "#f8d7da";
        formMessage.style.color = "#721c24";
        formMessage.style.display = "block";
    }

    // Reset form fields
    document.getElementById("contactForm").reset();
});
