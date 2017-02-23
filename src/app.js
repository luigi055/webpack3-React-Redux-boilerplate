import 'font-awesome/scss/font-awesome.scss';
import './scss/style.scss';

var saitama = require('./img/image-saitama.jpg');

const name = 'luigi';

const img = document.createElement('img');
img.src = saitama;
console.log(img);
const htmlRoot = document.getElementById('app');
htmlRoot.innerHTML = `<h1 class="title">Workflow Boilerplate ${name}!<i class="fa fa-trash"></i></h1>`;

document.body.appendChild(img);


document.querySelector('body').style.backgroundColor = 'cyan';

