const APP_DATA = [
  {
    name: "Nike Training Club",
    category: "strength",
    goal: { ru: "Силовые и функциональные тренировки", en: "Strength and functional training" },
    price: { ru: "Бесплатно / премиум от $15", en: "Free / premium from $15" },
    level: { ru: "Новичок - продвинутый", en: "Beginner to advanced" },
    offline: true,
    platforms: { ru: "iOS, Android", en: "iOS, Android" },
    format: { ru: "Видео-тренировки и программы", en: "Video workouts and guided plans" },
    bestFor: { ru: "Тем, кто хочет универсальное приложение с качественной подачей", en: "Anyone wanting an all-purpose app with polished coaching" },
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Одна из самых сбалансированных платформ для домашних тренировок, мобильности и силовой подготовки.",
      en: "One of the most balanced platforms for home workouts, mobility, and strength training."
    },
    review: {
      ru: "Nike Training Club силен тем, что не перегружает интерфейс и при этом дает ощущение полноценной программы. Здесь легко стартовать с нуля и не потеряться в сотнях сценариев.",
      en: "Nike Training Club stands out for combining a clean interface with real programming depth. It is easy to start from zero without getting lost."
    },
    features: {
      ru: ["Сильная библиотека базовых программ", "Качественные видео и голосовые подсказки", "Есть режимы для дома и зала"],
      en: ["Strong starter programs", "High-quality video and audio guidance", "Works for both home and gym"]
    },
    pros: {
      ru: ["Приятный UX", "Хорош для новичков", "Много бесплатного контента"],
      en: ["Polished UX", "Very beginner friendly", "Lots of free content"]
    },
    cons: {
      ru: ["Меньше глубины для пауэрлифтеров", "Не лучший трекер прогрессии в зале"],
      en: ["Less depth for power users", "Not the best gym progression tracker"]
    }
  },
  {
    name: "Freeletics",
    category: "hiit",
    goal: { ru: "HIIT, выносливость и жиросжигание", en: "HIIT, endurance, and fat loss" },
    price: { ru: "Подписка около $12", en: "Subscription around $12" },
    level: { ru: "Средний - продвинутый", en: "Intermediate to advanced" },
    offline: true,
    platforms: { ru: "iOS, Android", en: "iOS, Android" },
    format: { ru: "AI-коуч и адаптивные планы", en: "AI coach with adaptive plans" },
    bestFor: { ru: "Тем, кому нужен интенсив и четкая структура без тренера", en: "People who want intensity and structure without a coach" },
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Подходит для тех, кто любит короткие, плотные по нагрузке тренировки и хочет, чтобы приложение само подстраивало план.",
      en: "Great for people who like short, hard sessions and want the app to adapt the plan automatically."
    },
    review: {
      ru: "Freeletics ощущается как цифровой тренер с характером. Приложение мотивирует, но может быть слишком агрессивным для новичка без опыта контроля нагрузки.",
      en: "Freeletics feels like a digital coach with attitude. It motivates well, but can be too aggressive for complete beginners."
    },
    features: {
      ru: ["Адаптация под время и инвентарь", "Плотные интервальные тренировки", "Сильный мотивационный сценарий"],
      en: ["Adapts to time and equipment", "Dense interval sessions", "Strong motivational structure"]
    },
    pros: {
      ru: ["Хорошо держит дисциплину", "Быстрое начало", "Четкая периодизация"],
      en: ["Great for discipline", "Fast onboarding", "Clear training structure"]
    },
    cons: {
      ru: ["Высокая интенсивность", "Не всем подходит стиль подачи"],
      en: ["High intensity", "Coaching style is not for everyone"]
    }
  },
  {
    name: "Strava",
    category: "running",
    goal: { ru: "Бег, велоспорт и outdoor-активности", en: "Running, cycling, and outdoor activities" },
    price: { ru: "Бесплатно / премиум около $12", en: "Free / premium around $12" },
    level: { ru: "Любой уровень", en: "Any level" },
    offline: false,
    platforms: { ru: "iOS, Android, Web", en: "iOS, Android, Web" },
    format: { ru: "Трекер активности и социальная сеть", en: "Activity tracker and social layer" },
    bestFor: { ru: "Бегунам и велосипедистам, которым важны данные и комьюнити", en: "Runners and cyclists who care about data and community" },
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Сильнейшая экосистема для записи активности, анализа маршрутов и общения с другими спортсменами.",
      en: "A leading ecosystem for tracking activities, analyzing routes, and staying connected with other athletes."
    },
    review: {
      ru: "Strava давно стала стандартом де-факто для outdoor-сцены. Она особенно хороша, если мотивация растет через соревнование, сегменты и социальное вовлечение.",
      en: "Strava has become the default layer for outdoor athletes. It shines when motivation comes from competition and community."
    },
    features: {
      ru: ["Сегменты и личные рекорды", "Клубы и челленджи", "Удобная аналитика по пробежкам"],
      en: ["Segments and personal records", "Clubs and challenges", "Strong run analytics"]
    },
    pros: {
      ru: ["Лучшее комьюнити", "Много интеграций", "Понятная визуализация прогресса"],
      en: ["Best community features", "Many integrations", "Clear progress visualization"]
    },
    cons: {
      ru: ["Часть сильных функций в подписке", "Меньше пользы для силового тренинга"],
      en: ["Best features sit behind premium", "Less useful for strength training"]
    }
  },
  {
    name: "Centr",
    category: "mixed",
    goal: { ru: "Фитнес, питание и восстановление", en: "Fitness, nutrition, and recovery" },
    price: { ru: "Подписка около $20", en: "Subscription around $20" },
    level: { ru: "Новичок - средний", en: "Beginner to intermediate" },
    offline: true,
    platforms: { ru: "iOS, Android, Web", en: "iOS, Android, Web" },
    format: { ru: "Комплексные lifestyle-программы", en: "Holistic lifestyle programs" },
    bestFor: { ru: "Тем, кто хочет решение под ключ, а не отдельный трекер", en: "People who want a complete system rather than a single tracker" },
    image: "https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Сервис для пользователей, которым важна не только тренировка, но и питание, сон, ритм недели и общее ощущение системы.",
      en: "Built for users who want more than workouts: nutrition, recovery, weekly rhythm, and a fuller system."
    },
    review: {
      ru: "Centr хорошо заходит людям, которые любят сопровождение и красивую подачу. Это скорее lifestyle-платформа, чем сухой спортивный инструмент.",
      en: "Centr works well for users who want guidance and polished presentation. It feels more like a lifestyle platform than a pure training tool."
    },
    features: {
      ru: ["Рецепты и meal-планы", "Разные форматы тренировок", "Фокус на устойчивой рутине"],
      en: ["Recipes and meal plans", "Multiple workout styles", "Built around sustainable routine"]
    },
    pros: {
      ru: ["Цельный опыт", "Хороший визуальный контент", "Подходит для домашнего режима"],
      en: ["Very cohesive experience", "Strong visual content", "Great for home users"]
    },
    cons: {
      ru: ["Дороже многих конкурентов", "Не лучший выбор для техничного анализа прогресса"],
      en: ["Pricier than many rivals", "Not ideal for detailed performance analytics"]
    }
  },
  {
    name: "Fitbod",
    category: "gym",
    goal: { ru: "Силовые тренировки в зале", en: "Gym-based strength training" },
    price: { ru: "Подписка около $13", en: "Subscription around $13" },
    level: { ru: "Средний уровень", en: "Intermediate" },
    offline: true,
    platforms: { ru: "iOS, Android", en: "iOS, Android" },
    format: { ru: "Конструктор тренировок с авто-прогрессией", en: "Workout builder with auto progression" },
    bestFor: { ru: "Тем, кто тренируется в зале регулярно и хочет оптимизировать нагрузку", en: "Lifters who train consistently and want smarter load planning" },
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Одно из лучших приложений для тренировок в зале, если вам важны сплит, восстановление и адекватный подбор упражнений.",
      en: "One of the strongest gym apps if split planning, recovery, and exercise selection matter to you."
    },
    review: {
      ru: "Fitbod очень удобен для людей, которые уже понимают базу и хотят экономить время на составлении программы. Он дает ощущение разумной автоматизации, а не хаоса.",
      en: "Fitbod is great for users who already know the basics and want to save time on planning. The automation feels useful rather than random."
    },
    features: {
      ru: ["Учет восстановленности мышц", "Автогенерация следующей сессии", "Хорошая работа с инвентарем"],
      en: ["Muscle recovery tracking", "Auto-generated next session", "Good equipment handling"]
    },
    pros: {
      ru: ["Сильная логика прогрессии", "Экономит время", "Удобен в зале"],
      en: ["Strong progression logic", "Saves planning time", "Very practical in the gym"]
    },
    cons: {
      ru: ["Не всем нравится автоматический подход", "Слабее как обучающее приложение"],
      en: ["Auto-planning is not for everyone", "Weaker as an educational app"]
    }
  },
  {
    name: "Down Dog",
    category: "yoga",
    goal: { ru: "Йога, растяжка и мобильность", en: "Yoga, stretching, and mobility" },
    price: { ru: "Подписка около $10", en: "Subscription around $10" },
    level: { ru: "Любой уровень", en: "Any level" },
    offline: true,
    platforms: { ru: "iOS, Android, Web", en: "iOS, Android, Web" },
    format: { ru: "Персонализированные йога-сессии", en: "Personalized yoga sessions" },
    bestFor: { ru: "Тем, кому нужна гибкая настройка практики под день и состояние", en: "People who want highly flexible practice customization" },
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Приложение, которое не заставляет проходить одно и то же. Сессии можно собирать под настроение, длительность и интенсивность.",
      en: "An app that avoids repetition by letting you tailor each practice to mood, duration, and intensity."
    },
    review: {
      ru: "Down Dog хорош именно своей вариативностью. Если вам быстро наскучивают одинаковые видео, здесь ощущение свежести сохраняется дольше.",
      en: "Down Dog wins on variation. If fixed videos bore you quickly, this app keeps the experience fresh much longer."
    },
    features: {
      ru: ["Гибкая настройка стиля", "Работает для коротких практик", "Есть сессии на мобильность и восстановление"],
      en: ["Flexible style controls", "Works well for short sessions", "Includes mobility and recovery tracks"]
    },
    pros: {
      ru: ["Очень гибкое приложение", "Хорошо для ежедневной рутины", "Подходит новичкам"],
      en: ["Highly flexible", "Excellent for daily practice", "Beginner friendly"]
    },
    cons: {
      ru: ["Меньше чувства сообщества", "Не всем зайдет формат генерации практик"],
      en: ["Less community feel", "Generated session format may not suit everyone"]
    }
  },
  {
    name: "Calm",
    category: "wellness",
    goal: { ru: "Сон, стресс и ментальное восстановление", en: "Sleep, stress, and mental recovery" },
    price: { ru: "Подписка около $15", en: "Subscription around $15" },
    level: { ru: "Любой уровень", en: "Any level" },
    offline: true,
    platforms: { ru: "iOS, Android, Web", en: "iOS, Android, Web" },
    format: { ru: "Медитации, сон и дыхательные практики", en: "Meditation, sleep, and breathwork" },
    bestFor: { ru: "Тем, кто хочет встроить восстановление в спортивную или рабочую рутину", en: "People who want recovery habits inside a training or work routine" },
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Не про спорт напрямую, но очень полезно как дополнение к любой тренировочной программе за счет сна и снижения стресса.",
      en: "Not a training app directly, but highly useful as a companion through better sleep and lower stress."
    },
    review: {
      ru: "Calm особенно полезен тем, кто недооценивает восстановление. На фоне интенсивных тренировок это приложение может дать больше пользы, чем еще один план на пресс.",
      en: "Calm is especially valuable for users who underestimate recovery. During hard training blocks, it may help more than yet another workout plan."
    },
    features: {
      ru: ["Сонные истории", "Короткие медитации", "Дыхательные сценарии на каждый день"],
      en: ["Sleep stories", "Short meditations", "Daily breathing routines"]
    },
    pros: {
      ru: ["Сильный контент для сна", "Помогает с регулярностью", "Красиво и спокойно оформлено"],
      en: ["Excellent sleep content", "Supports consistency", "Beautiful calming design"]
    },
    cons: {
      ru: ["Не заменяет терапию или медицину", "Для части пользователей подписка дороговата"],
      en: ["Not a replacement for medical care", "Subscription can feel expensive"]
    }
  },
  {
    name: "MyFitnessPal",
    category: "nutrition",
    goal: { ru: "Питание, калории и контроль рациона", en: "Nutrition, calories, and food logging" },
    price: { ru: "Бесплатно / премиум около $20", en: "Free / premium around $20" },
    level: { ru: "Любой уровень", en: "Any level" },
    offline: false,
    platforms: { ru: "iOS, Android, Web", en: "iOS, Android, Web" },
    format: { ru: "Трекер питания и макросов", en: "Food and macro tracker" },
    bestFor: { ru: "Тем, кто хочет видеть картину по калориям и макронутриентам", en: "People who want visibility into calories and macros" },
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Популярный инструмент для контроля питания, особенно если цель связана со снижением веса, набором массы или стабилизацией привычек.",
      en: "A popular tool for nutrition control, especially for fat loss, muscle gain, or simply building consistency."
    },
    review: {
      ru: "MyFitnessPal не самый современный по ощущениям, но он до сих пор остается одним из самых практичных способов быстро видеть реальное питание, а не ощущения от него.",
      en: "MyFitnessPal may not feel the most modern, but it remains one of the most practical ways to see your real nutrition rather than guessing."
    },
    features: {
      ru: ["Большая база продуктов", "Учет макронутриентов", "Интеграции с фитнес-устройствами"],
      en: ["Large food database", "Macro tracking", "Wearable integrations"]
    },
    pros: {
      ru: ["Проверенный стандарт", "Хорош для дефицита и контроля веса", "Простая привычка логирования"],
      en: ["Trusted standard", "Great for fat loss and weight control", "Simple daily logging habit"]
    },
    cons: {
      ru: ["Не всем нравится ручной ввод", "Часть функций в платной версии"],
      en: ["Manual logging can be tedious", "Some key features require premium"]
    }
  },
  {
    name: "JEFIT",
    category: "gym",
    goal: { ru: "Силовые программы и журнал тренировок", en: "Strength programs and workout logging" },
    price: { ru: "Подписка около $7", en: "Subscription around $7" },
    level: { ru: "Любой уровень", en: "Any level" },
    offline: true,
    platforms: { ru: "iOS, Android", en: "iOS, Android" },
    format: { ru: "База упражнений и tracking", en: "Exercise database and tracking" },
    bestFor: { ru: "Тем, кто ценит подробный журнал и готов мириться с менее современным дизайном", en: "People who value detailed logging over sleek design" },
    image: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Функциональное приложение для силовых тренировок с акцентом на базу упражнений, историю и шаблоны программ.",
      en: "A practical strength app focused on exercise data, logging history, and reusable workout templates."
    },
    review: {
      ru: "JEFIT выбирают не за красоту, а за полезность. Если вам нужен рабочий журнал с большой базой упражнений, он до сих пор вполне актуален.",
      en: "JEFIT is chosen for usefulness, not beauty. If you need a serious workout log with a large exercise library, it still delivers."
    },
    features: {
      ru: ["Шаблоны тренировок", "Подробный журнал прогресса", "Большая база движений"],
      en: ["Workout templates", "Detailed progress log", "Large movement database"]
    },
    pros: {
      ru: ["Практичный для зала", "Много упражнений", "Доступнее конкурентов"],
      en: ["Very practical in the gym", "Many exercises", "More affordable than rivals"]
    },
    cons: {
      ru: ["Интерфейс попроще", "Меньше ощущения премиального продукта"],
      en: ["Simpler interface", "Less polished overall experience"]
    }
  },
  {
    name: "Adidas Running",
    category: "running",
    goal: { ru: "Беговые планы и поддержка привычки", en: "Running plans and habit support" },
    price: { ru: "Подписка около $10", en: "Subscription around $10" },
    level: { ru: "Новичок - средний", en: "Beginner to intermediate" },
    offline: false,
    platforms: { ru: "iOS, Android", en: "iOS, Android" },
    format: { ru: "Планы, аудио-подсказки и комьюнити", en: "Plans, audio coaching, and community" },
    bestFor: { ru: "Тем, кто только втягивается в бег и хочет понятное сопровождение", en: "Newer runners who want clear guidance and encouragement" },
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Более мягкий и дружелюбный вход в бег по сравнению с приложениями, которые сразу давят на цифры и сегменты.",
      en: "A softer and friendlier entry into running than apps that immediately push hard data and competition."
    },
    review: {
      ru: "Adidas Running особенно хорош как первое беговое приложение. Оно помогает выстроить привычку и не пугает новичка спортивной сложностью.",
      en: "Adidas Running is especially good as a first running app. It helps build consistency without overwhelming new users."
    },
    features: {
      ru: ["Готовые планы", "Аудио-подсказки", "Социальная поддержка и челленджи"],
      en: ["Ready-made plans", "Audio guidance", "Social support and challenges"]
    },
    pros: {
      ru: ["Простой старт", "Хорошая мотивация", "Понятная структура плана"],
      en: ["Easy to start", "Strong motivation", "Clear plan structure"]
    },
    cons: {
      ru: ["Меньше глубины аналитики, чем у Strava", "Часть функций требует подписки"],
      en: ["Less analytical depth than Strava", "Some features require subscription"]
    }
  },
  {
    name: "Strong App",
    category: "gym",
    goal: { ru: "Журнал силовых тренировок", en: "Strength workout logging" },
    price: { ru: "От $5", en: "From $5" },
    level: { ru: "Любой уровень", en: "Any level" },
    offline: true,
    platforms: { ru: "iOS, Android", en: "iOS, Android" },
    format: { ru: "Минималистичный трекер подходов и весов", en: "Minimal set and weight tracker" },
    bestFor: { ru: "Тем, кто хочет быстро записывать тренировку без лишнего визуального шума", en: "People who want fast logging without visual clutter" },
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Один из самых удобных вариантов для тех, кто ценит скорость записи и понятный журнал без перегруженного интерфейса.",
      en: "One of the best options for users who value fast input and a clean training log."
    },
    review: {
      ru: "Strong App хорош тем, что не отвлекает. Он не строит вокруг себя целую экосистему, а просто помогает качественно фиксировать работу в зале.",
      en: "Strong App works because it stays focused. It does not try to be an ecosystem, just a very solid gym log."
    },
    features: {
      ru: ["Быстрое логирование", "Шаблоны тренировок", "Наглядная история прогресса"],
      en: ["Fast logging", "Workout templates", "Clear progress history"]
    },
    pros: {
      ru: ["Минимализм", "Очень удобен на тренировке", "Хорошая кривая привыкания"],
      en: ["Minimal design", "Excellent during workouts", "Easy to adopt"]
    },
    cons: {
      ru: ["Меньше обучающего контента", "Узкая специализация"],
      en: ["Less educational depth", "Narrower scope"]
    }
  },
  {
    name: "8fit",
    category: "mixed",
    goal: { ru: "Домашние тренировки и контроль питания", en: "Home workouts and nutrition support" },
    price: { ru: "Подписка около $25", en: "Subscription around $25" },
    level: { ru: "Новичок", en: "Beginner" },
    offline: true,
    platforms: { ru: "iOS, Android", en: "iOS, Android" },
    format: { ru: "Короткие тренировки и lifestyle-план", en: "Short workouts and lifestyle planning" },
    bestFor: { ru: "Тем, кто хочет начать дома без сложных настроек", en: "People who want to start at home with minimal setup" },
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80",
    description: {
      ru: "Новичковый формат с короткими тренировками, базовым планированием питания и акцентом на регулярность.",
      en: "A beginner-focused format with short workouts, simple meal planning, and strong routine support."
    },
    review: {
      ru: "8fit неплохо работает как мягкая стартовая точка. Это приложение не для технических спортсменов, а для тех, кто хочет просто начать двигаться и есть чуть осознаннее.",
      en: "8fit works well as a gentle starting point. It is less for technical athletes and more for people who simply want to start moving and eating better."
    },
    features: {
      ru: ["Короткие сессии", "Планы питания", "Фокус на простоте старта"],
      en: ["Short sessions", "Meal plans", "Focus on easy onboarding"]
    },
    pros: {
      ru: ["Подходит с нуля", "Не перегружает", "Удобно для дома"],
      en: ["Great from zero", "Low cognitive load", "Very home-friendly"]
    },
    cons: {
      ru: ["Дороже ожиданий для своего уровня глубины", "Продвинутым станет тесно"],
      en: ["Can feel expensive for its depth", "Advanced users may outgrow it quickly"]
    }
  }
];

