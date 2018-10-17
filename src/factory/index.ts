/*
It provides a way to delegate the instantiation logic to child classes.

*/

export interface Product {
    id: string;
    description: string;
    checkInventory(): number;
    updateInventory(delta: number): void;
}


class ProductImpl implements Product {
    id: string;
    description: string;
    inventory: number;

    constructor(id: string, description: string) {
        this.id = id;
        this.description = description;
        this.inventory = 10;
    }
    checkInventory(): number {
        return this.inventory;
    }
    updateInventory(delta: number) {
        this.inventory = this.inventory + delta;
    }
}

const createProduct = (id: string, description: string): Product => new ProductImpl(id, description);

const myProduct = createProduct("abc123","Design Patterns");
console.log(myProduct.checkInventory());
myProduct.updateInventory(-3);
console.log(myProduct.checkInventory());