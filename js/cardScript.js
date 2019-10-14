$('.stream').on('click', function () {
    // selector for all card
    var streamSelectorGlobal = '.card';
    // selector for cards belonging to a specific stream
    var thisStreamSelector = '.' + this.id;

    $(streamSelectorGlobal).removeClass('card-highlight');
    $(thisStreamSelector).addClass('card-highlight');
    
    });