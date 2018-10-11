$('#myForm').on('submit', function(e) {
    e.preventDefault();
    var imgPath = $( "#productImgPath").val();
    var name = $( "#productName").val();
    var type = $( "#productType").val();
    var stock = $( "#productStock").val();
    var price = $( "#productPrice").val();
    var description = $( "#productDescription").val();

    $.ajax({
        url: "https://webshopappgruppe7.azurewebsites.net/api/products",
        type: 'POST',
        data: JSON.stringify({
            "imgPath": imgPath,
            "name": name,
            "type": type,
            "stock": stock,
            "price": price,
            "description": description}),
        processData: false,
        contentType: 'application/json',
        success: function (comments) {
            console.log("ITS WORKING RIGHT?");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
});