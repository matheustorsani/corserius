const showpass = document.querySelector(".show_password");
const loginbtn = document.querySelector(".login-btn");
const login = document.querySelector(".loginscreen");
const signup = document.querySelector(".registerscreen");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const closebtn = document.querySelector(".close_buttom")



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
    } else {
        main.classList.remove("blur");
        header.classList.remove("blur");
        footer.classList.remove("blur");
    }
}

loginbtn.addEventListener("click", () => {
    openlogin(signup);
    blur();
});

closebtn.addEventListener("click", event => {
    close(login);
    blur()
});