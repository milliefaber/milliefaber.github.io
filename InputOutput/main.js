var slideIndex = 1;
showSeasonSlides(slideIndex);

// Next/previous controls
function plusSeasonSlides(n) {
  showSeasonSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSeasonSlides(slideIndex = n);
}

function showSeasonSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;
showMoodSlides(slideIndex);

// Next/previous controls
function plusMoodSlides(n) {
  showMoodSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showMoodSlides(slideIndex = n);
}

function showMoodSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    } 
    slides[slideIndex-1].style.display = "block";
  }


  var slideIndex = 1;
showColorSlides(slideIndex);

// Next/previous controls
function plusColorSlides(n) {
  showColorSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showColorSlides(slideIndex = n);
}

  function showColorSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  
  function changeImage() {
    var image = document.getElementById('outfit');
    if (image.src.match("postreveal.png")) {
        image.src = "prereveal.png";
    }
    else {
        image.src = "postreveal.png";
    }
}
