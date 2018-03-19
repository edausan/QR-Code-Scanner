
    var createBtn = $('.create-btn');

    createBtn.click(function() {
        if ($('#prod-name').val() == '' && $('#prod-price').val() == '') {
            alert('Please fill Product Name and Price.');
        } else {
            create();
        }
    });

    function create() {
        // var data = document.getElementById("data").value;
        var prodName    = $('#prod-name').val();
        var prodPrice = $('#prod-price').val();
        var product = prodName.concat(prodPrice);
        document.getElementById("qrimage").innerHTML =
            "<img src='https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + encodeURIComponent(product) +
            "'/>";
    }