const wallet = {
    gold: 0,
    wood: 0,
    metal: 0
};

// Get resources from localStorage
function loadResources() {
    const storedResources = JSON.parse(localStorage.getItem('resources'));
    if (storedResources) {
        wallet.gold = storedResources.gold || 0;
        wallet.wood = storedResources.wood || 0;
        wallet.metal = storedResources.metal || 0;
    }
    updateWallet();
}

// Save resources to localStorage
function saveResources() {
    localStorage.setItem('resources', JSON.stringify(wallet));
    updateWallet();
}

// Update wallet display across all elements with the same class
function updateWallet() {
    // Update all gold values
    document.querySelectorAll('.gold_value').forEach(el => {
        el.textContent = wallet.gold;
    });

    // Update all metal values
    document.querySelectorAll('.metal_value').forEach(el => {
        el.textContent = wallet.metal;
    });

    // Update all wood values
    document.querySelectorAll('.wood_value').forEach(el => {
        el.textContent = wallet.wood;
    });
}

// Load wallet data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    loadResources();
});

// Load purchased cards from localStorage
function loadPurchasedCards() {
    return JSON.parse(localStorage.getItem('purchasedCards')) || [];
}

// Save purchased cards to localStorage
function savePurchasedCards(purchasedCards) {
    localStorage.setItem('purchasedCards', JSON.stringify(purchasedCards));
}

// DOMContentLoaded event to ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Toggle wallet visibility
    const walletDiv = document.querySelector('.wallet_div');
    const walletBtn = document.querySelector('.wallet_btn');

    if (walletBtn) {
        walletBtn.addEventListener('click', function () {
            walletDiv.classList.toggle('wallet_visible');
        });
    }

    // Load resources on page load
    loadResources();

    // Resource gathering
    const metalButton = document.querySelector('.resource_top_left button');
    const woodButton = document.querySelector('.resource_top_right button');

    if (metalButton) {
        metalButton.addEventListener('click', function () {
            wallet.metal += 10;
            console.log("click metal");
            saveResources();
        });
    }

    if (woodButton) {
        woodButton.addEventListener('click', function () {
            wallet.wood += 10;
            saveResources();
        });
    }
});