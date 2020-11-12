import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  FooterIconsInterface,
  FooterLabelInterface,
} from '../interfaces/footer.interface';

/**
 * Footer icons fixtures
 */
export const footerIconsFixtures: FooterIconsInterface[] = [
  {
    icon: faFacebook,
    ref: 'https://www.facebook.com/diegoarturoy',
  },
  {
    icon: faTwitter,
    ref: 'https://twitter.com/Diegosoccer11',
  },
  {
    icon: faWhatsapp,
    ref: 'https://api.whatsapp.com/send?phone=525566957109',
  },
  {
    icon: faLinkedin,
    ref:
      'https://www.linkedin.com/in/diego-arturo-y%C3%A1%C3%B1ez-vega-792a091a8/',
  },
];

/**
 * Footer label fixture
 */
export const footerLabelFixture: FooterLabelInterface = {
  label: 'Copyright © Diego Yáñez 2020',
};
