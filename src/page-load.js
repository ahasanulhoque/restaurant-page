
function loadPage(content){
    //This function loads the static page content and tabs (NOT TAB FUNCTIONALITY)

    //Title and main image of page
    let title = document.createElement('h1');
    
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

    navHome.classList.add('tab');
    navMenu.classList.add('tab');
    navContact.classList.add('tab');

    navHome.classList.add('tab-active');

    title.innerHTML = "The White Hart Lane";   

    content.appendChild(title);

    navbar.appendChild(navHome);
    navbar.appendChild(navMenu);
    navbar.appendChild(navContact);
    
    content.appendChild(navbar);  
}

function loadHome(content){
    //This functions loads the home tab copy

    //The copy for the home tab, shown on initial page load
    let home = document.createElement('div');
    let mainImage = document.createElement('img');
    let copy = document.createElement('p');

    home.classList.add('tab-copy');

    mainImage.src = "images/restaurant.jpg";
    copy.innerHTML = "With ambience and only fresh ingredients, dining a our restaurant is an experience to savor. Come enjoy a dish prepared by our world-class chefs.";

    home.appendChild(mainImage);
    home.appendChild(copy);
    content.appendChild(home);
}


export {loadPage, loadHome};