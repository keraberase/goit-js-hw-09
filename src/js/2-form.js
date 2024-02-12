const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
const email = form.elements.email.value;
    const message = form.elements.message.value;

    if (email && message) {
        const data = {
            email,
            message,
        };
console.log("Форма відправлена зі значеннями:", data); // Вивід у консоль
        form.reset();
        localStorage.removeItem('feedback-form-state');
    } else {
        alert("Будь ласка, заповніть обидва поля перед надсиланням форми.");
    }
}
function onFormInput() {
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const data = {
        email,
        message,
    };
    saveToLS('feedback-form-state', data);
};


function saveToLS(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key,zip)
    
};

function loadFromLS(key) {
    const zip = localStorage.getItem(key);
   try {
   return  JSON.parse(zip)
   } catch (error) {
       return zip;
    
   }
    
}

function init() {
    const data = loadFromLS('feedback-form-state')|| {};
    form.elements.email.value = data.email || "";
    form.elements.message.value = data.message || "";
    console.log(form.elements);
}
init();
