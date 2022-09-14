const orders = [
    {
      id: 1,
      subBread: "White Bread",
      protein: "Ham",
      toppings: ["tomato", "green pepper"],
    //   instructions: "extra cheese"
    },
    {
      id: 2,
      subBread: "Wheat",
      protein: "Turkey",
      toppings: ["Black Olives", "green pepper", "Onions"],

    }
  ]
  const getNewOrderId = () => {
    let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
    return highestOrderId + 1
  }
  export const getOrders = () => {
    // Add logic here to return a copy of your orders
    return orders.map(order => ({...order}))
  }
  export const addNewOrder = (order) => {
    console.log("new order", order)
    const newId = getNewOrderId()
    order.id = newId
    orders.push(order)
    console.log(orders)
    // // need to add logic
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }
  
  
  
  
  
  
  
  
  
  