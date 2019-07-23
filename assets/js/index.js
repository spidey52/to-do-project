// $("li").click(function(){
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//        $(this).css("color", "black")
//        $(this).css("text-decoration", "none")
//     }else{
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         })
//     }
// })

$('li').click(function(){
    $(this).toggleClass('completed')
})

$('span').click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropagation();
})