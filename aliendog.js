function setup() {
  createCanvas(400, 400, WEBGL);

  describe('A white circle with black outline in the middle of a gray canvas.');
}

function draw() {
  background(0,102,204);
  let c0 = color(0,156,73)
  fill (c0)
  rect(-200,90,1000,1000)
  let c1 = color(102, 51, 0);
  fill(c1)
  ellipse(0, 0, 200, 100);
  let c2 = color(255, 204, 0);
  fill(c2);
  quad(-80, 25, -60, 40, -60, 90, -80, 90);
  quad( 80, 25, 60, 40, 60, 90, 80, 90);
  quad( 40, 45, 20, 50, 20, 90, 40, 90);
  quad( -40, 45, -20, 50, -20, 90, -40, 90);
  //('circle(x, y, d)')
  let c3 = color(153,76,0);
  fill (c3);
  ellipse(-100, -40, 100, 100);
  let c4 = color('#8D2020')
  fill(c4)
  ellipse(-60, -40, 20, 80);
  ellipse(-140, -40, 20, 80);
  circle(-115, -50, 20)
  circle(-90, -50, 20)
  circle(-100,-20, 20)
  rect(90,-100,50,90)
}