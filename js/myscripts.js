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
  crustsArray: []
}
var sizes = [["personal pan pizza",1], ["small", 2],["medium", 3],["large", 4],["x-large", 5],["family size", 6]];
var toppings = [["anchovies", 1],["pepperoni", 1],["genoa salami",1.5 ],["chorizo", 1],["bell peppers", 1],["tomatoes", .75],["olives",.50],["buffalo mozzerella", 1.5],["fresh basil"], 1];
var crusts = [["thin curst", 1],["regular curst", 1],["stuffed crust", 2],["double decker", 3 ], ["gluten-free", 4]];

sizes.forEach(function(sizePair){
  var newPrice = new OptionPrice(sizePair[0], sizePair[1]);
  orderForm.sizeArray.push(newPrice)
});
toppings.forEach(function(sizePair){
  var newPrice = new OptionPrice(sizePair[0], sizePair[1]);
  orderForm.toppingsArray.push(newPrice)
});
crusts.forEach(function(sizePair){
  var newPrice = new OptionPrice(sizePair[0], sizePair[1]);
  orderForm.crustsArray.push(newPrice)
});
