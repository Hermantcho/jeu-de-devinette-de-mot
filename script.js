//charger le ficher texte
fetch("liste.txt")
.then(response => response.text())
.then (data =>{
    var worldList = data.split("\n")
    var randomIndex = Math.floor(Math.random()*worldList.length)
    const wordToGess = worldList[randomIndex]

    alert(wordToGess);

    var wordlength = wordToGess.length;
    var hiddenWord = "";
    for(i = 0; i < wordlength; i++){
        hiddenWord += "_";
    }
    
    document.getElementById("word").innerHTML = hiddenWord;

    var gessInput = document.getElementById("guess");
    var submitButton = document.getElementById("submit");
    var result = document.getElementById("result");
    var link = document.getElementById("link");

    submitButton.onclick = function () {
        var gess = gessInput.value;
        if (gess.length > 1 || gess.length === 0) {
            result.innerHTML = "Entrer une seule lettre";
        }else if (wordToGess.indexOf(gess) === -1) {
            result.innerHTML = "Mauvaise lettre";
        }else {
            for(var i = 0; i < wordlength; i++){
                if (wordToGess[i] === gess) {
                    hiddenWord = hiddenWord.substr(0, i) + gess + hiddenWord.substr(i + 1);

                }
            }

            document.getElementById("word").innerHTML = hiddenWord

            if (hiddenWord === wordToGess) {
                result.innerHTML ="Bravo, tu as trouvé le mot !"
                gessInput.style.display = "none";
                submitButton.style.display = "none";
                link.style.display = "block";
            }else {
                result.innerHTML = "Bonne lettre !"
            }
        }

        gessInput.value = "";
    }

})