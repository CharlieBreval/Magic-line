$.fn.magicLine = function(options) {

    var defaults = {
        activeClass : '.active',
    }

    var options = $.extend(defaults, options);

    var magicLine = $('<li></li>').attr('class', 'magic-line');
    var mainNav = $(this);
    var active = mainNav.children(options.activeClass);
    var hoverEnabled = true;

    magicLine.css('left', active.position().left).css('width', active.css('width'));
    magicLine.data('base-left', magicLine.css('left'));
    magicLine.data('base-width', magicLine.css('width'));
    mainNav.append(magicLine);

    magicLine = $(this).find('.magic-line');

    $(mainNav).on('mouseenter', 'li', function(e) {
        e.preventDefault();
        if (hoverEnabled === true) {
            animateMenu($(this), magicLine);
        }
    });

    $(mainNav).on('mouseleave', 'li', function(e) {
        e.preventDefault();
        if (hoverEnabled === true) {
            magicLine.stop().animate({
                left: magicLine.data('base-left'),
                width: magicLine.data('base-width')
            });
        }
    });

    $(mainNav).on('click', 'li', function(e) {
        if (!$(this).hasClass('ml-open')) {
            animateMenu($(this), magicLine);

            $(this).siblings('.ml-open').each(function(i) {
                $(this).removeClass('ml-open');
            })
            $(this).addClass('ml-open');
            hoverEnabled = false;

        } else {
            $(this).removeClass('ml-open');
            hoverEnabled = true;
        }
    });

    var animateMenu = function(li, magicLine) {
        var leftPos = li.position().left + 'px';
        var newWidth = li.css('width');

        magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        }, 300, 'swing');
    };
};
