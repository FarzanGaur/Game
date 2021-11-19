let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



function getAiChoice(){
    const choices = ["r","p","s"]; 
    const randomNumnber = Math.floor(Math.random() * 3);
    return choices[randomNumnber];
}


function convert(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return 'Scissor';
}


function win(user, ai){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convert(user)} Beats ${convert(ai)}.You Win`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => {
       document.getElementById(user).classList.remove('green-glow') 
    }, 500);
    
}

function lose(user,ai){
    aiScore++;
    aiScore_span.innerHTML = aiScore;
    result_div.innerHTML = `${convert(user)} Gets Beaten By ${convert(ai)}.You Lose`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => {
       document.getElementById(user).classList.remove('red-glow') 
    }, 500);
}

function draw(user, ai){
        result_div.innerHTML = 'Draw!';
        document.getElementById(user).classList.add('grey-glow');
        setTimeout(() => {
           document.getElementById(user).classList.remove('grey-glow') 
        }, 500);
        
}


function Game(userChoice){
    const Aichoice = getAiChoice();
    console.log("userchoice " + userChoice);
    console.log("aichoice "+ Aichoice);
    switch (userChoice + Aichoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,Aichoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,Aichoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,Aichoice);
            break;
    }
}

function main(){

rock_div.addEventListener('click',function(){
    Game("r");
});
paper_div.addEventListener('click',function(){
    Game("p");
});

scissor_div.addEventListener('click',function(){
    Game("s");
});

}

main();

