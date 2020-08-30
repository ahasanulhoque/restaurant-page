import {loadPage, loadHome} from './page-load';
import {showMenu} from './menu';
import {showContactInfo} from './contact';

let content = document.querySelector('#content');

loadPage(content);
loadHome(content);

let navbar = document.querySelector('#navbar');
let tabs = document.querySelectorAll('.tab');


const TabController = (() => {
    //Tab functionality
    //currentTab variable is used to determine whether the clicked tab is already
    //on the screen. If it is, do nothing. Declared outside of click so it is not
    //declared again each time the user clicks
    let currentTab;
    navbar.onclick = (e) => {
        let tab = e.target.getAttribute('id');
        
        if(tab == 'home' && currentTab != 'home'){
            //Remove currently shown copy, then add selected copy
            content.removeChild(content.lastChild);
            loadHome(content);
            //Toggle tab classes to change styling
            e.target.classList.add('tab-active');
            document.getElementById('menu').classList.remove('tab-active');
            document.getElementById('contact').classList.remove('tab-active');
            currentTab = 'home';
        } else if (tab == 'menu' && currentTab != 'menu'){
            content.removeChild(content.lastChild);
            showMenu(content);
            e.target.classList.add('tab-active');
            document.getElementById('home').classList.remove('tab-active');
            document.getElementById('contact').classList.remove('tab-active');
            currentTab = 'menu';
        } else if (tab == 'contact' && currentTab != 'contact'){
            content.removeChild(content.lastChild);
            showContactInfo(content);
            e.target.classList.add('tab-active');
            document.getElementById('home').classList.remove('tab-active');
            document.getElementById('menu').classList.remove('tab-active');
            currentTab = 'contact';
        }
    }
})();