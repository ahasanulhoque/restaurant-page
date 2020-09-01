function showMenu(content){
    let menu = document.createElement('div');
    menu.id = 'menu-content';
    menu.classList.add('tab-copy');

    let appetizers = document.createElement('div');
    let appetizersTitle = document.createElement('h2');
    appetizersTitle.innerHTML = 'Appetizers';

    let appetizer1 = document.createElement('p');
    appetizer1.innerHTML = 'Spinach & artichoke dip with pita chips - $6';
    let appetizer2 = document.createElement('p');
    appetizer2.innerHTML = 'Tomato bruschetta - $6';

    appetizers.appendChild(appetizersTitle);
    appetizers.appendChild(appetizer1);
    appetizers.appendChild(appetizer2);

    let entrees = document.createElement('div');
    let entreesTitle = document.createElement('h2');
    entreesTitle.innerHTML = 'Entrees';

    let entree1 = document.createElement('p');
    entree1.innerHTML = 'Pasta carbonara - $12';
    let entree2 = document.createElement('p');
    entree2.innerHTML = 'Filet mignon - $18';
    let entree3 = document.createElement('p');
    entree3.innerHTML = 'Shrimp scampi (served with rice or linguini) - $13';

    entrees.appendChild(entreesTitle);
    entrees.appendChild(entree1);
    entrees.appendChild(entree2);
    entrees.appendChild(entree3);

    let desserts = document.createElement('div');
    let dessertsTitle = document.createElement('h2');
    dessertsTitle.innerHTML = 'Desserts';

    let dessert1 = document.createElement('p');
    dessert1.innerHTML = 'New York cheesecake - $9';
    let dessert2 = document.createElement('p');
    dessert2.innerHTML = 'Creme brulee - $10';

    desserts.appendChild(dessertsTitle);
    desserts.appendChild(dessert1);
    desserts.appendChild(dessert2);

    let beverages = document.createElement('div');
    let beveragesTitle = document.createElement('h2');
    beveragesTitle.innerHTML = 'Beverages';

    let beverage1 = document.createElement('p');
    beverage1.innerHTML = 'Wine (white or red) - $12';
    let beverage2 = document.createElement('p');
    beverage2.innerHTML = 'Beer - $7';
    let beverage3 = document.createElement('p');
    beverage3.innerHTML = 'Iced tea - $4';

    beverages.appendChild(beveragesTitle);
    beverages.appendChild(beverage1);
    beverages.appendChild(beverage2);
    beverages.appendChild(beverage3);
    
    menu.appendChild(appetizers);
    menu.appendChild(entrees);
    menu.appendChild(desserts);
    menu.appendChild(beverages);

    content.appendChild(menu);
}

export {showMenu};