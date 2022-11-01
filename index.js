favFood = [

    "kebab",
    "lamb preferably",

    "pepperoni pizza",
    "yaki udon",
    "baked beans on toast",
    "hot dog",
    "spaghetti",
    "Steak & Chips",
    "Chicken Fajitas",
    "yaki udon",
    "tonkatsu ramen",
    "soup",
    "chocolate cake",
    "Burger",
    "cheese cake"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

