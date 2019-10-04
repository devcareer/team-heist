$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = '../components/' + $(this).data('include') + '.html';
      $(this).load(file);
  });
});



// Hide Then Later Show Navbar

$(document).ready(function(){

  $('.company-subnav-1').hide();  
    $(window).scroll(function () {  
        if (isScrolledAfterElement(".companysection2")) { 
            $('.company-subnav-1').fadeIn();  

        } else {
            $('.company-subnav-1').fadeOut(); 
        }
    });

 
  function isScrolledAfterElement(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;

    return elemTop <= docViewBottom;
}
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}