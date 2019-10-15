$('.stream').on('click', function () {
    // selector for all card
    var streamSelectorGlobal = '.card';
    // selector for cards belonging to a specific stream
    var thisStreamSelector = '.' + this.id;

    $(streamSelectorGlobal).removeClass('card-highlight');
    $(thisStreamSelector).addClass('card-highlight');
    
    });

$('.card_para').click(function() {
    
    // selector for the paragraph within individual card
    var paraLinks = $(this).children('a');

    $('a').removeClass('links-highlight');
    $(paraLinks). addClass('links-highlight');

    // another option without adding class to the css file - doesn't return the color back though
    /**
     * $('p').click(function() {
     *      $(this).children('a').css('background-color', 'yellow');
     * });
     */

});