document.addEventListener('DOMContentLoaded', () => {

    // --- Data for Dynamic Content ---
    const modules = [
        { title: 'Intelligent First Aid Companion', description: 'AI-powered emergency guidance.', icon: 'fa-first-aid', section: 'first-aid', colorClass: 'first-aid' },
        { title: 'Agro E-Market', description: 'Direct from farmers to you.', icon: 'fa-store', section: 'agro-market', colorClass: 'agro-market' },
        { title: 'Inclusive Knowledge Platform', description: 'Health and agricultural info.', icon: 'fa-book-open', section: 'knowledge', colorClass: 'knowledge' },
        { title: 'Critical Health Data Locker', description: 'Secure your vital health data.', icon: 'fa-lock', section: 'health-data', colorClass: 'health-data' }
    ];

    const products = [
        // Original 8
        { name: 'Fresh Apples', price: 120, unit: 'kg', image: 'apple.jpg' },
        { name: 'Ripe Tomatoes', price: 40, unit: 'kg', image: 'tomato.jpg' },
        { name: 'Potatoes', price: 30, unit: 'kg', image: 'potato.jpg' },
        { name: 'Onions', price: 45, unit: 'kg', image: 'onion.jpg' },
        { name: 'Carrots', price: 60, unit: 'kg', image: 'carrot.jpg' },
        { name: 'Bananas', price: 50, unit: 'dozen', image: 'banana.jpg' },
        { name: 'Mangoes', price: 150, unit: 'kg', image: 'mango.jpg' },
        { name: 'Spinach', price: 20, unit: 'bunch', image: 'spinach.jpg' },

        
        { name: 'Garlic', price: 30, unit: '100g', image: 'garlic.jpg' },
        { name: 'Ginger', price: 25, unit: '100g', image: 'ginger.jpg' },
        { name: 'Cauliflower', price: 40, unit: 'piece', image: 'cauliflower.jpg' },
        { name: 'Cabbage', price: 35, unit: 'piece', image: 'cabbage.jpg' },
        { name: 'Bell Peppers', price: 80, unit: 'kg', image: 'bell_pepper.jpg' },
        { name: 'Grapes', price: 100, unit: 'kg', image: 'grapes.jpg' },
        { name: 'Oranges', price: 90, unit: 'kg', image: 'orange.jpg' },
        { name: 'Lemons', price: 5, unit: 'piece', image: 'lemon.jpg' },
        { name: 'Cucumber', price: 40, unit: 'kg', image: 'cucumber.jpg' },
        { name: 'Brinjal ', price: 50, unit: 'kg', image: 'brinjal.jpg' },
        { name: 'Okra (Lady\'s Finger)', price: 55, unit: 'kg', image: 'okra.jpg' },
        { name: 'Pomegranate', price: 180, unit: 'kg', image: 'pomegranate.jpg' },
        { name: 'Watermelon', price: 60, unit: 'piece', image: 'watermelon.jpg' },
        { name: 'Guava', price: 70, unit: 'kg', image: 'guava.jpg' },
        { name: 'Green Peas', price: 120, unit: 'kg', image: 'peas.jpg' },
        { name: 'Coriander', price: 15, unit: 'bunch', image: 'coriander.jpg' },
        { name: 'Mint Leaves', price: 10, unit: 'bunch', image: 'mint.jpg' },
        { name: 'Green Chili', price: 15, unit: '100g', image: 'chili.jpg' },
        { name: 'Beetroot', price: 50, unit: 'kg', image: 'beetroot.jpg' },
        { name: 'Radish', price: 40, unit: 'kg', image: 'radish.jpg' },
        { name: 'Sweet Potato', price: 60, unit: 'kg', image: 'sweet_potato.jpg' },
        { name: 'Corn', price: 25, unit: 'piece', image: 'corn.jpg' },
        { name: 'Pineapple', price: 70, unit: 'piece', image: 'pineapple.jpg' },
        { name: 'Papaya', price: 50, unit: 'kg', image: 'papaya.jpg' },
        { name: 'Chickoo (Sapodilla)', price: 80, unit: 'kg', image: 'chickoo.jpg' },
        { name: 'Broccoli', price: 60, unit: 'piece', image: 'broccoli.jpg' },
        { name: 'Mushroom', price: 45, unit: 'packet', image: 'mushroom.jpg' },
        { name: 'Bottle Gourd', price: 40, unit: 'kg', image: 'bottle_gourd.jpg' },
        { name: 'Pumpkin', price: 30, unit: 'kg', image: 'pumpkin.jpg' },
        { name: 'Bitter Gourd', price: 60, unit: 'kg', image: 'bitter_gourd.jpg' },
        { name: 'Drumstick', price: 10, unit: 'piece', image: 'drumstick.jpg' },
        { name: 'Jackfruit', price: 100, unit: 'kg', image: 'jackfruit.jpg' },
        { name: 'Turnip', price: 50, unit: 'kg', image: 'turnip.jpg' },
        { name: 'Fenugreek (Methi)', price: 20, unit: 'bunch', image: 'fenugreek.jpg' },
        { name: 'Spring Onion', price: 25, unit: 'bunch', image: 'spring_onion.jpg' },
        { name: 'Coconut', price: 30, unit: 'piece', image: 'coconut.jpg' }
    ];

    const knowledgeArticles = [
        {
            title: 'Modern Crop Rotation',
            icon: 'fa-leaf text-success',
            summary: 'Learn how rotating crops can improve soil health, reduce pests, and increase yield.',
            content: `<h4>Why Rotate Crops?</h4><p>Crop rotation is the practice of planting different crops sequentially on the same plot of land to improve soil health, optimize nutrients in the soil, and combat pest and weed pressure.</p><h5>Key Benefits:</h5><ul><li><strong>Improved Soil Structure:</strong> Different crops have different root structures, which helps to improve soil aeration and water infiltration.</li><li><strong>Pest and Disease Control:</strong> Many pests and diseases are crop-specific. Rotating crops breaks their life cycle.</li><li><strong>Nutrient Management:</strong> Legumes like beans fix nitrogen in the soil, making it available for the next crop.</li></ul>`
        },
        {
            title: 'Recognizing Dehydration',
            icon: 'fa-hand-holding-medical text-danger',
            summary: 'This guide helps you recognize the signs of dehydration and provides prevention steps.',
            content: `<h4>Early Warning Signs of Dehydration:</h4><p>It's crucial to recognize the early symptoms before they become severe, especially when working outdoors in the heat.</p><ul><li>Feeling thirsty or having a dry mouth.</li><li>Urinating less frequently.</li><li>Dark-colored urine.</li><li>Feeling tired or dizzy.</li><li>Headache.</li></ul><h5>What to do:</h5><p>If you experience these symptoms, stop working, move to a cool area, and slowly drink water. Seek medical attention if symptoms worsen.</p>`
        },
        {
            title: 'Applying for Government Schemes',
            icon: 'fa-landmark text-info',
            summary: 'A simple guide to understanding and applying for agricultural government schemes.',
            content: `<h4>Finding the Right Scheme</h4><p>Government schemes are designed to support farmers with financial aid, subsidies, and technical assistance. The first step is to identify which schemes you are eligible for.</p><h5>Common Steps to Apply:</h5><ol><li>Visit the official agricultural portal of your state or central government.</li><li>Find the 'Schemes' or 'Farmer Welfare' section.</li><li>Read the eligibility criteria carefully for each scheme (e.g., land ownership, crop type).</li><li>Prepare necessary documents, which often include identity proof, land records, and a bank account details.</li><li>Fill out the online application form and upload the required documents.</li></ol><p>Always check for deadlines and keep a copy of your application for future reference.</p>`
        },
        {
            title: 'Financial Literacy for Farmers',
            icon: 'fa-rupee-sign text-warning',
            summary: 'Learn the basics of banking, loans, and digital payments to manage your finances effectively.',
            content: `<h4>Why is Financial Literacy Important?</h4><p>Understanding basic financial concepts can empower you to make better decisions, access credit, and protect your earnings.</p><h5>Key Areas to Focus On:</h5><ul><li><strong>Banking:</strong> Opening a bank account provides a safe place for your money and is often required for government schemes.</li><li><strong>Understanding Loans:</strong> Learn about different types of agricultural loans (e.g., Kisan Credit Card), interest rates, and repayment schedules before borrowing.</li><li><strong>Digital Payments (UPI):</strong> Using UPI apps on your smartphone allows for instant, secure transactions without needing to carry cash, which is useful for buying supplies or receiving payments.</li></ul>`
        }
    ];

    // --- Dynamic Content Generation ---
    const moduleGrid = document.getElementById('module-grid');
    if (moduleGrid) {
        moduleGrid.innerHTML = modules.map(module => `
            <div class="col-md-6 col-lg-3 d-flex">
                <div class="card module-card flex-fill ${module.colorClass}" data-section="${module.section}">
                    <div class="card-body text-center p-4">
                        <div class="module-icon"><i class="fas ${module.icon}"></i></div>
                        <h3>${module.title}</h3>
                        <p>${module.description}</p>
                    </div>
                </div>
            </div>`).join('');
    }

    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        productGrid.innerHTML = products.map(product => {
            const imageUrl = STATIC_URL_BASE + product.image;
            return `
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card product-card h-100">
                        <img src="${imageUrl}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text"><strong>Price:</strong> ₹${product.price} / ${product.unit}</p>
                            <div class="mt-auto d-grid gap-2">
                                <button class="btn btn-secondary add-to-cart-btn" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                                <button class="btn btn-success buy-now-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }

    const knowledgeGrid = document.getElementById('knowledge-grid');
    if (knowledgeGrid) {
        knowledgeGrid.innerHTML = knowledgeArticles.map((article, index) => `
            <div class="col-md-6 mb-4 d-flex">
                <div class="card h-100 w-100">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title"><i class="fas ${article.icon} me-2"></i>${article.title}</h5>
                        <p class="card-text">${article.summary}</p>
                        <button class="btn btn-primary mt-auto read-more-btn" data-article-id="${index}">Read More</button>
                    </div>
                </div>
            </div>`).join('');
    }

    // --- Core Navigation & UI Logic ---
    const sections = document.querySelectorAll('.app-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const actionButtons = document.querySelectorAll('[data-section]');

    function showSection(sectionId) {
        sections.forEach(section => section.classList.toggle('d-none', section.id !== `${sectionId}-section`));
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === sectionId));
        window.scrollTo(0, 0);
    }

    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (button.dataset.section) showSection(button.dataset.section);
        });
    });

    document.getElementById('getStartedBtn').addEventListener('click', () => {
        const firstModule = document.querySelector('.module-card');
        if (firstModule) firstModule.scrollIntoView({ behavior: 'smooth' });
    });

    // --- First Aid Chat Logic ---
    const chatContainer = document.getElementById('chat-container');
    const emergencyInput = document.getElementById('emergency-input');
    const sendEmergencyBtn = document.getElementById('send-emergency-btn');

    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.innerHTML = content;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    async function handleEmergencySubmit() {
        const userMessage = emergencyInput.value.trim();
        if (!userMessage) return;
        addMessage(userMessage, 'user');
        emergencyInput.value = '';
        addMessage('<i>AI is analyzing the situation...</i>', 'system');
        try {
            const response = await fetch('/api/first-aid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emergency: userMessage }),
            });
            if (!response.ok) throw new Error('Network response failed');
            const data = await response.json();
            chatContainer.removeChild(chatContainer.lastChild);
            addMessage(data.response, 'system');
        } catch (error) {
            chatContainer.removeChild(chatContainer.lastChild);
            addMessage('Sorry, an error occurred. Please try again.', 'system');
        }
    }

    if (sendEmergencyBtn) sendEmergencyBtn.addEventListener('click', handleEmergencySubmit);
    if (emergencyInput) emergencyInput.addEventListener('keypress', e => e.key === 'Enter' && handleEmergencySubmit());

    // --- Cart & Knowledge Modal Logic ---
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    const knowledgeModal = new bootstrap.Modal(document.getElementById('knowledgeModal'));
    
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price);
            cart.push({ name, price });
            updateCart();
        }
        if (e.target.classList.contains('buy-now-btn')) {
            alert('Ordered successfully!');
        }
        if (e.target.classList.contains('read-more-btn')) {
            const articleId = e.target.dataset.articleId;
            const article = knowledgeArticles[articleId];
            if (article) {
                document.getElementById('knowledgeModalLabel').innerHTML = `<i class="fas ${article.icon} me-2"></i>${article.title}`;
                document.getElementById('knowledgeModalBody').innerHTML = article.content;
                knowledgeModal.show();
            }
        }
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Checkout successful!');
            cart.length = 0;
            updateCart();
            cartModal.hide();
        } else {
            alert('Your cart is empty.');
        }
    });

    function updateCart() {
        cartCount.textContent = cart.length;
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            let total = 0;
            cartItemsContainer.innerHTML = `<ul class="list-group">${cart.map(item => {
                total += item.price;
                return `<li class="list-group-item d-flex justify-content-between"><span>${item.name}</span><span>₹${item.price.toFixed(2)}</span></li>`;
            }).join('')}<li class="list-group-item d-flex justify-content-between active"><strong>Total</strong><strong>₹${total.toFixed(2)}</strong></li></ul>`;
        }
    }

    // --- Health Data Form Logic ---
    const healthForm = document.getElementById('health-form');
    if (healthForm) {
        healthForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Health data saved securely! (This is a demo)');
            healthForm.reset();
        });
    }
});