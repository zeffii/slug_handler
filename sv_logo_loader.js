var sv_logo;
 
function setup() {
  createCanvas(700, 700, WEBGL);
  sv_logo = loadModel('sv_logo.obj');
}

function draw() {
  background(250);

  //# normalMaterial();
  scale(3, 3, 3_;
  translate(140, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(sv_logo);


}
