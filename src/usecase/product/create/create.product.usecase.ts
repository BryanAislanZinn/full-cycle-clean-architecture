import { Product, ProductFactory, ProductRepositoryInterface } from "../../../domain/product";
import { InputCreateProductDto, OutputCreateProductDto } from "./create.product.dto";

export class CreateProductUseCase {
  private productRepository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository;
  }

  async execute(input: InputCreateProductDto): Promise<OutputCreateProductDto> {
    const productFactory = ProductFactory.create(
      input.type,
      input.name,
      input.price,
    );

    const product = new Product(
      productFactory.id,
      productFactory.name,
      productFactory.price,
    );

    await this.productRepository.create(product);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
    }
  }
}
