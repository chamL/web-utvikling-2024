

// ARRAY FOR THE CARDS HERE NAMED TROOPS
document.addEventListener('DOMContentLoaded', function () {
    const troops = [
        {
            name: 'Warrior 1',
            image: './images/warrior-1.jpg',
            rating: 7,
            price: 100,
            description: 'A young swordsWoman skilled in offensive combat, armed with a short axe and round shield.'
        },
        {
            name: 'Warrior 2',
            image: './images/warrior-2.jpg',
            rating: 6,
            price: 20,
            description: 'A fearless berserker wielding a two-handed sword.'
        },
        {
            name: 'Warrior 3',
            image: './images/warrior-3.jpg',
            rating: 7,
            price: 80,
            description: 'Warrior 5 carries a massive battle axe capable of cleaving through enemy defenses'
        },
        {
            name: 'Warrior 4',
            image: './images/warrior-4.jpg',
            rating: 8,
            price: 60,
            description: 'A stealthy assassin who wields a single sword.'
        },
        {
            name: 'Warrior 5',
            image: './images/warrior-5.jpg',
            rating: 9,
            price: 70,
            description: 'A young swordsman skilled in defensive combat, armed with a short axe and round shield.'
        },
        {
            name: 'Elephant',
            image: './images/elephant.png',
            rating: 9,
            price: 1000,
            description: 'This war elephant is a symbol of brute strength and power, tusks sharpened for combat, it charges through enemy formations. '
        },
        {
            name: 'Horse',
            image: './images/horse.png',
            rating: 8,
            price: 400,
            description: 'A warhorse bred for both speed and stamina, this horse is trained for battlefield maneuvering.'
        },
        {
            name: 'Cannon',
            image: './images/cannon.png',
            rating: 9,
            price: 200,
            description: 'The cannon is a siege weapon capable of launching devastating artillery.'
        },
        {
            name: 'Catapult',
            image: './images/catapult.png',
            rating: 8,
            price: 400,
            description: 'The cannon is a siege weapon capable of launching devastating artillery.'
        }
    ];


    const cardsContainer = document.getElementById('cards_container');
    const warriorsContainer = document.querySelector('.warrior_home');
    const animalsMachinesContainer = document.querySelector('.animal_home');


    // CREATING THE DIV WITH THE TROOP ARRAY AS A PARAMETER
    function createCard(troop) {
        const cardHTML = `
            <div class="card">
                <div class="topCardBackground">
                    <img class="card_img" src="${troop.image}" alt="${troop.name}">
                </div>
                <div class="underCard">
                    <div class="card_info">
                        <p class="card_info_p">${troop.description}</p>
                        <div class="card_info_numbers">
                            <p class="card_rating"><span>Rating</span> <br> (${troop.rating}/10)</p>
                            <p class="card_price"><span>Price</span> <br> ${troop.price}$</p>
                        </div>
                        <button class="buy_btn">Buy</button>
                    </div>
                    <button class="card_arrow">&#8964;</button>
                </div>
            </div>
        `;
        cardsContainer.insertAdjacentHTML('beforeend', cardHTML); // INSERTING HTML HERE 
    }

    //FUNCTION FOR BUYING THE TROOPS 

    function buyTroop(troop) {
        if (wallet.gold >= troop.price) {
            wallet.gold -= troop.price;

            // Load existing purchased troops from localStorage
            let purchasedTroops = JSON.parse(localStorage.getItem('purchasedTroops')) || [];

            // Add the new troop to the purchased troops array
            purchasedTroops.push(troop);

            // Save updated purchased troops back to localStorage
            localStorage.setItem('purchasedTroops', JSON.stringify(purchasedTroops));

            console.log(`You bought ${troop.name} for ${troop.price}$`);
            saveResources();
            updateWallet();
        } else {
            console.log("Not enough money");
        }
    }


    troops.forEach(troop => {
        createCard(troop);
    });



    document.querySelectorAll('.buy_btn').forEach((btn, index) => {
        btn.addEventListener('click', function () {
            buyTroop(troops[index]);
        });
    });




    troops.forEach(troop => createCard(troop));
});
const cardsContainer = document.getElementById('cards_container');



// CODE FOR THE ANIMATIONS HERE 
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card_arrow').forEach(button => {
        button.addEventListener('click', function () {
            const underCard = this.closest('.card').querySelector('.underCard');
            const arrowButton = this;

            underCard.classList.toggle('slide-down');

            arrowButton.classList.toggle('rotated');
        });
    });
});











