function showMenu(content){
    let menu = document.createElement('div');
    let menuText = document.createElement('p');

    menu.classList.add('tab-copy');

    menuText.innerHTML = 'Pasta carbonara - $15';
    menuText.innerHTML = menuText.innerHTML + 'Lasagna - $13';

    menu.appendChild(menuText);
    content.appendChild(menu);
}

export {showMenu};