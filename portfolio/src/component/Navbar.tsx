// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from '../i18n/useTranslation'; 

export default function Navbar() {
  //  ─── 1) Track the current language in state ───
  // You could initialize from localStorage or default to 'en'.
  const [locale, setLocale] = useState<'en' | 'fr'>('en');

  const t = useTranslations(locale);

  // (Optional) Persist to localStorage so it “sticks” across page reload:
  useEffect(() => {
    const saved = window.localStorage.getItem('locale');
    if (saved === 'fr' || saved === 'en') {
      setLocale(saved);
    }
  }, []);

  const toggleLang = () => { // Keep langage accros reload 
    const next = locale === 'en' ? 'fr' : 'en';
    setLocale(next);
    window.localStorage.setItem('locale', next);
  };

  //  ─── 3) Menu state for mobile (optional) ───
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md">
    </header>
  );
}