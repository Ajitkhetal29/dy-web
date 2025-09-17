// Mobile menu toggle
const btn = document.getElementById('mobileBtn');
const menu = document.getElementById('mobileMenu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));

// Header background on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-gray-800/95', 'backdrop-blur-sm');
    } else {
        header.classList.remove('bg-gray-800/95', 'backdrop-blur-sm');
    }
});

const slides = document.querySelectorAll('#slider > div');
const dots = document.querySelectorAll('[data-slide]');
let index = 0;

function showSlide(i) {
    slides.forEach((s, n) => s.style.opacity = n === i ? '1' : '0');
    dots.forEach((d, n) => {
        d.classList.toggle('bg-white', n === i);
        d.classList.toggle('bg-white/50', n !== i);
    });
    index = i;
}

// Ensure carousel starts at first slide
document.addEventListener('DOMContentLoaded', () => showSlide(0));

document.getElementById('prev').onclick = () =>
    showSlide((index - 1 + slides.length) % slides.length);
document.getElementById('next').onclick = () =>
    showSlide((index + 1) % slides.length);
dots.forEach((d, n) => d.onclick = () => showSlide(n));

// Auto-play
setInterval(() => showSlide((index + 1) % slides.length), 6000);


// counter

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");


    const animateCount = (el) => {
        const target = +el.dataset.target;
        const duration = 1500;
        const startTime = performance.now();

        const update = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            el.textContent = Math.floor(progress * target);
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    animateCount(entry.target);
                    entry.target.dataset.counted = "true";
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
});

document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("typewriter");
    const text = "Welcome to Delta Yards";
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
            el.remo
        }
    }

    type();
});

// const container = document.getElementById('logoTrack');
// const scroller = container.firstElementChild;

// let isDown = false;
// let startX, scrollLeft;

// container.addEventListener('mousedown', (e) => {
//     isDown = true;
//     container.classList.add('active');
//     startX = e.pageX - container.offsetLeft;
//     scrollLeft = container.scrollLeft;
//     // stop the auto animation while dragging
//     scroller.style.animationPlayState = 'paused';
// });

// container.addEventListener('mouseleave', () => endDrag());
// container.addEventListener('mouseup', () => endDrag());

// container.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - container.offsetLeft;
//     const walk = (x - startX) * 1.5; 
//     container.scrollLeft = scrollLeft - walk;
// });

// function endDrag() {
//     isDown = false;
//     scroller.style.animationPlayState = 'running'; 
// }

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('partnersText');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('slide-up-fade');
          obs.unobserve(entry.target); // run once
        }
      });
    },
    { threshold: 0.1 } 
  );
  observer.observe(target);
});