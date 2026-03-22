import { ValidatorInterface } from "../../@shared"
import { Product, ProductB } from "../entity";
import * as yup from "yup";

export class ProductYupValidator implements ValidatorInterface<Product | ProductB> {
  validate(entity: Product | ProductB): void {
    try {
      yup.object().shape({
        id: yup.string().required('Id is required'),
        name: yup.string().required('Name is required'),
        price: yup.number()
                  .typeError("Price is Required")
                  .required('Price is required')
                  .moreThan(0, "Price must be greater than zero"),
      }).validateSync({
          id: entity.id,
          name: entity.name,
          price: entity.price,
      }, {
         abortEarly: false,
      });
    } catch (errors) {
      const yupErrors = errors as yup.ValidationError;
      yupErrors.errors.forEach((error) => {
        entity.notification.addError({
          context: 'product',
          message: error,
        });
      });
    }
  }
}
