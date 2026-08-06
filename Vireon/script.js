let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price){
    cart.push({
        name: product,
        price: price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(product + " added to cart");
}

function displayCart(){
    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");

    if(!cartItems){
        return;
    }

    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item,index)=>{
        let product = document.createElement("div");
        product.className = "cart-item";

        product.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price}</p>

        <button onclick="removeItem(${index})">
        Remove
        </button>
        `;

        cartItems.appendChild(product);
        totalPrice += item.price;
    });

    total.innerHTML =
    "Total: $" + totalPrice;
}

function removeItem(index){
    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

displayCart();

function searchProducts(){

let input = document
.getElementById("search")
.value
.toLowerCase();


let products =
document.querySelectorAll(".card");


products.forEach(product=>{


let name =
product.innerText.toLowerCase();


if(name.includes(input)){

product.style.display="block";

}

else{

product.style.display="none";

}


});


}