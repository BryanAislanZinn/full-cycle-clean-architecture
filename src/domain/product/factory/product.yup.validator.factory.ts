import { ValidatorInterface } from "../../@shared";
import { Product } from "../entity";
import { ProductYupValidator } from "../validator";

export class ProductValidatorFactory {
  static create(): ValidatorInterface<Product> {
    return new ProductYupValidator();
  }
}
