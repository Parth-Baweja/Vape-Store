$(document).ready(function() {
    /* Load header, footer, meta */
    $(function() {
        $("#header").load("./header.html");
        $("#footer").load("./footer.html");
        $("#meta").load("./meta.html");
    });

    /* Handle contact form */
    $('#contactus').submit(function(e){
        e.preventDefault();
        alert($(this).find('input[type="email"]').val() + "\nWe will contact soon!");
    });

    /* Handle minus quntity */
    $('#minus').click(function(e) {
        e.preventDefault();
        var quantity = $('#quantity').find('input[type="number"]').val();
        $('#quantity').find('input[type="number"]').val(parseInt(quantity) - 1);
        if(quantity == 1) $('#quantity').find('input[type="number"]').val(1);
    });

    /* Handle plus quntity */
    $('#plus').click(function(e) {
        e.preventDefault();
        var quantity = $('#quantity').find('input[type="number"]').val();
        $('#quantity').find('input[type="number"]').val(parseInt(quantity) + 1);
    });

    /* Handle checkout */
    $('#quantity').submit(function(e) {
        e.preventDefault();
        alert($('h1').text() + "\nQuantity: " + $(this).find('input[type="number"]').val());
    });

    /* Filter price */
    $('input[type="range"]').on('input', function() {
        price = $(this).val();
        $('#shop .products > div:nth-child(1) span:last-child').text("$" + price);
        $('#shop .products > div:nth-child(2) > div p').each(function() {
            if(parseFloat($(this).text().substring(1)) <= price) {
                $(this).parent().css("display", "flex");
            } else {
                $(this).parent().css("display", "none");
            }
        });
    });
});