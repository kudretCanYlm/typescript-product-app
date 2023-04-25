export class Product{
    
    constructor(
        public id?:number,
        public name?:string,
        public category?:string,
        public price?:number
        )
        { }
    ProductValidation(product:Product):boolean
    {     
       return  product.category!=null  && product.name!=null && product.price>0  ? true:false;    
    }

}





