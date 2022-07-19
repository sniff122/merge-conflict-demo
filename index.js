favFood = [
    "Lasagna",
    "Beef Pho",
    "Vegan Beef Pho",
    "Fried Chicken",
    "Apple Pie",
    "Chicken Tikka Madras",
    "Fish",
    "Lobster"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

