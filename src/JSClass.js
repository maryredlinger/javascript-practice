import React from 'react'

// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that creates three unique cylinder objects

class Cylinder{
  constructor(r ,h){
    this.r = r
    this.h = h
  }

  logResult(){
    return `your cylinder is ${this.volume()}`
  }

  volume(){
    return (Math.PI * (this.r * this.r) * this.h).toFixed(4)
  }
}

var myCyl = new Cylinder( 6, 10)
console.log(myCyl.logResult())

var myCyl2 = new Cylinder( 7, 30)
console.log(myCyl2.logResult())


var myCyl3 = new Cylinder( 1, 9)
console.log(myCyl3.logResult())



const JSClass = () =>{
//   Write the code that makes a black coffee.
// Write the code that makes a coffee with 1 cream and 2 sugars.
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.


class Latte{
  constructor(flavor, milk, shot){
    this.flavor = flavor
    this.milk = milk
    this.shot = shot
  }

  coffeeProfile(){
    return(`${this.flavor} ${this.milk} latte with ${this.shots()}`)
  }

  shots(){
    if (this.shot > 1 || this.shot === 0){
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }

}

var blackLatte = new Latte("regualr", "milk", 1)
console.log(blackLatte.coffeeProfile())

var hazelnutLatte = new Latte("hazelnut", "almond milk", 2)
console.log(hazelnutLatte.coffeeProfile())




  class Coffee {
    constructor(type, cream, sugar){
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile(){
      return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
    }
  
    creams(){
      if (this.cream > 1){
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars(){
      if (this.sugar > 1){
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }

  var blackCoffee = new Coffee("black", 0, 0)
  console.log(  blackCoffee.coffeeProfile())

  var maryCoffee = new Coffee("late", 1, 2)
  console.log(maryCoffee.coffeeProfile())

  
  return(
    <div>
      <h1>hey world</h1>
      <h1>{maryCoffee.coffeeProfile()}</h1>
    </div>
  )
}

export default JSClass;