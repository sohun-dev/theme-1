const loginTabButton = document.getElementById('login-tab-button');
const registerTabButton = document.getElementById('register-tab-button');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

const sidebar = document.getElementById('sidebar');
const sidebarButton = document.getElementById('sidebar-button');
const sidebarIcon = document.getElementById('sidebar-icon');
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
        // Make sidebar fully visible
        sidebar.classList.add('visible-sidebar');
        sidebar.classList.remove('hidden-sidebar');

        // Slide button slightly inward
        sidebarButton.classList.remove('button-visible');
        sidebarButton.classList.add('button-hidden');

        // Change icon to 'cross'
        sidebarIcon.src = './assets/cross.png';
    } else {
        // Partially hide sidebar
        sidebar.classList.remove('visible-sidebar');
        sidebar.classList.add('hidden-sidebar');

        // Reset button position to corner
        sidebarButton.classList.remove('button-hidden');
        sidebarButton.classList.add('button-visible');

        // Change icon to 'login' when sidebar is hidden
        sidebarIcon.src = './assets/login.png';
    }
});