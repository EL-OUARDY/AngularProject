import { CartItem } from './cartItem';

export class ShoppingCart {
    items: CartItem[];
    constructor() {
        this.items = [];
    }

    get totalCartItems() {
        let count = 0;
        this.items.forEach(x => count += x.quantity);
        return count;
    }

    get grandPrice() {
        let sum = 0;
        this.items.forEach(x => sum += (x.product.price * x.quantity));
        return sum;
    }
}
