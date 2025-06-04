// Contact Page JavaScript with Complete 3-Language Support

document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const navLoginBtn = document.getElementById("nav-login-btn")
  const navRegisterBtn = document.getElementById("nav-register-btn")

  // Complete Language translations for Contact Page
  const translations = {
    tr: {
      flag: "img/world.png",
      abbr: "TR",

      // Page Title
      "page-title": "İletişim - LiteraHub",

      // Navigation
      "nav-home": "Anasayfa",
      "nav-books": "Kitaplar",
      "nav-events": "Etkinlikler",
      "nav-services": "Hizmetler",
      "nav-about": "Hakkımızda",
      "nav-contact": "İletişim",
      "nav-login": "Giriş Yap",
      "nav-register": "Üye Ol",

      // Contact Page Content
      "contact-hero-title": "İletişim",
      "contact-hero-subtitle": "Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız",
      "contact-hero-location": "İstanbul, Türkiye",
      "contact-hero-badge": "7/24 Destek",

      "contact-info-title": "İletişim Bilgileri",
      "contact-address-title": "Adres",
      "contact-address-line1": "Atatürk Mahallesi, Kütüphane Sokak No:15",
      "contact-address-line2": "34000 İstanbul, Türkiye",
      "contact-phone-title": "Telefon",
      "contact-fax": "+90 212 555 0124 (Fax)",
      "contact-email-title": "E-posta",
      "contact-hours-title": "Çalışma Saatleri",
      "contact-hours-weekdays": "Pazartesi - Cuma: 08:00 - 20:00",
      "contact-hours-saturday": "Cumartesi: 09:00 - 17:00",
      "contact-hours-sunday": "Pazar: Kapalı",

      "contact-form-title": "Mesaj Gönder",
      "contact-form-firstname": "Ad",
      "contact-form-lastname": "Soyad",
      "contact-form-email": "E-posta",
      "contact-form-phone": "Telefon",
      "contact-form-subject": "Konu",
      "contact-form-subject-placeholder": "Konu seçiniz",
      "contact-form-subject-membership": "Üyelik İşlemleri",
      "contact-form-subject-services": "Hizmetler Hakkında",
      "contact-form-subject-events": "Etkinlikler",
      "contact-form-subject-complaint": "Şikayet",
      "contact-form-subject-suggestion": "Öneri",
      "contact-form-subject-other": "Diğer",
      "contact-form-message": "Mesaj",
      "contact-form-privacy": "Kişisel verilerimin işlenmesini kabul ediyorum",
      "contact-form-submit": "Mesaj Gönder",

      "contact-map-title": "Konumumuz",
      "contact-map-location-title": "Kütüphane Konumu",
      "contact-map-location-address": "Atatürk Mahallesi, Kütüphane Sokak No:15, İstanbul",
      "contact-map-directions": "Yol Tarifi Al",

      "contact-faq-title": "Sık Sorulan Sorular",
      "contact-faq-subtitle": "En çok merak edilen sorular ve cevapları",
      "contact-faq-q1": "Üyelik nasıl yapılır?",
      "contact-faq-a1":
        "Kimlik belgeniz ile kütüphanemize gelerek ücretsiz üyelik yapabilirsiniz. Üyelik işlemi sadece birkaç dakika sürer.",
      "contact-faq-q2": "Kitap ödünç alma süresi nedir?",
      "contact-faq-a2":
        "Kitapları 15 gün süreyle ödünç alabilirsiniz. Bu süre 1 kez uzatılabilir. Gecikme durumunda günlük 1 TL ceza uygulanır.",
      "contact-faq-q3": "Dijital kaynaklara nasıl erişebilirim?",
      "contact-faq-a3":
        "Üye olduktan sonra size verilen kullanıcı adı ve şifre ile dijital kaynaklara 7/24 erişebilirsiniz.",
      "contact-faq-q4": "Çalışma alanları rezerve edilebilir mi?",
      "contact-faq-a4":
        "Evet, grup çalışma odalarını önceden rezerve edebilirsiniz. Rezervasyon için en az 1 gün önceden başvuru yapmanız gerekir.",
      "contact-faq-q5": "Etkinliklere nasıl katılabilirim?",
      "contact-faq-a5": "Etkinliklerimiz ücretsizdir ve web sitemizden veya kütüphanemizden kayıt yaptırabilirsiniz.",
      "contact-faq-q6": "Fotokopi ve baskı hizmeti var mı?",
      "contact-faq-a6":
        "Evet, kütüphanemizde ücretli fotokopi ve baskı hizmeti bulunmaktadır. Sayfa başına 0.50 TL ücret alınır.",

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
      "page-title": "Contact - LiteraHub",

      // Navigation
      "nav-home": "Home",
      "nav-books": "Books",
      "nav-events": "Events",
      "nav-services": "Services",
      "nav-about": "About",
      "nav-contact": "Contact",
      "nav-login": "Login",
      "nav-register": "Register",

      // Contact Page Content
      "contact-hero-title": "Contact Us",
      "contact-hero-subtitle": "Get in touch with us, we'd be happy to help you",
      "contact-hero-location": "Istanbul, Turkey",
      "contact-hero-badge": "24/7 Support",

      "contact-info-title": "Contact Information",
      "contact-address-title": "Address",
      "contact-address-line1": "Atatürk Neighborhood, Library Street No:15",
      "contact-address-line2": "34000 Istanbul, Turkey",
      "contact-phone-title": "Phone",
      "contact-fax": "+90 212 555 0124 (Fax)",
      "contact-email-title": "Email",
      "contact-hours-title": "Working Hours",
      "contact-hours-weekdays": "Monday - Friday: 08:00 - 20:00",
      "contact-hours-saturday": "Saturday: 09:00 - 17:00",
      "contact-hours-sunday": "Sunday: Closed",

      "contact-form-title": "Send Message",
      "contact-form-firstname": "First Name",
      "contact-form-lastname": "Last Name",
      "contact-form-email": "Email",
      "contact-form-phone": "Phone",
      "contact-form-subject": "Subject",
      "contact-form-subject-placeholder": "Select subject",
      "contact-form-subject-membership": "Membership",
      "contact-form-subject-services": "About Services",
      "contact-form-subject-events": "Events",
      "contact-form-subject-complaint": "Complaint",
      "contact-form-subject-suggestion": "Suggestion",
      "contact-form-subject-other": "Other",
      "contact-form-message": "Message",
      "contact-form-privacy": "I accept the processing of my personal data",
      "contact-form-submit": "Send Message",

      "contact-map-title": "Our Location",
      "contact-map-location-title": "Library Location",
      "contact-map-location-address": "Atatürk Neighborhood, Library Street No:15, Istanbul",
      "contact-map-directions": "Get Directions",

      "contact-faq-title": "Frequently Asked Questions",
      "contact-faq-subtitle": "Most frequently asked questions and answers",
      "contact-faq-q1": "How to become a member?",
      "contact-faq-a1":
        "You can become a member for free by visiting our library with your ID. The membership process takes only a few minutes.",
      "contact-faq-q2": "What is the book borrowing period?",
      "contact-faq-a2":
        "You can borrow books for 15 days. This period can be extended once. A daily penalty of 1 TL is applied in case of delay.",
      "contact-faq-q3": "How can I access digital resources?",
      "contact-faq-a3":
        "After becoming a member, you can access digital resources 24/7 with the username and password provided to you.",
      "contact-faq-q4": "Can study areas be reserved?",
      "contact-faq-a4":
        "Yes, you can reserve group study rooms in advance. You need to apply at least 1 day in advance for reservation.",
      "contact-faq-q5": "How can I participate in events?",
      "contact-faq-a5": "Our events are free and you can register from our website or from our library.",
      "contact-faq-q6": "Is there photocopying and printing service?",
      "contact-faq-a6":
        "Yes, we have paid photocopying and printing services in our library. A fee of 0.50 TL per page is charged.",

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
      "page-title": "Kontakt - LiteraHub",

      // Navigation
      "nav-home": "Startseite",
      "nav-books": "Bücher",
      "nav-events": "Veranstaltungen",
      "nav-services": "Dienstleistungen",
      "nav-about": "Über uns",
      "nav-contact": "Kontakt",
      "nav-login": "Anmelden",
      "nav-register": "Registrieren",

      // Contact Page Content
      "contact-hero-title": "Kontakt",
      "contact-hero-subtitle": "Kontaktieren Sie uns, wir helfen Ihnen gerne weiter",
      "contact-hero-location": "Istanbul, Türkei",
      "contact-hero-badge": "24/7 Support",

      "contact-info-title": "Kontaktinformationen",
      "contact-address-title": "Adresse",
      "contact-address-line1": "Atatürk Nachbarschaft, Bibliothekstraße Nr:15",
      "contact-address-line2": "34000 Istanbul, Türkei",
      "contact-phone-title": "Telefon",
      "contact-fax": "+90 212 555 0124 (Fax)",
      "contact-email-title": "E-Mail",
      "contact-hours-title": "Öffnungszeiten",
      "contact-hours-weekdays": "Montag - Freitag: 08:00 - 20:00",
      "contact-hours-saturday": "Samstag: 09:00 - 17:00",
      "contact-hours-sunday": "Sonntag: Geschlossen",

      "contact-form-title": "Nachricht senden",
      "contact-form-firstname": "Vorname",
      "contact-form-lastname": "Nachname",
      "contact-form-email": "E-Mail",
      "contact-form-phone": "Telefon",
      "contact-form-subject": "Betreff",
      "contact-form-subject-placeholder": "Betreff auswählen",
      "contact-form-subject-membership": "Mitgliedschaft",
      "contact-form-subject-services": "Über Dienstleistungen",
      "contact-form-subject-events": "Veranstaltungen",
      "contact-form-subject-complaint": "Beschwerde",
      "contact-form-subject-suggestion": "Vorschlag",
      "contact-form-subject-other": "Andere",
      "contact-form-message": "Nachricht",
      "contact-form-privacy": "Ich akzeptiere die Verarbeitung meiner persönlichen Daten",
      "contact-form-submit": "Nachricht senden",

      "contact-map-title": "Unser Standort",
      "contact-map-location-title": "Bibliotheksstandort",
      "contact-map-location-address": "Atatürk Nachbarschaft, Bibliothekstraße Nr:15, Istanbul",
      "contact-map-directions": "Wegbeschreibung",

      "contact-faq-title": "Häufig gestellte Fragen",
      "contact-faq-subtitle": "Die am häufigsten gestellten Fragen und Antworten",
      "contact-faq-q1": "Wie wird man Mitglied?",
      "contact-faq-a1":
        "Sie können kostenlos Mitglied werden, indem Sie unsere Bibliothek mit Ihrem Ausweis besuchen. Der Mitgliedschaftsprozess dauert nur wenige Minuten.",
      "contact-faq-q2": "Wie lange ist die Buchausleihzeit?",
      "contact-faq-a2":
        "Sie können Bücher für 15 Tage ausleihen. Diese Zeit kann einmal verlängert werden. Bei Verspätung wird eine tägliche Strafe von 1 TL angewendet.",
      "contact-faq-q3": "Wie kann ich auf digitale Ressourcen zugreifen?",
      "contact-faq-a3":
        "Nach der Mitgliedschaft können Sie mit dem Ihnen zur Verfügung gestellten Benutzernamen und Passwort rund um die Uhr auf digitale Ressourcen zugreifen.",
      "contact-faq-q4": "Können Lernbereiche reserviert werden?",
      "contact-faq-a4":
        "Ja, Sie können Gruppenlernräume im Voraus reservieren. Für eine Reservierung müssen Sie sich mindestens 1 Tag im Voraus bewerben.",
      "contact-faq-q5": "Wie kann ich an Veranstaltungen teilnehmen?",
      "contact-faq-a5":
        "Unsere Veranstaltungen sind kostenlos und Sie können sich über unsere Website oder in unserer Bibliothek anmelden.",
      "contact-faq-q6": "Gibt es Fotokopier- und Druckservice?",
      "contact-faq-a6":
        "Ja, wir haben kostenpflichtige Fotokopier- und Druckdienste in unserer Bibliothek. Eine Gebühr von 0,50 TL pro Seite wird erhoben.",

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

  // Theme toggle functionality
  const themeToggle = document.querySelector(".theme-toggle")
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    document.body.classList.toggle("light-mode")
  })

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

  // Close dropdown if clicked outside
  document.addEventListener("click", (event) => {
    if (!selectedLangArea.contains(event.target) && !langDropdown.contains(event.target)) {
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
      currentFlagElement.src = translations[lang].flag
      currentFlagElement.alt = translations[lang].abbr + " Flag"
      currentLangAbbrElement.textContent = translations[lang].abbr
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

  mobileMenuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active")
    mobileMenuBtn.classList.toggle("active")
  })

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

  // Contact form functionality
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Basic validation
      if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
        alert(
          currentLang === "tr"
            ? "Lütfen tüm gerekli alanları doldurun."
            : currentLang === "en"
              ? "Please fill in all required fields."
              : "Bitte füllen Sie alle erforderlichen Felder aus.",
        )
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        alert(
          currentLang === "tr"
            ? "Lütfen geçerli bir e-posta adresi girin."
            : currentLang === "en"
              ? "Please enter a valid email address."
              : "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        )
        return
      }

      // Privacy checkbox validation
      if (!data.privacy) {
        alert(
          currentLang === "tr"
            ? "Kişisel verilerinizin işlenmesini kabul etmelisiniz."
            : currentLang === "en"
              ? "You must accept the processing of your personal data."
              : "Sie müssen der Verarbeitung Ihrer persönlichen Daten zustimmen.",
        )
        return
      }

      // Simulate form submission
      const submitBtn = this.querySelector(".submit-btn")
      const originalText = submitBtn.innerHTML

      const loadingText =
        currentLang === "tr" ? "Gönderiliyor..." : currentLang === "en" ? "Sending..." : "Wird gesendet..."

      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>${loadingText}</span>`
      submitBtn.disabled = true

      setTimeout(() => {
        const successMessage =
          currentLang === "tr"
            ? "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
            : currentLang === "en"
              ? "Your message has been sent successfully! We will get back to you soon."
              : "Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns bald bei Ihnen melden."

        alert(successMessage)

        this.reset()
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }

  const lenis=new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 1.5,
    })

    
  // FAQ functionality
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active")
      })

      // Toggle current item
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })

  // Initialize with default language settings
  setLanguage(currentLang)
})
