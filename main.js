let output = document.getElementById("output");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    let randNum = Math.random();

    if (randNum < 0.05) {
        output.innerHTML = "If I could rearrange the alphabet, I'd put U and I together";
    }

    if (randNum < 0.1) {
        output.innerHTML = "I'm not a cameraman, but I can picture a life with us together";
    }

    if (randNum < 0.15) {
        output.innerHTML = "Are you a parking ticket? Cause you've got FINE written all over you";
    }

    if (randNum < 0.2) {
        output.innerHTML = "I wish I were cross-eyed so I could see you twice";
    }

    if (randNum < 0.25) {
        output.innerHTML = "I lost my phone number, so I was wondering if i could get yours.";
    }

    if (randNum < 0.30) {
        output.innerHTML = "On a scale of 1-10 you're a nine. Because I'm the one you need";
    }

    if (randNum < 0.35) {
        output.innerHTML = "Can I borrow a kiss? I swear I'll give it back";
    }

    if (randNum < 0.4) {
        output.innerHTML = "Did you fall from heaven? CauseI think God is missing an angel";
    }

    if (randNum < 0.45) {
        output.innerHTML = "Are you tired? Cause you've been running through my mind all day.";
    }

    if (randNum < 0.5) {
        output.innerHTML = "Hopefully you know CPR. Cause you're taking my breath away.";
    }
}