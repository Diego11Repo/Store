import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  /**
   * Product id received
   */
  @Input() id: number;

  /**
   *
   * @param router For router service
   */
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  handleYes = () => {
    this.router.navigate(['edit']);
  };
}
