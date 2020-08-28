function showContactInfo(content){
    let contactInfo = document.createElement('div');
    let github = document.createElement('a');

    contactInfo.classList.add('tab-copy');

    github.setAttribute('href','https://github.com/ahasanulhoque');
    github.setAttribute('target', '_blank');
    github.innerHTML = 'Github';

    contactInfo.appendChild(github);
    content.appendChild(contactInfo);
}

export {showContactInfo};