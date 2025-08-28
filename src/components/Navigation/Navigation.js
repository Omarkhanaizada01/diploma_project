"use client";
import { FiMapPin, FiChevronDown, FiCheck, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const languages = [
    { code: "Eng", name: "English" },
    { code: "Fra", name: "Français" },
    { code: "Esp", name: "Español" },
  ];

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
  ];
  
  const nav = [
    { id: "home", name: "Home", link: "/" },
    { id: "shop", name: "Shop", link: "/shop" },
    { id: "pages", name: "Pages", link: "/" },
    { id: "blog", name: "Blog", link: "/" },
    { id: "aboutUs", name: "About Us", link: "/" },
    { id: "contactUs", name: "Contact Us", link: "/" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-dropdown") && !e.target.closest(".currency-dropdown")) {
        setIsLanguageOpen(false);
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-[0_1px_0_0_#E5E5E5] z-50">
      {/* Top Bar */}
      <div className="container mx-auto h-[42px] flex justify-between items-center px-4">
        <div className="flex items-center gap-2 max-w-[315px] overflow-hidden text-[12px] text-[#666666]">
          <FiMapPin className="min-w-[16px] shrink-0" />
          <span className="truncate">Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative language-dropdown">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-1 hover:text-green-600 transition-colors"
            >
              {selectedLanguage}
              <FiChevronDown className="w-3 h-3" />
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                  >
                    <span>{lang.name}</span>
                    {selectedLanguage === lang.code && <FiCheck className="text-green-600" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative currency-dropdown">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="flex items-center gap-1 hover:text-green-600 transition-colors"
            >
              {selectedCurrency}
              <FiChevronDown className="w-3 h-3" />
            </button>
            {isCurrencyOpen && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                {currencies.map((curr) => (
                  <div
                    key={curr.code}
                    onClick={() => setSelectedCurrency(curr.code)}
                    className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                  >
                    <span>{curr.name}</span>
                    {selectedCurrency === curr.code && <FiCheck className="text-green-600" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a href="/login" className="font-semibold hover:underline">Sign In</a>
            <span className="text-gray-400">/</span>
            <a href="/register" className="font-semibold hover:underline">Sign Up</a>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="container mx-auto h-[93px] flex items-center justify-between px-4">
        <div className="w-[183px]">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={183}
            height={38}
            
          />
        </div>

        {/* Поисковая строка с исправленной иконкой */}
        <div className="w-full max-w-[498px] h-[45px] flex items-center border border-[#E6E6E6] rounded-[6px] overflow-hidden relative">
          {/* Иконка поиска */}
          <div className="absolute left-4 h-full flex items-center justify-center pointer-events-none">
            <FiSearch className="w-5 h-5 text-[#808080]" />
          </div>
          
          {/* Поле ввода */}
          <input
  type="search"
  id="site-search"
  name="q"
  placeholder="Search"
  autoComplete="off"
  className="w-full h-full pl-12 pr-4 text-[15px] text-[#808080] focus:outline-none"
/>

          
          {/* Кнопка поиска */}
          <button className="h-full px-6 bg-[#00B207] text-white hover:bg-[#00B207]/90 transition-colors whitespace-nowrap">
            <span className="text-[14px] font-semibold">Search</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <FiHeart className="w-[32px] h-[32px] text-gray-600 hover:text-green-600 transition-colors" />
          <div className="w-[1px] h-[24px] bg-[#CCCCCC]" />
          <div className="flex items-center gap-3">
            <div className="relative">
              <FiShoppingBag className="w-[34px] h-[34px] text-gray-600 hover:text-green-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#4D4D4D]">Shopping cart:</span>
              <span className="text-[14px] font-medium text-[#1A1A1A]">$57.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="bg-[#333333]">
        <div className="container mx-auto h-[60px] flex justify-between items-center px-4">
          <div className="flex items-center gap-8">
            {nav.map((item) => (
              <div key={item.id} className="flex items-center gap-1">
                <a href={item.link} className="text-[#999999] hover:text-white transition-colors text-[14px] font-medium">
                  {item.name}
                </a>
                <Image
                  src="/ChevronDown.png"
                  alt="Arrow"
                  width={16}
                  height={16}
                
                  className="rotate-360"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/PhoneCall.png"
              alt="Phone"
              width={28}
              height={28}
              
            />
            <span className="text-[#999999] hover:text-white transition-colors text-[14px] font-medium">
              +123 (456) 7890
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}