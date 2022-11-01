favFood = [
    "pepperoni pizza",
    "yaki udon",
    "Steak & Chips",
    "Chicken Fajitas",
    "yaki udon",
    "tonkatsu ramen",
    "soup",
    "Burger"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

