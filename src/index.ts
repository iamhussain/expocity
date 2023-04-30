import "./styles/index.css";
const header = require('./common/header.html').default
document.getElementById("header").innerHTML = header;

const NonLoggedheader = require('./common/nonLogin-header.html').default
document.getElementById("nonLogged-header").innerHTML = NonLoggedheader;


