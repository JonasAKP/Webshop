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
        "<div id='section'></div>" +
        "<div class='products'>" +
        "<div id='product_img'>" +
        "<a onclick='openDescription("+products.id+")' > " +
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
        "<a onclick='openDescription("+products.id+")'>Buy Me</a> "
    return ret;
}


function getProductById() {
   // get by ID
   $.ajax({
       url: 'https://webshopappgruppe7.azurewebsites.net/api/products/'+ document.URL.split('=')[1],
       type: 'GET',
       dataType: 'json',
       success: function (products) {
           console.log(products);
           $("#productSingle").empty();
           $("#productSingle").append(
               "<div id'= section_p'> " +
               "<div id='p_picture'> "+
               "<img src='"+products.imgPath+"' alt=\"\">\n" +
               "</div>" +
               "<div id='p_title'>" +
               "<h2>'"+products.name+"'</h2>" +
               "</div>" +
               "<div id='p_price'>" +
               "<p>Price: </p>" +
               "</div>" +
               "<div id='p_price2'>" +
               "<h2>'"+products.price+"'</h2>" +
               "</div>" +
               "<div id='p_stock'>" +
               "<p>Stock: </p>" +
               "</div>" +
               "<div id='p_stock2'>" +
               "<p>'"+products.stock+"'</p>" +
               "</div>" +
               " <div id='p_info'> "+
               "'"+products.description+"'" +
               "</div>");
       },
       error: function (request, message, error) {
           console.log(error);
       }
   });
}



    function openDescription(id) {
        window.open("../Webshop/description.html?id="+id);

}