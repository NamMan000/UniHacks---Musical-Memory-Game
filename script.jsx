const cardlist = document.getElementById("memory_cards");

const songfiles = [document.getElementById("rainbow"),document.getElementById("twinkle"),document.getElementById("clair")];

const audiofiles = [document.getElementById("a_aud"), document.getElementById("b_aud"), document.getElementById("c_aud"), document.getElementById("d_aud"), document.getElementById("e_aud"), document.getElementById("f_aud")];

const letters = ["A", "B", "C", "D", "E", "F"]; 
const keywords =["rainbow", "twinkle", "claire"];
const index = Math.floor(Math.random()*3);
const song2play = songfiles[index];
const word4song = keywords[index];
song2play.play();
alert("Here's your challenge: try to remember the name of the song playing in the background")
document.getElementById("AnswerLabel").style.visibility = "hidden";
document.getElementById("AnswerInput").style.visibility = "hidden";
document.getElementById("AnswerButton").style.visibility = "hidden";



for (var j = 0; j<cardlist.childNodes.length;j++){
  var currentchild = cardlist.childNodes[j];
  var randnum =   Math.floor(Math.random()*cardlist.childNodes.length);
  cardlist.insertBefore(cardlist.childNodes[randnum], currentchild);
}


document.getElementsByClassName("front").src = "F.png";

var cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    if (card.id.includes("a")){
      var fileA = audiofiles[0]
      fileA.play()
    }
    if (card.id.includes("b")){
      console.log("All is good")
      var fileA = audiofiles[1]
      fileA.play()
    }
      if (card.id.includes("c")){
      console.log("All is good")
      var fileA = audiofiles[2]
      fileA.play()
    }
        if (card.id.includes("d")){
      console.log("All is good")
      var fileA = audiofiles[3]
      fileA.play()
    }
        if (card.id.includes("e")){
      console.log("All is good")
      var fileA = audiofiles[4]
      fileA.play()
    }
        if (card.id.includes("f")){
      console.log("All is good")
      var fileA = audiofiles[5]
      fileA.play()
    }
  });
});

const cards2 = document.querySelectorAll('.card');

// storing memory
let hasflipped = false;
let first, second;

var finishedflips = 0;
//flipping card
function flipCard() {
  this.classList.toggle('flip');

  if (!hasflipped) {
    hasflipped = true;
    first = this;
  } else {
    hasflipped = false;
    second = this;

    if(first.dataset.name === 
       second.dataset.name) {
      first.removeEventListener("click", flipCard)
      second.removeEventListener("click", flipCard)
      finishedflips +=1
      if (finishedflips  >= 6){
        document.getElementById("Instructions").innerHTML = "YOU GOT IT!";
        showTextbox()
      }
    } else{
      setTimeout(() => {
      first.classList.remove("flip")
      second.classList.remove("flip")
      } ,800);
    }
  }
}

cards2.forEach(card => card.addEventListener('click', flipCard));

function showTextbox(){
  document.getElementById("AnswerLabel").style.visibility = "visible";
document.getElementById("AnswerInput").style.visibility = "visible";
document.getElementById("AnswerButton").style.visibility = "visible";
}

function submit(){
  if (document.getElementById("AnswerInput").value.includes(word4song)){
    alert("YOU REMEMBERED IT!!")
  }else{
    alert("That is Incorrect!")
  }
}