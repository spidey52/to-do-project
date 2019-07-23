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

$('ul').on("click", "li", function(){
    $(this).toggleClass('completed')
})

$('ul').on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropagation();
})

$("input[type='text']").keypress(function(evnet){
    if(event.which === 13){
        // grabbing new todo text from input
        var newTodo = $(this).val();
        // change input value to empty
        $(this).val("")
        // create a new li and add to ul
        $('ul').append(`<li> <span>X</span> ${newTodo} </li>`)
    }
})