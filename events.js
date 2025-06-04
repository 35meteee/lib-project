// Events Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if user is admin (this would come from your authentication system)
    const isAdmin = false; // Set this based on your authentication logic
    
    // Show admin elements if user is admin
    if (isAdmin) {
        document.getElementById('admin-panel-notice').style.display = 'block';
        document.getElementById('admin-add-event').style.display = 'block';
    }
    
    // Extended translations for events page
    const eventsTranslations = {
        'tr': {
            // Navigation (from main script)
            'nav-home': 'Anasayfa',
            'nav-books': 'Kitaplar', 
            'nav-events': 'Etkinlikler',
            'nav-services': 'Hizmetler',
            'nav-about': 'Hakkımızda',
            'nav-contact': 'İletişim',
            'nav-login': 'Giriş Yap',
            'nav-register': 'Üye Ol',
            
            // Events Hero
            'events-hero-title': 'Kütüphane Etkinlikleri',
            'events-hero-subtitle': 'Bilgi, sanat ve kültürün buluştuğu özel etkinliklerimize katılın. Her yaştan okuyucu için düzenlenen programlarımızla birlikte öğrenin, keşfedin ve ilham alın.',
            'events-hero-btn-upcoming': 'Yaklaşan Etkinlikler',
            'events-hero-btn-calendar': 'Etkinlik Takvimi',
            'scroll-down': 'Aşağı Kaydır',
            
            // Admin
            'admin-notice': 'Admin Paneli: Etkinlikleri yönetmek için',
            'manage-events': 'Etkinlikleri Yönet',
            'add-event': 'Yeni Etkinlik Ekle',
            
            // Filters
            'filter-all': 'Tümü',
            'filter-workshop': 'Atölyeler',
            'filter-talk': 'Söyleşiler',
            'filter-club': 'Kitap Kulüpleri',
            'filter-children': 'Çocuk Etkinlikleri',
            'filter-exhibition': 'Sergiler',
            
            // Featured Events
            'featured-events-title': 'Öne Çıkan Etkinlikler',
            'featured-events-subtitle': 'Bu ay düzenlenecek özel etkinliklerimiz',
            'badge-featured': 'Öne Çıkan',
            'badge-workshop': 'Atölye',
            'badge-children': 'Çocuk',
            
            // Months
            'month-may-short': 'MAY',
            'month-jan-short': 'OCA',
            'month-feb-short': 'ŞUB',
            'month-mar-short': 'MAR',
            'month-apr-short': 'NİS',
            'month-jun-short': 'HAZ',
            'month-jul-short': 'TEM',
            'month-aug-short': 'AĞU',
            'month-sep-short': 'EYL',
            'month-oct-short': 'EKİ',
            'month-nov-short': 'KAS',
            'month-dec-short': 'ARA',
            
            // Event Details
            'featured-event-1-title': 'Orhan Pamuk ile Edebiyat Söyleşisi',
            'featured-event-1-desc': 'Nobel ödüllü yazarımız Orhan Pamuk ile modern Türk edebiyatı, yazma süreci ve gelecek projeleri üzerine samimi bir söyleşi.',
            'featured-event-2-title': 'Yaratıcı Yazma Atölyesi',
            'featured-event-2-desc': 'Deneyimli yazarlar eşliğinde hikaye yazma tekniklerini öğrenin, yaratıcılığınızı keşfedin ve kendi hikayenizi yazın.',
            'featured-event-3-title': 'Masallar ve Kukla Tiyatrosu',
            'featured-event-3-desc': 'Çocuklar için interaktif masal anlatımı ve renkli kukla tiyatrosu gösterisi. Eğlenceli aktiviteler ve sürprizlerle dolu.',
            
            // Locations and Details
            'event-location-main': 'Ana Konferans Salonu',
            'event-location-workshop': 'Atölye Salonu',
            'event-location-children': 'Çocuk Bölümü',
            'event-capacity': '200 kişi',
            'event-capacity-small': '25 kişi',
            'event-capacity-children': '50 çocuk',
            'event-free': 'Ücretsiz',
            'event-register': 'Kayıt Ol',
            
            // Calendar
            'calendar-title': 'Etkinlik Takvimi',
            'calendar-subtitle': 'Tüm etkinliklerimizi takip edin ve kaçırmayın',
            'current-month': 'Mayıs 2024',
            'selected-date-events': 'Seçilen Tarih Etkinlikleri',
            'select-date': 'Etkinlikleri görmek için takvimden bir tarih seçin',
            
            // Event Types
            'event-types-title': 'Etkinlik Türlerimiz',
            'event-types-subtitle': 'Farklı ilgi alanlarına yönelik çeşitli etkinlikler',
            'type-talks': 'Yazar Söyleşileri',
            'type-talks-desc': 'Ünlü yazarlar ve düşünürlerle buluşma fırsatı',
            'type-workshops': 'Yaratıcı Atölyeler',
            'type-workshops-desc': 'Yazma, resim, el sanatları ve daha fazlası',
            'type-clubs': 'Kitap Kulüpleri',
            'type-clubs-desc': 'Farklı türlerde kitap tartışma grupları',
            'type-children': 'Çocuk Etkinlikleri',
            'type-children-desc': 'Masallar, oyunlar ve eğitici aktiviteler',
            'type-exhibitions': 'Sergiler',
            'type-exhibitions-desc': 'Sanat, fotoğraf ve kültürel sergiler',
            'type-concerts': 'Müzik Etkinlikleri',
            'type-concerts-desc': 'Klasik müzik, jazz ve akustik performanslar',
            
            // Stats
            'monthly-events': 'Aylık 4-6 etkinlik',
            'weekly-events': 'Haftalık 2-3 atölye',
            'weekly-meetings': 'Haftalık toplantılar',
            'weekend-events': 'Hafta sonu etkinlikleri',
            'monthly-exhibitions': 'Aylık yeni sergiler',
            'special-events': 'Özel etkinlikler',
            
            // Gallery
            'gallery-title': 'Etkinlik Galerisi',
            'gallery-subtitle': 'Geçmiş etkinliklerimizden kareler',
            'gallery-all': 'Tümü',
            'gallery-talks': 'Söyleşiler',
            'gallery-workshops': 'Atölyeler',
            'gallery-children': 'Çocuk',
            'gallery-item-1': 'Ahmet Ümit Söyleşisi',
            'gallery-item-2': 'Yaratıcı Yazma Atölyesi',
            'gallery-item-3': 'Masal Saati',
            'gallery-item-4': 'Edebiyat Paneli',
            'gallery-item-5': 'Resim Atölyesi',
            'gallery-item-6': 'Kukla Tiyatrosu',
            'gallery-date-1': 'Mart 2024',
            'gallery-date-2': 'Şubat 2024',
            'gallery-date-3': 'Nisan 2024',
            'gallery-date-4': 'Ocak 2024',
            'gallery-date-5': 'Mart 2024',
            'gallery-date-6': 'Nisan 2024',
            
            // CTA and Newsletter
            'cta-title': 'Etkinliklerimize Katılın',
            'cta-subtitle': 'Kütüphane üyesi olarak tüm etkinliklerimize ücretsiz katılabilir, öncelikli kayıt hakkından yararlanabilirsiniz',
            'cta-membership': 'Üye Ol',
            'cta-newsletter': 'Bültene Abone Ol',
            'newsletter-title': 'Etkinlik Bültenimize Abone Olun',
            'newsletter-subtitle': 'Yeni etkinlikler, özel davetler ve erken kayıt fırsatlarından ilk siz haberdar olun',
            'newsletter-placeholder': 'E-posta adresiniz',
            'newsletter-button': 'Abone Ol',
            'benefit-1': 'Erken bildirimler',
            'benefit-2': 'Öncelikli kayıt',
            'benefit-3': 'Özel indirimler',
            
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
            // Navigation
            'nav-home': 'Home',
            'nav-books': 'Books',
            'nav-events': 'Events',
            'nav-services': 'Services',
            'nav-about': 'About',
            'nav-contact': 'Contact',
            'nav-login': 'Login',
            'nav-register': 'Register',
            
            // Events Hero
            'events-hero-title': 'Library Events',
            'events-hero-subtitle': 'Join our special events where knowledge, art and culture meet. Learn, discover and get inspired together with programs organized for readers of all ages.',
            'events-hero-btn-upcoming': 'Upcoming Events',
            'events-hero-btn-calendar': 'Event Calendar',
            'scroll-down': 'Scroll Down',
            
            // Admin
            'admin-notice': 'Admin Panel: To manage events',
            'manage-events': 'Manage Events',
            'add-event': 'Add New Event',
            
            // Filters
            'filter-all': 'All',
            'filter-workshop': 'Workshops',
            'filter-talk': 'Talks',
            'filter-club': 'Book Clubs',
            'filter-children': 'Children Events',
            'filter-exhibition': 'Exhibitions',
            
            // Featured Events
            'featured-events-title': 'Featured Events',
            'featured-events-subtitle': 'Our special events to be held this month',
            'badge-featured': 'Featured',
            'badge-workshop': 'Workshop',
            'badge-children': 'Children',
            
            // Months
            'month-may-short': 'MAY',
            'month-jan-short': 'JAN',
            'month-feb-short': 'FEB',
            'month-mar-short': 'MAR',
            'month-apr-short': 'APR',
            'month-jun-short': 'JUN',
            'month-jul-short': 'JUL',
            'month-aug-short': 'AUG',
            'month-sep-short': 'SEP',
            'month-oct-short': 'OCT',
            'month-nov-short': 'NOV',
            'month-dec-short': 'DEC',
            
            // Event Details
            'featured-event-1-title': 'Literature Talk with Orhan Pamuk',
            'featured-event-1-desc': 'An intimate conversation with our Nobel Prize-winning author Orhan Pamuk about modern Turkish literature, writing process and future projects.',
            'featured-event-2-title': 'Creative Writing Workshop',
            'featured-event-2-desc': 'Learn story writing techniques with experienced writers, discover your creativity and write your own story.',
            'featured-event-3-title': 'Tales and Puppet Theater',
            'featured-event-3-desc': 'Interactive storytelling and colorful puppet theater show for children. Full of fun activities and surprises.',
            
            // Locations and Details
            'event-location-main': 'Main Conference Hall',
            'event-location-workshop': 'Workshop Room',
            'event-location-children': 'Children\'s Section',
            'event-capacity': '200 people',
            'event-capacity-small': '25 people',
            'event-capacity-children': '50 children',
            'event-free': 'Free',
            'event-register': 'Register',
            
            // Calendar
            'calendar-title': 'Event Calendar',
            'calendar-subtitle': 'Follow all our events and don\'t miss them',
            'current-month': 'May 2024',
            'selected-date-events': 'Selected Date Events',
            'select-date': 'Select a date from the calendar to see events',
            
            // Event Types
            'event-types-title': 'Our Event Types',
            'event-types-subtitle': 'Various events for different interests',
            'type-talks': 'Author Talks',
            'type-talks-desc': 'Opportunity to meet famous writers and thinkers',
            'type-workshops': 'Creative Workshops',
            'type-workshops-desc': 'Writing, painting, crafts and more',
            'type-clubs': 'Book Clubs',
            'type-clubs-desc': 'Book discussion groups in different genres',
            'type-children': 'Children Events',
            'type-children-desc': 'Tales, games and educational activities',
            'type-exhibitions': 'Exhibitions',
            'type-exhibitions-desc': 'Art, photography and cultural exhibitions',
            'type-concerts': 'Music Events',
            'type-concerts-desc': 'Classical music, jazz and acoustic performances',
            
            // Stats
            'monthly-events': '4-6 events monthly',
            'weekly-events': '2-3 workshops weekly',
            'weekly-meetings': 'Weekly meetings',
            'weekend-events': 'Weekend events',
            'monthly-exhibitions': 'New exhibitions monthly',
            'special-events': 'Special events',
            
            // Gallery
            'gallery-title': 'Event Gallery',
            'gallery-subtitle': 'Moments from our past events',
            'gallery-all': 'All',
            'gallery-talks': 'Talks',
            'gallery-workshops': 'Workshops',
            'gallery-children': 'Children',
            'gallery-item-1': 'Ahmet Ümit Talk',
            'gallery-item-2': 'Creative Writing Workshop',
            'gallery-item-3': 'Story Time',
            'gallery-item-4': 'Literature Panel',
            'gallery-item-5': 'Painting Workshop',
            'gallery-item-6': 'Puppet Theater',
            'gallery-date-1': 'March 2024',
            'gallery-date-2': 'February 2024',
            'gallery-date-3': 'April 2024',
            'gallery-date-4': 'January 2024',
            'gallery-date-5': 'March 2024',
            'gallery-date-6': 'April 2024',
            
            // CTA and Newsletter
            'cta-title': 'Join Our Events',
            'cta-subtitle': 'As a library member, you can participate in all our events for free and benefit from priority registration',
            'cta-membership': 'Become a Member',
            'cta-newsletter': 'Subscribe to Newsletter',
            'newsletter-title': 'Subscribe to Our Event Newsletter',
            'newsletter-subtitle': 'Be the first to know about new events, special invitations and early registration opportunities',
            'newsletter-placeholder': 'Your email address',
            'newsletter-button': 'Subscribe',
            'benefit-1': 'Early notifications',
            'benefit-2': 'Priority registration',
            'benefit-3': 'Special discounts',
            
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
            // Navigation
            'nav-home': 'Startseite',
            'nav-books': 'Bücher',
            'nav-events': 'Veranstaltungen',
            'nav-services': 'Dienstleistungen',
            'nav-about': 'Über uns',
            'nav-contact': 'Kontakt',
            'nav-login': 'Anmelden',
            'nav-register': 'Registrieren',
            
            // Events Hero
            'events-hero-title': 'Bibliotheksveranstaltungen',
            'events-hero-subtitle': 'Nehmen Sie an unseren besonderen Veranstaltungen teil, wo Wissen, Kunst und Kultur aufeinandertreffen. Lernen, entdecken und lassen Sie sich von Programmen für Leser aller Altersgruppen inspirieren.',
            'events-hero-btn-upcoming': 'Kommende Veranstaltungen',
            'events-hero-btn-calendar': 'Veranstaltungskalender',
            'scroll-down': 'Nach unten scrollen',
            
            // Admin
            'admin-notice': 'Admin-Panel: Zur Verwaltung von Veranstaltungen',
            'manage-events': 'Veranstaltungen verwalten',
            'add-event': 'Neue Veranstaltung hinzufügen',
            
            // Filters
            'filter-all': 'Alle',
            'filter-workshop': 'Workshops',
            'filter-talk': 'Gespräche',
            'filter-club': 'Buchclubs',
            'filter-children': 'Kinderveranstaltungen',
            'filter-exhibition': 'Ausstellungen',
            
            // Featured Events
            'featured-events-title': 'Empfohlene Veranstaltungen',
            'featured-events-subtitle': 'Unsere besonderen Veranstaltungen in diesem Monat',
            'badge-featured': 'Empfohlen',
            'badge-workshop': 'Workshop',
            'badge-children': 'Kinder',
            
            // Months
            'month-may-short': 'MAI',
            'month-jan-short': 'JAN',
            'month-feb-short': 'FEB',
            'month-mar-short': 'MÄR',
            'month-apr-short': 'APR',
            'month-jun-short': 'JUN',
            'month-jul-short': 'JUL',
            'month-aug-short': 'AUG',
            'month-sep-short': 'SEP',
            'month-oct-short': 'OKT',
            'month-nov-short': 'NOV',
            'month-dec-short': 'DEZ',
            
            // Event Details
            'featured-event-1-title': 'Literaturgespräch mit Orhan Pamuk',
            'featured-event-1-desc': 'Ein intimes Gespräch mit unserem Nobelpreisträger Orhan Pamuk über moderne türkische Literatur, Schreibprozess und zukünftige Projekte.',
            'featured-event-2-title': 'Kreativer Schreibworkshop',
            'featured-event-2-desc': 'Lernen Sie Geschichtenschreibtechniken mit erfahrenen Autoren, entdecken Sie Ihre Kreativität und schreiben Sie Ihre eigene Geschichte.',
            'featured-event-3-title': 'Märchen und Puppentheater',
            'featured-event-3-desc': 'Interaktives Geschichtenerzählen und bunte Puppentheatershow für Kinder. Voller lustiger Aktivitäten und Überraschungen.',
            
            // Locations and Details
            'event-location-main': 'Hauptkonferenzsaal',
            'event-location-workshop': 'Workshop-Raum',
            'event-location-children': 'Kinderbereich',
            'event-capacity': '200 Personen',
            'event-capacity-small': '25 Personen',
            'event-capacity-children': '50 Kinder',
            'event-free': 'Kostenlos',
            'event-register': 'Anmelden',
            
            // Calendar
            'calendar-title': 'Veranstaltungskalender',
            'calendar-subtitle': 'Verfolgen Sie alle unsere Veranstaltungen und verpassen Sie keine',
            'current-month': 'Mai 2024',
            'selected-date-events': 'Veranstaltungen am ausgewählten Datum',
            'select-date': 'Wählen Sie ein Datum aus dem Kalender, um Veranstaltungen zu sehen',
            
            // Event Types
            'event-types-title': 'Unsere Veranstaltungstypen',
            'event-types-subtitle': 'Verschiedene Veranstaltungen für unterschiedliche Interessen',
            'type-talks': 'Autorengespräche',
            'type-talks-desc': 'Gelegenheit, berühmte Schriftsteller und Denker zu treffen',
            'type-workshops': 'Kreative Workshops',
            'type-workshops-desc': 'Schreiben, Malen, Handwerk und mehr',
            'type-clubs': 'Buchclubs',
            'type-clubs-desc': 'Buchdiskussionsgruppen in verschiedenen Genres',
            'type-children': 'Kinderveranstaltungen',
            'type-children-desc': 'Märchen, Spiele und Bildungsaktivitäten',
            'type-exhibitions': 'Ausstellungen',
            'type-exhibitions-desc': 'Kunst-, Foto- und Kulturausstellungen',
            'type-concerts': 'Musikveranstaltungen',
            'type-concerts-desc': 'Klassische Musik, Jazz und akustische Aufführungen',
            
            // Stats
            'monthly-events': '4-6 Veranstaltungen monatlich',
            'weekly-events': '2-3 Workshops wöchentlich',
            'weekly-meetings': 'Wöchentliche Treffen',
            'weekend-events': 'Wochenendveranstaltungen',
            'monthly-exhibitions': 'Neue Ausstellungen monatlich',
            'special-events': 'Besondere Veranstaltungen',
            
            // Gallery
            'gallery-title': 'Veranstaltungsgalerie',
            'gallery-subtitle': 'Momente aus unseren vergangenen Veranstaltungen',
            'gallery-all': 'Alle',
            'gallery-talks': 'Gespräche',
            'gallery-workshops': 'Workshops',
            'gallery-children': 'Kinder',
            'gallery-item-1': 'Ahmet Ümit Gespräch',
            'gallery-item-2': 'Kreativer Schreibworkshop',
            'gallery-item-3': 'Märchenstunde',
            'gallery-item-4': 'Literaturpanel',
            'gallery-item-5': 'Malworkshop',
            'gallery-item-6': 'Puppentheater',
            'gallery-date-1': 'März 2024',
            'gallery-date-2': 'Februar 2024',
            'gallery-date-3': 'April 2024',
            'gallery-date-4': 'Januar 2024',
            'gallery-date-5': 'März 2024',
            'gallery-date-6': 'April 2024',
            
            // CTA and Newsletter
            'cta-title': 'Nehmen Sie an unseren Veranstaltungen teil',
            'cta-subtitle': 'Als Bibliotheksmitglied können Sie kostenlos an allen unseren Veranstaltungen teilnehmen und von der vorrangigen Anmeldung profitieren',
            'cta-membership': 'Mitglied werden',
            'cta-newsletter': 'Newsletter abonnieren',
            'newsletter-title': 'Abonnieren Sie unseren Veranstaltungsnewsletter',
            'newsletter-subtitle': 'Seien Sie die ersten, die über neue Veranstaltungen, besondere Einladungen und frühe Anmeldemöglichkeiten informiert werden',
            'newsletter-placeholder': 'Ihre E-Mail-Adresse',
            'newsletter-button': 'Abonnieren',
            'benefit-1': 'Frühe Benachrichtigungen',
            'benefit-2': 'Vorrangige Anmeldung',
            'benefit-3': 'Besondere Rabatte',
            
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

    // Merge with global translations if they exist
    if (window.translations) {
        Object.keys(eventsTranslations).forEach(lang => {
            if (window.translations[lang]) {
                Object.assign(window.translations[lang], eventsTranslations[lang]);
            } else {
                window.translations[lang] = eventsTranslations[lang];
            }
        });
    } else {
        window.translations = eventsTranslations;
    }

    // Get current language from main script or default to Turkish
    let currentLang = window.currentLang || 'tr';
    
    // Use the global language switching function if available
    if (window.setLanguage) {
        // Override the global function to include events-specific updates
        const originalSetLanguage = window.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            currentLang = lang;
            updateCalendarLanguage();
        };
    } else {
        // Create our own language switching function
        window.setLanguage = function(lang) {
            localStorage.setItem('selectedLanguage', lang);
            currentLang = lang;
            window.currentLang = lang;
            
            // Update current selected language display
            const currentFlagElement = document.getElementById('current-flag');
            const currentLangAbbrElement = document.getElementById('current-lang-abbr');
            
            if (eventsTranslations[lang]) {
                const flagMap = {
                    'tr': 'world.png',
                    'en': 'united-kingdom.png', 
                    'de': 'german.png'
                };
                
                if (currentFlagElement && currentLangAbbrElement) {
                    currentFlagElement.src = flagMap[lang];
                    currentFlagElement.alt = lang.toUpperCase() + ' Flag';
                    currentLangAbbrElement.textContent = lang.toUpperCase();
                }
            }

            // Update all elements with data-lang-key attribute
            const elements = document.querySelectorAll('[data-lang-key]');
            elements.forEach(el => {
                const key = el.getAttribute('data-lang-key');
                
                if (window.translations[lang] && window.translations[lang][key]) {
                    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', window.translations[lang][key]);
                    } else {
                        el.textContent = window.translations[lang][key];
                    }
                }
            });
            
            // Update calendar month names
            updateCalendarLanguage();
        };
        
        // Language selector functionality
        const langButtons = document.querySelectorAll(".lang-btn");
        const selectedLang = document.querySelector(".selected-lang");
        const langDropdown = document.querySelector(".lang-dropdown");

        langButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const lang = btn.getAttribute("data-lang");
                if (window.setLanguage) window.setLanguage(lang);
                if (langDropdown) langDropdown.classList.remove("active");
            });
        });

        if (selectedLang && langDropdown) {
            selectedLang.addEventListener("click", (e) => {
                e.stopPropagation();
                langDropdown.classList.toggle("active");
            });
            document.addEventListener("click", (e) => {
                if (!langDropdown.contains(e.target) && !selectedLang.contains(e.target)) {
                    langDropdown.classList.remove("active");
                }
            });
        }
    }

    // Event filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.featured-event-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            eventCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    gsap.fromTo(card, 
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5 }
                    );
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Calendar functionality
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const eventList = document.getElementById('event-list');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthNames = {
        'tr': ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
               'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        'en': ['January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 'December'],
        'de': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
               'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
    };

    const dayNames = {
        'tr': ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
        'en': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        'de': ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
    };

    // Extended events data with more events from June to August
    const eventsData = {
    // May 2024
    '2024-05-15': [
        {
            title: 'Orhan Pamuk ile Edebiyat Söyleşisi',
            time: '18:00 - 20:00',
            location: 'Ana Konferans Salonu',
            icon: 'fas fa-microphone'
        }
    ],
    '2024-05-18': [
        {
            title: 'Yaratıcı Yazma Atölyesi',
            time: '14:00 - 17:00',
            location: 'Atölye Salonu',
            icon: 'fas fa-paint-brush'
        }
    ],
    '2024-05-22': [
        {
            title: 'Masallar ve Kukla Tiyatrosu',
            time: '10:00 - 12:00',
            location: 'Çocuk Bölümü',
            icon: 'fas fa-child'
        }
    ],
    '2024-05-25': [
        {
            title: 'Kitap Kulübü Toplantısı',
            time: '19:00 - 21:00',
            location: 'Toplantı Salonu',
            icon: 'fas fa-book-reader'
        }
    ],
    
    // June 2024
    '2024-06-03': [
        {
            title: 'Fotoğraf Sergisi Açılışı',
            time: '17:00 - 19:00',
            location: 'Sergi Salonu',
            icon: 'fas fa-camera'
        }
    ],
    '2024-06-08': [
        {
            title: 'Şiir Dinletisi',
            time: '20:00 - 22:00',
            location: 'Ana Konferans Salonu',
            icon: 'fas fa-feather-alt'
        }
    ],
    '2024-06-12': [
        {
            title: 'Çocuk Resim Atölyesi',
            time: '14:00 - 16:00',
            location: 'Çocuk Bölümü',
            icon: 'fas fa-palette'
        }
    ],
    '2024-06-15': [
        {
            title: 'Bilim Kurgu Kitap Kulübü',
            time: '18:30 - 20:30',
            location: 'Toplantı Salonu',
            icon: 'fas fa-rocket'
        }
    ],
    '2024-06-20': [
        {
            title: 'Müzik Dinletisi',
            time: '19:00 - 21:00',
            location: 'Ana Konferans Salonu',
            icon: 'fas fa-music'
        }
    ],
    '2024-06-25': [
        {
            title: 'Tarih Söyleşisi',
            time: '16:00 - 18:00',
            location: 'Konferans Salonu',
            icon: 'fas fa-landmark'
        }
    ],
    '2024-06-29': [
        {
            title: 'Yaz Okuma Programı Başlangıcı',
            time: '10:00 - 12:00',
            location: 'Çocuk Bölümü',
            icon: 'fas fa-sun'
        }
    ],
    
    // July 2024
    '2024-07-05': [
        {
            title: 'Gençlik Yazma Atölyesi',
            time: '15:00 - 17:00',
            location: 'Atölye Salonu',
            icon: 'fas fa-pen'
        }
    ],
    '2024-07-10': [
        {
            title: 'Sanat Tarihi Konferansı',
            time: '18:00 - 20:00',
            location: 'Ana Konferans Salonu',
            icon: 'fas fa-university'
        }
    ],
    '2024-07-14': [
        {
            title: 'Çocuk Tiyatro Gösterisi',
            time: '11:00 - 12:30',
            location: 'Çocuk Bölümü',
            icon: 'fas fa-theater-masks'
        }
    ],
    '2024-07-18': [
        {
            title: 'Klasik Müzik Konseri',
            time: '20:00 - 22:00',
            location: 'Ana Konferans Salonu',
            icon: 'fas fa-violin'
        }
    ],
    '2024-07-22': [
        {
            title: 'Felsefe Tartışma Grubu',
            time: '19:00 - 21:00',
            location: 'Toplantı Salonu',
            icon: 'fas fa-brain'
        }
    ],
    '2024-07-26': [
        {
            title: 'Yaz Festivali',
            time: '16:00 - 22:00',
            location: 'Bahçe',
            icon: 'fas fa-star'
        }
    ],
    '2024-07-30': [
        {
            title: 'Dijital Okuryazarlık Semineri',
            time: '14:00 - 16:00',
            location: 'Bilgisayar Salonu',
            icon: 'fas fa-laptop'
        }
    ],
    
    // August 2024
    '2024-08-02': [
        {
            title: 'Yazar İmza Günü',
            time: '15:00 - 17:00',
            location: 'Giriş Holü',
            icon: 'fas fa-signature'
        }
    ],
    '2024-08-07': [
        {
            title: 'Çevre Bilinci Atölyesi',
            time: '10:00 - 12:00',
            location: 'Atölye Salonu',
            icon: 'fas fa-leaf'
        }
    ],
    '2024-08-12': [
        {
            title: 'Gençlik Kitap Kulübü',
            time: '17:00 - 19:00',
            location: 'Gençlik Bölümü',
            icon: 'fas fa-users'
        }
    ],
    '2024-08-16': [
        {
            title: 'Halk Oyunları Gösterisi',
            time: '19:30 - 21:00',
            location: 'Ana Konferans Salonu',
            icon: 'fas fa-dancing'
        }
    ],
    '2024-08-20': [
        {
            title: 'Bilim Deneyim Atölyesi',
            time: '14:00 - 16:00',
            location: 'Çocuk Bölümü',
            icon: 'fas fa-flask'
        }
    ],
    '2024-08-25': [
        {
            title: 'Edebiyat Paneli',
            time: '18:00 - 20:00',
            location: 'Ana Konferans Salonu',
            icon: 'fas fa-comments'
        }
    ],
    '2024-08-30': [
        {
            title: 'Yaz Sonu Sergisi',
            time: '16:00 - 19:00',
            location: 'Sergi Salonu',
            icon: 'fas fa-image'
        }
    ]
};

    function getEventIcon(eventType) {
        const iconMap = {
            'talk': 'fas fa-microphone',
            'workshop': 'fas fa-paint-brush',
            'children': 'fas fa-child',
            'club': 'fas fa-book-reader',
            'exhibition': 'fas fa-palette',
            'concert': 'fas fa-music'
        };
        return iconMap[eventType] || 'fas fa-calendar-alt';
    }

    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday start
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();

        calendarGrid.innerHTML = '';

        // Add day headers
        const currentDayNames = dayNames[currentLang] || dayNames['tr'];
        currentDayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            dayHeader.style.cssText = `
                background: var(--primary-color);
                color: white;
                padding: 1rem;
                text-align: center;
                font-weight: 600;
                font-size: 0.9rem;
            `;
            calendarGrid.appendChild(dayHeader);
        });

        // Add empty cells for previous month
        for (let i = adjustedFirstDay - 1; i >= 0; i--) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day other-month';
            dayElement.innerHTML = `<span class="day-number">${daysInPrevMonth - i}</span>`;
            calendarGrid.appendChild(dayElement);
        }

        // Add days of current month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const hasEvent = eventsData[dateString];

            dayElement.innerHTML = `
                <span class="day-number">${day}</span>
                ${hasEvent ? `<div class="event-indicator"><i class="${hasEvent[0].icon}"></i></div>` : ''}
            `;

            if (hasEvent) {
                dayElement.classList.add('has-event');
            }

            dayElement.addEventListener('click', () => {
                // Remove selected class from all days
                document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                // Add selected class to clicked day
                dayElement.classList.add('selected');
                
                // Show events for selected date
                showEventsForDate(dateString);
            });

            calendarGrid.appendChild(dayElement);
        }

        // Update month display
        updateCalendarLanguage();
    }

    function updateCalendarLanguage() {
        if (currentMonthElement) {
            const currentMonthNames = monthNames[currentLang] || monthNames['tr'];
            currentMonthElement.textContent = `${currentMonthNames[currentMonth]} ${currentYear}`;
        }
    }

    function showEventsForDate(dateString) {
        const events = eventsData[dateString];
    
        if (events && events.length > 0) {
            eventList.innerHTML = events.map(event => `
            <div class="calendar-event-item">
                <div class="event-icon">
                    <i class="${event.icon}"></i>
                </div>
                <div class="event-details">
                    <h5>${event.title}</h5>
                    <p><i class="far fa-clock"></i> ${event.time}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                </div>
            </div>
        `).join('');
        } else {
            const noEventsText = {
                'tr': 'Bu tarihte etkinlik bulunmamaktadır.',
                'en': 'No events found for this date.',
                'de': 'Keine Veranstaltungen für dieses Datum gefunden.'
            };
            eventList.innerHTML = `<p>${noEventsText[currentLang] || noEventsText['tr']}</p>`;
        }
    }

    // Calendar navigation
    if (prevMonthBtn && nextMonthBtn) {
        prevMonthBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
        });

        nextMonthBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        });
    }

    // Initialize calendar
    generateCalendar(currentMonth, currentYear);

    // Gallery filtering
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            galleryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const filter = tab.getAttribute('data-gallery');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    gsap.fromTo(item, 
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1, duration: 0.5 }
                    );
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Admin functionality
    const manageEventsBtn = document.getElementById('manage-events-btn');
    const addEventBtn = document.getElementById('add-event-btn');

    if (manageEventsBtn) {
        manageEventsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Admin paneli açılacak - Backend entegrasyonu gerekli');
        });
    }

    if (addEventBtn) {
        addEventBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Yeni etkinlik ekleme formu açılacak - Backend entegrasyonu gerekli');
        });
    }

    // Scroll animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.featured-event-card, .type-card, .gallery-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    // Hero scroll indicator
    const heroScrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (heroScrollIndicator) {
        heroScrollIndicator.addEventListener('click', () => {
            const filtersSection = document.querySelector('.event-filters');
            if (filtersSection) {
                filtersSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.event-newsletter .newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                const successMessages = {
                    'tr': 'Etkinlik bültenimize başarıyla abone oldunuz!',
                    'en': 'Successfully subscribed to our event newsletter!',
                    'de': 'Erfolgreich für unseren Veranstaltungsnewsletter angemeldet!'
                };
                alert(successMessages[currentLang] || successMessages['tr']);
                emailInput.value = '';
            } else {
                const errorMessages = {
                    'tr': 'Lütfen geçerli bir e-posta adresi girin.',
                    'en': 'Please enter a valid email address.',
                    'de': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
                };
                alert(errorMessages[currentLang] || errorMessages['tr']);
            }
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Initialize animations after page load
    setTimeout(() => {
        initScrollAnimations();
        
        // Hero animations
        gsap.from('.events-hero .hero-title', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });
        
        gsap.from('.events-hero .hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
            delay: 0.7
        });
        
        gsap.from('.events-hero .hero-buttons', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
            delay: 0.9
        });

        // Filter buttons animation
        gsap.from('.filter-btn', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.event-filters',
                start: 'top 80%'
            }
        });

        // Calendar animation
        gsap.from('.calendar-container', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.event-calendar',
                start: 'top 80%'
            }
        });

    }, 1500);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Event registration buttons
    document.querySelectorAll('.event-register-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const registerMessages = {
                'tr': 'Etkinlik kayıt formu açılacak. Bu özellik yakında aktif olacak!',
                'en': 'Event registration form will open. This feature will be active soon!',
                'de': 'Das Veranstaltungsanmeldeformular wird geöffnet. Diese Funktion wird bald aktiv sein!'
            };
            alert(registerMessages[currentLang] || registerMessages['tr']);
        });
    });

    // CTA buttons
    document.querySelectorAll('[data-lang-key="cta-membership"], [data-lang-key="cta-newsletter"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (btn.getAttribute('data-lang-key') === 'cta-membership') {
                window.location.href = 'register.html';
            } else {
                const newsletterSection = document.querySelector('.event-newsletter');
                if (newsletterSection) {
                    newsletterSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Initialize with current language
    if (window.setLanguage) {
        window.setLanguage(currentLang);
    }

    const lenis=new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 1.5,
    })

    // Loader'ı her durumda gizle
    const loader = document.querySelector(".loader");
    function hideLoader() {
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 300);
        }
    }
    window.addEventListener("load", hideLoader);
    setTimeout(hideLoader, 3000);
});