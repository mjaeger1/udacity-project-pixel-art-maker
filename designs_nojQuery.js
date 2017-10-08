
let gridHeight, gridWidth, cellColor;

const colorPicker = document.getElementById('colorPicker');

document.getElementById('submit_button').addEventListener('click', function(event){
  gridHeight = document.getElementById('input_height').value;
  gridWidth = document.getElementById('input_width').value;
  makeGrid(gridHeight, gridWidth);
  event.preventDefault();
})


//creates grid/table based on input
function makeGrid() {

  const table = document.getElementById('pixel_canvas');

  table.innerHTML =''; // deletes table (if any available already)

  for (let i = 0; i < gridHeight; i++) {
      const row = table.insertRow(i);
      for (let j = 0; j < gridWidth; j++) {
          const cell = row.insertCell(j);
          cell.addEventListener('click', function() {
            cell.style.backgroundColor = colorPicker.value;
          });
          // .addEventListener could be replaced with Arrow Function:
          // cell.onclick = () => { cell.style.backgroundColor = colorPicker.value; };
      }
    }
  }
