import { Component, OnInit } from "@angular/core";

import { MenuInterface } from "../../interfaces/menu.interface";
import { menuFixtures, sideMenuFixtures } from "../../fixtures/menu.fixture";

/**
 * Angular decorator
 */
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
/**
 * Header component class
 */
export class HeaderComponent implements OnInit {

  /**
   * Menu items
   */
  menu: MenuInterface[];

  /**
   * Side items
   */
  sideMenu: MenuInterface[];

  constructor() {}

  ngOnInit(): void {
    this.menu = menuFixtures;
    this.sideMenu = sideMenuFixtures;
  }
}
