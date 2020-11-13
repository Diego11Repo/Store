import {
  JumbotronInterface,
  JumbotronListInterface,
} from '../interfaces/jumbotron.interface';

/**
 * Jumbotron fixtures
 */
export const jumbotronFixture: JumbotronInterface = {
  title: 'Welcome !',
  subtitle:
    'In this system you can manage your products provided by an API-REST, view all the products and enjoy edit them.',
};

/**
 * Jumbotron list
 */
export const jumbotronListFixture: JumbotronListInterface[] = [
  {
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    name: 'Angular 9',
  },
  {
    img:
      'https://seeklogo.com/images/F/font-awesome-logo-3010FE2434-seeklogo.com.png',
    name: 'Font Awesome',
  },
  {
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
    name: 'Bootstrap',
  },
  {
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    name: 'TypeScript',
  },
  {
    img: 'https://material.angular.io/assets/img/angular-material-logo.svg',
    name: 'Angular Material',
  },
  {
    img: 'https://nodejs.org/static/images/favicons/apple-touch-icon.png',
    name: 'Node Js',
  },
];
