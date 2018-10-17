/*
Decorator pattern lets you dynamically
change the behavior of an object at run
time by wrapping them in an object of a decorator class.

RW
In object-oriented programming, the decorator pattern
is a design pattern that allows behavior to be added to an
individual object, either statically or dynamically, without affecting
the behavior of other objects from the same class. The decorator
pattern is often useful for adhering to the Single Responsibility
Principle, as it allows functionality to be divided between classes with unique areas of concern.
*/

interface ICoffee {
    GetCost(): number;
    GetDescription(): string;
}

class BlackCoffee implements ICoffee {
    GetCost(): number {
        return 5;
    }
    GetDescription(): string {
        return "Black Coffee"
    }
}

class MilkCoffee implements ICoffee {
    private mCoffee: ICoffee;

    public constructor(coffee: ICoffee) {
        this.mCoffee = coffee
    }
    GetCost(): number {
        return this.mCoffee.GetCost() + 1;
    }
    GetDescription(): string {
        return `${this.mCoffee.GetDescription()} With milk...`
    }
}


const coffee = new BlackCoffee();
console.log(coffee.GetCost())
console.log(coffee.GetDescription())

const mCoffee = new MilkCoffee(coffee);
console.log(mCoffee.GetCost())
console.log(mCoffee.GetDescription())