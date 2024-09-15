// Car class
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
    
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  
  // Sedan subclass
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year); // Call the parent class constructor with model and year
      this.balance = balance;
    }
    
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
  // Creating an instance of Car
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details()); 
  // Output: Model: Pontiac Firebird Engine 1976
  
  // Creating an instance of Sedan (subclass of Car)
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());
  // Output: Volvo SD has a balance of $30000.00
  