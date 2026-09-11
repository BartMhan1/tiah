export default function HomePage() {
  return (
    <main className="home-shell">
      <header className="site-header">
        <div className="ghana-bar">
          <div className="ghana-bar__message">
            <span className="ghana-flag-mini" aria-hidden="true">
              <span className="ghana-flag-mini__red" />
              <span className="ghana-flag-mini__gold">
                <span className="ghana-flag-mini__star">★</span>
              </span>
              <span className="ghana-flag-mini__green" />
            </span>
            <span>Proudly Ghanaian</span>
            <span className="ghana-bar__divider">|</span>
            <span>Local Products. Stronger Communities.</span>
          </div>

          <div className="ghana-bar__ribbon" aria-hidden="true">
            <span className="ghana-ribbon ghana-ribbon--red" />
            <span className="ghana-ribbon ghana-ribbon--gold">
              <span className="ghana-ribbon__star">★</span>
            </span>
            <span className="ghana-ribbon ghana-ribbon--green" />
          </div>

          <p className="ghana-bar__right">Fashion Feeds Families ♡</p>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
          <div className="main-nav__left">
            <a className="nav-tab nav-tab--active" href="#">
              Fashion
            </a>
            <a className="nav-tab" href="#">
              Foodstuffs
            </a>
          </div>

          <a className="brand-lockup" href="#" aria-label="TIAH home">
            <img src="/logo/tiah-logo.png" alt="TIAH" className="brand-logo" />
          </a>

          <div className="main-nav__right">
            <label className="search-box">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                aria-label="Search TIAH"
                placeholder="Search for clothing, styles, brands and more..."
              />
            </label>

            <button className="icon-button bag-button" type="button" aria-label="Open bag">
              <svg
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5.5 8H18.5L19.5 21H4.5L5.5 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 8V6.5C9 4.57 10.34 3 12 3C13.66 3 15 4.57 15 6.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span className="bag-count">0</span>
            </button>

            <button className="profile-button" type="button" aria-label="Sign in">
              <span className="profile-button__icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5.5 19C6.6 15.8 8.8 14.2 12 14.2C15.2 14.2 17.4 15.8 18.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="profile-button__text">
                <span>Hello</span>
                <strong>Sign in</strong>
              </span>
            </button>
          </div>
        </nav>
      </header>

      <section className="header-preview-space" aria-label="Hero placeholder">
        <p>Hero video will begin here.</p>
      </section>
    </main>
  );
}
