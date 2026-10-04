"use client";

import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
  { label: "Hobbies", id: "hobbies" },
  { label: "Languages", id: "languages" },
  { label: "Japan Career", id: "japan-career" },
];

const skillGroups = {
  Programming: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "Swift", "HTML", "CSS", "SQL", "MATLAB"],
  "AI / ML": ["Machine learning", "Data processing", "Model development", "Explainable AI", "AI-assisted applications", "Data science"],
  Cybersecurity: ["Phishing detection", "Threat intelligence", "Security analysis", "URL intelligence", "Cyber risk analysis"],
  "Web engineering": ["Next.js", "React", "Node.js", "HTML", "CSS", "REST APIs"],
  Tools: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Azure", "pandas", "NumPy", "Google Colab", "deck.gl"],
};

type SkillGroup = keyof typeof skillGroups;

const projects = [
  {
    number: "01",
    id: "cybershield",
    name: "CYBERSHIELD",
    category: "Cybersecurity × Machine Learning",
    status: "Status not specified",
    description:
      "A phishing detection and cyber threat intelligence platform that analyzes URLs, extracts security-relevant features, and classifies potentially malicious links.",
    flow: ["URL input", "URL intelligence", "Feature extraction", "ML detection", "Explainable result"],
  },
  {
    number: "02",
    id: "masteryflow",
    name: "MasteryFlow",
    category: "AI × Intelligent education",
    status: "Prototype",
    description:
      "An adaptive learning prototype that models student mastery and recommends personalized learning actions from evidence in learning interactions.",
    flow: ["Concept graph", "Evidence", "Mastery estimate", "Recommendation", "Learning path"],
  },
  {
    number: "03",
    id: "coolcare",
    name: "CoolCare",
    category: "Full-stack product",
    status: "Platform concept",
    description:
      "A digital service-operations platform concept for AC and RO care, centered on booking, technician tracking, maintenance plans, and service history.",
    flow: ["Customer", "Booking", "Technician", "Service", "History"],
  },
  {
    number: "04",
    id: "kizunashield",
    name: "KizunaShield AI",
    category: "AI × Cyber resilience × Disaster response",
    status: "Concept",
    description:
      "Inspired by Japan’s earthquake, tsunami, typhoon, and aging-community challenges, KizunaShield AI is a concept for resilient emergency communication when networks are strained and trustworthy guidance matters.",
    flow: ["Signals", "AI intelligence", "Threat checks", "Emergency map", "Guidance"],
  },
];

const buildEntries = [
  {
    event: "Smart India Hackathon",
    format: "Internal hackathon",
    project: "CYBERSHIELD",
    problem: "Phishing links and cyber threats need to be identified from security-relevant URL signals.",
    built: "A phishing detection and threat-intelligence platform concept that analyzes URLs, extracts features, and classifies potentially malicious links.",
    technicalFocus: ["Cybersecurity", "Machine learning", "URL analysis"],
    role: "Not specified",
    recognition: "Internal finalist · Certificates and memento",
  },
  {
    event: "YUVA Megathon",
    format: "Hackathon",
    project: "MasteryFlow",
    problem: "Learners need next steps that reflect their demonstrated understanding, not a one-size-fits-all sequence.",
    built: "An adaptive education prototype spanning five main domains, integrating ML to model student mastery and recommend personalized learning actions from interaction evidence.",
    technicalFocus: ["Education technology", "Integrated ML", "Adaptive learning"],
    role: "Not specified",
    recognition: "1st place",
  },
  {
    event: "Tensor 2.0",
    format: "Event / project",
    project: "Project details not provided",
    problem: "Not provided",
    built: "The event name was supplied, but a related problem statement or build description was not.",
    technicalFocus: [],
    role: "Not specified",
    recognition: "Not specified",
  },
];

function SectionHeading({
  index,
  eyebrow,
  title,
  id,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  id: string;
  intro?: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow"><span>{index}</span> / {eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <ol className="architecture-flow" aria-label="Concept flow">
      {steps.map((step) => <li key={step}>{step}</li>)}
    </ol>
  );
}

