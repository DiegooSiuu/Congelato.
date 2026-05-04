// =====================================================
// CONGELATO POS SYSTEM - Complete JavaScript Logic
// =====================================================

// Product Database
const PRODUCTS = {
    1: { id: 1, name: "Espresso Intenso", desc: "Café espresso doble con aroma intenso", price: 45, category: "coffees", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400" },
    2: { id: 2, name: "Latte Vainilla", desc: "Cremoso latte con vainilla natural", price: 65, category: "coffees", image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=400" },
    4: { id: 4, name: "Americano Retro", desc: "Café largo estilo americano", price: 40, category: "coffees", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400" },
    5: { id: 5, name: "Mocha Blanco", desc: "Chocolate blanco con espresso", price: 70, category: "coffees", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=400" },
    7: { id: 7, name: "Matcha Ceremonial", desc: "Matcha premium con leche", price: 75, category: "teas", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400" },
    8: { id: 8, name: "Earl Grey Clásico", desc: "Té negro con bergamota", price: 50, category: "teas", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400" },
    11: { id: 11, name: "Caramel Frappé", desc: "Frappé con caramelo dorado", price: 85, category: "frappes", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400" },
    12: { id: 12, name: "Cookies & Cream", desc: "Galleta molida con crema", price: 90, category: "frappes", image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=400" },
    15: { id: 15, name: "Java Chip", desc: "Chocolate con chips de café", price: 90, category: "frappes", image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=400" },
    16: { id: 16, name: "Vasito Clásico", desc: "2 bolas de helado a elección", price: 55, category: "icecream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400" },
    17: { id: 17, name: "Cono Tradición", desc: "Cono crujiente con helado", price: 45, category: "icecream", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400" },
    18: { id: 18, name: "Malteada Helada", desc: "Malteada cremosa muy fría", price: 75, category: "icecream", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400" },
    21: { id: 21, name: "Croissant Clásico", desc: "Hojaldre dorado y crujiente", price: 45, category: "snacks", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400" },
    22: { id: 22, name: "Panini Pavo", desc: "Panini tostado con pavo", price: 95, category: "snacks", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=400" },
    23: { id: 23, name: "Cheesecake Frutos", desc: "Pay cremoso con frutos", price: 65, category: "snacks", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400" },
    25: { id: 25, name: "Bagel con Crema", desc: "Bagel tostado con queso crema", price: 55, category: "snacks", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400" }
};

// Reward Levels Configuration
const REWARD_LEVELS = {
    fanatico: { name: "Fanático", minVisits: 0, maxVisits: 19, color: "#5c8a68", icon: "fa-star" },
    superFanatico: { name: "Súper Fanático", minVisits: 20, maxVisits: 49, color: "#d4a574", icon: "fa-star-half-alt" },
    megaFan: { name: "Mega Fan", minVisits: 50, maxVisits: 99, color: "#8b6914", icon: "fa-star-of-life" },
    leyenda: { name: "Leyenda", minVisits: 100, maxVisits: Infinity, color: "#ff6b6b", icon: "fa-crown" }
};

// Benefits by Level
const BENEFITS = {
    fanatico: [
        { icon: "fa-birthday-cake", title: "Helado Gratis", desc: "En tu cumpleaños" },
        { icon: "fa-receipt", title: "Puntos por Compra", desc: "1 punto = $1 peso" }
    ],
    superFanatico: [
        { icon: "fa-birthday-cake", title: "Helado Gratis", desc: "En tu cumpleaños" },
        { icon: "fa-receipt", title: "Puntos por Compra", desc: "1 punto = $1 peso" },
        { icon: "fa-glass-cheers", title: "Bebida Gratis", desc: "Cada 10 visitas" }
    ],
    megaFan: [
        { icon: "fa-birthday-cake", title: "Helado Gratis", desc: "En tu cumpleaños" },
        { icon: "fa-receipt", title: "Puntos por Compra", desc: "1 punto = $1 peso" },
        { icon: "fa-glass-cheers", title: "Bebida Gratis", desc: "Cada 10 visitas" },
        { icon: "fa-gem", title: "Producto Premium", desc: "Mensual gratis" }
    ],
    leyenda: [
        { icon: "fa-birthday-cake", title: "Helado Gratis", desc: "En tu cumpleaños" },
        { icon: "fa-receipt", title: "Puntos por Compra", desc: "1 punto = $1 peso" },
        { icon: "fa-glass-cheers", title: "Bebida Gratis", desc: "Cada 10 visitas" },
        { icon: "fa-gem", title: "Producto Premium", desc: "Mensual gratis" },
        { icon: "fa-vip", title: "Acceso VIP", desc: "Eventos exclusivos" }
    ]
};

// =====================================================
// STATE MANAGEMENT
// =====================================================
let currentUser = null;
let cart = [];
let qrGenerated = false;

// =====================================================
// DOM ELEMENTS
// =====================================================
const DOM = {
    // Navigation - may not exist on user.html
    btnLogo: document.getElementById('btnLogo'),
    btnMenu: document.getElementById('btnMenu'),
    btnRewards: document.getElementById('btnRewards'),
    findStore: document.getElementById('findStore'),
    exploreBtn: document.getElementById('exploreBtn'),
    heroRewardsBtn: document.getElementById('heroRewardsBtn'),
    btnLocator: document.getElementById('btnLocator'),
    btnBackHome: document.getElementById('btnBackHome'),

    // Auth buttons
    authButtons: document.getElementById('authButtons'),
    userMenu: document.getElementById('userMenu'),
    userAvatarNav: document.getElementById('userAvatarNav'),
    userNameNav: document.getElementById('userNameNav'),
    btnLoginNav: document.getElementById('btnLoginNav'),
    btnJoinNav: document.getElementById('btnJoinNav'),
    btnLogoutNav: document.getElementById('btnLogoutNav'),
    btnMyProfile: document.getElementById('btnMyProfile'),
    btnMyRewards: document.getElementById('btnMyRewards'),

    // Main sections - may not exist on user.html
    mainContent: document.getElementById('mainContent'),
    userRewards: document.getElementById('userRewards'),
    menuSection: document.getElementById('menuSection'),

    // Cart
    cartBtn: document.getElementById('cartBtn'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartClose: document.getElementById('cartClose'),
    cartItems: document.getElementById('cartItems'),
    cartEmpty: document.getElementById('cartEmpty'),
    cartCount: document.getElementById('cartCount'),
    subtotalAmount: document.getElementById('subtotalAmount'),
    btnCheckout: document.getElementById('btnCheckout'),

    // Checkout Modal
    checkoutModal: document.getElementById('checkoutModal'),
    closeCheckout: document.getElementById('closeCheckout'),
    checkoutItems: document.getElementById('checkoutItems'),
    checkoutSubtotal: document.getElementById('checkoutSubtotal'),
    checkoutTotal: document.getElementById('checkoutTotal'),
    btnPay: document.getElementById('btnPay'),
    btnCancelCheckout: document.getElementById('btnCancelCheckout'),

    // Auth Modal
    authModal: document.getElementById('authModal'),
    closeAuth: document.getElementById('closeAuth'),
    loginForm: document.getElementById('loginForm'),
    registerForm: document.getElementById('registerForm'),
    loginEmail: document.getElementById('loginEmail'),
    loginPass: document.getElementById('loginPass'),
    regName: document.getElementById('regName'),
    regEmail: document.getElementById('regEmail'),
    regPhone: document.getElementById('regPhone'),
    regPass: document.getElementById('regPass'),
    btnSubmitLogin: document.getElementById('btnSubmitLogin'),
    btnSubmitRegister: document.getElementById('btnSubmitRegister'),
    toRegister: document.getElementById('toRegister'),
    toLogin: document.getElementById('toLogin'),

    // Product Modal
    productModal: document.getElementById('productModal'),
    closeProduct: document.getElementById('closeProduct'),
    productDetail: document.getElementById('productDetail'),

    // Success Modal
    successModal: document.getElementById('successModal'),
    successMessage: document.getElementById('successMessage'),
    visitNumber: document.getElementById('visitNumber'),
    btnCloseSuccess: document.getElementById('btnCloseSuccess'),

    // User Rewards
    qrcode: document.getElementById('qrcode'),
    userNameDisplay: document.getElementById('userNameDisplay'),
    memberIdDisplay: document.getElementById('memberIdDisplay'),
    memberSince: document.getElementById('memberSince'),
    levelBadge: document.getElementById('levelBadge'),
    levelName: document.getElementById('levelName'),
    currentVisits: document.getElementById('currentVisits'),
    nextLevelVisits: document.getElementById('nextLevelVisits'),
    progressFill: document.getElementById('progressFill'),
    nextStepText: document.getElementById('nextStepText'),
    nextReward: document.getElementById('nextReward'),
    benefitsGrid: document.getElementById('benefitsGrid'),
    visitHistory: document.getElementById('visitHistory'),
    btnLogout: document.getElementById('btnLogout'),
    btnAddWallet: document.getElementById('btnAddWallet'),
    profileAvatar: document.getElementById('profileAvatar')
};

// =====================================================
// HELPER FUNCTIONS
// =====================================================
function safeSetStyle(element, property, value) {
    if (element) element.style[property] = value;
}

function safeSetText(element, text) {
    if (element) element.textContent = text;
}

function safeAddEventListener(element, event, handler) {
    if (element) element.addEventListener(event, handler);
}

// =====================================================
// USER MANAGEMENT
// =====================================================
function generateMemberId() {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
        if (i > 0 && i % 4 === 0 && i < 15) result += ' ';
    }
    return result;
}

function getUserLevel(visits) {
    if (visits >= 100) return 'leyenda';
    if (visits >= 50) return 'megaFan';
    if (visits >= 20) return 'superFanatico';
    return 'fanatico';
}

function getNextLevelInfo(visits) {
    const currentLevel = getUserLevel(visits);
    switch (currentLevel) {
        case 'fanatico':
            return { level: 'superFanatico', name: 'Súper Fanático', visits: 20 - visits };
        case 'superFanatico':
            return { level: 'megaFan', name: 'Mega Fan', visits: 50 - visits };
        case 'megaFan':
            return { level: 'leyenda', name: 'Leyenda', visits: 100 - visits };
        case 'leyenda':
            return null;
    }
}

function createUser(name, email, phone, password) {
    const user = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        name,
        email,
        phone,
        password,
        memberId: generateMemberId(),
        visits: 0,
        points: 0,
        createdAt: new Date().toISOString(),
        visitHistory: []
    };
    return user;
}

function saveUsers(users) {
    localStorage.setItem('congelato_users', JSON.stringify(users));
}

function getUsers() {
    const data = localStorage.getItem('congelato_users');
    return data ? JSON.parse(data) : {};
}

function findUserByEmail(email) {
    const users = getUsers();
    return Object.values(users).find(u => u.email === email);
}

function saveCurrentUser() {
    if (currentUser) {
        const users = getUsers();
        users[currentUser.email] = currentUser;
        saveUsers(users);
        localStorage.setItem('congelato_currentUser', currentUser.email);
    }
}

function loadCurrentUser() {
    const email = localStorage.getItem('congelato_currentUser');
    if (email) {
        const users = getUsers();
        currentUser = users[email] || null;
    }
    return currentUser;
}

function logout() {
    localStorage.removeItem('congelato_currentUser');
    currentUser = null;
    cart = [];
    updateCartUI();
    updateNavUI();
    showHome();
}

// =====================================================
// AUTH HANDLERS
// =====================================================
function openAuthModal(view = 'login') {
    DOM.authModal.style.display = 'flex';
    DOM.loginForm.style.display = view === 'login' ? 'block' : 'none';
    DOM.registerForm.style.display = view === 'register' ? 'block' : 'none';
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    DOM.authModal.style.display = 'none';
    document.body.style.overflow = '';
    clearAuthForms();
}

function clearAuthForms() {
    DOM.loginEmail.value = '';
    DOM.loginPass.value = '';
    DOM.regName.value = '';
    DOM.regEmail.value = '';
    DOM.regPhone.value = '';
    DOM.regPass.value = '';
}

function handleLogin(e) {
    e.preventDefault();
    const email = DOM.loginEmail.value.trim();
    const password = DOM.loginPass.value;

    if (!email || !password) {
        alert('Por favor completa todos los campos');
        return;
    }

    const user = findUserByEmail(email);
    if (!user) {
        alert('No existe una cuenta con este correo');
        return;
    }

    if (user.password !== password) {
        alert('Contraseña incorrecta');
        return;
    }

    currentUser = user;
    saveCurrentUser();
    closeAuthModal();
    updateNavUI();
    showRewards();
}

function handleRegister(e) {
    e.preventDefault();
    const name = DOM.regName.value.trim();
    const email = DOM.regEmail.value.trim();
    const phone = DOM.regPhone.value.trim();
    const password = DOM.regPass.value;

    if (!name || !email || !phone || !password) {
        alert('Por favor completa todos los campos');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    if (findUserByEmail(email)) {
        alert('Ya existe una cuenta con este correo');
        return;
    }

    const user = createUser(name, email, phone, password);
    const users = getUsers();
    users[email] = user;
    saveUsers(users);

    currentUser = user;
    saveCurrentUser();
    closeAuthModal();
    updateNavUI();
    showRewards();
}

function switchAuthView(view) {
    if (view === 'register') {
        DOM.loginForm.style.display = 'none';
        DOM.registerForm.style.display = 'block';
    } else {
        DOM.loginForm.style.display = 'block';
        DOM.registerForm.style.display = 'none';
    }
}

// =====================================================
// NAVIGATION
// =====================================================
function showHome() {
    if (DOM.mainContent) DOM.mainContent.style.display = 'block';
    if (DOM.userRewards) DOM.userRewards.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToMenu() {
    showHome();
    setTimeout(() => {
        if (DOM.menuSection) DOM.menuSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function showRewards() {
    if (!currentUser) {
        openAuthModal('login');
        return;
    }

    if (DOM.mainContent) DOM.mainContent.style.display = 'none';
    if (DOM.userRewards) DOM.userRewards.style.display = 'flex';
    updateRewardsUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateRewardsUI() {
    if (!currentUser) return;

    // Update name
    DOM.userNameDisplay.textContent = currentUser.name.split(' ')[0];
    DOM.userNameNav.textContent = currentUser.name.split(' ')[0];

    // Update member ID
    DOM.memberIdDisplay.textContent = `ID: ${currentUser.memberId}`;

    // Update member since
    const createdDate = new Date(currentUser.createdAt);
    DOM.memberSince.textContent = `Miembro desde ${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`;

    // Update level
    const level = getUserLevel(currentUser.visits);
    const levelInfo = REWARD_LEVELS[level];
    DOM.levelName.textContent = levelInfo.name;
    DOM.levelBadge.style.background = levelInfo.color;

    // Update visits
    DOM.currentVisits.textContent = currentUser.visits;

    // Update next level visits
    const nextLevel = getNextLevelInfo(currentUser.visits);
    if (nextLevel) {
        DOM.nextLevelVisits.textContent = nextLevel.visits + currentUser.visits;
        DOM.nextStepText.textContent = `Te faltan ${nextLevel.visits} visitas para ${nextLevel.name}`;
        DOM.nextReward.textContent = getNextRewardText(nextLevel.level);
    } else {
        DOM.nextLevelVisits.textContent = '∞';
        DOM.nextStepText.textContent = '¡Has alcanzado el nivel máximo!';
        DOM.nextReward.textContent = 'Acceso VIP permanente';
    }

    // Update progress bar
    const progress = nextLevel
        ? ((currentUser.visits - levelInfo.minVisits) / (nextLevel.visits)) * 100
        : 100;
    DOM.progressFill.style.width = `${Math.min(progress, 100)}%`;

    // Generate QR if not exists
    if (!qrGenerated) {
        generateUserQR();
        qrGenerated = true;
    }

    // Update benefits
    updateBenefitsUI(level);

    // Update visit history
    updateVisitHistoryUI();
}

function getNextRewardText(level) {
    switch (level) {
        case 'superFanatico': return 'Bebida gratis cada 10 visitas';
        case 'megaFan': return 'Producto premium mensual';
        case 'leyenda': return 'Acceso VIP a eventos';
        default: return '';
    }
}

function updateBenefitsUI(level) {
    const benefits = BENEFITS[level];
    DOM.benefitsGrid.innerHTML = benefits.map(b => `
        <div class="benefit-item">
            <div class="benefit-icon"><i class="fas ${b.icon}"></i></div>
            <div class="benefit-text">
                <h4>${b.title}</h4>
                <p>${b.desc}</p>
            </div>
        </div>
    `).join('');
}

function updateVisitHistoryUI() {
    if (!currentUser.visitHistory || currentUser.visitHistory.length === 0) {
        DOM.visitHistory.innerHTML = `
            <div class="history-empty">
                <i class="fas fa-receipt"></i>
                <p>Aún no tienes visitas registradas</p>
                <span>¡Haz tu primera compra!</span>
            </div>
        `;
        return;
    }

    const historyItems = currentUser.visitHistory.slice(-5).reverse().map(v => `
        <div class="history-item">
            <div class="history-date">
                <i class="fas fa-calendar"></i>
                ${new Date(v.date).toLocaleDateString()}
            </div>
            <div class="history-details">
                <span>${v.items.join(', ')}</span>
            </div>
            <div class="history-total">
                $${v.total.toFixed(2)} MXN
            </div>
        </div>
    `).join('');

    DOM.visitHistory.innerHTML = historyItems;
}

function generateUserQR() {
    DOM.qrcode.innerHTML = '';
    new QRCode(DOM.qrcode, {
        text: `CONGELATO_${currentUser.memberId.replace(/\s/g, '')}_${currentUser.id}`,
        width: 180,
        height: 180,
        colorDark: "#31513a",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// =====================================================
// NAV UI UPDATE
// =====================================================
function updateNavUI() {
    if (currentUser) {
        DOM.authButtons.style.display = 'none';
        DOM.userMenu.style.display = 'flex';
        DOM.userAvatarNav.textContent = currentUser.name.charAt(0).toUpperCase();
    } else {
        DOM.authButtons.style.display = 'flex';
        DOM.userMenu.style.display = 'none';
        qrGenerated = false;
    }
}

// =====================================================
// CART MANAGEMENT
// =====================================================
function addToCart(productId, customizations = {}) {
    const product = PRODUCTS[productId];
    if (!product) return;

    const cartItem = {
        id: Date.now(),
        productId,
        name: product.name,
        price: product.price,
        quantity: 1,
        customizations
    };

    cart.push(cartItem);
    updateCartUI();
    showCartSidebar();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateCartQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartUI();
        }
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartItems() {
    return cart.map(item => item.name).join(', ');
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    DOM.cartCount.textContent = count;

    if (cart.length === 0) {
        DOM.cartEmpty.style.display = 'flex';
        DOM.cartItems.innerHTML = '';
        DOM.btnCheckout.disabled = true;
    } else {
        DOM.cartEmpty.style.display = 'none';
        DOM.btnCheckout.disabled = false;

        DOM.cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${PRODUCTS[item.productId].image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)} MXN</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="cart-item-subtotal">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    DOM.subtotalAmount.textContent = `$${getCartTotal().toFixed(2)} MXN`;
}

function showCartSidebar() {
    DOM.cartSidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function hideCartSidebar() {
    DOM.cartSidebar.classList.remove('open');
    document.body.style.overflow = '';
}

function showCheckoutModal() {
    if (cart.length === 0) return;

    hideCartSidebar();
    DOM.checkoutModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    DOM.checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-info">
                <h4>${item.name}</h4>
                <span class="checkout-item-qty">x${item.quantity}</span>
            </div>
            <div class="checkout-item-price">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    `).join('');

    const total = getCartTotal();
    DOM.checkoutSubtotal.textContent = `$${total.toFixed(2)} MXN`;
    DOM.checkoutTotal.textContent = `$${total.toFixed(2)} MXN`;
}

function hideCheckoutModal() {
    DOM.checkoutModal.style.display = 'none';
    document.body.style.overflow = '';
}

function processPayment() {
    if (!currentUser) {
        alert('Por favor inicia sesión para registrar tu visita');
        hideCheckoutModal();
        openAuthModal('login');
        return;
    }

    const total = getCartTotal();
    const visitRecord = {
        date: new Date().toISOString(),
        items: cart.map(item => `${item.name} x${item.quantity}`),
        total,
        pointsEarned: Math.floor(total)
    };

    // Update user visits and points
    currentUser.visits += 1;
    currentUser.points += Math.floor(total);
    currentUser.visitHistory = currentUser.visitHistory || [];
    currentUser.visitHistory.push(visitRecord);

    saveCurrentUser();

    // Clear cart
    clearCart();

    // Hide checkout modal
    hideCheckoutModal();

    // Show success modal
    showSuccessModal(visitRecord);
}

function showSuccessModal(visitRecord) {
    DOM.successMessage.textContent = `Total: $${visitRecord.total.toFixed(2)} MXN | +${visitRecord.pointsEarned} puntos`;
    DOM.visitNumber.textContent = currentUser.visits;
    DOM.successModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideSuccessModal() {
    DOM.successModal.style.display = 'none';
    document.body.style.overflow = '';
    updateRewardsUI();
}

// =====================================================
// PRODUCT MODAL
// =====================================================
function showProductModal(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;

    DOM.productDetail.innerHTML = `
        <div class="product-modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-modal-content">
            <h2>${product.name}</h2>
            <p class="product-modal-desc">${product.desc}</p>
            <p class="product-modal-price">$${product.price} MXN</p>
            <div class="product-modal-options">
                <div class="option-group">
                    <label><i class="fas fa-ruler"></i> Tamaño</label>
                    <div class="option-buttons">
                        <button class="option-btn selected" data-size="regular">Regular</button>
                        <button class="option-btn" data-size="large">Grande (+$15)</button>
                    </div>
                </div>
                <div class="option-group">
                    <label><i class="fas fa-cookie"></i> Toppings</label>
                    <div class="option-checkboxes">
                        <label class="checkbox-label">
                            <input type="checkbox" class="topping-cb" data-topping="chocolate" data-price="10">
                            <span>Chocolate (+$10)</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" class="topping-cb" data-topping="nuts" data-price="12">
                            <span>Nueces (+$12)</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" class="topping-cb" data-topping="cream" data-price="8">
                            <span>Crema extra (+$8)</span>
                        </label>
                    </div>
                </div>
            </div>
            <button class="btn-add-cart" id="btnAddToCartModal">
                <i class="fas fa-cart-plus"></i> Agregar al Carrito
            </button>
        </div>
    `;

    // Add event listeners for options
    const optionBtns = DOM.productDetail.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            optionBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Add to cart button
    const btnAddToCartModal = document.getElementById('btnAddToCartModal');
    btnAddToCartModal.addEventListener('click', () => {
        const selectedSize = DOM.productDetail.querySelector('.option-btn.selected');
        const selectedSizePrice = selectedSize ? (selectedSize.dataset.size === 'large' ? 15 : 0) : 0;

        const toppings = [];
        let toppingsPrice = 0;
        DOM.productDetail.querySelectorAll('.topping-cb:checked').forEach(cb => {
            toppings.push(cb.dataset.topping);
            toppingsPrice += parseInt(cb.dataset.price);
        });

        const finalPrice = product.price + selectedSizePrice + toppingsPrice;
        const cartItem = {
            id: Date.now(),
            productId: product.id,
            name: product.name,
            price: finalPrice,
            quantity: 1,
            customizations: {
                size: selectedSize ? selectedSize.dataset.size : 'regular',
                toppings
            }
        };

        cart.push(cartItem);
        updateCartUI();
        hideProductModal();
        showCartSidebar();
    });

    DOM.productModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideProductModal() {
    DOM.productModal.style.display = 'none';
    document.body.style.overflow = '';
}

// =====================================================
// MENU FILTERS
// =====================================================
function initMenuFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            const categories = document.querySelectorAll('.menu-category');

            categories.forEach(cat => {
                if (category === 'all') {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = cat.dataset.category === category ? 'block' : 'none';
                }
            });
        });
    });
}

// =====================================================
// EVENT LISTENERS
// =====================================================
function initEventListeners() {
    // Check if mainContent exists (index.html page)
    const mainContent = document.getElementById('mainContent');
    const userRewards = document.getElementById('userRewards');

    if (mainContent && userRewards) {
        // Navigation - only on main page
        DOM.btnLogo.addEventListener('click', showHome);
        DOM.btnMenu.addEventListener('click', (e) => { e.preventDefault(); scrollToMenu(); });
        DOM.btnRewards.addEventListener('click', (e) => { e.preventDefault(); showRewards(); });
        DOM.exploreBtn.addEventListener('click', scrollToMenu);
        DOM.heroRewardsBtn.addEventListener('click', (e) => { e.preventDefault(); showRewards(); });
        DOM.findStore.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.google.com/maps/search/cafeterias+cerca+de+mi', '_blank');
        });
        DOM.btnLocator.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.google.com/maps/search/congelao+mx', '_blank');
        });
        DOM.btnBackHome.addEventListener('click', showHome);

        // Menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const productId = parseInt(item.dataset.productId);
                showProductModal(productId);
            });
        });
    }

    // Auth buttons
    DOM.btnLoginNav.addEventListener('click', () => openAuthModal('login'));
    DOM.btnJoinNav.addEventListener('click', () => openAuthModal('register'));
    DOM.btnLogoutNav.addEventListener('click', logout);
    DOM.btnLogout.addEventListener('click', logout);
    DOM.btnMyProfile.addEventListener('click', (e) => { e.preventDefault(); showRewards(); });
    DOM.btnMyRewards.addEventListener('click', (e) => { e.preventDefault(); showRewards(); });
    DOM.closeAuth.addEventListener('click', closeAuthModal);

    // Auth forms
    DOM.btnSubmitLogin.addEventListener('click', handleLogin);
    DOM.btnSubmitRegister.addEventListener('click', handleRegister);
    DOM.toRegister.addEventListener('click', (e) => { e.preventDefault(); switchAuthView('register'); });
    DOM.toLogin.addEventListener('click', (e) => { e.preventDefault(); switchAuthView('login'); });

    // Cart
    DOM.cartBtn.addEventListener('click', showCartSidebar);
    DOM.cartClose.addEventListener('click', hideCartSidebar);
    DOM.btnCheckout.addEventListener('click', showCheckoutModal);

    // Checkout
    DOM.closeCheckout.addEventListener('click', hideCheckoutModal);
    DOM.btnPay.addEventListener('click', processPayment);
    DOM.btnCancelCheckout.addEventListener('click', hideCheckoutModal);

    // Product Modal
    DOM.closeProduct.addEventListener('click', hideProductModal);

    // Success Modal
    DOM.btnCloseSuccess.addEventListener('click', hideSuccessModal);

    // Wallet button
    DOM.btnAddWallet.addEventListener('click', () => {
        alert('Para agregar a tu wallet, guarda una captura del código QR');
    });

    // Menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const productId = parseInt(item.dataset.productId);
            showProductModal(productId);
        });
    });

    // Close modals on backdrop click
    DOM.authModal.addEventListener('click', (e) => {
        if (e.target === DOM.authModal) closeAuthModal();
    });
    DOM.checkoutModal.addEventListener('click', (e) => {
        if (e.target === DOM.checkoutModal) hideCheckoutModal();
    });
    DOM.productModal.addEventListener('click', (e) => {
        if (e.target === DOM.productModal) hideProductModal();
    });
    DOM.successModal.addEventListener('click', (e) => {
        if (e.target === DOM.successModal) hideSuccessModal();
    });

    // Cart sidebar close on backdrop click
    DOM.cartSidebar.addEventListener('click', (e) => {
        if (e.target === DOM.cartSidebar) hideCartSidebar();
    });
}

// =====================================================
// INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    // Check if we have the required elements for main app
    const hasMainElements = document.getElementById('mainContent') !== null;

    if (hasMainElements) {
        // Load user if exists
        loadCurrentUser();
        updateNavUI();

        // Initialize menu filters
        initMenuFilters();

        // Initialize event listeners
        initEventListeners();

        // Update cart UI
        updateCartUI();
    }
});