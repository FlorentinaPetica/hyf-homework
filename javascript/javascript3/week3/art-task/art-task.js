const body = document.querySelector("body");
const canvas = document.getElementById("circle");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    ctx.fillStyle =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    ctx.fill();
  }
}

//creating a circle with fixed coordinates
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI);
c1.draw();

//creating random sized, positioned and coloured circles every 100ms
setInterval(() => {
  const cRandom = new Circle(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight,
    Math.random() * 100,
    0,
    2 * Math.PI
  );
  cRandom.draw();
}, 100);

//circles appear around the cursor
canvas.addEventListener("mousemove", (e) => {
  console.log(e.offsetX);
  const cxy = new Circle(
    e.offsetX,
    e.offsetY,
    Math.random() * 100,
    0,
    2 * Math.PI
  );
  cxy.draw();
});

function windowResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", windowResize);
