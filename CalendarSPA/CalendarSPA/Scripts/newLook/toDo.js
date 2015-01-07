$(document).ready(function () {
    var imgWidth = 405;
    var width = ($(window).width() - imgWidth) + 'px';
    $('#top').css('width', width);
    $('#bottom').css('width', width);
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $('#data').text('The ' + today.getDate() + 'th of ' + months[today.getMonth()] + ' ' + today.getFullYear());

    $('#tasks').css('width', ($(window).width() - 50) + 'px');
    //$('#tasks').css('height', ($(window).height() - 300) + 'px');
    $('#accordion').accordion();
});