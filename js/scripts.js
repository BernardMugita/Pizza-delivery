$(document).ready(function () {
  $(".overlay").hide();
  $(".display").hover(function () {
    $(this).find(".overlay").toggle(400);
  });

  function Choice(type, size, number, toppings, crust, deliver, location) {
    this.type = type;
    this.size = size;
    this.number = number;
    this.toppings = toppings;
    this.crust = crust;
    this.deliver = deliver;
    this.location = location;
    this.price = price;
  }

  //     function invoice() {

  //       // Setting size and sizePrice based on selection
  //             var size = document.querySelector('input[name="size"]:checked').value; console.log("size="+size);
  //             var sizePrice = 0;

  //             if (size === "Regular") {
  //                   sizePrice = 10;
  //             };
  //             if (size === "Large") {
  //                   sizePrice = 14;
  //             };
  //             if (size === "Extra-Large") {
  //                   sizePrice = 16;
  //             }; console.log("sizePrice="+sizePrice);
  //       };

  
    $("button.btn").click(function (event) {
      var type = $("#type option:selected").val();
      var size = $("#size option:selected").val();
      var crust = $("#crust option:selected").val();
      var topping = [];
      $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
    });

  $("button#btn").click(function (event) {
    var type = $("#choices").find('option:selected');
    var size = $("#size option:selected").val();
    var crust = $("#crust option:selected").val();
    var topping = $("#toppings option:selected").val();

    $.each($("input[name='toppings']:checked"), function () {
      topping.push($(this).val());
    });
    console.log(topping.join(", "));
  });

  $("button#btn").click(function () {
    let location = $("input#location").val();
    if ($("input#location").val() != "") {
      $("#input#cost").append(person + " We have recieved your order and it will be delivered to " + location);
    }
    else {
      alert("Please fill in the details for delivery!");
    }
  });
  $("button.Checkout").click(function (event) {
    var type = $("#type option:selected").val();
    var size = $("#size option:selected").val();
    var topping = $("#toppings option:selected").val();
    $("#type").append("Pizza Type - " + type);
    $("#size").append("Pizza size - " + size);
    $("#toppings").append("Pizza Toppings - " + topping);


    switch (size) {
      case "Large":
        price = 1000;
        console.log(price);
        break;
      case "Medium":
        price = 800;
        console.log(price);
        break;
      case "Regular":
        price = 500;
        console.log(price);
      default:
        console.log("error");
    }
    switch (topping) {
      case "Sausage, caramelized onions, and fennel":
        topping_price = 100;
        break;
      case "Pepperoni, tomatoes, mushrooms, and onion":
        topping_price = 100;
        break;
      case "Pepperoni, sausage, green pepper, onion, and mushroom":
        topping_price = 80;
        break;
      case "BBQ sauce, grilled chicken, scallions, and cheddar cheese":
        topping_price = 60;
        break;
      case "Thousand Island dressing, topped with sauerkraut, corned beef or pastrami, and Swiss cheese":
        topping_price = 60;
        break;
      case "Corn and spicy Italian salami":
        topping_price = 60;
        break;
      case "Gorgonzola, bacon, apples, and red onion":
        topping_price = 60;
        break;
      case "Sausage and pineapple":
        topping_price = 60;
        break;
      case "Buffalo chicken and blue cheese":
        topping_price = 60;
        break;
      default:
        console.log("No price");
    }
  });

  var total = price + crust_price + topping_price;
  console.log(total);
  $("#cost").append("Your Total is:  sh. " + total);
  var newOrder = new Getpizza(type, size, topping, mtotal);
  console.log(newOrder);
  $("#type option:selected").val("");
  $("#size option:selected").val("");
  $("#crust option:selected").val("");
  $("#topping option:selected").val("");
  event.preventDefault();
});











