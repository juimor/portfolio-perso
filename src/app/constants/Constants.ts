import { ImgItem } from '../models/imgItem.model';
import { MenuItem } from '../models/menuItem.model';

export const homepageMenuItems: MenuItem[] = [
  { label: 'PERSONAL PROJECTS', link: '/works' },
];

export const projectsMenuItems: MenuItem[] = [
  {
    label: '365',
    link: '/365',
    backgroundTitle: '365v2.jpg',
  },
  { label: 'SAMEDI', link: '/samedi', backgroundTitle: 'samedi.gif' },
  {
    label: 'PORSCHE',
    link: '/porsche',
    backgroundTitle: 'porshe.jpg',
  },
  { label: 'CEBE', link: '/CEBE', backgroundTitle: 'CEBE.jpg' },
  {
    label: 'الظلال والأضواء',
    link: '/ombre-et-lumieres',
    backgroundTitle: 'ombresetlumieres.png',
  },
  { label: 'PORTRAITS', link: '/portraits', backgroundTitle: 'portraits.jpg' },
];

//synthetiser navbarItems et weekItems

export const navbar365Items: MenuItem[] = [
  {
    label: 'LUNDI',
    link: '/Lundi',
    items: [
      { name: 'LUNDI', url: '365/LUNDI/LUNDI.jpg' },
      { name: 'LUNDI-1', url: '365/LUNDI/LUNDI-1.jpg' },
      { name: 'LUNDI-2', url: '365/LUNDI/LUNDI-2.jpg' },
      { name: 'LUNDI-2-1', url: '365/LUNDI/LUNDI-2-1.jpg' },
      { name: 'LUNDI-2-2', url: '365/LUNDI/LUNDI-2-2.jpg' },
      { name: 'LUNDI-2-3', url: '365/LUNDI/LUNDI-2-3.jpg' },
      { name: 'LUNDI-2-4', url: '365/LUNDI/LUNDI-2-4.jpg' },
      { name: 'LUNDI-2-5', url: '365/LUNDI/LUNDI-2-5.jpg' },
      { name: 'LUNDI-2-6', url: '365/LUNDI/LUNDI-2-6.jpg' },
      { name: 'LUNDI-2-7', url: '365/LUNDI/LUNDI-2-7.jpg' },
      { name: 'LUNDI-2-8', url: '365/LUNDI/LUNDI-2-8.jpg' },
      { name: 'LUNDI-2-9', url: '365/LUNDI/LUNDI-2-9.jpg' },
      { name: 'LUNDI-2-10', url: '365/LUNDI/LUNDI-2-10.jpg' },
      { name: 'LUNDI-2-11', url: '365/LUNDI/LUNDI-2-11.jpg' },
      { name: 'LUNDI-3', url: '365/LUNDI/LUNDI-3.jpg' },
      { name: 'LUNDI-3-1', url: '365/LUNDI/LUNDI-3-1.jpg' },
      { name: 'LUNDI-3-2', url: '365/LUNDI/LUNDI-3-2.jpg' },
      { name: 'LUNDI-3-3', url: '365/LUNDI/LUNDI-3-3.jpg' },
      { name: 'LUNDI-3-4', url: '365/LUNDI/LUNDI-3-4.jpg' },
      { name: 'LUNDI-3-5', url: '365/LUNDI/LUNDI-3-5.jpg' },
      { name: 'LUNDI-3-6', url: '365/LUNDI/LUNDI-3-6.jpg' },
      { name: 'LUNDI-3-7', url: '365/LUNDI/LUNDI-3-7.jpg' },
      { name: 'LUNDI-3-8', url: '365/LUNDI/LUNDI-3-8.jpg' },
      { name: 'LUNDI-3-9', url: '365/LUNDI/LUNDI-3-9.jpg' },
      { name: 'LUNDI-4', url: '365/LUNDI/LUNDI-4.jpg' },
      { name: 'LUNDI-4-1', url: '365/LUNDI/LUNDI-4-1.jpg' },
      { name: 'LUNDI-4-2', url: '365/LUNDI/LUNDI-4-2.jpg' },
      { name: 'LUNDI-4-3', url: '365/LUNDI/LUNDI-4-3.jpg' },
      { name: 'LUNDI-4-4', url: '365/LUNDI/LUNDI-4-4.jpg' },
      { name: 'LUNDI-4-5', url: '365/LUNDI/LUNDI-4-5.jpg' },
      { name: 'LUNDI-4-6', url: '365/LUNDI/LUNDI-4-6.jpg' },
      { name: 'LUNDI-4-7', url: '365/LUNDI/LUNDI-4-7.jpg' },
      { name: 'LUNDI-4-8', url: '365/LUNDI/LUNDI-4-8.jpg' },
      { name: 'LUNDI-4-9', url: '365/LUNDI/LUNDI-4-9.jpg' },
      { name: 'LUNDI-4-10', url: '365/LUNDI/LUNDI-4-10.jpg' },
      { name: 'LUNDI-4-11', url: '365/LUNDI/LUNDI-4-11.jpg' },
      { name: 'LUNDI-4-12', url: '365/LUNDI/LUNDI-4-12.jpg' },
      { name: 'LUNDI-4-13', url: '365/LUNDI/LUNDI-4-13.jpg' },
      { name: 'LUNDI-5', url: '365/LUNDI/LUNDI-5.jpg' },
      { name: 'LUNDI-5-2', url: '365/LUNDI/LUNDI-5-2.jpg' },
      { name: 'LUNDI-5-3', url: '365/LUNDI/LUNDI-5-3.jpg' },
      { name: 'LUNDI-5-4', url: '365/LUNDI/LUNDI-5-4.jpg' },
      { name: 'LUNDI-5-5', url: '365/LUNDI/LUNDI-5-5.jpg' },
      { name: 'LUNDI-5-6', url: '365/LUNDI/LUNDI-5-6.jpg' },
      { name: 'LUNDI-6', url: '365/LUNDI/LUNDI-6.jpg' },
      { name: 'LUNDI-6-1', url: '365/LUNDI/LUNDI-6-1.jpg' },
      { name: 'LUNDI-6-2', url: '365/LUNDI/LUNDI-6-2.jpg' },
      { name: 'LUNDI-6-3', url: '365/LUNDI/LUNDI-6-3.jpg' },
      { name: 'LUNDI-7', url: '365/LUNDI/LUNDI-7.jpg' },
      { name: 'LUNDI-7-1', url: '365/LUNDI/LUNDI-7-1.jpg' },
      { name: 'LUNDI-7-2', url: '365/LUNDI/LUNDI-7-2.jpg' },
      { name: 'LUNDI-7-3', url: '365/LUNDI/LUNDI-7-3.jpg' },
      { name: 'LUNDI-7-4', url: '365/LUNDI/LUNDI-7-4.jpg' },
      { name: 'LUNDI-8', url: '365/LUNDI/LUNDI-8.jpg' },
      { name: 'LUNDI-9', url: '365/LUNDI/LUNDI-9.jpg' },
      { name: 'LUNDI-10', url: '365/LUNDI/LUNDI-10.jpg' },
    ],
  },
  {
    label: 'MARDI',
    link: '/Mardi',
    items: [
      { name: 'paysage.jpg', url: 'paysage' },
      { name: 'paysage.jpg', url: 'paysage' },
      { name: '344.gif', url: 'portrait' },
      { name: 'paysage.jpg', url: 'paysage' },
    ],
  },
  {
    label: 'MERCREDI',
    link: '/Mercredi',
    items: [
      { name: '344.gif', url: 'portrait' },
      { name: 'paysage.jpg', url: 'paysage' },
      { name: '344.gif', url: 'portrait' },
    ],
  },
  {
    label: 'JEUDI',
    link: '/Jeudi',
    items: [
      { name: '344.gif', url: 'portrait' },
      { name: '344.gif', url: 'portrait' },
      { name: '344.gif', url: 'portrait' },
      { name: '344.gif', url: 'portrait' },
    ],
  },
  {
    label: 'VENDREDI',
    link: '/Vendredi',
    items: [
      { name: 'logo.png', url: 'paysage' },
      { name: 'logo.png', url: 'paysage' },
      { name: 'logo.png', url: 'paysage' },
      { name: 'logo.png', url: 'paysage' },
    ],
  },
];
