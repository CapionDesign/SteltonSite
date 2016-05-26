$(document).ready(function() {


  var menuHammer = new Hammer($(this).get(0));
  menuHammer.on('swiperight swipeleft', function(event) {
    var curEle = event.target;
    var targetIsSwipable = false;
    while (curEle.tagName != 'body') {
      if (curEle.classList.contains('is-swipable')) {
        targetIsSwipable = true;
        break;
      }
      curEle = curEle.parentNode;
    }
    if (!targetIsSwipable) {
      var hideMenu = event.type == 'swipeleft';
      $('header').toggleClass('has-shown-menu', !hideMenu);
    }
  });

  $('body').on('click', '[data-toggle="class"]', function(){
    var target = $(this).attr("data-target");
    var classToToggle = $(this).attr("data-toggle-class");
    $(target).toggleClass(classToToggle);
  });

});
