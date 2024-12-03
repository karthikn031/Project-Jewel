// assets

import { IconCopyright } from '@tabler/icons-react';

import { IconSettingsPlus, IconSquareRoundedPlus } from '@tabler/icons-react';
// constant
const icons = {
  IconCopyright
};

const icons1 = {
  IconSquareRoundedPlus
};
const icons2 = {
  IconSettingsPlus
};

const loginUserName = localStorage.getItem('userName');
const loginUserType = localStorage.getItem('userType');
const storedScreens = JSON.parse(localStorage.getItem('screens')) || [];
console.log('THE SCREENS FROM LOCALSTORAGE ARE:', storedScreens);

const screenMappings = {
  'create Shop': {
    id: 'company',
    title: 'Create Shop',
    type: 'item',
    url: '/companysetup/createcompany',
    icon: icons1.IconSquareRoundedPlus
  },
  'Shop setup': {
    id: 'companySetup',
    title: 'Shop Setup',
    type: 'item',
    url: '/companysetup/companysetup',
    icon: icons2.IconSettingsPlus
  }
};

const filteredChildren =
  loginUserType === 'admin'
    ? Object.values(screenMappings)
    : storedScreens.map((screen) => screenMappings[screen.toLowerCase()]).filter(Boolean);

const pages = {
  id: 'organization',
  title: 'Organization',
  // caption: 'Company',
  type: 'group',
  children: [
    {
      id: 'companySetup',
      title: 'Shop Setup',
      type: 'collapse',
      icon: icons.IconCopyright,
      children: filteredChildren
    }
  ]
};

export default pages;
