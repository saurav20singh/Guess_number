msg2=document.querySelector("#message2");
msg3=document.querySelector("#message3");
msg4=document.querySelector("#message4");

var answer=Math.floor(Math.random()*100)+1;
var no_of_guesses=0;
var guessesd_nums=[];

function play(){
    var user_guess=document.getElementById("guess").value;
    if(user_guess<1||user_guess>100){
        alert("please enter number between 1  and 100");
    }
    else{
        guessesd_nums.push(user_guess);
        no_of_guesses +=1;
        if(user_guess<answer){
            msg2.textContent="your guess is too low";
            msg3.textContent="No of guesses:"+no_of_guesses;
            msg4.textContent="Guessed numbers are:"+guessesd_nums;
        }
        else if(user_guess > answer){
            msg2.textContent="Your guess is too high.";
            msg3.textContent="No of Guesses"+ no_of_guesses;
            msg4.textContent="Guessed numbers are:"+guessesd_nums;
        }
        else if(user_guess==answer){
            msg2.textContent="yippie you won";
            msg3.textContent="The number was:"+answer;
            msg4.textContent="You guessed it in "+no_of_guesses +"guesses";
            document.getElementById("my_btn").disabled=true;
        }
    }

}