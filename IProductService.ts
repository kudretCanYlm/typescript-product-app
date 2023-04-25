import { Product } from "./product";

export interface IProductService
{
    GetById(id:number):Product;
    GetAllProducts():Array<Product>;
    saveProduct(product:Product):boolean;
    DeleteProduct(product:Product):boolean;
}
