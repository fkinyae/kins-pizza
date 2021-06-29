let pizza_price, crust_price, topping_price, delivery_price;
let total = 0;

function myPizza(pizza, size, topping, crust, delivery, total) {
    this.pizza = pizza;
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.delivery = delivery;
    this.total = total;
    
}


$().ready(function(){
    $(function () {
        $('#summary').hide();

//Get the user input values in each section;
        $('#btn-submit').click(function(event) {
            event.preventDefault();

            let pizza = $("#pizzas option:selected").val();
            let size = $("#size option:selected").val();
            let topping = $("#topping option:selected").val();
            let crust = $("#crust option:selected").val();
            let delivery = $('input[name="delivery"]:checked').val(); //"home" or "pickup";
            let number = $('#pizza_no').val();


            switch (pizza) {
                case pizza = "periperi":
                    if (size === "regular") {
                        pizza_price = 500;  
                    } else if (size === "medium") {
                        pizza_price = 750;
                    } else if (size === "large") {
                        pizza_price = 950;
                    }
                    else {
                        pizza_price = 1150;
                        alert("crust is" + pizza_price);

                    }
                    
                    break;


                case pizza = "regina":
                    if (size === "regular") {
                        pizza_price = 600;  
                    } else if (size === "medium") {
                        pizza_price = 750;
                    } else if (size === "large") {
                        pizza_price = 950;
                    }
                    else {
                        pizza_price = 1200;
                    }
                    
                    break;

                case pizza = "bbq":
                        if (size === "regular") {
                            pizza_price = 550;  
                        } else if (size === "medium") {
                            pizza_price = 650;
                        } else if (size === "large") {
                            pizza_price = 850;
                        }
                        else {
                            pizza_price = 1000;
                        }
                        
                        break; 
                     
                    case pizza = "boerewors":
                        if (size === "regular") {
                            pizza_price = 400;  
                        } else if (size === "medium") {
                            pizza_price = 550;
                        } else if (size === "large") {
                            pizza_price = 700;
                        }
                        else {
                            pizza_price = 950;
                        }
                        
                        break; 

                    case pizza = "mushroom":
                            if (size === "regular") {
                                pizza_price = 450;  
                            } else if (size === "medium") {
                                pizza_price = 550;
                            } else if (size === "large") {
                                pizza_price = 850;
                            }
                            else {
                                pizza_price = 1050;
                            }
                            
                            break;  
                            
                    case pizza = "tikka":
                        if (size === "regular") {
                            pizza_price = 700;  
                        } else if (size === "medium") {
                            pizza_price = 850;
                        } else if (size === "large") {
                            pizza_price = 1000;
                        }
                        else {
                            pizza_price = 1250;
                        }
                        
                        break; 
                
            }

            switch(crust) {
                case "thin":
                    crust_price = 50;
                break;
                case "chicago":
                    crust_price = 100;
                break;  
                case "sicilian":
                    crust_price = 150;
                break;
                case "bagels":
                    crust_price = 200;

                break;
                case "bread":
                    crust_price = 250;
                break;  
                default:
                    crust_price = 0;
            }

            switch(topping) {
                case "pepperoni":
                    topping_price = 20;
                    break;
                    case "cheese":
                        topping_price = 40;
                        break; 
                     case "bacon":
                            topping_price = 60;
                            break;  
                        case "sausage":
                                topping_price = 80;
                                break; 
                            case "pineapple":
                                    topping_price = 100;
                                    break; 
                                    default:
                                        topping_price = 0; 
            }

            switch(delivery) {
                case "home":
                    delivery_price = 100;
                    break;
                    case "pickup":
                        delivery_price = 0;
                        break;
                        default:
                            delivery_price = 0;
            }
            
            total = pizza_price + crust_price + topping_price;
            let total2 = total * number;
            let checkoutTotal = total2 + delivery_price;

            return checkoutTotal;


        });
        $("button#btn-submit").click(function(){ 

            $("button#btn-submit").hide();
            $('#summary').show();


            
          });

    });
    

});