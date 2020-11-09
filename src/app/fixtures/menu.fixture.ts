import { MenuInterface } from '../interfaces/menu.interface';
import {
  faHome,
  faBook,
  faGift,
  faLaptop,
  faShoppingCart,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Menu fixtures
 */
export const menuFixtures: MenuInterface[] = [
  {
    name: 'Home',
    icon: faHome,
    path: 'welcome',
  },
  {
    name: 'Products',
    icon: faLaptop,
    path: 'products',
  },
  {
    name: 'Promotions',
    icon: faGift,
    path: 'promotions',
  },
  {
    name: 'Most Liked',
    icon: faThumbsUp,
    path: 'liked',
  },
  {
    name: 'Books',
    icon: faBook,
    path: 'books',
  },
];
