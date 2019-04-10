$(window).scroll(function () {
    if ($(this).scrollTop() <= 50)
        $("#gnb").css({
            "background-color": "rgba(0,0,0,0)",
            "box-shadow": "none",
            "color": "#666"
        });
    else
        $("#gnb").css({
            "background-color": "rgba(255,255,255,0.7)",
            "box-shadow": "0px 2px 8px #ccc",
            "color": "#222"
        });
});

$(window).ready(function () {
    $(".cell").fadeOut("2000");
    $(".cell").fadeIn("2000");

});

$(document).ready(function () {
    $("#nav ul.sub").hide();
    $(".menu li").click(function () {
        $("ul", this).slideToggle("fast");
    });
});