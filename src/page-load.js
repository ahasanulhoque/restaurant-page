function loadPage(){
    let content = document.querySelector('#content');

    //Title and main image of page
    let title = document.createElement('h1');
    let mainImage = document.createElement('img');

    //Navbar to select different tabs
    let navbar = document.createElement('ul');
    let navHome = document.createElement('li');
    let navMenu = document.createElement('li');
    let navContact = document.createElement('li');

    //The copy for the home tab, shown on initial page load
    let home = document.createElement('div');
    let copy = document.createElement('p');

    navHome.innerHTML = 'Home';
    navMenu.innerHTML = 'Menu';
    navContact.innerHTML = 'Contact';

    navbar.id = 'navbar';
    navHome.id = 'home';
    navMenu.id = 'menu';
    navContact.id = 'contact';

    navbar.style.display = 'flex';
    navbar.style['list-style-type'] = 'none';
    navHome.style.margin = '2rem';
    navMenu.style.margin = '2rem';
    navContact.style.margin = '2rem';

    title.innerHTML = "Ahasanul's restaurant";
    mainImage.src = "../src/images/restaurant.jpg";
    copy.innerHTML = "With ambience and only fresh ingredients, dining a our restaurant is an experience to savor. Come enjoy a dish prepared by our world-class chefs.";

    content.appendChild(title);
    content.appendChild(mainImage);

    navbar.appendChild(navHome);
    navbar.appendChild(navMenu);
    navbar.appendChild(navContact);

    home.appendChild(copy);
    content.appendChild(navbar);
    content.appendChild(home);
}

//Will likely need to break up functions. Have one for initial page content
//and one for main home copy

export {loadPage};