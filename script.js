const urls = {
  stanleyLogo: "https://www.stanleycollege.edu.au/wp-content/themes/stanleycollege/assets/images/sc-logo.webp",
  nursingPhoto: "https://www.stanleycollege.edu.au/wp-content/uploads/2024/09/Depositphotos_30967789_XL-copy-1.jpg",
  qr: "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fwww.stanleycollege.edu.au%2Fcourses%2Fdiploma-of-nursing%2F%23enqueryform",
  pcec: "https://link.wellstrategic.com.au/PCEC-Accessible-Virtual-Tour",
  booth: "assets/nursing_diploma_booth_at_expo.png",
  course: "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/",
  enquiry: "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/#enqueryform",
  careersExpo: "https://www.careers-expo.com.au/",
  exhibitorInfo: "https://www.careers-expo.com.au/exhibitors/infopack/",
  bookStand: "https://www.careers-expo.com.au/book-your-stand/"
};

const sections = [
  { id: "home", label: "Home" },
  { id: "contents", label: "Contents" },
  { id: "team", label: "Our Team" },
  { id: "brief", label: "Client Brief" },
  { id: "marketing", label: "Marketing Plan" },
  { id: "course", label: "Course Details" },
  { id: "experience", label: "Visitor Experience" },
  { id: "operations", label: "Venue & Operations" },
  { id: "budget", label: "Budget & Resources" },
  { id: "schedule", label: "Organization Schedule" },
  { id: "challenges", label: "Challenges & Solutions" },
  { id: "conclusion", label: "Conclusion" },
  { id: "questions", label: "Q&A" }
];

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
  ["Course", "What is the Diploma of Nursing?", "The HLT54121 Diploma of Nursing is a nationally recognised course that prepares students for a pathway into enrolled nursing and healthcare support roles.", "Official course page", urls.course],
  ["Course", "Who is this course suitable for?", "This course is suitable for people interested in healthcare, including school leavers, job seekers, career changers and those looking for a practical study pathway.", "Official course page", urls.course],
  ["Course", "How long does the course take?", "The course duration is 104 weeks, including 24 weeks of holidays, and includes classroom learning, simulation and clinical placement.", "Course details", urls.course],
  ["Course", "Does the course include practical training?", "Yes. The course includes simulated nursing activities and 14 weeks or 560 hours of clinical placement to support practical learning.", "Course placement information", urls.course],
  ["Course", "How can I make an enquiry?", "Visitors can scan the QR code at the booth or visit the official Stanley College course page online to submit an enquiry.", "Make an enquiry", urls.enquiry],
  ["Booth Experience", "What can I do at the Stanley College booth?", "Visitors can explore course information, speak with the team, take part in a simple nursing-related activity and scan the QR code to make an enquiry.", "Diploma of Nursing", urls.course],
  ["Booth Experience", "What activities will be available?", "The booth can include low-risk activities such as hand hygiene demonstration, basic bandaging or a short nursing career quiz to make the experience more memorable.", "Diploma of Nursing", urls.course],
  ["Booth Experience", "Is the booth activity safe?", "Yes. The booth activity is designed to be low-risk, simple and safe, with no sharps or hazardous materials used.", "Venue information", urls.pcec],
  ["Booth Experience", "Why is the booth interactive?", "The booth is interactive because visitors remember experiences better than passive information. A simple activity also helps staff start natural course conversations.", "Course page", urls.course],
  ["Event Location", "Where is the Careers Expo held?", "The Careers Expo is held at the Perth Convention and Exhibition Centre in Pavilion 4 and 5.", "PCEC virtual tour", urls.pcec],
  ["Event Location", "When is Careers Expo 2026?", "Careers Expo 2026 runs from Thursday 14 May to Sunday 17 May 2026.", "Careers Expo website", urls.careersExpo],
  ["Event Location", "Why is PCEC suitable for this event?", "PCEC is suitable because it is a professional exhibition venue with visitor flow, accessibility and event infrastructure for a large public careers event.", "PCEC virtual tour", urls.pcec],
  ["Student Support", "Why should I choose Stanley College?", "Stanley College offers a clear nursing pathway, supportive learning, practical experience and a professional environment for students exploring healthcare careers.", "Stanley College course page", urls.course],
  ["Student Support", "What happens after I submit an enquiry?", "After an enquiry is submitted, the Stanley College team can follow up with more information about the course, entry details and next steps.", "Make an enquiry", urls.enquiry],
  ["Student Support", "Can I ask questions at the booth?", "Yes. Visitors can ask about the course pathway, study structure, placement, entry process and how to take the next step.", "Official course page", urls.course]
];

