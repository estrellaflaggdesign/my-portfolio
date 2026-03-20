$(document).ready(function () {
    $('#menu-icon, #close-icon').click(function () {
        $('nav').toggleClass("navexpanded");
        return false;
    });
});