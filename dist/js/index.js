const showpass = document.querySelector(".show_password");
const loginbtn = document.querySelector(".login-btn");
const login = document.querySelector(".loginscreen");
const signup = document.querySelector(".registerscreen");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const closeLoginBtn = document.querySelector(".loginscreen .close_buttom");
const closeSignupBtn = document.querySelector(".registerscreen .close_buttom");
const desktop = document.querySelector(".MainDesktop");
const entrar = document.querySelector(".register_login");
const cadastrar = document.querySelector(".cad");


showpass.addEventListener("click", showpassword);

function showpassword() {
    const pass1 = document.querySelector("#passwordreg");
    const pass2 = document.querySelector("#password2");
    if (pass1.type === "password") {
        pass1.type = "text";
        pass2.type = "text";
    } else {
        pass1.type = "password";
        pass2.type = "password";
    }
}

function openlogin(element) {
    element.classList.remove("hidden");
}

function close(element) {
    element.classList.add("hidden")
}


function blur () {
    if (!main.className.includes("blur")) {
        main.classList.add("blur");
        header.classList.add("blur");
        footer.classList.add("blur");
        desktop.classList.add("blur");
    } else {
        main.classList.remove("blur");
        header.classList.remove("blur");
        footer.classList.remove("blur");
        desktop.classList.remove("blur");
    }
}

loginbtn.addEventListener("click", () => {
    openlogin(signup);
    blur();
});

closeLoginBtn.addEventListener("click", () => {
    close(login);
    blur();
});

closeSignupBtn.addEventListener("click", () => {
    close(signup);
    blur();
});

entrar.addEventListener("click", () => {
    close(signup);
    openlogin(login);
});
cadastrar.addEventListener("click", () => {
    close(login);
    openlogin(signup);
});