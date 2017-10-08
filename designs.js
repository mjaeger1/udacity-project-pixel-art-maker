let gridHeight, gridWidth, cellColor;


// on submit, get grid sizes and call makeGrid()
$('#sizePicker').submit(function() {
  gridHeight = $('#input_height').val();
  gridWidth = $('#input_width').val();
  makeGrid(gridHeight,gridWidth);
  return false; //needed to avoid form reset, alternatively: event.preventDefault()
});


//creates grid/table based on input
function makeGrid() {

  // deletes table (if any available already)
  $('tr').remove();
  $('td').remove();

  // adds rows to table
  for (var i = 0; i < gridHeight; i++) {
    $('#pixel_canvas').append("<tr></tr>");
  }

  // adds columns to table
  var colHtml = "";

  for (var j = 0; j < gridWidth; j++) {
    colHtml += "<td></td>"
  }

  $('tr').each(function() {
    $(this).html(colHtml);
  });
}


// listener to detect clicks on table cells; changing background-color
$('#pixel_canvas').on('click', 'td', function() {
    cellColor = $('#colorPicker').val();
    $(this).css("background-color",cellColor);
});
