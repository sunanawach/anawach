const state = {
  activeId: "home",
  questionInput: "",
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
  { id: "questions", label: "Q&A", speaker: "All members", role: "Group response" },
];

const stanleyLogoUrl = "https://www.stanleycollege.edu.au/wp-content/themes/stanleycollege/assets/images/sc-logo.webp";
const nursingCoursePhotoUrl = "https://www.stanleycollege.edu.au/wp-content/uploads/2024/09/Depositphotos_30967789_XL-copy-1.jpg";
const nursingEnquiryQrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fwww.stanleycollege.edu.au%2Fcourses%2Fdiploma-of-nursing%2F%23enqueryform";
const pcecVirtualTourUrl = "https://link.wellstrategic.com.au/PCEC-Accessible-Virtual-Tour";

const team = [
  ["Ugyen Dema", "Project Manager", "Coordinates the project, timeline, presentation flow and final alignment with the client brief."],
  ["Anawach Lhakhiaw", "Finance Manager", "Prepares the budget, cost control strategy, resources and contingency planning."],
  ["Rinzin Norbu", "Marketing Manager", "Explains the client brief, target audience, core message and promotional strategy."],
  ["Annu Devi", "Operations Manager", "Plans the venue, booth layout, visitor flow, WHS, setup, delivery and pack-down."],
  ["Asmita Rana", "Engagement Manager", "Explains the course details, visitor experience, nursing activity, QR enquiry and follow-up."],
];

const courseDetails = [
  ["Qualification", "HLT54121 Diploma of Nursing", "A nationally recognised qualification promoted as a pathway into enrolled nursing."],
  ["Career pathway", "Enrolled Nurse pathway", "Graduates are prepared to provide care under the supervision of Registered Nurses and healthcare professionals."],
  ["Duration", "104 weeks", "Includes 24 weeks of holidays, giving students a structured long-term study pathway."],
  ["Clinical placement", "14 weeks / 560 hours", "Students complete full-time clinical placement to connect learning with real healthcare practice."],
  ["Delivery style", "Classroom + simulation + placement", "The course combines classroom learning, simulated nursing activities and clinical placement."],
  ["Location", "Perth", "This matches the Perth-based audience attending Careers Expo 2026."],
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
  ["Contingency", "$570", "Risk control", "Covers unexpected printing, replacement signage, equipment or small hire changes."],
];

