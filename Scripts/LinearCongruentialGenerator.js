let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');
let a, m, seed;
const aInput = document.getElementById('a')
const cInput = document.getElementById('c')
const mInput = document.getElementById('m')
const seedInput = document.getElementById('seed')

function runLCG() {
  a = aInput.valueAsNumber;
  c = cInput.valueAsNumber;
  m = mInput.valueAsNumber;
  seed = seedInput.valueAsNumber;
  context.clearRect(0, 0, 800, 800)
  draw()
}

function nextRand() {
  seed = (a * seed + c) % m;
  return seed
}

function nextRandFloat() {
  return nextRand() / m;
}


let y = 0;
function draw() {
  for (let x = 0; x < 800; x++) {
    if (nextRandFloat() < 0.5) {
      context.fillStyle = 'black'
      context.fillRect(x, y, 1, 1);
    } else {
      context.fillStyle = 'white'
      context.fillRect(x, y, 1, 1)
    }
  }
  y++;
  if (y < 600) {
    requestAnimationFrame(draw);
  }
}