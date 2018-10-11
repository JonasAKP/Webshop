
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
    var row = `<tr id="tr${product.id}">
  <td>${product.id}</td>
  <td>${product.imgPath}</td>
  <td>${product.name}</td>
  <td>${product.type}</td>
  <td>${product.stock}</td>
  <td>${product.price}</td>
  <td>${product.description}</td>
  <td>N/A</td>
  <td>
  <button onclick="deleteProduct(${product.id})">DELETE</button>
  </td>
  </tr>`
    return row

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


function deleteProduct(id) {
    $.ajax({
        url: 'https://webshopappgruppe7.azurewebsites.net/api/products/' + id,
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