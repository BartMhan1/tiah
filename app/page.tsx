"use client";

import { useState } from "react";

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);

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
              <span className="nav-tab__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 4.5L5 6.4L2.8 10L6.4 11.7L7.3 9.8V20H16.7V9.8L17.6 11.7L21.2 10L19 6.4L15.5 4.5C14.7 5.5 13.5 6 12 6C10.5 6 9.3 5.5 8.5 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Fashion</span>
            </a>
            <a className="nav-tab" href="#">
              <span className="nav-tab__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8.5H20L18.7 20H5.3L4 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 8.5C8.2 6 9.7 4.5 12 4.5C14.3 4.5 15.8 6 16 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8 13C9.1 12.2 10.4 11.8 12 11.8C13.6 11.8 14.9 12.2 16 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
              <span>Foodstuffs</span>
            </a>
          </div>

          <a className="brand-lockup" href="#" aria-label="TIAH home">
            <img src="/logo/tiah-logo.png" alt="TIAH" className="brand-logo" />
          </a>

          <div className="main-nav__right">
            <button
              className="icon-button nav-action"
              type="button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
                <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>

            <button className="icon-button bag-button nav-action" type="button" aria-label="Open bag">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5.5 8H18.5L19.5 21H4.5L5.5 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 8V6.5C9 4.57 10.34 3 12 3C13.66 3 15 4.57 15 6.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span className="bag-count">0</span>
            </button>

            <button className="profile-button nav-action" type="button" aria-label="Open profile">
              <span className="profile-button__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5.5 19C6.6 15.8 8.8 14.2 12 14.2C15.2 14.2 17.4 15.8 18.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>

          {searchOpen && (
            <div className="search-popover" role="dialog" aria-label="Search TIAH">
              <div className="search-popover__field">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <input autoFocus type="search" placeholder="Search TIAH..." aria-label="Search TIAH products" />
                <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">×</button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section className="header-preview-space" aria-label="Hero placeholder">
        <p>Hero video will begin here.</p>
      </section>
    </main>
  );
}
