$(document).ready(function () {

    //Button effects
    $('#button1').mouseenter(function () {
        $('#button1').removeClass('makeRed').addClass('makeBorder');
    });
    $('#button1').mouseleave(function () {
        $('#button1').addClass('makeRed').removeClass('makeBorder');
    });
    $('#button1').mouseenter(function () {
        $('#button1').removeClass('makeRed').addClass('makeBorder');
    });
    $('#button1').mouseleave(function () {
        $('#button1').addClass('makeRed').removeClass('makeBorder');
    });
    $('#button1').mouseenter(function () {
        $('#button1').removeClass('makeRed').addClass('makeBorder');
    });
    $('#button1').mouseleave(function () {
        $('#button1').addClass('makeRed').removeClass('makeBorder');
    });

    // Paragraph effects
    $('#button1').click(function() {
        $('#para1').toggle('medium');
    });
    $('#button2').click(function() {
        $('#para2').slideToggle('medium');
    });
    $('#button3').click(function() {
        $('#para3').fadeToggle('slow', 'linear');
    });
});