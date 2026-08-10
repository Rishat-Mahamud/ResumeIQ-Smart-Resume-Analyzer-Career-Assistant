/* =========================================================
   ResumeIQ — Dashboard-only logic (charts + score ring)
   Sidebar/topbar/profile-menu/toast logic lives in js/app.js
   and is shared by every page.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  animateScoreRing();
  initCharts();
});

/* ---------- Animate the resume score ring ---------- */
function animateScoreRing() {
  const ring = document.querySelector(".ring-value");
  if (!ring) return;
  const score = parseInt(ring.dataset.score, 10) || 0;
  const circumference = 2 * Math.PI * 50; // r=50
  const offset = circumference - (score / 100) * circumference;
  requestAnimationFrame(() => {
    ring.style.strokeDashoffset = offset;
  });
}

/* ---------- Chart.js setup ---------- */
function initCharts() {
  const teal = "#0EA894";
  const indigo = "#4C5FD5";
  const amber = "#F0A020";
  const coral = "#E8563F";
  const gridColor = "#EEF0F6";
  const textColor = "#8891A3";

  Chart.defaults.font.family = "Inter, sans-serif";
  Chart.defaults.color = textColor;

  /* Resume Score History — line chart */
  const scoreCtx = document.getElementById("scoreHistoryChart");
  if (scoreCtx) {
    const gradient = scoreCtx.getContext("2d").createLinearGradient(0, 0, 0, 160);
    gradient.addColorStop(0, "rgba(14,168,148,0.22)");
    gradient.addColorStop(1, "rgba(14,168,148,0)");

    new Chart(scoreCtx, {
      type: "line",
      data: {
        labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Resume Score",
          data: [52, 58, 61, 69, 71, 78],
          borderColor: teal,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#fff",
          pointBorderColor: teal,
          pointBorderWidth: 2,
          borderWidth: 2.5,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { min: 40, max: 100, grid: { color: gridColor }, ticks: { stepSize: 20 } },
          x: { grid: { display: false } },
        },
      },
    });
  }

  /* Skill Categories — donut chart */
  const skillCtx = document.getElementById("skillCategoryChart");
  if (skillCtx) {
    new Chart(skillCtx, {
      type: "doughnut",
      data: {
        labels: ["Programming", "Database", "Framework", "Cloud", "Soft Skill", "Tools"],
        datasets: [{
          data: [8, 4, 5, 2, 3, 4],
          backgroundColor: [teal, indigo, amber, coral, "#8891A3", "#C9CEDC"],
          borderWidth: 3,
          borderColor: "#fff",
        }],
      },
      options: {
        responsive: true,
        cutout: "68%",
        plugins: {
          legend: {
            position: "bottom",
            labels: { boxWidth: 8, boxHeight: 8, usePointStyle: true, padding: 12, font: { size: 11 } },
          },
        },
      },
    });
  }

  /* Resume Upload History — bar chart */
  const uploadCtx = document.getElementById("uploadHistoryChart");
  if (uploadCtx) {
    new Chart(uploadCtx, {
      type: "bar",
      data: {
        labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Uploads",
          data: [1, 2, 1, 3, 2, 3],
          backgroundColor: indigo,
          borderRadius: 6,
          maxBarThickness: 26,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: gridColor }, ticks: { stepSize: 1 } },
          x: { grid: { display: false } },
        },
      },
    });
  }
}
