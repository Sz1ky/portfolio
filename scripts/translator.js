const langModal = document.getElementById("languageModal");
const langBtn = document.getElementById("languageBtn");
const englishBtn = document.getElementById("englishBtn");
const hungarianBtn = document.getElementById("hungarianBtn");

// dictionary
const translations = {
  en: {
    home: "Home",
    about: "About me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    introduction: "Hello, I’m Patrik Szikora",
    logo: "PSz",
    description:
      "As a frontend developer, I’m passionate about building elegant and user-friendly web experiences.",
    viewWorkBtn: "View My Work ",
    aboutTitle: "About me",
    aboutParagraph1:
      "I’m a passionate web developer focused on creating smooth, accessible, and modern applications. I enjoy working with Angular and React, and I’m always experimenting with new technologies.",
    aboutParagraph2:
      "My goal is to combine creativity with clean, efficient code to deliver user-friendly experiences. When I’m not coding, I’m exploring design trends, learning new tools, or contributing to open-source projects.",
    skillsTitle: "Skills",
    cardTitle1: "Frameworks",
    cardTitle2: "Tools & Backend",
    cardTitle3: "AI Tools",
    toolsCard: "Firebase, Git, REST APIs",
    projectsTitle: "Projects",
    demo1: "Live Demo",
    demo2: "Live Demo",
    contactTitle: "Get In Touch",
    contactParagraph:
      "If you’d like to work together or just say hello, feel free to reach out!",
    sayHiBtn: "Say Hi 👋",
    footerParagraph:
      "© 2025 Patrik Szikora · Built with love using HTML, CSS, and JavaScript",
    contactTitle2: "Get in touch with me!",
  },
  hu: {
    home: "Kezdőlap",
    about: "Rólam",
    skills: "Készségek",
    projects: "Projektek",
    contact: "Kapcsolat",
    introduction: "Üdv, Szikora Patrik vagyok",
    logo: "SzP",
    description:
      "Frontend fejlesztőként szenvedélyem az elegáns és felhasználóbarát webes élmények építése.",
    viewWorkBtn: "Munkáim megtekintése",
    aboutTitle: "Rólam",
    aboutParagraph1:
      "Szenvedélyes webfejlesztő vagyok, aki a letisztult, hozzáférhető és modern alkalmazások létrehozására összpontosít. Szeretek Angular-ral és React-tel dolgozni, és mindig kísérletezem új technológiákkal.",
    aboutParagraph2:
      "Célom, hogy a kreativitást tiszta és hatékony kóddal ötvözzem, és ezzel felhasználóbarát élményeket hozzak létre. Amikor épp nem kódolok, designtrendeket fedezek fel, új eszközöket tanulok, vagy nyílt forráskódú projektekhez járulok hozzá.",
    skillsTitle: "Készségek",
    cardTitle1: "Keretrendszerek",
    cardTitle2: "Eszközök & Backend",
    cardTitle3: "AI eszközök",
    toolsCard: "Firebase, Git, REST API-ok",
    projectsTitle: "Projektek",
    demo1: "Élő Demo",
    demo2: "Élő Demo",
    contactTitle: "Lépj velem kapcsolatba",
    contactParagraph:
      "Ha szeretnél együtt dolgozni, vagy csak köszönnél, bátran keress meg!",
    sayHiBtn: "Írj rám 👋",
    footerParagraph:
      "© 2025 Szikora Patrik · HTML-lel, CSS-sel és JavaScript-tel – egy csipet szeretettel fűszerezve.",
    contactTitle2: "Lépj velem kapcsolatba",
  },
};

// show modal after site loads
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    langModal.classList.add("show");
  }, 300); // small delay for smoother fade
});

function setLanguage(lang) {
  const t = translations[lang];
  document.querySelector('a[href="#home"]').textContent = t.home;
  document.querySelector('a[href="#about"]').textContent = t.about;
  document.querySelector('a[href="#skills"]').textContent = t.skills;
  document.querySelector('a[href="#projects"]').textContent = t.projects;
  document.querySelector('a[href="#contact"]').textContent = t.contact;
  let highlightedIntro;

  if (lang === "en") {
    highlightedIntro = t.introduction.replace(
      "Patrik Szikora",
      '<span class="accent">Patrik Szikora</span>'
    );
  } else if (lang === "hu") {
    highlightedIntro = t.introduction.replace(
      "Szikora Patrik",
      '<span class="accent">Szikora Patrik</span>'
    );
  }
  document.querySelector("#introduction").innerHTML = highlightedIntro;
  document.querySelector("#logo").textContent = t.logo;
  document.querySelector("#description").textContent = t.description;
  document.querySelector("#viewWorkBtn").textContent = t.viewWorkBtn;
  document.querySelector("#aboutTitle").textContent = t.aboutTitle;
  document.querySelector("#aboutParagraph1").textContent = t.aboutParagraph1;
  document.querySelector("#aboutParagraph2").textContent = t.aboutParagraph2;
  document.querySelector("#skillsTitle").textContent = t.skillsTitle;
  document.querySelector("#cardTitle1").textContent = t.cardTitle1;
  document.querySelector("#cardTitle2").textContent = t.cardTitle2;
  document.querySelector("#cardTitle3").textContent = t.cardTitle3;
  document.querySelector("#toolsCard").textContent = t.toolsCard;
  document.querySelector("#projectsTitle").textContent = t.projectsTitle;
  document.querySelector("#demo1").textContent = t.demo1;
  document.querySelector("#demo2").textContent = t.demo2;
  document.querySelector("#contactTitle").textContent = t.contactTitle;
  document.querySelector("#contactParagraph").textContent = t.contactParagraph;
  document.querySelector("#sayHiBtn").textContent = t.sayHiBtn;
  document.querySelector("#footerParagraph").textContent = t.footerParagraph;
  document.querySelector("#contactTitle2").textContent = t.contactTitle2;
}

englishBtn.addEventListener("click", () => {
  setLanguage("en");
  langModal.classList.remove("show");
});

hungarianBtn.addEventListener("click", () => {
  setLanguage("hu");
  langModal.classList.remove("show");
});

langBtn.addEventListener("click", () => {
  langModal.classList.add("show");
});

window.addEventListener("click", (e) => {
  if (e.target === langModal) {
    langModal.classList.remove("show");
  }
});
