// Works Section Dynamically Created
const worksSection = document.querySelector('#Works');
const projectsArray = [
  {
    name: 'Point Network Mainnet Guide',
    description:
      'A Simple guide how to Run Validator on Point Network Mainnet',
    techs: ['Shell'],
    featuredImage: 'images/ss/Point.png',
    featuredPopupImage: 'images/ss/Point.png',
    linkToLiveVersion: 'https://github.com/pointnetwork/point-chain/blob/mainnet/VALIDATORS.md',
    linkToSource: 'https://github.com/elangrr/testnet_guide/tree/main/point',
    class: 'project1',
    id: 'but1',
  },
  {
    name: 'Lambda Mainnet Guide',
    description:
      'A Simple guide how to Run Validator on Lambda Mainnet',
    techs: ['Shell'],
    featuredImage: 'images/ss/Lambda.png',
    featuredPopupImage: 'images/ss/Lambda.png',
    linkToLiveVersion: 'https://docs.lambda.im/validators/mainnet.html',
    linkToSource: 'https://github.com/elangrr/testnet_guide/tree/main/lambda',
    class: 'project2',
    id: 'but2',
  },
  {
    name: 'Hypersign Testnet Guide',
    description:
      'A Simple guide how to Run Validator on Hypersign Jagrat Testnet ',
    techs: ['Shell'],
    featuredImage: 'images/ss/Hypersign.png',
    featuredPopupImage: 'images/ss/Hypersign.png',
    linkToLiveVersion: 'https://github.com/hypersign-protocol/hid-node',
    linkToSource: 'https://github.com/elangrr/testnet_guide/tree/main/hypersign',
    class: 'project2',
    id: 'but2',
  },
  {
    name: 'Mun Testnet Guide',
    description:
      'A simple guide how to Run Validator on Mun Testnet',
    techs: ['Shell'],
    featuredImage: 'images/ss/Mun.png',
    featuredPopupImage: 'images/ss/Mun.png',
    linkToLiveVersion: 'https://github.com/munblockchain/mun',
    linkToSource: 'https://github.com/elangrr/testnet_guide/tree/main/mun',
    class: 'project2',
    id: 'but4',
  },
  {
    name: 'ICW Chain',
    description:
      'A simple guide how to run ICW Mainnet Node Consensus',
    techs: ['Shell'],
    featuredImage: 'images/ss/ICW.png',
    featuredPopupImage: 'images/ss/ICW.png',
    linkToLiveVersion: 'https://www.icwchain.com/',
    linkToSource: 'https://github.com/elangrr/testnet_guide/tree/main/icw',
    class: 'project2',
    id: 'but5',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p2d.svg',
    featuredPopupImage: 'images/Snapshoot-Portfolio.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project6',
    id: 'but6',
  },
  {
    name: 'Website Protfolio',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p3d.svg',
    featuredPopupImage: 'images/Snapshoot-Portfolio.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project7',
    id: 'but7',
  },
];

function creatProject(project) {
  worksSection.innerHTML += `
  <article class="card ${project.class}">
  <div class="card-body">
      <div class="project-Head">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
      </div>
      <ul>
          <li><a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)" class="program-Link">${project.techs[0]}</a></li>
          <li><a href="https://en.wikipedia.org/wiki/JavaScript"
                  class="program-Link">${project.techs[1]}</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Ruby" class="program-Link">${project.techs[2]}</a></li>
      </ul>
      <button class="project-Button" id="${project.id}">See Project</button>
  </div>
</article>`;
  if (project.class === 'project1') {
    const project1 = document.querySelector('.project1');
    const imgP1 = document.createElement('img');
    imgP1.src = project.featuredImage;
    imgP1.alt = 'Multi Post Stories Project Image';
    imgP1.id = 'p1image';
    project1.insertBefore(imgP1, project1.firstChild);
    const project1tech = document.querySelector('.project1 ul');
    project1tech.innerHTML = `<li><a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)" class="program-Link">${project.techs[0]}</a></li>
    <li><a href="https://en.wikipedia.org/wiki/HTML" class="program-Link">${project.techs[1]}</a></li>
    <li><a href="https://en.wikipedia.org/wiki/JavaScript"
            class="program-Link">${project.techs[2]}</a></li>`;
  } else {
    document
      .querySelector(`.${project.class}`)
      .setAttribute(
        'style',
        `background: url(${project.featuredImage}) center; background-repeat: no-repeat; background-size: cover;`,
      );
  }
}

