$("#red").click(function(){
    $("h1").css("color","red");
})

$("#addClass").click(function(){
    $("h1").addClass("luxury");
})

$("#removeClass").click(function(){
    $("h1").removeClass("luxury");
})

$("#toggleClass").click(function(){
    $("h1").toggleClass("luxury")
})

$("#changeText").click(function(){
    $("h1").text("Welcome");
})

$("#addHtml").click(function(){
    $("h1").html("<b>Hello</b>");
})

$("#addAttr").click(function(){
    $("h1").attr("style","font-size:2rem");
})

$("#before").click(function(){
    $("h1").before("<h3>Welcome</h3>");
})

$("#after").click(function(){
    $("h1").after("<h3>Welcome</h3>");
})

$("#append").click(function(){
    $("h1").append("<h3>Welcome</h3>");
})

$("#prepend").click(function(){
    $("h1").prepend("<h3>Welcome</h3>");
})

$("#show").click(function(){
    $("h1").show();
})

$("#hide").click(function(){
    $("h1").hide();
})

$("#toggle").click(function(){
    $("h1").toggle();
})

$("#fadeIn").click(function(){
    $("h1").fadeIn();
})

$("#fadeOut").click(function(){
    $("h1").fadeOut();
})

$("#fadeToggle").click(function(){
    $("h1").fadeToggle();
})

$("#slideUp").click(function(){
    $("h1").slideUp();
})

$("#slideDown").click(function(){
    $("h1").slideDown();
})

$("#slideToggle").click(function(){
    $("h1").slideToggle();
})

$("#animate").click(function(){
    $("h1").animate({opacity:0.5});
})