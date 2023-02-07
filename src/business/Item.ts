export class Item {
    id: number
    name: string
    price: number
    subItems: Item[] | undefined

    isPack: boolean

    constructor(id: number, name: string, price?: number, subItems?: Item[] | undefined) {
        this.id = id
        this.name = name
        this.subItems = subItems

        this.isPack = subItems ? true : false

        if (this.isPack && subItems) {
            this.price = 0
            for (let i = 0; i < subItems.length; i++) {
                this.price += subItems[i].price
            }
        } else {
            this.price = price ? price : 0
        }
    }
}