function createPopUp(project) {
  const div = document.createElement('div');
  div.className = 'backdrop';
  div.innerHTML += `<section class="popUp" data-role="popup">
  <div class="container">
      <h3 class="popup-Name">${project.name}</h3>
      <button id="popup-Close" type="button">x</button>
  </div>
  <div class="container">
      <ul class="popup-List">
          <li>
              <a href="#">${project.techs[0]}</a>
          </li>
          <li>
              <a href="#">${project.techs[1]}</a>
          </li>
          <li>
              <a href="#">${project.techs[2]}</a>
          </li>
      </ul>
  </div>
  <div class="container wrap">
  <div class="img-Container">
      <img src=${project.featuredPopupImage} class="popup-Image" alt="Project Image">
      </div>
      <div class="popup-Main">
          <p class="popup-Text">${project.description}</p>
          <div class="popup-btn-group">
              <button><a href="${project.linkToLiveVersion}" class="live-Link"><span>See Official Document</span> <img
                          src="images/Icon-seelive.svg" alt=""></a></button>
              <button><a href="${project.linkToSource}" class="source-Link"><span>See Indonode Guide</span> <img src="images/github-white.png"
                          alt=""></a></button>
          </div>
      </div>
  </div>
</section>`;
  worksSection.appendChild(div);
  document.querySelector('#popup-Close').addEventListener('click', () => {
    worksSection.removeChild(div);
  });
}

for (let i = 0; i < projectsArray.length; i += 1) {
  creatProject(projectsArray[i]);
}

const PopUp1 = document.querySelector(`#${projectsArray[0].id}`);
PopUp1.addEventListener('click', () => {
  createPopUp(projectsArray[0]);
});
const PopUp2 = document.querySelector(`#${projectsArray[1].id}`);
PopUp2.addEventListener('click', () => {
  createPopUp(projectsArray[1]);
});
const PopUp3 = document.querySelector(`#${projectsArray[2].id}`);
PopUp3.addEventListener('click', () => {
  createPopUp(projectsArray[2]);
});
const PopUp4 = document.querySelector(`#${projectsArray[3].id}`);
PopUp4.addEventListener('click', () => {
  createPopUp(projectsArray[3]);
});
const PopUp5 = document.querySelector(`#${projectsArray[4].id}`);
PopUp5.addEventListener('click', () => {
  createPopUp(projectsArray[4]);
});
const PopUp6 = document.querySelector(`#${projectsArray[5].id}`);
PopUp6.addEventListener('click', () => {
  createPopUp(projectsArray[5]);
});
const PopUp7 = document.querySelector(`#${projectsArray[6].id}`);
PopUp7.addEventListener('click', () => {
  createPopUp(projectsArray[6]);
});

// Mobile menu (Dynamic HTML)
const openMenu = document.querySelector('.nav-Button');
const closeMenu = document.querySelector('.nav-Button-Close');
const menu = document.querySelector('.mobile-Menu');
const menuLinks = document.querySelectorAll('.nav-Menu-List li');

closeMenu.addEventListener('click', () => {
  menu.style.top = '-150%';
});

openMenu.addEventListener('click', () => {
  menu.style.top = '0%';
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.style.top = '-150%';
  });
});

// Form Validation
const footerForm = document.querySelector('.footer-form');
const emailInput = footerForm.querySelector('#email');
const errorMessage = footerForm.querySelector('button + span');

function err(message) {
  errorMessage.textContent = message;
  errorMessage.setAttribute(
    'style',
    'color: red; font-size: 15px;font-family: "Inter", sans-serif; ',
  );
  emailInput.setAttribute(
    'style',
    'border-bottom: 2px solid red; background: rgba(255, 0, 0, 0.1);',
  );
  return false;
}

function succ() {
  errorMessage.textContent = '';
  emailInput.setAttribute('style', ' border-bottom: 1px solid #DBD8D7;background: white;');
  return true;
}

function validateLowerCase(input, errorMsg) {
  if (input.value.trim() === '') {
    return err('Please input required details');
  }
  if (input.value !== input.value.toLowerCase()) {
    return err(errorMsg);
  }
  return succ();
}

footerForm.addEventListener('submit', (event) => {
  if (!validateLowerCase(emailInput, 'Please make sure email field is lower case.')) {
    event.preventDefault();
  }
});

// Local Storage
// using the same global variable for form defined in form validation called footer form.

const userName = footerForm.querySelector('#name');
const userEmail = footerForm.querySelector('#email');
const userMessage = footerForm.querySelector('#msg');

function populateStorage() {
  localStorage.setItem(
    'userDet',
    JSON.stringify({
      username: userName.value,
      useremail: userEmail.value,
      usermsg: userMessage.value,
    }),
  );
}

footerForm.addEventListener('focusout', () => {
  populateStorage();
});

const userDet = JSON.parse(localStorage.getItem('userDet'));
userName.value = userDet.username;
userEmail.value = userDet.useremail;
userMessage.value = userDet.usermsg;
