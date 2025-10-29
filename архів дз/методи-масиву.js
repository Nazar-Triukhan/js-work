const friends = ['Mango', 'Poly', 'Kiwi' ,'Ajax'];
let string = '';
for(let i = 0;i < friends.length; i++){
    string += `${friends[i]},`
}
console.log(string);
string = friends.join(',')
console.log(string);


const cart = ['cart-1','cart-2','cart-3','cart-4','cart-5'];
const cartToInsert = 'cart-6'
const cartToUpted = 'cart-new-4'
cart.splice(cart.indexOf('cart-3'),1)
cart.splice(5,0,cartToInsert)
cart.splice(cart.indexOf('cart-4'),1,cartToUpted)
console.log(cart);


