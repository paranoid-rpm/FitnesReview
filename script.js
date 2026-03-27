const I18N = {
  ru: {
    "nav.home": "Главная",
    "nav.catalog": "Каталог",
    "nav.compare": "Сравнения",
    "nav.guides": "Гайды",
    "nav.about": "О проекте",
    "hero.badge": "Сервис №1 по обзорам fitness apps",
    "hero.title": "Выбери идеальное фитнес‑приложение под свою цель",
    "hero.lead": "Большая база приложений: тренировки дома и в зале, бег, йога, питание, медитация, трекинг привычек и планы для похудения.",
    "hero.primary": "Открыть каталог",
    "hero.secondary": "Смотреть сравнения",
    "section.popular": "Популярные приложения",
    "section.categories": "Категории",
    "stats.apps": "приложений в базе",
    "stats.guides": "практических гайдов",
    "stats.updated": "обновлений рейтингов за год",
    "apps.title": "Большой каталог фитнес‑приложений",
    "apps.filter": "Фильтр по категории:",
    "apps.all": "Все",
    "compare.title": "Сравнения лучших решений",
    "compare.col.app": "Приложение",
    "compare.col.goal": "Цель",
    "compare.col.price": "Цена/мес",
    "compare.col.level": "Уровень",
    "compare.col.offline": "Офлайн доступ",
    "guides.title": "Гайды и образовательные материалы",
    "about.title": "О FitnesReview",
    "about.missionTitle": "Наша миссия",
    "about.missionText": "Мы сравниваем фитнес‑приложения по качеству тренировок, UX, цене и реальным отзывам, чтобы пользователи быстро находили лучший инструмент под свои задачи.",
    "about.contactTitle": "Контакты"
  },
  en: {
    "nav.home": "Home",
    "nav.catalog": "Catalog",
    "nav.compare": "Comparisons",
    "nav.guides": "Guides",
    "nav.about": "About",
    "hero.badge": "#1 fitness app review service",
    "hero.title": "Pick the best fitness app for your goals",
    "hero.lead": "Massive app library: home and gym workouts, running, yoga, nutrition, meditation, habit tracking and weight-loss plans.",
    "hero.primary": "Open catalog",
    "hero.secondary": "View comparisons",
    "section.popular": "Popular apps",
    "section.categories": "Categories",
    "stats.apps": "apps in our database",
    "stats.guides": "practical guides",
    "stats.updated": "rating updates per year",
    "apps.title": "Comprehensive fitness app catalog",
    "apps.filter": "Filter by category:",
    "apps.all": "All",
    "compare.title": "Best app comparisons",
    "compare.col.app": "App",
    "compare.col.goal": "Goal",
    "compare.col.price": "Price/mo",
    "compare.col.level": "Level",
    "compare.col.offline": "Offline access",
    "guides.title": "Guides and educational resources",
    "about.title": "About FitnesReview",
    "about.missionTitle": "Our mission",
    "about.missionText": "We compare fitness apps by workout quality, UX, pricing and real reviews so users can quickly find the best tool for their goals.",
    "about.contactTitle": "Contact"
  }
};

const langToggle = document.getElementById("langToggle");
const currentLang = localStorage.getItem("fitLang") || "ru";

function t(key, lang = currentLang) {
  return I18N[lang][key] || key;
}

function translatePage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n, lang);
  });
  if (langToggle) langToggle.textContent = lang === "ru" ? "EN" : "RU";
}

function appCard(app, lang) {
  return `
    <article class="card">
      <img src="${app.image}" alt="${app.name}" loading="lazy" />
      <div class="content">
        <h3>${app.name}</h3>
        <p>${app.description[lang]}</p>
        <div class="meta">
          <span class="chip">${CATEGORIES[app.category][lang]}</span>
          <span class="chip">${app.goal[lang]}</span>
          <span class="chip">${app.price}</span>
        </div>
      </div>
    </article>
  `;
}

function renderHome(lang) {
  const featured = document.getElementById("featuredGrid");
  const categoryGrid = document.getElementById("categoryGrid");
  if (!featured || !categoryGrid) return;

  featured.innerHTML = APP_DATA.slice(0, 6).map((app) => appCard(app, lang)).join("");
  categoryGrid.innerHTML = Object.values(CATEGORIES)
    .map((c) => `<div class="category-pill">${c[lang]}</div>`)
    .join("");
}

function renderApps(lang) {
  const grid = document.getElementById("appsGrid");
  const filter = document.getElementById("categoryFilter");
  if (!grid || !filter) return;

  Object.entries(CATEGORIES).forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value[lang];
    filter.append(option);
  });

  const render = () => {
    const selected = filter.value;
    const list = selected === "all" ? APP_DATA : APP_DATA.filter((a) => a.category === selected);
    grid.innerHTML = list.map((app) => appCard(app, lang)).join("");
  };

  filter.addEventListener("change", render);
  render();
}

function renderCompare(lang) {
  const tbody = document.getElementById("compareTableBody");
  if (!tbody) return;

  tbody.innerHTML = APP_DATA.slice(0, 8)
    .map(
      (app) => `
      <tr>
        <td>${app.name}</td>
        <td>${app.goal[lang]}</td>
        <td>${app.price}</td>
        <td>${app.level[lang]}</td>
        <td>${app.offline ? "✓" : "✕"}</td>
      </tr>
    `
    )
    .join("");
}

function renderGuides(lang) {
  const grid = document.getElementById("guidesGrid");
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.map(
    (guide) => `
      <article class="card">
        <div class="content">
          <h3>${guide.title[lang]}</h3>
          <p>${guide.text[lang]}</p>
        </div>
      </article>
    `
  ).join("");
}

function init() {
  let lang = currentLang;
  translatePage(lang);
  renderHome(lang);
  renderApps(lang);
  renderCompare(lang);
  renderGuides(lang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      lang = lang === "ru" ? "en" : "ru";
      localStorage.setItem("fitLang", lang);
      window.location.reload();
    });
  }
}

init();
