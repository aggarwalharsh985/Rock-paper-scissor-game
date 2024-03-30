let userscore = 0;
let compscore = 0;
let userscorepara = document.querySelector("#userscore");
let compscorepara = document.querySelector("#compscore");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice"); 


const gencompchoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    let random = Math.floor(Math.random()*3);
    return options[random];
};

const draw = () => {
    console.log("game was draw");
    msg.innerText = " draw ";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin , userchoice , compchoice) => {
    if(userwin){
        // console.log("you win");
        msg.innerText = `you win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;

    }
    else{
        // console.log("you lose");
        msg.innerText = `you loose ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
    }
}

const playgame = (userchoice) => {
    // console.log("user chose = " ,userchoice);
    const compchoice = gencompchoice();
    // console.log("computer choice = " , compchoice);

    if(compchoice === userchoice){
        draw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin =  compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }
        else if (userchoice === "scissor"){
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin , userchoice , compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id")
        // console.log("user clicked the choice" , userchoice);
        playgame(userchoice);
    });
});