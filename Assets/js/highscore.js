var highscoreListUl = document.querySelector(".list-group");
var clearEl = document.querySelector("#clear-highscores");

showScores();

function showScores() {
  var scores = JSON.parse(localStorage.getItem("scores"));


  if (scores) {
    scores.sort((a, b) => {
        return b.score - a.score;
      });

    for (j = 0; j < scores.length; j++) {
      var scoreLi = document.createElement("li");
      scoreLi.textContent = scores[j].initials + " - " + scores[j].score;
      scoreLi.classList.add("list-group-item");
      highscoreListUl.append(scoreLi);
    }
  }
}

clearEl.addEventListener("click", function (event) {
  localStorage.clear();
  highscoreListUl.innerHTML = "";
});
