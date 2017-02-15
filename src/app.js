import 'font-awesome/scss/font-awesome.scss';
import './scss/title.scss';

const name = 'luigi';

const htmlRoot = document.getElementById('app');
htmlRoot.innerHTML = `<h1 class="title">Workflow Boilerplate ${name}!<i class="fa fa-trash"></i></h1>`;

document.querySelector('body').style.backgroundColor = 'cyan';

