document.getElementById('submit').addEventListener('click',function(){
    //get email
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    // get password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;
    //login 
    if (userEmail=='forhad@gmail.com' && userPassword=='pass'){
        window.location.href = "banking.html";
    }else{
        alert('Enter worng Email or Password')
    }
})