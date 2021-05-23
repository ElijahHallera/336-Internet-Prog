$("#banana-fact").on('click', function(){
	$(this).html("A green banana has very high starch content – as the fruit yellows, this starch turns into sugars.");
	$(this).css("background-color", "yellow");
	$(this).css("color", "black");
});

$("#apple-fact").on('click', function(){
	$(this).html(" If you’ve ever wondered why apples float it’s because they’re 25 percent air, giving us the ability to bob for apples in a barrel of water.");
	$(this).css("background-color", "red");
});


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var Inputs = document.getElementsByClassName('cart-input');
    for (var i = 0; i < Inputs.length; i++) {
        var input = Inputs[i];
        input.addEventListener('change', Changed);
    }

    var addToCart = document.getElementsByClassName('shop_button');
    for (var i = 0; i < addToCart.length; i++) {
        var button = addToCart[i];
        button.addEventListener('click', Clicked);
    }
}

function Changed(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= -1) {
        input.value = 1;
    }
    update();
}

function Clicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop_price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('food_image')[0].src;
    addCart(title, price, imageSrc);
    update();
}

function addCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('list');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var Items = cartItems.getElementsByClassName('item-title');
    for (var i = 0; i < Items.length; i++) {
        if (Items[i].innerText == title) {
            alert('This item is already added to the cart');
            return;
        }
    }
    
    var cartContents = ` <div class="cart-item cart-column"> <img class="item-image" src="${imageSrc}" width="100" height="100"> 
                         <span class="item-title">${title}</span></div> <span class="cart-price cart-column">${price}</span>
                         <div class="cart-quantity cart-column"> <input class="cart-input" type="number" value="1"></div>`;
    cartRow.innerHTML = cartContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('cart-input')[0].addEventListener('change', Changed);
}

function update() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('list');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + ((price * quantity) + ((price * quantity) *.0875));
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}