import throttle from 'lodash.throttle';

    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".feedback-form");
    const emailInput = form.querySelector('input[name="email"]');
    const messageTextarea = form.querySelector('textarea[name="message"]');

    const saveToLocalStorageThrottled = throttle(() => {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }, 500);

    const loadFromLocalStorage = () => {
    const savedFormData = localStorage.getItem("feedback-form-state");
    if (savedFormData) {
        const parsedData = JSON.parse(savedFormData);
        emailInput.value = parsedData.email;
        messageTextarea.value = parsedData.message;
    }
};

    emailInput.addEventListener("input", saveToLocalStorageThrottled);
    messageTextarea.addEventListener("input", saveToLocalStorageThrottled);

    loadFromLocalStorage();

    form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
    };
    
    if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert("E-mail i Message nie mogą być puste.");
    return;
    }
    
    console.log("", formData);

    localStorage.removeItem("feedback-form-state");
    emailInput.value = "";
    messageTextarea.value = "";
    });
});
