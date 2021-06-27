
$(document).ready(function(){
    $("#image1").mouseover(function(){
        $("#img1").show();
    }).mouseout(function(){
        $("#img1").hide();
    });
    $("#image2").mouseover(function(){
        $("#img2").show();
    }).mouseout(function(){
        $("#img2").hide();
    });
    $("#image3").mouseover(function(){
        $("#img3").show();
    }).mouseout(function(){
        $("#img3").hide();
    });

});

$(document).ready(function(){
    $("#button").click(function(x){
        x.preventDefault();
        var size = $("#size option:selected").val();
        var crust = $("#crust option:selected").val();
        $("ul#list").append("<li>" + size + " " + crust + "</li>")
        
    });
});