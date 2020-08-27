
function loadPage(content){
    //This function loads the static page content and tabs (NOT TAB FUNCTIONALITY)

    //Title and main image of page
    let title = document.createElement('h1');
    let mainImage = document.createElement('img');

    //Navbar to select different tabs
    let navbar = document.createElement('ul');
    let navHome = document.createElement('li');
    let navMenu = document.createElement('li');
    let navContact = document.createElement('li');

    

    navHome.innerHTML = 'Home';
    navMenu.innerHTML = 'Menu';
    navContact.innerHTML = 'Contact';

    navbar.id = 'navbar';
    navHome.id = 'home';
    navMenu.id = 'menu';
    navContact.id = 'contact';

    navHome.classList.toggle('tab');
    navMenu.classList.toggle('tab');
    navContact.classList.toggle('tab');

    navHome.style.border = 'solid';
    navHome.style.padding = '1rem';
    navMenu.style.border = 'solid';
    navMenu.style.padding = '1rem';
    navContact.style.border = 'solid';
    navContact.style.padding = '1rem';

    navbar.style.display = 'flex';
    navbar.style['list-style-type'] = 'none';

    title.innerHTML = "Ahasanul's restaurant";
    mainImage.src = "../src/images/restaurant.jpg";
    

    content.appendChild(title);
    content.appendChild(mainImage);

    navbar.appendChild(navHome);
    navbar.appendChild(navMenu);
    navbar.appendChild(navContact);

    
    content.appendChild(navbar);
    
}

function loadHome(content){
    //This functions loads the home tab copy

    //The copy for the home tab, shown on initial page load
    let home = document.createElement('div');
    let copy = document.createElement('p');

    copy.innerHTML = "With ambience and only fresh ingredients, dining a our restaurant is an experience to savor. Come enjoy a dish prepared by our world-class chefs.";

    home.appendChild(copy);
    content.appendChild(home);
}


export {loadPage, loadHome};