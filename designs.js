// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let gridHeight, gridWidth, gridColor;

// NOTE TO MYSELF: non-jquery way
// document.getElementsByTagName("form")[0].onsubmit = function() {... return false;}

$('#sizePicker').submit(function(){
  gridHeight = $('#input_height').val();
  gridWidth = $('#input_width').val();
  makeGrid(gridHeight,gridWidth);
  return false; //needed to avoid form reset
});


function makeGrid() {

  $('tr').remove();
  $('td').remove();

  for (var i = 0; i < gridHeight; i++) {
    $('#pixel_canvas').append("<tr></tr>");
  }

  var colHtml = "";

  for (var j = 0; j < gridWidth; j++) {
    colHtml += "<td></td>"
  }

  $('tr').each(function(){
    $(this).html(colHtml);
  });
}
