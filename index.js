var numberOfButton = document.querySelectorAll(".drum").length;
function ButtonAnimation(key){
    var ActiveButton = document.querySelector("."+key);
    ActiveButton.classList.add("pressed")
    setTimeout(function() {
        ActiveButton.classList.remove("pressed")
      }, 200); // Wait 0.5 seconds (500 milliseconds)
}




function ResponseEvent (even){
    switch (even) {
        case "w":
            var audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
    
        case "a":
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        case "s":
            var audio2 = new Audio("sounds/snare.mp3");
            audio2.play();
            break;
        case "d":
            var audio3 = new Audio("sounds/tom-1.mp3");
            audio3.play();
            break;
        case "j":
            var audio4 = new Audio("sounds/tom-2.mp3");
            audio4.play();
            break;
        case "k":
            var audio5 = new Audio("sounds/tom-3.mp3");
            audio5.play();
            break;
        case "l":
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
        default: console.log(buttonInnerHtml);
    };
};

for (i=0; i<numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){ 
       var buttonInner = this.innerHTML;
       ResponseEvent(buttonInner);
       ButtonAnimation(buttonInner)           
    });
};
document.addEventListener("keypress", function(event){
    ResponseEvent(event.key)
    ButtonAnimation(event.key)
    
});








// var buttonInnerHtml = this.InnerHTML;
// switch (buttonInnerHtml) {
//     case "w":
//         var audio6 = new Audio("sounds/crash.mp3");
//         audio6.play();
//         break;

//     case "a":
//         var audio1 = new Audio("sounds/kick-bass.mp3");
//         audio1.play();
//         break;
//     case "s":
//         var audio2 = new Audio("sounds/snare.mp3");
//         audio2.play();
//         break;
//     case "d":
//         var audio3 = new Audio("sounds/tom-1.mp3");
//         audio3.play();
//         break;
//     case "j":
//         var audio4 = new Audio("sounds/tom-2.mp3");
//         audio4.play();
//         break;
//     case "k":
//         var audio5 = new Audio("sounds/tom-3.mp3");
//         audio5.play();
//         break;
//     case "l":
//         var audio7 = new Audio("sounds/tom-4.mp3");
//         audio7.play();
//         break;
//     default: console.log(buttonInnerHtml)
// }



















// list = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"]
//          audio_snare = new Audio("sounds/"+list[i]+".mp3"); 
//         audio_snare.play();






















// var w_but = document.querySelector(".set .w").addEventListener("click", function (){
//     var audio_crash = new Audio("sounds/crash.mp3");
//     audio_crash.play();
// })
// var w_but = document.querySelector(".set .a").addEventListener("click", function (){
//     var audio_kick = new Audio("sounds/kick-bass.mp3");
//     audio_kick.play();
// })
// var w_but = document.querySelector(".set .s").addEventListener("click", function (){
//     var audio_snare = new Audio("sounds/snare.mp3");
//     audio_snare.play();
// })
// var w_but = document.querySelector(".set .d").addEventListener("click", function (){
//     var audio_tom1 = new Audio("sounds/tom-1.mp3");
//     audio_tom1.play();
// })
// var w_but = document.querySelector(".set .j").addEventListener("click", function (){
//     var audio_tom2 = new Audio("sounds/tom-2.mp3");
//     audio_tom2.play();
// })
// var w_but = document.querySelector(".set .k").addEventListener("click", function (){
//     var audio_tom3 = new Audio("sounds/tom-3.mp3");
//     audio_tom3.play();
// })
// var w_but = document.querySelector(".set .l").addEventListener("click", function (){
//     var audio_tom4 = new Audio("sounds/tom-4.mp3");
//     audio_tom4.play();
// })


