filtroX = 0;
filtroY = 0;

function preload() {
  batom = loadImage("https://img.freepik.com/vetores-premium/estilo-desenho-animado-em-forma-de-boca-de-beijo_78370-1263.jpg?w=2000");
  bigode = loadImage("https://images.vexels.com/media/users/3/157632/isolated/preview/c1db65416711f57ed1162aac9297d277-o-icone-do-bigode-hungaro.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO); 
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("Filtro foi inicializado");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    filtroX = results[0].pose.filtro.x - 15;
    filtroY = results[0].pose.filtro.y - 15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(filtro, filtroX, filtroY, 30, 30);
}

function takeSnapshot() {
  save("myFilter.png");
}
