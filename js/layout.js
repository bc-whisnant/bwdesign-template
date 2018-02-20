const companyName = '< bwdesign />';
const companyParagraph = 'We specialize in web design and development.';
const companySubParagraph = 'It\'s time to turn your online presence around. Let\'s get started!';


let pageContent = `
    <h2>${companyName}</h2>
    <p>${companyParagraph}</p>
    <p>${companySubParagraph}</p>
`;

let titleStatement = document.getElementById('title');
titleStatement.innerHTML = pageContent;
