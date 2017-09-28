// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let gridHeight, gridWidth, gridColor;

$('#sizePicker').submit(function(){
  gridHeight = $('#input_height').val();
  gridWidth = $('#input_width').val();
  console.log(gridHeight +"/" + gridWidth);
  makeGrid(gridHeight,gridWidth);
});


function makeGrid() {
  console.log("makeGridFunction");
  for (var i = 0; i < gridHeight; i++) {
    $('#pixel_canvas').append("<tr></tr>");
  }
}
