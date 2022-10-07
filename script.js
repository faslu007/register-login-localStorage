

function register () {

    const account  = {
        user_name: user_name.value,
        account_num: acc_num.value,
        password: password.value,
    };

    if(checkStrongPassword(password.value) == true) {

        if (account.account_num in localStorage){
            message.innerHTML = 'Account already exists';
        } else{
            
            localStorage.setItem(account.account_num, JSON.stringify(account));
            
            window.location = 'login.html'
    }
    } else {
        message.innerHTML = 'Password is weak';
    }
    
 }


function login() {

    let key = acc_num.value;

    if (key in localStorage) {
        account = JSON.parse(localStorage.getItem(key))
    
        if(account.password === password.value) {
            alert('login success');
            window.location = 'home.html'
        } else {
            message.innerHTML = 'Password in-correct';
        }
} else {
    message.innerHTML = 'Account does not exists!';
}};



// password validation
function checkStrongPassword(str){
    // password validation criteria = min 7 chars, min 1 symbol, min 1 upperCase, & a num
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
    return re.test(str);
}