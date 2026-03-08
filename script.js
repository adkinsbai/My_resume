(function () {
  "use strict";

  // ========== 画布背景：流动节点 + 连线（芯片/电路感） ==========
  const canvas = document.getElementById("canvas-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  const particles = [];
  const particleCount = 50;
  const connectDist = 120;
  const accent = "0, 212, 170";
  const blue = "59, 130, 246";

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }
  }

  function drawBg() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${accent}, 0.15)`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.hypot(dx, dy);
        if (d < connectDist) {
          const alpha = (1 - d / connectDist) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${accent}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawBg);
  }

  function onResize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  }

  window.addEventListener("resize", onResize);
  initParticles();
  drawBg();

  // ========== 导航：固定时背景加深 + 移动端菜单 ==========
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");

  if (nav) {
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    });
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });

  // ========== 滚动进入视口：区块与卡片动画 ==========
  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".section").forEach(function (el) {
    sectionObserver.observe(el);
  });

  const cardObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".timeline-item, .award-card, .work-card").forEach(function (el) {
    cardObserver.observe(el);
  });

  // ========== 技能条：进入视口后按 data-width 填充 ==========
  const skillCards = document.querySelectorAll(".skill-card");
  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        const level = card.querySelector(".skill-level");
        if (!level) return;
        const w = level.getAttribute("data-width") || "0";
        card.style.setProperty("--skill-width", w + "%");
        card.classList.add("visible");
        skillObserver.unobserve(card);
      });
    },
    { threshold: 0.3 }
  );

  skillCards.forEach(function (card) {
    skillObserver.observe(card);
  });

  // ========== 鼠标跟随光晕（可选，在 hero 区域） ==========
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.addEventListener("mousemove", function (e) {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.background = "radial-gradient(circle at " + x + "% " + y + "%, rgba(0, 212, 170, 0.08) 0%, transparent 50%)";
    });
    hero.addEventListener("mouseleave", function () {
      hero.style.background = "";
    });
  }
})();
