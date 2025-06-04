// About Page JavaScript with Complete 3-Language Support

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const navLoginBtn = document.getElementById("nav-login-btn")
  const navRegisterBtn = document.getElementById("nav-register-btn")
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = document.getElementById("theme-icon")

  // Complete Language translations for About Page
  const translations = {
    tr: {
      flag: "img/world.png",
      abbr: "TR",

      // Page Title
      "page-title": "Hakkımızda - LiteraHub",

      // Navigation
      "nav-home": "Anasayfa",
      "nav-books": "Kitaplar",
      "nav-events": "Etkinlikler",
      "nav-services": "Hizmetler",
      "nav-about": "Hakkımızda",
      "nav-contact": "İletişim",
      "nav-login": "Giriş Yap",
      "nav-register": "Üye Ol",

      // About Page Content
      "about-hero-title": "Hakkımızda",
      "about-hero-subtitle": "Bilgi ve kültürün merkezi olarak 40 yıldır hizmet veriyoruz",
      "about-hero-badge": "40 Yıllık Deneyim",
      "about-stat-books": "Kitap",
      "about-stat-years": "Yıl",
      "about-stat-members": "Üye",

      "about-values-title": "Değerlerimiz",
      "about-values-subtitle": "Kütüphanemizi yönlendiren temel ilkeler",

      "about-mission-title": "Misyonumuz",
      "about-mission-text":
        "Toplumun bilgi ihtiyaçlarını karşılamak ve kültürel gelişime katkıda bulunmak için kaliteli, erişilebilir ve modern kütüphane hizmetleri sunmak.",

      "about-vision-title": "Vizyonumuz",
      "about-vision-text":
        "Modern teknoloji ile geleneksel kütüphanecilik hizmetlerini birleştirerek, yaşam boyu öğrenmeyi destekleyen, herkes için erişilebilir bir bilgi ve kültür merkezi olmak.",

      "about-values-card-title": "Değerlerimiz",
      "about-values-text":
        "Eşitlik, erişilebilirlik, kalite, sürekli gelişim, kullanıcı odaklılık ve toplumsal sorumluluk ilkelerimizle hizmet veriyoruz.",

      "about-history-title": "Tarihçemiz",
      "about-history-1985-title": "Kuruluş",
      "about-history-1985-text": "Kütüphanemiz 1985 yılında küçük bir koleksiyonla hizmete başladı.",
      "about-history-1995-title": "Genişleme",
      "about-history-1995-text": "İlk büyük genişleme ile koleksiyonumuz 10.000 kitaba ulaştı.",
      "about-history-2005-title": "Dijitalleşme",
      "about-history-2005-text": "Dijital hizmetler ve online katalog sistemi devreye alındı.",
      "about-history-2024-title": "Modern Dönem",
      "about-history-2024-text": "50.000+ kitap ve dijital kaynak ile bölgenin en büyük kütüphanesi.",
      "about-building-text": "Kütüphane Binası",

      "about-team-title": "Ekibimiz",
      "about-team-subtitle": "Deneyimli ve uzman kadromuzla size hizmet veriyoruz",
      "about-team-director-title": "Kütüphane Müdürü",
      "about-team-director-bio": "20 yıllık deneyimi ile kütüphanemizi yönetiyor ve gelişim stratejilerini belirliyor.",
      "about-team-it-title": "Bilgi İşlem Uzmanı",
      "about-team-it-bio": "Dijital hizmetlerimizin geliştirilmesi ve teknolojik altyapının yönetiminden sorumlu.",
      "about-team-librarian-title": "Kütüphaneci",
      "about-team-librarian-bio": "Kullanıcı hizmetleri, koleksiyon yönetimi ve okuyucu danışmanlığı hizmetleri.",

      "about-services-title": "Hizmetlerimiz",
      "about-services-subtitle": "Size sunduğumuz kapsamlı hizmetler",
      "about-service-lending-title": "Kitap Ödünç Verme",
      "about-service-lending-text": "Geniş koleksiyonumuzdan kitap ödünç alma",
      "about-service-digital-title": "Dijital Kaynaklar",
      "about-service-digital-text": "Online veritabanları ve e-kitap erişimi",
      "about-service-study-title": "Çalışma Alanları",
      "about-service-study-text": "Sessiz ve grup çalışma alanları",
      "about-service-events-title": "Etkinlikler",
      "about-service-events-text": "Kültürel etkinlikler ve eğitim programları",
      "about-services-cta": "Tüm Hizmetleri Gör",

      // Footer
      "footer-about":
        "Modern kütüphanemiz, 2008 yılından beri okuyuculara hizmet vermektedir. Amacımız, bilgiye erişimi kolaylaştırmak ve okuma kültürünü yaygınlaştırmaktır.",
      "footer-links": "Hızlı Bağlantılar",
      "footer-link-home": "Anasayfa",
      "footer-link-catalog": "Katalog",
      "footer-link-events": "Etkinlikler",
      "footer-link-services": "Hizmetler",
      "footer-link-about": "Hakkımızda",
      "footer-link-contact": "İletişim",
      "footer-hours": "Çalışma Saatleri",
      "footer-day-mon": "Pazartesi",
      "footer-day-tue": "Salı",
      "footer-day-wed": "Çarşamba",
      "footer-day-thu": "Perşembe",
      "footer-day-fri": "Cuma",
      "footer-day-sat": "Cumartesi",
      "footer-day-sun": "Pazar",
      "footer-contact": "İletişim",
      "footer-address": "Kütüphane Caddesi No:42, İstanbul",
      "footer-rights": "Tüm hakları saklıdır.",
    },

    en: {
      flag: "img/united-kingdom.png",
      abbr: "EN",

      // Page Title
      "page-title": "About Us - LiteraHub",

      // Navigation
      "nav-home": "Home",
      "nav-books": "Books",
      "nav-events": "Events",
      "nav-services": "Services",
      "nav-about": "About",
      "nav-contact": "Contact",
      "nav-login": "Login",
      "nav-register": "Register",

      // About Page Content
      "about-hero-title": "About Us",
      "about-hero-subtitle": "Serving as the center of knowledge and culture for 40 years",
      "about-hero-badge": "40 Years Experience",
      "about-stat-books": "Books",
      "about-stat-years": "Years",
      "about-stat-members": "Members",

      "about-values-title": "Our Values",
      "about-values-subtitle": "The fundamental principles that guide our library",

      "about-mission-title": "Our Mission",
      "about-mission-text":
        "To provide quality, accessible and modern library services to meet the information needs of society and contribute to cultural development.",

      "about-vision-title": "Our Vision",
      "about-vision-text":
        "To be an accessible information and culture center for everyone that supports lifelong learning by combining traditional library services with modern technology.",

      "about-values-card-title": "Our Values",
      "about-values-text":
        "We serve with the principles of equality, accessibility, quality, continuous development, user focus and social responsibility.",

      "about-history-title": "Our History",
      "about-history-1985-title": "Foundation",
      "about-history-1985-text": "Our library started service in 1985 with a small collection.",
      "about-history-1995-title": "Expansion",
      "about-history-1995-text": "With the first major expansion, our collection reached 10,000 books.",
      "about-history-2005-title": "Digitalization",
      "about-history-2005-text": "Digital services and online catalog system were put into operation.",
      "about-history-2024-title": "Modern Era",
      "about-history-2024-text": "The largest library in the region with 50,000+ books and digital resources.",
      "about-building-text": "Library Building",

      "about-team-title": "Our Team",
      "about-team-subtitle": "We serve you with our experienced and expert staff",
      "about-team-director-title": "Library Director",
      "about-team-director-bio":
        "Managing our library with 20 years of experience and determining development strategies.",
      "about-team-it-title": "IT Specialist",
      "about-team-it-bio": "Responsible for developing our digital services and managing technological infrastructure.",
      "about-team-librarian-title": "Librarian",
      "about-team-librarian-bio": "User services, collection management and reader advisory services.",

      "about-services-title": "Our Services",
      "about-services-subtitle": "Comprehensive services we offer you",
      "about-service-lending-title": "Book Lending",
      "about-service-lending-text": "Borrowing books from our extensive collection",
      "about-service-digital-title": "Digital Resources",
      "about-service-digital-text": "Online databases and e-book access",
      "about-service-study-title": "Study Areas",
      "about-service-study-text": "Quiet and group study areas",
      "about-service-events-title": "Events",
      "about-service-events-text": "Cultural events and educational programs",
      "about-services-cta": "View All Services",

      // Footer
      "footer-about":
        "Our modern library has been serving readers since 2008. Our mission is to facilitate access to knowledge and promote reading culture.",
      "footer-links": "Quick Links",
      "footer-link-home": "Home",
      "footer-link-catalog": "Catalog",
      "footer-link-events": "Events",
      "footer-link-services": "Services",
      "footer-link-about": "About Us",
      "footer-link-contact": "Contact",
      "footer-hours": "Working Hours",
      "footer-day-mon": "Monday",
      "footer-day-tue": "Tuesday",
      "footer-day-wed": "Wednesday",
      "footer-day-thu": "Thursday",
      "footer-day-fri": "Friday",
      "footer-day-sat": "Saturday",
      "footer-day-sun": "Sunday",
      "footer-contact": "Contact",
      "footer-address": "Library Street No:42, New York",
      "footer-rights": "All rights reserved.",
    },

    de: {
      flag: "img/german.png",
      abbr: "DE",

      // Page Title
      "page-title": "Über uns - LiteraHub",

      // Navigation
      "nav-home": "Startseite",
      "nav-books": "Bücher",
      "nav-events": "Veranstaltungen",
      "nav-services": "Dienstleistungen",
      "nav-about": "Über uns",
      "nav-contact": "Kontakt",
      "nav-login": "Anmelden",
      "nav-register": "Registrieren",

      // About Page Content
      "about-hero-title": "Über uns",
      "about-hero-subtitle": "Seit 40 Jahren dienen wir als Zentrum für Wissen und Kultur",
      "about-hero-badge": "40 Jahre Erfahrung",
      "about-stat-books": "Bücher",
      "about-stat-years": "Jahre",
      "about-stat-members": "Mitglieder",

      "about-values-title": "Unsere Werte",
      "about-values-subtitle": "Die Grundprinzipien, die unsere Bibliothek leiten",

      "about-mission-title": "Unsere Mission",
      "about-mission-text":
        "Qualitativ hochwertige, zugängliche und moderne Bibliotheksdienste anzubieten, um den Informationsbedarf der Gesellschaft zu decken und zur kulturellen Entwicklung beizutragen.",

      "about-vision-title": "Unsere Vision",
      "about-vision-text":
        "Ein zugängliches Informations- und Kulturzentrum für alle zu sein, das lebenslanges Lernen unterstützt, indem es traditionelle Bibliotheksdienste mit moderner Technologie verbindet.",

      "about-values-card-title": "Unsere Werte",
      "about-values-text":
        "Wir dienen mit den Prinzipien von Gleichberechtigung, Zugänglichkeit, Qualität, kontinuierlicher Entwicklung, Benutzerfokus und sozialer Verantwortung.",

      "about-history-title": "Unsere Geschichte",
      "about-history-1985-title": "Gründung",
      "about-history-1985-text": "Unsere Bibliothek begann 1985 mit einer kleinen Sammlung ihren Dienst.",
      "about-history-1995-title": "Erweiterung",
      "about-history-1995-text": "Mit der ersten großen Erweiterung erreichte unsere Sammlung 10.000 Bücher.",
      "about-history-2005-title": "Digitalisierung",
      "about-history-2005-text": "Digitale Dienste und Online-Katalogsystem wurden in Betrieb genommen.",
      "about-history-2024-title": "Moderne Ära",
      "about-history-2024-text": "Die größte Bibliothek der Region mit über 50.000 Büchern und digitalen Ressourcen.",
      "about-building-text": "Bibliotheksgebäude",

      "about-team-title": "Unser Team",
      "about-team-subtitle": "Wir dienen Ihnen mit unserem erfahrenen und fachkundigen Personal",
      "about-team-director-title": "Bibliotheksdirektor",
      "about-team-director-bio":
        "Leitet unsere Bibliothek mit 20 Jahren Erfahrung und bestimmt Entwicklungsstrategien.",
      "about-team-it-title": "IT-Spezialist",
      "about-team-it-bio":
        "Verantwortlich für die Entwicklung unserer digitalen Dienste und das Management der technologischen Infrastruktur.",
      "about-team-librarian-title": "Bibliothekar",
      "about-team-librarian-bio": "Benutzerdienste, Sammlungsmanagement und Leserberatungsdienste.",

      "about-services-title": "Unsere Dienstleistungen",
      "about-services-subtitle": "Umfassende Dienstleistungen, die wir Ihnen anbieten",
      "about-service-lending-title": "Buchausleihe",
      "about-service-lending-text": "Bücher aus unserer umfangreichen Sammlung ausleihen",
      "about-service-digital-title": "Digitale Ressourcen",
      "about-service-digital-text": "Online-Datenbanken und E-Book-Zugang",
      "about-service-study-title": "Lernbereiche",
      "about-service-study-text": "Ruhige und Gruppenlernbereiche",
      "about-service-events-title": "Veranstaltungen",
      "about-service-events-text": "Kulturelle Veranstaltungen und Bildungsprogramme",
      "about-services-cta": "Alle Dienstleistungen anzeigen",

      // Footer
      "footer-about":
        "Unsere moderne Bibliothek dient seit 2008 den Lesern. Unsere Mission ist es, den Zugang zu Wissen zu erleichtern und die Lesekultur zu fördern.",
      "footer-links": "Schnelllinks",
      "footer-link-home": "Startseite",
      "footer-link-catalog": "Katalog",
      "footer-link-events": "Veranstaltungen",
      "footer-link-services": "Dienstleistungen",
      "footer-link-about": "Über uns",
      "footer-link-contact": "Kontakt",
      "footer-hours": "Öffnungszeiten",
      "footer-day-mon": "Montag",
      "footer-day-tue": "Dienstag",
      "footer-day-wed": "Mittwoch",
      "footer-day-thu": "Donnerstag",
      "footer-day-fri": "Freitag",
      "footer-day-sat": "Samstag",
      "footer-day-sun": "Sonntag",
      "footer-contact": "Kontakt",
      "footer-address": "Bibliothekstraße Nr. 42, Berlin",
      "footer-rights": "Alle Rechte vorbehalten.",
    },
  }

  // Current language (default: Turkish)
  let currentLang = "tr"
  const currentFlagElement = document.getElementById("current-flag")
  const currentLangAbbrElement = document.getElementById("current-lang-abbr")
  const langDropdown = document.querySelector(".lang-dropdown")
  const selectedLangArea = document.querySelector(".selected-lang")

  // Theme toggle functionality - SAME AS INDEX PAGE
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme")
      const newTheme = currentTheme === "dark" ? "light" : "dark"

      document.documentElement.setAttribute("data-theme", newTheme)
      localStorage.setItem("theme", newTheme)

      // Update icon
      if (newTheme === "dark") {
        themeIcon.className = "fas fa-sun"
      } else {
        themeIcon.className = "fas fa-moon"
      }
    })

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light"
    document.documentElement.setAttribute("data-theme", savedTheme)
    if (savedTheme === "dark") {
      themeIcon.className = "fas fa-sun"
    } else {
      themeIcon.className = "fas fa-moon"
    }
  }

  // Language switcher functionality
  const langButtons = document.querySelectorAll(".lang-dropdown .lang-btn")
  const chevronIcon = document.querySelector(".selected-lang .fa-chevron-down")

  langButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation()
      const lang = btn.getAttribute("data-lang")
      setLanguage(lang)
      langDropdown.classList.remove("active")
      if (chevronIcon) {
        chevronIcon.style.transform = "rotate(0deg)"
      }
    })
  })

  if (selectedLangArea) {
    selectedLangArea.addEventListener("click", () => {
      langDropdown.classList.toggle("active")
      if (chevronIcon) {
        if (langDropdown.classList.contains("active")) {
          chevronIcon.style.transform = "rotate(180deg)"
        } else {
          chevronIcon.style.transform = "rotate(0deg)"
        }
      }
    })
  }

  // Close dropdown if clicked outside
  document.addEventListener("click", (event) => {
    if (
      selectedLangArea &&
      langDropdown &&
      !selectedLangArea.contains(event.target) &&
      !langDropdown.contains(event.target)
    ) {
      langDropdown.classList.remove("active")
      if (chevronIcon) {
        chevronIcon.style.transform = "rotate(0deg)"
      }
    }
  })

  // Function to set language
  function setLanguage(lang) {
    currentLang = lang

    // Update current selected language display
    if (translations[lang]) {
      if (currentFlagElement) {
        currentFlagElement.src = translations[lang].flag
        currentFlagElement.alt = translations[lang].abbr + " Flag"
      }
      if (currentLangAbbrElement) {
        currentLangAbbrElement.textContent = translations[lang].abbr
      }
    }

    // Update all elements with data-lang-key attribute
    const elements = document.querySelectorAll("[data-lang-key]")
    elements.forEach((el) => {
      const key = el.getAttribute("data-lang-key")

      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "INPUT" && el.getAttribute("placeholder")) {
          el.setAttribute("placeholder", translations[lang][key])
        } else if (el.tagName === "TITLE") {
          el.textContent = translations[lang][key]
        } else {
          el.textContent = translations[lang][key]
        }
      }
    })
  }

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mainNav = document.querySelector(".main-nav")

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("active")
      mobileMenuBtn.classList.toggle("active")
    })
  }

  // Loader animation
  const loader = document.querySelector(".loader")
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (loader) {
        loader.style.opacity = "0"
        loader.style.visibility = "hidden"
        setTimeout(() => {
          if (loader && loader.parentNode) {
            loader.parentNode.removeChild(loader)
          }
        }, 500)
      }
    }, 1500)
  })

  const lenis=new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 1.5,
    })


  // Auth button functionality
  if (navLoginBtn) {
    navLoginBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "login.html"
    })
  }

  if (navRegisterBtn) {
    navRegisterBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "register.html"
    })
  }

  // Initialize with default language settings
  setLanguage(currentLang)
})
