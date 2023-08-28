login: async (event) => {
    if (event) event.preventDefault();
    const user = {
        email: document.getElementById("login_email").value,
        password: document.getElementById("login_password").value

    };
    const response = await API.login(user);
    Auth.postLogin(response, { 
        ...user,
        name: response.name
    });

},
register: async  (event) => {
    event.preventDefault();
    const user = {
        name: document.getElementById("register_name").value,
        email: document.getElementById("register_email").value,
        password: document.getElementById("register_password").value
    }
    const response = await API.register(user);
    Auth.postLogin(response, user);
},