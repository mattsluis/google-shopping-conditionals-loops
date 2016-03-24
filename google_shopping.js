var data = require("./products.json")
// Write your solutions below
//Q#1
var count = 0
for (var i=0;i<data['items'].length;i++){
  if (data['items'][i].kind === 'shopping#product'){
    count++;
   }
}
console.log(count + ' items');
//
//
//Q#2
//
//
var count = 0
for (var i=0; i<data['items'].length; i++){
  if (data['items'][i].product.inventories[0].availability === 'backorder'){
    count++;
    console.log(data.items[i].product.title);
  }
}
//
//
//Q#3
//
//
for (var i = 0; i < data['items'].length; i++){
  if (data['items'][i].product.images.length > 1){
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
  if (data['items'][i].product.brand === "Canon") {
    console.log(data.items[i].product.title);  
  }
}
//
//
//Q#5 Find all items that have product author name of "eBay" and are brand "Canon".
//5.) F
//
var count = 0
 if (data)['items'][i]




//
//
//Q#6 Print all the products with their brand, price, and a image link
//6.) Print all the products with their brand, price, and a image link
//