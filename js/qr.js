    var result;
    var r;
    var qrInput     =   $('input#file-input');
    var goBtn       =   $('button#go-btn');
    var captureQR   =   $('button#capture-qr');
    var notif       =   $('.notif');

    var fileInputVal;

    qrInput.change(function() {
        
        if ($(this).val().length > 0) {
            fileInputVal = this;
            // alert('Captured');
            openQRCamera(this);
        } else {
            alert('Please scan a QR Code.');
        }
    });

    goBtn.click(function() {
        qrInput.change();
    });

    captureQR.click(function() {
        qrInput.click();
        
    });


    function openQRCamera(node) {
        var reader = new FileReader();
        reader.onload = function () {
            // node.value = "";
            qrcode.callback = function (res) {
                if (res instanceof Error) {
                    alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
                } else {
                    // node.parentNode.previousElementSibling.value = res;
                    
                    // calling filterResult function
                    notif.hide();
                    filterResult(res);
                }
            };
            qrcode.decode(reader.result);
        };
        reader.readAsDataURL(node.files[0]);
    }

    // Filtering result
    function filterResult(res) {
        result = res;
        result = result.replace( /^\D+/g, '');
        result = parseFloat(result);
        r = res.replace(/[0-9]/g, ' ');
        qrResult(r, result);
    }

    // Appending New Items
    function qrResult() {
        $('.results').append('<div class="item"> <input type="text" value="'+r.replace( /\./g, '')+'" disabled></input> <input id="price" type="text" value="Php '+result+'" disabled> <input type="text" value="1" disabled></input></div>');
        totals();
    }

    var val = 0;
    var i = 0;
    var total = 0;

    // Calculating the total amount
    function totals() {
        if (isNaN(result)) {
            result = 0;
        }

        total = val + result;
        console.log('Total: '+ total);
        $('#total').val('Php '+total.toFixed(2));
        val = total;
        
    }
