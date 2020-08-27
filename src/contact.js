function showContactInfo(content){
    let contactInfo = document.createElement('div');
    let github = document.createElement('a');

    github.setAttribute('href','https://github.com/ahasanulhoque');
    github.setAttribute('target', '_blank');
    github.innerHTML = 'Github';

    contactInfo.appendChild(github);
    content.appendChild(contactInfo);
}

export {showContactInfo};