import {NavItem} from './types';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Starter',
    iconName: 'home',
    bgcolor: 'primary',
    route: '/starter',
  },
  {
    navCap: 'Other',
  },

  {
    displayName: 'Disabled',
    iconName: 'hide_source',
    route: '/disabled',
    bgcolor: 'accent',
    disabled: true,
  },
  {
    displayName: 'Chip',
    iconName: 'mood',
    bgcolor: 'warning',
    route: '/',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: '9',
  },
  {
    displayName: 'Outlined',
    iconName: 'mood',
    bgcolor: 'success',
    route: '/',
    chip: true,
    chipClass: 'b-1 border-primary text-primary',
    chipContent: 'outlined',
  },
  {
    displayName: 'External Link',
    bgcolor: 'error',
    iconName: 'star',
    route: 'https://www.google.com/',
    external: true,
  },
];
