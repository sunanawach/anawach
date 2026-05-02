
const state = {
  activeId: "home",
  questionInput: ""
};

const sections = [
  { id: "home", label: "Home", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "contents", label: "Contents", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "team", label: "Our Team", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "brief", label: "Client Brief", speaker: "Rinzin Norbu", role: "Marketing Manager" },
  { id: "marketing", label: "Marketing Plan", speaker: "Rinzin Norbu", role: "Marketing Manager" },
  { id: "course", label: "Course Details", speaker: "Asmita Rana", role: "Engagement Manager" },
  { id: "experience", label: "Visitor Experience", speaker: "Asmita Rana", role: "Engagement Manager" },
  { id: "operations", label: "Venue & Operations", speaker: "Annu Devi", role: "Operations Manager" },
  { id: "budget", label: "Budget & Resources", speaker: "Anawach Lhakhiaw", role: "Finance Manager" },
  { id: "schedule", label: "Organization Schedule", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "challenges", label: "Challenges & Solutions", speaker: "All members", role: "Shared section" },
  { id: "conclusion", label: "Conclusion", speaker: "Ugyen Dema", role: "Project Manager" },
  { id: "questions", label: "Q&A", speaker: "All members", role: "Group response" }
];

const stanleyLogoUrl = "https://www.stanleycollege.edu.au/wp-content/themes/stanleycollege/assets/images/sc-logo.webp";
const nursingCoursePhotoUrl = "https://www.stanleycollege.edu.au/wp-content/uploads/2024/09/Depositphotos_30967789_XL-copy-1.jpg";
const nursingEnquiryQrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fwww.stanleycollege.edu.au%2Fcourses%2Fdiploma-of-nursing%2F%23enqueryform";
const pcecVirtualTourUrl = "https://link.wellstrategic.com.au/PCEC-Accessible-Virtual-Tour";
const boothMockupUrl = "./assets/nursing_diploma_booth_at_expo.png";
const boothMockupFallbackUrl = "./nursing_diploma_booth_at_expo.png";

const team = [
  ["Ugyen Dema", "Project Manager", "Coordinates the project, timeline, presentation flow and final alignment with the client brief."],
  ["Anawach Lhakhiaw", "Finance Manager", "Prepares the budget, cost control strategy, resources and contingency planning."],
  ["Rinzin Norbu", "Marketing Manager", "Explains the client brief, target audience, core message and promotional strategy."],
  ["Annu Devi", "Operations Manager", "Plans the venue, booth layout, visitor flow, WHS, setup, delivery and pack-down."],
  ["Asmita Rana", "Engagement Manager", "Explains the course details, visitor experience, nursing activity, QR enquiry and follow-up."]
];

const courseDetails = [
  ["Qualification", "HLT54121 Diploma of Nursing", "A nationally recognised qualification promoted as a pathway into enrolled nursing."],
  ["Career pathway", "Enrolled Nurse pathway", "Graduates are prepared to provide care under the supervision of Registered Nurses and healthcare professionals."],
  ["Duration", "104 weeks", "Includes 24 weeks of holidays, giving students a structured long-term study pathway."],
  ["Clinical placement", "14 weeks / 560 hours", "Students complete full-time clinical placement to connect learning with real healthcare practice."],
  ["Delivery style", "Classroom + simulation + placement", "The course combines classroom learning, simulated nursing activities and clinical placement."],
  ["Location", "Perth", "This matches the Perth-based audience attending Careers Expo 2026."]
];

const budgetItems = [
  ["3m x 3m shell-scheme booth", "$3,000", "Core space", "Main exhibition presence for the Diploma of Nursing promotion."],
  ["Counter / welcome desk", "$380", "Welcome point", "Creates a professional greeting and enquiry collection area."],
  ["Small demo table and 2 chairs/stools", "$250", "Practical setup", "Supports short conversations, brochures and low-risk nursing activity."],
  ["Brochure stand / display holder", "$150", "Information display", "Keeps course information visible without cluttering the booth."],
  ["Booth signage and pull-up banner", "$650", "Visibility", "Helps visitors understand the booth message quickly."],
  ["Printing and QR signage", "$400", "Course information", "Supports brochures, flyers, course facts and enquiry QR code."],
  ["Tablet / AV support", "$350", "Digital display", "Shows course images, website information or nursing simulation visuals."],
  ["Nursing demo materials", "$200", "Engagement", "Supports safe activities such as hand hygiene, basic bandaging or mini quiz."],
  ["Branded giveaways", "$350", "Brand recall", "Small items used only to support genuine engagement, not random traffic."],
  ["Staff refreshments and logistics", "$250", "Staff support", "Supports consistency and energy across the expo period."],
  ["Contingency", "$570", "Risk control", "Covers unexpected printing, replacement signage, equipment or small hire changes."]
];

