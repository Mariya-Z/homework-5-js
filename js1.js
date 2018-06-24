function Item(name, cost, ccal){
  this.name = name;
  this.cost = cost;
  this.ccal = ccal;
}

Item.prototype.getPrice = function(name){
  return this.cost;
}

Item.prototype.getCalories = function(){
  return this.ccal;
}

function Hamburger(size, stuffing) {
  this.subject = 'Hamburger';
  this.size = size;
  this.stuffing = stuffing;
  this.ccal = this.calculateCalories();
  this.cost = this.calculatePrice();
}

Hamburger.prototype = Object.create(Item.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.SIZE_SMALL = {
  name: 'small',
  cost: 50,
  ccal: 20
}
Hamburger.SIZE_LARGE = {
  name: 'big',
  cost: 100,
  ccal: 40
}
Hamburger.STUFFING_CHEESE = {
  name: 'cheese',
  cost: 10,
  ccal: 20
}
Hamburger.STUFFING_SALAD = {
  name: 'salad',
  cost: 20,
  ccal: 5
}
Hamburger.STUFFING_POTATO = {
  name: 'potato',
  cost: 15,
  ccal: 10
}

Hamburger.prototype.getSize = function () {
  return this.size;
}

Hamburger.prototype.getStuffing = function () {
  return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
  let sum = 0;
  for (let i in this.stuffing){
    sum += this.stuffing[i].cost;
  }
  return sum;
}

Hamburger.prototype.calculateCalories = function () {
  let ccal = 0;
  for (let i in this.stuffing){
    ccal += this.stuffing[i].ccal;
  }
  return ccal;
}

function Drinking(drink){
  this.subject = 'Drink';
  this.drink = drink;
  this.ccal = this.getCalories();
  this.cost = this.getPrice();
}

Drinking.prototype = Object.create(Item.prototype);
Drinking.prototype.constructor = Drinking;

Drinking.COLA = {
  name: 'Cola',
  cost: 50,
  ccal: 40
}
Drinking.COFFEE = {
  name: 'Coffee',
  cost: 80,
  ccal: 20
}

Drinking.prototype.getDrinke = function(){
  return this.drink;
}

Drinking.prototype.getPrice = function(){
  return this.drink.cost;
}

Drinking.prototype.getCalories = function(){
  return this.drink.ccal;
}


function Salad(salad, weight){
  this.subject = 'Salad';
  this.salad = salad;
  this.weight = weight > 0 ? weight : 0;
  this.ccal = this.getCalories();
  this.cost = this.getPrice();
}

Salad.prototype = Object.create(Item.prototype);
Salad.prototype.constructor = Salad;

Salad.CAESAR = {
  name: 'Caesar',
  cost: 100,
  ccal: 20
}
Salad.OLIVIE = {
  name: 'Olivie',
  cost: 50,
  ccal: 80
}

Salad.prototype.getSalad = function(){
  return this.salad;
}

Salad.prototype.getWeight = function(){
  return this.weight;
}

Salad.prototype.getCalories = function(){
  return this.salad.ccal * this.getWeight() / 100;
}

Salad.prototype.getPrice = function(){
  return this.salad.cost * this.getWeight() / 100;
}

function Order(items){
  this.items = [];
  isPaid = false;
}

Order.prototype.constructor = Order;

Order.prototype.addItem = function(item){
  if (!this.isPaid) {
    this.items.push(item);
    return 'One more item was added successfully!';
  }
  else {return 'Order has been paid! Make new one.';}
}

Order.prototype.deleteItem = function(item){
  if (!this.isPaid){
    if (this.items.indexOf(item) != -1)
    {
      this.items.splice(1, item);
      return 'Item was deleted successfully!';
    }
    else return 'Your order does not have this item';
  }
  else return 'Order has been paid! Make new one.';
}

Order.prototype.payForOrder = function(){
  if (!this.isPaid){
    this.isPaid = true;
    return 'Order was paid successfully';
  }
  return 'Order has been paid already!'
}

Order.prototype.calculatePrice = function(){
  let sum = 0;
  for (let i in this.items){
    sum += this.items[i].cost;
  }
  return sum;
}

Order.prototype.calculateCalories = function(){
  let ccal = 0;
  for (let i in this.items){
    ccal += this.items[i].ccal;
  }
  return ccal;
}