// The Importance Of All This - Challenge - 1
$('.stream').on('click', function () {
    // selector for all card
    var streamSelectorGlobal = '.card';
    // selector for cards belonging to a specific stream
    var thisStreamSelector = '.' + this.id;

    $(streamSelectorGlobal).removeClass('card-highlight');
    $(thisStreamSelector).addClass('card-highlight');
    
    });

//jQuery Traversing Mt. DOM - Traversin Up and Down the DOM Tree - Challenge - 1
$('.card_para').click(function() {
    
    // selector for the paragraph within individual card
    var paraLinks = $(this).children('a');

    $('a').removeClass('links-highlight');
    $(paraLinks).addClass('links-highlight');

    // another option without adding class to the css file - doesn't return the color back though
    /**
     * $('p').click(function() {
     *      $(this).children('a').css('background-color', 'yellow');
     * });
     */
});

//jQuery Traversing Mt. DOM - Traversin Sideways - Challenge - 2

$('button').click(function() {
 $(this).prev().slideToggle('slow');
});

$('img').click(function() {
 $(this).next().children('p').slideDown();
});
