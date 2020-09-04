function showContactInfo(content){
    let contactInfo = document.createElement('div');
    contactInfo.id = 'contact-info';
    contactInfo.classList.add('tab-copy');

    let restaurantInfo = document.createElement('div');
    restaurantInfo.id = 'restaurant-contact';

    let phone = document.createElement('p');
    let email = document.createElement('p');

    phone.innerHTML = 'Phone: (XXX)-XXX-XXXX';
    email.innerHTML = 'contact@whitehartlanerestaurant.com';

    let address = document.createElement('div');
    let street = document.createElement('p');
    let city = document.createElement('p');

    street.innerHTML = '123 White Hart Lane';
    city.innerHTML = 'Git City, Virginia 11111';

    address.appendChild(street);
    address.appendChild(city);

    restaurantInfo.appendChild(phone);
    restaurantInfo.appendChild(email);
    restaurantInfo.appendChild(address);

    let personalInfo = document.createElement('div');
    personalInfo.id = 'personal-contact';
    let github = document.createElement('a');
    let linkedIn = document.createElement('a');

    github.id = 'github';
    github.setAttribute('href','https://github.com/ahasanulhoque');
    github.setAttribute('target', '_blank');
    github.innerHTML = 'Github';

    linkedIn.id = 'linkedin';
    linkedIn.setAttribute('href', 'https://www.linkedin.com/in/ahasanul-hoque-823741a0');
    linkedIn.setAttribute('target', '_blank');
    linkedIn.innerHTML = 'LinkedIn';

    personalInfo.appendChild(github);
    personalInfo.appendChild(linkedIn);

    contactInfo.appendChild(restaurantInfo);
    contactInfo.appendChild(personalInfo);
    
    content.appendChild(contactInfo);
}

export {showContactInfo};