$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = '../components/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });


  $(document).ready(function(){

    $(".company-subnav-1").hide(); //Hide the navigation bar first
  
      $(window).scroll(function () {  //Listen for the window's scroll event
          if (isScrolledAfterElement(".companysection2")) { //if it has scrolled beyond the #content elment
              $('.company-subnav-1').fadeIn();  //Show the navigation bar
              

          } else {
              $('.company-subnav-1').fadeOut(); //Else hide it
          }
      });
  
    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement(elem) {
      var $elem = $(elem);
      var $window = $(window);

      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      var elemTop = $elem.offset().top;

      return elemTop <= docViewBottom;
  }
});

$(document).ready(function(){

  $(".company-subnav-1").hide(); //Hide the navigation bar first

    $(window).scroll(function () {  //Listen for the window's scroll event
        if (isScrolledBeforeElement(".companysection2")) { //if it has scrolled beyond the #content elment
            $('.company-subnav-1').fadeOut();  //Show the navigation bar
            

        } else {
            $('.company-subnav-1').fadeIn(); //Else hide it
        }
    });


  //Function that returns true if the window has scrolled beyond the given element
  function isScrolledAfterElement(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;

    return elemTop <= docViewBottom;
}
});