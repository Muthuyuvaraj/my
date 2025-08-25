// === Starfield Background ===
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];
const numStars = 250;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width
  });
}

let frameCount = 0; // keeps increasing forever

function animate() {
  frameCount++; // continuous counter (never resets)

  ctx.fillStyle = "rgba(5, 5, 20, 1)"; // dark cosmic bg
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];

    // Move star forward infinitely
    star.z -= 2; // speed
    if (star.z <= 0) {
      // recycle star when it passes the camera
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
      star.z = canvas.width; 
    }

    // Perspective projection
    const k = 128.0 / star.z;
    const px = (star.x - canvas.width / 2) * k + canvas.width / 2;
    const py = (star.y - canvas.height / 2) * k + canvas.height / 2;

    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      const size = (1 - star.z / canvas.width) * 3;
      ctx.fillRect(px, py, size, size);
    }
  }

  requestAnimationFrame(animate);
}
animate();


// === Mobile Navigation Toggle ===
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navIcon = navToggle?.querySelector("i");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    // Toggle states
    navToggle.classList.toggle("open");   // animate hamburger
    navMenu.classList.toggle("active");   // show/hide menu

    // Toggle FontAwesome icon between bars & times
    if (navIcon) {
      const expanded = navToggle.classList.contains("open");
      navIcon.classList.toggle("fa-bars", !expanded);
      navIcon.classList.toggle("fa-times", expanded);
    }
  });
}


// === Reveal on Scroll ===
const reveals = document.querySelectorAll(".reveal");
function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();


// === Dynamic Year in Footer ===
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
