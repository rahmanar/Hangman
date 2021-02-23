window.onload = function() {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var categories; 
  var chosenCategory; 
  var word; 
  var guess; 
  var guesses = []; 
  var lives; 
  var counter; 
  var space;

  var showLives = document.getElementById("mylives");
  console.log(showLives); //show element
  var showCatagory = document.getElementById("catagory");
  console.log(showCatagory)

  function myFunction() {
    var x = document.getElementById("hangImg");
    if (window.getComputedStyle(x).display === "none") {
      x.style.display = "block";
    }
  }
  var buttons = function() {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  
  var selectCat = function() 
  {
    if (chosenCategory === categories[0])
    {
      catagoryName.innerHTML ="The Chosen Category Is Food names";
    } 
    else if (chosenCategory === categories[1]) 
    {
      catagoryName.innerHTML = "The Chosen Category Is vijay Films";
    } 
    else if (chosenCategory === categories[2]) 
    {
      catagoryName.innerHTML = "The Chosen Category Is Cities in tamil nadu";
    }
  };

  
  result = function() {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] == " ") {
        guess.innerHTML = "-";
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  comments = function() {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        myFunction();
      }
    }
  };

  
  

  check = function() {
    list.onclick = function() {
      guess = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter = counter + 1;
          console.log(1);
        }
      }
      var j = word.indexOf(guess);
      if (j == -1) {
        lives = lives - 1;
        comments();
      } else {
        comments();
      }
    };
  };

  
  play = function() {
    categories = [
      ["Biriyani","pongal","noodles","dosa","chapathi","thair-vadai","paani-poori"],
      ["Master", "theari", "Gilli", "kaththi", "jilla"],
      ["madurai", "vellore", "trichy", "tuticorin", "chennai","coimbatore"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    console.log(word);
    buttons();

    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  };

  play();

};