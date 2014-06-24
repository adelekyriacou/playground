function calcSweetPrices(sweetPrices, item, quantity) {
  var priceOfItem = sweetPrices[item];
  var totalPrice = priceOfItem * quantity;
  return totalPrice;
}
 
function payForSweets(person, cost) {
  person.wallet -= cost;
}
 
function putSweetsInBag(person, item, quantity) {
  for (var i = 0; i < quantity; i++) {
    person.bag.push(item);
  }
}
 
function buySweets(person, sweetPrices, item, quantity) {
  var cost = calcSweetPrices(sweetPrices, item, quantity);
  payForSweets(person, cost);
  putSweetsInBag(person, item, quantity);
}
 
function takePocketMoney(person, amount) {
  person.wallet += amount;
}
 
function takeSweetsFromBag(person, item, quantity) {
  for (var i = 0; i < quantity; i++) {
    var itemIndex = person.bag.indexOf(item);
    person.bag.splice(itemIndex, 1); // (where you want to delete, how many you want to delete)
  }
}
 
function eatSweets(person, item, quantity) {
  takeSweetsFromBag(person, item, quantity);
}
 
function giveSweets(person, anotherPerson, item, quantity) {
  takeSweetsFromBag(person, item, quantity);
  putSweetsInBag(anotherPerson, item, quantity);
}