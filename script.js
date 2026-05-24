const translations = {
  en: {
    name: 'Luka Verbrugghe',
    subtitle: 'Student Applied Computer Sciences at Howest University of Applied Sciences',
    resumeTitle: 'Resume',
    resumeIntro: 'Motivated student with a passion for software development and problem solving.',
    resumeStudy: 'Applied Computer Sciences at Howest University of Applied Sciences',
    resumeFocus: 'Focus: Software architecture and engineering',
    resumeGoal: 'Goal: build reliable software with a great user experience',
    projectsTitle: 'Projects',
    projectOneTitle: 'Student project: Fitness tracker',
    projectOneDesc: 'A .NET MAUI multi-platform application with user authentication and databases.',
    projectTwoTitle: 'Professional project: Property Valuation Software for Real Estate Agent',
    projectTwoDesc: 'A desktop app to help estimate property value and simplify document creation.',
    projectTodoTitle: 'Work in progress',
    projectTodoDesc: 'Hang on tight! I\'m working hard on the next projects.',
    footer: 'Made with ♥ by Luka Verbrugghe.'
  },
  nl: {
    name: 'Luka Verbrugghe',
    subtitle: 'Student Toegepaste Informatica aan Howest Hogeschool',
    resumeTitle: 'CV',
    resumeIntro: 'Gemotiveerde student met een passie voor softwareontwikkeling en probleemoplossing.',
    resumeStudy: 'Toegepaste Informatica aan Howest Hogeschool',
    resumeFocus: 'Focus: software architecture en engineering',
    resumeGoal: 'Doel: betrouwbare software bouwen met een sterke gebruikservaring',
    projectsTitle: "Projecten",
    projectOneTitle: 'Studentenproject: Fitnesstracker',
    projectOneDesc: "Een .NET MAUI multi-platform app met gebruikersauthenticatie en databases.",
    projectTwoTitle: 'Professioneel project: Software voor waardebepaling van panden voor een makelaar ',
    projectTwoDesc: "Een desktop app die helpt de waarde van panden te schatten en het maken van documenten vergemakkelijkt.",
    projectTodoTitle: 'Work in progress',
    projectTodoDesc: 'Nog eventjes geduld! Ik ben volop bezig aan de volgende projecten.',
    footer: 'Made with ♥ by Luka Verbrugghe.'
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
