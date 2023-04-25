import { IProductService } from "./IProductService";
import { Product } from "./product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService
{
    private dataSource:SimpleDataSource;
    private products:Array<Product>;

    constructor() {
        this.dataSource=new SimpleDataSource();
        this.products=new Array<Product>();
        this.dataSource.getProducts().forEach(p=>this.products.push(p))
    }
    GetById(id: number): Product {
        return this.products.filter(p=>p.id===id)[0];
    }
    GetAllProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): boolean {
        if(product.ProductValidation(product)){
            product.id=this.GenerateID();
            this.products.push(product);
            return true;
          }
          return false;
         
    }
    DeleteProduct(product: Product): boolean {
        let index=this.products.indexOf(product);
        if (index>0) {
            this.products.splice(index,1);
            return true
        }
        return false;
    }
    private GenerateID():number
    {
        return Math.round(Math.random()*1000)-this.products.filter(x=>x.id).sort()[0].id;

    }

}