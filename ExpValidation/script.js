// UI Elements
var select = document.getElementById('options');
var ul = document.getElementById('error');

// Event Listeners
select.addEventListener('change', getExpType);


// UI Class
class UI{
    static showRes(type){
        ul.innerHTML = '';
        if (type === 'email'){
            var li = document.createElement('h3');
            li.innerHTML = 'Email is Valid';
            li.classList.add('success');
            ul.appendChild(li);
        }
        else if (type === 'phone'){
            var li = document.createElement('h3');
            li.innerHTML = 'Phone number is Valid';
            li.classList.add('success');
            ul.appendChild(li);
        }
        else if (type === 'zip'){
            var li = document.createElement('h3');
            li.innerHTML = 'Post code is Valid';
            li.classList.add('success');
            ul.appendChild(li);
        }
        else if (type === 'pass'){
            var li = document.createElement('h3');
            li.innerHTML = 'Password is Valid';
            li.classList.add('success');
            ul.appendChild(li);
        }
    }
    static showError(type){
        ul.innerHTML = '';
        if (type === 'email'){
            var li = document.createElement('li');
            li.innerHTML = 'Invali Email Address.'
            li.classList.add('error');
            ul.appendChild(li);
        }

        else if(type === 'phone'){
            var li = document.createElement('li');
            li.innerHTML = 'Maximum length is 11(without country code).'
            li.classList.add('error');
            ul.appendChild(li);

            var li = document.createElement('li')
            li.innerHTML = 'Maximum length is 14(with country code).'
            li.classList.add('error');
            ul.appendChild(li);

            var li = document.createElement('li')
            li.innerHTML = 'Only can contains digits.'
            li.classList.add('error');
            ul.appendChild(li);
        }   
        
        else if(type === 'zip'){
            var li = document.createElement('li');
            li.innerHTML = 'Maximum length is 4.'
            li.classList.add('error');
            ul.appendChild(li);

            var li = document.createElement('li')
            li.innerHTML = 'Only can contains digits.'
            li.classList.add('error');
            ul.appendChild(li);
        }

        else if(type === 'pass'){
            var li = document.createElement('li');
            li.innerHTML = 'Maximum length is 16.'
            li.classList.add('error');
            ul.appendChild(li);

            var li = document.createElement('li');
            li.innerHTML = 'Minimum length is 8.'
            ul.appendChild(li);

            var li = document.createElement('li');
            li.innerHTML = 'First character must be Uppercase.'
            ul.appendChild(li);

            var li = document.createElement('li')
            li.innerHTML = 'Must be a combination of letter and digits.'
            ul.appendChild(li);
        }
    }
}



// Functions
function getExpType(e){
    let expType = select.value;
    if(expType === '0'){
        alert('Please choosec correct expression type......');
    }
    else if (expType === 'email'){
        let str = prompt('enter Your E-mail');
        validateEmail(str);
    }
    else if (expType === 'phone'){
        let str = prompt('enter Your Phone Number');
        validatePhone(str);
    }
    else if (expType === 'zip'){
        let str = prompt('enter Your Post Code');
        validateZip(str);
    }
    else if(expType === 'password'){
        let str = prompt('Please enter Password......')
        validatePass(str);
    }
}


function validateEmail(str){
    let reg_exp = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+\.([a-zA-Z0-9]\.?)+[^\.]$/;
    if(reg_exp.test(str)){
        UI.showRes('email');
    }
    else{
        UI.showError('email');
    }
}

function validatePhone(str){
    let reg_exp = /^(\+)?(88)?01([0-9]){9}$/;
    if(reg_exp.test(str)){
        UI.showRes('phone');
    }
    else{
        UI.showError('phone');
    }
}

function validateZip(str){
    let reg_exp = /^([0-9]){4}$/;
    if(reg_exp.test(str)){
        UI.showRes('zip');
    }
    else{
        UI.showError('zip');
    }
}

function validatePass(str){
    let len = str.length;
    if (len <= 16 && len >= 8){
        let reg_exp = /^[A-Z]([0-9a-zA-Z])+$/;
        if(reg_exp.test(str)){
            UI.showRes('pass');
        }
        else{
            UI.showError('pass');
        }
    }
    else{
        UI.showError('pass');
    }
}