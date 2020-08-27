import {loadPage, loadHome} from './page-load';
import {showMenu} from './menu';
import {showContactInfo} from './contact';

let content = document.querySelector('#content');

loadPage(content);
loadHome(content);

let navbar = document.querySelector('#navbar');
let tabs = document.querySelectorAll('.tab');

//Tab functionality
let currentTab;
navbar.onclick = (e) => {
    let tab = e.target.getAttribute('id');
    
    
    if(tab == 'home' && currentTab != 'home'){
        content.removeChild(content.lastChild);
        loadHome(content);
        currentTab = 'home';
    } else if (tab == 'menu' && currentTab != 'menu'){
        content.removeChild(content.lastChild);
        showMenu(content);
        currentTab = 'menu';
    } else if (tab == 'contact' && currentTab != 'contact'){
        content.removeChild(content.lastChild);
        showContactInfo(content);
        currentTab = 'contact';
    }
}