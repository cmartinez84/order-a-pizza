function Pizza (size, toppings, crust){
  this.size = size;
  this.toppings = toppings;
  this.crust = curst;
}
function PriceConstructor (modification, price){
  this.modification = modification;
  this.price = price;
}

var orderForm = {
  sizeArray: [],
  toppingsArray: [],
  crustOptions: []
}
