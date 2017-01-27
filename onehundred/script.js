// Toggle grid padding
function myFunction() {
    var x = document.getElementById("myGrid");
    if (x.className === "w3-row") {
        x.className = "w3-row-padding";
    } else {
        x.className = x.className.replace("w3-row-padding", "w3-row");
    }
}

// Open and close sidenav
function w3_open() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}

$(function() {

    $("h2").wrapInner("<span>")

    $("h2 br").before("<span class='spacer'>").after("<span class='spacer'>");

    $(".imageToggle").hover(function() {
        var headline = $(this).attr('data-headlineid');
        $(headline).slideToggle();
    });

    // $('.heading, body').hide(0).delay(200).fadeIn(2000);

    $('.heading').hide(0).delay(200).fadeIn(4000);
    $('body').hide(0).delay(200).fadeIn(2000);

});
