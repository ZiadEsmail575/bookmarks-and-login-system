"use strict";
// LOG IN DATA(INPUTS)==================================
let logDataContainer = [];

//section contain inputs to replace dflex by dnone
let logPage = document.getElementById("logPage");
//login email input
let emailInput = document.getElementById("emailInput");
//login PAASWORD 
let passInput = document.getElementById("passInput");
//login BUTTON
let logInBtn = document.getElementById("logInBtn");
// anchor tag that move to sign page
let signUpAnchor = document.getElementById("signUpAnchor");
let layer = document.querySelector("#layer");
let customize = document.querySelector(".customize");
let closeBtn = document.querySelector(".close");
let popUpSignUpAnchor = document.getElementById("signUp");
// localSTORAGE for login data
function setLocal(setter) {
    localStorage.setItem("loginData" , JSON.stringify(setter))
}
//GETTER
function getLocal(){
    logDataContainer =JSON.stringify(localStorage.getItem("loginData"));
}
//CHECK IF USER VISSIT SITE BEFORE
if (localStorage.getItem("loginData") == null) {
    logDataContainer = [];
} else {
    getLocal();
};
//EMAILINPUT 0NE VALIDATION

function validEmailInput() {
    let validMailRegex = /^[A-Za-z]{2,15}[0-9]*@((g|G)mail|yahoo)\.com$/;
if (validMailRegex.test(emailInput.value)) {
    
    emailInput.classList.replace("is-invalid" , "is-valid");
    document.querySelector(".invalid-text").classList.replace("d-block" , "d-none");
    document.querySelector(".valid-text").classList.replace("d-none" , "d-block");
    return true;
}else{
    
    emailInput.classList.add("is-invalid");
    document.querySelector(".invalid-text").classList.replace("d-none" , "d-block");
    document.querySelector(".valid-text").classList.replace("d-block" , "d-none");
    return false;
}
}
//======================>>>>>>>>>>>>>>
// EMAIL INPUT ONE VALIDATION WHILE TYPING
emailInput.addEventListener("input" , validEmailInput);
// PASS INPUT ONE VALIDATION
function validPassInput(){
    let validPass = /[A-Z]{1,5}[a-z0-9]{2,}$/
    if (validPass.test(passInput.value)) {
       
        passInput.classList.replace("is-invalid" , "is-valid");
        document.querySelector(".invalid-pass").classList.replace("d-block" , "d-none")
        document.querySelector(".valid-pass").classList.replace("d-none" , "d-block")
        return true;
    }else{
        
        passInput.classList.add("is-invalid");
        document.querySelector(".invalid-pass").classList.replace( "d-none" , "d-block")
        document.querySelector(".valid-pass").classList.replace("d-block" , "d-none")
        return false;
    }
}

//======================>>>>>>>>>>>>>>
// PASS INPUT ONE VALIDATION WHILE TYPING
passInput.addEventListener("input" , validPassInput);
//=======================================================

//==========================================================

// SIGN UP ANCHOR TAG ACTION TO MAKE USER TO CREATE ACCOUNT

signUpAnchor.addEventListener("click",function (e) {
    e.preventDefault();
    logPage.classList.replace("d-flex" , "d-none")
    signUpPage.classList.replace("d-none","d-flex")
})
// popup signUP ANCOR SHOW WHEN USER ENTER NOT EXIST DATA AND REDIRECT TO MAKE NEW ACCOUNT
popUpSignUpAnchor.addEventListener("click",function (event) {
    //PREVENT DEFAULT OF ANCHOR TO RELOAD PAGE ==
    event.preventDefault();
    logPage.classList.replace("d-flex" , "d-none")
    signUpPage.classList.replace("d-none","d-flex")
    layer.classList.replace("d-flex" , "d-none");
})

//POPUP CLOSE BUTTON ACTIONS
closeBtn.addEventListener("click" , function(){
    layer.classList.replace("d-flex" , "d-none");
})
//CLOSE POPUP WHEN CLICK IN SCREEN 
document.addEventListener("click" , function (e) {
    if (e.target !=customize) {
        if (layer.classList.contains("d-flex")) {
            e.stopPropagation();
            layer.classList.replace("d-flex" , "d-none");
        }
    
    }
},true)

