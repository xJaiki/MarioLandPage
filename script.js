let card = document.querySelector('.card');

card.addEventListener('mousemove', function(e) {
  let bounding = card.getBoundingClientRect();
  
  let xAxis = -(window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 7;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener('mouseleave', function() {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// cursor dot
let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function(e) {
  cursor.style.display = 'block';
  // move cursor without delay
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});

let text = document.querySelector('.text');
let counter = 0;
text.addEventListener('click', function() {
  // add 1 rem to the font-size
  let currentFontSize = parseFloat(getComputedStyle(text).fontSize);
  text.style.fontSize = currentFontSize + 10 + 'px';

  counter++;

  if (counter === 10) {
    location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
});

const canvas = document.getElementById('grain');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function generateGrain() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    const value = (Math.random() * 255) | 0;
    pixels[i] = value;
    pixels[i + 1] = value;
    pixels[i + 2] = value;
    pixels[i + 3] = 20; // Adjust the alpha for intensity
  }

  ctx.putImageData(imageData, 0, 0);
}

function animate() {
  generateGrain();
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 100);
}

animate();
