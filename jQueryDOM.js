console.log("Let's get ready to party with jQuery!");
//adding class to image
$("article img").addClass("image-center");

//removes last paragraph
$("article p:last-child").remove();

//setting font size of h1
$("h1").css("font-size", Math.random() * 100);

//adds an item to the list
$("ol").append($("<li>", { text: "I actually prefer cat's." }));

//empties the aside that contained the list and replaces with a paragraph
$("aside ol").empty().append($("<p>", { text: "Sorry for the list." }));

//chnges background color to match the three values
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
});

//an event listener that deletes the image when clicked
$("img").on("click", function (evt) {
    (evt.target).remove();
});