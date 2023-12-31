var nameInput= document.getElementById("nameinput");
var emailInput= document.getElementById("emailinput");
var passInput= document.getElementById("passinput");
var conPassInput= document.getElementById("conpassinput");
var nameI;var mailI;var passI;var conPassI;var a=true;var b=true;var c=true;var d=true;

function nameFun(){
    nameI=nameInput.value;
}
function mailFun(){
    mailI=emailInput.value;
}
function passFun(){
    passI=passInput.value;
}
function conPassFun(){
    conPassI=conpassinput.value;
}
//submit
function submitFun(){
clear();
    if (nameInput.value.length==0) {
        document.getElementById('name').innerHTML="Name is required.";
        a=false;
    }
    else a=true;

    if(emailInput.value.length==0){
        document.getElementById('email').innerHTML="Email is required.";
        b=false;
    }
    else{
            if (validateEmail(emailInput.value)){
                b=true
            }
            else{
                document.getElementById('email').innerHTML="Not Valid Email";
                b=false;
            }
        }

    if(passI==conPassI && conPassI != undefined  && conPassI>0 ){
        c=true;
        d=true;
    }
    else{
        if(conPassInput.value != passInput.value  ){
            document.getElementById('confirm-password').innerHTML="Password not Match";       
        }
        if(passInput.value.length==0){
            document.getElementById('password').innerHTML="Password is required.";
            c=false;
        }
        if(conPassInput.value.length==0){
            document.getElementById('confirm-password').innerHTML="Please confirm your password";
            d=false;
        }
    }
    check();
    event.preventDefault();
}
function clear(){
    let para=document.getElementsByTagName('p');
    for (let i = 0; i < para.length; i++) {
        para[i].innerHTML='';
    }
}
function validateEmail(field) {
      var regex=/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i;
      return (regex.test(field)) ? true : false;
}
function check(){

    if(a==b && b==c && c==d && d==true){
        clear();
        window.alert('Submit Login .... ');
        location.reload();    
    }
}