$('h1').css('color', 'red');
console.log($('h1').css('color'));

$("h1").click(() => {
    $("h1").hasClass("problemChild") === true
        ? $("h1").removeClass("problemChild")
        : $("h1").addClass("problemChild")
});


// $('button').attr('class','btn');

//.attr creates and set attributes, .css sets and shows css properties 
$('img').attr('src','app-features-boshtech.png').css('width','100%');