// Services Page JavaScript - Enhanced with GSAP ScrollTrigger animations
document.addEventListener("DOMContentLoaded", () => {
  console.log("Services page loading...")

  // Language translations for services page
  const servicesTranslations = {
    tr: {
      // Services Hero
      "services-hero-title": "Kütüphane Hizmetlerimiz",
      "services-hero-subtitle":
        "Modern teknoloji ve geleneksel kütüphanecilik anlayışını birleştirerek size en iyi hizmeti sunuyoruz",
      "services-stat-services": "Farklı Hizmet",
      "services-stat-access": "Dijital Erişim",
      "services-stat-members": "Memnun Üye",

      // Main Services
      "main-services-title": "Ana Hizmetlerimiz",
      "main-services-subtitle": "Okuyucularımızın ihtiyaçlarına yönelik kapsamlı hizmet yelpazesi",

      "service-digital-title": "Dijital Kütüphane",
      "service-digital-desc":
        "25.000+ e-kitap, 5.000+ sesli kitap ve dijital dergilere 7/24 erişim imkanı. Mobil uygulamamız ile istediğiniz yerden okuyun.",
      "service-digital-feature1": "E-kitap koleksiyonu",
      "service-digital-feature2": "Sesli kitap arşivi",
      "service-digital-feature3": "Dijital dergi erişimi",
      "service-digital-feature4": "Mobil uygulama",

      "service-research-title": "Araştırma Hizmetleri",
      "service-research-desc":
        "Akademik araştırmalarınız için profesyonel destek. Uzman kütüphanecilerimiz size rehberlik eder ve kaynak bulmanızda yardımcı olur.",
      "service-research-feature1": "Akademik danışmanlık",
      "service-research-feature2": "Kaynak tarama",
      "service-research-feature3": "Veri tabanı erişimi",
      "service-research-feature4": "Araştırma metodolojisi",

      "service-education-title": "Eğitim Programları",
      "service-education-desc":
        "Her yaş grubuna yönelik eğitim programları. Okuma yazma kurslarından dijital okuryazarlığa kadar geniş bir yelpaze.",
      "service-education-feature1": "Okuma yazma kursları",
      "service-education-feature2": "Dijital okuryazarlık",
      "service-education-feature3": "Yaratıcı yazma atölyeleri",
      "service-education-feature4": "Çocuk eğitim programları",

      "service-learn-more": "Daha Fazla Bilgi",

      // Video Showcase
      "video-showcase-title": "Hizmetlerimizi Keşfedin",
      "video-showcase-subtitle": "Kütüphanemizin sunduğu hizmetleri videolarla tanıyın",
      "video-tour-title": "Kütüphane Turu",
      "video-tour-desc": "Modern kütüphanemizin tüm bölümlerini keşfedin",
      "video-digital-title": "Dijital Hizmetler",
      "video-digital-desc": "E-kitap ve dijital kaynaklara nasıl erişeceğinizi öğrenin",
      "video-children-title": "Çocuk Programları",
      "video-children-desc": "Çocuklarınız için özel etkinlik ve programlar",

      // Additional Services
      "additional-services-title": "Ek Hizmetlerimiz",
      "additional-services-subtitle": "Kütüphane deneyiminizi zenginleştiren özel hizmetler",

      "service-clubs-title": "Kitap Kulüpleri",
      "service-clubs-desc": "Farklı türlerde kitap tartışma gruplarına katılın ve yeni arkadaşlar edinin.",
      "service-clubs-schedule": "Her Cumartesi 14:00",

      "service-cafe-title": "Kütüphane Kafe",
      "service-cafe-desc": "Kitap okurken keyifli vakit geçirebileceğiniz rahat ve sessiz ortam.",
      "service-cafe-schedule": "09:00 - 22:00",

      "service-print-title": "Baskı ve Fotokopi",
      "service-print-desc": "Yüksek kaliteli baskı, fotokopi ve tarama hizmetleri uygun fiyatlarla.",
      "service-print-schedule": "Kütüphane saatleri",

      "service-wifi-title": "Ücretsiz Wi-Fi",
      "service-wifi-desc": "Tüm kütüphane alanında hızlı ve güvenli internet erişimi.",
      "service-wifi-speed": "100 Mbps Hız",

      "service-events-title": "Etkinlik Organizasyonu",
      "service-events-desc": "Yazar söyleşileri, konferanslar ve kültürel etkinlikler düzenliyoruz.",
      "service-events-schedule": "Aylık etkinlikler",

      "service-audio-title": "Sesli Kitap Dinleme",
      "service-audio-desc": "Özel dinleme kabinlerinde sesli kitapları rahatlıkla dinleyin.",
      "service-audio-quality": "HD Kalite",

      // Service Hours
      "hours-title": "Hizmet Saatlerimiz",
      "hours-subtitle": "Size en uygun zamanda hizmet verebilmek için geniş saatlerde açığız",
      "hours-weekdays": "Hafta İçi",
      "hours-friday": "Cuma",
      "hours-saturday": "Cumartesi",
      "hours-sunday": "Pazar",
      "special-hours-title": "Özel Günler",
      "special-hours-desc": "Resmi tatillerde özel saatlerimiz geçerlidir. Güncel bilgi için bizi arayın.",

      // Contact CTA
      "contact-cta-title": "Hizmetlerimiz Hakkında Sorularınız mı Var?",
      "contact-cta-subtitle": "Uzman ekibimiz size yardımcı olmak için burada. Bize ulaşın ve en iyi hizmeti alın.",
      "contact-cta-call": "Bizi Arayın",
      "contact-cta-visit": "Ziyaret Edin",

      // Navigation
      "nav-home": "Anasayfa",
      "nav-books": "Kitaplar",
      "nav-events": "Etkinlikler",
      "nav-services": "Hizmetler",
      "nav-about": "Hakkımızda",
      "nav-contact": "İletişim",
      "nav-login": "Giriş Yap",
      "nav-register": "Üye Ol",

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
      // Services Hero
      "services-hero-title": "Our Library Services",
      "services-hero-subtitle":
        "We provide the best service by combining modern technology with traditional library understanding",
      "services-stat-services": "Different Services",
      "services-stat-access": "Digital Access",
      "services-stat-members": "Satisfied Members",

      // Main Services
      "main-services-title": "Our Main Services",
      "main-services-subtitle": "Comprehensive range of services for our readers' needs",

      "service-digital-title": "Digital Library",
      "service-digital-desc":
        "25,000+ e-books, 5,000+ audiobooks and 24/7 access to digital magazines. Read anywhere with our mobile app.",
      "service-digital-feature1": "E-book collection",
      "service-digital-feature2": "Audiobook archive",
      "service-digital-feature3": "Digital magazine access",
      "service-digital-feature4": "Mobile application",

      "service-research-title": "Research Services",
      "service-research-desc":
        "Professional support for your academic research. Our expert librarians guide you and help you find resources.",
      "service-research-feature1": "Academic consulting",
      "service-research-feature2": "Resource scanning",
      "service-research-feature3": "Database access",
      "service-research-feature4": "Research methodology",

      "service-education-title": "Educational Programs",
      "service-education-desc":
        "Educational programs for all age groups. A wide range from literacy courses to digital literacy.",
      "service-education-feature1": "Literacy courses",
      "service-education-feature2": "Digital literacy",
      "service-education-feature3": "Creative writing workshops",
      "service-education-feature4": "Children's education programs",

      "service-learn-more": "Learn More",

      // Video Showcase
      "video-showcase-title": "Discover Our Services",
      "video-showcase-subtitle": "Get to know the services our library offers through videos",
      "video-tour-title": "Library Tour",
      "video-tour-desc": "Explore all sections of our modern library",
      "video-digital-title": "Digital Services",
      "video-digital-desc": "Learn how to access e-books and digital resources",
      "video-children-title": "Children's Programs",
      "video-children-desc": "Special activities and programs for your children",

      // Additional Services
      "additional-services-title": "Additional Services",
      "additional-services-subtitle": "Special services that enrich your library experience",

      "service-clubs-title": "Book Clubs",
      "service-clubs-desc": "Join book discussion groups in different genres and make new friends.",
      "service-clubs-schedule": "Every Saturday 2:00 PM",

      "service-cafe-title": "Library Cafe",
      "service-cafe-desc": "A comfortable and quiet environment where you can enjoy reading.",
      "service-cafe-schedule": "09:00 - 22:00",

      "service-print-title": "Printing and Copying",
      "service-print-desc": "High quality printing, copying and scanning services at affordable prices.",
      "service-print-schedule": "Library hours",

      "service-wifi-title": "Free Wi-Fi",
      "service-wifi-desc": "Fast and secure internet access throughout the library area.",
      "service-wifi-speed": "100 Mbps Speed",

      "service-events-title": "Event Organization",
      "service-events-desc": "We organize author talks, conferences and cultural events.",
      "service-events-schedule": "Monthly events",

      "service-audio-title": "Audiobook Listening",
      "service-audio-desc": "Listen to audiobooks comfortably in special listening booths.",
      "service-audio-quality": "HD Quality",

      // Service Hours
      "hours-title": "Our Service Hours",
      "hours-subtitle": "We are open extended hours to serve you at the most convenient time",
      "hours-weekdays": "Weekdays",
      "hours-friday": "Friday",
      "hours-saturday": "Saturday",
      "hours-sunday": "Sunday",
      "special-hours-title": "Special Days",
      "special-hours-desc": "Special hours apply on public holidays. Call us for current information.",

      // Contact CTA
      "contact-cta-title": "Do You Have Questions About Our Services?",
      "contact-cta-subtitle": "Our expert team is here to help you. Contact us and get the best service.",
      "contact-cta-call": "Call Us",
      "contact-cta-visit": "Visit Us",

      // Navigation
      "nav-home": "Home",
      "nav-books": "Books",
      "nav-events": "Events",
      "nav-services": "Services",
      "nav-about": "About",
      "nav-contact": "Contact",
      "nav-login": "Login",
      "nav-register": "Register",

      // Footer
      "footer-about":
        "Our modern library has been serving readers since 2008. Our goal is to facilitate access to information and promote reading culture.",
      "footer-links": "Quick Links",
      "footer-link-home": "Home",
      "footer-link-catalog": "Catalog",
      "footer-link-events": "Events",
      "footer-link-services": "Services",
      "footer-link-about": "About",
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
      "footer-address": "Library Street No:42, Istanbul",
      "footer-rights": "All rights reserved.",
    },
    de: {
      // Services Hero
      "services-hero-title": "Unsere Bibliotheksdienste",
      "services-hero-subtitle":
        "Wir bieten den besten Service durch die Kombination moderner Technologie mit traditionellem Bibliotheksverständnis",
      "services-stat-services": "Verschiedene Dienste",
      "services-stat-access": "Digitaler Zugang",
      "services-stat-members": "Zufriedene Mitglieder",

      // Main Services
      "main-services-title": "Unsere Hauptdienste",
      "main-services-subtitle": "Umfassendes Dienstleistungsspektrum für die Bedürfnisse unserer Leser",

      "service-digital-title": "Digitale Bibliothek",
      "service-digital-desc":
        "25.000+ E-Books, 5.000+ Hörbücher und 24/7 Zugang zu digitalen Zeitschriften. Lesen Sie überall mit unserer mobilen App.",
      "service-digital-feature1": "E-Book-Sammlung",
      "service-digital-feature2": "Hörbuch-Archiv",
      "service-digital-feature3": "Digitaler Zeitschriftenzugang",
      "service-digital-feature4": "Mobile Anwendung",

      "service-research-title": "Forschungsdienste",
      "service-research-desc":
        "Professionelle Unterstützung für Ihre akademische Forschung. Unsere Fachbibliothekare leiten Sie an und helfen Ihnen bei der Ressourcenfindung.",
      "service-research-feature1": "Akademische Beratung",
      "service-research-feature2": "Ressourcensuche",
      "service-research-feature3": "Datenbankzugang",
      "service-research-feature4": "Forschungsmethodik",

      "service-education-title": "Bildungsprogramme",
      "service-education-desc":
        "Bildungsprogramme für alle Altersgruppen. Ein breites Spektrum von Alphabetisierungskursen bis zur digitalen Kompetenz.",
      "service-education-feature1": "Alphabetisierungskurse",
      "service-education-feature2": "Digitale Kompetenz",
      "service-education-feature3": "Kreative Schreibworkshops",
      "service-education-feature4": "Kinderprogramme",

      "service-learn-more": "Mehr erfahren",

      // Video Showcase
      "video-showcase-title": "Entdecken Sie unsere Dienste",
      "video-showcase-subtitle": "Lernen Sie die Dienste unserer Bibliothek durch Videos kennen",
      "video-tour-title": "Bibliotheksführung",
      "video-tour-desc": "Erkunden Sie alle Bereiche unserer modernen Bibliothek",
      "video-digital-title": "Digitale Dienste",
      "video-digital-desc": "Erfahren Sie, wie Sie auf E-Books und digitale Ressourcen zugreifen",
      "video-children-title": "Kinderprogramme",
      "video-children-desc": "Besondere Aktivitäten und Programme für Ihre Kinder",

      // Additional Services
      "additional-services-title": "Zusätzliche Dienste",
      "additional-services-subtitle": "Besondere Dienste, die Ihr Bibliothekserlebnis bereichern",

      "service-clubs-title": "Buchclubs",
      "service-clubs-desc": "Treten Sie Buchdiskussionsgruppen verschiedener Genres bei und finden Sie neue Freunde.",
      "service-clubs-schedule": "Jeden Samstag 14:00",

      "service-cafe-title": "Bibliothekscafé",
      "service-cafe-desc": "Eine komfortable und ruhige Umgebung, in der Sie das Lesen genießen können.",
      "service-cafe-schedule": "09:00 - 22:00",

      "service-print-title": "Drucken und Kopieren",
      "service-print-desc": "Hochwertige Druck-, Kopier- und Scandienste zu erschwinglichen Preisen.",
      "service-print-schedule": "Bibliothekszeiten",

      "service-wifi-title": "Kostenloses WLAN",
      "service-wifi-desc": "Schneller und sicherer Internetzugang im gesamten Bibliotheksbereich.",
      "service-wifi-speed": "100 Mbps Geschwindigkeit",

      "service-events-title": "Veranstaltungsorganisation",
      "service-events-desc": "Wir organisieren Autorengespräche, Konferenzen und kulturelle Veranstaltungen.",
      "service-events-schedule": "Monatliche Veranstaltungen",

      "service-audio-title": "Hörbuch-Hören",
      "service-audio-desc": "Hören Sie Hörbücher bequem in speziellen Hörkabinen.",
      "service-audio-quality": "HD-Qualität",

      // Service Hours
      "hours-title": "Unsere Servicezeiten",
      "hours-subtitle": "Wir haben erweiterte Öffnungszeiten, um Ihnen zur bequemsten Zeit zu dienen",
      "hours-weekdays": "Wochentage",
      "hours-friday": "Freitag",
      "hours-saturday": "Samstag",
      "hours-sunday": "Sonntag",
      "special-hours-title": "Besondere Tage",
      "special-hours-desc":
        "An Feiertagen gelten besondere Öffnungszeiten. Rufen Sie uns für aktuelle Informationen an.",

      // Contact CTA
      "contact-cta-title": "Haben Sie Fragen zu unseren Diensten?",
      "contact-cta-subtitle":
        "Unser Expertenteam ist hier, um Ihnen zu helfen. Kontaktieren Sie uns und erhalten Sie den besten Service.",
      "contact-cta-call": "Rufen Sie uns an",
      "contact-cta-visit": "Besuchen Sie uns",

      // Navigation
      "nav-home": "Startseite",
      "nav-books": "Bücher",
      "nav-events": "Veranstaltungen",
      "nav-services": "Dienste",
      "nav-about": "Über uns",
      "nav-contact": "Kontakt",
      "nav-login": "Anmelden",
      "nav-register": "Registrieren",

      // Footer
      "footer-about":
        "Unsere moderne Bibliothek dient seit 2008 den Lesern. Unser Ziel ist es, den Zugang zu Informationen zu erleichtern und die Lesekultur zu fördern.",
      "footer-links": "Schnelle Links",
      "footer-link-home": "Startseite",
      "footer-link-catalog": "Katalog",
      "footer-link-events": "Veranstaltungen",
      "footer-link-services": "Dienste",
      "footer-link-about": "Über uns",
      "footer-link-contact": "Kontakt",
      "footer-hours": "Arbeitszeiten",
      "footer-day-mon": "Montag",
      "footer-day-tue": "Dienstag",
      "footer-day-wed": "Mittwoch",
      "footer-day-thu": "Donnerstag",
      "footer-day-fri": "Freitag",
      "footer-day-sat": "Samstag",
      "footer-day-sun": "Sonntag",
      "footer-contact": "Kontakt",
      "footer-address": "Bibliotheksstraße Nr:42, Istanbul",
      "footer-rights": "Alle Rechte vorbehalten.",
    },
  }

  // Current language
  let currentLang = localStorage.getItem("selectedLanguage") || "tr"

  // Language switching function
  function switchLanguage(lang) {
    currentLang = lang
    localStorage.setItem("selectedLanguage", lang)
    updateLanguage()
    updateLanguageSelector()
  }

  // Update language function
  function updateLanguage() {
    const elements = document.querySelectorAll("[data-lang-key]")
    elements.forEach((element) => {
      const key = element.getAttribute("data-lang-key")
      if (servicesTranslations[currentLang] && servicesTranslations[currentLang][key]) {
        element.textContent = servicesTranslations[currentLang][key]
      }
    })
  }

  // Update language selector
  function updateLanguageSelector() {
    const currentFlag = document.getElementById("current-flag")
    const currentLangAbbr = document.getElementById("current-lang-abbr")

    const flagMap = {
      tr: "world.png",
      en: "united-kingdom.png",
      de: "german.png",
    }

    if (currentFlag && currentLangAbbr) {
      currentFlag.src = flagMap[currentLang]
      currentLangAbbr.textContent = currentLang.toUpperCase()
    }
  }

  // Theme toggle functionality
  const themeToggle = document.querySelector(".theme-toggle")
  const body = document.body

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light"
  body.className = savedTheme + "-mode"

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = body.classList.contains("light-mode")
      body.className = isLight ? "dark-mode" : "light-mode"
      localStorage.setItem("theme", isLight ? "dark" : "light")
    })
  }

  // Language selector functionality
  const langButtons = document.querySelectorAll(".lang-btn")
  const selectedLang = document.querySelector(".selected-lang")
  const langDropdown = document.querySelector(".lang-dropdown")

  langButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const lang = btn.getAttribute("data-lang")
      switchLanguage(lang)
      if (langDropdown) langDropdown.classList.remove("active")
    })
  })

  if (selectedLang && langDropdown) {
    selectedLang.addEventListener("click", (e) => {
      e.stopPropagation()
      langDropdown.classList.toggle("active")
    })
    document.addEventListener("click", (e) => {
      if (!langDropdown.contains(e.target) && !selectedLang.contains(e.target)) {
        langDropdown.classList.remove("active")
      }
    })
  }

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mainNav = document.querySelector(".main-nav")

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active")
      mainNav.classList.toggle("active")
    })
  }

  // Video card click handlers
  const videoCards = document.querySelectorAll(".video-card")
  videoCards.forEach((card) => {
    card.addEventListener("click", function () {
      const videoTitle = this.querySelector(".video-info h3").textContent
      console.log(`Video açılıyor: ${videoTitle}`)
    })
  })

  // Service card hover effects
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Contact CTA button handlers
  const callButton = document.querySelector('[data-lang-key="contact-cta-call"]')
  const visitButton = document.querySelector('[data-lang-key="contact-cta-visit"]')

  if (callButton) {
    callButton.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "tel:+902121234567"
    })
  }

  if (visitButton) {
    visitButton.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Adres: Kütüphane Caddesi No:42, İstanbul")
    })
  }

  // Video Modal functionality
  const videoModal = document.getElementById("video-modal")
  const videoModalVideo = document.getElementById("video-modal-video")
  const videoModalClose = document.querySelector(".video-modal-close")

  document.querySelectorAll(".video-card[data-video-src]").forEach((card) => {
    card.addEventListener("click", function () {
      const src = this.getAttribute("data-video-src")
      if (videoModal && videoModalVideo) {
        videoModal.style.display = "flex"
        videoModalVideo.src = src
        videoModalVideo.currentTime = 0
        videoModalVideo.play()
      }
    })
  })

  if (videoModalClose) {
    videoModalClose.addEventListener("click", () => {
      videoModal.style.display = "none"
      videoModalVideo.pause()
      videoModalVideo.src = ""
    })
  }

  window.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = "none"
      videoModalVideo.pause()
      videoModalVideo.src = ""
    }
  })

  // Enhanced GSAP ScrollTrigger Animations
  const gsap = window.gsap // Declare gsap variable
  const ScrollTrigger = window.ScrollTrigger // Declare ScrollTrigger variable

  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)

    // Hero section animations
    gsap
      .timeline()
      .from(".services-hero .hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        ".services-hero .hero-subtitle",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .from(
        ".hero-stats .stat-item",
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        ".hero-video",
        {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      )

    // Service items with enhanced animations
    gsap.utils.toArray(".service-item").forEach((item, i) => {
      const isReverse = item.classList.contains("reverse")

      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
        .from(item.querySelector(".service-media"), {
          opacity: 0,
          x: isReverse ? 100 : -100,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          item.querySelector(".service-content"),
          {
            opacity: 0,
            x: isReverse ? -100 : 100,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .from(
          item.querySelectorAll(".service-features li"),
          {
            opacity: 0,
            x: 20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        )
    })

    // Video cards with stagger animation
    gsap.from(".video-card", {
      scrollTrigger: {
        trigger: ".video-grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 60,
      rotation: 5,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
    })

    // Service cards with wave animation
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-cards",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 0.7,
      stagger: {
        amount: 0.6,
        from: "start",
      },
      ease: "back.out(1.7)",
    })

    // Hours section with split animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".service-hours",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
      .from(".hours-info", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        ".hours-image",
        {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7",
      )
      .from(
        ".hours-item",
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5",
      )

    // Contact CTA with bounce effect
    gsap.from(".contact-cta .cta-content", {
      scrollTrigger: {
        trigger: ".contact-cta",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "bounce.out",
    })

    // Section headers with typewriter effect
    gsap.utils.toArray(".section-header").forEach((header) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
        .from(header.querySelector("h2"), {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          header.querySelector("p"),
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
    })

    // Parallax effect for hero image
    gsap.to(".hero-video img", {
      scrollTrigger: {
        trigger: ".services-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: -100,
      ease: "none",
    })

    // Professional hover effects for service icons (no rotation)
    gsap.utils.toArray(".service-icon, .card-icon").forEach((icon) => {
      const card = icon.closest(".service-card, .service-item")

      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }
    })
  }

  // Enhanced Loader Animation (same as homepage)
  const loader = document.querySelector(".loader")

  function hideLoader() {
    if (loader) {
      // First fade out the loader
      gsap.to(loader, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          loader.style.display = "none"

          // Then animate in the page content
          if (gsap) {
            gsap.timeline().set("body", { overflow: "visible" }).from(".services-hero", {
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            })
          }
        },
      })
    }
  }

  // Show loader initially
  if (loader) {
    loader.style.display = "flex"
    loader.style.opacity = "1"
    document.body.style.overflow = "hidden"
  }

  // Hide loader after page load
  window.addEventListener("load", () => {
    setTimeout(hideLoader, 1500)
  })

  // Fallback: Hide loader after 3 seconds
  setTimeout(hideLoader, 3000)

  // Smooth scroll for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]')
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Initialize language and theme
  updateLanguage()
  updateLanguageSelector()

  // Update service buttons to link to detail pages - IMPROVED VERSION
  function initializeServiceButtons() {
    const serviceButtons = document.querySelectorAll(".service-detail-btn")

    serviceButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault()

        const serviceId = btn.getAttribute("data-service-id") || btn.getAttribute("href").split("id=")[1]

        if (serviceId) {
          // Add loading state
          const originalText = btn.textContent
          btn.textContent = "Yükleniyor..."
          btn.style.pointerEvents = "none"

          // Simulate loading and redirect
          setTimeout(() => {
            window.location.href = `service-detail.html?id=${serviceId}`
          }, 300)
        } else {
          console.error("Service ID not found")
        }
      })
    })
  }

  const lenis=new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 1.5,
    })

  // Initialize service buttons after DOM is loaded
  initializeServiceButtons()

  // Also handle direct clicks on buttons without data attributes
  document.querySelectorAll(".service-content .btn").forEach((btn, index) => {
    if (!btn.classList.contains("service-detail-btn")) {
      const serviceIds = [1, 2, 3, 4] // Digital, Research, Education, Consultancy
      btn.addEventListener("click", (e) => {
        e.preventDefault()

        // Add loading state
        const originalText = btn.textContent
        btn.textContent = "Yükleniyor..."
        btn.style.pointerEvents = "none"

        setTimeout(() => {
          window.location.href = `service-detail.html?id=${serviceIds[index]}`
        }, 300)
      })
    }
  })

  console.log("Service detail buttons initialized successfully")
})
