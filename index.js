const loginr = document.querySelector('.login-section')
const LoginLink = document.querySelector('.Login-link')
const registerLink = document.querySelector('.register-link')
registerLink.addEventListener('click',()=>{
    loginr.classList.add('active')
})

LoginLink.addEventListener('click',()=>{
    loginr.classList.remove('active')
})