var $doc = jQuery('html, body');
jQuery('.scrollSlow').click(function() {
    $doc.animate({
        scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 91
    }, 500);
    return false;
});


jQuery(document).ready(function(){
    jQuery(window).on("scroll", function() {
        if(jQuery(window).scrollTop() > 130) {
          jQuery(".navbar").addClass("bg-vermelho");
        } else {
          jQuery(".navbar").removeClass("bg-vermelho");
        }
      });
});

