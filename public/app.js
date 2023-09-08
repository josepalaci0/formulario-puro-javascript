

const App = {
    agregarFormularioLogin: () => {
        const formContainerRegister = document.getElementById("formContainerRegister");
        const addFormButtonRegister = document.getElementById("addFormButtonRegister");
        const addFormButtonLogin = document.getElementById("addFormButtonLogin");
        const formContainerLogin = document.getElementById("formContainerLogin");

        formContainerRegister.innerHTML = "";

        formContainerRegister.disabled = true;
        formContainerRegister.style.display = "none";

        addFormButtonLogin.disabled = true
        addFormButtonLogin.style.display = "none";

        formContainerLogin.disabled = false;
        formContainerLogin.style.display = "inline";

        addFormButtonRegister.disabled = false;
        addFormButtonRegister.style.display = "inline";

        const form = document.createElement("form");
        const nameLabel = document.createElement("label");
        const nameImage = document.createElement("img");
        const nameInput = document.createElement("input");
        const passwordInput = document.createElement("input")
        const submitButton = document.createElement("button");

        nameLabel.textContent = "Instituto Colombiano BMX";
        nameImage.src = "./images/login.png";

        nameInput.type = "text";
        nameInput.required = true;
        nameInput.placeholder = "Ingrese su Usuario / Email"

        passwordInput.type = "password"
        passwordInput.required = true;
        passwordInput.placeholder = "Ingrese su contraseña"


        submitButton.type = "submit";
        submitButton.textContent = "Enviar";

        form.appendChild(nameLabel);
        form.appendChild(nameImage);
        form.appendChild(nameInput);
        form.appendChild(passwordInput)
        form.appendChild(submitButton);

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const data = {
                name: nameInput.value,
                password: passwordInput.value
            };

            if (data.name.length < 20 && data.password.length < 15) {
                if (App.validarContraseña(data.password)) {
                    const user = App.analizarFormulario(data);

                    // Enviar los datos del usuario utilizando la función fetch
                    fetch('https://yqycs5-5050.csb.app/mio', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Respuesta del servidor:', data);
                        })
                        .catch(error => {
                            console.error('Error al enviar los datos:', error);
                        });
                } else {
                    alert("La contraseña debe ser segura y cumplir con el formato requerido: Mvvv22#");
                }

            } else {
                alert("Atención: el usuario no puede superar 20 caracteres y la contraseña no debe superar 15 caracteres.");
            }



        });

        formContainerLogin.appendChild(form);
    },
    analizarFormulario: (user = {}) => {
        user.fechaCreacion = new Date().toLocaleString()
        user.tipocliente = navigator.userAgent;
        user.zonahoraria = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return user
    },
    esNumeroEntero: (valor) => {
        return /^\d+$/.test(valor);
    },
    esNumeroFlotante: (valor) => {
        return /^-?\d+(\.\d+)?$/.test(valor);
    },
    validarContraseña: (contraseña) => {
        // La expresión regular verifica que haya al menos una mayúscula, una minúscula, un número y un carácter especial.
        const formatoExpresionRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
        return formatoExpresionRegular.test(contraseña);
    },
    agregarFormularioRegister: () => {
        const formContainerRegister = document.getElementById("formContainerRegister");
        const addFormButtonRegister = document.getElementById("addFormButtonRegister");
        const addFormButtonLogin = document.getElementById("addFormButtonLogin");
        const formContainerLogin = document.getElementById("formContainerLogin");

        formContainerLogin.innerHTML = "";

        formContainerLogin.disabled = true;
        formContainerLogin.style.display = "none";

        addFormButtonRegister.disabled = true;
        addFormButtonRegister.style.display = "none";

        formContainerRegister.disabled = false
        formContainerRegister.style.display = "inline";


        addFormButtonLogin.disabled = false
        addFormButtonLogin.style.display = "inline";


        const form = document.createElement("form");
        const nameLabel = document.createElement("label");
        const nameImage = document.createElement("img");
        const nameInput = document.createElement("input");
        const emailInput = document.createElement("input");
        const passwordInput = document.createElement("input")
        const passworRepitedInput = document.createElement("input")
        const submitButton = document.createElement("button");

        nameLabel.textContent = "Instituto Colombiano BMX";
        nameImage.src = "./images/login.png";

        nameInput.type = "text";
        nameInput.required = true;
        nameInput.placeholder = "Ingrese su Usuario"

        emailInput.type = "email";
        emailInput.required = true;
        emailInput.placeholder = "Ingrese su Email"


        passwordInput.type = "password"
        passwordInput.required = true;
        passwordInput.placeholder = "Ingrese su contraseña"

        passworRepitedInput.type = "password"
        passworRepitedInput.required = true;
        passworRepitedInput.placeholder = "repita su contraseña"


        submitButton.type = "submit";
        submitButton.textContent = "Registrar";



        form.appendChild(nameLabel);
        form.appendChild(nameImage);
        form.appendChild(nameInput);
        form.appendChild(emailInput);
        form.appendChild(passwordInput);
        form.appendChild(passworRepitedInput)
        form.appendChild(submitButton);

        form.addEventListener("submit", (event) => {       
            App.startProgress()

            event.preventDefault();
            const data = {
                username: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                passworRepite: passworRepitedInput.value
            };

            if (data.passworRepite !== data.passworRepite) {
                alert("La contraseña debe ser igual en ambos campos.");
            } if (
                data.username.length <= 20 &&
                data.email.length <= 20 &&
                data.password.length <= 15
            ) {

                if (App.validarContraseña(data.password)) {
                    const user = App.analizarFormulario(data);
                    
                    // Enviar los datos del usuario utilizando la función fetch
                    fetch('https://kmwvng-4000.csb.app/api/v1/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    }).then(response => response.json()).then(data => {  
                        const progressContainer = document.querySelector('.progress-container');
                        progressContainer.style.display ='none'       
                        App.notification(data.status)
                        console.log('Respuesta del servidor:', data);
                    })
                        .catch(error => {
                            console.error('Error al enviar los datos:', error);
                        });

                } else {
                    alert("La contraseña debe ser segura, debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.");
                }

            } else {
                alert("Atención: El usuario no puede superar 20 caracteres y la contraseña no debe superar 15 caracteres.");
            }
        });


        formContainerRegister.appendChild(form);

    },
    notification: (mensaje) => {
        const notification = document.getElementById('notification');
        const message = document.getElementById('notification-message');


        message.innerText = mensaje;
        if (mensaje !== 'success') {
            notification.style.background = '#d32607d5'
        }
        notification.style.display = 'block';

        // Agregar un temporizador para ocultar la notificación después de unos segundos (opcional)
        setTimeout(() => {
            App.ocultarNotificacion();
        }, 5000); // Ocultar después de 5 segundos (puedes ajustar este valor)
        
    },
    ocultarNotificacion: () => {
        const notification = document.getElementById('notification');
        notification.style.display = 'none';
    },
    startProgress:()=> {
        const progressBar = document.querySelector('.progress-bar');
        const progressContainer = document.querySelector('.progress-container');       
        
        // Número total de puntos (ajusta según tu necesidad)
        const totalPoints = 10;
        let currentPoint = 0;
    
        // Calcular el ancho de cada punto en porcentaje
        const pointWidth = 100 / totalPoints;
    
        // Función para avanzar al siguiente punto
        function nextPoint() {
            currentPoint++;
            if (currentPoint <= totalPoints) {
                progressContainer.style.display ='block'
                progressBar.style.width = (currentPoint * pointWidth) + '%';
                setTimeout(nextPoint, 500); // Velocidad de progreso (500ms = 0.5 segundos)
            }
        }
    
        // Iniciar el progreso
        nextPoint();

        progressContainer.innerHTML=''
    }
};