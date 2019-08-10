const wording = ["Lubisz język JavaScript? Skoro tu jesteś, to chyba tak. Miło Cię widzieć!"];
let startTime, endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    if (this.innerText == "Start") {
        playText.disabled = false;
        playGame();
    }
    else if (this.innerText == "Gotowe") {
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
    }
})

function endPlay() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let str = playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMessage = "Napisałeś/aś ten tekst z prędkością " + speed + " słów na minutę.";
    finalMessage += "<br>" + compareWords(message.innerText, str);
    message.innerHTML = finalMessage;
}

function wordCounter(strWords) {
    let response = strWords.split(" ").length;
    return response;
}

function compareWords(str1, str2) {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })
    return ("poprawnie " + cnt + " z " + words1.length + " słów");
}

function playGame() {
    let randomNum = Math.floor(Math.random() * wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Gotowe";
}