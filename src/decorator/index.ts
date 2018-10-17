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