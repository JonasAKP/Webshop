$('#myForm').on('submit', function(e) {
    e.preventDefault();
    var id = $("#productId").val();
    var imgPath = $( "#productImgPath").val();
    var name = $( "#productName").val();
    var type = $( "#productType").val();
    var stock = $( "#productStock").val();
    var price = $( "#productPrice").val();
    var description = $( "#productDescription").val();

    $.ajax({
        url: "https://webshopappgruppe7.azurewebsites.net/api/products/" + id,
        type: 'PUT',
        data: JSON.stringify({
            "Id": id,
            "ImgPath": imgPath,
            "Name": name,
            "Type": type,
            "Stock": stock,
            "Price": price,
            "Description": description}),
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