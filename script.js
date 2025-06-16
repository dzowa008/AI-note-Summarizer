const container = document.querySelector('.container');
const register = document.querySelector('.register-btn');
const loginbtn =document.querySelector('.login-btn');

register.addEventListener("click", () => {
    container.classList.add("active");
});
loginbtn.addEventListener("click", () => {
    container.classList.remove("active");
});
const sign = documet.querySelector('.btn-signing')
document.getElementsByName('sign.html')