const GUIDE_DATA = [
  {
    title: {
      ru: "Как выбрать фитнес-приложение под цель: похудение, масса или выносливость",
      en: "How to choose a fitness app for fat loss, muscle gain, or endurance"
    },
    text: {
      ru: "Разбираем, когда нужен трекер питания, когда важнее адаптивный план тренировок, а когда лучше искать сильное беговое комьюнити и аналитику.",
      en: "A framework for knowing when to prioritize nutrition tracking, adaptive training, or a stronger running community and analytics."
    }
  },
  {
    title: {
      ru: "Главные ошибки новичков при использовании фитнес-приложений",
      en: "The biggest beginner mistakes when using fitness apps"
    },
    text: {
      ru: "Почему опасно копировать слишком сложные программы, как не завалить восстановление и зачем начинать с удобного интерфейса, а не с максимальной функциональности.",
      en: "Why copying advanced plans backfires, how to avoid crushing recovery, and why ease of use often matters more than raw feature count."
    }
  },
  {
    title: {
      ru: "Как связать питание, шаги и силовые тренировки в одну систему",
      en: "How to connect nutrition, steps, and strength work into one system"
    },
    text: {
      ru: "Показываем базовый способ связать трекер питания, силовой журнал и активность, чтобы видеть реальную картину прогресса неделя к неделе.",
      en: "A simple way to connect food logging, strength tracking, and daily activity so progress becomes visible week over week."
    }
  },
  {
    title: {
      ru: "План на 12 недель для старта без срывов",
      en: "A 12-week plan for starting without burnout"
    },
    text: {
      ru: "Мягкий маршрут для новичка: привычки, объем, сон, шаги и первые тренировки без попытки изменить все в один день.",
      en: "A gentler roadmap for habits, volume, sleep, steps, and your first workouts without trying to change everything at once."
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
  wellness: { ru: "Восстановление", en: "Recovery" },
  nutrition: { ru: "Питание", en: "Nutrition" }
};

const HOME_HIGHLIGHTS = [
  {
    title: { ru: "Не только рейтинг, но и контекст", en: "More than ratings, real context" },
    text: {
      ru: "Мы показываем, кому приложение подходит, где оно раскрывается лучше всего и какие ограничения важно знать до подписки.",
      en: "We explain who each app fits, where it shines, and what tradeoffs matter before you subscribe."
    }
  },
  {
    title: { ru: "Подбор под сценарий", en: "Picked by real use case" },
    text: {
      ru: "От домашнего старта до продуманного зального трекинга: подбор строится вокруг цели, темпа жизни и уровня подготовки.",
      en: "From getting started at home to detailed gym tracking, recommendations are built around goals, lifestyle, and current level."
    }
  },
  {
    title: { ru: "Фокус на регулярности", en: "Built around consistency" },
    text: {
      ru: "Лучшее приложение не всегда самое функциональное. Часто побеждает то, которым хочется пользоваться каждую неделю.",
      en: "The best app is not always the most feature-packed. Often it is the one you will actually use every week."
    }
  }
];
