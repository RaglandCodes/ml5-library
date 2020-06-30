let facemesh;
let predictions = [];
let img;

function preload() {
  img = loadImage('data/harriet.jpg');
}

function setup() {
  createCanvas(640, 480);
  facemesh = ml5.facemesh(modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new predictions are made
  // facemesh.on("predict", results => {
  //   predictions = results;
  // });
}

async function modelReady() {
  console.log("Model ready!");
  console.log(facemesh);
  // predictions = await facemesh.predict();
  // console.log(predictions);
}

function draw() {
  image(img, 0, 0, width, height);

  // We can call both functions to draw all keypoints
  // drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;

    // Draw facial keypoints.
    for (let j = 0; j < keypoints.length; j += 1) {
      const [x, y] = keypoints[j];

      fill(0, 255, 0);
      ellipse(x, y, 5, 5);
    }
  }
}
