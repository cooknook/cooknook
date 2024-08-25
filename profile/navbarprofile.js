document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector(".navbar");
    const allLi = document.querySelectorAll("li");
    const totalIcons = allLi.length;
    const middleIndex = 2; // explicitly set the starting index to the third icon (0-based index, so 2 is the third icon)

    allLi.forEach((li, index) => {
        li.addEventListener("click", (e) => {
            e.preventDefault(); // preventing form submission
            navBar.querySelector(".active").classList.remove("active");
            li.classList.add("active");

            const indicator = document.querySelector(".indicator");
            const offset = index - middleIndex; // calculate offset based on the starting index (third icon)
            indicator.style.transform = `translateX(calc(${offset} * 80px))`;
        });

        li.addEventListener("mouseover", (e) => {
            const indicator = document.querySelector(".indicator");
            const offset = index - middleIndex; // calculate offset based on the starting index (third icon)
            indicator.style.transform = `translateX(calc(${offset} * 80px))`;

            // temporarily add active class on hover
            navBar.querySelector(".active").classList.remove("active");
            li.classList.add("active-hover");
        });

        li.addEventListener("mouseout", (e) => {
            // remove hover class when the mouse leaves the item
            li.classList.remove("active-hover");
            navBar.querySelector(".active").classList.add("active");
        });
    });
});