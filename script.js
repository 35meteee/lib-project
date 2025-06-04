// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Get DOM elements
    const navLoginBtn = document.getElementById('nav-login-btn');
    const navRegisterBtn = document.getElementById('nav-register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showPasswordBtn = document.getElementById('show-password');
    const showRegisterPasswordBtn = document.getElementById('show-register-password');
    const passwordInput = document.getElementById('password');
    const registerPasswordInput = document.getElementById('register-password');
    const closeLoginModalBtn = document.getElementById('close-login-modal');
    const modalOverlay = document.getElementById('book-modal-overlay');
    const heroMembershipBtn = document.querySelector('[data-lang-key="hero-btn-membership"]');
    
    console.log('Modal elements:', { 
        loginModal: !!loginModal, 
        modalOverlay: !!modalOverlay,
        navLoginBtn: !!navLoginBtn,
        navRegisterBtn: !!navRegisterBtn
    });
    
    // Language translations
    const translations = {
        'tr': {
            flag: 'world.png',
            abbr: 'TR',
            // Navigation
            'nav-home': 'Anasayfa',
            'nav-books': 'Kitaplar',
            'nav-events': 'Etkinlikler',
            'nav-services': 'Hizmetler',
            'nav-about': 'Hakkımızda',
            'nav-contact': 'İletişim',
            
            // Hero section
            'hero-title': 'Bilginin Dünyasına Hoş Geldiniz',
            'hero-subtitle': 'Keşfedin, öğrenin ve ilham alın. Modern kütüphanemizde binlerce kitap sizi bekliyor.',
            'hero-btn-catalog': 'Kataloğu Keşfet',
            'hero-btn-membership': 'Üye Ol',
            'scroll-down': 'Aşağı Kaydır',
            
            // Search section
            'search-title': 'Kitap Ara',
            'search-placeholder': 'Kitap adı, yazar veya konu...',
            
            // Featured books section
            'featured-title': 'Öne Çıkan Kitaplar',
            'featured-subtitle': 'Kütüphanemizin en popüler ve yeni eklenen kitapları',
            'loading-books': 'Kitaplar yükleniyor...',
            
            // Categories section
            'categories-title': 'Kategoriler',
            'categories-subtitle': 'İlgi alanınıza göre kitapları keşfedin',
            'cat-fiction': 'Kurgu',
            'cat-fiction-desc': 'Roman, hikaye ve diğer kurgu eserler',
            'cat-science': 'Bilim',
            'cat-science-desc': 'Bilim ve teknoloji kitapları',
            'cat-history': 'Tarih',
            'cat-history-desc': 'Tarih ve kültür kitapları',
            'cat-biography': 'Biyografi',
            'cat-biography-desc': 'Biyografiler ve anılar',
            'cat-children': 'Çocuk',
            'cat-children-desc': 'Çocuk kitapları ve hikayeler',
            'cat-art': 'Sanat',
            'cat-art-desc': 'Sanat ve tasarım kitapları',
            
            // Services section
            'services-title': 'Kütüphane Hizmetlerimiz',
            'services-subtitle': 'Size sunduğumuz özel hizmetler',
            'service-digital': 'Dijital Kütüphane',
            'service-digital-desc': 'E-kitaplar, sesli kitaplar ve dijital kaynaklar',
            'service-workshops': 'Atölyeler',
            'service-workshops-desc': 'Yazarlık, okuma ve diğer eğitim atölyeleri',
            'service-clubs': 'Kitap Kulüpleri',
            'service-clubs-desc': 'Farklı türlerde kitap tartışma grupları',
            'service-cafe': 'Kütüphane Kafe',
            'service-cafe-desc': 'Kitap okurken keyifli vakit geçirebileceğiniz kafe',
            
            // Events section
            'events-title': 'Yaklaşan Etkinlikler',
            'events-subtitle': 'Kütüphanemizde gerçekleşecek etkinlikler',
            'event-1-title': 'Yazar Söyleşisi: Modern Edebiyat',
            'event-1-time': '18:00 - 20:00',
            'event-1-desc': 'Ünlü yazar Ahmet Yılmaz ile modern edebiyat üzerine söyleşi ve imza günü.',
            'event-2-title': 'Çocuk Kitapları Atölyesi',
            'event-2-time': '14:00 - 16:00',
            'event-2-desc': 'Çocuklar için interaktif hikaye okuma ve yaratıcı yazma atölyesi.',
            'event-3-title': 'Kitap Kulübü: Klasik Eserler',
            'event-3-time': '19:00 - 21:00',
            'event-3-desc': 'Bu ayın kitabı "Suç ve Ceza" üzerine tartışma ve analiz.',
            'event-register': 'Kayıt Ol',
            'month-may': 'Mayıs',
            
            // Testimonials section
            'testimonials-title': 'Üyelerimizin Yorumları',
            'testimonials-subtitle': 'Kütüphanemiz hakkında ne düşünüyorlar?',
            'testimonial-1': '"Bu kütüphane sadece kitaplarıyla değil, sunduğu atmosfer ve hizmetlerle de harika. Dijital kütüphane özelliği sayesinde evden çıkmadan da kitaplara erişebiliyorum."',
            'testimonial-1-name': 'Ayşe Kaya',
            'testimonial-1-title': 'Öğretmen',
            'testimonial-2': '"Çocuğumla birlikte katıldığımız atölyeler sayesinde okuma alışkanlığı kazandı. Personel her zaman yardımcı ve güler yüzlü. Kesinlikle harika bir kütüphane deneyimi."',
            'testimonial-2-name': 'Mehmet Demir',
            'testimonial-2-title': 'Mühendis',
            'testimonial-3': '"Kitap kulüplerine katılmak benim için haftanın en güzel zamanı. Farklı bakış açıları kazanıyor ve yeni insanlarla tanışıyorum. Kütüphane kafesi de çok keyifli."',
            'testimonial-3-name': 'Zeynep Yıldız',
            'testimonial-3-title': 'Öğrenci',
            
            // Newsletter section
            'newsletter-title': 'Bültenimize Abone Olun',
            'newsletter-subtitle': 'Yeni kitaplar, etkinlikler ve özel tekliflerden haberdar olun',
            'newsletter-placeholder': 'E-posta adresiniz',
            'newsletter-button': 'Abone Ol',
            
            // Stats section
            'stat-books': 'Kitap',
            'stat-members': 'Üye',
            'stat-events': 'Yıllık Etkinlik',
            'stat-years': 'Yıllık Deneyim',
            
            // Gallery section
            'gallery-title': 'Kütüphane Galerisi',
            'gallery-subtitle': 'Kütüphanemizden görüntüler',
            
            // CTA section
            'cta-title': 'Kütüphanemize Üye Olun',
            'cta-subtitle': 'Binlerce kitap, dijital kaynak ve etkinliğe erişim için hemen üye olun',
            'cta-button': 'Üye Ol',
            
            // Footer
            'footer-about': 'Modern kütüphanemiz, 2008 yılından beri okuyuculara hizmet vermektedir. Amacımız, bilgiye erişimi kolaylaştırmak ve okuma kültürünü yaygınlaştırmaktır.',
            'footer-links': 'Hızlı Bağlantılar',
            'footer-link-home': 'Anasayfa',
            'footer-link-catalog': 'Katalog',
            'footer-link-events': 'Etkinlikler',
            'footer-link-services': 'Hizmetler',
            'footer-link-about': 'Hakkımızda',
            'footer-link-contact': 'İletişim',
            'footer-hours': 'Çalışma Saatleri',
            'footer-day-mon': 'Pazartesi',
            'footer-day-tue': 'Salı',
            'footer-day-wed': 'Çarşamba',
            'footer-day-thu': 'Perşembe',
            'footer-day-fri': 'Cuma',
            'footer-day-sat': 'Cumartesi',
            'footer-day-sun': 'Pazar',
            'footer-contact': 'İletişim',
            'footer-address': 'Kütüphane Caddesi No:42, İstanbul',
            'footer-rights': 'Tüm hakları saklıdır.'
        },
        'en': {
            flag: 'united-kingdom.png',
            abbr: 'EN',
            // Navigation
            'nav-home': 'Home',
            'nav-books': 'Books',
            'nav-events': 'Events',
            'nav-services': 'Services',
            'nav-about': 'About',
            'nav-contact': 'Contact',
            
            // Hero section
            'hero-title': 'Welcome to the World of Knowledge',
            'hero-subtitle': 'Discover, learn, and get inspired. Thousands of books await you in our modern library.',
            'hero-btn-catalog': 'Explore Catalog',
            'hero-btn-membership': 'Become a Member',
            'scroll-down': 'Scroll Down',
            
            // Search section
            'search-title': 'Search Books',
            'search-placeholder': 'Book title, author, or subject...',
            
            // Featured books section
            'featured-title': 'Featured Books',
            'featured-subtitle': 'Most popular and newly added books in our library',
            'loading-books': 'Loading books...',
            
            // Categories section
            'categories-title': 'Categories',
            'categories-subtitle': 'Discover books according to your interests',
            'cat-fiction': 'Fiction',
            'cat-fiction-desc': 'Novels, stories, and other fiction works',
            'cat-science': 'Science',
            'cat-science-desc': 'Science and technology books',
            'cat-history': 'History',
            'cat-history-desc': 'History and culture books',
            'cat-biography': 'Biography',
            'cat-biography-desc': 'Biographies and memoirs',
            'cat-children': 'Children',
            'cat-children-desc': 'Children\'s books and stories',
            'cat-art': 'Art',
            'cat-art-desc': 'Art and design books',
            
            // Services section
            'services-title': 'Our Library Services',
            'services-subtitle': 'Special services we offer to you',
            'service-digital': 'Digital Library',
            'service-digital-desc': 'E-books, audiobooks, and digital resources',
            'service-workshops': 'Workshops',
            'service-workshops-desc': 'Writing, reading, and other educational workshops',
            'service-clubs': 'Book Clubs',
            'service-clubs-desc': 'Book discussion groups in different genres',
            'service-cafe': 'Library Cafe',
            'service-cafe-desc': 'A cozy cafe where you can enjoy reading',
            
            // Events section
            'events-title': 'Upcoming Events',
            'events-subtitle': 'Events taking place in our library',
            'event-1-title': 'Author Talk: Modern Literature',
            'event-1-time': '6:00 PM - 8:00 PM',
            'event-1-desc': 'Talk and book signing with famous author John Smith on modern literature.',
            'event-2-title': 'Children\'s Book Workshop',
            'event-2-time': '2:00 PM - 4:00 PM',
            'event-2-desc': 'Interactive story reading and creative writing workshop for children.',
            'event-3-title': 'Book Club: Classic Works',
            'event-3-time': '7:00 PM - 9:00 PM',
            'event-3-desc': 'Discussion and analysis of this month\'s book "Crime and Punishment".',
            'event-register': 'Register',
            'month-may': 'May',
            
            // Testimonials section
            'testimonials-title': 'Member Testimonials',
            'testimonials-subtitle': 'What do they think about our library?',
            'testimonial-1': '"This library is amazing not only for its books but also for the atmosphere and services it offers. Thanks to the digital library feature, I can access books without leaving home."',
            'testimonial-1-name': 'Jane Doe',
            'testimonial-1-title': 'Teacher',
            'testimonial-2': '"My child developed a reading habit thanks to the workshops we attended together. The staff is always helpful and friendly. Definitely a great library experience."',
            'testimonial-2-name': 'John Smith',
            'testimonial-2-title': 'Engineer',
            'testimonial-3': '"Participating in book clubs is the best time of the week for me. I gain different perspectives and meet new people. The library cafe is also very enjoyable."',
            'testimonial-3-name': 'Emily Johnson',
            'testimonial-3-title': 'Student',
            
            // Newsletter section
            'newsletter-title': 'Subscribe to Our Newsletter',
            'newsletter-subtitle': 'Stay updated on new books, events, and special offers',
            'newsletter-placeholder': 'Your email address',
            'newsletter-button': 'Subscribe',
            
            // Stats section
            'stat-books': 'Books',
            'stat-members': 'Members',
            'stat-events': 'Annual Events',
            'stat-years': 'Years of Experience',
            
            // Gallery section
            'gallery-title': 'Library Gallery',
            'gallery-subtitle': 'Images from our library',
            
            // CTA section
            'cta-title': 'Become a Member of Our Library',
            'cta-subtitle': 'Join now for access to thousands of books, digital resources, and events',
            'cta-button': 'Join Now',
            
            // Footer
            'footer-about': 'Our modern library has been serving readers since 2008. Our mission is to facilitate access to knowledge and promote reading culture.',
            'footer-links': 'Quick Links',
            'footer-link-home': 'Home',
            'footer-link-catalog': 'Catalog',
            'footer-link-events': 'Events',
            'footer-link-services': 'Services',
            'footer-link-about': 'About Us',
            'footer-link-contact': 'Contact',
            'footer-hours': 'Working Hours',
            'footer-day-mon': 'Monday',
            'footer-day-tue': 'Tuesday',
            'footer-day-wed': 'Wednesday',
            'footer-day-thu': 'Thursday',
            'footer-day-fri': 'Friday',
            'footer-day-sat': 'Saturday',
            'footer-day-sun': 'Sunday',
            'footer-contact': 'Contact',
            'footer-address': 'Library Street No:42, New York',
            'footer-rights': 'All rights reserved.'
        },
        'de': {
            flag: 'german.png',
            abbr: 'DE',
            // Navigation
            'nav-home': 'Startseite',
            'nav-books': 'Bücher',
            'nav-events': 'Veranstaltungen',
            'nav-services': 'Dienstleistungen',
            'nav-about': 'Über uns',
            'nav-contact': 'Kontakt',
            
            // Hero section
            'hero-title': 'Willkommen in der Welt des Wissens',
            'hero-subtitle': 'Entdecken, lernen und inspirieren lassen. Tausende von Büchern warten in unserer modernen Bibliothek auf Sie.',
            'hero-btn-catalog': 'Katalog erkunden',
            'hero-btn-membership': 'Mitglied werden',
            'scroll-down': 'Nach unten scrollen',
            
            // Search section
            'search-title': 'Bücher suchen',
            'search-placeholder': 'Buchtitel, Autor oder Thema...',
            
            // Featured books section
            'featured-title': 'Empfohlene Bücher',
            'featured-subtitle': 'Die beliebtesten und neu hinzugefügten Bücher in unserer Bibliothek',
            'loading-books': 'Bücher werden geladen...',
            
            // Categories section
            'categories-title': 'Kategorien',
            'categories-subtitle': 'Entdecken Sie Bücher nach Ihren Interessen',
            'cat-fiction': 'Belletristik',
            'cat-fiction-desc': 'Romane, Geschichten und andere fiktionale Werke',
            'cat-science': 'Wissenschaft',
            'cat-science-desc': 'Wissenschafts- und Technologiebücher',
            'cat-history': 'Geschichte',
            'cat-history-desc': 'Geschichts- und Kulturbücher',
            'cat-biography': 'Biografie',
            'cat-biography-desc': 'Biografien und Memoiren',
            'cat-children': 'Kinder',
            'cat-children-desc': 'Kinderbücher und Geschichten',
            'cat-art': 'Kunst',
            'cat-art-desc': 'Kunst- und Designbücher',
            
            // Services section
            'services-title': 'Unsere Bibliotheksdienste',
            'services-subtitle': 'Besondere Dienstleistungen, die wir Ihnen anbieten',
            'service-digital': 'Digitale Bibliothek',
            'service-digital-desc': 'E-Books, Hörbücher und digitale Ressourcen',
            'service-workshops': 'Workshops',
            'service-workshops-desc': 'Schreib-, Lese- und andere Bildungsworkshops',
            'service-clubs': 'Buchclubs',
            'service-clubs-desc': 'Buchdiskussionsgruppen in verschiedenen Genres',
            'service-cafe': 'Bibliothekscafé',
            'service-cafe-desc': 'Ein gemütliches Café, in dem Sie lesen können',
            
            // Events section
            'events-title': 'Kommende Veranstaltungen',
            'events-subtitle': 'Veranstaltungen in unserer Bibliothek',
            'event-1-title': 'Autorengespräch: Moderne Literatur',
            'event-1-time': '18:00 - 20:00 Uhr',
            'event-1-desc': 'Gespräch und Buchsignierung mit dem berühmten Autor Hans Schmidt über moderne Literatur.',
            'event-2-title': 'Kinderbuch-Workshop',
            'event-2-time': '14:00 - 16:00 Uhr',
            'event-2-desc': 'Interaktives Geschichtenvorlesen und kreativer Schreibworkshop für Kinder.',
            'event-3-title': 'Buchclub: Klassische Werke',
            'event-3-time': '19:00 - 21:00 Uhr',
            'event-3-desc': 'Diskussion und Analyse des Buches des Monats "Verbrechen und Strafe".',
            'event-register': 'Anmelden',
            'month-may': 'Mai',
            
            // Testimonials section
            'testimonials-title': 'Mitgliederstimmen',
            'testimonials-subtitle': 'Was denken sie über unsere Bibliothek?',
            'testimonial-1': '"Diese Bibliothek ist nicht nur wegen ihrer Bücher, sondern auch wegen der Atmosphäre und der angebotenen Dienstleistungen erstaunlich. Dank der digitalen Bibliotheksfunktion kann ich auf Bücher zugreifen, ohne das Haus zu verlassen."',
            'testimonial-1-name': 'Anna Müller',
            'testimonial-1-title': 'Lehrerin',
            'testimonial-2': '"Mein Kind hat dank der Workshops, an denen wir gemeinsam teilgenommen haben, eine Lesegewohnheit entwickelt. Das Personal ist immer hilfsbereit und freundlich. Definitiv eine großartige Bibliothekserfahrung."',
            'testimonial-2-name': 'Thomas Weber',
            'testimonial-2-title': 'Ingenieur',
            'testimonial-3': '"Die Teilnahme an Buchclubs ist für mich die beste Zeit der Woche. Ich gewinne verschiedene Perspektiven und treffe neue Leute. Das Bibliothekscafé ist auch sehr angenehm."',
            'testimonial-3-name': 'Lisa Schmidt',
            'testimonial-3-title': 'Studentin',
            
            // Newsletter section
            'newsletter-title': 'Abonnieren Sie unseren Newsletter',
            'newsletter-subtitle': 'Bleiben Sie über neue Bücher, Veranstaltungen und Sonderangebote informiert',
            'newsletter-placeholder': 'Ihre E-Mail-Adresse',
            'newsletter-button': 'Abonnieren',
            
            // Stats section
            'stat-books': 'Bücher',
            'stat-members': 'Mitglieder',
            'stat-events': 'Jährliche Veranstaltungen',
            'stat-years': 'Jahre Erfahrung',
            
            // Gallery section
            'gallery-title': 'Bibliotheksgalerie',
            'gallery-subtitle': 'Bilder aus unserer Bibliothek',
            
            // CTA section
            'cta-title': 'Werden Sie Mitglied unserer Bibliothek',
            'cta-subtitle': 'Treten Sie jetzt bei, um Zugang zu Tausenden von Büchern, digitalen Ressourcen und Veranstaltungen zu erhalten',
            'cta-button': 'Jetzt beitreten',
            
            // Footer
            'footer-about': 'Unsere moderne Bibliothek dient seit 2008 den Lesern. Unsere Mission ist es, den Zugang zu Wissen zu erleichtern und die Lesekultur zu fördern.',
            'footer-links': 'Schnelllinks',
            'footer-link-home': 'Startseite',
            'footer-link-catalog': 'Katalog',
            'footer-link-events': 'Veranstaltungen',
            'footer-link-services': 'Dienstleistungen',
            'footer-link-about': 'Über uns',
            'footer-link-contact': 'Kontakt',
            'footer-hours': 'Öffnungszeiten',
            'footer-day-mon': 'Montag',
            'footer-day-tue': 'Dienstag',
            'footer-day-wed': 'Mittwoch',
            'footer-day-thu': 'Donnerstag',
            'footer-day-fri': 'Freitag',
            'footer-day-sat': 'Samstag',
            'footer-day-sun': 'Sonntag',
            'footer-contact': 'Kontakt',
            'footer-address': 'Bibliothekstraße Nr. 42, Berlin',
            'footer-rights': 'Alle Rechte vorbehalten.'
        }
    };
    
    // Current language (default: Turkish)
    let currentLang = 'tr';
    const currentFlagElement = document.getElementById('current-flag');
    const currentLangAbbrElement = document.getElementById('current-lang-abbr');
    const langDropdown = document.querySelector('.lang-dropdown');
    const selectedLangArea = document.querySelector('.selected-lang');
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
    
    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-dropdown .lang-btn');
    const chevronIcon = document.querySelector('.selected-lang .fa-chevron-down');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent dropdown from closing immediately
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('active');
            if (chevronIcon) {
                chevronIcon.style.transform = 'rotate(0deg)';
            }
        });
    });

    selectedLangArea.addEventListener('click', () => {
        langDropdown.classList.toggle('active');
        if (chevronIcon) {
            // Toggle chevron rotation based on dropdown state
            if (langDropdown.classList.contains('active')) {
                chevronIcon.style.transform = 'rotate(180deg)';
            } else {
                chevronIcon.style.transform = 'rotate(0deg)';
            }
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!selectedLangArea.contains(event.target) && !langDropdown.contains(event.target)) {
            langDropdown.classList.remove('active');
            if (chevronIcon) {
                chevronIcon.style.transform = 'rotate(0deg)';
            }
        }
    });
    
    // Function to set language
    function setLanguage(lang) {
        currentLang = lang;
        
        // Update current selected language display
        if (translations[lang]) {
            currentFlagElement.src = translations[lang].flag;
            currentFlagElement.alt = translations[lang].abbr + ' Flag';
            currentLangAbbrElement.textContent = translations[lang].abbr;
        }

        // Update all elements with data-lang-key attribute
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                    el.setAttribute('placeholder', translations[lang][key]);
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Loader animation
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
            
            // Start animations after loader is gone
            initAnimations();
        }, 1500);
    });
    
    // Initialize all animations
    function initAnimations() {
        // Hero section animations
        gsap.from('.hero-content', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from('.floating-books img', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });
        
        // Add scroll-down indicator functionality
        const scrollIndicator = document.querySelector('.hero-scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const searchSection = document.querySelector('.search-section');
                if (searchSection) {
                    searchSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        
        // Animate elements when scrolling into view
        gsap.utils.toArray('.section-header').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
        
        // Categories animation
        gsap.from('.category-card', {
            scrollTrigger: {
                trigger: '.categories-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out'
        });
        
        // Services animation
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out'
        });
        
        // Events animation
        gsap.from('.event-card', {
            scrollTrigger: {
                trigger: '.events-timeline',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });
        
        // Gallery animation
        gsap.from('.gallery-item', {
            scrollTrigger: {
                trigger: '.gallery-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            scale: 0.8,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out'
        });
        
        // Stats counter animation
        const statElements = document.querySelectorAll('.stat-number');
        statElements.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            
            ScrollTrigger.create({
                trigger: stat,
                start: 'top 80%',
                onEnter: () => {
                    let count = 0;
                    const duration = 2000; // 2 seconds
                    const interval = 50; // Update every 50ms
                    const increment = Math.ceil(target / (duration / interval));
                    
                    const counter = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            count = target;
                            clearInterval(counter);
                        }
                        stat.textContent = count.toLocaleString();
                    }, interval);
                }
            });
        });
    }
    
    // Testimonial slider functionality
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevTestimonialBtn = document.querySelector('.testimonial-prev');
    const nextTestimonialBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        // Hide all testimonials
        testimonialCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Show the selected testimonial
        testimonialCards[index].classList.add('active');
        
        // Update dots
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        testimonialDots[index].classList.add('active');
        
        currentTestimonial = index;
    }
    
    // Initialize testimonials
    showTestimonial(0);
    
    // Add click event to dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Add click events to testimonial navigation buttons
    if (prevTestimonialBtn && nextTestimonialBtn) {
        prevTestimonialBtn.addEventListener('click', () => {
            let prevIndex = (currentTestimonial - 1) < 0 ? testimonialCards.length - 1 : currentTestimonial - 1;
            showTestimonial(prevIndex);
        });
        
        nextTestimonialBtn.addEventListener('click', () => {
            let nextIndex = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(nextIndex);
        });
    }
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        let nextTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(nextTestimonial);
    }, 7000); // Increased time to 7 seconds for better reading
    
    // Pause rotation on hover or when buttons are hovered
    const testimonialContainer = document.querySelector('.testimonials-slider');
    if (testimonialContainer) {
        // Pause on slider hover
        testimonialContainer.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialContainer.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                let nextTestimonial = (currentTestimonial + 1) % testimonialCards.length;
                showTestimonial(nextTestimonial);
            }, 7000);
        });
    }
    
    // Google Books API integration
    const apiKey = 'YOUR_API_KEY'; // Replace with your Google Books API key
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const featuredBooksContainer = document.getElementById('featured-books-container');
    
    // Load featured books on page load
    loadFeaturedBooks();
    
    // Search functionality
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                searchBooks(query);
            }
        });
        
        // Also trigger search on Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    searchBooks(query);
                }
            }
        });
    }
    
    // Function to load featured books
    function loadFeaturedBooks() {
        // Featured categories or authors
        const featuredQueries = ['classic literature', 'bestsellers', 'science fiction', 'biography'];
        const randomQuery = featuredQueries[Math.floor(Math.random() * featuredQueries.length)];
        
        fetchBooks(randomQuery, 10)
            .then(books => {
                displayBooks(books, featuredBooksContainer);
            })
            .catch(error => {
                console.error('Error loading featured books:', error);
                featuredBooksContainer.innerHTML = `
                    <p>Could not load books. Please try again later.</p>
                `;
            });
    }
    
    // Function to search books
    function searchBooks(query) {
        featuredBooksContainer.innerHTML = `
            <div class="book-loading">
                <div class="spinner"></div>
                <p>${translations[currentLang]['loading-books']}</p>
            </div>
        `;
        
        fetchBooks(query, 10)
            .then(books => {
                displayBooks(books, featuredBooksContainer);
            })
            .catch(error => {
                console.error('Error searching books:', error);
                featuredBooksContainer.innerHTML = `
                    <p>Could not load books. Please try again later.</p>
                `;
            });
    }
    
    // Function to fetch books from Google Books API
    function fetchBooks(query, maxResults = 10) {
        // For demo purposes, we'll use placeholder data instead of actual API calls
        // In a real implementation, you would use:
        // return fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${apiKey}`)
        //     .then(response => response.json())
        //     .then(data => data.items || []);
        
        // Placeholder data for demo
        return new Promise((resolve) => {
            setTimeout(() => {
                const demoBooks = [
                    {
                        id: 'book1',
                        volumeInfo: {
                            title: 'The Great Gatsby',
                            authors: ['F. Scott Fitzgerald'],
                            imageLinks: {
                                thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f'
                            },
                            averageRating: 4.5,
                            ratingsCount: 1234
                        }
                    },
                    {
                        id: 'book2',
                        volumeInfo: {
                            title: '1984',
                            authors: ['George Orwell'],
                            imageLinks: {
                                thumbnail: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19'
                            },
                            averageRating: 4.8,
                            ratingsCount: 5678
                        }
                    },
                    {
                        id: 'book3',
                        volumeInfo: {
                            title: 'To Kill a Mockingbird',
                            authors: ['Harper Lee'],
                            imageLinks: {
                                thumbnail: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e'
                            },
                            averageRating: 4.7,
                            ratingsCount: 4321
                        }
                    },
                    {
                        id: 'book4',
                        volumeInfo: {
                            title: 'Pride and Prejudice',
                            authors: ['Jane Austen'],
                            imageLinks: {
                                thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794'
                            },
                            averageRating: 4.6,
                            ratingsCount: 3456
                        }
                    },
                    {
                        id: 'book5',
                        volumeInfo: {
                            title: 'The Hobbit',
                            authors: ['J.R.R. Tolkien'],
                            imageLinks: {
                                thumbnail: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb'
                            },
                            averageRating: 4.9,
                            ratingsCount: 7890
                        }
                    },
                    {
                        id: 'book6',
                        volumeInfo: {
                            title: 'Harry Potter and the Sorcerer\'s Stone',
                            authors: ['J.K. Rowling'],
                            imageLinks: {
                                thumbnail: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239'
                            },
                            averageRating: 4.8,
                            ratingsCount: 9876
                        }
                    }
                ];
                resolve(demoBooks);
            }, 1000);
        });
    }
    
    // Function to display books
    function displayBooks(books, container) {
        if (!books || books.length === 0) {
            container.innerHTML = `<p>No books found. Try a different search.</p>`;
            return;
        }
        
        container.innerHTML = '';
        
        books.forEach(book => {
            const info = book.volumeInfo;
            const title = info.title || 'Unknown Title';
            const authors = info.authors ? info.authors.join(', ') : 'Unknown Author';
            const coverUrl = info.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Cover';
            const rating = info.averageRating || 0;
            const ratingsCount = info.ratingsCount || 0;
            
            // Create stars based on rating
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(rating)) {
                    starsHtml += '<i class="fas fa-star"></i>';
                } else if (i - 0.5 <= rating) {
                    starsHtml += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    starsHtml += '<i class="far fa-star"></i>';
                }
            }
            
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                <div class="book-cover">
                    <img src="${coverUrl}" alt="${title}">
                </div>
                <div class="book-info">
                    <h3 class="book-title">${title}</h3>
                    <p class="book-author">${authors}</p>
                    <div class="book-rating">
                        ${starsHtml}
                        <span>(${ratingsCount})</span>
                    </div>
                    <a href="#" class="btn btn-small btn-primary">${translations[currentLang]['hero-btn-catalog']}</a>
                </div>
            `;
            
            container.appendChild(bookCard);
        });
        
        // Initialize book slider
        initBookSlider();
    }
    
    // Book slider functionality
    function initBookSlider() {
        const booksContainer = document.querySelector('.books-container');
        const prevButton = document.querySelector('.slider-arrow.prev');
        const nextButton = document.querySelector('.slider-arrow.next');
        
        if (!booksContainer || !prevButton || !nextButton) return;
        
        const bookCards = booksContainer.querySelectorAll('.book-card');
        const cardWidth = 250 + 32; // card width + gap
        let currentPosition = 0;
        const maxPosition = (bookCards.length - 3) * cardWidth; // Show 3 cards at a time
        
        // Update slider position
        function updateSliderPosition() {
            booksContainer.style.transform = `translateX(-${currentPosition}px)`;
        }
        
        // Previous button click
        prevButton.addEventListener('click', () => {
            currentPosition = Math.max(0, currentPosition - cardWidth);
            updateSliderPosition();
        });
        
        // Next button click
        nextButton.addEventListener('click', () => {
            currentPosition = Math.min(maxPosition, currentPosition + cardWidth);
            updateSliderPosition();
        });
    }
    
    // Category cards click event
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            searchBooks(category);
            
            // Scroll to featured books section
            document.querySelector('.featured-books').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // In a real implementation, you would send this to your server
                alert(`Thank you for subscribing with ${email}!`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const lenis=new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 1.5,
    })

    // Initialize with default language settings
    setLanguage(currentLang);

    // Show membership modal
    function showMembershipModal(formType = 'login') {
        if (loginModal && modalOverlay) {
            document.body.classList.add('modal-open');
            modalOverlay.classList.add('active');
            loginModal.classList.add('active');
            
            setTimeout(() => {
                if (formType === 'register') {
                    showRegisterForm();
                } else {
                    showLoginForm();
                }
            }, 100);
        }
    }
    
    // Close membership modal
    function closeMembershipModal() {
        if (loginModal && modalOverlay) {
            loginModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    }
    
    // Toggle between login and register forms
    function showLoginForm() {
        if (loginForm && registerForm) {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        }
    }
    
    function showRegisterForm() {
        if (loginForm && registerForm) {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        }
    }
    
    // Toggle password visibility
    function togglePasswordVisibility(input, button) {
        if (input.type === 'password') {
            input.type = 'text';
            button.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            input.type = 'password';
            button.innerHTML = '<i class="fas fa-eye"></i>';
        }
    }
    
    // Navbar and hero section login/register buttons
    if (navLoginBtn) {
        navLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }
    
    if (navRegisterBtn) {
        navRegisterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'register.html';
        });
    }
    
    if (heroMembershipBtn) {
        heroMembershipBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'register.html';
        });
    }
    
    // Modal event listeners
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Switch to register form');
            showRegisterForm();
        });
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Switch to login form');
            showLoginForm();
        });
    }
    
    if (showPasswordBtn) {
        showPasswordBtn.addEventListener('click', function() {
            console.log('Toggle password visibility');
            togglePasswordVisibility(passwordInput, this);
        });
    }
    
    if (showRegisterPasswordBtn) {
        showRegisterPasswordBtn.addEventListener('click', function() {
            console.log('Toggle register password visibility');
            togglePasswordVisibility(registerPasswordInput, this);
        });
    }
    
    if (closeLoginModalBtn) {
        closeLoginModalBtn.addEventListener('click', function() {
            console.log('Close modal button clicked');
            closeMembershipModal();
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                console.log('Modal overlay clicked');
                closeMembershipModal();
            }
        });
    }
    
    // Kayıt formu
    const registerFormEl = document.getElementById('register-form');
    if (registerFormEl) {
        registerFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            fetch('register.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, email, password})
            })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                if (data.success) closeMembershipModal();
            });
        });
    }

    // Giriş formu
    const loginFormEl = document.getElementById('login-form');
    if (loginFormEl) {
        loginFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            fetch('login.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                if (data.success) closeMembershipModal();
            });
        });
    }

    // Şifremi unuttum: Kod gönder
    const forgotPasswordBtn = document.getElementById('forgot-password-btn');
    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = prompt('E-posta adresinizi girin:');
            if (!email) return;
            fetch('reset_request.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email })
            })
            .then(res => res.json())
            .then(data => alert(data.message));
        });
    }

    // Şifre sıfırlama: Kod ve yeni şifre ile
    const resetPasswordBtn = document.getElementById('reset-password-btn');
    if (resetPasswordBtn) {
        resetPasswordBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = prompt('E-posta adresinizi girin:');
            const code = prompt('E-posta ile gelen kodu girin:');
            const new_password = prompt('Yeni şifrenizi girin:');
            if (!email || !code || !new_password) return;
            fetch('reset_password.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, code, new_password })
            })
            .then(res => res.json())
            .then(data => alert(data.message));
        });
    }
});