let activeId = "home";
let questionInput = "";

const app = document.getElementById("app");
const desktopNav = document.getElementById("desktop-nav");
const mobileNav = document.getElementById("mobile-nav");
const dotNav = document.getElementById("dot-nav");
const currentSection = document.getElementById("current-section");
const pageCounter = document.getElementById("page-counter");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
document.getElementById("stanley-logo").src = urls.stanleyLogo;

function card(content, extra = "") { return `<div class="card ${extra}">${content}</div>`; }
function pageTitle(title, text, kicker = "") { return `<div class="page-title">${kicker ? `<p class="kicker">${kicker}</p>` : ""}<h1>${title}</h1>${text ? `<p class="lead">${text}</p>` : ""}</div>`; }
function externalLink(url, text, className = "cta") { return `<a href="${url}" target="_blank" rel="noreferrer" class="${className}">${text}</a>`; }

function setActive(id) { activeId = id; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
function activeIndex() { return Math.max(0, sections.findIndex(s => s.id === activeId)); }

function renderNav() {
  const navHtml = sections.map(s => `<button class="nav-btn ${s.id === activeId ? "active" : ""}" data-id="${s.id}">${s.label}</button>`).join("");
  desktopNav.innerHTML = navHtml;
  mobileNav.innerHTML = navHtml;
  document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => setActive(btn.dataset.id)));

  dotNav.innerHTML = sections.map(s => `<button aria-label="${s.label}" class="dot ${s.id === activeId ? "active" : ""}" data-id="${s.id}"></button>`).join("");
  document.querySelectorAll(".dot").forEach(btn => btn.addEventListener("click", () => setActive(btn.dataset.id)));
}

function renderHome() {
  const memberList = team.map(([name, role]) => `<div class="info-cell" style="display:flex;justify-content:space-between;gap:12px"><strong>${name}</strong><span style="color:#1d4ed8">${role}</span></div>`).join("");
  return `<div class="hero">
    <div>
      <div class="logo-box"><img src="${urls.stanleyLogo}" alt="Stanley College logo"></div>
      <p class="kicker">HEM213 Event Operations Management</p>
      <h1>Stanley College Nursing Career Pathway Expo</h1>
      <p class="lead">Imagine a visitor walking through Careers Expo with many booths, brochures and choices. Our proposal helps Stanley College make that visitor stop, feel curious, understand the nursing pathway and take the next step.</p>
      <div class="pills"><span class="pill">Careers Expo 2026</span><span class="pill">14-17 May 2026</span><span class="pill">PCEC Pavilion 4 & 5</span><span class="pill">Promoting Diploma of Nursing</span></div>
      ${card(`<h2>Proposal Purpose</h2><p>Our proposal helps Stanley College increase brand awareness, build trust through face-to-face engagement, promote the HLT54121 Diploma of Nursing and generate future student enquiries.</p>`, "gradient")}
      <div class="card" style="margin-top:24px"><h2>Careers Expo Opening Times</h2><div class="info-grid"><div class="info-cell"><strong>Thursday 14 May</strong><br>9:00am - 3:00pm</div><div class="info-cell"><strong>Friday 15 May</strong><br>9:00am - 3:00pm</div><div class="info-cell"><strong>Saturday 16 May</strong><br>10:00am - 4:00pm</div><div class="info-cell"><strong>Sunday 17 May</strong><br>10:00am - 3:30pm</div></div></div>
    </div>
    ${card(`<img src="${urls.nursingPhoto}" alt="Nursing course promotional" class="hero-photo"><div style="padding:24px"><p class="label">Event Planning Business Proposal</p><h2>Presented to Stanley College</h2><p>We are proposing an interactive nursing promotion booth that turns a standard expo stand into a clear visitor journey: attract, engage, inform, collect enquiries and follow up.</p><h3>Group Members</h3><div class="grid" style="gap:10px">${memberList}</div></div>`, "no-padding gradient")}
  </div>`;
}

