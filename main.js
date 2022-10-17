let output = document.getElementById("output");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    let randNum = Math.random();

    if (randNum < 0.05) {
        output.innerHTML = "If I could rearrange the alphabet, I'd put U and I together";
    } else if (randNum < 0.1) {
        output.innerHTML = "I'm not a cameraman, but I can picture a life with us together";
    } else if (randNum < 0.15) {
        output.innerHTML = "Are you a parking ticket? Cause you've got FINE written all over you";
    } else if (randNum < 0.2) {
        output.innerHTML = "I wish I were cross-eyed so I could see you twice";
    } else if (randNum < 0.25) {
        output.innerHTML = "I lost my phone number, so I was wondering if i could get yours.";
    } else if (randNum < 0.30) {
        output.innerHTML = "On a scale of 1-10 you're a nine. Because I'm the one you need";
    } else if (randNum < 0.35) {
        output.innerHTML = "Can I borrow a kiss? I swear I'll give it back";
    } else if (randNum < 0.4) {
        output.innerHTML = "Did you fall from heaven? CauseI think God is missing an angel";
    } else if (randNum < 0.45) {
        output.innerHTML = "Are you tired? Cause you've been running through my mind all day.";
    } else if (randNum < 0.5) {
        output.innerHTML = "Hopefully you know CPR. Cause you're taking my breath away.";
    } else if (randNum <  0.55) {
        output.innerHTML = "Did you invent the airplane? Cause you seem Wright for me.";
    } else if (randNum < 0.6) {
        output.innerHTML = "You're so beautiful I forgot my pickup line";
    } else if (randNum < 0.65) {
        output.innerHTML = "We're not socks, but I think we'd make a great pair.";
    } else if (randNum < 0.7) {
        output.innerHTML = "Do you have a map? I keep getting lost in your eyes";
    } else if (randNum < 0.75) {
        output.innerHTML = "Is your name Google? Because you have everything I'm looking for.";
    } else if (randNum < 0.8) {
        output.innerHTML = "Your hand looks lonely. Can I hold it for you?";
    } else if (randNum < 0.85) {
        output.innerHTML = "What is it like you be the most gorgeous person in this room?";
    } else if (randNum < 0.9) {
        output.innerHTML = "When God made you, he was really just showing off.";
    } else if (randNum < 0.95) {
        output.innerHTML = "If you were a triangle, you'd be acute one.";
    } else if (randNum <= 0.1) {
        output.innerHTML = "I hope you know CPR, because you're taking my breath away.";
    }
}