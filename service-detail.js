// Service Detail Page JavaScript with Multi-language Support
document.addEventListener("DOMContentLoaded", () => {
  console.log("Service detail page loading with multi-language support...")

  // Multi-language translations for service detail page
  const serviceDetailTranslations = {
    tr: {
      // Page elements
      "breadcrumb-home": "Anasayfa",
      "breadcrumb-services": "Hizmetler",
      "features-title": "Özellikler ve Avantajlar",
      "features-subtitle": "Bu hizmetimizin sunduğu tüm özellikler ve avantajlar",
      "how-it-works-title": "Nasıl Çalışır?",
      "how-it-works-subtitle": "Bu hizmeti kullanmak için izlemeniz gereken adımlar",
      "benefits-title": "Neden Bu Hizmeti Seçmelisiniz?",
      "contact-cta-title": "Bu Hizmet Hakkında Daha Fazla Bilgi Almak İster misiniz?",
      "contact-cta-subtitle": "Uzman ekibimiz size yardımcı olmak için burada. Bize ulaşın ve detaylı bilgi alın.",
      "contact-cta-call": "Bizi Arayın",
      "contact-cta-email": "E-posta Gönderin",
      "related-services-title": "Tüm Hizmetlerimiz",
      "related-services-subtitle": "Kütüphanemizin sunduğu tüm hizmetleri keşfedin",
      "btn-details": "Detayları İncele",
      "btn-contact": "İletişime Geç",
      "btn-start": "Hemen Başlayın",
      loading: "Yükleniyor...",

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
      // Page elements
      "breadcrumb-home": "Home",
      "breadcrumb-services": "Services",
      "features-title": "Features and Benefits",
      "features-subtitle": "All features and benefits offered by this service",
      "how-it-works-title": "How It Works?",
      "how-it-works-subtitle": "Steps you need to follow to use this service",
      "benefits-title": "Why Should You Choose This Service?",
      "contact-cta-title": "Would You Like to Get More Information About This Service?",
      "contact-cta-subtitle": "Our expert team is here to help you. Contact us and get detailed information.",
      "contact-cta-call": "Call Us",
      "contact-cta-email": "Send Email",
      "related-services-title": "All Our Services",
      "related-services-subtitle": "Discover all the services our library offers",
      "btn-details": "Explore Details",
      "btn-contact": "Get in Touch",
      "btn-start": "Get Started",
      loading: "Loading...",

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
      // Page elements
      "breadcrumb-home": "Startseite",
      "breadcrumb-services": "Dienste",
      "features-title": "Funktionen und Vorteile",
      "features-subtitle": "Alle Funktionen und Vorteile, die dieser Service bietet",
      "how-it-works-title": "Wie funktioniert es?",
      "how-it-works-subtitle": "Schritte, die Sie befolgen müssen, um diesen Service zu nutzen",
      "benefits-title": "Warum sollten Sie diesen Service wählen?",
      "contact-cta-title": "Möchten Sie mehr Informationen über diesen Service erhalten?",
      "contact-cta-subtitle":
        "Unser Expertenteam ist hier, um Ihnen zu helfen. Kontaktieren Sie uns und erhalten Sie detaillierte Informationen.",
      "contact-cta-call": "Rufen Sie uns an",
      "contact-cta-email": "E-Mail senden",
      "related-services-title": "Alle unsere Dienste",
      "related-services-subtitle": "Entdecken Sie alle Dienste, die unsere Bibliothek anbietet",
      "btn-details": "Details erkunden",
      "btn-contact": "Kontakt aufnehmen",
      "btn-start": "Loslegen",
      loading: "Wird geladen...",

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

  // Get service ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const serviceId = urlParams.get("id") || "1"

  // Current language
  let currentLang = localStorage.getItem("selectedLanguage") || "tr"

  // Language switching function
  function switchLanguage(lang) {
    currentLang = lang
    localStorage.setItem("selectedLanguage", lang)
    updateLanguage()
    updateLanguageSelector()
    // Reload service data with new language - THIS IS THE FIX
    loadServiceData(serviceId)
  }

  // Update language function
  function updateLanguage() {
    const elements = document.querySelectorAll("[data-lang-key]")
    elements.forEach((element) => {
      const key = element.getAttribute("data-lang-key")
      if (serviceDetailTranslations[currentLang] && serviceDetailTranslations[currentLang][key]) {
        element.textContent = serviceDetailTranslations[currentLang][key]
      }
    })
  }

  // Update language selector
  function updateLanguageSelector() {
    const currentFlag = document.getElementById("current-flag")
    const currentLangAbbr = document.getElementById("current-lang-abbr")

    const flagMap = {
      tr: "img/world.png",
      en: "img/united-kingdom.png",
      de: "img/german.png",
    }

    if (currentFlag && currentLangAbbr) {
      currentFlag.src = flagMap[currentLang]
      currentLangAbbr.textContent = currentLang.toUpperCase()
    }
  }

  // Update infinite scroll text based on service ID and language
  function updateInfiniteScrollText(serviceId, serviceData) {
    const infiniteScrollText = document.getElementById("infinite-scroll-text")
    if (!infiniteScrollText) return

    const scrollTexts = {
      1: {
        tr: [
          "Dijital Kütüphane",
          "25.000+ E-kitap",
          "5.000+ Sesli Kitap",
          "7/24 Erişim",
          "Mobil Uygulama",
          "Offline Okuma",
          "Dijital Dergi",
          "Senkronizasyon",
        ],
        en: [
          "Digital Library",
          "25,000+ E-books",
          "5,000+ Audiobooks",
          "24/7 Access",
          "Mobile App",
          "Offline Reading",
          "Digital Magazine",
          "Synchronization",
        ],
        de: [
          "Digitale Bibliothek",
          "25.000+ E-Books",
          "5.000+ Hörbücher",
          "24/7 Zugang",
          "Mobile App",
          "Offline-Lesen",
          "Digitale Zeitschrift",
          "Synchronisation",
        ],
      },
      2: {
        tr: [
          "Araştırma Hizmetleri",
          "Akademik Danışmanlık",
          "50+ Veri Tabanı",
          "Uzman Rehberlik",
          "Kaynak Tarama",
          "Metodoloji Eğitimi",
          "Profesyonel Destek",
          "Araştırma Stratejisi",
        ],
        en: [
          "Research Services",
          "Academic Consulting",
          "50+ Databases",
          "Expert Guidance",
          "Resource Scanning",
          "Methodology Training",
          "Professional Support",
          "Research Strategy",
        ],
        de: [
          "Forschungsdienste",
          "Akademische Beratung",
          "50+ Datenbanken",
          "Expertenberatung",
          "Ressourcensuche",
          "Methodologie-Schulung",
          "Professionelle Unterstützung",
          "Forschungsstrategie",
        ],
      },
      3: {
        tr: [
          "Eğitim Programları",
          "15+ Farklı Program",
          "Uzman Eğitmenler",
          "Dijital Okuryazarlık",
          "Yaratıcı Yazma",
          "Çocuk Programları",
          "Sertifikalı Kurslar",
          "Esnek Saatler",
        ],
        en: [
          "Educational Programs",
          "15+ Different Programs",
          "Expert Instructors",
          "Digital Literacy",
          "Creative Writing",
          "Children Programs",
          "Certified Courses",
          "Flexible Hours",
        ],
        de: [
          "Bildungsprogramme",
          "15+ Verschiedene Programme",
          "Fachausbilder",
          "Digitale Kompetenz",
          "Kreatives Schreiben",
          "Kinderprogramme",
          "Zertifizierte Kurse",
          "Flexible Zeiten",
        ],
      },
      4: {
        tr: [
          "Kütüphane Danışmanlığı",
          "Bireysel Danışmanlık",
          "Kişisel Plan",
          "Kaynak Yönetimi",
          "Özel Araştırma",
          "Uzman Rehberlik",
          "24/7 Destek",
          "Kişiselleştirilmiş",
        ],
        en: [
          "Library Consultancy",
          "Individual Consulting",
          "Personal Plan",
          "Resource Management",
          "Special Research",
          "Expert Guidance",
          "24/7 Support",
          "Personalized",
        ],
        de: [
          "Bibliotheksberatung",
          "Individuelle Beratung",
          "Persönlicher Plan",
          "Ressourcenmanagement",
          "Spezialforschung",
          "Expertenberatung",
          "24/7 Support",
          "Personalisiert",
        ],
      },
    }

    const texts = scrollTexts[serviceId]?.[currentLang] || scrollTexts[1].tr

    // Create the scrolling text with duplicated content for seamless loop
    const duplicatedTexts = [...texts, ...texts]
    infiniteScrollText.innerHTML = duplicatedTexts.map((text) => `<span>${text}</span>`).join("")

    console.log(`Infinite scroll text updated for service ${serviceId} in ${currentLang}`)
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

  // Load service data function with multi-language support
  async function loadServiceData(id) {
    try {
      console.log(`Loading service data for ID: ${id}, Language: ${currentLang}`)
      const response = await fetch("data/services.json")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const services = await response.json()
      console.log("Services loaded:", services)

      const service = services[id]
      console.log("Selected service:", service)

      if (!service) {
        console.error("Service not found, loading fallback content")
        loadFallbackContent(id)
        // Still load related services even if main service fails
        loadFallbackRelatedServices(id)
        return
      }

      // Get current language data
      const serviceData = service.translations[currentLang]
      console.log("Service data for language:", currentLang, serviceData)

      if (!serviceData) {
        console.error("Language data not found, trying Turkish")
        const fallbackData = service.translations["tr"]
        if (fallbackData) {
          updatePageContent(service, fallbackData)
        } else {
          loadFallbackContent(id)
        }
        // Load related services regardless
        loadRelatedServices(services, id)
        return
      }

      // Update page content with current language
      updatePageContent(service, serviceData)
      // ALWAYS load related services
      loadRelatedServices(services, id)

      // Initialize animations after content is loaded
      setTimeout(initializeAnimations, 100)
    } catch (error) {
      console.error("Error loading service data:", error)
      loadFallbackContent(id)
      // Load fallback related services on error
      loadFallbackRelatedServices(id)
    }
  }

  // Add fallback content function
  function loadFallbackContent(id) {
    console.log("Loading fallback content for service ID:", id)

    const fallbackData = {
      1: {
        title: "Dijital Kütüphane",
        subtitle: "Modern teknoloji ile okuma deneyiminizi zenginleştirin",
        description:
          "25.000+ e-kitap, 5.000+ sesli kitap ve dijital dergilere 7/24 erişim imkanı. Mobil uygulamamız ile istediğiniz yerden okuyun.",
        icon: "fas fa-laptop",
      },
      2: {
        title: "Araştırma Hizmetleri",
        subtitle: "Akademik başarınız için profesyonel destek",
        description:
          "Akademik araştırmalarınız için profesyonel destek. Uzman kütüphanecilerimiz size rehberlik eder ve kaynak bulmanızda yardımcı olur.",
        icon: "fas fa-search",
      },
      3: {
        title: "Eğitim Programları",
        subtitle: "Her yaş için özel tasarlanmış eğitim programları",
        description:
          "Her yaş grubuna yönelik eğitim programları. Okuma yazma kurslarından dijital okuryazarlığa kadar geniş bir yelpaze.",
        icon: "fas fa-graduation-cap",
      },
      4: {
        title: "Kütüphane Danışmanlığı",
        subtitle: "Kişiselleştirilmiş kütüphane deneyimi",
        description: "Uzmanlarımızdan birebir danışmanlık alın, kütüphane kaynaklarını en verimli şekilde kullanın.",
        icon: "fas fa-user-tie",
      },
    }

    const serviceInfo = fallbackData[id] || fallbackData["1"]

    // Update basic info
    document.getElementById("service-title").textContent = serviceInfo.title
    document.getElementById("service-subtitle").textContent = serviceInfo.subtitle
    document.getElementById("service-description").textContent = serviceInfo.description
    document.getElementById("service-icon").className = serviceInfo.icon
    document.getElementById("breadcrumb-title").textContent = serviceInfo.title

    // Add some default features
    const featuresGrid = document.getElementById("features-grid")
    featuresGrid.innerHTML = `
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-star"></i></div>
        <h3>Kaliteli Hizmet</h3>
        <p>Uzman ekibimizle size en kaliteli hizmeti sunuyoruz.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-clock"></i></div>
        <h3>7/24 Erişim</h3>
        <p>İhtiyacınız olan her an hizmetlerimize erişebilirsiniz.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-users"></i></div>
        <h3>Uzman Destek</h3>
        <p>Alanında uzman kişilerden profesyonel destek alın.</p>
      </div>
    `

    // Add default steps
    const stepsContainer = document.getElementById("steps-container")
    stepsContainer.innerHTML = `
      <div class="step-item">
        <div class="step-number">1</div>
        <h3>Kayıt Olun</h3>
        <p>Hizmetimizden yararlanmak için üye olun.</p>
      </div>
      <div class="step-item">
        <div class="step-number">2</div>
        <h3>Hizmeti Seçin</h3>
        <p>İhtiyacınıza uygun hizmeti belirleyin.</p>
      </div>
      <div class="step-item">
        <div class="step-number">3</div>
        <h3>Keyfini Çıkarın</h3>
        <p>Hizmetimizin tadını çıkarın ve faydalanın.</p>
      </div>
    `

    // Add default benefits
    const benefitsList = document.getElementById("benefits-list")
    benefitsList.innerHTML = `
      <li>Profesyonel hizmet kalitesi</li>
      <li>Uygun fiyat seçenekleri</li>
      <li>Esnek kullanım imkanları</li>
      <li>Sürekli güncellenen içerik</li>
      <li>Teknik destek hizmeti</li>
    `

    // Add default stats
    const statsGrid = document.getElementById("stats-grid")
    statsGrid.innerHTML = `
      <div class="stat-item">
        <span class="stat-number">1000+</span>
        <span class="stat-label">Memnun Kullanıcı</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">24/7</span>
        <span class="stat-label">Hizmet</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">99%</span>
        <span class="stat-label">Memnuniyet</span>
      </div>
    `

    // Update infinite scroll text with fallback
    updateInfiniteScrollText(id, null)
  }

  // Update page content with language-specific data - FIXED VERSION
  function updatePageContent(service, serviceData) {
    console.log("Updating page content with:", serviceData)

    // Update title and meta
    document.title = `${serviceData.title} - Modern Kütüphane`

    // Update breadcrumb
    document.getElementById("breadcrumb-title").textContent = serviceData.title

    // Update hero section
    document.getElementById("service-icon").className = service.icon
    document.getElementById("service-title").textContent = serviceData.title
    document.getElementById("service-subtitle").textContent = serviceData.subtitle
    document.getElementById("service-description").textContent = serviceData.description
    document.getElementById("service-hero-image").src = service.heroImage
    document.getElementById("service-hero-image").alt = serviceData.title

    // Update stats with language-specific labels
    const statsGrid = document.getElementById("stats-grid")
    if (statsGrid && serviceData.stats) {
      statsGrid.innerHTML = ""
      serviceData.stats.forEach((stat) => {
        const statItem = document.createElement("div")
        statItem.className = "stat-item"
        statItem.innerHTML = `
          <span class="stat-number">${stat.number}</span>
          <span class="stat-label">${stat.label}</span>
        `
        statsGrid.appendChild(statItem)
      })
    }

    // Update features
    const featuresGrid = document.getElementById("features-grid")
    if (featuresGrid && serviceData.features) {
      featuresGrid.innerHTML = ""
      serviceData.features.forEach((feature) => {
        const featureCard = document.createElement("div")
        featureCard.className = "feature-card"
        featureCard.innerHTML = `
          <div class="feature-icon">
            <i class="${feature.icon}"></i>
          </div>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        `
        featuresGrid.appendChild(featureCard)
      })
    }

    // Update how it works
    const stepsContainer = document.getElementById("steps-container")
    if (stepsContainer && serviceData.howItWorks) {
      stepsContainer.innerHTML = ""
      serviceData.howItWorks.forEach((step) => {
        const stepItem = document.createElement("div")
        stepItem.className = "step-item"
        stepItem.innerHTML = `
          <div class="step-number">${step.step}</div>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        `
        stepsContainer.appendChild(stepItem)
      })
    }

    // Update benefits
    const benefitsList = document.getElementById("benefits-list")
    if (benefitsList && serviceData.benefits) {
      benefitsList.innerHTML = ""
      serviceData.benefits.forEach((benefit) => {
        const benefitItem = document.createElement("li")
        benefitItem.textContent = benefit
        benefitsList.appendChild(benefitItem)
      })
    }

    // Update "Why Choose" section
    const benefitsText = document.querySelector(".benefits-text h2")
    if (benefitsText && serviceData.whyChoose) {
      benefitsText.textContent = serviceData.whyChoose.title

      // Clear existing benefits and add new ones
      if (benefitsList) {
        benefitsList.innerHTML = ""
        serviceData.whyChoose.reasons.forEach((reason) => {
          const benefitItem = document.createElement("li")
          benefitItem.textContent = reason
          benefitsList.appendChild(benefitItem)
        })
      }
    }

    // Update images with service-specific placeholders
    if (service.featuresImage) {
      const featuresImages = document.querySelectorAll(".service-features img, .features-image img")
      featuresImages.forEach((img) => {
        img.src = service.featuresImage
      })
    }

    if (service.benefitsImage) {
      const benefitsImages = document.querySelectorAll(".service-benefits img, .benefits-image img")
      benefitsImages.forEach((img) => {
        img.src = service.benefitsImage
      })
    }

    console.log("Page content updated successfully")

    // Update infinite scroll text
    updateInfiniteScrollText(service.id, serviceData)
  }

  // Load related services with language support - SHOW ALL SERVICES
  function loadRelatedServices(services, currentId) {
    console.log("Loading related services...", services, currentId)
    const relatedGrid = document.getElementById("related-grid")
    if (!relatedGrid) {
      console.error("Related grid element not found!")
      return
    }

    relatedGrid.innerHTML = ""

    // Get all services and show them all (including current one for consistency)
    const allServices = Object.values(services)
    console.log("All services:", allServices)

    if (allServices.length === 0) {
      console.log("No services found, loading fallback")
      loadFallbackRelatedServices(currentId)
      return
    }

    // Show all 4 services in a professional grid
    allServices.forEach((service) => {
      const serviceData = service.translations[currentLang]
      if (serviceData) {
        const isCurrentService = service.id.toString() === currentId

        const relatedCard = document.createElement("a")
        relatedCard.href = `service-detail.html?id=${service.id}`
        relatedCard.className = `related-card ${isCurrentService ? "current-service" : ""}`
        relatedCard.innerHTML = `
        <div class="related-icon">
          <i class="${service.icon}"></i>
        </div>
        <h3>${serviceData.title}</h3>
        <p>${serviceData.description.substring(0, 100)}...</p>
        <div class="card-footer">
          <span class="learn-more">
            ${isCurrentService ? "Mevcut Sayfa" : "Detayları İncele"} →
          </span>
        </div>
      `

        // Disable click for current service
        if (isCurrentService) {
          relatedCard.addEventListener("click", (e) => {
            e.preventDefault()
          })
        }

        relatedGrid.appendChild(relatedCard)
        console.log(`Added service card: ${serviceData.title}`)
      }
    })

    console.log("Related services loaded successfully")
  }

  // Fallback related services function
  function loadFallbackRelatedServices(currentId) {
    console.log("Loading fallback related services...")
    const relatedGrid = document.getElementById("related-grid")
    if (!relatedGrid) return

    const fallbackServices = [
      {
        id: 1,
        title: "Dijital Kütüphane",
        description: "25.000+ e-kitap, 5.000+ sesli kitap ve dijital dergilere 7/24 erişim imkanı.",
        icon: "fas fa-laptop",
      },
      {
        id: 2,
        title: "Araştırma Hizmetleri",
        description: "Akademik araştırmalarınız için profesyonel destek ve uzman rehberlik.",
        icon: "fas fa-search",
      },
      {
        id: 3,
        title: "Eğitim Programları",
        description: "Her yaş grubuna yönelik kapsamlı eğitim programları ve atölyeler.",
        icon: "fas fa-graduation-cap",
      },
      {
        id: 4,
        title: "Kütüphane Danışmanlığı",
        description: "Kişiselleştirilmiş danışmanlık hizmeti ve kaynak yönetimi desteği.",
        icon: "fas fa-user-tie",
      },
    ]

    relatedGrid.innerHTML = ""

    fallbackServices.forEach((service) => {
      const isCurrentService = service.id.toString() === currentId

      const relatedCard = document.createElement("a")
      relatedCard.href = `service-detail.html?id=${service.id}`
      relatedCard.className = `related-card ${isCurrentService ? "current-service" : ""}`
      relatedCard.innerHTML = `
        <div class="related-icon">
          <i class="${service.icon}"></i>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <div class="card-footer">
          <span class="learn-more">
            ${isCurrentService ? "Mevcut Sayfa" : "Detayları İncele"} →
          </span>
        </div>
      `

      // Disable click for current service
      if (isCurrentService) {
        relatedCard.addEventListener("click", (e) => {
          e.preventDefault()
        })
      }

      relatedGrid.appendChild(relatedCard)
    })

    console.log("Fallback related services loaded")
  }

  // Initialize GSAP animations
  function initializeAnimations() {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)

      // Hero section animation
      gsap
        .timeline({ delay: 0.5 })
        .from(".service-icon-large", {
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          ease: "back.out(1.7)",
        })
        .from(
          ".hero-text h1",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-text p",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-buttons .btn",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1",
        )

      // Stats animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".service-stats",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })

      // Features animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".service-features",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })

      // Steps animation
      gsap.from(".step-item", {
        scrollTrigger: {
          trigger: ".how-it-works",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
      })

      // Benefits animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".service-benefits",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".benefits-text h2", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".benefits-list li",
          {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".benefits-text .btn",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".benefits-image",
          {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=1",
        )

      // Related services animation
      gsap.from(".related-card", {
        scrollTrigger: {
          trigger: ".related-services",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })

      // Section headers animation
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
    }
  }

  // Enhanced Loader Animation
  const loader = document.querySelector(".loader")

  function hideLoader() {
    if (loader) {
      const gsap = window.gsap
      if (gsap) {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            loader.style.display = "none"
            document.body.style.overflow = "visible"
          },
        })
      } else {
        loader.style.display = "none"
        document.body.style.overflow = "visible"
      }
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
    setTimeout(hideLoader, 1000)
  })

  // Fallback: Hide loader after 3 seconds
  setTimeout(hideLoader, 3000)

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
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

  const lenis=new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 1.5,
    })

  // Initialize everything
  loadServiceData(serviceId)
  updateLanguage()
  updateLanguageSelector()

  console.log("Service detail page loaded successfully with multi-language support")
})