const pages = {
  contents: () => `${pageTitle("Contents", "Each tab is designed as one presentation page. The order follows the assessment requirements and keeps each section clear.")}
    <div class="grid grid-4">${sections.map((s, i) => `<button class="card" data-page="${s.id}" style="text-align:left;cursor:pointer"><p class="label">${i + 1}</p><h3>${s.label}</h3></button>`).join("")}</div>`,
  team: () => `${pageTitle("Introduction of Our Group", "Our team represents an event planning business. Each role connects to a key function of the proposal: project management, finance, marketing, operations and engagement.")}
    <div class="grid grid-5">${team.map(([name, role, duty]) => card(`<div class="avatar">${name.split(" ").map(p => p[0]).join("")}</div><h3>${name}</h3><p style="color:#1d4ed8;font-weight:800">${role}</p><p>${duty}</p>`)).join("")}</div>`,
  brief: () => `${pageTitle("Summary of the Event Brief", "Stanley College requires an event proposal for its participation at Careers Expo 2026. Our role is to design a professional, engaging and realistic expo booth that promotes Stanley College and generates student enquiries.")}
    <div class="grid grid-2">${card(`<h2>Client Goals</h2><p>The client wants to increase brand awareness, build trust through face-to-face interaction, generate enrolment leads and showcase Stanley College's education pathways.</p>`, "gradient")}${card(`<h2>Event Context</h2><p><strong>Event:</strong> Careers Expo 2026<br><strong>Venue:</strong> Perth Convention and Exhibition Centre<br><strong>Location:</strong> Pavilion 4 & 5<br><strong>Dates:</strong> 14-17 May 2026</p>`)}</div>
    <div class="grid grid-3" style="margin-top:24px">${card(`<p class="label">Product / Service</p><h3>HLT54121 Diploma of Nursing</h3><p>The main course promoted at the booth and a clear study pathway for healthcare career interest.</p>`)}${card(`<p class="label">Target Audience</p><h3>Future Students</h3><p>School students, parents, job seekers, career changers and people interested in healthcare careers.</p>`)}${card(`<p class="label">Event Purpose</p><h3>Attract, Inform, Convert</h3><p>Attract visitors, inform them about the course and encourage them to submit an enquiry for follow-up.</p>`)}</div>
    ${card(`<p class="label">Event Plan Framework: 5 W's</p><h2>Clarifying the event foundation</h2><div class="grid grid-5"><div class="info-cell"><strong>Who</strong><br>Stanley College, future students, parents, job seekers and career changers.</div><div class="info-cell"><strong>What</strong><br>A nursing career pathway booth promoting HLT54121 Diploma of Nursing.</div><div class="info-cell"><strong>When</strong><br>Careers Expo 2026, 14-17 May 2026.</div><div class="info-cell"><strong>Where</strong><br>PCEC, Pavilion 4 & 5.</div><div class="info-cell"><strong>Why</strong><br>Build awareness, create trust, collect enquiries and support future enrolments.</div></div><p>The 5 W's make the event purpose clear before detailed planning begins and connect the booth to Stanley College's enrolment and brand awareness goals.</p>`)}`,
  marketing: () => `${pageTitle("Marketing Plan and Target Audience", "The marketing plan focuses on attracting the right visitors, communicating the value of the Diploma of Nursing and turning booth conversations into real course enquiries.")}
    <div class="grid grid-2">${card(`<h2>Marketing Objective</h2><p>Position Stanley College as a clear, supportive and career-focused study option for visitors interested in healthcare. The booth helps people see not only a course, but a practical pathway into nursing.</p>`, "gradient")}${card(`<h2>Core Message</h2><p style="font-size:24px;color:#1d4ed8;font-weight:900">Start your nursing journey with Stanley College.</p><p>This message is simple, emotional and career-focused.</p>`)}</div>
    <div class="grid grid-4" style="margin-top:24px">${[["School Students","Need simple course information and confidence about future options."],["Parents","Need trust, course credibility, cost, duration and career outcome information."],["Job Seekers","Need a practical pathway into healthcare and clear enquiry steps."],["Career Changers","Need reassurance that nursing can be a meaningful new direction."]].map(([t,d],i)=>card(`<p class="label">Segment ${i+1}</p><h3>${t}</h3><p>${d}</p>`)).join("")}</div>
    <div class="grid grid-2" style="margin-top:24px">${card(`<h2>5 C's: Marketing Strategy</h2><p><strong>Concept:</strong> interactive nursing career pathway booth<br><strong>Customer:</strong> future students, parents, job seekers and career changers<br><strong>Content:</strong> course facts, nursing demo, brochures, QR enquiry and student support information<br><strong>Communication:</strong> staff conversation, signage, simple pitch, website links and follow-up<br><strong>Cost:</strong> marketing materials are planned within the booth budget</p>`)}${card(`<h2>Promotion Tools</h2><div class="info-grid"><div class="info-cell"><strong>Before Expo</strong><br>Social media post and student email</div><div class="info-cell"><strong>At Expo</strong><br>Banners, brochures, QR code and staff pitch</div><div class="info-cell"><strong>Engagement</strong><br>Nursing demo, quiz, giveaway and conversation</div><div class="info-cell"><strong>After Expo</strong><br>Follow-up email, phone call and consultation invitation</div></div>`)}</div>`,
  course: () => `${pageTitle("HLT54121 Diploma of Nursing", "The Diploma of Nursing is a strong product for the event because it gives visitors a clear, practical and meaningful healthcare career pathway.", "Product / Service Detail")}
    <div class="grid grid-2"><div><div class="pills"><span class="pill">Nationally Recognised</span><span class="pill">Enrolled Nurse Pathway</span><span class="pill">Simulated Nursing Activities</span><span class="pill">Clinical Work Placement</span></div><br>${externalLink(urls.course, "View Official Course Page")}</div>${card(`<img src="${urls.nursingPhoto}" class="photo" alt="Diploma of Nursing course"><div style="padding:24px"><h2>A clear pathway into healthcare</h2><p>The booth can make the course feel personal through course facts, practical demonstration, staff conversation and enquiry support.</p></div>`, "no-padding")}</div>
    <div class="grid grid-3" style="margin-top:24px">${courseDetails.map(([t,v,d])=>card(`<p class="label">${t}</p><h3>${v}</h3><p>${d}</p>`)).join("")}</div>`,
  experience: () => `${pageTitle("Visitor Experience Using the 5 E's", "The visitor journey is designed to move people from first attention to enquiry. This makes the booth more memorable and supports lead generation for the Diploma of Nursing.")}
    <div class="grid grid-5">${[["Entice","Healthcare theme, Stanley College branding, clear nursing message and friendly booth visuals."],["Enter","Open booth front with a welcoming layout so visitors feel comfortable walking in."],["Engage","Simple activity such as hand hygiene, basic bandaging or a short nursing career quiz."],["Exit","Visitors receive course information and are guided to scan the QR enquiry form."],["Extend","Follow-up email, phone call or course consultation after the expo."]].map(([t,d])=>card(`<h3 style="color:#1d4ed8">${t}</h3><p>${d}</p>`)).join("")}</div>
    ${card(`<h2>Visitor Journey</h2><p>See booth - speak with team - try nursing demo - learn course details - scan QR code - receive follow-up.</p>`, "gradient")}
    <div class="grid grid-2" style="margin-top:24px">${card(`<h2>Nursing Simulation Lab Video</h2><p>This video helps visitors understand the practical learning environment and makes the booth experience feel more real and engaging.</p><div class="video-wrap"><div class="aspect-video"><iframe src="https://www.youtube.com/embed/iV-6WlXRNkw" title="Stanley College Nursing Simulation Lab" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div>`)}${card(`<h2>Why this improves the experience</h2><ul><li>Shows a real learning environment, not only printed information.</li><li>Makes the booth more interactive and visually engaging.</li><li>Helps visitors imagine what studying nursing at Stanley College looks like.</li><li>Supports trust and credibility through real course visuals.</li></ul>`)}</div>
    ${card(`<div class="grid grid-2" style="align-items:center"><div><p class="label">Enquiry Call-to-Action</p><h2>Scan to enquire about Diploma of Nursing</h2><p>This QR code gives visitors a quick next step after they speak with the team.</p></div><div style="text-align:center"><img src="${urls.qr}" class="qr" alt="QR code"></div></div>`, "gradient")}`,
  operations: () => `${pageTitle("Venue, Operations and WHS Plan", "This page explains why Perth Convention and Exhibition Centre is suitable and how the booth will operate safely, smoothly and professionally during Careers Expo 2026.")}
    <div class="grid grid-2">${card(`<p class="label">Venue Decision</p><h2>Perth Convention and Exhibition Centre</h2><p>PCEC is suitable because it is a professional exhibition space in Perth CBD with visitor flow, accessible facilities, event infrastructure and an appropriate environment for education and career promotion.</p>${externalLink(urls.pcec,"View PCEC Virtual Tour")}`, "gradient")}${card(`<p class="label">Site Planning Focus</p><h2>Space, Movement and Accessibility</h2><p>The virtual tour helps the client understand the venue environment, visitor routes, accessibility features and exhibition-style atmosphere.</p><div class="grid grid-3"><div class="info-cell"><strong>Ingress</strong><br>Clear entry</div><div class="info-cell"><strong>Circulation</strong><br>Open movement</div><div class="info-cell"><strong>Egress</strong><br>Safe exit</div></div>`)}</div>
    <div class="grid grid-2" style="margin-top:24px">${card(`<img src="${urls.booth}" class="photo" alt="Booth simulation"><div style="padding:24px"><h2>Booth Simulation in Venue</h2><p>This simulation shows how the Stanley College Diploma of Nursing booth may look in the exhibition environment. It helps visualise branding, visitor interaction, the nursing demo area and the enquiry zone.</p><div class="zone-grid"><div class="zone">Welcome Zone</div><div class="zone green">Nursing Demo Zone</div><div class="zone cyan">Course Info Zone</div><div class="zone amber">QR Sign-up Zone</div></div></div>`, "no-padding")}${card(`<h2>Operations Flow</h2><div class="grid"><div class="info-cell"><strong>Before Opening</strong><br>Confirm furniture, banners, brochures, QR signage, demo props, cable safety, staff roles and emergency information.</div><div class="info-cell"><strong>During Expo</strong><br>Welcome visitors, manage flow, guide the activity, answer questions, monitor hazards and direct visitors to the QR code.</div><div class="info-cell"><strong>After Closing</strong><br>Pack materials safely, remove waste, check hired items, save enquiry data and report incidents or issues.</div></div>`)}</div>
    <div class="grid grid-4" style="margin-top:24px">${[["Cable and Electrical Safety","Use tested equipment, avoid loose cables, tape down leads, keep power points clear and do not overload power boards."],["Trip and Crowd Control","Keep walkways clear, avoid blocking aisles, limit clutter and guide visitors in one clear direction."],["Safe Nursing Activity","Use low-risk props only, avoid sharps or real medical waste, provide hand hygiene items and supervise the activity."],["Emergency Readiness","Brief staff on emergency exits, venue procedures, first aid contact points and incident reporting."]].map(([t,d])=>card(`<p class="label">WHS Control</p><h3>${t}</h3><p>${d}</p>`)).join("")}</div>
    ${card(`<p class="label">Risk Management Approach</p><h2>Eliminate first, then minimise</h2><p>The team will identify hazards, remove risks where possible, reduce risks that cannot be removed, brief staff, monitor the booth and record incidents for follow-up.</p>`, "gradient")}`,
  budget: () => `${pageTitle("Budget and Resources", "This budget is designed for a focused 3m x 3m booth promoting one course: HLT54121 Diploma of Nursing. The aim is not to spend heavily on decoration, but to invest in visibility, visitor engagement, enquiry collection and follow-up.")}
    <div class="grid grid-2">${card(`<p class="label">Critical Budget Insight</p><h2>Small booth, focused spending</h2><p>Because this is a compact single-course booth, the budget should prioritise high-impact essentials: clear signage, trained staff, QR enquiry collection, course information and a safe nursing-related activity. Too much furniture or decoration would reduce space and weaken visitor flow.</p>`, "gradient")}${card(`<p class="label">Budget Objective</p><h2>Convert attention into enquiries</h2><p>The budget should be treated as a lead-generation investment. Each cost should support one of four outcomes: attract visitors, explain the course, create a memorable interaction and collect enquiries for follow-up.</p><div class="grid grid-4"><div class="info-cell"><strong>Attract</strong><br>Signage</div><div class="info-cell"><strong>Explain</strong><br>Brochures</div><div class="info-cell"><strong>Engage</strong><br>Demo</div><div class="info-cell"><strong>Convert</strong><br>QR leads</div></div>`)}</div>
    <div class="grid grid-2" style="margin-top:24px">${card(`<p class="label">Estimated Cost Plan</p><h2>Budget Breakdown</h2><p>The estimated budget is around $6,550. It includes visitor engagement, QR enquiry support, practical furniture and contingency.</p><div style="border:1px solid #e2e8f0;border-radius:18px;overflow:hidden">${budgetItems.map(([item, amount, cat, purpose]) => `<div class="budget-row"><span><strong>${item}</strong></span><strong>${amount}</strong><span class="tag">${cat}</span><span>${purpose}</span></div>`).join("")}<div class="budget-row" style="background:#f8fafc;font-weight:900"><span>Total Estimated Budget</span><strong>$6,550</strong><span></span><span></span></div></div>`)}<div class="grid">${card(`<h3>Cost Control</h3><p>Confirm supplier prices early, use existing Stanley College materials, keep furniture minimal and prioritise items that improve engagement or enquiry collection.</p>`)}${card(`<h3>Contingency Logic</h3><p>The $570 contingency protects against extra printing, replacement signage, delivery charges, equipment issues or last-minute adjustments.</p>`)}${card(`<h3>Critical View</h3><p>Spending too much on giveaways or decoration can attract low-quality traffic. Spending on signage, staff readiness, QR enquiry tools and safe demo materials creates stronger value.</p>`)}</div></div>
    <div class="grid grid-4" style="margin-top:24px">${[["Must Have","Booth space, welcome counter, Stanley branding, course brochures, QR code, trained staff and basic WHS materials."],["Should Have","Nursing demo props, small demo table, tablet or AV support, brochure stand and small giveaways."],["Nice to Have","Large screen, premium giveaways, extra lighting or additional display panels if extra budget becomes available."],["Avoid","Large lounge furniture, excessive decoration or too many giveaway items that reduce booth space and do not improve enquiries."]].map(([t,d])=>card(`<p class="label">Resource Priority</p><h3>${t}</h3><p>${d}</p>`)).join("")}</div>
    ${card(`<p class="label">Finance Summary</p><h2>Every cost must support a measurable event goal.</h2><p>The booth fee secures the space, signage attracts attention, brochures and staff conversations provide information, demo materials create engagement and the QR code converts interest into enquiries.</p>`, "gradient")}`,
  schedule: () => `${pageTitle("Project Timeline and Delivery Plan", "The organization schedule is designed to reduce risk, keep each department accountable and make sure the booth is ready before Careers Expo 2026.")}
    <div class="grid grid-2">${card(`<p class="label">Planning Logic</p><h2>Plan early, test before delivery</h2><p>The schedule is not only a list of tasks. It is a risk-control tool. Important decisions such as booth concept, marketing message, budget, WHS, staff roles and QR enquiry process must be confirmed before event week.</p>`, "gradient")}${card(`<p class="label">Management Focus</p><h2>Accountability by department</h2><p>Each manager is responsible for a specific part of the event: project coordination, marketing, visitor engagement, operations and finance.</p>`)}</div>
    <div class="grid grid-5" style="margin-top:24px">${[["Stage 1","Week 1-2","Confirm concept, course focus, venue evidence and team roles.","Early clarity prevents confusion and ensures the proposal follows the client brief."],["Stage 2","Week 3","Prepare marketing content, booth design and visitor message.","The booth message must be consistent before signage, brochures and website content are finalised."],["Stage 3","Week 4","Confirm budget, resources, demo materials and QR enquiry process.","This turns the creative idea into a realistic operational plan with measurable outcomes."],["Stage 4","Week 5","Finalise website presentation, WHS checklist, speaking roles and rehearsal.","Rehearsal and WHS checks reduce presentation risk and event delivery risk."],["Stage 5","Event Week","Set up booth, engage visitors, collect enquiries and follow up.","The event is successful only if visitor interest becomes usable enquiry data and follow-up action."]].map(([stage,week,task,reason])=>card(`<p class="label">${stage}</p><h3>${week}</h3><p><strong>Task:</strong> ${task}</p><p><strong>Why this matters:</strong> ${reason}</p>`)).join("")}</div>
    <div class="grid grid-3" style="margin-top:24px">${card(`<p class="label">Pre-event Control</p><h3>Before the expo</h3><p>Finalise booth content, budget, resources, staff roles, QR code, WHS checklist and presentation rehearsal before event week.</p>`)}${card(`<p class="label">On-site Control</p><h3>During the expo</h3><p>Monitor visitor flow, staff energy, brochure stock, demo safety and QR enquiry collection. Small issues should be corrected quickly each day.</p>`)}${card(`<p class="label">Post-event Control</p><h3>After the expo</h3><p>Review enquiry data and follow up quickly. Without post-event follow-up, the booth may look successful but fail to support enrolment outcomes.</p>`)}</div>`,
  challenges: () => `${pageTitle("Challenges and Solutions", "This section shows that the event proposal considers real delivery risks across pre-event preparation, on-site management, safety, staffing, budget control and post-event follow-up.")}
    <div class="grid grid-2">${card(`<p class="label">Critical Risk View</p><h2>The biggest risk is not only event day</h2><p>Many event problems happen before or after the event: unclear roles, late resources, weak staff preparation, poor WHS checking, or no follow-up after enquiries are collected.</p>`, "gradient")}${card(`<p class="label">Solution Approach</p><h2>Prevent first, fix quickly, review after</h2><p>Prevent predictable problems early, respond quickly during the expo and review outcomes after the event to protect visitor experience and Stanley College's brand image.</p>`)}</div>
    <div class="grid grid-3" style="margin-top:24px">${[["Pre-event Challenge","Short preparation timeframe","Delays can affect booth design, marketing content, budget confirmation and resource booking.","Use a clear schedule, assign owners for each task and complete high-risk tasks first."],["Pre-event Challenge","Incomplete preparation","Missing brochures, signage, QR codes or demo materials can make the booth look unprofessional.","Prepare a checklist for booth items, course materials, staff briefing, WHS controls and QR testing."],["On-site Challenge","Staffing and role confusion","If staff do not know their role, visitors may not receive consistent information or guidance.","Create a staff roster and assign clear zones: greeting, nursing demo, course information and QR enquiry support."],["On-site Challenge","Crowd flow and congestion","A small 3m x 3m booth can become crowded quickly, especially during demonstrations.","Keep furniture minimal, use open access, guide visitors in one direction and keep the QR sign-up area easy to reach."],["Safety Challenge","WHS and demonstration risk","Loose cables, crowded walkways or unsafe nursing props could create safety risks.","Use low-risk demo props only, no sharps, no real medical waste, taped cables, clear walkways and daily safety checks."],["Finance Challenge","Budget increase or extra cost","Extra printing, delivery, equipment or replacement items can increase event costs.","Keep a contingency amount, confirm prices early, compare suppliers and prioritise high-value resources."],["Engagement Challenge","Low-quality visitor traffic","Giveaways may attract visitors who are not genuinely interested in nursing or study.","Use giveaways only after conversation or QR enquiry and focus staff interaction on genuine healthcare interest."],["Information Challenge","Inaccurate or unclear course information","Visitors may misunderstand entry requirements, course duration, placement or career pathways.","Use official course information, train staff with simple talking points and direct detailed questions to Stanley College advisers."],["Post-event Challenge","Weak follow-up after the expo","Enquiries lose value if they are not followed up quickly after the event.","Export enquiry data, assign follow-up responsibility and contact interested visitors within 48 hours."]].map(([type,title,issue,solution])=>card(`<p class="label">${type}</p><h3>${title}</h3><p><strong>Issue:</strong> ${issue}</p><p><strong>Solution:</strong> ${solution}</p>`)).join("")}</div>`,
  conclusion: () => `${pageTitle("Conclusion", "The proposed Diploma of Nursing booth is designed to be practical, focused and visitor-centred. It supports Stanley College by turning expo attention into meaningful course enquiries and follow-up opportunities.")}
    <div class="grid grid-2">${card(`<p class="label">Strategic Alignment</p><h2>The proposal responds to the client goal</h2><p>Stanley College's key priorities are brand awareness, trust, course promotion and enquiry generation. This proposal supports those priorities through a clear nursing pathway message, face-to-face interaction, a safe booth activity, QR enquiry collection and structured follow-up.</p>`, "gradient")}${card(`<p class="label">Main Evaluation Point</p><h2>Success is measured by enquiry quality</h2><p>A successful booth is not only the one that attracts the most people. The stronger result is when visitors understand the Diploma of Nursing, feel confident to ask questions, scan the QR code and can be contacted after the expo.</p>`)}</div>
    <div class="grid grid-4" style="margin-top:24px">${[["Purpose","Clear event direction","The 5 W's clarify the audience, course focus, venue, timing and reason for the event before detailed planning begins."],["Marketing","One focused message","The 5 C's keep the booth simple and clear: one course, one pathway and one call-to-action for enquiry."],["Experience","Visitor journey","The 5 E's move visitors from attention to engagement, then from enquiry to follow-up after the expo."],["Delivery","Safe and practical","The operations plan keeps the booth realistic through clear zones, safe movement, WHS checks and simple staff roles."]].map(([l,t,d])=>card(`<p class="label">${l}</p><h3>${t}</h3><p>${d}</p>`)).join("")}</div>
    <div class="grid grid-3" style="margin-top:24px">${[["Strength","Realistic for a focused booth","The concept suits a focused expo booth because it avoids overcrowding and focuses on the essentials: signage, course information, a short activity and QR enquiry."],["Financial Value","Spending is purposeful","The estimated budget focuses on items that support measurable outcomes, such as visibility, course understanding, visitor engagement and follow-up, rather than low-value decoration."],["Risk Control","Risks are planned early","The schedule, WHS plan and challenge solutions reduce common event risks such as late preparation, crowding, unclear staff roles and weak post-event follow-up."]].map(([l,t,d])=>card(`<p class="label">${l}</p><h3>${t}</h3><p>${d}</p>`)).join("")}</div>
    <div class="grid grid-2" style="margin-top:24px">${card(`<p class="label">Critical Reflection</p><h2>What makes the proposal stronger?</h2><p>The proposal is stronger because it connects creative design with operational reality. The booth is not only attractive; it is planned around visitor flow, safety, budget control, course accuracy, enquiry collection and follow-up.</p>`)}${card(`<p class="label">Final Recommendation</p><h2>Proceed with the focused nursing pathway booth.</h2><p>This concept is suitable because it is achievable, safe, financially controlled and easy for visitors to understand. Most importantly, it directly supports Stanley College's goal of generating quality enquiries for the Diploma of Nursing.</p>`, "gradient")}</div>
    ${card(`<p class="label">Closing Statement</p><h2>Nursing is more than a course. It is a career with purpose.</h2><p>This booth gives visitors a simple and meaningful way to explore that pathway through clear information, human interaction, safe engagement and structured follow-up. Our goal is to move visitors from curiosity to confidence, and from confidence to enquiry.</p>`)}`,
  questions: () => renderFaq()
};

function renderFaq() {
  const search = questionInput.trim().toLowerCase();
  const filtered = faqItems.filter(([category, question, answer]) => !search || `${category} ${question} ${answer}`.toLowerCase().includes(search));
  return `${pageTitle("Frequently Asked Questions", "Find answers about the Diploma of Nursing, the expo booth experience, and how to connect with Stanley College.", "Help Centre")}
    ${card(`<label class="label" for="qa-search">Search FAQs</label><input id="qa-search" class="search-input" value="${questionInput.replace(/"/g, '&quot;')}" placeholder="Search nursing course, booth activities, enquiries, safety, location..."><div class="pills">${["Course","Booth Experience","Event Location","Student Support"].map(t => `<button class="chip" data-search="${t}">${t}</button>`).join("")}<button class="chip" data-search="">Show all</button></div>`, "gradient")}
    <div class="grid grid-3" style="margin-top:24px">${filtered.length ? filtered.map(([category, question, answer, linkLabel, linkUrl]) => card(`<p class="label">${category}</p><h3>${question}</h3><p>${answer}</p><a href="${linkUrl}" target="_blank" rel="noreferrer" class="faq-link">${linkLabel}</a>`)).join("") : card(`<p class="label">No result found</p><h3>We could not find a matching answer.</h3><p>Please visit the official course page or speak with the Stanley College team at the booth for more support.</p>`)}</div>
    <div class="grid grid-3" style="margin-top:40px">${card(`<p class="label">Official Course Page</p><h3>Explore the Diploma of Nursing</h3><p>Learn more about the course structure, placement and career pathway.</p><a href="${urls.course}" target="_blank" class="faq-link">Open course page</a>`)}${card(`<p class="label">Make an Enquiry</p><h3>Get in touch with Stanley College</h3><p>Submit an enquiry if you would like more information about the nursing pathway.</p><a href="${urls.enquiry}" target="_blank" class="faq-link">Open enquiry form</a>`)}${card(`<p class="label">Venue Information</p><h3>Explore PCEC</h3><p>View the venue and learn more about the Careers Expo location.</p><a href="${urls.pcec}" target="_blank" class="faq-link">Open virtual tour</a>`)}</div>`;
}

function render() {
  renderNav();
  const index = activeIndex();
  currentSection.textContent = sections[index].label;
  pageCounter.textContent = `${index + 1} / ${sections.length}`;
  previousBtn.disabled = index === 0;
  nextBtn.disabled = index === sections.length - 1;
  app.innerHTML = activeId === "home" ? renderHome() : pages[activeId]();
  app.querySelectorAll("[data-page]").forEach(btn => btn.addEventListener("click", () => setActive(btn.dataset.page)));
  const searchInput = document.getElementById("qa-search");
  if (searchInput) searchInput.addEventListener("input", (event) => { questionInput = event.target.value; render(); document.getElementById("qa-search")?.focus(); });
  app.querySelectorAll("[data-search]").forEach(btn => btn.addEventListener("click", () => { questionInput = btn.dataset.search; render(); }));
}

previousBtn.addEventListener("click", () => {
  const index = activeIndex();
  if (index > 0) setActive(sections[index - 1].id);
});
nextBtn.addEventListener("click", () => {
  const index = activeIndex();
  if (index < sections.length - 1) setActive(sections[index + 1].id);
});

render();
