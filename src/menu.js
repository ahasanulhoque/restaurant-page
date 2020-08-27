function showMenu(){
    let content = document.querySelector('#content');

    let menu = document.createElement('div');
    let menuText = document.createElement('p');

    menuText.innerHTML = 'Pasta carbonara - $15';

    menu.appendChild(menuText);
    content.appendChild(menu);
}

export {showMenu};