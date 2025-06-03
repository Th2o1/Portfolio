// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from '../i18n/useTranslation'; 

import Logo from '../assets/logo.svg'; 
import Langage from '../assets/language.svg'; 
import Burger from '../assets/burger.svg'; 

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
 
  <nav className="relative bg-transparent px-6 py-4">
    <div className="flex items-center w-full">
  
      <button className="text-white text-2xl">
        <Burger></Burger>
      </button>

  
      <div className="flex-1 flex justify-center">
        <Logo></Logo>
      </div>

  
      <button className="text-white text-base">
        <Langage></Langage>
        EN
      </button>
    </div>
  </nav>

  );
}