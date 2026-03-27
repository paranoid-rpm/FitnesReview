const APP_DATA = [
  {
    name: "Nike Training Club",
    category: "strength",
    goal: { ru: "Силовые и функциональные", en: "Strength & functional" },
    price: "$0–15",
    level: { ru: "Новичок–Продвинутый", en: "Beginner–Advanced" },
    offline: true,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Огромная библиотека программ, тренировки по времени и уровню.",
      en: "Huge workout library with duration and level filters."
    }
  },
  {
    name: "Freeletics",
    category: "hiit",
    goal: { ru: "HIIT и выносливость", en: "HIIT & endurance" },
    price: "$12",
    level: { ru: "Средний–Продвинутый", en: "Intermediate–Advanced" },
    offline: true,
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "AI‑коуч с адаптацией под доступное время и инвентарь.",
      en: "AI coach adapting plans to your time and equipment."
    }
  },
  {
    name: "Strava",
    category: "running",
    goal: { ru: "Бег и велоспорт", en: "Running & cycling" },
    price: "$12",
    level: { ru: "Любой", en: "Any" },
    offline: false,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Трекинг активности, клубы, сегменты и аналитика прогресса.",
      en: "Activity tracking, clubs, segments, and progress analytics."
    }
  },
  {
    name: "Centr",
    category: "mixed",
    goal: { ru: "Фитнес + питание", en: "Fitness + nutrition" },
    price: "$20",
    level: { ru: "Новичок–Средний", en: "Beginner–Intermediate" },
    offline: true,
    image: "https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Комплексные программы: тренировки, рецепты и восстановление.",
      en: "Holistic plans with workouts, meals, and recovery."
    }
  },
  {
    name: "Fitbod",
    category: "gym",
    goal: { ru: "Тренажерный зал", en: "Gym training" },
    price: "$13",
    level: { ru: "Средний", en: "Intermediate" },
    offline: true,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Автоматический подбор нагрузки по мышечным группам и усталости.",
      en: "Auto-load progression based on muscle recovery and fatigue."
    }
  },
  {
    name: "Down Dog",
    category: "yoga",
    goal: { ru: "Йога и мобилити", en: "Yoga & mobility" },
    price: "$10",
    level: { ru: "Любой", en: "Any" },
    offline: true,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Персонализированные занятия йогой с выбором стиля и интенсивности.",
      en: "Personalized yoga sessions with style and intensity control."
    }
  },
  {
    name: "Calm",
    category: "wellness",
    goal: { ru: "Сон и стресс", en: "Sleep & stress" },
    price: "$15",
    level: { ru: "Любой", en: "Any" },
    offline: true,
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Медитации, дыхательные практики, сказки на ночь и аудио‑релакс.",
      en: "Meditations, breathing, sleep stories and relaxation audio."
    }
  },
  {
    name: "MyFitnessPal",
    category: "nutrition",
    goal: { ru: "Питание и калории", en: "Nutrition & calories" },
    price: "$20",
    level: { ru: "Любой", en: "Any" },
    offline: false,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Трекинг рациона, макросов, веса и связка с фитнес‑трекерами.",
      en: "Meal, macro and weight tracking with wearable integrations."
    }
  },
  {
    name: "JEFIT",
    category: "gym",
    goal: { ru: "Силовые программы", en: "Strength programs" },
    price: "$7",
    level: { ru: "Любой", en: "Any" },
    offline: true,
    image: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Большая база упражнений и журнал тренировок для зала.",
      en: "Large exercise database and gym workout logging."
    }
  },
  {
    name: "Adidas Running",
    category: "running",
    goal: { ru: "Беговые планы", en: "Running plans" },
    price: "$10",
    level: { ru: "Новичок–Средний", en: "Beginner–Intermediate" },
    offline: false,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Интервальные планы, аудио‑подсказки и поддержка сообщества.",
      en: "Interval plans, audio coaching and social motivation."
    }
  },
  {
    name: "Strong App",
    category: "gym",
    goal: { ru: "Журнал тренировок", en: "Workout logging" },
    price: "$5",
    level: { ru: "Любой", en: "Any" },
    offline: true,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Простой и быстрый трекер подходов, повторений и прогрессии.",
      en: "Simple and fast set/rep tracking with progression history."
    }
  },
  {
    name: "8fit",
    category: "mixed",
    goal: { ru: "Домашние тренировки", en: "Home workouts" },
    price: "$25",
    level: { ru: "Новичок", en: "Beginner" },
    offline: true,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Короткие интенсивные тренировки и персональные планы питания.",
      en: "Short intense workouts with personalized meal planning."
    }
  }
];

const GUIDE_DATA = [
  {
    title: {
      ru: "Как выбрать фитнес‑приложение под цель (похудение/масса/выносливость)",
      en: "How to choose the right app for fat loss, muscle gain, or endurance"
    },
    text: {
      ru: "Разбираем критерии выбора: тип нагрузки, формат тренировок, бюджет, наличие коуча, синхронизация с часами.",
      en: "Selection framework: training style, workout format, budget, coaching features, and wearable syncing."
    }
  },
  {
    title: {
      ru: "Топ‑ошибки новичков при использовании фитнес‑приложений",
      en: "Most common beginner mistakes when using fitness apps"
    },
    text: {
      ru: "Почему не стоит копировать планы профи, как правильно масштабировать объем и зачем отслеживать восстановление.",
      en: "Why copying pro plans fails, how to scale volume safely, and why recovery tracking matters."
    }
  },
  {
    title: {
      ru: "Как совмещать трекер питания и программу тренировок",
      en: "Combining nutrition tracking with your workout plan"
    },
    text: {
      ru: "Практическая связка калорий, белка, шагов и силовых с целью стабильного результата.",
      en: "A practical workflow linking calories, protein, steps, and strength sessions for sustainable progress."
    }
  },
  {
    title: {
      ru: "План на 12 недель: старт с нуля",
      en: "12-week plan: starting from scratch"
    },
    text: {
      ru: "Готовая дорожная карта по привычкам, тренировкам и восстановлению для начинающих.",
      en: "A ready-to-use roadmap for habits, training, and recovery for beginners."
    }
  }
];

const CATEGORIES = {
  strength: { ru: "Силовые", en: "Strength" },
  hiit: { ru: "HIIT", en: "HIIT" },
  running: { ru: "Бег", en: "Running" },
  mixed: { ru: "Комплексные", en: "All-in-one" },
  gym: { ru: "Зал", en: "Gym" },
  yoga: { ru: "Йога", en: "Yoga" },
  wellness: { ru: "Велнес", en: "Wellness" },
  nutrition: { ru: "Питание", en: "Nutrition" }
};
