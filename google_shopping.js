var data = require("./products.json")
// Write your solutions below
//Q#1     Where else is this count information stored in the search results?
var count = 0
for (var i=0;i<data['items'].length;i++) {
  if (data['items'][i].kind === 'shopping#product') {
    count++;
   }
}
console.log(count + ' items');
// #1 Answer: 25 items have kind of shopping#product
//
//
//Q#2 find all items with backorder inv > 0
//
//
var count = 0
for (var i=0; i<data['items'].length; i++) {
  if (data['items'][i].product.inventories[0].availability === 'backorder') {
    count++;
    console.log(data.items[i].product.title);
  }
}
//
//
//Q#3
//
//
for (var i = 0; i < data['items'].length; i++) {
  if (data['items'][i].product.images.length > 1) {
    count++;
    console.log(data.items[i].product.title);
  }
}
//
//
//Q#4
//c ***CASE SENSITIVITY******
//
var count = 0
for (i = 0; i < data['items'].length; i++) {
  if (data['items'][i].product.brand.tolowercase() === "canon") {
    console.log(data.items[i].product.title);  
  }
}
//
//
//Q#5 Find all items that have product author name of "eBay" and are brand "Canon".
//5.) *******product.author.name && brand code^^^^
//
var count = 0
for (i = 0; i < data['items'][i].length; i++) {
  if (data['items'][i].product.brand.lowercase() === "canon") && (data['items'[i].product.author.name[0].indexOf("eBay") {
    console.log(data.items[i].product.title);
  }
}


//
//
//Q#6 Print all the products with their brand, price, and a image link
//6.) Print all the products with their brand, price, and a image link
//

var count = 0
  for (i = 0; i < data['items'][i].length; i++) {


  }
]























