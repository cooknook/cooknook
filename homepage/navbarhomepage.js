document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector(".navbar");
    const allLi = document.querySelectorAll("li");

    allLi.forEach((li, index) => {
        li.addEventListener("click", (e) => {
            e.preventDefault(); // preventing from submitting
            navBar.querySelector(".active").classList.remove("active");
            li.classList.add("active");

            const indicator = document.querySelector(".indicator");
            indicator.style.transform = `translateX(calc(${index} * 80px))`;
        });

        li.addEventListener("mouseover", (e) => {
            const indicator = document.querySelector(".indicator");
            indicator.style.transform = `translateX(calc(${index} * 80px))`;

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
