import { Component, OnInit } from '@angular/core';

import {
  FooterIconsInterface,
  FooterLabelInterface,
} from '../../interfaces/footer.interface';
import {
  footerIconsFixtures,
  footerLabelFixture,
} from '../../fixtures/footer.fixture';

/**
 * Angular Decorator
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

/**
 * Footer class component
 */
export class FooterComponent implements OnInit {
  /**
   * Icons for footer
   */
  icons: FooterIconsInterface[];

  /**
   * Label for footer
   */
  label: FooterLabelInterface;

  constructor() {}

  ngOnInit(): void {
    this.icons = footerIconsFixtures;
    this.label = footerLabelFixture;
    console.log(this.icons);
  }
}
