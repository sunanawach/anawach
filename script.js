const stanleyLogoUrl = "https://www.stanleycollege.edu.au/wp-content/themes/stanleycollege/assets/images/sc-logo.webp";
const nursingCoursePhotoUrl = "https://www.stanleycollege.edu.au/wp-content/uploads/2024/09/Depositphotos_30967789_XL-copy-1.jpg";

const sections = [
  { id: "home", label: "Home", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "contents", label: "Contents", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "team", label: "Our Team", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "brief", label: "Client Brief", speaker: "Rinzin Norbu", role: "Marketing Manager" },
  { id: "marketing", label: "Marketing Plan", speaker: "Rinzin Norbu", role: "Marketing Manager" },
  { id: "course", label: "Course Details", speaker: "Asmita", role: "Engagement Manager" },
  { id: "experience", label: "Visitor Experience", speaker: "Asmita", role: "Engagement Manager" },
  { id: "operations", label: "Venue & Operations", speaker: "Annu Devi", role: "Operations Manager" },
  { id: "budget", label: "Budget & Resources", speaker: "Anawach Lhakhiaw", role: "Finance Manager" },
  { id: "schedule", label: "Organization Schedule", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "challenges", label: "Challenges & Solutions", speaker: "All members", role: "Shared section" },
  { id: "conclusion", label: "Conclusion", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "questions", label: "Q&A", speaker: "All members", role: "Group response" }
];

const team = [
  ["Ugyen Dema", "Project Manager", "Leads the project, coordinates the team, controls the timeline, and presents the opening, schedule, and conclusion."],
  ["Anawach Lhakhiaw", "Finance Manager", "Prepares the budget, checks exhibitor pricing, manages resources, and plans contingency spending."],
  ["Rinzin Norbu", "Marketing Manager", "Explains the client brief, target audience, promotional message, and communication strategy."],
  ["Annu Devi", "Operations Manager", "Plans the venue, floor plan, booth layout, site flow, WHS, logistics, setup, and pack-down."],
  ["Asmita", "Engagement Manager", "Explains the course details, visitor experience, nursing demo activity, enquiry process, and follow-up."]
];

