import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import {
  LoginInputsInterface,
  LoginButtonInterface,
} from '../../interfaces/login.interface';
import {
  loginInputFixtures,
  loginButtonFixture,
} from '../../fixtures/login.fixture';

/**
 * Angular Decorator
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /**
   * Login form
   */
  inputUser: any;
  inputPassword: any;
  inputs: LoginInputsInterface[];
  button: LoginButtonInterface;

  /**
   * Angular Constructor
   * @param router Angular Router
   * @param service Login Service
   */
  constructor(private readonly router: Router, private service: LoginService) {}

  /**
   * Executes on init
   */
  ngOnInit(): void {
    this.inputs = loginInputFixtures;
    this.button = loginButtonFixture;
  }

  /**
   * Function executes on submit
   */
  handleSubmit = (event: any) => {
    event.preventDefault();
    this.service.getUser().subscribe((user) => {
      this.getUser();
      this.validateUser(user);
    });
  };

  /**
   * Function that saves the user input values
   */
  getUser = () => {
    this.inputUser = (<HTMLInputElement>(
      document.querySelector('#inputLoginUser')
    )).value;
    this.inputPassword = (<HTMLInputElement>(
      document.querySelector('#inputLoginPassword')
    )).value;
  };

  /**
   * Function validates user inputs
   * @param user User received from the service
   */
  validateUser = (user: any) => {
    const { username, password } = user;
    if (this.inputUser === username && this.inputPassword === password) {
      this.router.navigate(['welcome']);
    }
  };
}
