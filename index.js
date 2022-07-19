favFood = [
    "Lasagna",
    "Beef Pho", 
    "Apple Pie",
    "Chicken Tikka Madras",
    "Fish"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

