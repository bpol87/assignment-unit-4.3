console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
        let full = isFull();
        if (!full) {
        basket.push(item);
        return true;
        } else {
            return false;
        }
}
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
};

function listItems() {
    for (i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
};



function empty() {
basket.length = 0;
};

basket.push('Kale', 'Spinach', 'Swiss Chard', 'Arugula', 'Bok choy')
console.log("Starting Basket is:", basket);
function removeItem (item) {    
    if (basket.includes(item)) {
        let i = basket.indexOf(item);
        let removedItem = basket.splice(i, 1);
        let convertedItem = removedItem.toString();
        return convertedItem;
    } else {
        return null;
    }
}

console.log("the removed basket item is:", removeItem("Spinach"))
console.log("the new basket is:", basket)


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
