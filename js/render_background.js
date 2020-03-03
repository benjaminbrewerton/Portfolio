var radius = 2; // Static variable for the radius of a star

// Function to initialise the background canvas
function initCanvas() {
  var canvas = {};

  // initialise the canvas parameters
  canvas.node = document.createElement('canvas');
  canvas.context = canvas.node.getContext('2d');
  canvas.node.width = getDocumentWidth();
  canvas.node.height = getDocumentHeight();
  canvas.id = "background-canvas"
  parent.appendChild(document.getElementsByTagName("BODY")[0]); // append to body

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

  if(canv.getContext) {
    var cont = canvas.getContext('2d');
    var starCount = 150; // Amount of stars to be drawn

    for(var i = 0; i++; i < starCount) {
      cont.beginPath(); // Begin drawing

      // Get the location for the stars
      var star_x = getRandBetween(radius/2, getDocumentWidth());
      var star_y = getRandBetween(radius/2, getDocumentHeight());
    }
    // Actually draw the star
    drawStar(cont, star_x, star_y);

    // Set the fill colour to white and fill the circle
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
