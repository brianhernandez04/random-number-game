const button = document.querySelector('button');
const main = document.querySelector('main');

button.addEventListener('click', function(){
    const answer1 = prompt('Input your lowest number');
    const answer2 = prompt('Input your highest number');

    const response1 = parseInt(answer1);
    const response2 = parseInt(answer2);

    const bothResponse = response1 && response2;

    const randomNumber = Math.floor(Math.random() * response2) + response1;

    if (4 >= response2) {
        main.innerHTML = 
        `
        <h1 style="color: white; text-align: center; padding: 35vh 18vw 0 18vw;">Highest number has to be higher than lowest number. Try again.</h1>
        `
        ;
    } else if(bothResponse) {
        main.innerHTML = 
        `
        <h1 style="color: white; text-align: center; padding: 35vh 18vw 0 18vw;">${randomNumber} is a random number between ${response1} and ${response2}.</h1>
        `
        ;
    } else {
        main.innerHTML = 
        `
        <h1 style="color: white; text-align: center; padding: 35vh 18vw 0 18vw;">Not a Number. Try again.</h1>
        `
        ;
    }
});