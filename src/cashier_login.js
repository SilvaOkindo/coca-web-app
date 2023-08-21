import '../styles/modern-normalizer.css'
import '../styles/style.css'
import '../styles/components/cashier_login.css'
import '../styles/utils.css'

// query selectors
const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', ()=> {
    window.location.href = "home.html";
})