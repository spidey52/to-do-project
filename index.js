var divs = $("div")
var highlightDivs = $(".highlight")
var thirdDivs = $("#third")


divs.css('background', 'purple')
highlightDivs.css('width', '200px')
thirdDivs.css({
    'border': '2px solid red'
})

$('div:first-of-type').css('color', 'pink')
