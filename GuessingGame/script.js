let check = true;
let body = document.querySelector('#main');
let ans = Math.floor(Math.random() * 140 + 10);

for( i = 1; i <= 3; i++){
    console.log(ans);
    let num = parseInt(prompt('Guess a number between 10 to 150'));
    if (ans === num){
        // alert('Congratulations You win.....');
        let h3 = document.createElement('h3');
        h3.classList.add('right');
        h3.innerHTML = 'Congratulations You Win...!';
        body.appendChild(h3);
        check = true;
        break;
    }
    else if(num > ans){
        alert('Correct answer is smaller!');
        check = false;
    }
    else{
        alert('Correct answer is greater!');
        check = false;
    }
}
if(check === false){
    let h3 = document.createElement('h3');
    h3.classList.add('wrong');
    h3.innerHTML = `You Lose...!   Answer is : ${ans}`;
    body.appendChild(h3);
}