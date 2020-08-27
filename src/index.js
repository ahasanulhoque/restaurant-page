import {loadPage, loadHome} from './page-load';
import {showMenu} from './menu';
import {showContactInfo} from './contact';

let content = document.querySelector('#content');

console.log('hello world!');



loadPage(content);
loadHome(content);
//showMenu(content);
//showContactInfo(content);

let navbar = document.querySelector('#navbar');
let tabs = document.querySelectorAll('.tab');


navbar.onclick = (e) => {
    let tab = e.target;
    alert(tab);
    if(tab.id == 'home'){
        content.removeChild('div');
        loadHome(content);
        alert('hello');
    } else if (tab.id == 'menu'){
        content.removeChild('div');
        showMenu(content);
    } else if (tab.id == 'contact'){
        content.removeChild('div');
        showContactInfo(content);
    }
}