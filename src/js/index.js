import { } from '../sass/style.scss';
import { } from '../sass/view.scss';
import { } from '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

const $ = require('jquery');

let isValid = false;


const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;


$("#btn").on('click', e => {
    const emailValue = $("#email").val();
    console.log(emailValue);

    if (emailValue == "") {
        $("#email").css('border', '1px solid red');
        $(".error").html("<i>Please enter your email...</i>");
    }

    else if (reg.test(emailValue) === false) {
        $("#email").css('border', '1px solid red');
        $(".error").html("<i>Please provide valid email address</i>");

    }
    else {
        $("form").remove();
        $(".form").html("<h1>Thanks for subscribing!</h1>");
        $(".form").css('text-align', 'center');

    }
});


const item = document.querySelectorAll('.bi');
const circle = document.querySelectorAll('.item');

for (let i = 0; i < item.length; i++) {
    circle[i].addEventListener('mouseover', e => {
        circle[i].style.backgroundColor = 'hsl(223, 87%, 63%)';
        circle[i].style.border = 'none';
        item[i].style.color = 'white';
    });

    circle[i].addEventListener('mouseout', e => {
        circle[i].style.backgroundColor = 'white';
        item[i].style.color = 'hsl(223, 87%, 63%)';
    });
}

