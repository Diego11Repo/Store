import { LoginInputsInterface } from '../interfaces/login.interface';
import { LoginButtonInterface } from '../interfaces/login.interface';

/**
 * Labels for login inputs
 */
export const loginInputFixtures: LoginInputsInterface[] = [
  {
    labelType: 'user',
    inputType: 'text',
    inputClass: 'form-control',
    inputId: 'inputLoginUser',
    inputName: 'User',
  },
  {
    labelType: 'user',
    inputType: 'password',
    inputClass: 'form-control',
    inputId: 'inputLoginPassword',
    inputName: 'Password',
  },
];

/**
 * Label for login button
 */
export const loginButtonFixture: LoginButtonInterface = {
  name: 'Submit',
};
