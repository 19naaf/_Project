var okName = false;                                         //inicio las variables en false para posteriormente dcomprobar 
var okEmail = false;                                        //si los campos estan correctos y pasarlos a true
var okPhone = false;
var okMessage = false;

function validateName() {
    let nameUser = document.getElementById("name");          //accedo al campo name del formulario  
    let patron_de_letras = /^[a-zA-Z]+$/;                     //Compruebo que solo sean letras
    if (!patron_de_letras.test(nameUser.value)) {            //si el campo name esta vacio o no son letras lanzo la siguiente logica
    document.getElementById("errorName").hidden = false;    //camo la propiedad hidden es false, se muestra el cambio de estilo q se muestra 
    nameUser.style.borderColor = "blue";                     //cambia el estilo para colocar un borde rojo si el campo name esta vacio
    nameUser.style.borderStyle = "dashed";
    okName = false;                                         //la variable ok name sigue sienfo falsa como cuando se inicio
    } else {                                                //de lo contrario
    document.getElementById("errorName").hidden = true;     // la propiedad hidden es true asi que quedan escondidas la propiedas de estilo d validacion 
    nameUser.style.borderStyle = "none";
    okName = nameUser.value;                                //como el nombre introducido paso la validacion recojo el valor en la variable OKname
    }
    checkValues();                                          //ejecuta la funcion checkValues que comprueba que todos los valores del formulario sean correctos
}

function validateEmail() {
    let emailUser = document.getElementById("email");
    let patron_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron_email.test(emailUser.value)) {
    document.getElementById("errorEmail").hidden = false;
    emailUser.style.borderColor = "blue";
    emailUser.style.borderStyle = "dashed";
    okEmail = false;
    } else {
    document.getElementById("errorEmail").hidden = true;
    emailUser.style.borderStyle = "none";
    okEmail = emailUser.value;
    }
    checkValues();
}

function validatePhone() {
    let phoneNumber = document.getElementById("phone");
    let patron_de_numeros = /^\d+$/;                        //si no son numeros no deja enviar el formulario, mediante una expresion regular lo regula
    if (!patron_de_numeros.test(phoneNumber.value)) {
    document.getElementById("errorPhone").hidden = false;
    phoneNumber.style.borderColor = "blue";
    phoneNumber.style.borderStyle = "dashed";
    okPhone = false;
    } else {
    document.getElementById("errorPhone").hidden = true;
    phoneNumber.style.borderStyle = "none";
    okPhone = phoneNumber.value;
    }
    checkValues();
}

function validateMessage() {
    let messageUser = document.getElementById("message");
    if (messageUser.value.length < 6) {
    document.getElementById("errorMessageUser").hidden = false;
    messageUser.style.borderColor = "blue";
    messageUser.style.borderStyle = "dashed";
    okMessage = false;
    } else {
    document.getElementById("errorMessageUser").hidden = true;
    messageUser.style.borderStyle = "none";
    okMessage = messageUser.value;
    }
    checkValues();
}

function checkValues() {
    if (okName && okEmail && okPhone && okMessage) {            //si todos los datos del formulario son validados correctamente no mueestra el mensaje de error al enviar
    document.getElementById("errorSubmit").hidden = true;
    }
}

function sendForm() {
    let incompleteForm = document.getElementById("errorSubmit");
    if (okName && okEmail && okPhone && okMessage) {
    incompleteForm.hidden = true;
    console.log(okName, okEmail, okPhone, okMessage);
    } else {
    incompleteForm.hidden = false;
    incompleteForm.style.borderColor = "blue";
    }
}