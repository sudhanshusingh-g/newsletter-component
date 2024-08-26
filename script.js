
const successContainer = document.getElementById("success_message_container");
const formContainer = document.getElementById("newsletter_form_container");
const dismissButton = document.getElementById("dismiss_button");
const image_container = document.querySelector(".image_container");

if(window.innerWidth >= 768){
    image_container.innerHTML = `<img src="./assets/images/illustration-sign-up-desktop.svg" alt="dashboard" class="dashboard_image" />
    `;
}
else{
    image_container.innerHTML = `<img src="./assets/images/illustration-sign-up-mobile.svg" alt="dashboard" class="dashboard_image" />
    `;
}



// Function to show the success message
dismissButton.addEventListener("click", () => {
    successContainer.style.display = "none";
    formContainer.style.display = "block";
});
