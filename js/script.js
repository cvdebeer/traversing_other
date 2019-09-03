$(document).ready(function () {
    //hover controls over the panels
    $('.theButton').mouseover(function () {
        $(this).addClass('blackpanel');
    });
    $('.theButton').mouseleave(function () {
        $(this).removeClass('blackpanel');
    });
    //resetting the panels
    $('.superButton').click(function () {
        $('.container').fadeTo('fast', 1);
    });
    // this hides the clicked panel
    $('.theButton').click(function () {
        $(this).hide();
    });
    //this changes the opacity of the other panels not clicked
    $('.theButton').click(function () {
        $('#panel .container').siblings().fadeTo('slow', 0.1);
    });

    // this hides all panels if one panel is clicked
    /*
        $('.theButton').click(function () {
            $('#panel .container').siblings().hide();
        });
    */
});