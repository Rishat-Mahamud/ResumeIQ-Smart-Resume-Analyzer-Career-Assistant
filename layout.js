/* =========================================================
   ResumeIQ — Shared behaviour used on every page
   (Chart-specific code lives in js/script.js, dashboard only)
   ========================================================= */
 
document.addEventListener("DOMContentLoaded", () => {
  injectLayout();      // from js/layout.js — must run before feather.replace()
  feather.replace();
 
  initSidebarToggle();
  initProfileMenu();
  initToastTriggers();
});
 
/* ---------- Mobile sidebar toggle ---------- */
function initSidebarToggle() {
  const sidebar = document.getElementById("sidebar");
  const burger = document.getElementById("burgerBtn");
  if (!sidebar || !burger) return;
 
  burger.addEventListener("click", () => sidebar.classList.toggle("open"));
 
  document.addEventListener("click", (e) => {
    if (window.innerWidth > 860) return;
    if (!sidebar.contains(e.target) && !burger.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  });
}
 
/* ---------- Profile dropdown menu ---------- */
function initProfileMenu() {
  const btn = document.getElementById("profileChipBtn");
  const menu = document.getElementById("profileMenu");
  if (!btn || !menu) return;
 
  const closeMenu = () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };
 
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
 
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });
 
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}
 
/* ---------- Toast notifications ----------
   Any element with [data-toast-title] shows a toast on click.
   Optional: data-toast-icon, data-toast-message
--------------------------------------------- */
function showToast({ icon = "check-circle", title, message = "" }) {
  const stack = document.getElementById("toastStack");
  if (!stack) return;
 
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i data-feather="${icon}"></i>
    <div>
      <strong>${title}</strong>
      ${message ? `<p>${message}</p>` : ""}
    </div>
  `;
  stack.appendChild(toast);
  feather.replace();
 
  // Matches the CSS animation duration (fade in + hold + fade out)
  setTimeout(() => toast.remove(), 3600);
}
 
function initToastTriggers() {
  document.querySelectorAll("[data-toast-title]").forEach((el) => {
    el.addEventListener("click", (e) => {
      // Let real navigation / form submission happen where relevant;
      // this only fires the confirmation toast.
      showToast({
        icon: el.dataset.toastIcon || "check-circle",
        title: el.dataset.toastTitle,
        message: el.dataset.toastMessage || "",
      });
    });
  });
}
 
/* ---------- Simple client-side form validation helper ----------
   Usage: attach to a <form novalidate> and it will show inline
   error text under any [required] / [type=email] field that fails.
------------------------------------------------------------------- */
function initFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
 
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
 
    form.querySelectorAll("[required]").forEach((field) => {
      const errorEl = field.closest(".form-group")?.querySelector(".form-error");
      const value = field.value.trim();
      let fieldValid = value.length > 0;
 
      if (fieldValid && field.type === "email") {
        fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }
      if (fieldValid && field.dataset.matchField) {
        const other = form.querySelector(`[name="${field.dataset.matchField}"]`);
        fieldValid = other ? other.value === value : true;
      }
 
      field.classList.toggle("field-error", !fieldValid);
      if (errorEl) errorEl.style.display = fieldValid ? "none" : "block";
      if (!fieldValid) isValid = false;
    });
 
    if (isValid) {
      showToast({
        icon: "check-circle",
        title: form.dataset.successTitle || "Success",
        message: form.dataset.successMessage || "This demo form has no backend yet.",
      });
      form.reset();
    }
  });
}