/* =====================================================
   NUTRILIFE
   HOME.JS
===================================================== */


/* =====================================================
   FOOD DATABASE
===================================================== */

const foods = [

    {
        name: "Apple",
        emoji: "🍎",
        calories: 95,
        category: "Fruit",
        nutrition: {
            "Calories": "95 kcal",
            "Carbohydrates": "25 g",
            "Fiber": "4 g",
            "Vitamin C": "14% DV",
            "Sugar": "19 g",
            "Fat": "0.3 g"
        }
    },

    {
        name: "Banana",
        emoji: "🍌",
        calories: 105,
        category: "Fruit",
        nutrition: {
            "Calories": "105 kcal",
            "Carbohydrates": "27 g",
            "Fiber": "3 g",
            "Potassium": "12% DV",
            "Sugar": "14 g",
            "Fat": "0.4 g"
        }
    },

    {
        name: "Broccoli",
        emoji: "🥦",
        calories: 55,
        category: "Vegetable",
        nutrition: {
            "Calories": "55 kcal",
            "Protein": "3.7 g",
            "Fiber": "5 g",
            "Vitamin C": "135% DV",
            "Vitamin K": "116% DV",
            "Fat": "0.6 g"
        }
    },

    {
        name: "Chicken Breast",
        emoji: "🍗",
        calories: 165,
        category: "Protein",
        nutrition: {
            "Calories": "165 kcal",
            "Protein": "31 g",
            "Fat": "3.6 g",
            "Carbohydrates": "0 g",
            "Niacin": "69% DV",
            "Phosphorus": "22% DV"
        }
    },

    {
        name: "Salmon",
        emoji: "🐟",
        calories: 208,
        category: "Protein",
        nutrition: {
            "Calories": "208 kcal",
            "Protein": "28 g",
            "Fat": "10 g",
            "Omega 3": "2.5 g",
            "Vitamin D": "97% DV",
            "Vitamin B12": "136% DV"
        }
    },

    {
        name: "Brown Rice",
        emoji: "🍚",
        calories: 216,
        category: "Grain",
        nutrition: {
            "Calories": "216 kcal",
            "Carbohydrates": "45 g",
            "Fiber": "3.5 g",
            "Protein": "5 g",
            "Manganese": "88% DV",
            "Magnesium": "21% DV"
        }
    },

    {
        name: "Spinach",
        emoji: "🥬",
        calories: 23,
        category: "Vegetable",
        nutrition: {
            "Calories": "23 kcal",
            "Protein": "2.9 g",
            "Fiber": "2.2 g",
            "Iron": "15% DV",
            "Vitamin A": "188% DV",
            "Folate": "49% DV"
        }
    },

    {
        name: "Eggs",
        emoji: "🥚",
        calories: 78,
        category: "Protein",
        nutrition: {
            "Calories": "78 kcal",
            "Protein": "6 g",
            "Fat": "5 g",
            "Choline": "27% DV",
            "Selenium": "28% DV",
            "Vitamin B12": "23% DV"
        }
    },

    {
        name: "Avocado",
        emoji: "🥑",
        calories: 160,
        category: "Healthy Fat",
        nutrition: {
            "Calories": "160 kcal",
            "Fat": "15 g",
            "Fiber": "7 g",
            "Potassium": "14% DV",
            "Folate": "21% DV",
            "Vitamin K": "26% DV"
        }
    },

    {
        name: "Greek Yogurt",
        emoji: "🥛",
        calories: 100,
        category: "Dairy",
        nutrition: {
            "Calories": "100 kcal",
            "Protein": "17 g",
            "Calcium": "18% DV",
            "Fat": "0.7 g",
            "Probiotics": "Live cultures",
            "Vitamin B12": "18% DV"
        }
    },

    {
        name: "Oats",
        emoji: "🌾",
        calories: 150,
        category: "Grain",
        nutrition: {
            "Calories": "150 kcal",
            "Carbohydrates": "27 g",
            "Fiber": "4 g",
            "Protein": "5 g",
            "Iron": "10% DV",
            "Magnesium": "14% DV"
        }
    },

    {
        name: "Almonds",
        emoji: "🥜",
        calories: 164,
        category: "Healthy Fat",
        nutrition: {
            "Calories": "164 kcal",
            "Fat": "14 g",
            "Protein": "6 g",
            "Fiber": "3.5 g",
            "Vitamin E": "37% DV",
            "Magnesium": "19% DV"
        }
    }

];


