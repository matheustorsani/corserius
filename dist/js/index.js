const elements = {
    showpass: document.querySelector(".show_password"),
    loginbtn: document.querySelector(".login-btn"),
    login: document.querySelector(".loginscreen"),
    signup: document.querySelector(".registerscreen"),
    main: document.querySelector("main"),
    header: document.querySelector("header"),
    footer: document.querySelector("footer"),
    closeLoginBtn: document.querySelector(".loginscreen .close_buttom"),
    closeSignupBtn: document.querySelector(".registerscreen .close_buttom"),
    entrar: document.querySelector(".register_login"),
    cadastrar: document.querySelector(".cad")
};

elements.showpass.addEventListener("click", tgPass);

function tgPass() {
    const pass1 = document.querySelector("#passwordreg");
    const pass2 = document.querySelector("#password2");
    const type = pass1.type === "password" ? "text" : "password";
    pass1.type = type;
    pass2.type = type;
}

function OpCl(element) {
    element.classList.toggle("hidden");
}

function blur() {
    elements.main.classList.toggle("blur");
    elements.header.classList.toggle("blur");
    elements.footer.classList.toggle("blur");
}

elements.loginbtn.addEventListener("click", () => {
    OpCl(elements.signup);
    blur();
});

elements.closeLoginBtn.addEventListener("click", () => {
    OpCl(elements.login);
    blur();
});

elements.closeSignupBtn.addEventListener("click", () => {
    OpCl(elements.signup);
    blur();
});

elements.entrar.addEventListener("click", () => {
    OpCl(elements.signup);
    OpCl(elements.login);
});

elements.cadastrar.addEventListener("click", () => {
    OpCl(elements.login);
    OpCl(elements.signup);
});
