import { Component, OnInit } from "@angular/core";
import { JumbotronInterface } from 'src/app/interfaces/jumbotron.interface';
import { jumbotronFixture } from "../../fixtures/jumbotron.fixture";

/**
 * Angular decorator
 */
@Component({
  selector: "app-jumbotron",
  templateUrl: "./jumbotron.component.html",
  styleUrls: ["./jumbotron.component.scss"],
})

/**
 * Class for jumbotron component
 */
export class JumbotronComponent implements OnInit {

  /**
   * Labels
   */
  labels: JumbotronInterface

  constructor() {}

  ngOnInit(): void {
    this.labels = jumbotronFixture;
  }
}
