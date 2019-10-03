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

