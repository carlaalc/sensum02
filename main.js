$(document).on('click', '.scroll-button', function(e) {
    e.preventDefault();
    $(".navbar-collapse").collapse('hide');
    var id = $(this).attr('href');
    targetOffset = $(id).offset().top;
    menuHeight = $('nav').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}