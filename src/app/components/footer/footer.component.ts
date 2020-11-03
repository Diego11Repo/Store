import { Component, OnInit } from '@angular/core';

import { FooterInterface } from '../../interfaces/footer.interface';
import { footerFixtures } from '../../fixtures/footer.fixture';

/**
 * Angular Decorator
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

/**
 * Footer class component
 */
export class FooterComponent implements OnInit {

  /**
   * Labels for footer
   */
  labels: FooterInterface[]

  constructor() { }

  ngOnInit(): void {
    this.labels = footerFixtures;
  }

}
