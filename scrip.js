var C4 = new Audio("sounds/C4.mp3")
var Db4 = new Audio("sounds/Db4.mp3")
var D4 = new Audio("sounds/D4.mp3")
var Eb4 = new Audio("sounds/Eb4.mp3")
var E4 = new Audio("sounds/E4.mp3")
var F4 = new Audio("sounds/F4.mp3")
var Gb4 = new Audio("sounds/Gb4.mp3")
var G4 = new Audio("sounds/G4.mp3")
var Ab4 = new Audio("sounds/Ab4.mp3")
var A4 = new Audio("sounds/A4.mp3")
var Bb4 = new Audio("sounds/Bb4.mp3")
var B4 = new Audio("sounds/B4.mp3")
var C5 = new Audio("sounds/C5.mp3")
var Db5 = new Audio("sounds/Db5.mp3")
var D5 = new Audio("sounds/D5.mp3")
var Eb5 = new Audio("sounds/Eb5.mp3")
var E5 = new Audio("sounds/E5.mp3")


var playsound = audio =>{
    var clone = audio.cloneNode();
    clone.play();
    setTimeout(() =>(clone.volume = 0.8), 400);
    setTimeout(() =>(clone.volume = 0.6), 800);
    setTimeout(() =>(clone.volume = 0.4), 1200);
    setTimeout(() =>(clone.volume = 0.2), 1600);
    setTimeout(() =>(clone.volume = 0), 2000);
}

//C4
var C4Key = document.querySelector(".C4-key");
var playC4 = () =>{
    playsound(C4);
    C4Key.classList.add("active");
    setTimeout(() => C4Key.classList.remove("active"), 200);
}
C4Key.addEventListener("click", playC4)

//Db4
var Db4Key = document.querySelector(".Db4-key");
var playDb4 = () =>{
    playsound(Db4);
    Db4Key.classList.add("active");
    setTimeout(() => Db4Key.classList.remove("active"), 200);
}
Db4Key.addEventListener("click", playDb4)

//D4
var D4Key = document.querySelector(".D4-key");
var playD4 = () =>{
    playsound(D4);
    D4Key.classList.add("active");
    setTimeout(() => D4Key.classList.remove("active"), 200);
}
D4Key.addEventListener("click", playD4)

//Eb4
var Eb4Key = document.querySelector(".Eb4-key");
var playEb4 = () =>{
    playsound(Eb4);
    Eb4Key.classList.add("active");
    setTimeout(() => Eb4Key.classList.remove("active"), 200);
}
Eb4Key.addEventListener("click", playEb4)

//E4
var E4Key = document.querySelector(".E4-key");
var playE4 = () =>{
    playsound(E4);
    E4Key.classList.add("active");
    setTimeout(() => E4Key.classList.remove("active"), 200);
}
E4Key.addEventListener("click", playE4)

//F4
var F4Key = document.querySelector(".F4-key");
var playF4 = () =>{
    playsound(F4);
    F4Key.classList.add("active");
    setTimeout(() => F4Key.classList.remove("active"), 200);
}
F4Key.addEventListener("click", playF4)

//Gb4
var Gb4Key = document.querySelector(".Gb4-key");
var playGb4 = () =>{
    playsound(Gb4);
    Gb4Key.classList.add("active");
    setTimeout(() => Gb4Key.classList.remove("active"), 200);
}
Gb4Key.addEventListener("click", playGb4)

//G4
var G4Key = document.querySelector(".G4-key");
var playG4 = () =>{
    playsound(G4);
    G4Key.classList.add("active");
    setTimeout(() => G4Key.classList.remove("active"), 200);
}
G4Key.addEventListener("click", playG4)

//Ab4
var Ab4Key = document.querySelector(".Ab4-key");
var playAb4 = () =>{
    playsound(Ab4);
    Ab4Key.classList.add("active");
    setTimeout(() => Ab4Key.classList.remove("active"), 200);
}
Ab4Key.addEventListener("click", playAb4)

//A4
var A4Key = document.querySelector(".A4-key");
var playA4 = () =>{
    playsound(A4);
    A4Key.classList.add("active");
    setTimeout(() => A4Key.classList.remove("active"), 200);
}
A4Key.addEventListener("click", playA4)

//Bb4
var Bb4Key = document.querySelector(".Bb4-key");
var playBb4 = () =>{
    playsound(Bb4);
    Bb4Key.classList.add("active");
    setTimeout(() => Bb4Key.classList.remove("active"), 200);
}
Bb4Key.addEventListener("click", playBb4)

//B4
var B4Key = document.querySelector(".B4-key");
var playB4 = () =>{
    playsound(B4);
    B4Key.classList.add("active");
    setTimeout(() => B4Key.classList.remove("active"), 200);
}
B4Key.addEventListener("click", playB4)

//C5
var C5Key = document.querySelector(".C5-key");
var playC5 = () =>{
    playsound(C5);
    C5Key.classList.add("active");
    setTimeout(() => C5Key.classList.remove("active"), 200);
}
C5Key.addEventListener("click", playC5)

//Db5
var Db5Key = document.querySelector(".Db5-key");
var playDb5 = () =>{
    playsound(Db5);
    Db5Key.classList.add("active");
    setTimeout(() => Db5Key.classList.remove("active"), 200);
}
Db5Key.addEventListener("click", playDb5)

//D5
var D5Key = document.querySelector(".D5-key");
var playD5 = () =>{
    playsound(D5);
    D5Key.classList.add("active");
    setTimeout(() => D5Key.classList.remove("active"), 200);
}
D5Key.addEventListener("click", playD5)

//Eb5
var Eb5Key = document.querySelector(".Eb5-key");
var playEb5 = () =>{
    playsound(Eb5);
    Eb5Key.classList.add("active");
    setTimeout(() => Eb5Key.classList.remove("active"), 200);
}
Eb5Key.addEventListener("click", playEb5)

//E5
var E5Key = document.querySelector(".E5-key");
var playE5 = () =>{
    playsound(E5);
    E5Key.classList.add("active");
    setTimeout(() => E5Key.classList.remove("active"), 200);
}
E5Key.addEventListener("click", playE5)


window.addEventListener("keydown", ({keyCode}) =>{
     //press Q
     if (keyCode === 81) return playC4();
     //press 2
     if (keyCode === 50) return playDb4();
     //press W
     if (keyCode === 87) return playD4();
     //press 3
     if (keyCode === 51) return playEb4();
     //press E
     if (keyCode === 69) return playE4();
     //press R
     if (keyCode === 82) return playF4();
     //press 5
     if (keyCode === 53) return playGb4();
     //press T
     if (keyCode === 84) return playG4();
     //press 6
     if (keyCode === 54) return playAb4();
     //press y
     if (keyCode === 89) return playA4();
     //press 7
     if (keyCode === 55) return playBb4();
     //press U
     if (keyCode === 85) return playB4();
     //press I
     if (keyCode === 73) return playC5();
     //press 9
     if (keyCode === 57) return playDb5();
     //press o
     if (keyCode === 79) return playD5();
     //press 0
     if (keyCode === 48) return playEb5();
     //press P
     if (keyCode === 80) return playE5();
})















