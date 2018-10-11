
function listProducts() {
    // Calls the Web API with the GET function.
    $.ajax({
        url: 'https://webshopappgruppe7.azurewebsites.net/api/products',
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
    if($("#productsTable tbody").length == 0) {
        $("#productsTable").append("<tbody></tbody>");
    }
    $("#productsTable tbody").empty();

    $.each(products, function (index, product) {
        addProductRow(product);
    });
}

function addProductRow(product) {
    $("#productsTable tbody").append(buildProductRow(product));
}

function buildProductRow(product) {
    var ret =
        "<tr>" +
        "<td>" + product.id + "</td>" +
        "<td>" + product.imgPath + "</td>" +
        "<td>" + product.name + "</td>" +
        "<td>" + product.type + "</td>" +
        "<td>" + product.stock + "</td>" +
        "<td>" + product.price + "</td>" +
        "<td>" + product.description + "</td>" +
        "<td>" +
        "<button type='button' " +
        "class='btn btn-info' " +
        "data-id='" + product.id + "'>" +
        "<i class='fas fa-info-circle'></i>" +
        "</button>" +
        "</td >" +
        "<td>" +
        "<button type='button' " +
        "class='btn btn-danger'  " +
        "data-id='" + product.id + "'>" +
        "<i class='fas fa-minus-circle'></i>" +
//        "productId = data-id" +
//        "onclick="deleteProduct(productId)" +
        "</button>" +
        "</td >" +
        "</tr>";
    return ret;
}

function handleException(request, message, error) {
    var msg = "";
    msg += "Code: " + request.status + "\n";
    msg += "Text: " + request.statusText + "\n";
    if (request.responseJSON != null) {
        msg += "Message" +
            request.responseJSON.Message + "\n";
    }
    alert(msg);
}


function deleteProduct(productId) {
    $.ajax({
        url: 'https://webshopappgruppe7.azurewebsites.net/api/products',
        type: 'DELETE',
        dataType: 'json',
        success: function (comments) {
            console.log("IT HAS BEEN DELETED");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}