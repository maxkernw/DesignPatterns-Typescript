class Burger {
    private _size: number;
    private _cheese: boolean;
    private _pepperoni: boolean;
    private _lettuce: boolean;
    private _tomato: boolean;

    public constructor(builder: BurgerBuilder) {
        this._size = builder.Size;
        this._cheese = builder.Cheese;
        this._pepperoni = builder.Pepperoni;
        this._lettuce = builder.Lettuce;
        this._tomato = builder.Tomato;
    }

    public GetDescription(): string {
        return `This is ${this._size} inch Burger. `;
    }
}

class BurgerBuilder {
    public Size: number;
    public Cheese: boolean;
    public Pepperoni: boolean;
    public Lettuce: boolean;
    public Tomato: boolean;

    public constructor(size: number) {
        this.Size = size;
    }

    public AddCheese() {
        this.Cheese = true;
        return this;
    }

    public AddPepperoni() {
        this.Pepperoni = true;
        return this;
    }

    public AddLettuce() {
        this.Lettuce = true;
        return this;
    }

    public AddTomato() {
        this.Tomato = true;
        return this;
    }

    public Build() {
        return new Burger(this);
    }
}

const burger = new BurgerBuilder(4).AddCheese()
    .AddPepperoni()
    .AddLettuce()
    .AddTomato()
    .Build();
console.log(burger.GetDescription());