const faqItems = [
  ["Course", "What is the Diploma of Nursing?", "The HLT54121 Diploma of Nursing is a nationally recognised course that prepares students for a pathway into enrolled nursing and healthcare support roles.", "Official course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Course", "Who is this course suitable for?", "This course is suitable for people interested in healthcare, including school leavers, job seekers, career changers and those looking for a practical study pathway.", "Official course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Course", "How long does the course take?", "The course duration is 104 weeks, including 24 weeks of holidays, and includes classroom learning, simulation and clinical placement.", "Course details", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Course", "Does the course include practical training?", "Yes. The course includes simulated nursing activities and 14 weeks or 560 hours of clinical placement to support practical learning.", "Course placement information", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Course", "How can I make an enquiry?", "Visitors can scan the QR code at the booth or visit the official Stanley College course page online to submit an enquiry.", "Make an enquiry", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/#enqueryform"],
  ["Booth Experience", "What can I do at the Stanley College booth?", "Visitors can explore course information, speak with the team, take part in a simple nursing-related activity and scan the QR code to make an enquiry.", "Diploma of Nursing", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Booth Experience", "What activities will be available?", "The booth can include low-risk activities such as hand hygiene demonstration, basic bandaging or a short nursing career quiz to make the experience more memorable.", "Diploma of Nursing", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Booth Experience", "Is the booth activity safe?", "Yes. The booth activity is designed to be low-risk, simple and safe, with no sharps or hazardous materials used.", "Venue information", pcecVirtualTourUrl],
  ["Booth Experience", "Why is the booth interactive?", "The booth is interactive because visitors remember experiences better than passive information. A simple activity also helps staff start natural course conversations.", "Course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Event Location", "Where is the Careers Expo held?", "The Careers Expo is held at the Perth Convention and Exhibition Centre in Pavilion 4 and 5.", "PCEC virtual tour", pcecVirtualTourUrl],
  ["Event Location", "When is Careers Expo 2026?", "Careers Expo 2026 runs from Thursday 14 May to Sunday 17 May 2026.", "Careers Expo website", "https://www.careers-expo.com.au/"],
  ["Event Location", "Why is PCEC suitable for this event?", "PCEC is suitable because it is a professional exhibition venue with visitor flow, accessibility and event infrastructure for a large public careers event.", "PCEC virtual tour", pcecVirtualTourUrl],
  ["Student Support", "Why should I choose Stanley College?", "Stanley College offers a clear nursing pathway, supportive learning, practical experience and a professional environment for students exploring healthcare careers.", "Stanley College course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Student Support", "What happens after I submit an enquiry?", "After an enquiry is submitted, the Stanley College team can follow up with more information about the course, entry details and next steps.", "Make an enquiry", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/#enqueryform"],
  ["Student Support", "Can I ask questions at the booth?", "Yes. Visitors can ask about the course pathway, study structure, placement, entry process and how to take the next step.", "Official course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"]
];

const faqTopics = ["Course", "Booth Experience", "Event Location", "Student Support"];

function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function pageTitle(title, body = "", kicker = "") {
  return `
    <div class="page-title">
      ${kicker ? `<p class="kicker">${esc(kicker)}</p>` : ""}
      <h1>${title}</h1>
      ${body ? `<p>${body}</p>` : ""}
    </div>
  `;
}

function card(content, extra = "") {
  return `<div class="card ${extra}">${content}</div>`;
}

function imgWithFallback(src, alt, className = "card-image") {
  return `<img src="${src}" alt="${esc(alt)}" class="${className}" onerror="if(this.dataset.fallback !== '1'){this.dataset.fallback='1';this.src='${boothMockupFallbackUrl}';}" />`;
}

function renderHome() {
  return `
    <div class="home-layout">
      <div>
        <div class="logo-card"><img src="${stanleyLogoUrl}" alt="Stanley College logo"></div>
        <p class="kicker">HEM213 Event Operations Management</p>
        <h1 class="hero-title">Stanley College Nursing Career Pathway Expo</h1>
        <p class="hero-copy">Imagine a visitor walking through Careers Expo with many booths, brochures and choices. Our proposal helps Stanley College make that visitor stop, feel curious, understand the nursing pathway and take the next step.</p>
        <div class="pills mt-8">
          <span class="pill">Careers Expo 2026</span>
          <span class="pill">14-17 May 2026</span>
          <span class="pill">PCEC Pavilion 4 & 5</span>
          <span class="pill">Promoting Diploma of Nursing</span>
        </div>
        ${card(`<h2>Proposal Purpose</h2><p>Our proposal helps Stanley College increase brand awareness, build trust through face-to-face engagement, promote the HLT54121 Diploma of Nursing and generate future student enquiries.</p>`, "gradient mt-8")}
        <div class="card mt-6">
          <h2>Careers Expo Opening Times</h2>
          <div class="time-grid mt-4">
            <div class="soft-box"><strong>Thursday 14 May</strong><br>9:00am - 3:00pm</div>
            <div class="soft-box"><strong>Friday 15 May</strong><br>9:00am - 3:00pm</div>
            <div class="soft-box emerald"><strong>Saturday 16 May</strong><br>10:00am - 4:00pm</div>
            <div class="soft-box emerald"><strong>Sunday 17 May</strong><br>10:00am - 3:30pm</div>
          </div>
        </div>
      </div>
      <div class="card no-pad">
        <img src="${nursingCoursePhotoUrl}" alt="Nursing course promotional" class="card-image">
        <div class="card-body">
          <p class="tag">Event Planning Business Proposal</p>
          <h2>Presented to Stanley College</h2>
          <p>We are proposing an interactive nursing promotion booth that turns a standard expo stand into a clear visitor journey: attract, engage, inform, collect enquiries and follow up.</p>
          <h3 class="mt-6">Group Members</h3>
          ${team.map(([name, role]) => `<div class="member-row"><span><strong>${esc(name)}</strong></span><span class="member-role">${esc(role)}</span></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderContents() {
  return `
    ${pageTitle("Contents", "Each tab is designed as one presentation page. The order follows the assessment requirements and keeps each section clear.")}
    <div class="grid grid-4">
      ${sections.map((section, index) => `
        <button class="card contents-card" onclick="setActive('${section.id}')">
          <p class="tag">${index + 1}</p>
          <h3>${esc(section.label)}</h3>
        </button>
      `).join("")}
    </div>
  `;
}

function renderTeam() {
  return `
    ${pageTitle("Introduction of Our Group", "Our team represents an event planning business. Each role connects to a key function of the proposal: project management, finance, marketing, operations and engagement.")}
    <div class="grid grid-5">
      ${team.map(([name, role, duty]) => `
        <div class="card">
          <div class="initials">${name.split(" ").map(p => p[0]).join("")}</div>
          <h3 class="mt-4">${esc(name)}</h3>
          <p><strong style="color:var(--blue-700)">${esc(role)}</strong></p>
          <p>${esc(duty)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderBrief() {
  return `
    ${pageTitle("Summary of the Event Brief", "Stanley College requires an event proposal for its participation at Careers Expo 2026. Our role is to design a professional, engaging and realistic expo booth that promotes Stanley College and generates student enquiries.")}
    <div class="grid grid-2">
      ${card(`<h2>Client Goals</h2><p>The client wants to increase brand awareness, build trust through face-to-face interaction, generate enrolment leads and showcase Stanley College's education pathways.</p>`, "gradient")}
      ${card(`<h2>Event Context</h2><ul><li><strong>Event:</strong> Careers Expo 2026</li><li><strong>Venue:</strong> Perth Convention and Exhibition Centre</li><li><strong>Location:</strong> Pavilion 4 & 5</li><li><strong>Dates:</strong> 14-17 May 2026</li></ul>`)}
    </div>
    <div class="grid grid-3 mt-6">
      ${card(`<p class="tag">Product / Service</p><h3>HLT54121 Diploma of Nursing</h3><p>The main course promoted at the booth and a clear study pathway for healthcare career interest.</p>`)}
      ${card(`<p class="tag">Target Audience</p><h3>Future Students</h3><p>School students, parents, job seekers, career changers and people interested in healthcare careers.</p>`)}
      ${card(`<p class="tag">Event Purpose</p><h3>Attract, Inform, Convert</h3><p>Attract visitors, inform them about the course and encourage them to submit an enquiry for follow-up.</p>`)}
    </div>
    ${card(`
      <p class="tag">Event Plan Framework: 5 W's</p>
      <h2>Clarifying the event foundation</h2>
      <div class="grid grid-5 mt-5">
        <div class="soft-box"><strong>Who</strong><br>Stanley College, future students, parents, job seekers and career changers.</div>
        <div class="soft-box emerald"><strong>What</strong><br>A nursing career pathway booth promoting HLT54121 Diploma of Nursing.</div>
        <div class="soft-box cyan"><strong>When</strong><br>Careers Expo 2026, 14-17 May 2026.</div>
        <div class="soft-box amber"><strong>Where</strong><br>Perth Convention and Exhibition Centre, Pavilion 4 & 5.</div>
        <div class="soft-box slate"><strong>Why</strong><br>Build awareness, create trust, collect enquiries and support future enrolments.</div>
      </div>
      <p class="mt-5">The 5 W's make the event purpose clear before detailed planning begins. This ensures the booth is not only visually attractive, but also connected to Stanley College's enrolment and brand awareness goals.</p>
    `, "mt-6")}
  `;
}

function renderMarketing() {
  return `
    ${pageTitle("Marketing Plan and Target Audience", "The marketing plan focuses on attracting the right visitors, communicating the value of the Diploma of Nursing and turning booth conversations into real course enquiries.")}
    <div class="grid grid-2">
      ${card(`<h2>Marketing Objective</h2><p>Position Stanley College as a clear, supportive and career-focused study option for visitors interested in healthcare. The booth helps people see not only a course, but a practical pathway into nursing.</p>`, "gradient")}
      ${card(`<h2>Core Message</h2><p style="font-size:26px;font-weight:800;color:var(--blue-700)">Start your nursing journey with Stanley College.</p><p>This message is simple, emotional and career-focused.</p>`)}
    </div>
    <div class="grid grid-4 mt-6">
      ${[
        ["School Students", "Need simple course information and confidence about future options."],
        ["Parents", "Need trust, course credibility, cost, duration and career outcome information."],
        ["Job Seekers", "Need a practical pathway into healthcare and clear enquiry steps."],
        ["Career Changers", "Need reassurance that nursing can be a meaningful new direction."]
      ].map(([title, text], i) => card(`<p class="tag">Segment ${i+1}</p><h3>${title}</h3><p>${text}</p>`)).join("")}
    </div>
    <div class="grid grid-2 mt-6">
      ${card(`<h2>5 C's: Marketing Strategy</h2><ul><li><strong>Concept:</strong> interactive nursing career pathway booth</li><li><strong>Customer:</strong> future students, parents, job seekers and career changers</li><li><strong>Content:</strong> course facts, nursing demo, brochures, QR enquiry and student support information</li><li><strong>Communication:</strong> staff conversation, signage, simple pitch, website links and follow-up</li><li><strong>Cost:</strong> marketing materials are planned within the booth budget</li></ul>`)}
      ${card(`<h2>Promotion Tools</h2><div class="grid grid-2 mt-4"><div class="soft-box"><strong>Before Expo</strong><br>Social media post and student email</div><div class="soft-box emerald"><strong>At Expo</strong><br>Banners, brochures, QR code and staff pitch</div><div class="soft-box cyan"><strong>Engagement</strong><br>Nursing demo, quiz, giveaway and conversation</div><div class="soft-box amber"><strong>After Expo</strong><br>Follow-up email, phone call and consultation invitation</div></div>`)}
    </div>
  `;
}

function renderCourse() {
  return `
    ${pageTitle("HLT54121 Diploma of Nursing", "The Diploma of Nursing is a strong product for the event because it gives visitors a clear, practical and meaningful healthcare career pathway.", "Product / Service Detail")}
    <div class="grid grid-2">
      <div>
        <div class="pills"><span class="pill">Nationally Recognised</span><span class="pill">Enrolled Nurse Pathway</span><span class="pill">Simulated Nursing Activities</span><span class="pill">Clinical Work Placement</span></div>
        <a class="link-btn primary mt-6" href="https://www.stanleycollege.edu.au/courses/diploma-of-nursing/" target="_blank" rel="noreferrer">View Official Course Page</a>
      </div>
      <div class="card no-pad">
        <img src="${nursingCoursePhotoUrl}" alt="Diploma of Nursing course" class="card-image">
        <div class="card-body"><h2>A clear pathway into healthcare</h2><p>The booth can make the course feel personal through course facts, practical demonstration, staff conversation and enquiry support.</p></div>
      </div>
    </div>
    <div class="grid grid-3 mt-8">
      ${courseDetails.map(([title, value, detail]) => card(`<p class="tag">${title}</p><h3>${value}</h3><p>${detail}</p>`)).join("")}
    </div>
  `;
}

function renderExperience() {
  return `
    ${pageTitle("Visitor Experience Using the 5 E's", "The visitor journey is designed to move people from first attention to enquiry. This makes the booth more memorable and supports lead generation for the Diploma of Nursing.")}
    <div class="grid grid-5">
      ${[
        ["Entice", "Healthcare theme, Stanley College branding, clear nursing message and friendly booth visuals."],
        ["Enter", "Open booth front with a welcoming layout so visitors feel comfortable walking in."],
        ["Engage", "Simple activity such as hand hygiene, basic bandaging or a short nursing career quiz."],
        ["Exit", "Visitors receive course information and are guided to scan the QR enquiry form."],
        ["Extend", "Follow-up email, phone call or course consultation after the expo."]
      ].map(([title, detail]) => card(`<h3 style="color:var(--blue-700)">${title}</h3><p>${detail}</p>`)).join("")}
    </div>
    ${card(`<h2>Visitor Journey</h2><p>See booth - speak with team - try nursing demo - learn course details - scan QR code - receive follow-up.</p>`, "gradient mt-6")}
    <div class="grid grid-2 mt-8">
      ${card(`<h2>Nursing Simulation Lab Video</h2><p>This video helps visitors understand the practical learning environment and makes the booth experience feel more real and engaging.</p><div class="video-box"><div class="aspect-video"><iframe src="https://www.youtube.com/embed/iV-6WlXRNkw" title="Stanley College Nursing Simulation Lab" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div>`)}
      ${card(`<h2>Why this improves the experience</h2><ul><li>Shows a real learning environment, not only printed information.</li><li>Makes the booth more interactive and visually engaging.</li><li>Helps visitors imagine what studying nursing at Stanley College looks like.</li><li>Supports trust and credibility through real course visuals.</li></ul>`)}
    </div>
    ${card(`<div class="qr-wrap"><div><p class="tag">Enquiry Call-to-Action</p><h2>Scan to enquire about Diploma of Nursing</h2><p>This QR code gives visitors a quick next step after they speak with the team.</p></div><div class="qr-card"><img src="${nursingEnquiryQrUrl}" alt="QR code for Stanley College Diploma of Nursing enquiry form"></div></div>`, "gradient mt-6")}
  `;
}

function renderOperations() {
  return `
    ${pageTitle("Venue, Operations and WHS Plan", "This page explains why Perth Convention and Exhibition Centre is suitable and how the booth will operate safely, smoothly and professionally during Careers Expo 2026.")}
    <div class="grid grid-2">
      ${card(`<p class="tag">Venue Decision</p><h2>Perth Convention and Exhibition Centre</h2><p>PCEC is suitable because it is a professional exhibition space in Perth CBD with visitor flow, accessible facilities, event infrastructure and an appropriate environment for education and career promotion.</p><a class="link-btn primary mt-4" href="${pcecVirtualTourUrl}" target="_blank" rel="noreferrer">View PCEC Virtual Tour</a>`, "gradient")}
      ${card(`<p class="tag">Site Planning Focus</p><h2>Space, Movement and Accessibility</h2><p>The virtual tour helps the client understand the venue environment, visitor routes, accessibility features and exhibition-style atmosphere.</p><div class="grid grid-3 mt-5"><div class="soft-box"><strong>Ingress</strong><br>Clear entry</div><div class="soft-box emerald"><strong>Circulation</strong><br>Open movement</div><div class="soft-box amber"><strong>Egress</strong><br>Safe exit</div></div>`)}
    </div>
    <div class="grid grid-2 mt-8">
      <div class="card no-pad">
        ${imgWithFallback(boothMockupUrl, "Simulation of the Stanley College Diploma of Nursing booth in the exhibition venue")}
        <div class="card-body">
          <h2>Booth Simulation in Venue</h2>
          <p>This simulation shows how the Stanley College Diploma of Nursing booth may look in the exhibition environment. It helps visualise branding, visitor interaction, the nursing demo area and the enquiry zone.</p>
          <div class="grid grid-2 mt-5"><div class="soft-box"><strong>Welcome Zone</strong></div><div class="soft-box emerald"><strong>Nursing Demo Zone</strong></div><div class="soft-box cyan"><strong>Course Info Zone</strong></div><div class="soft-box amber"><strong>QR Sign-up Zone</strong></div></div>
        </div>
      </div>
      ${card(`<h2>Operations Flow</h2><div class="soft-box mt-4"><strong>Before Opening</strong><br>Confirm furniture, banners, brochures, QR signage, demo props, cable safety, staff roles and emergency information.</div><div class="soft-box emerald mt-4"><strong>During Expo</strong><br>Welcome visitors, manage flow, guide the activity, answer questions, monitor hazards and direct visitors to the QR code.</div><div class="soft-box amber mt-4"><strong>After Closing</strong><br>Pack materials safely, remove waste, check hired items, save enquiry data and report incidents or issues.</div>`)}
    </div>
    <div class="grid grid-4 mt-8">
      ${[
        ["Cable and Electrical Safety", "Use tested equipment, avoid loose cables, tape down leads, keep power points clear and do not overload power boards."],
        ["Trip and Crowd Control", "Keep walkways clear, avoid blocking aisles, limit clutter and guide visitors in one clear direction."],
        ["Safe Nursing Activity", "Use low-risk props only, avoid sharps or real medical waste, provide hand hygiene items and supervise the activity."],
        ["Emergency Readiness", "Brief staff on emergency exits, venue procedures, first aid contact points and incident reporting."]
      ].map(([title, text]) => card(`<p class="tag">WHS Control</p><h3>${title}</h3><p>${text}</p>`)).join("")}
    </div>
    ${card(`<p class="tag">Risk Management Approach</p><h2>Eliminate first, then minimise</h2><p>The team will identify hazards, remove risks where possible, reduce risks that cannot be removed, brief staff, monitor the booth and record incidents for follow-up.</p>`, "gradient mt-8")}
  `;
}

function renderBudget() {
  return `
    ${pageTitle("Budget and Resources", "This budget is designed for a focused 3m x 3m booth promoting one course: HLT54121 Diploma of Nursing. The aim is not to spend heavily on decoration, but to invest in visibility, visitor engagement, enquiry collection and follow-up.")}
    <div class="grid grid-2">
      ${card(`<p class="tag">Critical Budget Insight</p><h2>Small booth, focused spending</h2><p>Because this is a compact single-course booth, the budget should prioritise high-impact essentials: clear signage, trained staff, QR enquiry collection, course information and a safe nursing-related activity. Too much furniture or decoration would reduce space and weaken visitor flow.</p>`, "gradient")}
      ${card(`<p class="tag">Budget Objective</p><h2>Convert attention into enquiries</h2><p>The budget should be treated as a lead-generation investment. Each cost should support one of four outcomes: attract visitors, explain the course, create a memorable interaction and collect enquiries for follow-up.</p><div class="grid grid-4 mt-5"><div class="soft-box"><strong>Attract</strong><br>Signage</div><div class="soft-box emerald"><strong>Explain</strong><br>Brochures</div><div class="soft-box cyan"><strong>Engage</strong><br>Demo</div><div class="soft-box amber"><strong>Convert</strong><br>QR leads</div></div>`)}
    </div>
    <div class="grid grid-2 mt-8">
      ${card(`<p class="tag">Estimated Cost Plan</p><h2>Budget Breakdown</h2><p>The estimated budget is around $6,550. This is higher than a basic display-only booth because it includes visitor engagement, QR enquiry support, practical furniture and contingency. However, it remains controlled because the booth promotes only one course.</p><div class="budget-table">${budgetItems.map(([item, amount, category, purpose]) => `<div class="budget-row"><span><strong>${item}</strong></span><strong>${amount}</strong><span class="badge">${category}</span><span>${purpose}</span></div>`).join("")}<div class="budget-total"><span>Total Estimated Budget</span><span>$6,550</span></div></div>`)}
      <div class="grid">
        ${card(`<h3>Cost Control</h3><p>Confirm supplier prices early, use existing Stanley College materials where possible, keep furniture minimal and prioritise items that directly improve visitor engagement or enquiry collection.</p>`)}
        ${card(`<h3>Contingency Logic</h3><p>The $570 contingency protects against small but common event changes such as extra printing, replacement signage, delivery charges, equipment issues or last-minute booth adjustments.</p>`)}
        ${card(`<h3>Critical View</h3><p>Spending too much on giveaways or decoration can attract low-quality traffic. Spending on signage, staff readiness, QR enquiry tools and safe demo materials creates stronger value for Stanley College.</p>`)}
      </div>
    </div>
    <div class="grid grid-4 mt-8">
      ${card(`<p class="tag">Resource Priority</p><h3>Must Have</h3><p>Booth space, welcome counter, Stanley branding, course brochures, QR code, trained staff and basic WHS materials.</p>`)}
      ${card(`<p class="tag">Resource Priority</p><h3>Should Have</h3><p>Nursing demo props, small demo table, tablet or AV support, brochure stand and small giveaways.</p>`)}
      ${card(`<p class="tag">Resource Priority</p><h3>Nice to Have</h3><p>Large screen, premium giveaways, extra lighting or additional display panels if extra budget becomes available.</p>`)}
      ${card(`<p class="tag">Avoid</p><h3>Low Return Spend</h3><p>Large lounge furniture, excessive decoration or too many giveaway items that reduce booth space and do not improve enquiries.</p>`)}
    </div>
    ${card(`<p class="tag">Finance Summary</p><h2>Every cost must support a measurable event goal.</h2><p>The booth fee secures the space, signage attracts attention, brochures and staff conversations provide information, demo materials create engagement and the QR code converts interest into enquiries. The strongest budget decision is to spend where it improves visitor experience and follow-up potential.</p>`, "gradient mt-8")}
  `;
}

function renderSchedule() {
  return `
    ${pageTitle("Project Timeline and Delivery Plan", "The organization schedule is designed to reduce risk, keep each department accountable and make sure the booth is ready before Careers Expo 2026. It connects planning tasks to the event goal: visitor engagement and enquiry collection.")}
    <div class="grid grid-2">
      ${card(`<p class="tag">Planning Logic</p><h2>Plan early, test before delivery</h2><p>The schedule is not only a list of tasks. It is a risk-control tool. Important decisions such as booth concept, marketing message, budget, WHS, staff roles and QR enquiry process must be confirmed before event week.</p>`, "gradient")}
      ${card(`<p class="tag">Management Focus</p><h2>Accountability by department</h2><p>Each manager is responsible for a specific part of the event: project coordination, marketing, visitor engagement, operations and finance. This avoids duplicated work and makes progress easier to check.</p>`)}
    </div>
    <div class="grid grid-5 mt-8">
      ${[
        ["Stage 1", "Week 1-2", "Confirm concept, course focus, venue evidence and team roles.", "Early clarity prevents confusion and ensures the proposal follows the client brief."],
        ["Stage 2", "Week 3", "Prepare marketing content, booth design and visitor message.", "The booth message must be consistent before signage, brochures and website content are finalised."],
        ["Stage 3", "Week 4", "Confirm budget, resources, demo materials and QR enquiry process.", "This turns the creative idea into a realistic operational plan with measurable outcomes."],
        ["Stage 4", "Week 5", "Finalise website presentation, WHS checklist, speaking roles and rehearsal.", "Rehearsal and WHS checks reduce presentation risk and event delivery risk."],
        ["Stage 5", "Event Week", "Set up booth, engage visitors, collect enquiries and follow up.", "The event is successful only if visitor interest becomes usable enquiry data and follow-up action."]
      ].map(([stage, week, task, reason]) => card(`<p class="tag">${stage}</p><h3>${week}</h3><p><strong>Task:</strong> ${task}</p><p><strong>Why this matters:</strong> ${reason}</p>`)).join("")}
    </div>
    <div class="grid grid-3 mt-8">
      ${card(`<p class="tag">Pre-event Control</p><h3>Before the expo</h3><p>Finalise booth content, budget, resources, staff roles, QR code, WHS checklist and presentation rehearsal before event week.</p>`)}
      ${card(`<p class="tag">On-site Control</p><h3>During the expo</h3><p>Monitor visitor flow, staff energy, brochure stock, demo safety and QR enquiry collection. Small issues should be corrected quickly each day.</p>`)}
      ${card(`<p class="tag">Post-event Control</p><h3>After the expo</h3><p>Review enquiry data and follow up quickly. Without post-event follow-up, the booth may look successful but fail to support enrolment outcomes.</p>`)}
    </div>
  `;
}

function renderChallenges() {
  const items = [
    ["Pre-event Challenge", "Short preparation timeframe", "Delays can affect booth design, marketing content, budget confirmation and resource booking.", "Use a clear schedule, assign owners for each task and complete high-risk tasks first."],
    ["Pre-event Challenge", "Incomplete preparation", "Missing brochures, signage, QR codes or demo materials can make the booth look unprofessional.", "Prepare a checklist for booth items, course materials, staff briefing, WHS controls and QR testing."],
    ["On-site Challenge", "Staffing and role confusion", "If staff do not know their role, visitors may not receive consistent information or guidance.", "Create a staff roster and assign clear zones: greeting, nursing demo, course information and QR enquiry support."],
    ["On-site Challenge", "Crowd flow and congestion", "A small 3m x 3m booth can become crowded quickly, especially during demonstrations.", "Keep furniture minimal, use open access, guide visitors in one direction and keep the QR sign-up area easy to reach."],
    ["Safety Challenge", "WHS and demonstration risk", "Loose cables, crowded walkways or unsafe nursing props could create safety risks.", "Use low-risk demo props only, no sharps, no real medical waste, taped cables, clear walkways and daily safety checks."],
    ["Finance Challenge", "Budget increase or extra cost", "Extra printing, delivery, equipment or replacement items can increase event costs.", "Keep a contingency amount, confirm prices early, compare suppliers and prioritise high-value resources."],
    ["Engagement Challenge", "Low-quality visitor traffic", "Giveaways may attract visitors who are not genuinely interested in nursing or study.", "Use giveaways only after conversation or QR enquiry and focus staff interaction on genuine healthcare interest."],
    ["Information Challenge", "Inaccurate or unclear course information", "Visitors may misunderstand entry requirements, course duration, placement or career pathways.", "Use official course information, train staff with simple talking points and direct detailed questions to Stanley College advisers."],
    ["Post-event Challenge", "Weak follow-up after the expo", "Enquiries lose value if they are not followed up quickly after the event.", "Export enquiry data, assign follow-up responsibility and contact interested visitors within 48 hours."]
  ];

  return `
    ${pageTitle("Challenges and Solutions", "This section shows that the event proposal considers real delivery risks across pre-event preparation, on-site management, safety, staffing, budget control and post-event follow-up.")}
    <div class="grid grid-2">
      ${card(`<p class="tag">Critical Risk View</p><h2>The biggest risk is not only event day</h2><p>Many event problems happen before or after the event: unclear roles, late resources, weak staff preparation, poor WHS checking, or no follow-up after enquiries are collected.</p>`, "gradient")}
      ${card(`<p class="tag">Solution Approach</p><h2>Prevent first, fix quickly, review after</h2><p>Prevent predictable problems early, respond quickly during the expo and review outcomes after the event to protect visitor experience and Stanley College's brand image.</p>`)}
    </div>
    <div class="grid grid-3 mt-8">
      ${items.map(([type, title, issue, solution]) => card(`<p class="tag">${type}</p><h3>${title}</h3><p><strong>Issue:</strong> ${issue}</p><p><strong>Solution:</strong> ${solution}</p>`)).join("")}
    </div>
  `;
}

function renderConclusion() {
  return `
    ${pageTitle("Conclusion", "The proposed Diploma of Nursing booth is designed to be practical, focused and visitor-centred. It supports Stanley College by turning expo attention into meaningful course enquiries and follow-up opportunities.")}
    <div class="grid grid-2">
      ${card(`<p class="tag">Strategic Alignment</p><h2>The proposal responds to the client goal</h2><p>Stanley College's key priorities are brand awareness, trust, course promotion and enquiry generation. This proposal supports those priorities through a clear nursing pathway message, face-to-face interaction, a safe booth activity, QR enquiry collection and structured follow-up.</p>`, "gradient")}
      ${card(`<p class="tag">Main Evaluation Point</p><h2>Success is measured by enquiry quality</h2><p>A successful booth is not only the one that attracts the most people. The stronger result is when visitors understand the Diploma of Nursing, feel confident to ask questions, scan the QR code and can be contacted after the expo.</p>`)}
    </div>
    <div class="grid grid-4 mt-8">
      ${card(`<p class="tag">Purpose</p><h3>Clear event direction</h3><p>The 5 W's clarify the audience, course focus, venue, timing and reason for the event before detailed planning begins.</p>`)}
      ${card(`<p class="tag">Marketing</p><h3>One focused message</h3><p>The 5 C's keep the booth simple and clear: one course, one pathway and one call-to-action for enquiry.</p>`)}
      ${card(`<p class="tag">Experience</p><h3>Visitor journey</h3><p>The 5 E's move visitors from attention to engagement, then from enquiry to follow-up after the expo.</p>`)}
      ${card(`<p class="tag">Delivery</p><h3>Safe and practical</h3><p>The operations plan keeps the booth realistic through clear zones, safe movement, WHS checks and simple staff roles.</p>`)}
    </div>
    <div class="grid grid-3 mt-8">
      ${card(`<p class="tag">Strength</p><h3>Realistic for a focused booth</h3><p>The concept suits a focused expo booth because it avoids overcrowding and focuses on the essentials: signage, course information, a short activity and QR enquiry.</p>`)}
      ${card(`<p class="tag">Financial Value</p><h3>Spending is purposeful</h3><p>The estimated budget focuses on items that support measurable outcomes, such as visibility, course understanding, visitor engagement and follow-up, rather than low-value decoration.</p>`)}
      ${card(`<p class="tag">Risk Control</p><h3>Risks are planned early</h3><p>The schedule, WHS plan and challenge solutions reduce common event risks such as late preparation, crowding, unclear staff roles and weak post-event follow-up.</p>`)}
    </div>
    <div class="grid grid-2 mt-8">
      ${card(`<p class="tag">Critical Reflection</p><h2>What makes the proposal stronger?</h2><p>The proposal is stronger because it connects creative design with operational reality. The booth is not only attractive; it is planned around visitor flow, safety, budget control, course accuracy, enquiry collection and follow-up.</p>`)}
      ${card(`<p class="tag">Final Recommendation</p><h2>Proceed with the focused nursing pathway booth.</h2><p>This concept is suitable because it is achievable, safe, financially controlled and easy for visitors to understand. Most importantly, it directly supports Stanley College's goal of generating quality enquiries for the Diploma of Nursing.</p>`, "gradient")}
    </div>
    ${card(`<p class="tag">Closing Statement</p><h2>Nursing is more than a course. It is a career with purpose.</h2><p>This booth gives visitors a simple and meaningful way to explore that pathway through clear information, human interaction, safe engagement and structured follow-up. That makes the event valuable for both visitors and Stanley College.</p>`, "mt-8")}
  `;
}

function renderQuestions() {
  const searchText = state.questionInput.trim().toLowerCase();
  const filtered = faqItems.filter(([category, question, answer]) => {
    if (!searchText) return true;
    return `${category} ${question} ${answer}`.toLowerCase().includes(searchText);
  });

  return `
    <div class="center">
      <p class="kicker">Help Centre</p>
      <h1 class="hero-title" style="font-size:clamp(48px,8vw,86px)">Frequently Asked Questions</h1>
      <p class="hero-copy">Find answers about the Diploma of Nursing, the expo booth experience, and how to connect with Stanley College.</p>
    </div>
    <div class="card gradient mt-8" style="max-width:980px;margin-left:auto;margin-right:auto">
      <label class="tag" for="qaSearch">Search FAQs</label>
      <input id="qaSearch" class="faq-search" value="${esc(state.questionInput)}" placeholder="Search nursing course, booth activities, enquiries, safety, location...">
      <div class="topic-buttons">
        ${faqTopics.map(topic => `<button class="topic-btn" onclick="setQuestion('${esc(topic)}')">${esc(topic)}</button>`).join("")}
        <button class="topic-btn outline" onclick="setQuestion('')">Show all</button>
      </div>
    </div>
    <div class="grid grid-3 mt-8">
      ${filtered.length ? filtered.map(([category, question, answer, linkLabel, linkUrl]) => card(`<p class="tag">${category}</p><h3>${question}</h3><p>${answer}</p><a class="link-btn" style="background:var(--blue-50);color:var(--blue-700);margin-top:12px" href="${linkUrl}" target="_blank" rel="noreferrer">${linkLabel}</a>`)).join("") : card(`<p class="tag">No result found</p><h3>We could not find a matching answer.</h3><p>Please visit the official course page or speak with the Stanley College team at the booth for more support.</p>`, "")}
    </div>
    <div class="grid grid-3 mt-10">
      <a class="card cta-card" href="https://www.stanleycollege.edu.au/courses/diploma-of-nursing/" target="_blank" rel="noreferrer"><p class="tag">Official Course Page</p><h3>Explore the Diploma of Nursing</h3><p>Learn more about the course structure, placement and career pathway.</p></a>
      <a class="card cta-card" href="https://www.stanleycollege.edu.au/courses/diploma-of-nursing/#enqueryform" target="_blank" rel="noreferrer"><p class="tag">Make an Enquiry</p><h3>Get in touch with Stanley College</h3><p>Submit an enquiry if you would like more information about the nursing pathway.</p></a>
      <a class="card cta-card" href="${pcecVirtualTourUrl}" target="_blank" rel="noreferrer"><p class="tag">Venue Information</p><h3>Explore Perth Convention and Exhibition Centre</h3><p>View the venue and learn more about the Careers Expo location.</p></a>
    </div>
  `;
}

function renderContent() {
  switch (state.activeId) {
    case "home": return renderHome();
    case "contents": return renderContents();
    case "team": return renderTeam();
    case "brief": return renderBrief();
    case "marketing": return renderMarketing();
    case "course": return renderCourse();
    case "experience": return renderExperience();
    case "operations": return renderOperations();
    case "budget": return renderBudget();
    case "schedule": return renderSchedule();
    case "challenges": return renderChallenges();
    case "conclusion": return renderConclusion();
    case "questions": return renderQuestions();
    default: return "<div>Page not found.</div>";
  }
}

function getActiveIndex() {
  return Math.max(0, sections.findIndex(section => section.id === state.activeId));
}

function setActive(id, shouldScroll = true) {
  state.activeId = id;
  window.location.hash = id;
  render();
  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function setQuestion(value) {
  state.questionInput = value;
  render();
}

function renderNav() {
  const desktop = document.getElementById("desktopNav");
  const mobile = document.getElementById("mobileNav");
  const navHtml = sections.map(section => `<button type="button" class="nav-btn ${section.id === state.activeId ? "active" : ""}" ${section.id === state.activeId ? `aria-current="page"` : ""} onclick="setActive('${section.id}')">${esc(section.label)}</button>`).join("");
  desktop.innerHTML = navHtml;
  mobile.innerHTML = navHtml;
}

function renderDots() {
  const dots = document.getElementById("dots");
  dots.innerHTML = sections.map(section => `<button type="button" class="dot ${section.id === state.activeId ? "active" : ""}" aria-label="${esc(section.label)}" onclick="setActive('${section.id}')"></button>`).join("");
}

function render() {
  const activeIndex = getActiveIndex();
  const activeSection = sections[activeIndex] || sections[0];

  document.getElementById("stanleyLogo").src = stanleyLogoUrl;
  document.getElementById("activeLabel").innerHTML = `${esc(activeSection.label)}<span>Presenter: ${esc(activeSection.speaker)} - ${esc(activeSection.role)}</span>`;
  document.getElementById("pageCount").textContent = `${activeIndex + 1} / ${sections.length}`;
  document.getElementById("content").innerHTML = renderContent();

  renderNav();
  renderDots();

  document.getElementById("prevBtn").disabled = activeIndex === 0;
  document.getElementById("nextBtn").disabled = activeIndex === sections.length - 1;

  const qaSearch = document.getElementById("qaSearch");
  if (qaSearch) {
    qaSearch.addEventListener("input", event => {
      state.questionInput = event.target.value;
      render();
      const freshInput = document.getElementById("qaSearch");
      if (freshInput) {
        freshInput.focus();
        freshInput.setSelectionRange(freshInput.value.length, freshInput.value.length);
      }
    });
  }
}

document.getElementById("prevBtn").addEventListener("click", () => {
  const index = getActiveIndex();
  if (index > 0) setActive(sections[index - 1].id);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  const index = getActiveIndex();
  if (index < sections.length - 1) setActive(sections[index + 1].id);
});

document.addEventListener("keydown", event => {
  const tagName = document.activeElement?.tagName?.toLowerCase();
  if (tagName === "input" || tagName === "textarea") return;

  if (event.key === "ArrowLeft") {
    document.getElementById("prevBtn").click();
  }

  if (event.key === "ArrowRight") {
    document.getElementById("nextBtn").click();
  }
});

const initialHash = window.location.hash.replace("#", "");
if (sections.some(section => section.id === initialHash)) {
  state.activeId = initialHash;
}

render();
