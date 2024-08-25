function goRecipes() 
{
  window.location.href = "/recipes/recipes.html";
  location.replace("/recipes/recipes.html");
}

function goProfile()
{
  window.location.href = "/profile/profile.html";
  location.replace("/profile/profile.html");
}

function goHomepage() 
{
  window.location.href = "/homepage/homepage.html";
  location.replace("/homepage/homepage.html");
}

function toggleStar(element) {
    //toggle the star fill and color
    element.classList.toggle('bxs-star');
    element.classList.toggle('bx-star');
    element.classList.toggle('starred');

    //update tooltip text based on whether the star is filled or not
    const tooltipText = element.querySelector('.tooltip-text');
      if (element.classList.contains('bxs-star')) {
          tooltipText.textContent = 'unstar this recipe!';
      } 
      else {
          tooltipText.textContent = 'star this recipe!';
      }
}


