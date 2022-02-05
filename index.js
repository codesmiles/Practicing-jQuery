// getting elements
$('h1')

// JQuery event isteners and how they work
$("h1").click(() => {
    $("h1").hasClass("problemChild") === true
        ? $("h1").removeClass("problemChild")
        : $("h1").addClass("problemChild")
});

// .css sets and shows css properties
$("h1").css("color", "red");
// console.log($('h1').css('color')); // returns red

//.attr creates and set attributes, 
// $('button').attr('class','btn');
$('img').attr('src','app-features-boshtech.png').css('width','100%');