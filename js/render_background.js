var radius = 2; // Static variable for the radius of a star

// Function to initialise the background canvas
function initCanvas() {
  var canvas = {};

  // initialise the canvas parameters
  canvas.node = document.createElement('canvas');
  canvas.context = canvas.node.getContext('2d');
  canvas.node.width = getDocumentWidth();
  canvas.node.height = getDocumentHeight();
  canvas.node.id = "background-canvas";

  // append canvas to body
  document.body.appendChild(canvas.node);

  // return the canvas element
  return canvas;
}

// Function to draw the stars
function drawStar(ctx, loc_x, loc_y) {
  // Draw the star
  ctx.arc(loc_x, loc_y, radius, 0, 2*Math.PI, false);
}

// Function to render the stars onto the background a specified number of times
function renderStars() {
  var canv = initCanvas();

  // check if the canvas is not null
  if(canv.context) {

    var cont = canv.context;
    var starCount = 150; // Amount of stars to be drawn

    for(var i = 0; i < starCount; i++) {
      cont.beginPath(); // Begin drawing
      // Get the location for the stars
      var star_x = getRandBetween(radius/2, getDocumentWidth());
      var star_y = getRandBetween(radius/2, getDocumentHeight());

      // Actually draw the star
      drawStar(cont, star_x, star_y);

      // Set the fill colour to white and fill the circle
      cont.fillStyle = "white";
      cont.fill();
    }
  }
}

// Function for handling the background resizing
function resizeCanvasBackground() {
    var canv = document.getElementById('background-canvas');

    var oldcanv = canvas.toDataURL('image/png');

    canv.width = getDocumentWidth();
    canv.height = getDocumentHeight();

    canv.drawImage(oldcanv);
}

window.addEventListener('resize', resizeCanvasBackground);
