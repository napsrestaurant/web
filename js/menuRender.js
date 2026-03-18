// menuRender.js

const container = document.getElementById("menu-container");

/* 
Control the order of categories here
Only categories in this array will render
*/

const categories = [
"Soups & Appetizers",
"Naps Breakfast",
"Naps Sarap Meals",
"Seafoods & Sisigs",
"Naps Specialties",
"Naps Favorites",
"Naps Best Sellers",
"Vegetable Dishes",
"Fruit Shakes",
"Beverages",
"Coffees",
"Desserts",
"Liquors",
"Naps Group Meals",
"Naps Best Pulutans",
"Pancits & Lomis",
"Spaghettis",
"Sandwiches",
"Merienda Combo",
"Naps Innovation - Appetizers",
"Naps Innovation - Salads",
"Naps Innovation - Main Dishes",
"Naps Innovation - Special Rices",
"Naps Innovation - Desserts",
"Side Orders",
];

function renderMenu() {

container.innerHTML = "";

/* Loop categories in the order you defined */

categories.forEach(category => {

const items = menu.filter(item => item.category === category);

/* skip empty category */

if(items.length === 0) return;

let section = `
<div class="menu-category mb-5">

<h2 class="mb-4 pb-2 text-center">
${category}
</h2>

<div class="row border-top pt-5 ">
`;

/* render items */

items.forEach(item => {

section += `
<div class="col-md-3 mb-4">

<div class="card h-100 shadow-sm">

<img src="${item.image || "images/noimage.png"}" class="card-img-top h-100 img-fluid">

<div class="card-body">

<h5 class="card-title">${item.name}</h5>

<p class="card-text">
${item.description || ""}
</p>

</div>

<div class="card-footer d-flex justify-content-between align-items-center">

<strong>₱${item.price}</strong>


</div>

</div>

</div>
`;

});

section += `
</div>
</div>
`;

container.innerHTML += section;

});

}

renderMenu();