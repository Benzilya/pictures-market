"use client";

import { useState } from "react";

type Props = {
  inquiryHref?: string;
  locale?: "en" | "it" | "ru";
};

const labels = {
  en: { collection: "Collection", about: "About", designers: "Designers", contact: "Contact", inquiry: "Inquiry", menu: "Menu" },
  it: { collection: "Collezione", about: "Artista", designers: "Designer", contact: "Contatti", inquiry: "Richiesta", menu: "Menu" },
  ru: { collection: "Коллекция", about: "Художник", designers: "Дизайнерам", contact: "Контакты", inquiry: "Запрос", menu: "Меню" },
};

export default function SiteHeader({ inquiryHref = "/#contact", locale = "en" }: Props) {
  const [open, setOpen] = useState(false);
  const t = labels[locale];
  const home = locale === "en" ? "/" : `/${locale}`;

  return (
    <header className="site-header">
      <a className="brand-lockup" href={home} aria-label="Iliano Babenchini home">
        <img className="brand-mark" src="/brand/iliano-babenchini-mark.svg" alt="" />
        <span className="brand"><span>ILIANO</span><span>BABENCHINI</span></span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/collection">{t.collection}</a>
        <a href={`${home}#artist`}>{t.about}</a>
        <a href={`${home}#designers`}>{t.designers}</a>
        <a href={`${home}#contact`}>{t.contact}</a>
      </nav>

      <div className="header-tools">
        <div className="language-switcher" aria-label="Language">
          <a className={locale === "it" ? "active" : ""} href="/it">IT</a>
          <span>/</span>
          <a className={locale === "en" ? "active" : ""} href="/">EN</a>
          <span>/</span>
          <a className={locale === "ru" ? "active" : ""} href="/ru">RU</a>
        </div>
        <a className="header-cta" href={inquiryHref}>{t.inquiry}</a>
        <button className="mobile-menu-button" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>{t.menu}</button>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <a onClick={() => setOpen(false)} href="/collection">{t.collection}</a>
          <a onClick={() => setOpen(false)} href={`${home}#artist`}>{t.about}</a>
          <a onClick={() => setOpen(false)} href={`${home}#designers`}>{t.designers}</a>
          <a onClick={() => setOpen(false)} href={`${home}#contact`}>{t.contact}</a>
          <a onClick={() => setOpen(false)} href={inquiryHref}>{t.inquiry}</a>
        </nav>
      )}
    </header>
  );
}
