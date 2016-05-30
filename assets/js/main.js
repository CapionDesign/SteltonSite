$(document).ready(function () {

    
    /* swipe instances */
    var menuHammer = new Hammer($(this).get(0));
    menuHammer.on('swiperight swipeleft', function (event) {
        var curEle = event.target;
        var targetIsSwipable = false;
        
        while (curEle.tagName != 'body') {
            if (curEle.classList && curEle.classList.contains('swipable')); {
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
    
    
    
    /* Menu Toggle */

    $('body').on('click', '[data-toggle="class"]', function () {
        var target = $(this).attr("data-target");
        var classToToggle = $(this).attr("data-toggle-class");
        $(target).toggleClass(classToToggle);
    });

});