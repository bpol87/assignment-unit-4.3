console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
const addEraserBtn = document.getElementById('add-eraser-to-cart');
const addNotebookBtn = document.getElementById('add-notebook-to-cart');
const addPencilBtn = document.getElementById('add-pencil-to-cart');
const addRulerBtn = document.getElementById('add-ruler-to-cart');
const cartItems = document.getElementById('cart-items');
const clearCartBtn = document.getElementById('clear-cart');
let itemCount = 0;

function addItem(item) {
    basket.push(item);
    console.log(basket);
    return true;
};

function listItem(item){
for (item of basket) {

}
}
function removeItem() {

};
function empty() {
    basket = [];
    console.log(basket);
}

addEraserBtn.addEventListener('click', ()=> {
    addItem('Eraser');
})

clearCartBtn.addEventListener('click', ()=>{
empty();
})

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
