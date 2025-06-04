// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const booksContainer = document.getElementById('books-container');
    const viewButtons = document.querySelectorAll('.view-btn');
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('book-search');
    const searchButton = document.getElementById('search-button');
    const pagination = document.querySelector('.pagination');
    const pageNumbers = document.querySelectorAll('.page-num');
    const prevPageBtn = document.querySelector('.pagination-btn.prev');
    const nextPageBtn = document.querySelector('.pagination-btn.next');
    const modalOverlay = document.getElementById('book-modal-overlay');
    const bookModal = document.getElementById('book-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const loginModal = document.getElementById('login-modal');
    const membershipBtn = document.getElementById('show-more-btn');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showPasswordBtn = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');
    const navLoginBtn = document.getElementById('nav-login-btn');
    const navRegisterBtn = document.getElementById('nav-register-btn');
    
    // State
    let currentView = 'grid';
    let currentPage = 1;
    let booksPerPage = 5; // Initially show only 5 books
    let currentCategory = 'all';
    let currentSort = 'popular';
    let searchQuery = '';
    let isLoggedIn = false; // Track login state
    let currentLang = 'tr'; // Default language
    
    // Language translations
    const translations = {
        tr: {
            "nav-home": "Anasayfa",
            "nav-books": "Kitaplar",
            "nav-events": "Etkinlikler",
            "nav-services": "Hizmetler",
            "nav-about": "Hakkımızda",
            "nav-contact": "İletişim",
            "nav-login": "Giriş Yap",
            "nav-register": "Üye Ol",
            "all-books-title": "Tüm Kitaplar",
            "search-placeholder": "Kitap adı, yazar veya konu...",
            "filter-category": "Kategori",
            "filter-all": "Tümü",
            "cat-fiction": "Kurgu",
            "cat-science": "Bilim",
            "cat-history": "Tarih",
            "cat-biography": "Biyografi",
            "cat-children": "Çocuk",
            "cat-art": "Sanat",
            "filter-sort": "Sıralama",
            "sort-popular": "En Popüler",
            "sort-newest": "En Yeni",
            "sort-name-asc": "İsim: A-Z",
            "sort-name-desc": "İsim: Z-A",
            "review-button": "İncele",
            "loading-books": "Kitaplar yükleniyor...",
            "show-more": "Daha Fazlasını Göster",
            "membership-required": "Daha fazla kitap görmek için üyelik gereklidir.",
            "no-results": "Aramanıza uygun kitap bulunamadı.",
            "reset-filters": "Filtreleri Sıfırla",
            "category": "Kategori",
            "publisher": "Yayınevi",
            "pages": "Sayfa Sayısı",
            "description": "Açıklama",
            "reviews": "Değerlendirme",
            "membership": "Üyelik",
            "login": "Üye Girişi",
            "email": "E-posta",
            "password": "Şifre",
            "remember-password": "Şifreyi Kaydet",
            "login-button": "Giriş Yap",
            "not-a-member": "Üye değil misin?",
            "register-link": "Kayıt Ol",
            "register": "Kayıt Ol",
            "fullname": "Ad Soyad",
            "confirm-password": "Şifre Tekrar",
            "terms-agreement": "Kullanım koşullarını kabul ediyorum",
            "register-button": "Kayıt Ol",
            "already-member": "Zaten üye misin?",
            "login-link": "Giriş Yap"
        },
        en: {
            "nav-home": "Home",
            "nav-books": "Books",
            "nav-events": "Events",
            "nav-services": "Services",
            "nav-about": "About",
            "nav-contact": "Contact",
            "nav-login": "Login",
            "nav-register": "Register",
            "all-books-title": "All Books",
            "search-placeholder": "Book title, author or subject...",
            "filter-category": "Category",
            "filter-all": "All",
            "cat-fiction": "Fiction",
            "cat-science": "Science",
            "cat-history": "History",
            "cat-biography": "Biography",
            "cat-children": "Children",
            "cat-art": "Art",
            "filter-sort": "Sort",
            "sort-popular": "Most Popular",
            "sort-newest": "Newest",
            "sort-name-asc": "Name: A-Z",
            "sort-name-desc": "Name: Z-A",
            "review-button": "Review",
            "loading-books": "Loading books...",
            "show-more": "Show More",
            "membership-required": "Membership required to see more books.",
            "no-results": "No books found matching your search.",
            "reset-filters": "Reset Filters",
            "category": "Category",
            "publisher": "Publisher",
            "pages": "Pages",
            "description": "Description",
            "reviews": "Reviews",
            "membership": "Membership",
            "login": "Login",
            "email": "Email",
            "password": "Password",
            "remember-password": "Remember Password",
            "login-button": "Login",
            "not-a-member": "Not a member?",
            "register-link": "Register",
            "register": "Register",
            "fullname": "Full Name",
            "confirm-password": "Confirm Password",
            "terms-agreement": "I agree to the terms and conditions",
            "register-button": "Register",
            "already-member": "Already a member?",
            "login-link": "Login"
        },
        de: {
            "nav-home": "Startseite",
            "nav-books": "Bücher",
            "nav-events": "Veranstaltungen",
            "nav-services": "Dienstleistungen",
            "nav-about": "Über uns",
            "nav-contact": "Kontakt",
            "nav-login": "Anmelden",
            "nav-register": "Registrieren",
            "all-books-title": "Alle Bücher",
            "search-placeholder": "Buchtitel, Autor oder Thema...",
            "filter-category": "Kategorie",
            "filter-all": "Alle",
            "cat-fiction": "Fiktion",
            "cat-science": "Wissenschaft",
            "cat-history": "Geschichte",
            "cat-biography": "Biografie",
            "cat-children": "Kinder",
            "cat-art": "Kunst",
            "filter-sort": "Sortieren",
            "sort-popular": "Beliebteste",
            "sort-newest": "Neueste",
            "sort-name-asc": "Name: A-Z",
            "sort-name-desc": "Name: Z-A",
            "review-button": "Ansehen",
            "loading-books": "Bücher werden geladen...",
            "show-more": "Mehr anzeigen",
            "membership-required": "Mitgliedschaft erforderlich, um mehr Bücher zu sehen.",
            "no-results": "Keine Bücher für Ihre Suche gefunden.",
            "reset-filters": "Filter zurücksetzen",
            "category": "Kategorie",
            "publisher": "Verlag",
            "pages": "Seitenzahl",
            "description": "Beschreibung",
            "reviews": "Bewertungen",
            "membership": "Mitgliedschaft",
            "login": "Anmelden",
            "email": "E-Mail",
            "password": "Passwort",
            "remember-password": "Passwort speichern",
            "login-button": "Anmelden",
            "not-a-member": "Noch kein Mitglied?",
            "register-link": "Registrieren",
            "register": "Registrieren",
            "fullname": "Vollständiger Name",
            "confirm-password": "Passwort bestätigen",
            "terms-agreement": "Ich stimme den Nutzungsbedingungen zu",
            "register-button": "Registrieren",
            "already-member": "Bereits Mitglied?",
            "login-link": "Anmelden"
        }
    };
    
    // Function to update language text
    function updateLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-lang-key]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.getAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update current language flag and abbreviation
        const currentFlag = document.getElementById('current-flag');
        const currentLangAbbr = document.getElementById('current-lang-abbr');
        
        if (currentLangAbbr) {
            currentLangAbbr.textContent = lang.toUpperCase();
        }
        
        if (currentFlag) {
            switch(lang) {
                case 'en':
                    currentFlag.src = 'united-kingdom.png';
                    break;
                case 'de':
                    currentFlag.src = 'german.png';
                    break;
                default:
                    currentFlag.src = 'world.png';
            }
        }
    }
    
    // Sample book data
    const allBooks = [
        {
            id: 1,
            title: 'Suç ve Ceza',
            author: 'Fyodor Dostoyevski',
            cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
            rating: 4.8,
            reviews: 1254,
            category: 'fiction',
            price: 129.99,
            originalPrice: 159.99,
            discount: 19
        },
        {
            id: 2,
            title: '1984',
            author: 'George Orwell',
            cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
            rating: 4.7,
            reviews: 987,
            category: 'fiction',
            price: 89.99,
            originalPrice: 119.99,
            discount: 25
        },
        {
            id: 3,
            title: 'Küçük Prens',
            author: 'Antoine de Saint-Exupéry',
            cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
            rating: 4.9,
            reviews: 2354,
            category: 'fiction',
            price: 69.99,
            originalPrice: null,
            discount: null
        },
        {
            id: 4,
            title: 'Sapiens: İnsan Türünün Kısa Bir Tarihi',
            author: 'Yuval Noah Harari',
            cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
            rating: 4.6,
            reviews: 876,
            category: 'science',
            price: 149.99,
            originalPrice: 189.99,
            discount: 21
        },
        {
            id: 5,
            title: 'Atomik Alışkanlıklar',
            author: 'James Clear',
            cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646',
            rating: 4.5,
            reviews: 654,
            category: 'science',
            price: 99.99,
            originalPrice: 129.99,
            discount: 23
        },
        {
            id: 6,
            title: 'Nutuk',
            author: 'Mustafa Kemal Atatürk',
            cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
            rating: 4.9,
            reviews: 1876,
            category: 'history',
            price: 79.99,
            originalPrice: null,
            discount: null
        },
        {
            id: 7,
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            cover: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb',
            rating: 4.7,
            reviews: 985,
            category: 'biography',
            price: 119.99,
            originalPrice: 149.99,
            discount: 20
        },
        {
            id: 8,
            title: 'Harry Potter ve Felsefe Taşı',
            author: 'J.K. Rowling',
            cover: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239',
            rating: 4.8,
            reviews: 3456,
            category: 'fiction',
            price: 99.99,
            originalPrice: null,
            discount: null
        },
        {
            id: 9,
            title: 'Sefiller',
            author: 'Victor Hugo',
            cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
            rating: 4.8,
            reviews: 1124,
            category: 'fiction',
            price: 149.99,
            originalPrice: 199.99,
            discount: 25
        },
        {
            id: 10,
            title: 'Hayvanlar Çiftliği',
            author: 'George Orwell',
            cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
            rating: 4.6,
            reviews: 887,
            category: 'fiction',
            price: 79.99,
            originalPrice: 99.99,
            discount: 20
        },
        {
            id: 11,
            title: 'Otomatik Portakal',
            author: 'Anthony Burgess',
            cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
            rating: 4.5,
            reviews: 754,
            category: 'fiction',
            price: 89.99,
            originalPrice: null,
            discount: null
        },
        {
            id: 12,
            title: 'Kozmos',
            author: 'Carl Sagan',
            cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
            rating: 4.7,
            reviews: 876,
            category: 'science',
            price: 129.99,
            originalPrice: 169.99,
            discount: 24
        },
        {
            id: 13,
            title: 'İnsan Ne İle Yaşar',
            author: 'Lev Tolstoy',
            cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646',
            rating: 4.8,
            reviews: 654,
            category: 'fiction',
            price: 69.99,
            originalPrice: null,
            discount: null
        },
        {
            id: 14,
            title: 'Türklerin Tarihi',
            author: 'İlber Ortaylı',
            cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
            rating: 4.9,
            reviews: 1276,
            category: 'history',
            price: 139.99,
            originalPrice: 179.99,
            discount: 22
        },
        {
            id: 15,
            title: 'Albert Einstein',
            author: 'Walter Isaacson',
            cover: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb',
            rating: 4.6,
            reviews: 785,
            category: 'biography',
            price: 119.99,
            originalPrice: 149.99,
            discount: 20
        },
        {
            id: 16,
            title: 'Yüzüklerin Efendisi',
            author: 'J.R.R. Tolkien',
            cover: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239',
            rating: 4.9,
            reviews: 5456,
            category: 'fiction',
            price: 199.99,
            originalPrice: 249.99,
            discount: 20
        },
    ];
    
    // Filter books based on current filters and search query
    function filterBooks() {
        let filteredBooks = [...allBooks];
        
        // Apply category filter
        if (currentCategory !== 'all') {
            filteredBooks = filteredBooks.filter(book => book.category === currentCategory);
        }
        
        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredBooks = filteredBooks.filter(book => 
                book.title.toLowerCase().includes(query) || 
                book.author.toLowerCase().includes(query)
            );
        }
        
        // Apply sorting
        switch(currentSort) {
            case 'popular':
                filteredBooks.sort((a, b) => b.reviews - a.reviews);
                break;
            case 'newest':
                // Assuming id represents chronological order for demo
                filteredBooks.sort((a, b) => b.id - a.id);
                break;
            case 'name-asc':
                filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'name-desc':
                filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
                break;
        }
        
        return filteredBooks;
    }
    
    // Display books with pagination
    function displayBooks() {
        const filteredBooks = filterBooks();
        
        // If not logged in, only show the 5 most popular books
        const limitedBooks = isLoggedIn ? filteredBooks : filteredBooks.slice(0, 5);
        
        // Calculate total pages
        const totalPages = Math.ceil(limitedBooks.length / booksPerPage);
        
        // Update pagination UI
        updatePagination(totalPages);
        
        // Get books for current page
        const startIndex = (currentPage - 1) * booksPerPage;
        const endIndex = startIndex + booksPerPage;
        const booksToShow = limitedBooks.slice(startIndex, endIndex);
        
        // Clear container
        booksContainer.innerHTML = '';
        
        // Update container class based on view mode
        if (currentView === 'grid') {
            booksContainer.className = 'books-grid';
        } else {
            booksContainer.className = 'books-list';
        }
        
        // No results message
        if (booksToShow.length === 0) {
            booksContainer.innerHTML = `
                <div class="no-results">
                    <p data-lang-key="no-results">Aramanıza uygun kitap bulunamadı.</p>
                    <button class="btn btn-primary" onclick="resetFilters()" data-lang-key="reset-filters">Filtreleri Sıfırla</button>
                </div>
            `;
            return;
        }
        
        // Generate book cards
        booksToShow.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.dataset.bookId = book.id;
            
            // Generate star rating HTML
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(book.rating)) {
                    starsHtml += '<i class="fas fa-star"></i>';
                } else if (i - 0.5 <= book.rating) {
                    starsHtml += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    starsHtml += '<i class="far fa-star"></i>';
                }
            }
                
            bookCard.innerHTML = `
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-rating">
                        ${starsHtml}
                        <span>(${book.reviews})</span>
                    </div>
                    <div class="book-actions">
                        <a href="#" class="btn btn-primary review-book" data-book-id="${book.id}" data-lang-key="review-button">İncele</a>
                        <a href="#" class="btn btn-secondary"><i class="far fa-heart"></i></a>
                    </div>
                </div>
            `;
            
            booksContainer.appendChild(bookCard);
        });
        
        // Add review button event listeners
        document.querySelectorAll('.review-book').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const bookId = this.dataset.bookId;
                showBookDetails(bookId);
            });
        });
        
        // Show "Show More" button if not logged in and there are more books
        if (!isLoggedIn && filteredBooks.length > 5) {
            const showMoreDiv = document.createElement('div');
            showMoreDiv.className = 'show-more-container';
            showMoreDiv.innerHTML = `
                <button id="show-more-btn" class="btn btn-primary btn-large" data-lang-key="show-more">Daha Fazlasını Göster</button>
                <p data-lang-key="membership-required">Daha fazla kitap görmek için üyelik gereklidir.</p>
            `;
            booksContainer.appendChild(showMoreDiv);
            
            // Add show more button event listener
            document.getElementById('show-more-btn').addEventListener('click', function() {
                showMembershipModal();
            });
        }
    }
    
    // Show book details modal
    function showBookDetails(bookId) {
        const book = allBooks.find(b => b.id == bookId);
        if (!book) return;
        
        // Populate modal with book details
        const modalContent = document.querySelector('.book-modal-content');
        
        // Generate star rating HTML
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(book.rating)) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= book.rating) {
                starsHtml += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }
        
        modalContent.innerHTML = `
            <div class="modal-book-cover">
                <img src="${book.cover}" alt="${book.title}">
            </div>
            <div class="modal-book-info">
                <h2>${book.title}</h2>
                <p class="modal-book-author">${book.author}</p>
                <div class="modal-book-rating">
                    ${starsHtml}
                    <span>(${book.reviews} ${translations[currentLang]["reviews"] || 'Değerlendirme'})</span>
                </div>
                <div class="modal-book-details">
                    <div class="detail-item">
                        <h4 data-lang-key="category">Kategori</h4>
                        <p>${getCategoryName(book.category)}</p>
                    </div>
                    <div class="detail-item">
                        <h4 data-lang-key="publisher">Yayınevi</h4>
                        <p>Litera Yayınları</p>
                    </div>
                    <div class="detail-item">
                        <h4 data-lang-key="pages">Sayfa Sayısı</h4>
                        <p>${Math.floor(Math.random() * 300) + 100}</p>
                    </div>
                </div>
                <div class="modal-book-description">
                    <h4 data-lang-key="description">Açıklama</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies, pretium quam sed, mollis orci. 
                    Maecenas fringilla libero eu ullamcorper aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Donec at dignissim ex, ac varius magna.</p>
                </div>
            </div>
        `;
        
        // Show modal
        modalOverlay.classList.add('active');
        bookModal.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Update language in the modal
        updateLanguage(currentLang);
    }
    
    // Get translated category name
    function getCategoryName(category) {
        const categoryKeys = {
            fiction: 'cat-fiction',
            science: 'cat-science',
            history: 'cat-history',
            biography: 'cat-biography',
            children: 'cat-children',
            art: 'cat-art'
        };
        
        if (categoryKeys[category]) {
            return translations[currentLang][categoryKeys[category]] || category;
        }
        
        return category;
    }
    
    // Close book details modal
    function closeBookModal() {
        modalOverlay.classList.remove('active');
        bookModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    
    // Show membership modal
    function showMembershipModal() {
        loginModal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Show login form by default
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
    
    // Close membership modal
    function closeMembershipModal() {
        loginModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    
    // Toggle between login and register forms
    function showLoginForm() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
    
    function showRegisterForm() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
    
    // Toggle password visibility
    function togglePasswordVisibility() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            passwordInput.type = 'password';
            showPasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
        }
    }
    
    // Update pagination UI
    function updatePagination(totalPages) {
        // Disable/enable prev/next buttons
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
        
        // Update page numbers
        const pageNumbersContainer = document.querySelector('.page-numbers');
        pageNumbersContainer.innerHTML = '';
        
        // Create page number buttons
        for (let i = 1; i <= Math.min(totalPages, 5); i++) {
            const pageNum = document.createElement('button');
            pageNum.className = `page-num ${i === currentPage ? 'active' : ''}`;
            pageNum.textContent = i;
            pageNum.addEventListener('click', () => {
                currentPage = i;
                displayBooks();
            });
            pageNumbersContainer.appendChild(pageNum);
        }
    }
    
    // Reset all filters
    window.resetFilters = function() {
        currentCategory = 'all';
        currentSort = 'popular';
        searchQuery = '';
        currentPage = 1;
        
        // Reset UI
        if (categoryFilter) categoryFilter.value = 'all';
        if (sortFilter) sortFilter.value = 'popular';
        if (searchInput) searchInput.value = '';
        
        // Refresh display
        displayBooks();
    };
    
    // Switch between grid and list views
    function switchView(view) {
        currentView = view;
        
        // Update UI
        viewButtons.forEach(btn => btn.classList.remove('active'));
        if (view === 'grid') {
            gridViewBtn.classList.add('active');
        } else {
            listViewBtn.classList.add('active');
        }
        
        // Refresh display
        displayBooks();
    }
    
    // Event listeners
    if (gridViewBtn) {
        gridViewBtn.addEventListener('click', () => switchView('grid'));
    }
    
    if (listViewBtn) {
        listViewBtn.addEventListener('click', () => switchView('list'));
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            currentCategory = this.value;
            currentPage = 1;
            displayBooks();
        });
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            currentSort = this.value;
            currentPage = 1;
            displayBooks();
        });
    }
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            searchQuery = searchInput.value.trim();
            currentPage = 1;
            displayBooks();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchQuery = searchInput.value.trim();
                currentPage = 1;
                displayBooks();
            }
        });
    }
    
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayBooks();
            }
        });
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            currentPage++;
            displayBooks();
        });
    }
    
    // Close modal when clicking the close button or outside the modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeBookModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeBookModal();
                closeMembershipModal();
            }
        });
    }
    
    // Membership form event listeners
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            showRegisterForm();
        });
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginForm();
        });
    }
    
    if (showPasswordBtn) {
        showPasswordBtn.addEventListener('click', togglePasswordVisibility);
    }
    
    // Form submissions
    document.getElementById('login-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulate login
        isLoggedIn = true;
        closeMembershipModal();
        booksPerPage = 12; // Show more books per page when logged in
        displayBooks();
    });
    
    document.getElementById('register-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulate registration and login
        isLoggedIn = true;
        closeMembershipModal();
        booksPerPage = 12; // Show more books per page when logged in
        displayBooks();
    });
    
    // Language selector functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons) {
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                updateLanguage(lang);
                
                // Close the language dropdown
                document.querySelector('.language-selector').classList.remove('active');
            });
        });
    }
    
    // Toggle language dropdown
    const selectedLang = document.querySelector('.selected-lang');
    if (selectedLang) {
        selectedLang.addEventListener('click', function(e) {
            document.querySelector('.language-selector').classList.toggle('active');
            this.querySelector('i').classList.toggle('rotate');
        });
    }
    
    // Navbar login/register buttons
    if (navLoginBtn) {
        navLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showMembershipModal();
            showLoginForm();
        });
    }
    
    if (navRegisterBtn) {
        navRegisterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showMembershipModal();
            showRegisterForm();
        });
    }
    
    // Initialize with default language
    updateLanguage(currentLang);
    
    // Initialize book display
    displayBooks();

    // Lenis smooth scroll initialization
    const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 1.5,
    });
}); 