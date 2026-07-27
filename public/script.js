const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click",(e)=>{

e.stopPropagation();

sidebar.classList.toggle("active");

});

document.addEventListener("click",(e)=>{

if(
!sidebar.contains(e.target) &&
!menuBtn.contains(e.target)
){

sidebar.classList.remove("active");

}

});

const form = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

async function loadContacts() {

    try {

        const response = await fetch("/api/destination");

        const contacts = await response.json();

        contactList.innerHTML = "";

        contacts.forEach(contact => {

            contactList.innerHTML += `
            <div class="saved-card">

                <h3>${contact.name}</h3>

                <p>${contact.email}</p>

                <p>${contact.destination}</p>

                <p>${contact.message}</p>

                <button onclick="deleteContact('${contact._id}')">
                    Delete
                </button>

            </div>
            `;

        });

    } catch (error) {

        alert(error.message);

    }

}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    destination: document.getElementById("destination").value,
    message: document.getElementById("message").value
};

    try {

        const response = await fetch("/api/destination", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        alert(result.message);

        form.reset();

        loadContacts();

    } catch (error) {

        alert(error.message);

    }

});

async function deleteContact(id) {

    await fetch(`/api/destination/${id}`, {

        method: "DELETE"

    });

    loadContacts();

}

loadContacts();