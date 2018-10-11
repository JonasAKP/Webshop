function listProducts() {
    // Calls the Web API with the GET function.
    $.ajax({
        url: 'https://webshopappgruppe7.azurewebsites.net/api/products?CurrentPage=1&ItemsPerPage=4',
        type: 'GET',
        dataType: 'json',
        success: function (products) {
            onGetProductsSuccess(products);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function onGetProductsSuccess(products) {
    $("#products_area").empty();
    console.log("On get products success");

    $.each(products, function (index, products) {
        addProductRow(products);
        console.log("should have called add product row");

    })
}

function addProductRow(products) {
    $("#products_area").append(
        buildProductRow(products));
    console.log("should start building ");

}


function buildProductRow(products) {
    var ret =
        "<div id='"+ products.id +" '" +
        " onclick='openDescription('" + products.id + "')'" +
        "<div id='section'></div>" +
        "<div class='products'>" +
        "<div id='product_img'>" +
        "<a href='description.html'> " +
        "<img src='"+products.imgPath+"' alt=\"\">\n" +
        "</a>" +
        "</div>" +
        "<div id='product_title'>" +
        "<h2>'"+products.name+"'</h2>" +
        "</div>" +
        "<div id=\'product_desc\'> <p>'"+products.type+"'</p> " +
        "</div>" +
        "<div id='product_shop_buy'>" +
        "<div id='product_price'>" +
        "<p>'"+products.price+"'</p>\n" +
        "</div>" +
        "<div id='product_buy'>" +
        "<p>" +
        "<a href='description.html'>Buy Me</a> "
    return ret;
}


    function openDescription(id) {
        window.open("../jonaskp/productinfo.html?id="+id);

}