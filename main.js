
  let randonNumber1 = Math.ceil(Math.random()*6);
  let randonNumber2 = Math.ceil(Math.random()*6);
  console.log(randonNumber1);
  let left = document.querySelector(".img1").src=`images/dice${randonNumber1}.png`;
  let right = document.querySelector(".img2").src=`images/dice${randonNumber2}.png`;
  let result = "";
  if (randonNumber1===randonNumber2){
    result="Draw";
  }
  else{
    result = (randonNumber1>randonNumber2)? result="Player 1 Wins" : result = "Play 2 Wins";
  }
  console.log = result;
  document.querySelector("h1").innerHTML = result;


// if(!checkCookie)
