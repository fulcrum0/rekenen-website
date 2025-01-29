let tableOf = 2
let tableTimesOf = 3


function displayQuestion() {

    let opgTekst = ""
    let tafelTot = document.getElementById("inputTafelTot").value
    let tafelVan = document.getElementById("inputTafelVan").value

    tableOf = tafelVan

    let randomNumber = Math.floor(Math.random() * tafelTot) + 1

    tableTimesOf = randomNumber

    opgTekst = randomNumber + " x " + tafelVan

    document.getElementById("inputsom").value = opgTekst

}



function checkAnswer() {

    let answer = document.getElementById("inputantwoord").value
    let correctAnswer = tableOf * tableTimesOf

    if (answer == correctAnswer) {
        alert("Goed")
        document.getElementById("answers").innerHTML += "<span style='color: green';>" + tableOf + " X " + tableTimesOf + " = " + correctAnswer + "</span><br>"
        displayQuestion()
    }
    else {
        alert("Fout")
        document.getElementById("answers").innerHTML += "<span style='color: red';>" + tableOf + " X " + tableTimesOf + " = " + correctAnswer + "</span><br>"
    }

}