function showMenu(content){
    let menu = document.createElement('div');
    let menuText = document.createElement('p');

    menuText.innerHTML = 'Pasta carbonara - $15';
    menuText.innerHTML = menuText.innerHTML + 'Lasagna - $13';

    menu.appendChild(menuText);
    content.appendChild(menu);
}

export {showMenu};