const faqItems = [
  ["Course", "What is the Diploma of Nursing?", "The HLT54121 Diploma of Nursing is a nationally recognised course that prepares students for a pathway into enrolled nursing and healthcare support roles.", "Official course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Course", "Who is this course suitable for?", "This course is suitable for people interested in healthcare, including school leavers, job seekers, career changers and those looking for a practical study pathway.", "Official course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Course", "How long does the course take?", "The course duration is 104 weeks, including 24 weeks of holidays, and includes classroom learning, simulation and clinical placement.", "Course details", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Course", "Does the course include practical training?", "Yes. The course includes simulated nursing activities and 14 weeks or 560 hours of clinical placement to support practical learning.", "Course placement information", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Course", "How can I make an enquiry?", "Visitors can scan the QR code at the booth or visit the official Stanley College course page online to submit an enquiry.", "Make an enquiry", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/#enqueryform"],
  ["Booth Experience", "What can I do at the Stanley College booth?", "Visitors can explore course information, speak with the team, take part in a simple nursing-related activity and scan the QR code to make an enquiry.", "Diploma of Nursing", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Booth Experience", "What activities will be available?", "The booth can include low-risk activities such as hand hygiene demonstration, basic bandaging or a short nursing career quiz to make the experience more memorable.", "Diploma of Nursing", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Booth Experience", "Is the booth activity safe?", "Yes. The booth activity is designed to be low-risk, simple and safe, with no sharps or hazardous materials used.", "Venue information", "https://link.wellstrategic.com.au/PCEC-Accessible-Virtual-Tour"],
  ["Event Location", "Where is the Careers Expo held?", "The Careers Expo is held at the Perth Convention and Exhibition Centre in Pavilion 4 and 5.", "PCEC virtual tour", "https://link.wellstrategic.com.au/PCEC-Accessible-Virtual-Tour"],
  ["Event Location", "When is Careers Expo 2026?", "Careers Expo 2026 runs from Thursday 14 May to Sunday 17 May 2026.", "Careers Expo website", "https://www.careers-expo.com.au/"],
  ["Student Support", "Why should I choose Stanley College?", "Stanley College offers a clear nursing pathway, supportive learning, practical experience and a professional environment for students exploring healthcare careers.", "Stanley College course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["Student Support", "What happens after I submit an enquiry?", "After an enquiry is submitted, the Stanley College team can follow up with more information about the course, entry details and next steps.", "Make an enquiry", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/#enqueryform"],
  ["Student Support", "Can I ask questions at the booth?", "Yes. Visitors can ask about the course pathway, study structure, placement, entry process and how to take the next step.", "Official course page", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
];

const researchLinks = [
  ["Careers Expo Official Website", "https://www.careers-expo.com.au/"],
  ["Exhibitor Info Pack", "https://www.careers-expo.com.au/exhibitors/infopack/"],
  ["Book Your Stand", "https://www.careers-expo.com.au/book-your-stand/"],
  ["Stanley College Diploma of Nursing", "https://www.stanleycollege.edu.au/courses/diploma-of-nursing/"],
  ["PCEC Virtual Tour", pcecVirtualTourUrl],
];

function activeIndex() {
  return Math.max(0, sections.findIndex((section) => section.id === state.activeId));
}

function activeSection() {
  return sections[activeIndex()] || sections[0];
}

function setActive(id) {
  state.activeId = id;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goNext() {
  const index = activeIndex();
  if (index < sections.length - 1) setActive(sections[index + 1].id);
}

function goBack() {
  const index = activeIndex();
  if (index > 0) setActive(sections[index - 1].id);
}

function card(content, classes = "") {
  return `<div class="card ${classes}">${content}</div>`;
}

function pageTitle(title, intro = "", kicker = "") {
  return `<div class="page-title">${kicker ? `<p class="kicker">${kicker}</p>` : ""}<h1>${title}</h1>${intro ? `<p>${intro}</p>` : ""}</div>`;
}

function speaker(text) {
  return `<div class="badge">${text}</div>`;
}

function homePage() {
  return `
    <div class="grid grid-main">
      <div>
        <div class="mb"><img src="${stanleyLogoUrl}" alt="Stanley College logo" style="height:56px; width:auto; background:white; padding:10px 14px; border-radius:22px; border:1px solid var(--slate-200); box-shadow:var(--shadow);" /></div>
        <p class="kicker">HEM213 Event Operations Management</p>
        <h1>Stanley College Nursing Career Pathway Expo</h1>
        <p class="mt">A website-style event proposal prepared by our event planning team for Stanley College's participation at Careers Expo 2026 at Perth Convention and Exhibition Centre.</p>
        <div class="pill-row"><span class="pill">Careers Expo 2026</span><span class="pill">14-17 May 2026</span><span class="pill">PCEC Pavilion 4 & 5</span><span class="pill">Promoting Diploma of Nursing</span></div>
        ${card(`<h2>Proposal Purpose</h2><p class="mt">Our proposal helps Stanley College increase brand awareness, build trust through face-to-face engagement, promote the HLT54121 Diploma of Nursing and generate future student enquiries.</p>`, "soft mt")}
        ${card(`<h3>Careers Expo Opening Times</h3><div class="grid grid-2 mt"><div class="mini-box"><strong>Thursday 14 May</strong><br />9:00am - 3:00pm</div><div class="mini-box"><strong>Friday 15 May</strong><br />9:00am - 3:00pm</div><div class="mini-box green"><strong>Saturday 16 May</strong><br />10:00am - 4:00pm</div><div class="mini-box green"><strong>Sunday 17 May</strong><br />10:00am - 3:30pm</div></div>`, "mt")}
      </div>
      ${card(`<img class="image-hero" src="${nursingCoursePhotoUrl}" alt="Nursing course promotional" /><div class="card-body"><p class="label">Event Planning Business Proposal</p><h2 class="mt">Presented to Stanley College</h2><p class="mt">We are proposing an interactive nursing promotion booth that turns a standard expo stand into a clear visitor journey: attract, engage, inform, collect enquiries and follow up.</p><h3 class="mt">Group Members</h3><div class="people-list">${team.map(([name, role]) => `<div class="people-row"><strong>${name}</strong><small>${role}</small></div>`).join("")}</div></div>`, "flush")}
    </div>`;
}

function contentsPage() {
  return `${pageTitle("Contents", "Each tab is designed as one website page. The order follows the assessment requirements and keeps each person's speaking section clear.")}
    <div class="grid grid-4">${sections.map((section, index) => `<button class="card" onclick="setActive('${section.id}')" style="text-align:left; cursor:pointer;"><p class="label">${index + 1}</p><h3 class="mt">${section.label}</h3><p class="mt">Speaker: ${section.speaker}</p></button>`).join("")}</div>`;
}

function teamPage() {
  return `${speaker("Presented by Ugyen Dema - Project Manager")}${pageTitle("Introduction of Our Group", "Our team represents an event planning business. Each role connects to a key function of the proposal: project management, finance, marketing, operations and engagement.")}
    <div class="grid grid-5">${team.map(([name, role, duty]) => card(`<div class="team-initials">${name.split(" ").map((p) => p[0]).join("")}</div><h3>${name}</h3><p class="label" style="letter-spacing:0; text-transform:none; margin-top:6px;">${role}</p><p class="mt">${duty}</p>`)).join("")}</div>`;
}

function briefPage() {
  return `${speaker("Presented by Rinzin Norbu - Marketing Manager")}${pageTitle("Summary of the Event Brief", "Stanley College requires an event proposal for its participation at Careers Expo 2026. Our role is to design a professional, engaging and realistic expo booth that promotes Stanley College and generates student enquiries.")}
    <div class="grid grid-2">
      ${card(`<h2>Client Goals</h2><p class="mt">The client wants to increase brand awareness, build trust through face-to-face interaction, generate enrolment leads and showcase Stanley College's education pathways.</p>`, "soft")}
      ${card(`<h2>Event Context</h2><p class="mt"><strong>Event:</strong> Careers Expo 2026<br><strong>Venue:</strong> Perth Convention and Exhibition Centre<br><strong>Location:</strong> Pavilion 4 & 5<br><strong>Dates:</strong> 14-17 May 2026</p>`)}
    </div>
    <div class="grid grid-3 mt">
      ${card(`<p class="label">Product / Service</p><h3 class="mt">HLT54121 Diploma of Nursing</h3><p class="mt">The main course promoted at the booth and a clear study pathway for healthcare career interest.</p>`)}
      ${card(`<p class="label">Target Audience</p><h3 class="mt">Future Students</h3><p class="mt">School students, parents, job seekers, career changers and people interested in healthcare careers.</p>`)}
      ${card(`<p class="label">Event Purpose</p><h3 class="mt">Attract, Inform, Convert</h3><p class="mt">Attract visitors, inform them about the course and encourage them to submit an enquiry for follow-up.</p>`)}
    </div>
    ${card(`<p class="label">Event Plan Framework: 5 W's</p><h2 class="mt">Clarifying the event foundation</h2><div class="grid grid-5 mt"><div class="mini-box"><strong>Who</strong><br>Stanley College, future students, parents, job seekers and career changers.</div><div class="mini-box green"><strong>What</strong><br>A nursing career pathway booth promoting HLT54121 Diploma of Nursing.</div><div class="mini-box cyan"><strong>When</strong><br>Careers Expo 2026, 14-17 May 2026.</div><div class="mini-box amber"><strong>Where</strong><br>PCEC, Pavilion 4 & 5.</div><div class="mini-box slate"><strong>Why</strong><br>Build awareness, create trust, collect enquiries and support future enrolments.</div></div><p class="mt">The 5 W's make the event purpose clear before detailed planning begins.</p>`, "mt")}`;
}

function marketingPage() {
  const segments = [["School Students", "Need simple course information and confidence about future options."], ["Parents", "Need trust, course credibility, cost, duration and career outcome information."], ["Job Seekers", "Need a practical pathway into healthcare and clear enquiry steps."], ["Career Changers", "Need reassurance that nursing can be a meaningful new direction."]];
  return `${speaker("Presented by Rinzin Norbu - Marketing Manager")}${pageTitle("Marketing Plan and Target Audience", "The marketing plan focuses on attracting the right visitors, communicating the value of the Diploma of Nursing and turning booth conversations into real course enquiries.")}
  <div class="grid grid-2">${card(`<h2>Marketing Objective</h2><p class="mt">Position Stanley College as a clear and trusted study option for visitors interested in healthcare careers.</p>`, "soft")}${card(`<h2>Core Message</h2><h3 class="mt" style="color:var(--blue);">Start your nursing journey with Stanley College.</h3><p class="mt">This message is simple, emotional and career-focused.</p>`)}</div>
  <div class="grid grid-4 mt">${segments.map(([title, text], i) => card(`<p class="label">Segment ${i + 1}</p><h3 class="mt">${title}</h3><p class="mt">${text}</p>`)).join("")}</div>
  <div class="grid grid-2 mt">${card(`<h2>5 C's: Marketing Strategy</h2><p class="mt"><strong>Concept:</strong> interactive nursing career pathway booth<br><strong>Customer:</strong> future students, parents, job seekers and career changers<br><strong>Content:</strong> course facts, nursing demo, brochures, QR enquiry and student support information<br><strong>Communication:</strong> staff conversation, signage, simple pitch, website links and follow-up<br><strong>Cost:</strong> marketing materials are planned within the booth budget</p>`)}${card(`<h2>Promotion Tools</h2><div class="grid grid-2 mt"><div class="mini-box"><strong>Before Expo</strong><br>Social media post and student email</div><div class="mini-box green"><strong>At Expo</strong><br>Banners, brochures, QR code and staff pitch</div><div class="mini-box cyan"><strong>Engagement</strong><br>Nursing demo, quiz, giveaway and conversation</div><div class="mini-box amber"><strong>After Expo</strong><br>Follow-up email, phone call and consultation invitation</div></div>`)}</div>`;
}

function coursePage() {
  return `${speaker("Presented by Asmita Rana - Engagement Manager")}${pageTitle("HLT54121 Diploma of Nursing", "The Diploma of Nursing is a strong product for the event because it gives visitors a clear, practical and meaningful healthcare career pathway.", "Product / Service Detail")}
    <div class="grid grid-2"><div><div class="pill-row"><span class="pill">Nationally Recognised</span><span class="pill">Enrolled Nurse Pathway</span><span class="pill">Simulated Nursing Activities</span><span class="pill">Clinical Work Placement</span></div><a class="link-button" target="_blank" rel="noreferrer" href="https://www.stanleycollege.edu.au/courses/diploma-of-nursing/">View Official Course Page</a></div>${card(`<img class="image-hero" src="${nursingCoursePhotoUrl}" alt="Diploma of Nursing course"><div class="card-body"><h2>A clear pathway into healthcare</h2><p class="mt">The booth can make the course feel personal through course facts, practical demonstration, staff conversation and enquiry support.</p></div>`, "flush")}</div>
    <div class="grid grid-3 mt">${courseDetails.map(([title, value, detail]) => card(`<p class="label">${title}</p><h3 class="mt">${value}</h3><p class="mt">${detail}</p>`)).join("")}</div>`;
}

function experiencePage() {
  const es = [["Entice", "Attract visitors with Stanley branding, nursing message, course image and staff greeting."], ["Enter", "Use an open booth layout so visitors feel comfortable walking in."], ["Engage", "Invite visitors to try hand hygiene, bandaging or a short nursing career quiz."], ["Exit", "Give visitors a brochure and guide them to scan the QR enquiry form."], ["Extend", "Follow up after the expo by email or phone with course information."]];
  return `${speaker("Presented by Asmita Rana - Engagement Manager")}${pageTitle("Visitor Experience Using the 5 E's", "The visitor experience moves people from first attention to follow-up. The aim is to make the nursing course feel practical, personal and easy to enquire about.")}
    <div class="grid grid-5">${es.map(([title, detail]) => card(`<h3 style="color:var(--blue);">${title}</h3><p class="mt">${detail}</p>`)).join("")}</div>
    <div class="grid grid-2 mt">${card(`<h2>Visitor Journey</h2><p class="mt">Notice booth - speak with staff - try activity - learn course - scan QR.</p>`, "soft")}${card(`<h2>Engagement Activity</h2><p class="mt">The recommended activity is a low-risk nursing interaction such as hand hygiene demonstration, basic bandaging or a mini nursing quiz.</p>`)}</div>
    ${card(`<div class="grid grid-2"><div><p class="label">Enquiry Call-to-Action</p><h2 class="mt">Scan to enquire about Diploma of Nursing</h2><p class="mt">This QR code gives visitors a quick next step after they speak with the team.</p></div><div class="center"><img src="${nursingEnquiryQrUrl}" alt="QR code for Stanley College Diploma of Nursing enquiry form" style="max-width:220px; border-radius:18px; background:white; padding:14px;"></div></div>`, "soft mt")}`;
}

function operationsPage() {
  return `${speaker("Presented by Annu Devi - Operations Manager")}${pageTitle("Venue, Operations and WHS Plan", "This page explains why Perth Convention and Exhibition Centre is suitable and how the booth will operate safely, smoothly and professionally during Careers Expo 2026.")}
    <div class="grid grid-2">${card(`<p class="label">Venue Decision</p><h2 class="mt">Perth Convention and Exhibition Centre</h2><p class="mt">PCEC is suitable because it is a professional exhibition space in Perth CBD with visitor flow, accessible facilities, event infrastructure and an appropriate environment for education and career promotion.</p><a class="link-button" href="${pcecVirtualTourUrl}" target="_blank" rel="noreferrer">View PCEC Virtual Tour</a>`, "soft")}${card(`<p class="label">Site Planning Focus</p><h2 class="mt">Space, Movement and Accessibility</h2><p class="mt">The virtual tour helps the client understand the venue environment, visitor routes, accessibility features and exhibition-style atmosphere.</p><div class="grid grid-3 mt"><div class="mini-box"><strong>Ingress</strong><br>Clear entry</div><div class="mini-box green"><strong>Circulation</strong><br>Open movement</div><div class="mini-box amber"><strong>Egress</strong><br>Safe exit</div></div>`)}</div>
    <div class="grid grid-2 mt">${card(`<div class="booth-visual"><div class="booth-stage"><div class="booth-header"><span><span class="booth-logo-mark">S</span> Stanley College</span><span>Diploma of Nursing</span></div><div class="booth-floor"><div class="booth-zone">Welcome Zone</div><div class="booth-zone">Nursing Demo Zone</div><div class="booth-zone">Course Info Zone</div><div class="booth-zone">QR Sign-up Zone</div></div></div></div><div class="card-body"><h2>Proposed Booth Layout</h2><p class="mt">This virtual booth mockup shows clear branding, visitor interaction, nursing demonstration and QR enquiry collection.</p></div>`, "flush")}${card(`<h2>Operations Flow</h2><div class="mt"><div class="mini-box"><strong>Before Opening</strong><br>Confirm furniture, banners, brochures, QR signage, demo props, cable safety, staff roles and emergency information.</div><div class="mini-box green mt"><strong>During Expo</strong><br>Welcome visitors, manage flow, guide the activity, answer questions, monitor hazards and direct visitors to the QR code.</div><div class="mini-box amber mt"><strong>After Closing</strong><br>Pack materials safely, remove waste, check hired items, save enquiry data and report incidents or issues.</div></div>`)}</div>
    <div class="grid grid-4 mt">${[["Cable and Electrical Safety", "Use tested equipment, avoid loose cables, tape down leads, keep power points clear and do not overload power boards."], ["Trip and Crowd Control", "Keep walkways clear, avoid blocking aisles, limit clutter and guide visitors in one clear direction."], ["Safe Nursing Activity", "Use low-risk props only, avoid sharps or real medical waste, provide hand hygiene items and supervise the activity."], ["Emergency Readiness", "Brief staff on emergency exits, venue procedures, first aid contact points and incident reporting."]].map(([title, text]) => card(`<p class="label">WHS Control</p><h3 class="mt">${title}</h3><p class="mt">${text}</p>`)).join("")}</div>
    ${card(`<p class="label">Risk Management Approach</p><h2 class="mt">Eliminate first, then minimise</h2><p class="mt">The team will identify hazards, remove risks where possible, reduce risks that cannot be removed, brief staff, monitor the booth and record incidents for follow-up.</p>`, "soft mt")}`;
}

function budgetPage() {
  return `${speaker("Presented by Anawach Lhakhiaw - Finance Manager")}${pageTitle("Budget and Resources", "This budget is designed for a focused 3m x 3m booth promoting one course: HLT54121 Diploma of Nursing. The aim is not to spend heavily on decoration, but to invest in visibility, visitor engagement, enquiry collection and follow-up.")}
  <div class="grid grid-2">${card(`<p class="label">Critical Budget Insight</p><h2 class="mt">Small booth, focused spending</h2><p class="mt">Because this is a compact single-course booth, the budget should prioritise high-impact essentials: clear signage, trained staff, QR enquiry collection, course information and a safe nursing-related activity.</p>`, "soft")}${card(`<p class="label">Budget Objective</p><h2 class="mt">Convert attention into enquiries</h2><p class="mt">Each cost should support one of four outcomes: attract visitors, explain the course, create a memorable interaction and collect enquiries for follow-up.</p><div class="grid grid-4 mt"><div class="mini-box"><strong>Attract</strong><br>Signage</div><div class="mini-box green"><strong>Explain</strong><br>Brochures</div><div class="mini-box cyan"><strong>Engage</strong><br>Demo</div><div class="mini-box amber"><strong>Convert</strong><br>QR leads</div></div>`)}</div>
  ${card(`<p class="label">Estimated Cost Plan</p><h2 class="mt">Budget Breakdown</h2><p class="mt">The estimated budget is around $6,550. It includes visitor engagement, QR enquiry support, practical furniture and contingency while remaining controlled for one course.</p><div class="mt">${budgetItems.map(([item, amount, category, purpose]) => `<div class="budget-row"><span><strong>${item}</strong></span><strong>${amount}</strong><span class="category">${category}</span><span>${purpose}</span></div>`).join("")}<div class="budget-total"><span>Total Estimated Budget</span><span>$6,550</span></div></div>`, "mt")}
  <div class="grid grid-4 mt">${[["Must Have", "Booth space, welcome counter, Stanley branding, course brochures, QR code, trained staff and basic WHS materials."], ["Should Have", "Nursing demo props, small demo table, tablet or AV support, brochure stand and small giveaways."], ["Nice to Have", "Large screen, premium giveaways, extra lighting or additional display panels if extra budget becomes available."], ["Avoid", "Large lounge furniture, excessive decoration or too many giveaway items that reduce booth space and do not improve enquiries."]].map(([title, text]) => card(`<p class="label">Resource Priority</p><h3 class="mt">${title}</h3><p class="mt">${text}</p>`)).join("")}</div>
  ${card(`<p class="label">Finance Summary</p><h2 class="mt">Every cost must support a measurable event goal.</h2><p class="mt">The booth fee secures the space, signage attracts attention, brochures and staff conversations provide information, demo materials create engagement and the QR code converts interest into enquiries.</p>`, "soft mt")}`;
}

function schedulePage() {
  const stages = [["Stage 1", "Week 1-2", "Confirm concept, course focus, venue evidence and team roles.", "Early clarity prevents confusion and ensures the proposal follows the client brief."], ["Stage 2", "Week 3", "Prepare marketing content, booth design and visitor message.", "The booth message must be consistent before signage, brochures and website content are finalised."], ["Stage 3", "Week 4", "Confirm budget, resources, demo materials and QR enquiry process.", "This turns the creative idea into a realistic operational plan with measurable outcomes."], ["Stage 4", "Week 5", "Finalise website presentation, WHS checklist, speaking roles and rehearsal.", "Rehearsal and WHS checks reduce presentation risk and event delivery risk."], ["Stage 5", "Event Week", "Set up booth, engage visitors, collect enquiries and follow up.", "The event is successful only if visitor interest becomes usable enquiry data and follow-up action."]];
  return `${speaker("Presented by Ugyen Dema - Project Manager")}${pageTitle("Organization Schedule and Critical Timeline", "The organization schedule is designed to reduce risk, keep each department accountable and make sure the booth is ready before Careers Expo 2026.")}
    <div class="grid grid-2">${card(`<p class="label">Critical Planning Logic</p><h2 class="mt">Plan early, test before delivery</h2><p class="mt">The schedule is not only a list of tasks. It is a risk-control tool. Important decisions must be confirmed before event week.</p>`, "soft")}${card(`<p class="label">Management Focus</p><h2 class="mt">Accountability by department</h2><p class="mt">Each manager is responsible for a specific part of the event: project coordination, marketing, visitor engagement, operations and finance.</p>`)}</div>
    <div class="grid grid-5 mt">${stages.map(([stage, week, task, reason]) => card(`<p class="label">${stage}</p><h3 class="mt">${week}</h3><p class="mt"><strong>Task:</strong> ${task}</p><p class="mt"><strong>Critical reason:</strong> ${reason}</p>`)).join("")}</div>
    <div class="grid grid-3 mt">${[["Pre-event Control", "Before the expo", "Finalise booth content, budget, resources, staff roles, QR code, WHS checklist and rehearsal before event week."], ["On-site Control", "During the expo", "Monitor visitor flow, staff energy, brochure stock, demo safety and QR enquiry collection."], ["Post-event Control", "After the expo", "Review enquiry data and follow up quickly so the booth supports enrolment outcomes."]].map(([label, title, text]) => card(`<p class="label">${label}</p><h3 class="mt">${title}</h3><p class="mt">${text}</p>`)).join("")}</div>`;
}

function challengesPage() {
  const items = [["Pre-event Challenge", "Short preparation timeframe", "Delays can affect booth design, marketing content, budget confirmation and resource booking.", "Use a clear schedule, assign owners and complete high-risk tasks first."], ["Pre-event Challenge", "Incomplete preparation", "Missing brochures, signage, QR codes or demo materials can make the booth look unprofessional.", "Prepare a checklist for booth items, course materials, staff briefing, WHS controls and QR testing."], ["On-site Challenge", "Staffing and role confusion", "If staff do not know their role, visitors may not receive consistent information.", "Create a roster and assign clear zones: greeting, demo, course information and QR support."], ["On-site Challenge", "Crowd flow and congestion", "A small booth can become crowded quickly, especially during demonstrations.", "Keep furniture minimal, use open access and guide visitors in one direction."], ["Safety Challenge", "WHS and demonstration risk", "Loose cables, crowded walkways or unsafe nursing props could create safety risks.", "Use low-risk demo props only, no sharps, taped cables and daily safety checks."], ["Finance Challenge", "Budget increase or extra cost", "Extra printing, delivery, equipment or replacement items can increase event costs.", "Keep contingency, confirm prices early, compare suppliers and prioritise high-value resources."], ["Engagement Challenge", "Low-quality visitor traffic", "Giveaways may attract visitors who are not genuinely interested in nursing.", "Use giveaways only after conversation or QR enquiry and focus on genuine healthcare interest."], ["Information Challenge", "Unclear course information", "Visitors may misunderstand entry requirements, course duration, placement or pathways.", "Use official course information and direct detailed questions to Stanley College advisers."], ["Post-event Challenge", "Weak follow-up", "Enquiries lose value if they are not followed up quickly.", "Export enquiry data, assign follow-up responsibility and contact interested visitors within 48 hours."]];
  return `${speaker("Presented by all members - each person explains one challenge linked to their role")}${pageTitle("Challenges and Solutions", "This section shows that the event proposal considers real delivery risks across pre-event preparation, on-site management, safety, staffing, budget control and post-event follow-up.")}
    <div class="grid grid-2">${card(`<p class="label">Critical Risk View</p><h2 class="mt">The biggest risk is not only event day</h2><p class="mt">Many event problems happen before or after the event: unclear roles, late resources, weak staff preparation, poor WHS checking, or no follow-up.</p>`, "soft")}${card(`<p class="label">Solution Approach</p><h2 class="mt">Prevent first, fix quickly, review after</h2><p class="mt">Prevent predictable problems early, respond quickly during the expo and review outcomes after the event.</p>`)}</div>
    <div class="grid grid-3 mt">${items.map(([type, title, issue, solution]) => card(`<p class="label">${type}</p><h3 class="mt">${title}</h3><p class="mt"><strong>Issue:</strong> ${issue}</p><p class="mt"><strong>Solution:</strong> ${solution}</p>`)).join("")}</div>`;
}

function conclusionPage() {
  return `${speaker("Presented by Ugyen Dema - Project Manager")}${pageTitle("Conclusion and Strategic Value", "This proposal presents a focused 3m x 3m Diploma of Nursing booth that is realistic, visitor-centred and aligned with Stanley College's goal of turning expo attention into meaningful course enquiries.")}
    <div class="grid grid-2">${card(`<p class="label">Strategic Alignment</p><h2 class="mt">The proposal answers the client brief</h2><p class="mt">Stanley College needs more than a physical booth. It needs a planned experience that builds brand awareness, creates trust, showcases the Diploma of Nursing and collects future enrolment leads.</p>`, "soft")}${card(`<p class="label">Critical Success Measure</p><h2 class="mt">Success is quality, not only quantity</h2><p class="mt">A busy booth does not automatically mean success. The stronger measure is whether visitors understand the course, ask questions, scan the QR code and can be followed up.</p>`)}</div>
    <div class="grid grid-4 mt">${[["Event Plan", "Clear Foundation", "The 5 W's clarify the purpose, audience, location, timing and reason for the event."], ["Marketing", "Focused Positioning", "The 5 C's keep the message simple: one course, one clear pathway and one strong call-to-action."], ["Experience", "Memorable Journey", "The 5 E's turn the booth into a visitor journey from attention to follow-up."], ["Operations", "Safe Delivery", "The operations plan supports a safe, accessible and professional booth with WHS checks."]].map(([label, title, text]) => card(`<p class="label">${label}</p><h3 class="mt">${title}</h3><p class="mt">${text}</p>`)).join("")}</div>
    <div class="grid grid-3 mt">${[["Strength", "Realistic and controlled", "A 3m x 3m booth is limited in space, so the plan avoids overcrowding and focuses on clear signage, a simple demo and QR enquiry collection."], ["Limitation", "Limited time with visitors", "Expo visitors may only stop briefly. This risk is managed through a short staff pitch, visible course message and easy QR enquiry step."], ["Value", "Follow-up creates return", "The real value comes after the event. Enquiry data should be followed up quickly so visitor interest can become course consultation."]].map(([label, title, text]) => card(`<p class="label">${label}</p><h3 class="mt">${title}</h3><p class="mt">${text}</p>`)).join("")}</div>
    ${card(`<p class="label">Final Recommendation</p><h2 class="mt">Approve the focused nursing pathway booth concept.</h2><p class="mt">This concept is suitable because it is achievable within a controlled budget, easy for visitors to understand, safe to deliver and directly linked to Stanley College's goal of generating quality enquiries for the Diploma of Nursing.</p>`, "soft mt")}
    ${card(`<p class="label">Closing Statement</p><h2 class="mt">Nursing is more than a course. It is a career with purpose.</h2><p class="mt">Our proposed booth helps visitors explore that pathway through clear information, human interaction, safe engagement and structured follow-up.</p>`, "mt")}`;
}

function questionsPage() {
  const search = state.questionInput.trim().toLowerCase();
  const filtered = faqItems.filter(([category, question, answer]) => !search || `${category} ${question} ${answer}`.toLowerCase().includes(search));
  return `<div class="center">${pageTitle("Frequently Asked Questions", "Find answers about the Diploma of Nursing, the expo booth experience, and how to connect with Stanley College.", "Help Centre")}</div>
    ${card(`<div class="search-box"><label class="label" for="qa-search">Search FAQs</label><input id="qa-search" type="text" value="${state.questionInput}" placeholder="Search nursing course, booth activities, enquiries, safety, location..."></div><div class="topic-buttons">${["Course", "Booth Experience", "Event Location", "Student Support"].map((keyword) => `<button onclick="setQuestion('${keyword}')">${keyword}</button>`).join("")}<button class="secondary" onclick="setQuestion('')">Show all</button></div>`, "soft")}
    <div class="grid grid-3 mt">${filtered.length ? filtered.map(([category, question, answer, linkLabel, linkUrl]) => card(`<p class="label">${category}</p><h3 class="mt">${question}</h3><p class="mt">${answer}</p><a class="faq-link" href="${linkUrl}" target="_blank" rel="noreferrer">${linkLabel}</a>`)).join("") : card(`<p class="label">No result found</p><h3 class="mt">We could not find a matching answer.</h3><p class="mt">Please visit the official course page or speak with the Stanley College team at the booth for more support.</p>`)}</div>
    <div class="grid grid-3 mt">${researchLinks.slice(2).map(([label, url]) => `<a class="card" style="text-decoration:none;" href="${url}" target="_blank" rel="noreferrer"><p class="label">Helpful Link</p><h3 class="mt">${label}</h3><p class="mt">Open external information in a new tab.</p></a>`).join("")}</div>`;
}

function renderContent() {
  const pages = { home: homePage, contents: contentsPage, team: teamPage, brief: briefPage, marketing: marketingPage, course: coursePage, experience: experiencePage, operations: operationsPage, budget: budgetPage, schedule: schedulePage, challenges: challengesPage, conclusion: conclusionPage, questions: questionsPage };
  return (pages[state.activeId] || (() => "<div>Page not found.</div>"))();
}

function renderNav(targetClass) {
  return sections.map((section) => `<button class="${state.activeId === section.id ? "active" : ""}" onclick="setActive('${section.id}')">${section.label}</button>`).join("");
}

function render() {
  const index = activeIndex();
  const current = activeSection();
  document.getElementById("app").innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <div class="logo-group"><img src="${stanleyLogoUrl}" alt="Stanley College logo"><div><div class="logo-title">Stanley Nursing Expo Proposal</div><div class="logo-subtitle">Website-style presentation</div></div></div>
        <nav class="nav">${renderNav("nav")}</nav>
      </div>
      <div class="mobile-nav">${renderNav("mobile-nav")}</div>
    </header>
    <main class="main">
      <div class="page-meta"><div><div class="page-label">${current.label}</div><div class="presenter">Presenter: ${current.speaker} - ${current.role}</div></div><div class="counter">${index + 1} / ${sections.length}</div></div>
      <section class="content-shell">${renderContent()}</section>
      <div class="footer-nav"><button onclick="goBack()" ${index === 0 ? "disabled" : ""}>Previous Topic</button><div class="dots">${sections.map((section) => `<button class="dot ${state.activeId === section.id ? "active" : ""}" aria-label="${section.label}" onclick="setActive('${section.id}')"></button>`).join("")}</div><button class="next" onclick="goNext()" ${index === sections.length - 1 ? "disabled" : ""}>Next Topic</button></div>
    </main>`;
  const searchInput = document.getElementById("qa-search");
  if (searchInput) {
    searchInput.focus();
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    searchInput.addEventListener("input", (event) => {
      state.questionInput = event.target.value;
      render();
    });
  }
}

function setQuestion(value) {
  state.questionInput = value;
  render();
}

render();
