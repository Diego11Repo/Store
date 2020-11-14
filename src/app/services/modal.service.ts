import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Angular Decorator
 */
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  /**
   * Show / Hide the modal component
   */
  private readonly modalStatus = new BehaviorSubject(false);

  /**
   * Edit / Delete for modal component
   */
  private readonly modalLabels = new BehaviorSubject('');
  constructor() {}

  /**
   * Get the modal status
   */
  getModalStatus(): Observable<boolean> {
    return this.modalStatus.asObservable();
  }

  /**
   * Set the modal status
   */
  setModalStatus(value: boolean) {
    this.modalStatus.next(value);
  }

  /**
   * Get the modal label
   */
  getModalLabel(): Observable<string> {
    return this.modalLabels.asObservable();
  }

  /**
   * Set the modal label
   */
  setModalLabel(value: string) {
    this.modalLabels.next(value);
  }
}
