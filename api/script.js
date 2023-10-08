fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => response.json())
    .then(data => {

        console.log('Fetched data:', data);

        const cardsContainer = document.getElementById('cards');

        for (let i = 0; i < 5 && i < data.length; i++) {
            const coffee = data[i];
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h1 class="title">${coffee.title}</h1>
                <img src="${coffee.image}" alt="${coffee.title}">
                <p class="description"><span class='bold'>Description: </span>${coffee.description}</p>
            `;
            cardsContainer.appendChild(card);
        }
    })
    .catch(error => console.error('Error fetching data:', error));


    // <p class="ingredients">Ingredients: ${coffee.ingredients}</p>