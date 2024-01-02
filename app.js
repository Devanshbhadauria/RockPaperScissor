let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random() * 3);
    return options[idx];
}
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("You Win");
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`Win!! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compscore++;
        compscorePara.innerText=compscore;
        console.log("Comp Win");
        msg.innerText=`lost ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="Red";
    }
}
const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("Comp choice=",compchoice);
    if(userchoice===compchoice){
        console.log("draw");
        msg.innerText="DRAW . PLAY AGAIN";
        msg.style.backgroundColor="Black";
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }


};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
    })
})
