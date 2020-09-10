const foods = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
  },
];


//test
// const productContainer = document.querySelector(".products-container");

// window.addEventListener("DOMContentLoaded", function () {
//     let displayFood = foods.map(function(food){
//         return `
//             <div class="product-container">
//                 <div>
//                     <img src=${food.img}>
//                 </div>
//                 <div class="title">
//                     <h3>${food.title}</h3>
//                 </div>
//                 <div class="price">
//                     <h5>Price: <span class="text-success">$<span>${food.price}</span></span></h5>
//                 </div>
//                 <div>
//                     <button id="addCartBtn" class="btn add-cart-btn btn-warning">ADD TO CART</button>
//                 </div>
//                 <hr>
//             </div>
//         `;
//     })
//     displayFood = displayFood.join('')
//     productContainer.innerHTML = displayFood;
// });

//Problems to find out - why item selection (.add-cart-btn) is working only when it's hard coded in html? and what's wrong when I added Foods dynamically? (hahha solved)




// Start from here

let addToCart = document.querySelectorAll(".add-cart-btn");
let cartLists = document.querySelector(".cart-lists");

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function () {
    items = 
    `
        <li class="cart-item">
            <div>
                <img src="./images/item-${i + 1}.jpeg" alt="item img">
            </div>
            <div>
                <h3 class="title">${foods[i].title}</h3>
            </div>
            <div>
                <h5>Price: <span class="text-success">$<span>${
                foods[i].price
                }</span></span></h5>
            </div>
            <div>
                <button id='removable' class="btn remove-cart-btn btn-danger">Remove</ button>
            </div>
            <hr>
        </li>
    `;

    cartLists.insertAdjacentHTML("afterbegin", items);
  });
}



document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'removable'){

        e.target.parentElement.parentElement.remove()
     }
});
