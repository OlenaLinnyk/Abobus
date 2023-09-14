var bobaMogus = document.getElementById("boba_mogus");
const audio_mogus = new Audio("audio/Among_Us_Song.mp3");
bobaMogus.onclick = function () {
    var myImage = document.getElementById("Aboba");
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Kyky.jpg"){
        myImage.setAttribute("src", "images/amogus-sus.gif");
        bobaMogus.innerText = "REPLACE \"MOGUS\" WITH \"BOBA\"";
        audio_mogus.play();
    }
    else{
        myImage.setAttribute("src", "images/Kyky.jpg");
        bobaMogus.innerText = "REPLACE \"BOBA\" WITH \"MOGUS\"";
        audio_mogus.pause();
    }
  };