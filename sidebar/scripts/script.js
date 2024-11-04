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

        // sidebar.style.transformcl= 'translateX(100%)';
        // sidebar.style.transition = 'transform 0.5s ease';
        //sidebar.classList.add('sidebar-visible');
        sidebar.classList.add('sidebar-in')
        sidebar.classList.remove('sidebar-out');
        sidebar.classList.remove('hidden');

        sidebarButton.classList.remove('button-visible');
        sidebarButton.classList.add('button-hidden');

        
        // sidebar.style.transform = 'translateX(0)';
        // sidebar.style.transition = 'transform 0.5s ease-in';

        // if (sidebar.style.transform >= 'translateX(0)') {
        //     setTimeout(() => {
        //         sidebar.classList.remove('hidden');
                
        //     }, 500);
        // }

        //sidebar.classList.add('sidebar-visible');

        // if (sidebar.style.transform <= 'translateX(100%)') {
        //     sidebar.style.transform = 'translateX(0)'
        //     sidebar.style.transition = 'transform 0.5s ease';

        
        // }




        sidebarIcon.src = './assets/cross.png';

    } else {

        sidebar.classList.remove('sidebar-in');
        sidebar.classList.add('sidebar-out');

        sidebarButton.classList.remove('button-hidden');
        sidebarButton.classList.add('button-visible');
        sidebarIcon.src = './assets/login.png';

        // if (sidebar.style.transform <= 'translateX(100%)') {
        //     setTimeout(() => {
        //         sidebar.classList.add('hidden');
        //     }, 500);
        // }



        sidebar.classList.add('hidden');

    }
});