// LOGIN BUTTON ACTIONS
logInBtn.addEventListener("click" , function () {
    let x =JSON.parse(localStorage.getItem("loginData"))
    for (let i = 0; i < x.length; i++) {

        if (x[i].email===emailInput.value && x[i].password===passInput.value) {
            location.assign("./bookmark.html")
            }
            else{
                emailInput.classList.add("is-invalid");
                document.querySelector(".valid-text").classList.replace("d-block" , "d-none");
                passInput.classList.add("is-invalid");
                document.querySelector(".valid-pass").classList.replace("d-block" , "d-none");
                layer.classList.replace("d-none" , "d-flex");
            }
    }
    if(emailInput.value ===""&&passInput.value===""){
        document.querySelector(".invalid-text").innerHTML="enter ur email"
        document.querySelector(".invalid-text").classList.replace("d-none" , "d-block")
        document.querySelector(".invalid-pass").innerHTML="enter ur password"
        document.querySelector(".invalid-pass").classList.replace("d-none" , "d-block")
        document.querySelector("div.customize").innerHTML="please all fields are requested";
    
    }else{
        
        document.querySelector(".invalid-text").classList.replace("d-block" , "d-none")
        
        document.querySelector(".invalid-pass").classList.replace("d-block" , "d-none")
    
    }
})



//=========================================================================

// sign up DATA(INPUTS) CALLING>>>>>>>>>>>>>>>>>>>==================================

let signUpPage = document.getElementById("signUpPage");
//sign name input
let nameInput = document.getElementById("nameInput");
//sign EMAIL 
let emailInput2 = document.getElementById("emailInput2");
//sign PASSWORD
let passInput2 = document.getElementById("passInput2");
//sign BUTTON
let signupBtn = document.getElementById("signupBtn");
// anchor tag that move to login  page
let signInAnchor = document.getElementById("signInAnchor");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// EMAIL INPUT TWO VALIDATION
function validEmailInputTwo() {
    let validMailRegex = /^[A-Za-z]{2,15}[0-9]*@((g|G)mail|yahoo)\.com$/
if (validMailRegex.test(emailInput2.value)) {
    emailInput2.classList.replace("is-invalid" , "is-valid");
    document.querySelector(".invalid-emailtwo").classList.replace("d-block" , "d-none")
    document.querySelector(".valid-emailtwo").classList.replace("d-none" , "d-block")
    return true;
}else{
    
    emailInput2.classList.add("is-invalid");
    document.querySelector(".invalid-emailtwo").classList.replace("d-none" , "d-block")
    document.querySelector(".valid-emailtwo").classList.replace("d-block" , "d-none")
    return false;
}
}

//================================================
//EMAIL TWO INPUT VALIDATION WHILE TYPING

emailInput2.addEventListener("input" , validEmailInputTwo);

// PASS INPUT TWO VALIDATION

function validPassInputTwo(){
    let validPass2 = /[A-Z]{1,5}[a-z0-9]{2,}$/;
    if (validPass2.test(passInput2.value)) {
        passInput2.classList.replace("is-invalid" , "is-valid");
        document.querySelector(".invalid-passtwo").classList.replace("d-block" , "d-none");
        document.querySelector(".valid-passtwo").classList.replace("d-none" , "d-block");
        return true;
    }else{
        
        passInput2.classList.add("is-invalid");
        document.querySelector(".invalid-passtwo").classList.replace("d-none" , "d-block");
        document.querySelector(".valid-passtwo").classList.replace("d-block" , "d-none");
        return false;
    }
    
}

//================================================
//PASS TWO INPUT VALIDATION WHILE TYPING

passInput2.addEventListener("input" , validPassInputTwo);

//name INPUT VALIDATION

function validNameInput(){
    let validName = /^[A-Z]{1}[a-z]{1,20}$/;
    if (validName.test(nameInput.value)) {
        nameInput.classList.replace("is-invalid" , "is-valid");
        document.querySelector(".invalid-name").classList.replace("d-block" , "d-none");
        document.querySelector(".valid-name").classList.replace("d-none" , "d-block");
        return true;
    }else{
        nameInput.classList.add("is-invalid");
        document.querySelector(".invalid-name").classList.replace("d-none" , "d-block");
        document.querySelector(".valid-name").classList.replace("d-block" , "d-none");
        return false;
    }
}

//================================================
//NAME INPUT VALIDATION WHILE TYPING

nameInput.addEventListener("input" , validNameInput);

//===============>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//SIGN UP BUTTON ACTIONS

signupBtn.addEventListener("click" , function () {
    let logInInfo ={
        name:nameInput.value,
        email:emailInput2.value,
        password:passInput2.value
    };
    if (validEmailInputTwo() && validPassInputTwo() && validNameInput()) {
        logDataContainer.push(logInInfo);
        setLocal(logDataContainer);
    };
});