function ProjectDetails({ id }: { id: string }) {
  if (id === "cybershield") {
    return (
      <div className="project-detail-grid">
        <div>
          <p className="detail-label">Classification states</p>
          <div className="classification-list" aria-label="Possible classification states">
            <span>Safe</span><span>Suspicious</span><span>Phishing</span>
          </div>
        </div>
        <p>Each result is intended to include a clear explanation, not just a label.</p>
      </div>
    );
  }

  if (id === "masteryflow") {
    return <p className="project-detail-copy">The stated direction connects learning concepts and interaction evidence to a mastery estimate, then uses that estimate to suggest a next step.</p>;
  }

  if (id === "coolcare") {
    return <p className="project-detail-copy">The concept brings service requests, technician progress, maintenance plans, and customer history into one service journey.</p>;
  }

  return (
    <div className="kizuna-details">
      <p className="project-detail-copy">The proposal focuses on what happens after an alert: keeping information useful when networks are strained and people need trustworthy guidance.</p>
      <ul>
        <li>Combine sensor, weather, infrastructure, and community signals.</li>
        <li>Identify suspicious emergency messages and unusual activity.</li>
        <li>Present affected areas, safer routes, and emergency facilities.</li>
        <li>Offer simplified, multilingual, voice-friendly guidance and priority assistance requests.</li>
        <li>Ground location-aware emergency guidance in verified information.</li>
      </ul>
      <p className="detail-caveat">Concept proposal; these capabilities are not presented as a deployed system.</p>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card project-${project.id}`} data-reveal>
      <div className="project-card-top">
        <span className="project-number">{project.number} <span>/ 04</span></span>
        <span className="project-status">{project.status}</span>
      </div>
      <p className="project-category">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-architecture">
        <p className="detail-label">System flow</p>
        <ArchitectureFlow steps={project.flow} />
      </div>
      <details className="project-disclosure">
        <summary>Explore the concept <span aria-hidden="true">+</span></summary>
        <ProjectDetails id={project.id} />
      </details>
    </article>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillGroup>("Programming");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.classList.add("has-js");

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
      if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
    }, { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.15, 0.5] });

    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      document.documentElement.classList.remove("has-js");
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Kishore M, home">
            KISHORE <span>M</span>
          </a>

          <nav className={`nav-links${menuOpen ? " is-open" : ""}`} id="mobile-navigation" aria-label="Main navigation">
            {navigation.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="mailto:kishoretnj2008@gmail.com">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> PURSUING B.TECH CSE <i>•</i> CYBERSECURITY × AI/ML BUILDER</p>
            <h1 id="hero-title">Building intelligent systems for a more secure <span>digital world.</span></h1>
            <p className="hero-role">Pursuing B.Tech CSE <span>|</span> Cybersecurity × AI/ML Builder</p>
            <p className="hero-description">
              I’m Kishore M, pursuing a B.Tech in Computer Science Engineering and exploring the intersection of artificial intelligence, machine learning, and cybersecurity through real-world projects and hackathons.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="mailto:kishoretnj2008@gmail.com">Email Kishore <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-status"><span className="status-pulse" /> Currently building <i>·</i> learning <i>·</i> experimenting</p>
          </div>

          <div className="focus-visual" data-reveal aria-label="Cybersecurity and artificial intelligence are connected areas of focus">
            <div className="visual-topline"><span>FOCUS SYSTEM / 01</span><span>ACTIVE INTERESTS</span></div>
            <div className="system-grid" aria-hidden="true" />
            <div className="focus-node focus-node-ai"><span className="node-index">01</span><span className="node-title">AI <i>/</i> ML</span><span className="node-caption">INTELLIGENT SYSTEMS</span></div>
            <div className="focus-connector" aria-hidden="true"><span>×</span></div>
            <div className="focus-node focus-node-security"><span className="node-index">02</span><span className="node-title">Cybersecurity</span><span className="node-caption">TRUSTED COMPUTING</span></div>
            <div className="visual-footline"><span>RESEARCH</span><span>BUILD</span><span>SECURE</span></div>
          </div>
          <a className="scroll-cue" href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
        </section>

        <section className="content-section" id="about" aria-labelledby="about-heading">
          <div className="section-wrap">
            <SectionHeading id="about-heading" index="01" eyebrow="About" title="Beyond the code." intro="I build intelligent systems at the intersection of cybersecurity and artificial intelligence." />
            <div className="about-layout">
              <div className="about-copy" data-reveal>
                <p>I’m pursuing a B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology, Tiruchirappalli. I’m interested in cybersecurity, artificial intelligence, machine learning, software engineering, and building practical technology.</p>
                <p>My long-term direction is to bring these fields together: using AI/ML to help make digital systems more secure, understandable, and useful in the real world.</p>
              </div>
              <div className="focus-map" data-reveal>
                <div className="focus-map-label">A CONNECTED ENGINEERING VIEW</div>
                <ol>
                  <li>Cybersecurity</li>
                  <li>AI / ML</li>
                  <li>Software engineering</li>
                  <li>Real-world systems</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-band" id="skills" aria-labelledby="skills-heading">
          <div className="section-wrap">
            <SectionHeading id="skills-heading" index="02" eyebrow="Skill architecture" title="A toolkit in motion." intro="Languages, tools, and technical areas from my current learning and project work. No proficiency scores implied." />
            <div className="skills-layout" data-reveal>
              <div className="skill-selector" role="group" aria-label="Skill categories">
                {(Object.keys(skillGroups) as SkillGroup[]).map((group, index) => (
                  <button
                    key={group}
                    type="button"
                    className={`skill-option${selectedSkill === group ? " is-selected" : ""}`}
                    aria-pressed={selectedSkill === group}
                    onClick={() => setSelectedSkill(group)}
                  >
                    <span>0{index + 1}</span>{group}<span className="skill-option-arrow" aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
              <div className="skill-panel" aria-live="polite">
                <div className="skill-panel-top"><span>FOCUS AREA</span><span>0{(Object.keys(skillGroups) as SkillGroup[]).indexOf(selectedSkill) + 1} / 05</span></div>
                <h3>{selectedSkill}</h3>
                <ul className="skill-tags">
                  {skillGroups[selectedSkill].map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
                <p className="skill-footnote">Current areas of practice and exploration.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="current-focus" aria-labelledby="current-focus-heading">
          <div className="section-wrap current-focus-layout">
            <div data-reveal>
              <SectionHeading id="current-focus-heading" index="03" eyebrow="Current focus" title="Where I’m investing curiosity." intro="Areas I’m currently exploring, without implying a proficiency score." />
              <p className="long-direction"><span>LONG-TERM DIRECTION</span>AI-powered cybersecurity systems.</p>
            </div>
            <ul className="focus-list" data-reveal>
              {["Cybersecurity", "AI / ML", "Full-stack engineering", "Data science"].map((area, index) => (
                <li key={area}><span>0{index + 1}</span><strong>{area}</strong><span className="focus-list-mark" aria-hidden="true">↗</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section section-band projects-section" id="projects" aria-labelledby="projects-heading">
          <div className="section-wrap">
            <SectionHeading id="projects-heading" index="04" eyebrow="Selected work" title="Systems, ideas, and the paths between." intro="Project outlines and concepts, with their current status kept explicit." />
            <div className="project-grid">
              {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </div>
        </section>

        <section className="content-section experience-section" id="experience" aria-labelledby="experience-heading">
          <div className="section-wrap">
            <SectionHeading id="experience-heading" index="05" eyebrow="Hackathon / build timeline" title="Built under pressure and presence." intro="Hackathon work, project context, and recognition shared to date." />
            <ol className="build-timeline">
              {buildEntries.map((entry, index) => (
                <li className="timeline-entry" key={entry.event} data-reveal>
                  <span className="timeline-marker" aria-hidden="true">0{index + 1}</span>
                  <article className="timeline-card">
                    <div className="timeline-topline">
                      <span className="timeline-event-type">{entry.format}</span>
                      <span className="timeline-recognition">{entry.recognition}</span>
                    </div>
                    <h3>{entry.event}</h3>
                    <p className="timeline-project">Project <span>/</span> {entry.project}</p>
                    <div className="timeline-details">
                      <div><h4>Problem</h4><p>{entry.problem}</p></div>
                      <div><h4>What I built</h4><p>{entry.built}</p></div>
                    </div>
                    <div className="timeline-meta">
                      <div><h4>Technical focus</h4>{entry.technicalFocus.length ? <ul>{entry.technicalFocus.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Not specified</p>}</div>
                      <div><h4>Role</h4><p>{entry.role}</p></div>
                      <div><h4>Recognition / status</h4><p>{entry.recognition}</p></div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="content-section section-band" id="how-i-build" aria-labelledby="how-heading">
          <div className="section-wrap">
            <SectionHeading id="how-heading" index="06" eyebrow="Engineering mindset" title="How I build." intro="A practical loop for turning an open question into a better system." />
            <ol className="build-loop">
              {[
                ["01", "Learn", "Understand the problem and the technology."],
                ["02", "Build", "Turn ideas into working prototypes."],
                ["03", "Break", "Test assumptions, find weaknesses, and iterate."],
                ["04", "Improve", "Refine the system with evidence and feedback."],
              ].map(([number, title, description]) => (
                <li key={number} data-reveal><span className="loop-number">{number}</span><h3>{title}</h3><p>{description}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="content-section" id="education" aria-labelledby="education-heading">
          <div className="section-wrap">
            <SectionHeading id="education-heading" index="07" eyebrow="Education" title="Building the foundations." />
            <article className="education-entry" data-reveal>
              <span className="education-kicker">B.TECH / CSE</span>
              <div><h3>Computer Science and Engineering</h3><p>SRM Institute of Science and Technology</p><p>Tiruchirappalli</p></div>
              <span className="education-state">Pursuing B.Tech CSE · Year 02</span>
            </article>
          </div>
        </section>

        <section className="content-section section-band" id="achievements" aria-labelledby="achievements-heading">
          <div className="section-wrap">
            <SectionHeading id="achievements-heading" index="08" eyebrow="Achievements & credentials" title="Recognition, clearly recorded." intro="Hackathon results and recognition shared by Kishore." />
            <div className="achievement-grid" data-reveal>
              <article><span>01 / YUVA MEGATHON</span><h3>1st place</h3><p>MasteryFlow · adaptive learning prototype.</p></article>
              <article><span>02 / SMART INDIA HACKATHON</span><h3>Internal finalist</h3><p>CYBERSHIELD · SIH internal hackathon.</p></article>
              <article><span>03 / RECOGNITION</span><h3>Certificates & memento</h3><p>Recognition received at the SIH internal hackathon.</p></article>
            </div>
          </div>
        </section>

        <section className="content-section" aria-label="Personal details">
          <div className="section-wrap personal-grid">
            <section id="hobbies" aria-labelledby="hobbies-heading" data-reveal>
              <p className="eyebrow">09 / Beyond engineering</p><h2 id="hobbies-heading">Hobbies</h2>
              <ul className="personal-tags"><li>Playing keyboard</li><li>Drawing</li><li>Script writing</li><li>Problem chasing</li></ul>
            </section>
            <section id="languages" aria-labelledby="languages-heading" data-reveal>
              <p className="eyebrow">10 / Communication</p><h2 id="languages-heading">Languages</h2>
              <ul className="personal-tags language-tags"><li>Tamil</li><li>English</li><li>Malayalam</li><li>Hindi</li><li className="japanese-tag">Japanese <span>JLPT N5 certified · Preparing for N4</span></li></ul>
            </section>
          </div>
        </section>

        <section className="japan-career-section" id="japan-career" aria-labelledby="japan-career-heading">
          <div className="section-wrap">
            <div className="japan-heading" data-reveal>
              <p className="eyebrow"><span className="japanese-notation">日本語 · 技術 · 未来</span> <span>11 / LANGUAGE & CAREER</span></p>
              <h2 id="japan-career-heading">Japanese Language<br /><span>& Japan Career</span></h2>
              <p className="japan-statement">Japanese Language Learner <span>·</span> JLPT N5 Certified <span>·</span> Currently Preparing for JLPT N4</p>
              <p className="japan-description">I have completed JLPT N5-level Japanese and am currently progressing toward N4. I am developing my Japanese communication, vocabulary, kanji, grammar, reading, listening, and technical terminology skills with the long-term goal of working with Japanese technology companies and exploring software engineering, AI/ML, and cybersecurity opportunities connected to Japan.</p>
            </div>

            <div className="japan-main-grid">
              <div className="jlpt-panel" data-reveal>
                <div className="japan-panel-heading"><div><p className="eyebrow">LANGUAGE PROGRESSION</p><h3>One step at a time.</h3></div><span className="japanese-stamp" lang="ja">日本語</span></div>
                <ol className="jlpt-path" aria-label="JLPT progression from N5 to professional Japanese">
                  <li className="jlpt-complete"><span className="jlpt-level">N5</span><span className="jlpt-state">✓ Completed</span></li>
                  <li className="jlpt-current"><span className="jlpt-level">N4</span><span className="jlpt-state">Preparing</span></li>
                  <li><span className="jlpt-level">N3</span><span className="jlpt-state">Next</span></li>
                  <li><span className="jlpt-level">N2</span><span className="jlpt-state">Future goal</span></li>
                </ol>
                <div className="professional-japanese"><span>LONG-TERM DIRECTION</span><span>Professional Japanese <i>→</i></span></div>
              </div>

              <aside className="japan-career-card" data-reveal>
                <p className="eyebrow">CAREER FOCUS</p>
                <span className="japan-kanji" lang="ja" aria-hidden="true">技術</span>
                <h3>Japan <span>×</span> Technology</h3>
                <p>I aim to combine my technical background in Computer Science with Japanese language skills to explore future opportunities involving Japanese technology companies, software development, AI/ML, cybersecurity, research, internships, and international technology collaboration.</p>
                <span className="career-badge">CSE <i>×</i> AI/ML <i>×</i> CYBERSECURITY <i>×</i> JAPANESE</span>
              </aside>
            </div>

            <div className="japan-support-grid">
              <section className="japan-support" aria-labelledby="why-japanese-heading" data-reveal>
                <p className="eyebrow">WHY JAPANESE?</p>
                <h3 id="why-japanese-heading">A language for connection.</h3>
                <ul>
                  <li>Interest in Japan’s technology and engineering ecosystem.</li>
                  <li>Goal of communicating with Japanese teams and professionals.</li>
                  <li>Interest in Japanese software, AI, robotics, cybersecurity, and emerging technologies.</li>
                  <li>Long-term goal of exploring Japan-related internships and career opportunities.</li>
                </ul>
              </section>
              <section className="japan-support" aria-labelledby="current-learning-heading" data-reveal>
                <p className="eyebrow">CURRENT LEARNING</p>
                <h3 id="current-learning-heading">Language, built layer by layer.</h3>
                <ul className="japanese-learning-tags">
                  <li>Grammar</li><li>Vocabulary</li><li>Kanji</li><li>Reading</li><li>Listening</li><li>Conversation</li><li>Technical Japanese</li>
                </ul>
              </section>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="section-wrap contact-layout">
            <div data-reveal><p className="eyebrow">12 / Contact</p><h2 id="contact-heading">Have an idea<br />worth building?</h2></div>
            <div className="contact-copy" data-reveal>
              <p>I’m interested in projects, hackathons, research, and opportunities involving AI, cybersecurity, and software engineering.</p>
              <a className="contact-link" href="mailto:kishoretnj2008@gmail.com">kishoretnj2008@gmail.com <span aria-hidden="true">↗</span></a>
              <a className="contact-link" href="tel:9025003411">9025003411 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="footer-brand" href="#home">KISHORE <span>M</span></a>
          <p>CSE <i>•</i> CYBERSECURITY × AI/ML</p>
          <p>Building. Learning. Securing.</p>
          <span className="footer-year" suppressHydrationWarning>© {currentYear}</span>
        </div>
      </footer>
    </div>
  );
}