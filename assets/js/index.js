$("li").click(function(){
    if($(this).css("color") === "rgb(128, 128, 128)"){
       $(this).css("color", "black")
       $(this).css("text-decoration", "none")
    }else{
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        })
    }
    
})
