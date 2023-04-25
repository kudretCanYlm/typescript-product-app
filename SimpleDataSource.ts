import { Product } from "./product";

export class SimpleDataSource
{
    private products:Array<Product>;

    constructor() {
        this.products=new Array<Product>
        (
            new Product(1,"samsung s5","telefon",1000),
            new Product(2,"samsung s6","telefon",1500),
            new Product(3,"samsung s7","telefon",2000),
            new Product(4,"samsung s8","telefon",2500),
            new Product(5,"samsung s9","telefon",3000)
        )
    }
    getProducts():Array<Product>
    {
        return this.products;
    }
}