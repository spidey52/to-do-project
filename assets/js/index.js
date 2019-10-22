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

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var newTodo = $(this).val();
        // change input value to empty
        $(this).val("")
        // create a new li and add to ul
        if (newTodo) {
            $('ul').append(`<li> <span><i class="fas fa-trash-alt"></i></span> ${newTodo} </li>`)
        }
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").toggleClass('hide')
    // here i can use another method fadeToggle() // this will do the same work
})