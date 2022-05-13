import { } from '../sass/style.scss';
import { } from '../sass/view.scss';

const $ = require('jquery');

let isValid = false;


const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;


$("#btn").on('click', e => {
    const emailValue = $("#email").val();
    console.log(emailValue);

    if (emailValue == "") {
        $("#email").css('border', '1px solid red');
        $(".error").html("Please enter your email...");
    }

    else if (reg.test(emailValue) === false) {
        $("#email").css('border', '1px solid red');
        $(".error").html("Please provide valid email address");

    }
    else {
        $("form").remove();
        $(".form").html("<h1>Thanks for subscribing!");
        $(".form").css('text-align', 'center');

    }
});

