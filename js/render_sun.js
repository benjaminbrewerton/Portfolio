var sun_percent_width = 0.1; // percentage width the sun should occupy

// Function to initialise the star canvas
function initSunCanvas(canv_id) {
    var canvas = {};

    // initialise the canvas parameters
    canvas.node = document.createElement('canvas');
    canvas.context = canvas.node.getContext('2d');
    var square = document.body.clientWidth * sun_percent_width; // The sides of the canvas should be this width [square]
    canvas.node.width = square;
    canvas.node.height = square;
    canvas.node.className = "background-canvas";
    canvas.node.id = canv_id;
    canvas.node.style.marginLeft = (document.body.clientWidth - square).toString() + "px"; // set the margin to align to the right
    canvas.node.style.marginTop = (0).toString() + "px";

    // append canvas to body
    document.body.appendChild(canvas.node);

    // return the canvas element
    return canvas;
}

// Function to draw the sun
function drawSun(ctx, loc_x, loc_y) {
    // Draw the sun so its a quarter circle extending from 180 -> 270 degrees
    ctx.arc(loc_x, loc_y, document.body.clientWidth * sun_percent_width, 0, Math.PI);
}

// Function to render the stars onto the background a specified number of times
function renderSun() {
    var canv = document.getElementById('sun-canvas');

    // check if the canvas exists
    if(!canv) {
        // Initialise the document background
        canv = initSunCanvas("sun-canvas");
    } else {
        var square = document.body.clientWidth * sun_percent_width; // The sides of the canvas should be this width [square]

        canv.style.marginLeft = (document.body.clientWidth*(1 - sun_percent_width)).toString() + "px"; // set the margin to align to the right
        canv.width = square;
        canv.height = square;

        canv.getContext('2d').clearRect(0, 0, canv.width, canv.height); // clear it for redrawing
    }

    var cont = canv.context; // get the context to draw on

    if(!cont) {
        cont = canv.getContext('2d');
    }

    cont.beginPath(); // Begin drawing

    cont.translate(document.body.clientWidth * sun_percent_width, 0);

    // Actually draw the star at x=maximum_width and y=0
    drawSun(cont, 0, 0);

    // Set the fill colour to white and fill the circle
    cont.fillStyle = "#fcb103";
    cont.fill();
}

// check for a window resize
window.addEventListener('resize', renderSun);