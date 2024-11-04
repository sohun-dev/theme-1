const loginTabButton = document.getElementById('login-tab-button');
const registerTabButton = document.getElementById('register-tab-button');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

const sidebar = document.getElementById('sidebar');
const sidebarButton = document.getElementById('sidebar-button');
const sidebarIcon = document.getElementById('sidebar-icon');
const sidebarButtonSm = document.getElementById('sidebar-button-sm');
const sidebarIconSm = document.getElementById('sidebar-icon-sm')
let sidebarVisible = false;


loginTabButton.addEventListener("click", () => {
    registerForm.classList.remove('slide-in');
    registerForm.classList.add('slide-out-right');

    loginForm.classList.remove('hidden', 'slide-out-left');
    loginForm.classList.add('slide-in');

    registerForm.classList.add('hidden');

    // loginTabButton.classList.remove('border-transparent');
    loginTabButton.classList.add('border-neutral-800');
    loginTabButton.classList.remove('border-transparent');
    registerTabButton.classList.remove('border-neutral-800')
    registerTabButton.classList.add('border-transparent');


});


registerTabButton.addEventListener('click', () => {
    loginForm.classList.remove('slide-in');
    loginForm.classList.add('slide-out-left');


    registerForm.classList.remove('hidden', 'slide-out-right');
    registerForm.classList.add('slide-in');

    loginForm.classList.add('hidden');

    // registerTabButton.classList.remove('border-transparent');
    registerTabButton.classList.add('border-neutral-800');
    registerTabButton.classList.remove('border-transparent');
    loginTabButton.classList.remove('border-neutral-800');
    loginTabButton.classList.add('border-transparent');

})



sidebarButton.addEventListener('click', () => {
    sidebarVisible = !sidebarVisible;

    if (sidebarVisible) {

        sidebar.classList.add('sidebar-in')
        sidebar.classList.remove('sidebar-out');
        sidebar.classList.remove('hidden');

        sidebarButton.classList.remove('button-visible');
        sidebarButton.classList.add('button-hidden');

        sidebarIcon.src = './assets/cross.png';



    } else {

        sidebar.classList.remove('sidebar-in');
        sidebar.classList.add('sidebar-out');

        sidebarButton.classList.remove('button-hidden');
        sidebarButton.classList.add('button-visible');
        sidebarIcon.src = './assets/login.png';

        sidebar.classList.add('hidden');

    }
});


sidebarButtonSm.addEventListener('click', () => {
    sidebarVisible = !sidebarVisible;

    if (sidebarVisible) {




        sidebar.classList.remove('sidebar-in');
        sidebar.classList.remove('sidebar-out');

        sidebarIconSm.src = './assets/login.png';

        sidebar.classList.add('hidden');



    } else {

        sidebar.classList.remove('sidebar-in')
        sidebar.classList.remove('sidebar-out');
        sidebar.classList.remove('hidden');

        sidebarIconSm.src = './assets/cross.png';


    }
});