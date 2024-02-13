$(".tombol").click(function () {
  // animate content
  $(".spidey").addClass("animate_content");
  $(".dalemnya_halaman").fadeOut(100).delay(2800).fadeIn();

  setTimeout(function () {
    $(".spidey").removeClass("animate_content");
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function () {
    $(".spidey").removeClass("fadeIn");
  }, 1100);
});

$(".tombol2").click(function () {
  // animate content
  $(".spidey").addClass("animate_content");
  $(".dalemnya_halaman").fadeOut(100).delay(2800).fadeIn();

  setTimeout(function () {
    $(".spidey").removeClass("animate_content");
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function () {
    $(".spidey").removeClass("fadeIn");
  }, 1100);
});

$(".kehome").click(function () {
  setTimeout(function () {
    $(".home").addClass("fadeIn");
  }, 1100);

  PuterLagu();
});

$(".kehalaman2").click(function () {
  setTimeout(function () {
    $(".spidey2").addClass("fadeIn");
  }, 1100);

  JalaninTeks();
  PuterLagu();
  Ambilnama();
});

var i = 0;
var txt =
  "Happy Valentine My Love. I never thought I'd get this lucky. I thought people like you only existed in the movies that had happy endings. I ain't gonna lie but ever since we started having a conversation you have changed my pesperctive towards life and also ain't gonna forget you are the one who brought my smile back to life and I would rather spend and enjoy this life with you.For better and for worse ml.Moreover I keep loving you every single day because you are the one for me. My love keeps growing stronger every second and I can't explain how happy I am. Will please explain what you did to my heart that I can't stop thinking of you?";
// var txt =
//    "I keep loving you every single day because you are the one for me. My love keeps growing stronger every second and I can't explain how happy I am. Will please explain what you did to my heart that I can't stop thinking of you?";
var speed = 200;

function JalaninTeks() {
  if (i < txt.length) {
    document.getElementById("tekss").innerHTML += txt.charAt(i);
    i++;
    setTimeout(JalaninTeks, speed);
  }
}

function PuterLagu() {
  var lagu = document.getElementById("lagu");
  return lagu.paused ? lagu.play() : lagu.pause();
}

function Ambilnama() {
  var x = document.getElementById("nama").value;
  document.getElementById("tampilnama").innerHTML = x;
}
