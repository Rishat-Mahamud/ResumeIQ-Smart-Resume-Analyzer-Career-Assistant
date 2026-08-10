# ResumeIQ-Smart-Resume-Analyzer-Career-Assistant
Author - Rishat-096, Ibnul-582

ResumeIQ is a comprehensive web application designed to help job seekers, especially students and early-career professionals, optimize their resumes. It provides a smart analysis of resumes, offering scores, skill gap identification, and actionable feedback based on target career paths. The platform includes a user-friendly dashboard for job seekers and a powerful admin panel for platform management.

## Key Features

*   **Intelligent Resume Analysis:** Upload your resume (PDF, DOCX) and receive an instant score based on its structure, content, and keyword relevance.
*   **Career-Specific Skill Matching:** Select a target career (e.g., Backend Developer, Data Scientist) and see how your skills stack up against industry requirements.
*   **Detailed Reports:** Get a full report detailing your resume's strengths, weaknesses, and missing skills, along with actionable suggestions for improvement.
*   **Interactive User Dashboard:** A central hub to track your score history, manage resume versions, and view your progress over time with intuitive charts.
*   **Comprehensive Admin Panel:** A separate interface for administrators to manage users, curate the skills database, and define career tracks with their required skills.
*   **Secure User Management:** Full authentication flow including registration, login, and password recovery, along with profile and settings management.

## Application Pages

The application is split into a user-facing side and an admin panel, covering a wide range of functionalities.

### User Features
-   **Authentication:** `login.html`, `register.html`, `forgot-password.html`, `reset-password.html`
-   **Core Workflow:**
    -   `resume-upload.html`: Drag-and-drop or browse to upload your resume.
    -   `career-selection.html`: Choose a target career to benchmark against.
    -   `skill-match.html`: See a direct comparison of your skills versus the role's requirements.
    -   `resume-analysis.html`: View a detailed breakdown of your resume score, sections, and detected skills.
-   **Dashboard & History:**
    -   `my-resume.html`: Manage all uploaded resume versions.
    -   `analysis-history.html`: Review all past analysis reports.
    -   `report.html`: A clean, printable report of a specific analysis.
-   **Account Management:**
    -   `profile.html`: Update your personal details and professional links.
    -   `settings.html`: Manage application preferences.
    -   `notifications.html`: View a log of all account and analysis-related activities.

### Admin Features
-   `admin-dashboard.html`: An overview of platform statistics with charts for new signups and career demand.
-   `admin-manage-users.html`: View, search, and manage all registered users.
-   `admin-manage-skills.html`: Add, edit, and categorize skills used in the analysis engine.
-   `admin-manage-careers.html`: Define career tracks and map the necessary skills to them.

## Technology Stack

-   **Frontend:** HTML5, CSS3 (Flexbox, Grid), vanilla JavaScript
-   **Charts & Visualization:** [Chart.js](https://www.chartjs.org/)
-   **Icons:** [Feather Icons](https://feathericons.com/)

## Getting Started

This is a frontend-only project designed to showcase the user interface and client-side functionality. All data is static and for demonstration purposes.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rishat-mahamud/resumeiq-smart-resume-analyzer-career-assistant.git
    ```
2.  **Navigate to the directory:**
    ```sh
    cd resumeiq-smart-resume-analyzer-career-assistant
    ```
3.  **Open the application:**
    Open the `login.html` file in your web browser to start the demo. You can also directly navigate to `admin-dashboard.html` to view the admin panel.

## Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/static.yml`) that automatically deploys the static site to GitHub Pages on pushes to the `main` branch.
