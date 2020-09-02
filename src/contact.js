function showContactInfo(content){
    let contactInfo = document.createElement('div');
    contactInfo.classList.add('tab-copy');

    let restaurantInfo = document.createElement('div');
    let phone = document.createElement('p');
    let email = document.createElement('p');

    phone.innerHTML = 'Phone: (XXX)-XXX-XXXX';
    email.innerHTML = 'contact@whitehartlanerestaurant.com';

    restaurantInfo.appendChild(phone);
    restaurantInfo.appendChild(email);

    let personalInfo = document.createElement('div');
    let github = document.createElement('a');
    let linkedIn = document.createElement('a');

    github.setAttribute('href','https://github.com/ahasanulhoque');
    github.setAttribute('target', '_blank');
    github.innerHTML = 'Github';

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