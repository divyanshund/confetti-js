
//creating 150 confetti particles
for(i=0;i<150;i++){
  (function (i) {
    setTimeout(generate(i), 6000*i);
    })(i);
};

//this function generates each particle of fixed width and height, and assigns colour randomly
function generate(i) {
    var width = 6.3;
    var height = 3.0;
    var ColourVal = Math.ceil(Math.random() * 3);
    var colour;
    switch (ColourVal) {
      case 1:
        colour = "green";
        break;
      case 2:
        colour = "yellow";
        break;
      default:
        colour = "red";}
    
    //adding all the div tags for each confetti particle. Each div tag will have two classes, one with confetti number and the other class for the colour.
    //each colour used has been defined separately in the css file for that particular class. 
    $('<div class="confeti-' + i + ' ' + colour + '"></div>').css({
      "width": width + "px",
      "height": height + "px",
      "top": -15 + "%",
      "left": Math.random() * 100 + "%",
      }).
    appendTo('.wrapper');
  
    drop(i);
  }
  //using the animate property provided in jQuery. Passing in three arguments to animate, the positional properties, time (making it random) and then a function which resets each confetti
  function drop(x) {
    $('.confeti-' + x).animate({
      top: "100%",
      left: "+=" + 0.2 * 15 + "%" },
    Math.random() * 3000 + 4000,function(){
        reset(x);
    });
  }
  //this function resets each confetti and then runs the drop function again
  function reset(x) {
    $('.confeti-' + x).animate({
      "top": -Math.random() * 20 + "%",
      "left": "-=" + Math.random() * 15 + "%" },
    0, function () {
      drop(x);
    });
  }