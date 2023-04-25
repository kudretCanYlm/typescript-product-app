import { Product } from "./product";
import { ProductService } from "./ProductService";


let _productService=new ProductService();
let result;

result=_productService.GetAllProducts();
//result=_productService.GetById(3);
let p=new Product(null,"huawei p10","phone",550);

var state:boolean=_productService.saveProduct(p);
console.log(state);
console.log(result);