import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type TSidebarItem = {
  icon: IconType;
  title: string;
  path: string;
  element: ReactNode;
};
