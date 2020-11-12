import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
   * Variable for show progress status
   */
  onProgress: boolean;

  /**
   * Variable for show the succes status
   */
  onSuccess: boolean;

  /**
   *
   * @param productService Product Service
   */
  constructor(
    private productService: ProductService,
    private readonly router: Router
  ) {}

  /**
   * Executes on init
   */
  ngOnInit(): void {
    this.onProgress = false;
    this.onSuccess = false;
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
    this.onProgress = true;
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
        return product;
      });
    setTimeout(() => {
      this.onProgress = false;
      this.showSuccess();
    }, 1500);
  }

  /**
   * Show success status
   */
  showSuccess() {
    this.onSuccess = true;
    setTimeout(() => {
      this.router.navigate(['/products']);
    }, 4000);
  }
}
