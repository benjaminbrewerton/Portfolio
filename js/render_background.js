var radius = 2; // Static variable for the radius of a star

// Function to initialise the background canvas
function initBackgroundCanvas(canv_id) {
    var canvas = {};

    // initialise the canvas parameters
    canvas.node = document.createElement('canvas');
    canvas.context = canvas.node.getContext('2d');
    canvas.node.width = getDocumentWidth();
    canvas.node.height = getDocumentHeight();
    canvas.node.className = "background-canvas";
    canvas.node.id = canv_id;

    // append canvas to body
    document.body.appendChild(canvas.node);

    // return the canvas element
    return canvas;
}

// Function to draw the stars
function drawStar(ctx, loc_x, loc_y) {
    // Draw the star
    ctx.arc(loc_x, loc_y, radius, 0, 2 * Math.PI, false);
}

var starCount = 200; // Amount of stars to be drawn
var star_locations = new Array(starCount); // Store the coordinates pairs as an array of (x,y)
var initialSize = new Array(2); // Store the initial screen size the coordinates were created from [(x,y)]

// Function to obtain the locations of the stars
function createLocations() {
    // Set the initial screen size
    initialSize[0] = getDocumentWidth();
    initialSize[1] = getDocumentHeight();

    for (var i = 0; i < starCount; i++) {
        // Get the location for the stars
        var star_x = getRandBetween(radius / 2, getDocumentWidth());
        var star_y = getRandBetween(radius / 2, getDocumentHeight());

        // Assign the locations to the list
        star_locations[i] = new Array(2);
        star_locations[i][0] = star_x;
        star_locations[i][1] = star_y;
    }
}

// Function to render the stars onto the background a specified number of times
function renderStars() {
    var canv = document.getElementById('star-canvas');

    // check if the canvas exists
    if(!canv) {
        // Initialise the document background
        canv = initBackgroundCanvas("star-canvas");
        createLocations();
    }

    // check if the canvas is not null
    if (canv.context) {

        var cont = canv.context; // get the context to draw on

        for (var i = 0; i < star_locations.length; i++) {
            cont.beginPath(); // Begin drawing

            // Scale the star locations
            var star_x = star_locations[i][0] * (getDocumentWidth() / initialSize[0]);
            var star_y = star_locations[i][1] * (getDocumentHeight() / initialSize[1]);

            // Actually draw the star
            drawStar(cont, star_locations[i][0], star_locations[i][1]);

            // Set the fill colour to white and fill the circle
            cont.fillStyle = "white";
            cont.fill();
        }
    }

}

// check for a window resize
window.addEventListener('resize', renderStars);
