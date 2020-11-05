/**
 * Login forms interface
 */
export interface LoginInputsInterface {
  /**
   * Label type
   */
  labelType: string;
  /**
   * Input type
   */
  inputType: string;
  /**
   * Input class
   */
  inputClass: string;
  /**
   * Input id
   */
  inputId: string;
  /**
   * Input name
   */
  inputName: string;
}

/**
 * Login button interface
 */
export interface LoginButtonInterface {
  /**
   * Button label
   */
  name: string;
}

/**
 * Login user interface
 */
export interface LoginUserInterface {
  /**
   * Username
   */
  username: string;
  /**
   * Password
   */
  password: string;
}
