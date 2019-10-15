$(document).ready(function () {

    //Button effects - Method Chaining - Challenge - 1
    $('#button1').mouseenter(function () {
        $('#button1').removeClass('makeRed').addClass('makeBorder');
    });
    $('#button1').mouseleave(function () {
        $('#button1').addClass('makeRed').removeClass('makeBorder');
    });
    $('#button2').mouseenter(function () {
        $('#button2').removeClass('makeRed').addClass('makeBorder');
    });
    $('#button2').mouseleave(function () {
        $('#button2').addClass('makeRed').removeClass('makeBorder');
    });
    $('#button3').mouseenter(function () {
        $('#button3').removeClass('makeRed').addClass('makeBorder');
    });
    $('#button3').mouseleave(function () {
        $('#button3').addClass('makeRed').removeClass('makeBorder');
    });

    // Paragraph effects - Method Chaining - Challenge - 3
    $('#button1').click(function() {
        $('#para1').toggle('medium');
    });
    $('#button2').click(function() {
        $('#para2').slideToggle('medium');
    });
    $('#button3').click(function() {
        $('#para3').fadeToggle('slow', 'linear');
    });

    //jQuery Traversing Mt. DOM - Traversin Sideways - Challenge - 1

    //more direct way to manipulate the buttons - not part of this course though
    $('.buttonButton').hover(function() {
        $(this).css({'background-color':'rgb(255, 173, 167)', 'border': '2px solid red'});
    }, function() {
        $(this).css({'background-color': 'red', 'border': 'none'});
    });

    //the course code
    //Short to long version with ids and individual effects
     $('#buttonTwo').click(function() {
        $(this).next().slideToggle('slow');
    });

    $('#buttonOne').click(function() {
        var paraHide = $(this).next();
        $(paraHide).toggle('slow');
    });

    $('#buttonThree').click(function() {
        var paraHide = $('#buttonThree').next();
        $(paraHide).fadeToggle('slow');
    });

    /* Short version - for all buttons the same effect
    $('.buttonButton').click(function() {
        $(this).next().slideToggle('slow');
    });*/
});