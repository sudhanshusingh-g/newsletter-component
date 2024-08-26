
const successContainer = document.getElementById("success_message_container");
const formContainer = document.getElementById("newsletter_form_container");
const dismissButton = document.getElementById("dismiss_button");
const image_container = document.querySelector(".image_container");
const mainContainer=document.querySelector("main");
const inputField = document.getElementById("input_field");
const form=document.querySelector("form");
const error_message=document.querySelector(".error_message");
const email_address=document.getElementById("email_address");

// Function to validate the email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to show the error message
function showError(message){
    error_message.textContent=message;
    error_message.style.display="block";
    inputField.style.border="2px solid hsl(354, 100%, 66%)";
}

// Function to hide the error message
function hideError(){
    error_message.style.display="none";
    inputField.style.border="1px solid hsl(223, 100%, 88%)";
}

//Form submission
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email=inputField.value;
    if(validateEmail(email)){
        successContainer.style.display = "block";
        formContainer.style.display = "none";
        email_address.textContent=email;
        window.innerWidth <= 768 
        ? (mainContainer.style.height="100%") 
        : (mainContainer.style.height="fit-content");
        window.innerWidth <= 768
          ? (mainContainer.style.width = "100%")
          : (mainContainer.style.width = "40%");

        inputField.value="";
        hideError();
    }
    else{
        showError("Please provide a valid email address");
    }
});



if(window.innerWidth >= 768){
    image_container.innerHTML = `<img src="./assets/images/illustration-sign-up-desktop.svg" alt="dashboard" class="dashboard_image" />
    `;
}
else{
    image_container.innerHTML = `<img src="./assets/images/illustration-sign-up-mobile.svg" alt="dashboard" class="dashboard_image" />
    `;
}


function updateLayout(){
    if(window.innerWidth <= 768){
        mainContainer.style.height="100%";
        mainContainer.style.width="100%";
    }
    else{
        mainContainer.style.height="fit-content";
        mainContainer.style.width="40%";
    }
}

window.addEventListener("resize",()=>{
    updateLayout();
});



// Function to show the success message
dismissButton.addEventListener("click", () => {
    
    successContainer.style.display = "none";
    formContainer.style.display = "block";
});
