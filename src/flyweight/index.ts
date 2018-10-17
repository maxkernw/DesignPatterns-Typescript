class BlackTea {
}

// Acts as a factory and saves the tea
class TeaMaker {
    private mAvailableTea: { [key: string]: BlackTea } = {};

    public Make(preference: string): BlackTea {
        if (!this.mAvailableTea[preference] != null) {
            this.mAvailableTea[preference] = new BlackTea();
        }
        return this.mAvailableTea[preference];
    }
}

class TeaShop {
    private mOrders: { [key: number]: BlackTea } = {};
    private mTeaMaker: TeaMaker;

    public constructor(teaMaker: TeaMaker) {
        this.mTeaMaker = teaMaker;
    }

    public TakeOrder(teaType: string, table: number): void {
        this.mOrders[table] = this.mTeaMaker.Make(teaType);
    }

    public Serve(): void {

        for (let table in this.mOrders) {
            console.log(`Serving Tea to table # ${table}`);
        }
    }
}

var teaMaker = new TeaMaker();
var teaShop = new TeaShop(teaMaker);

teaShop.TakeOrder("less sugar", 1);
teaShop.TakeOrder("more milk", 2);
teaShop.TakeOrder("without sugar", 5);

teaShop.Serve();