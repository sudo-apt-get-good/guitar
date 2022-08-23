import Guitar from "./guitarClass.js"

export default class Inventory {
    constructor() {
        this.guitars = [];
    }

    addGuitar(serialNumber, price, builder, model, type, backwood, topwood) {
        const newGuitar = new Guitar(serialNumber, price, builder, model, type, backwood, topwood);
        this.guitars.push(newGuitar);
    }

    getGuitar(serialNumber) {
        for (const guitar of this.guitars) {
            if (serialNumber === guitar.serialNumber) {
                return guitar;
            }
        }
        // The value null represents the intentional absence of an object value;
        return null;
    }

    search(idealGuitar) {
        // Destructuring
        const {serialNumber, price, builder, model, type, backwood, topwood} = idealGuitar;

        for (const guitar of this.guitars) {
            if (guitar.price <= price && guitar.builder===builder && guitar.model===model && guitar.type===type && guitar.backwood===backwood && guitar.topwood===topwood) {
                return guitar;
            }
        }
        return null;
    }
}