const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipes();
})

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=7651efbc&app_key=
d43c22673b6729fa74877547336ed239`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <div>
            <!-- star icon -->
            <i class='bx bx-star star-icon' onclick="toggleStar(this)"> <span class="tooltip-text">star this recipe!</span> </i> 
            <br>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <h3>${recipe.recipe.label}</h3>
            <ul>
                ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <a href="${recipe.recipe.url}" target="_blank"> VIEW RECIPE </a>
        </div> 
        `;
    });
    resultsList.innerHTML = html;

    //add event listeners to star icons
    document.querySelectorAll('.star-icon').forEach(star => {
        star.addEventListener('click', async function () {
            const recipe = JSON.parse(this.getAttribute('data-recipe'));
            this.classList.toggle('starred');
            if (this.classList.contains('starred')) {
                await saveStarredRecipe(recipe);
            } else {
                await removeStarredRecipe(recipe);
            }
        });
    });
}

//function to save a starred recipe
async function saveStarredRecipe(recipe) {
    const response = await fetch('/save-recipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });
    if (!response.ok) {
        console.error('Failed to save recipe');
    }
}

//function to remove a starred recipe
async function removeStarredRecipe(recipe) {
    const response = await fetch('/remove-recipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });
    if (!response.ok) {
        console.error('Failed to remove recipe');
    }
}