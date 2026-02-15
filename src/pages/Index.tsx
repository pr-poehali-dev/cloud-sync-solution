export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">FAST*FOOD</div>
        <nav>
          <a href="#facts">Факты</a>
          <a href="#benefits">Польза</a>
          <a href="#myths">Мифы</a>
          <a href="#gallery">Галерея</a>
        </nav>
        <button className="btn-cta">Узнать больше</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НЕ ВРЕДНО,
              <br />
              А <span>ПОЛЕЗНО</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Фастфуд — не враг здоровья, если подходить с умом. Разбираем факты, развенчиваем мифы и находим пользу в любимых блюдах.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Читать факты
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть пользу
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              УЧЕБНЫЙ
              <br />
              ПРОЕКТ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ФАСТФУД
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ПОЛЬЗА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БУРГЕРЫ — ЭТО БЕЛОК * КАРТОШКА — ЭТО КАЛИЙ * САЛАТЫ В МАКДОНАЛДС * ЭНЕРГИЯ НА ВЕСЬ ДЕНЬ * БЫСТРО И ПИТАТЕЛЬНО *
            БУРГЕРЫ — ЭТО БЕЛОК * КАРТОШКА — ЭТО КАЛИЙ * САЛАТЫ В МАКДОНАЛДС * ЭНЕРГИЯ НА ВЕСЬ ДЕНЬ * БЫСТРО И ПИТАТЕЛЬНО
          </div>
        </div>

        <section id="facts" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ПОЛЕЗНЫЕ ФАКТЫ</h2>
            <a
              href="#benefits"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Вся польза →
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Факт №1</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Бургер с белком"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Источник белка</h3>
                  <span className="price">25г</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Один бургер содержит до 25 г белка — это половина дневной нормы. Мясо, сыр и булочка дают сбалансированный набор нутриентов.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Факт №2
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пицца с овощами"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ликопин в пицце</h3>
                  <span className="price">Томаты</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Томатный соус в пицце богат ликопином — мощным антиоксидантом, который снижает риск сердечно-сосудистых заболеваний.</p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Факт №3
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Молочный коктейль"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Кальций в шейках</h3>
                  <span className="price">Ca²⁺</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Молочные коктейли содержат кальций и витамин D, которые укрепляют кости и зубы — особенно полезно для подростков.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="retro-vibe">
          <div>
            <h2 className="vibe-title">ФАСТФУД — ЭТО НЕ ПРИГОВОР.</h2>
            <p className="vibe-text">
              Главный секрет — осознанный выбор. Салаты, гриль вместо фритюра, вода вместо газировки. Современные сети предлагают
              полезные альтернативы: безглютеновые булочки, веганские бургеры и свежие овощи. Всё зависит от того, что ты выберешь.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Подробнее
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section id="gallery" className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @FAST.FOOD.FACTS
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фастфуд факт 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фастфуд факт 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фастфуд факт 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фастфуд факт 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">FAST*FOOD</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Учебный проект о пользе фастфуда. Подготовлено в стиле ретро-дайнера 70-х, чтобы факты выглядели аппетитно.
          </p>
        </div>
        <div className="footer-links">
          <h4>Разделы</h4>
          <ul>
            <li>
              <a href="#facts" style={{ color: "inherit", textDecoration: "none" }}>
                Факты
              </a>
            </li>
            <li>
              <a href="#benefits" style={{ color: "inherit", textDecoration: "none" }}>
                Польза
              </a>
            </li>
            <li>
              <a href="#myths" style={{ color: "inherit", textDecoration: "none" }}>
                Мифы
              </a>
            </li>
            <li>
              <a href="#gallery" style={{ color: "inherit", textDecoration: "none" }}>
                Галерея
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Источники</h4>
          <ul>
            <li>WHO — Здоровое питание</li>
            <li>Роспотребнадзор</li>
            <li>Журнал «Nutrition»</li>
            <li>Harvard Health</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Учебный проект, 2025. Все факты носят образовательный характер.</p>
        </div>
      </footer>
    </>
  );
}
