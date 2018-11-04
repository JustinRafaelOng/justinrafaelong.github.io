$(document).ready(function() {

    $('#sizePicker').submit(function(event) {
        makeGrid();
        registerMouseHandlers();
        event.preventDefault();
    });
});

function makeGrid() {
  var canvas, gridHeight, gridWidth;
  canvas = $('#pixelCanvas');
  gridHeight = $('#inputHeight').val();
  gridWidth = $('#inputWeight').val();

  canvas.children().remove();

  for ( var y = 0; y < gridHeight; y++) {
  canvas.append('<tr></tr>');
    }
  
  rows = $('tr');
  
  for ( var x = 0; x < gridWidth; x++) {
    rows.append('<td></td>');
    }
}

function registerMouseHandlers() {
    
    let mouseIsDown = false;

    $('td').on('mousemove', function() {
        if (mouseIsDown) {
            let color = $('#colorPicker').val();
            $(this).css('backgroundColor', color);
        }
    });

    $('td').on('mousedown', function() {
        mouseIsDown = true;
    });

    $('td').on('mouseup', function() {
        mouseIsDown = false;
    });

    $('td').on('click', function() {
        let color = $('#colorPicker').val();
        $(this).css('backgroundColor', color);
    });

    $('td').on('dblclick', function() {
        $(this).css('background', 'none');
    })
}