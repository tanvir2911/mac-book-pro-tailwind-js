function extraCost(extraCostId, price) {
    document.getElementById(extraCostId).innerText = price;;

    totalCost(price);

}

function totalCost(price) {
    const result = 1299 + parseFloat(document.getElementById('extra-memory-cost').innerText) + parseFloat(document.getElementById('extra-storage-cost').innerText) + parseFloat(document.getElementById('delivery-cost').innerText)
    document.getElementById('total-price').innerText = result;
    document.getElementById('final-total').innerText = result;

}




// // memory handler
document.getElementById('8gb-memory').addEventListener('click', function () {
    const extraCostId = 'extra-memory-cost';
    const price = 0;
    extraCost(extraCostId, price);

});
document.getElementById('16gb-memory').addEventListener('click', function () {
    const extraCostId = 'extra-memory-cost';
    const price = 180;
    extraCost(extraCostId, price);

});

// storage handler
document.getElementById('256gb-ssd').addEventListener('click', function () {
    const extraCostId = 'extra-storage-cost';
    const price = 0;
    extraCost(extraCostId, price);

});
document.getElementById('512gb-ssd').addEventListener('click', function () {
    const extraCostId = 'extra-storage-cost';
    const price = 100;
    extraCost(extraCostId, price);
});
document.getElementById('1tb-ssd').addEventListener('click', function () {
    const extraCostId = 'extra-storage-cost';
    const price = 180;
    extraCost(extraCostId, price);

});

// delivery handler
document.getElementById('delayed-delivery').addEventListener('click', function () {
    const extraCostId = 'delivery-cost';
    const price = 0;
    extraCost(extraCostId, price);

});
document.getElementById('fast-delivery').addEventListener('click', function () {
    const extraCostId = 'delivery-cost';
    const price = 20;
    extraCost(extraCostId, price);
});


// promo code
document.getElementById('promo-code-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code-input').value;
    const finalTotal = document.getElementById('final-total');
    let subTotal = parseFloat(finalTotal.innerText);
    if (promoCode == 'stevekaku') {
        subTotal = subTotal * 0.80;
        finalTotal.innerText = subTotal;

    }
});
