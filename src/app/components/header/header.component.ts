import { Component, OnInit } from '@angular/core';

import { MenuInterface } from '../../interfaces/menu.interface';
import { menuFixtures } from '../../fixtures/menu.fixture';

/**
 * Angular decorator
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
/**
 * Header component class
 */
export class HeaderComponent implements OnInit {
  /**
   * Menu items
   */
  menu: MenuInterface[];

  constructor() {}

  ngOnInit(): void {
    this.menu = menuFixtures;
  }
}
