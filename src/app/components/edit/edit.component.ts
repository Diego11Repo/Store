import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
/**
 * Edit Component
 */
export class EditComponent implements OnInit {
  /**
   * Product Received
   */
  product: any;

  /**
   * Variable for show modal
   */
  showModal: boolean;

  /**
   *
   * @param productService Product Service
   */
  constructor(private productService: ProductService) {}

  /**
   * Executes on init
   */
  ngOnInit(): void {
    this.showModal = false;
    this.initProduct();
  }

  /**
   * Initialize the product
   */
  initProduct() {
    this.product = {
      name: '',
      img: '',
      description: '',
      price: '',
    };
    const id = this.productService.id;
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  /**
   * Executes on submit the product edited
   */
  onSubmit() {
    this.showModal = true;
    const productName = (<HTMLInputElement>(
      document.querySelector('#product-name')
    )).value;
    const productImg = (<HTMLInputElement>(
      document.querySelector('#product-img')
    )).value;
    const productDescription = (<HTMLInputElement>(
      document.querySelector('#product-description')
    )).value;
    const productPrice = (<HTMLInputElement>(
      document.querySelector('#product-price')
    )).value;
    const productUpdated = {
      name: productName,
      price: productPrice,
      img: productImg,
      description: productDescription,
    };
    this.validateInputs(
      productName,
      productImg,
      productDescription,
      productPrice,
      productUpdated
    );
  }

  /**
   * Validates the input of the edited product
   */
  validateInputs(
    productName: string,
    productImg: string,
    productDescription: string,
    productPrice: string,
    productUpdated: any
  ) {
    productName !== ''
      ? (productUpdated.name = productName)
      : (productUpdated.name = this.product.name);
    productImg !== ''
      ? (productUpdated.img = productImg)
      : (productUpdated.img = this.product.img);
    productDescription !== ''
      ? (productUpdated.description = productDescription)
      : (productUpdated.description = this.product.description);
    productPrice !== ''
      ? (productUpdated.price = productPrice)
      : (productUpdated.price = this.product.price);
    this.productService
      .editProduct(this.product.id, productUpdated)
      .subscribe((product) => {
        console.log(product);
      });
  }
}
