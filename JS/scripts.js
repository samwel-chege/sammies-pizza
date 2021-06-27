
$(document).ready(function(){
    $("#image1").mouseover(function(){
        $("#img1").show();
    }).mouseout(function(){
        $("#img1").hide();
    });
    $("#image2").mouseover(function(){
        $("#img2").show();
    }).mouseout(function(){
        $("#img2").hide();
    });
    $("#image3").mouseover(function(){
        $("#img3").show();
    }).mouseout(function(){
        $("#img3").hide();
    });

});
$(document).ready(function() {
    $("#order-details").hide();
    $("#deliver").hide();
    // Business Logic
    var totalPriceArray = [];
    function Order(size, crust, toppings, amount) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.pizzaPrice = 0;
      this.amount = amount;
    }
    Order.prototype.pizzaCost = function() {
      if (this.size === "large") {
        this.pizzaPrice += 1200;
      } else if (this.size === "medium") {
        this.pizzaPrice += 1000;
      } else if (this.size === "small") {
        this.pizzaPrice += 800;
      }
      if (this.crust === "crispy") {
        this.pizzaPrice += 100;
      } else if (this.crust === "stuffed") {
        this.pizzaPrice += 120;
      } else if (this.crust === "gluten-free") {
        this.pizzaPrice += 150;
      }
      if (this.toppings === "cheese") {
        this.pizzaPrice += 80;
      } else if (this.toppings === "salami") {
        this.pizzaPrice += 100;
      } else if (this.toppings === "mushroom") {
        this.pizzaPrice += 120;
      } 
      
    };
    //Business logic
    function Address(address) {
      this.address = address;
      this.deliveryAddress = (address);
    }
    Order.prototype.finalCost = function() {
      var totalPrice = [];
      for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
        totalPrice += totalPriceArray[arrayElement];
      }
      return totalPrice;
    };
    $(".button.check").click(function() {
    });
    $("form#input-forms").submit(function(event) {
      event.preventDefault();
      var size = $("select#size").val();
      var crust = $("select#crust").val();
      var toppings = $("select#topping").val();
      var pizzaDetails = (size + " - " + crust + " - " + toppings);
      var newPizzaOrder = new Order(size, crust, toppings);
      newPizzaOrder.pizzaCost();
      totalPriceArray.push(newPizzaOrder.pizzaPrice);
      $("#total-cost").text(newPizzaOrder.finalCost());
      $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    });
    $("#button").click(function() {
      $("#deliver").toggle();
    });
  
    $("#checkout").click(function() {
      $("#order-details").toggle();
    });
    $("form#address-form").submit(function(event) {
      $(".address-form").toggle();
      event.preventDefault();
      var address = $("input#location").val();
      var newAddress = new Address(address);
      $("#delivery-option").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
    });
  });
  