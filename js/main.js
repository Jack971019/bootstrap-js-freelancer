
let arrayDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let sendButton = document.getElementById("send_button");



sendButton.addEventListener("click", function (event) {
    event.preventDefault();





    let hoursrequested = parseInt(document.getElementById("formGroupExampleInput2").value);
    let typeofwork = parseInt(document.getElementById("type_of_work").value);
    let discountcode = document.getElementById("discount_code").value;
    console.log(discountcode);
    let finalPrice = 0

    if (typeofwork == "1") {
        finalPrice = 20.5 * hoursrequested;
    } else if (typeofwork == "2") {
        finalPrice = 15.3 * hoursrequested;
    } else if (typeofwork == "3") {
        finalPrice = 33.6 * hoursrequested;
    }


    let discountpresent = false
    for (let i = 0; i < arrayDiscountCodes.length; i++) {
        if (arrayDiscountCodes[i] == discountcode) {
            discountpresent = true;
            
        }


    }

    if ((discountcode != "") && !discountpresent) {
        alert("il codice inserito non è valido");

        document.getElementById("discount_code").classList.add("text-danger");
    }

    if (discountpresent) {
        finalPrice = finalPrice * 0.75;
    }
    finalPrice = finalPrice.toFixed(2);

    document.getElementById("final_price").innerHTML = "Il prezzo è di: " + finalPrice + "€";



})
