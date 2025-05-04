
export const detectLanguage = (text) => {
    if (!text) return "unknown";
    const lowered = text.toLowerCase();
  
    if (/[а-яёіїєґ]/i.test(lowered)) return "ua";      // русский или украинский
    if (/[äöüß]/i.test(lowered) || lowered.includes("ist") || lowered.includes("nicht")) return "de"; // немецкий
    if (/[a-z]/i.test(lowered)) return "en";           // английский
  
    return "unknown";
  };
  
  // Функция для возврата соответствующего флага по коду языка
  export const getFlagByLang = (lang) => {
    switch (lang) {
      case "en":
        return "🇬🇧";
      case "ru":
        return "🇷🇺";
      case "de":
        return "🇩🇪";
    }
  };
  