export let Add = (ValOne, valTwo) => {
    return ValOne + valTwo;
};
export let Sub = (ValOne, valTwo) => {
    return ValOne - valTwo;
};
export let Multiply = (ValOne, valTwo) => {
    return ValOne * valTwo;
};
export let Divide = (ValOne, valTwo) => {
    return ValOne / valTwo;
};
export let restult = (val1, val2, operations) => {
    let operation = operations[0];
    switch (operation) {
        case "Add": {
            return Add(val1, val2);
            break;
        }
        case "Sub": {
            return Sub(val1, val2);
            break;
        }
        case "Multiply": {
            return Multiply(val1, val2);
            break;
        }
        case "Divide": {
            return Divide(val1, val2);
            break;
        }
    }
};