const researchLinks = [
  ["Careers Expo Official Website", "https://www.careers-expo.com.au/"],
  ["Exhibitor Info Pack", "https://www.careers-expo.com.au/exhibitors/infopack/"],
  ["Book Your Stand", "https://www.careers-expo.com.au/book-your-stand/"],
  ["Stanley College Diploma of Nursing", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["PCEC Pavilion 4 & 5 Capability", "https://thevendry.com/venue/193087/perth-convention-and-exhibition-centre-perth-australia/space/89368"]
];

const courseDetails = [
  ["Qualification", "HLT54121 Diploma of Nursing"],
  ["Career pathway", "Enrolled Nurse pathway"],
  ["Duration", "104 weeks, including 24 weeks of holidays"],
  ["Clinical placement", "14 weeks / 560 hours"],
  ["Delivery style", "Classroom learning, simulated nursing activities, and clinical placement"],
  ["Location", "Perth"]
];

const budget = [
  ["3m x 3m shell-scheme booth", "$3,000"],
  ["Booth styling and banners", "$600"],
  ["Printing and brochures", "$300"],
  ["AV, extra power or lighting", "$250"],
  ["Nursing demo materials", "$200"],
  ["Giveaways", "$350"],
  ["Contingency", "$400"]
];

const challenges = [
  ["Rinzin", "High competition from other booths", "Use strong nursing branding, visible signage, and an interactive booth activity."],
  ["Asmita", "Visitors may only stay for a short time", "Use a short 30-second pitch, simple demo, brochure, and QR enquiry form."],
  ["Annu", "Crowd congestion around the booth", "Use clear booth zones and open movement space for safe circulation."],
  ["Annu", "Safety risk during demonstrations", "Use low-risk props only, no sharps, cable control, and staff briefing."],
  ["Anawach", "Budget increases or extra costs", "Use contingency funds, compare suppliers, and avoid unnecessary hire items."],
  ["Ugyen", "Weak follow-up after the expo", "Collect enquiries through QR code and prepare a post-event follow-up plan."]
];

let activeId = "home";

const stage = document.querySelector("#stage");
const nav = document.querySelector("#mainNav");
const dots = document.querySelector("#dots");
const activeLabel = document.querySelector("#activeLabel");
const activeSpeaker = document.querySelector("#activeSpeaker");
const activeCount = document.querySelector("#activeCount");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const menuButton = document.querySelector("#menuButton");

const card = (content, extraClass = "") => `<div class="card ${extraClass}">${content}</div>`;
const speaker = (text) => `<div class="speaker-badge">${text}</div>`;
const pageTitle = (title, body = "", kicker = "") => `
  <div class="page-title">
    ${kicker ? `<p class="kicker">${kicker}</p>` : ""}
    <h1>${title}</h1>
    ${body ? `<p class="lead">${body}</p>` : ""}
  </div>
`;
const cleanList = (items) => `<ul class="clean">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
const pillList = (items) => `<div class="pills">${items.map((item) => `<span class="pill">${item}</span>`).join("")}</div>`;

function renderHome() {
  return `
    <div class="hero-grid">
      <div>
        <div class="logo-card"><img src="${stanleyLogoUrl}" alt="Stanley College logo"></div>
        <p class="kicker">HEM213 Event Operations Management</p>
        <h1>Stanley College Nursing Career Pathway Expo</h1>
        <p class="lead">Event proposal website for Stanley College's participation at Careers Expo 2026 at Perth Convention and Exhibition Centre.</p>
        ${pillList(["Careers Expo 2026", "14-17 May 2026", "PCEC Pavilion 4 & 5", "Diploma of Nursing"])}
        ${card(`
          <h2>Careers Expo Opening Times</h2>
          <div class="time-grid">
            <div class="time-box"><strong>Thursday 14 May</strong><br>9:00am - 3:00pm</div>
            <div class="time-box"><strong>Friday 15 May</strong><br>9:00am - 3:00pm</div>
            <div class="time-box"><strong>Saturday 16 May</strong><br>10:00am - 4:00pm</div>
            <div class="time-box"><strong>Sunday 17 May</strong><br>10:00am - 3:30pm</div>
          </div>
        `, "opening-times")}
      </div>
      ${card(`
        <img src="${nursingCoursePhotoUrl}" alt="Nursing course promotional photo">
        <div class="card-body">
          <h2>Presented by an Event Planning Team</h2>
          <p class="muted">We are acting as an event planning business proposing how Stanley College can promote its Diploma of Nursing at Careers Expo 2026.</p>
          <h3>Group Members</h3>
          <div class="team-list">${team.map(([name, role]) => `<div class="team-row"><span>${name}</span><span>${role}</span></div>`).join("")}</div>
        </div>
      `, "image-card")}
    </div>
  `;
}

function renderContents() {
  return `
    ${pageTitle("Contents", "Each tab is designed as one presentation page. The order follows the assessment requirements and keeps each person's speaking section clear.")}
    <div class="content-grid">
      ${sections.map((section, index) => `
        <button class="content-card" type="button" data-content-link="${section.id}">
          <span class="kicker">${index + 1}</span>
          <strong>${section.label}</strong>
          <span class="muted">Speaker: ${section.speaker}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderTeam() {
  return `
    ${speaker("Presented by Ugyen Dema - Project Manager")}
    ${pageTitle("Introduction of Our Group", "Our team represents an events planning business. Each role connects to a key function of the proposal: project management, finance, marketing, operations, and engagement.")}
    <div class="team-grid">
      ${team.map(([name, role, duty]) => card(`
        <div class="avatar">${name.split(" ").map((part) => part[0]).join("")}</div>
        <h2>${name}</h2>
        <p class="kicker">${role}</p>
        <p class="muted">${duty}</p>
      `)).join("")}
    </div>
  `;
}

function renderBrief() {
  return `
    <div class="two-col">
      <div>
        ${speaker("Presented by Rinzin Norbu - Marketing Manager")}
        ${pageTitle("Summary of the Event Brief", "Stanley College wants to participate at Careers Expo 2026 to increase brand awareness, build trust through face-to-face interaction, generate student enquiries, and showcase study pathways.")}
        <p class="lead">Our event proposal focuses on the HLT54121 Diploma of Nursing. The booth will present nursing as a meaningful healthcare career pathway and encourage visitors to make an enquiry or speak with a course adviser.</p>
      </div>
      <div class="mini-grid" style="grid-template-columns: 1fr;">
        ${card("<h2>Client</h2><p class='muted'>Stanley College</p>")}
        ${card("<h2>Event</h2><p class='muted'>Careers Expo 2026 at Perth Convention and Exhibition Centre</p>")}
        ${card(`<h2>Purpose</h2>${cleanList(["Promote nursing as a career pathway", "Increase course enquiries and future enrolments", "Create an engaging and professional booth experience"])}`)}
      </div>
    </div>
  `;
}

function renderMarketing() {
  return `
    ${speaker("Presented by Rinzin Norbu - Marketing Manager")}
    ${pageTitle("Marketing Plan and Target Audience", "This page explains how we will attract the right visitors to the booth and communicate Stanley College's nursing message clearly.")}
    <div class="two-col">
      ${card(`<h2>Target Audience</h2>${cleanList(["High school students exploring career pathways", "Parents helping students compare study options", "Job seekers interested in healthcare careers", "Career changers wanting meaningful work", "Visitors interested in nursing, care, and health services"])}`)}
      ${card(`<h2>5 C's: Marketing Focus</h2>${cleanList(["<strong>Concept:</strong> Nursing Career Pathway Expo", "<strong>Customer:</strong> future healthcare students", "<strong>Content:</strong> course info, demos, brochures, QR enquiry", "<strong>Communication:</strong> staff, signage, website links, follow-up", "<strong>Cost:</strong> marketing materials and booth promotion within budget"])}`)}
    </div>
    <div class="mini-grid">
      ${card("<h3>Main Message</h3><p class='muted'>Nursing is a career with purpose, and Stanley College can help students start that journey.</p>")}
      ${card("<h3>Promotion Tools</h3><p class='muted'>Brochures, QR code, banners, course image, social media, and staff conversation.</p>")}
      ${card("<h3>Lead Generation</h3><p class='muted'>Visitors scan the QR code, leave enquiry details, and receive follow-up after the expo.</p>")}
    </div>
  `;
}

function renderCourse() {
  return `
    <div class="two-col">
      <div>
        ${speaker("Presented by Asmita - Engagement Manager")}
        ${pageTitle("HLT54121 Diploma of Nursing", "The Diploma of Nursing is suitable for the expo because it gives visitors a clear healthcare career pathway and helps Stanley College connect with people interested in practical and meaningful work.", "Product / Service Detail")}
        ${pillList(["Healthcare Career", "Practical Learning", "Clinical Placement", "Enrolled Nurse Pathway"])}
        <p><a class="link-button" href="https://www.stanleycollege.edu.au/courses/diploma-of-nursing/" target="_blank" rel="noreferrer">View Official Course Page</a></p>
      </div>
      ${card(`<img src="${nursingCoursePhotoUrl}" alt="Diploma of Nursing course image"><div class="card-body"><h2>Why promote this course?</h2><p class="muted">Nursing is easy for visitors to understand as a career, and the booth can make the course feel real through conversation, practical demonstration, and clear study pathway information.</p></div>`, "image-card")}
    </div>
    <div class="course-grid">
      ${courseDetails.map(([title, value]) => card(`<p class="kicker">${title}</p><h2>${value}</h2>`)).join("")}
    </div>
  `;
}

function renderExperience() {
  const fiveEs = [
    ["Entice", "Healthcare theme, Stanley College branding, and clear nursing message."],
    ["Enter", "Open booth front with friendly welcome and easy access."],
    ["Engage", "Simple activity such as hand-hygiene or bandaging demo."],
    ["Exit", "Visitor receives brochure and scans QR enquiry form."],
    ["Extend", "Follow-up email, phone call, or course consultation after expo."]
  ];
  return `
    ${speaker("Presented by Asmita - Engagement Manager")}
    ${pageTitle("Visitor Experience Using the 5 E's", "The visitor journey is designed to move people from first attention to enquiry. This makes the booth more memorable and supports lead generation.")}
    <div class="five-grid">${fiveEs.map(([title, detail]) => card(`<h2>${title}</h2><p class="muted">${detail}</p>`)).join("")}</div>
    ${card("<h2>Visitor Journey</h2><p class='muted'>See booth -> speak with team -> try nursing demo -> learn course details -> scan QR code -> receive follow-up.</p>", "journey")}
  `;
}

function renderOperations() {
  return `
    ${speaker("Presented by Annu Devi - Operations Manager")}
    ${pageTitle("Venue, Floor Plan and Operations", "Operations planning ensures the booth is safe, accessible, practical, and easy for visitors to move through.")}
    <div class="two-col">
      ${card(`
        <h2>Venue Decision</h2>
        <p class="muted">The selected venue is Perth Convention and Exhibition Centre. Careers Expo 2026 is planned for Pavilion 4 & 5, which provides a large exhibition environment suitable for booths and high visitor traffic.</p>
        <div class="venue-metrics">
          <div class="time-box"><strong>Space</strong><br>Large booth area</div>
          <div class="time-box"><strong>ICE</strong><br>Ingress, circulation, egress</div>
          <div class="time-box"><strong>Atmosphere</strong><br>Professional and visible</div>
        </div>
      `)}
      ${card(`
        <h2>Booth Layout</h2>
        <div class="layout-box">
          <div class="zone-grid">
            <div class="zone">Welcome Zone</div>
            <div class="zone">Nursing Demo Zone</div>
            <div class="zone">Course Info Zone</div>
            <div class="zone">QR Sign-up Zone</div>
          </div>
        </div>
      `)}
    </div>
    <div class="mini-grid">
      ${card("<h3>WHS</h3><p class='muted'>No sharps, safe cable management, clear walkways, first aid awareness, and staff briefing.</p>")}
      ${card("<h3>Setup</h3><p class='muted'>Confirm booth materials, display items, QR signs, demo props, power and lighting before event day.</p>")}
      ${card("<h3>Pack-down</h3><p class='muted'>Remove all materials safely and check that the booth area is clean and clear.</p>")}
    </div>
  `;
}

function renderBudget() {
  return `
    <div class="two-col">
      <div>
        ${speaker("Presented by Anawach Lhakhiaw - Finance Manager")}
        ${pageTitle("Budget and Resources", "The budget is planned around the official booth cost plus practical resources needed for booth presentation, promotion, visitor engagement, and contingency.")}
        ${card(`
          <h2>Estimated Budget</h2>
          <div class="budget-table">
            ${budget.map(([item, amount]) => `<div class="budget-row"><span>${item}</span><strong>${amount}</strong></div>`).join("")}
            <div class="budget-row total"><span>Total Estimated Budget</span><strong>$5,100</strong></div>
          </div>
        `)}
      </div>
      <div class="mini-grid" style="grid-template-columns: 1fr;">
        ${card("<h2>Fixed Cost</h2><p class='muted'>Booth package is the largest fixed cost.</p>")}
        ${card("<h2>Promotional Cost</h2><p class='muted'>Brochures, signage, banners, and giveaways support brand awareness.</p>")}
        ${card("<h2>Operational Cost</h2><p class='muted'>AV, power, lighting, and demo materials support booth delivery.</p>")}
        ${card("<h2>Contingency</h2><p class='muted'>Extra allowance protects the plan from unexpected costs.</p>")}
      </div>
    </div>
  `;
}

function renderSchedule() {
  const schedule = [
    ["Week 1-2", "Confirm concept, course, venue evidence, and team roles."],
    ["Week 3", "Prepare marketing content, booth design, and visitor message."],
    ["Week 4", "Confirm budget, resources, demo materials, and QR enquiry process."],
    ["Week 5", "Finalize website presentation, WHS, speaking roles, and rehearsal."],
    ["Event Week", "Set up booth, engage visitors, collect enquiries, and follow up."]
  ];
  return `
    ${speaker("Presented by Ugyen Dema - Project Manager")}
    ${pageTitle("Organization Schedule", "The organization schedule keeps each team member accountable and ensures the proposal can be delivered within the required timeframe.")}
    <div class="schedule-grid">${schedule.map(([week, task]) => card(`<h2>${week}</h2><p class="muted">${task}</p>`)).join("")}</div>
    ${card("<h2>Management Approach</h2><p class='muted'>Ugyen monitors the whole process, checks that each department completes its work, and ensures the final proposal is aligned with the client's goals.</p>", "journey")}
  `;
}

function renderChallenges() {
  return `
    ${speaker("Presented by all members - each person explains one challenge linked to their role")}
    ${pageTitle("Challenges and Solutions", "This section shows that the proposal considers real event risks and includes practical responses.")}
    <div class="challenge-grid">
      ${challenges.map(([name, challenge, solution]) => card(`
        <p class="kicker">${name}</p>
        <h2>${challenge}</h2>
        <p class="solution-label">Solution</p>
        <p class="muted">${solution}</p>
      `)).join("")}
    </div>
  `;
}

function renderConclusion() {
  return `
    <div class="two-col">
      <div>
        ${speaker("Presented by Ugyen Dema - Project Manager")}
        ${pageTitle("Conclusion", "This proposal creates a clear and practical plan for Stanley College's participation at Careers Expo 2026.")}
        <p class="lead">The nursing pathway expo aligns with the client's goal to increase brand awareness, build trust through face-to-face engagement, generate student enquiries, and showcase course pathways. The concept is realistic because it uses a professional expo venue, clear team responsibilities, a focused budget, practical resources, and a booth layout designed for visitor flow and engagement.</p>
      </div>
      ${card("<p class='kicker'>Final Message</p><h2>Nursing is more than a course. It is a career with purpose.</h2><p class='muted'>Our booth helps visitors explore that pathway through information, interaction, and connection.</p>", "final-card")}
    </div>
  `;
}

function renderQuestions() {
  return `
    <div class="questions">
      <p class="kicker">Thank you</p>
      <h1>Any Questions?</h1>
      <p class="lead">We welcome feedback from the client and lecturer to refine the final event proposal.</p>
      <div class="resource-links">
        ${researchLinks.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
      </div>
    </div>
  `;
}

const renderers = {
  home: renderHome,
  contents: renderContents,
  team: renderTeam,
  brief: renderBrief,
  marketing: renderMarketing,
  course: renderCourse,
  experience: renderExperience,
  operations: renderOperations,
  budget: renderBudget,
  schedule: renderSchedule,
  challenges: renderChallenges,
  conclusion: renderConclusion,
  questions: renderQuestions
};

function setActive(id, shouldScroll = true) {
  activeId = id;
  const activeIndex = sections.findIndex((section) => section.id === activeId);
  const activeSection = sections[activeIndex];

  stage.innerHTML = renderers[activeId]();
  activeLabel.textContent = activeSection.label;
  activeSpeaker.textContent = `Presenter: ${activeSection.speaker} - ${activeSection.role}`;
  activeCount.textContent = `${activeIndex + 1} / ${sections.length}`;

  [...nav.children].forEach((button) => button.classList.toggle("active", button.dataset.tab === activeId));
  [...dots.children].forEach((button) => button.classList.toggle("active", button.dataset.tab === activeId));

  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === sections.length - 1;

  document.querySelectorAll("[data-content-link]").forEach((button) => {
    button.addEventListener("click", () => setActive(button.dataset.contentLink));
  });

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function buildNavigation() {
  nav.innerHTML = sections.map((section) => `<button type="button" data-tab="${section.id}">${section.label}</button>`).join("");
  dots.innerHTML = sections.map((section) => `<button class="dot" type="button" data-tab="${section.id}" aria-label="${section.label}"></button>`).join("");

  [...nav.children, ...dots.children].forEach((button) => {
    button.addEventListener("click", () => {
      setActive(button.dataset.tab);
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

prevButton.addEventListener("click", () => {
  const index = sections.findIndex((section) => section.id === activeId);
  if (index > 0) setActive(sections[index - 1].id);
});

nextButton.addEventListener("click", () => {
  const index = sections.findIndex((section) => section.id === activeId);
  if (index < sections.length - 1) setActive(sections[index + 1].id);
});

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") prevButton.click();
  if (event.key === "ArrowRight") nextButton.click();
});

buildNavigation();
setActive("home", false);
