favFood = [
    "Lasagna",
    "Beef Pho", 
    "Fried Chicken",
    "Chicken Tikka Madras",
    "Fish",
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

