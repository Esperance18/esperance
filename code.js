const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200},
 {name: 'Album', price:10}, {name: 'Book', price:5}, 
{name: 'Phone', price:500}, {name: 'Computer', price:1000}];
let min = 10;
for (let j = 0; j<item.length; j++)
{
  if(item[j].price < min){
  console.log(item[j]);
             }
}
let a= 200;
for (let j = 0; j < item.length; j++){
if(item[j].price >= a){
console.log(item[j])
}}
let sum = 0;
for(j = 0; j< item.length; j++){
sum += item[j]['price'];
}
      console.log(sum);
for (let j = 0; j< item.length; j++){
item[j].price >= 10 ? sum +=item[j].price: undefined;
}
console.log(sum);
