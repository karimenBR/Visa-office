const translations = {
    en: {
      "aboutUS": "About Us",
      "Explore your Horizon": "Explore your Horizon",
      "Our Address": "Our Address",
      "Email Us": "Email Us",
      "Call Us": "Call Us",
      "Useful Links": "Useful Links",
      "Our Services": "Our Services",
      "Our Newsletter": "Our Newsletter",
      "Subscribe": "Subscribe",
      "Makteb El visa": "Visa Office",
      "desHero": "Experience a seamless journey with Visa Office, where your travel journey meet our dedication and expertise",
      "AboutTitle": "Passport & Visa Service",
      "descAbout": "We provide a comprehensive range of services to meet your visa requirements, including visa application, visa processing, and consultation services.",
      "Application processing": "Application processing",
      "Document verification": "Document verification",
      "Protection": "Protection",
      "Home": "Home",
      "Services": "Services",
      "Contact": "Contact",
      "Language": "Language",
      "Arabic": "Arabic",
      "English": "English",
      "French": "French",
      "Departments": "Departments",
    },
    fr: {
      "aboutUs": "A propos",
      "Explore your Horizon": "Explorez votre horizon",
      "Our Address": "Notre adresse",
      "Email Us": "Nous contacter par email",
      "Call Us": "Appelez-nous",
      "Useful Links": "Liens utiles",
      "Our Services": "Nos services",
      "Our Newsletter": "Notre newsletter",
      "Subscribe": "S'abonner",
      "Makteb El visa": "Bureau de visa",
      "desHero": "Experiencez un voyage sans tracas avec le bureau de visa, où votre voyage de voyage se rapproche de notre dedication et d'expertise",
      "AboutTitle": "Service de passeport & visa",
      "descAbout": "Nous fournissons une gamme complète de services pour répondre aux exigences de vos visas, y compris le service de demande de visa, le traitement de visa et les services de consultation.",
      "Application processing": "Traitement de demande",
      "Document verification": "Vérification des documents",
      "Protection": "Protection",
      "Home": "Accueil",
      "Services": "Services",
      "Contact": "Contact",
      "Language": "Langue",
      "Arabic": "Arabe",
      "English": "Anglais",
      "French": "Français",
      "Departments": "Départements",
    },
    ar: {
      "aboutUS": "معلومات عنا",
      "Explore your Horizon": "استكشف أفقك",
      "Our Address": "عنواننا",
      "Email Us": "اتصل بنا عبر البريد الإلكتروني",
      "Call Us": "اتصل بنا",
      "Useful Links": "روابط مفيدة",
      "Our Services": "خدماتنا",
      "Our Newsletter": "نشرة الأخبار الخاصة بنا",
      "Subscribe": "الإشتراك",
      "Makteb El visa": "مكتب الفيسا",
      "desHero": "استكشف راحة الجولة مع مكتب الفيسا �� الراحة الجولة الذي تجتمع معنا الدفعة والخبرة",
      "AboutTitle": "خدمة الجواز",
      "descAbout": "نقدم مجموعة واسعة من الخدمات لساعدك على تقدير أحكامك الجواز �� وبينما كانت تقديرنا وخبرتنا.",
      "Application processing": "معالجة الطلب",
      "Document verification": "تحقيق الوثا�ق",
      "Protection": "حماية",
      "Home": "الر��يسية",
      "Services": "خدماتنا",
      "Contact": "اتصل بنا",
      "Language": "اللغة",
      "Arabic": "عربي",
      "English": "الإنجليزية",
      "French": "الفرنسية",
      "Departments": "أقسام",
    }
  };
  
  function translatePage(language) {
    const pageContent = document.querySelectorAll('[data-translate]');
    pageContent.forEach(element => {
      const key = element.getAttribute('data-translate');
      if(translations[language][key]) {
        element.innerHTML = translations[language][key];
      }
    });
  }
  
  // Function to change language
  function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    translatePage(lang);
  }
  
  // Check for saved language preference
  document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'en';
    translatePage(lang);
  });
  
  