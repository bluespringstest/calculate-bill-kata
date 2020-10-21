const calculateBill = (price, vat, tip) => {
    let amount;
    const errorMessage = 'error';

    if (typeof(price, vat, tip) === 'number') {
        amount = price + (price * vat / 100) + tip;       
    } else {
        return errorMessage;
    }

    return "£" + amount

} 
module.exports = calculateBill;