$(document).ready(function () {


    /* Swipe instances */
    var menuHammer = new Hammer($(this).get(0));
    menuHammer.on('swiperight swipeleft', function (event) {
        var curEle = event.target;
        var targetIsSwipable = true;

        while (curEle.tagName.toLowerCase() != 'body') {
            if (curEle.classList && curEle.classList.contains('is-swipable')) {
                targetIsSwipable = false;
                break;
            }
            curEle = curEle.parentNode;
        };
        if (targetIsSwipable) {
            var hideMenu = event.type == 'swipeleft';
            $('header').toggleClass('has-shown-menu', !hideMenu);
        }
    });


    /* Menu toggle */
    $('body').on('click', '[data-toggle="class"]', function () {
        var target = $(this).attr("data-target");
        var classToToggle = $(this).attr("data-toggle-class");
        $(target).toggleClass(classToToggle);
    });

    $("#infografik").load("desktop.svg", function () {
        $("#box1").hide();
        $(".box2").hide();
        $("#box3").hide();

        $("#punkt01").hover(
            function () {
                $("#box1").fadeIn(100);
            },
            function () {
                $("#box1").fadeOut(100);
            }
        );
        $("#punkt02").hover(
            function () {
                $(".box2").fadeIn(100);
            },
            function () {
                $(".box2").fadeOut(100);
            }
        );
        $("#punkt03").hover(
            function () {
                $("#box3").fadeIn(100);
            },
            function () {
                $("#box3").fadeOut(100);
            }
        );
    });

});
