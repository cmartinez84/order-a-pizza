function Pizza (size, toppings, crust){
  this.size = size;
  this.toppings = toppings;
  this.crust = curst;
}
function OptionPrice (modification, price){
  this.modification = modification;
  this.price = price;
}

var orderForm = {
  sizeArray: [],
  toppingsArray: [],
  crustOptions: []
}
var sizes = [["personal pan pizza",1], ["small", 2],["medium", 3],["large", 4],["x-large", 5],["family size", 6]];
sizes.forEach(function(sizePair){
  var newPrice = new OptionPrice(sizePair[0], sizePair[1]);
  orderForm.sizeArray.push(newPrice);
  console.log(newPrice);

  });
