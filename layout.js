/* =========================================================
   ResumeIQ — Shared app shell (sidebar + topbar)
   Every logged-in page injects this instead of duplicating
   the markup, so the nav only has to be edited in one place.
   ========================================================= */
 
const NAV_SECTIONS = [
  {
    label: "Workspace",
    links: [
      { key: "dashboard", href: "index.html", icon: "grid", text: "Dashboard" },
      { key: "profile", href: "profile.html", icon: "user", text: "Profile" },
    ],
  },
  {
    label: "Resume",
    links: [
      { key: "upload", href: "resume-upload.html", icon: "upload-cloud", text: "Upload Resume" },
      { key: "my-resume", href: "my-resume.html", icon: "file-text", text: "My Resume" },
      { key: "analysis", href: "resume-analysis.html", icon: "activity", text: "Resume Analysis" },
    ],
  },
  {
    label: "Career",
    links: [
      { key: "career", href: "career-selection.html", icon: "briefcase", text: "Career Selection" },
      { key: "skill-match", href: "skill-match.html", icon: "target", text: "Skill Match" },
    ],
  },
  {
    label: "Reports",
    links: [
      { key: "report", href: "report.html", icon: "file", text: "Report" },
      { key: "history", href: "analysis-history.html", icon: "clock", text: "Analysis History" },
    ],
  },
  {
    label: "Account",
    links: [
      { key: "notifications", href: "notifications.html", icon: "bell", text: "Notifications", badge: 3 },
      { key: "settings", href: "settings.html", icon: "settings", text: "Settings" },
    ],
  },
  {
    label: "Admin",
    adminOnly: true,
    links: [
      { key: "admin-dashboard", href: "admin-dashboard.html", icon: "shield", text: "Admin Dashboard" },
      { key: "manage-skills", href: "admin-manage-skills.html", icon: "tool", text: "Manage Skills" },
      { key: "manage-careers", href: "admin-manage-careers.html", icon: "layers", text: "Manage Careers" },
      { key: "manage-users", href: "admin-manage-users.html", icon: "users", text: "Manage Users" },
    ],
  },
];
 
/* ---------- Sidebar ---------- */
function renderSidebar(activeKey) {
  const sections = NAV_SECTIONS.map((section) => {
    const links = section.links
      .map((link) => `
        <a class="nav-link${link.key === activeKey ? " active" : ""}" href="${link.href}">
          <i data-feather="${link.icon}"></i><span>${link.text}</span>
          ${link.badge ? `<span class="nav-badge">${link.badge}</span>` : ""}
        </a>`)
      .join("");
    const labelClass = section.adminOnly ? "nav-label admin-label" : "nav-label";
    return `<p class="${labelClass}">${section.label}</p>${links}`;
  }).join("");
 
  return `
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        <span class="brand-mark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 3h9l5 5v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <path d="M14 3v5h5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <path d="M8 13.5 10.3 16 16 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <div class="brand-text">
          <strong>ResumeIQ</strong>
          <span>Career Assistant</span>
        </div>
      </div>
 
      <nav class="nav">${sections}</nav>
 
      <div class="sidebar-footer">
        <div class="profile-progress">
          <div class="profile-progress-head">
            <span>Profile Completion</span>
            <strong>80%</strong>
          </div>
          <div class="mini-bar"><div class="mini-bar-fill" style="width:80%"></div></div>
          <a href="profile.html" class="profile-progress-link">Add GitHub link to finish <i data-feather="arrow-right"></i></a>
        </div>
        <a class="nav-link logout" href="login.html">
          <i data-feather="log-out"></i><span>Logout</span>
        </a>
      </div>
    </aside>`;
}
 
/* ---------- Topbar ---------- */
function renderTopbar() {
  return `
    <header class="topbar">
      <button class="icon-btn burger" id="burgerBtn" aria-label="Toggle menu">
        <i data-feather="menu"></i>
      </button>
 
      <div class="search">
        <i data-feather="search"></i>
        <input type="text" placeholder="Search resume, skill, career, history…">
      </div>
 
      <div class="topbar-actions">
        <button class="icon-btn" aria-label="Notifications" onclick="location.href='notifications.html'">
          <i data-feather="bell"></i>
          <span class="dot"></span>
        </button>
        <button class="icon-btn" aria-label="Toggle dark mode" id="themeBtn">
          <i data-feather="moon"></i>
        </button>
        <div class="profile-chip-wrap">
          <button class="profile-chip" id="profileChipBtn" aria-haspopup="true" aria-expanded="false">
            <img src="https://i.pravatar.cc/64?img=13" alt="">
            <div class="profile-chip-text">
              <strong>Rafiq Hasan</strong>
              <span>Backend Developer track</span>
            </div>
            <i data-feather="chevron-down"></i>
          </button>
          <div class="profile-menu" id="profileMenu">
            <a href="profile.html"><i data-feather="user"></i> View Profile</a>
            <a href="settings.html"><i data-feather="settings"></i> Settings</a>
            <div class="profile-menu-divider"></div>
            <a href="login.html" class="danger"><i data-feather="log-out"></i> Logout</a>
          </div>
        </div>
      </div>
    </header>`;
}
 
/* ---------- Injects sidebar + topbar into the page ---------- */
function injectLayout() {
  const sidebarSlot = document.getElementById("sidebarSlot");
  const topbarSlot = document.getElementById("topbarSlot");
  const activeKey = document.body.dataset.page || "";
 
  if (sidebarSlot) sidebarSlot.outerHTML = renderSidebar(activeKey);
  if (topbarSlot) topbarSlot.outerHTML = renderTopbar();
}