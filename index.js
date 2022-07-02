let highscore = 0;
let score = 20;
let gameValue;

//game start
document.querySelector('.again').addEventListener('click',function(){
  document.querySelector('.again').innerHTML=" Play Again!";
  document.querySelector('.discription').innerHTML="Enter a number below⬇️"
  document.querySelector('.score').innerHTML = "20";
  score=20;
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.guess').value ="";


  //random nuber Generator
  let gameValu = Math.floor((Math.random()*20)+1);
  console.log(gameValu);
  gameValue=gameValu;

});



//geting input
let userInput;

document.querySelector('.check').addEventListener('click',function(){
  userInput = document.querySelector('.guess').value;

  if(userInput>20){
    return;
  }

  //score condition
  if (score <1){
    document.querySelector('.score').innerHTML = "0";
    document.querySelector('.message').innerHTML = "you Lost..!";
    document.querySelector('body').style.backgroundColor = "grey";
    return;
  }



  const difference = gameValue-userInput;


    //decreasing score
    if (userInput!=gameValue){
      score--;
      document.querySelector('.score').innerHTML = score;
    }


    //checking answer
  if(userInput==gameValue){
    if (score >= highscore){
      highscore = score;
    }
    document.querySelector('.message').innerHTML = "💥That's Right!!";
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.highscore').innerHTML = highscore;
    return;
  }
  else if (difference<-5){
    document.querySelector('.message').innerHTML = "That's too High!!⬆️";
  }
  else if (difference>5){
    document.querySelector('.message').innerHTML = "That's too Low!!⬇️";

  }
  else{
    document.querySelector('.message').innerHTML = "You Are really Close...👨‍💻";
  }

  document.querySelector('.guess').value ="";


});
