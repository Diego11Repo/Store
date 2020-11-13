import { Component, OnInit } from '@angular/core';

import {
  JumbotronInterface,
  JumbotronListInterface,
} from 'src/app/interfaces/jumbotron.interface';
import {
  jumbotronFixture,
  jumbotronListFixture,
} from '../../fixtures/jumbotron.fixture';

/**
 * Angular decorator
 */
@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})

/**
 * Class for jumbotron component
 */
export class JumbotronComponent implements OnInit {
  /**
   * Labels
   */
  labels: JumbotronInterface;

  /**
   * Labels for list
   */
  list: JumbotronListInterface[];

  constructor() {}

  ngOnInit(): void {
    this.labels = jumbotronFixture;
    this.list = jumbotronListFixture;
  }
}