/* =====================================================
   MEAL DATA
===================================================== */

const mealSlots = [

    {
        id: "breakfast",
        name: "Breakfast",
        emoji: "🌅",
        foods: [
            "Oats",
            "Eggs",
            "Greek Yogurt"
        ]
    },

    {
        id: "lunch",
        name: "Lunch",
        emoji: "☀️",
        foods: [
            "Brown Rice",
            "Chicken Breast",
            "Salmon"
        ]
    },

    {
        id: "snack",
        name: "Snack",
        emoji: "🍎",
        foods: [
            "Apple",
            "Banana",
            "Almonds"
        ]
    },

    {
        id: "dinner",
        name: "Dinner",
        emoji: "🌙",
        foods: [
            "Salmon",
            "Broccoli",
            "Spinach"
        ]
    }

];


let mealChoices = {};

let currentMeal = null;

let waterCount = 0;


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageName, button) {

    /* Hide all pages */

    document
        .querySelectorAll(".page")
        .forEach(function (page) {

            page.classList.remove("active");

        });


    /* Remove active navigation */

    document
        .querySelectorAll(".nav-btn")
        .forEach(function (btn) {

            btn.classList.remove("active");

        });


    /* Show selected page */

    document
        .getElementById("page-" + pageName)
        .classList.add("active");


    /* Activate navigation button */

    if (button) {

        button.classList.add("active");

    }


    /* Load page data */

    if (pageName === "foods") {

        renderFoods();

    }


    if (pageName === "planner") {

        renderMealPlanner();

    }


    if (pageName === "tips") {

        renderTips();

    }


    if (pageName === "tools") {

        renderWater();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   QUICK ACCESS
===================================================== */

function goToPage(pageName) {

    const buttons =
        document.querySelectorAll(".nav-btn");


    const pageIndex = {

        home: 0,
        foods: 1,
        tools: 2,
        planner: 3,
        tips: 4

    };


    showPage(
        pageName,
        buttons[pageIndex[pageName]]
    );

}


/* =====================================================
   FOOD DATABASE
===================================================== */

function renderFoods(searchText = "") {

    const grid =
        document.getElementById("foodGrid");


    const search =
        searchText.toLowerCase().trim();


    const filtered =
        foods.filter(function (food) {

            return (
                food.name
                    .toLowerCase()
                    .includes(search)

                ||

                food.category
                    .toLowerCase()
                    .includes(search)
            );

        });


    grid.innerHTML = "";


    if (filtered.length === 0) {

        grid.innerHTML = `
            <p style="color:#718078">
                No food found.
            </p>
        `;

        return;

    }


    filtered.forEach(function (food) {

        const index =
            foods.indexOf(food);


        grid.innerHTML += `

            <div
                class="food-card"
                onclick="showNutrition(${index})">

                <div class="food-emoji">
                    ${food.emoji}
                </div>

                <div class="food-info">

                    <div class="food-name">
                        ${food.name}
                    </div>

                    <div class="food-cal">
                        ${food.calories} kcal ·
                        ${food.category}
                    </div>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   FOOD SEARCH
===================================================== */

function filterFoods() {

    const value =
        document
            .getElementById("foodSearch")
            .value;


    renderFoods(value);


    document
        .getElementById("nutritionPanel")
        .classList.remove("show");

}


/* =====================================================
   FOOD NUTRITION
===================================================== */

function showNutrition(index) {

    const food =
        foods[index];


    const panel =
        document.getElementById("nutritionPanel");


    let rows = "";


    Object.entries(food.nutrition)
        .forEach(function ([key, value]) {

            rows += `

                <div class="nutrition-row">

                    <span>
                        ${key}
                    </span>

                    <strong>
                        ${value}
                    </strong>

                </div>

            `;

        });


    panel.innerHTML = `

        <div class="nutrition-title">

            <span>
                ${food.emoji}
            </span>

            <div>

                <h3>
                    ${food.name}
                </h3>

                <small>
                    ${food.category}
                </small>

            </div>

        </div>

        ${rows}

    `;


    panel.classList.add("show");


    panel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* =====================================================
   BMI CALCULATOR
===================================================== */

function calculateBMI() {

    const weight =
        parseFloat(
            document.getElementById("weight").value
        );


    const height =
        parseFloat(
            document.getElementById("height").value
        );


    if (
        !weight ||
        !height ||
        weight <= 0 ||
        height <= 0
    ) {

        alert(
            "Please enter valid weight and height."
        );

        return;

    }


    const heightMeter =
        height / 100;


    const bmi =
        weight /
        (heightMeter * heightMeter);


    let category;


    if (bmi < 18.5) {

        category = "Underweight";

    }

    else if (bmi < 25) {

        category = "Normal Weight";

    }

    else if (bmi < 30) {

        category = "Overweight";

    }

    else {

        category = "Obesity";

    }


    document
        .getElementById("bmiNumber")
        .textContent =
        bmi.toFixed(1);


    document
        .getElementById("bmiCategory")
        .textContent =
        category;


    document
        .getElementById("bmiResult")
        .style.display =
        "block";


    localStorage.setItem(
        "nutrilifeBMI",
        bmi.toFixed(1)
    );

}


/* =====================================================
   CALORIE CALCULATOR
===================================================== */

function calculateCalories() {

    const age =
        parseFloat(
            document.getElementById("age").value
        );


    const gender =
        document
            .getElementById("gender")
            .value;


    const weight =
        parseFloat(
            document.getElementById("calWeight").value
        );


    const height =
        parseFloat(
            document.getElementById("calHeight").value
        );


    const activity =
        parseFloat(
            document.getElementById("activity").value
        );


    if (
        !age ||
        !weight ||
        !height
    ) {

        alert(
            "Please fill in all information."
        );

        return;

    }


    let bmr;


    if (gender === "male") {

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) +
            5;

    }

    else {

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) -
            161;

    }


    const maintenance =
        Math.round(
            bmr * activity
        );


    const lose =
        maintenance - 500;


    const gain =
        maintenance + 300;


    document
        .getElementById("loseCalories")
        .textContent =
        lose;


    document
        .getElementById("mainCalories")
        .textContent =
        maintenance;


    document
        .getElementById("gainCalories")
        .textContent =
        gain;


    document
        .getElementById("calorieResult")
        .style.display =
        "grid";


    localStorage.setItem(
        "nutrilifeCalories",
        maintenance
    );

}


/* =====================================================
   WATER TRACKER
===================================================== */

function renderWater() {

    const container =
        document.getElementById("waterCups");


    container.innerHTML = "";


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const cup =
            document.createElement("span");


        cup.className =
            "water-cup";


        if (i < waterCount) {

            cup.classList.add("filled");

        }


        cup.textContent = "🥛";


        cup.onclick = function () {

            if (i < waterCount) {

                waterCount = i;

            }

            else {

                waterCount = i + 1;

            }


            renderWater();

        };


        container.appendChild(cup);

    }


    updateWaterMessage();

}


function updateWaterMessage() {

    const messages = [

        "",

        "Good start! Keep going.",

        "Quarter way there!",

        "3 glasses done!",

        "Halfway through your goal!",

        "More than halfway!",

        "Almost there!",

        "One more glass to go!",

        "🎉 Goal reached! Amazing work!"

    ];


    document
        .getElementById("waterMessage")
        .textContent =
        messages[waterCount];

}


function resetWater() {

    waterCount = 0;

    renderWater();

}


/* =====================================================
   MEAL PLANNER
===================================================== */

function renderMealPlanner() {

    const grid =
        document.getElementById("mealGrid");


    grid.innerHTML = "";


    mealSlots.forEach(function (slot) {

        const selected =
            mealChoices[slot.id];


        const food =
            selected
                ? foods.find(
                    f => f.name === selected
                  )
                : null;


        grid.innerHTML += `

            <div
                class="meal-card ${
                    food ? "filled" : ""
                }"
                onclick="openMealOptions('${slot.id}')">

                <div class="meal-time">
                    ${slot.name}
                </div>

                ${
                    food

                    ?

                    `

                    <div class="meal-emoji">
                        ${food.emoji}
                    </div>

                    <div class="meal-name">
                        ${food.name}
                    </div>

                    <div class="meal-calories">
                        ${food.calories} kcal
                    </div>

                    `

                    :

                    `

                    <div class="meal-emoji">
                        ${slot.emoji}
                    </div>

                    <div class="meal-name">
                        Tap to add
                    </div>

                    `

                }

            </div>

        `;

    });


    updateTotalCalories();

}


/* =====================================================
   MEAL OPTIONS
===================================================== */

function openMealOptions(slotId) {

    currentMeal =
        slotId;


    const slot =
        mealSlots.find(
            s => s.id === slotId
        );


    const options =
        document.getElementById(
            "mealFoodGrid"
        );


    options.innerHTML = "";


    slot.foods.forEach(function (foodName) {

        const food =
            foods.find(
                f => f.name === foodName
            );


        if (!food) return;


        options.innerHTML += `

            <div
                class="food-card"
                onclick="selectMeal(
                    '${slotId}',
                    '${food.name}'
                )">

                <div class="food-emoji">
                    ${food.emoji}
                </div>

                <div class="food-info">

                    <div class="food-name">
                        ${food.name}
                    </div>

                    <div class="food-cal">
                        ${food.calories} kcal
                    </div>

                </div>

            </div>

        `;

    });


    document
        .getElementById("mealOptions")
        .classList.add("show");

}


function selectMeal(
    slotId,
    foodName
) {

    mealChoices[slotId] =
        foodName;


    document
        .getElementById("mealOptions")
        .classList.remove("show");


    renderMealPlanner();

}


/* =====================================================
   TOTAL MEAL CALORIES
===================================================== */

function updateTotalCalories() {

    let total = 0;


    Object.values(mealChoices)
        .forEach(function (foodName) {

            const food =
                foods.find(
                    f => f.name === foodName
                );


            if (food) {

                total += food.calories;

            }

        });


    document
        .getElementById("totalCalories")
        .textContent =
        total + " kcal";

}


/* =====================================================
   HEALTH TIPS
===================================================== */

const tips = [

    {
        icon: "💧",
        title: "Drink enough water",
        text: "Keep yourself hydrated throughout the day."
    },

    {
        icon: "🥗",
        title: "Eat more vegetables",
        text: "Include a variety of vegetables in your meals."
    },

    {
        icon: "🍎",
        title: "Choose whole foods",
        text: "Prefer fresh fruits, vegetables and whole grains."
    },

    {
        icon: "🥩",
        title: "Include protein",
        text: "Include healthy protein sources in your meals."
    },

    {
        icon: "🌾",
        title: "Choose whole grains",
        text: "Whole grains provide useful fiber and nutrients."
    },

    {
        icon: "🧂",
        title: "Reduce excess salt",
        text: "Avoid consuming too much processed and salty food."
    },

    {
        icon: "🏃",
        title: "Stay active",
        text: "Regular physical activity supports overall health."
    },

    {
        icon: "😴",
        title: "Sleep well",
        text: "Maintain a consistent and healthy sleep schedule."
    },

    {
        icon: "🧘",
        title: "Manage stress",
        text: "Take time for relaxation and mental wellbeing."
    },

    {
        icon: "🍽️",
        title: "Practice mindful eating",
        text: "Eat slowly and pay attention to your hunger and fullness."
    }

];


function renderTips() {

    const grid =
        document.getElementById(
            "tipsGrid"
        );


    grid.innerHTML = "";


    tips.forEach(function (tip) {

        grid.innerHTML += `

            <div class="tip-card">

                <div class="tip-icon"
                    style="background:#e8f5ee">

                    ${tip.icon}

                </div>

                <div>

                    <h3>
                        ${tip.title}
                    </h3>

                    <p>
                        ${tip.text}
                    </p>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   INITIALIZE
===================================================== */

renderFoods();

renderWater();

renderMealPlanner();

renderTips();