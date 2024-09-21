




// Toggle wallet visibility
document.addEventListener('DOMContentLoaded', function () {
    const walletBtn = document.querySelector('.wallet_btn');
    if (walletBtn) {
        walletBtn.addEventListener('click', function () {
            const walletDiv = document.querySelector('.wallet_div');
            walletDiv.classList.toggle('wallet_visible');
        });
    }

    // Load resources on page load
    loadResources();
});



// Toggle wallet visibility
document.addEventListener('DOMContentLoaded', function () {
    const walletBtn = document.querySelector('.wallet_btn');
    if (walletBtn) {
        walletBtn.addEventListener('click', function () {
            const walletDiv = document.querySelector('.wallet_div');
            walletDiv.classList.toggle('wallet_visible');
        });
    }

    // Load resources on page load
    loadResources();
});




// GATHERING RESOURCES
document.querySelector('.resource_top_left button').addEventListener('click', function () {

    const randomChance = Math.random();

    if (randomChance <= 0.25) {

        wallet.gold += 10;
        console.log("You got gold!");
    } else {

        wallet.metal += 10;
        console.log("You got metal!");
    }

    // Save updated resources to localStorage and update UI
    saveResources();
});



document.querySelector('.resource_top_right button').addEventListener('click', function () {
    wallet.wood += 10;
    saveResources();
})


loadResources();
