// Initialize AOS animations
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Smooth scroll for internal links (if you add nav links in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Floating profile picture animation
const profilePic = document.querySelector(".profile-pic img");
if (profilePic) {
  let angle = 0;
  function floatPic() {
    angle += 0.02;
    const y = Math.sin(angle) * 6; // up & down motion
    profilePic.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(floatPic);
  }
  floatPic();
}

// Vintage mode toggle (extra effect)
const vintageToggle = document.createElement("button");
vintageToggle.innerText = "Vintage Mode";
vintageToggle.classList.add("btn");
vintageToggle.style.position = "fixed";
vintageToggle.style.bottom = "20px";
vintageToggle.style.right = "20px";
document.body.appendChild(vintageToggle);

let vintageOn = false;
vintageToggle.addEventListener("click", () => {
  vintageOn = !vintageOn;
  if (vintageOn) {
    document.body.style.filter = "sepia(0.6) contrast(1.1)";
    vintageToggle.innerText = "Normal Mode";
  } else {
    document.body.style.filter = "none";
    vintageToggle.innerText = "Vintage Mode";
  }
});
