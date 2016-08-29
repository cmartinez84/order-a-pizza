function Pizza(pizzaSize, topping, crust){
 this.pizzaSize= pizzaSize;
 this.topping = [topping];
 this.crust = crust
}

Pizza.prototype.getPrice = function(){
  var pizzaPrice = this.pizzaSize.price +this.crust.price;
  this.topping.forEach(function(item){
    pizzaPrice += item.price;
  });
  return pizzaPrice;
}

function OptionPrice (name, price){
  this.name = name;
  this.price = price;
}
var customer = {
  order: []
}
var orderForm = {
  sizesArray: [],
  toppingsArray: [],
  crustsArray: [],
}

var sizes = [["personal pan pizza",9], ["small", 10],["medium", 11],["large", 12],["x-large", 15]];
var toppings = [["anchovies", 1.50],["genoa salami",1.5 ],["chorizo", 1],["bell peppers", 1],["tomatoes", 1],["olives",.50],["buffalo mozzerella", 2],["fresh basil", 1]];
var crusts = [["thin curst", 0],["regular curst", 0],["stuffed crust", 3],["double decker", 5 ], ["gluten-free", 5]];

sizes.forEach(function(sizePair){
  var newPrice = new OptionPrice(sizePair[0], sizePair[1]);
  orderForm.sizesArray.push(newPrice)
});
toppings.forEach(function(sizePair){
  var newPrice = new OptionPrice(sizePair[0], sizePair[1]);
  orderForm.toppingsArray.push(newPrice)
});
crusts.forEach(function(sizePair){
  var newPrice = new OptionPrice(sizePair[0], sizePair[1]);
  orderForm.crustsArray.push(newPrice)
});
/////////////////FRONT END///////////////////
$(function(){
  $("#newPizzaButton").click(function(){
    createNewPizza();
    $(this).fadeOut();
  });
  var createNewPizza = function(){
    var blankOption = new OptionPrice(" ", 0);
    var newPizza = new Pizza(blankOption, blankOption, blankOption);
    console.log(newPizza);
    $("#priceDisplay").show();
    orderForm.sizesArray.forEach(function(item){
      $("#sizesOptions").append('<button type="button" name="button">'+item.name+'</button>');
      $("button").last().click(function(){
        $("#sizesOptions>button").removeClass("clicked");
        $(this).toggleClass("clicked");
        newPizza.pizzaSize = item;
        $("#price").text(newPizza.getPrice());
      });
    });
    orderForm.crustsArray.forEach(function(item){
      $("#crustsOptions").append('<button type="button" name="button">'+item.name+'</button>');
      $("button").last().click(function(){
        $("#crustsOptions>button").removeClass("clicked");
        $(this).toggleClass("clicked");
        newPizza.crust = item
        $("#price").text(newPizza.getPrice());
      });
    });
    orderForm.toppingsArray.forEach(function(item){
      $("#toppingsOptions").append('<button type="button" name="button">'+item.name+'</button>');
      $("button").last().click(function(){
        if($(this).hasClass("clicked")){
            var opposite = new OptionPrice (item.name, item.price);
            opposite.name = false;
            opposite.price = (0-opposite.price);
            newPizza.topping.push(opposite);
            $("#price").text(newPizza.getPrice());
        }
        else{
          newPizza.topping.push(item);
          $("#price").text(newPizza.getPrice());
        }
        $(this).toggleClass("clicked");
        });
      });
    $("#savePizza").click(function(){
      customer.order.push(newPizza);
      console.log(newPizza);
      $(".optionsRow button").remove();
      $("#selections").append("<li> Pizza" + customer.order.length + ": $" + newPizza.getPrice());
      $(this).off();
      });
    };

    $("#makeAnotherPizza").click(function(){
      createNewPizza();
    });
});
