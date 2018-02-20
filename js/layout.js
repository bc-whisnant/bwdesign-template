const companyName = '< bwdesign />';
const companyParagraph = 'We specialize in web design and development.';
const companySubParagraph = 'It\'s time to turn your online presence around. Let\'s get started!';


let pageContent = `
    <h2>${companyName}</h2>
    <p>${companyParagraph}</p>
    <p>${companySubParagraph}</p>
`;

let socialContent = `
    <ul>
        <li><a href="https://www.linkedin.com/in/brandon-c-whisnant" target="_blank"><i class="fab fa-linkedin-in fa-4x"></i></a></li>
        <li><a href="https://www.github.com/bc-whisnant" target="_blank"><i class="fab fa-github fa-4x"></i></a></li>
         <li><a href="mailto:bc.whisnant@gmail.com"><i class="far fa-envelope fa-4x"></i></a></li>
    </ul>
    `;

let titleStatement = document.getElementById('title');
titleStatement.innerHTML = pageContent;

let socialSection = document.getElementById('social-content');
socialSection.innerHTML = socialContent;
