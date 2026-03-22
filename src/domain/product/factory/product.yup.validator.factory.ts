import { ValidatorInterface } from "../../@shared";
import { Product, ProductB } from "../entity";
import { ProductYupValidator } from "../validator";

export class ProductValidatorFactory {
  static create(): ValidatorInterface<Product | ProductB> {
    return new ProductYupValidator();
  }
}
