import { MenuInterface } from "../interfaces/menu.interface";
import {
  faBars,
  faBook,
  faGift,
  faLaptop,
  faShoppingCart,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Menu fixtures
 */
export const menuFixtures: MenuInterface[] = [
  {
    name: "Products",
    icon: faLaptop,
  },
  {
    name: "Promotions",
    icon: faGift,
  },
  {
    name: "Most Liked",
    icon: faThumbsUp,
  },
  {
    name: "Books",
    icon: faBook,
  },
];

/**
 * Collapse menu fixtures
 */
export const sideMenuFixtures: MenuInterface[] = [
  {
    name: "Cart",
    icon: faShoppingCart,
  },
];
