import { getOrders, addNewOrder } from "./orders.js";

document.getElementById("app").innerHTML = `
<h1>Alex's Sub Shop</h1>
<div>
  <h3>Please make your sub selection:</h3>
  <div class="subForm">
    <div class="subBread">
      <p>Pick your bread (can choose only 1)</p>

      <label for="whiteBread">White Bread</label>
      <input id="whiteBread" name="bread" type="radio" value="white" />

      <label for="wheatBread">Wheat Bread</label>
      <input id="wheatBread" name="bread" type="radio" value="wheatBread" />

      <label for="italianBread">Italian Bread</label>
      <input id="italianBread" name="bread" type="radio" value="italianBread" />

      </div>

      <div class="protein">
      <p>Pick your Protein (can choose only 1)</p>

      <label for="ham">Ham</label>
      <input id="protein" name="protein" type="radio" value="ham" />

      <label for="turkey">Turkey</label>
      <input id="turkey" name="protein" type="radio" value="Turkey" />

      <label for="chicken">Chicken</label>
      <input id="chicken" name="protein" type="radio" value="chicken" />

      </div>


      <div class="toppings">
        <p>Pick your Toppings (Choose as many as you like)</p>
        <ul>
          <li>
            <input id="lettuce" name="toppins" type="checkbox" value="lettuce" />
            <label for="lettuce">Lettuce</label>
          </li>
          <li>
            <input id="tomato" name="toppings" type="checkbox" value="Tomato" />
            <label for="Tomato">Tomato</label>
          </li>
          <li>
            <input id="Black Olives" name="toppings" type="checkbox" value="Black Olives" />
            <label for="Black Olives">Black Olives</label>
          </li>
          <li>
            <input id="Green Peppers" name="toppings" type="checkbox" value="Green Peppers" />
            <label for="Green Peppers">Green Peppers</label>
          </li>
          <li>
            <input id="Onions" name="toppings" type="checkbox" value="Onions" />
            <label for="Onions">Onions</label>
          </li>
        </ul>
    </div>

    <div>
      <button id="submitButton">Order Sub</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

const displayOrders = () => {
  const orders = getOrders();
  // Add logic here to put the orders on the DOM
  let html = "";
  for (let order of orders) {
    html += `<div>
    <h3>Order #${order.id}</h3>
      <p>Bread: ${order.subBread}</p>
      <p>Protein: ${order.protein}</p>
      <p>Toppins: ${order.toppings.join(", ")}</p>
    </div>`;
  }
  document.getElementById("orders").innerHTML = html;
};

displayOrders();


document.addEventListener("click", (e) => {
  if (e.target.id === "submitOrder") {
    const crustInput = document.querySelector(
      "input[name=crust]:checked"
    )?.value;
    const toppingsElements = document.querySelectorAll(
      "input[name=toppings]:checked"
    );
    const toppingsArray = [];
    toppingsElements.forEach((toppingElement) => {
      console.log(toppingElement.value);
      toppingsArray.push(toppingElement.value);
    });
    const instructions = document.getElementById("specialInstructions")?.value;
    console.log(instructions);

    const newOrder = {
      crust: crustInput,
      toppings: toppingsArray,
      instructions: instructions
    }
    addNewOrder(newOrder)
  }
});

document.addEventListener("stateChanged", (e) => {
  displayOrders();
})

