import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ModalLabelsInterface } from '../../interfaces/modal.interface';
import {
  modalEditedFixture,
  modalDeletedFixture,
} from '../../fixtures/modal.fixture';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

/**
 * Angular decorator
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  /**
   * Id received
   */
  id: number;

  /**
   * Option selected received
   */
  option: string;

  /**
   * Controls the labels
   */
  modal: ModalLabelsInterface;

  /**
   * Controls the modal display
   */
  isShowed: boolean;

  /**
   * Subscription handler
   */
  $subscription: Subscription;

  /**
   * Subscription for labels
   */
  $labelsSubscription: Subscription;

  /**
   * Angular Constructor
   * @param router For router service
   * @param productService For product service
   * @param modalService For modal service
   */
  constructor(
    private readonly router: Router,
    private productService: ProductService,
    private modalService: ModalService
  ) {}

  /**
   * Executes on init
   */
  ngOnInit(): void {
    this.doSubscribe();
    this.labelsSubscribe();
  }
  /**
   * Executes on destroy
   */
  ngOnDestroy() {
    this.$subscription.unsubscribe();
    this.$labelsSubscription.unsubscribe();
  }

  /**
   * Subscription handler
   */
  doSubscribe() {
    this.$subscription = this.modalService
      .getModalStatus()
      .subscribe((response) => {
        this.isShowed = response;
      });
  }

  /**
   * Subscription for labels
   */
  labelsSubscribe() {
    this.$labelsSubscription = this.modalService
      .getModalLabel()
      .subscribe((response) => {
        response === 'edit'
          ? (this.modal = modalEditedFixture)
          : (this.modal = modalDeletedFixture);
        this.option = response;
      });
  }

  /**
   * Close modal
   */
  closeModal() {
    this.modalService.setModalStatus(false);
  }

  /**
   * On yes modal option
   */
  handleYes = () => {
    this.id = this.productService.id;
    switch (this.option) {
      case 'edit':
        this.editProduct();
        break;
      case 'delete':
        this.deleteProduct(this.id);
      default:
        break;
    }
  };

  /**
   * Function for edit the product
   */
  editProduct = () => {
    this.modalService.setModalStatus(false);
    this.router.navigate(['edit']);
  };

  /**
   * Function for delete the product
   */
  deleteProduct = (id: number) => {
    this.productService.deleteProduct(id).subscribe((product) => {
      return product;
    });
    this.modalService.setModalStatus(false);
    setTimeout(() => {
      location.reload();
    }, 1500);
  };
}
