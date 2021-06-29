$().ready(function(){
    $(function () {
        $('#summary').hide();

//Get the user input values in each section;
        $('#btn-submit').click(function() {
            let pizza = $("#pizzas option:selected").val();
            let size = $("#size option:selected").val();
            let topping = $("#topping option:selected").val();
            let crust = $("#crust option:selected").val();
            let delivery = $('input[name="delivery"]:checked').val(); //"home" or "pickup";
            let number = $('#pizza_no').val();


            

        });

    });
    

});