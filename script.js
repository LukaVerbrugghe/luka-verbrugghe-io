const translations = {
  en: {
    name: 'Luka Verbrugghe',
    subtitle: 'Student Applied Computer Sciences at Howest University of Applied Sciences',
    resumeTitle: 'Resume',
    resumeIntro: 'Motivated student with a passion for software development and problem solving.',
    resumeStudy: 'Applied Computer Sciences — Howest University of Applied Sciences',
    resumeFocus: 'Focus: web development, APIs, and clean software architecture',
    resumeGoal: 'Goal: build reliable software with a great user experience',
    projectsTitle: 'Projects',
    projectOneTitle: 'Student project: Task tracker',
    projectOneDesc: 'A simple full-stack app to manage tasks and deadlines.',
    projectTwoTitle: 'Student project: API integration',
    projectTwoDesc: 'A web app that combines data from multiple public APIs.',
    footer: 'Built by Luka Verbrugghe.'
  },
  nl: {
    name: 'Luka Verbrugghe',
    subtitle: 'Student Toegepaste Informatica aan Howest Hogeschool',
    resumeTitle: 'CV',
    resumeIntro: 'Gemotiveerde student met een passie voor softwareontwikkeling en probleemoplossing.',
    resumeStudy: 'Toegepaste Informatica — Howest Hogeschool',
    resumeFocus: 'Focus: webontwikkeling, APIs en duidelijke softwarearchitectuur',
    resumeGoal: 'Doel: betrouwbare software bouwen met een sterke gebruikservaring',
    projectsTitle: "Projecten",
    projectOneTitle: 'Studentenproject: Taakbeheerder',
    projectOneDesc: "Een eenvoudige full-stack app om taken en deadlines te beheren.",
    projectTwoTitle: 'Studentenproject: API-integratie',
    projectTwoDesc: "Een webapp die data combineert uit meerdere publieke APIs.",
    footer: 'Gemaakt door Luka Verbrugghe.'
  }
};

const html = document.documentElement;
const langButtons = document.querySelectorAll('[data-lang]');
const themeToggle = document.getElementById('theme-toggle');

function applyLanguage(lang) {
  const selected = translations[lang] ? lang : 'en';
  html.lang = selected;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[selected][key]) {
      element.textContent = translations[selected][key];
    }
  });
  langButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === selected));
  });
  localStorage.setItem('lang', selected);
}

function applyTheme(theme) {
  const selected = theme === 'dark' ? 'dark' : 'light';
  html.dataset.theme = selected;
  themeToggle.textContent = selected === 'dark' ? '🌙' : '☀️';
  themeToggle.setAttribute('aria-label', selected === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  localStorage.setItem('theme', selected);
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

themeToggle.addEventListener('click', () => {
  applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark');
});

applyLanguage(localStorage.getItem('lang') || 'en');
applyTheme(localStorage.getItem('theme') || 'light');
