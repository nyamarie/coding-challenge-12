// Task 1: Business Dashboard – DOM Element Selection and Creation
const dashboard = document.getElementById("dashboard");
const dashboardAlt = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

dashboard.appendChild(revenueCard);
console.log("Task 1 - Created Revenue Metric Card");

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = Array.from(metricCards);

metricCardsArray.forEach(card => {
    card.innerText += " - Updated";
    card.style.backgroundColor = "#f4f4f4";
});

// Task 3: Dynamic Inventory Management – Adding and Removing Items
const inventoryList = document.getElementById("inventoryList");

function addProductItem(productName) {
    const productItem = document.createElement("li");
    productItem.setAttribute("class", "product-item");
    productItem.setAttribute("data-product", productName);
    productItem.textContent = productName;
    productItem.addEventListener("click", () => removeProductItem(productItem));
    inventoryList.appendChild(productItem);
}

function removeProductItem(productItem) {
    inventoryList.removeChild(productItem);
}

// Task 4: Business Customer Section – Handling Event Bubbling
const customerSection = document.getElementById("customerSection");
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked");
});

const customerCards = document.querySelectorAll(".customer-card");
customerCards.forEach(card => {
    card.addEventListener("click", (event) => {
        console.log("Customer card clicked");
        event.stopPropagation(); // Prevents bubbling to customerSection
    });
});