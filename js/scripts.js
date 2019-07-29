$(document).ready(function(){
      $(".overlay").hide();
    $(".display").hover(function(){
        $(this).find(".overlay").toggle(400);
    });
      
      var totalPriceArray = [];
      function choice(type, size, number, toppings ,crust, deliver, location){
            this.type = type;
            this.size = size;
            this.number = number;
            this.toppings = toppings;
            this.crust = crust;
            this.deliver = deliver;
            this.location = location;
            this.price = price;
          }  

      Order.prototype.pizzaCost = function() {
            if (this.size === "large") {
                  this.price 
            }
      }


            
            
            
            
            
            
            
            
            var type = document.getElementById("choices");
                var size = document.getElementById("sizes");
                var number = document.getElementById("Number");
                var toppings = document.getElementById("toppings");
                var crust = document.getElementById("crust");
                var deliver = document.getElementById("no","yes");
                var location = document.getElementById("location");

                if ( type == "" & size == Large & number == "" & toppings == "")
          }

          function 