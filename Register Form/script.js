const form= document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const phoneNumber= document.getElementById('phoneNumber');
const password= document.getElementById('password');
const cpassword= document.getElementById('cpassword');


// add event

form.addEventListener('submit',(event) =>{
    event.preventDefault();
    validate();
})


// function sendData(sRate, count) {
//     if (sRate === count) {
//         alert('Registration successfull');
//         swal("Wellcome!", "Regitration success");
//         location.href = `demo.html?username = ${usernameval}`;
//     }
// }
// final part
    // const successMsg = () => {
    //     let formcon = document.getElementsByClassName('form-control');
    //         var count = formcon.length-1;
    //     for(var i = 0; i< formcon.length; i++){
    //         if(formcon[i].class=== "form-control succes") {
    //             var sRate = 0+ i;
    //             sendData(count);
    //         }else{
    //             return false;
    //         }
    //     }
    // }



const isEmail= (emailVal) => {
    var atSymbol = emailVal.indexof("@");
    if(atSymbol < 1) return false ;
    var dot = emailVal.lastIndexof('.');
    if(dot<=atSymbol+2) return false;
    if(dot === emailVal.length - 1)return false;
    return true;

}




const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal= email.value.trim();
    const phoneVal= phoneNumber.value.trim();
    const passwordVal= password.value.trim();
    const cpasswordVal= cpassword.value.trim();

    // validate username

    if(usernameVal===""){
        setErrorMsg(username, 'username cannot be blank');
    }else if (usernameVal.length <= 2){
        setErrorMsg(username, 'username min 3 char' );
    }else{
        setSuccessMsg(username);
    }


    //validate email

    if(emailVal===""){
        setErrorMsg(email, 'email cannot be blank');
    }else if (!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid email' );
    }else{
        setSuccessMsg(email);
    }

    
    //validate phone

    // if(phoneVal===""){
    //     setErrorMsg(phoneNumber, 'phone cannot be blank');
    // }else if (phoneVal.length != 10){
    //     setErrorMsg(phoneNumber, 'Not a valid phoneNumber' );
    // }else{
    //     setSuccessMsg(phoneNumber);
    // }
  
    // //validate cpassword

    //    if(passwordVal===""){
    //         setErrorMsg(password, 'cpassword is not matching ');
    //    }else if (passwordVal.length <= 8){
    //        setErrorMsg(password, 'minimam 8 char' );
    //    }else{
    //        setSuccessMsg(password);
    //    }

    
    //   //validate password

    //   if(cpasswordVal===""){
    //       setErrorMsg(cpassword, ' confirm password cannot be blank');
    //   }else if (cpasswordVal !== password){
    //       setErrorMsg(cpassword, 'password not matching' );
    //   }else{
    //        setSuccessMsg(cpassword);
    //   }

    //   successMsg();


}

function setErrorMsg( input, errorMags) {
    const formControl = input.parrentElement;
    const smal = formControl.querySelector('small');
    formControl.className = "form-control error";
    smal.innerText = errorMags;
}

function setSuccessMsg( input) {
    const formControl = input.parrentElement;
    
    formControl.className = "form-control succes";
   
}
// function setSuccessMsg( input) {
//     const formControl = input.parrentElement;
//     document.getElementsByClassName('form-control');

    
//     formControl.classList.add("error");
//  }

// function setErrorMsg input,errorMags) {
//     const formControl = input.parrentElement;
//     document.getElementsByClassName('form-control');
//     const smal = formControl.querySelector('small');
//     smal.innerText = errorMags;
//     formControl.classList.add("succes");
//  }