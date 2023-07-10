
let arrayDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let sendButton = document.getElementById("send_button");



    sendButton.addEventListener("click", function (event) {
        event.preventDefault();

    

    document.getElementById("formGroupExampleInput").value

    let hoursrequested = parseInt(document.getElementById("hours_requested").value);
    let typeofwork = document.getElementById("type_of_work").value;
    let discountcode = document.getElementById("discount_code").value;

    let finalPrice = 0

    if (typeofwork == "1") {
        finalPrice = 20.5 * hoursrequested;
    }  else if (typeofwork == "2") {
        finalPrice = 15.3 * hoursrequested;
    }  else if (typeofwork == "3") {
        finalPrice = 33.6 * hoursrequested;
    }

    console.log(finalPrice);

    for (let i = 0; i < arrayDiscountCodes.length; i++) {
        if (arrayDiscountCodes[i] == discountcode) {
            finalPrice = finalPrice - finalPrice * 25 / 100;
        }
    }

    finalPrice = finalPrice.toFixed(2);

    document.getElementById("final_price").innerHTML = "Il prezzo è di: " + finalPrice + "$";



})
