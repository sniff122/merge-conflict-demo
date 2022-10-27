favFood = [
    "Nuts",
    "Peas",
    "Omelette",
    "pepperoni pizza",
    "Beef Burger",
"chocolate cake",
    "Korean food",
    "Fish and chips",
    "Just chips",
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

