import { jwtDecode } from 'jwt-decode';
import { TSidebarItem } from '../types/route.type';

const toggleMode = () => {};

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};

export const routeGenerator = (items: TSidebarItem[]) => {
  return items.map((item) => {
    return {
      path: item.path,
      element: item.element,
    };
  });
};

export const sidebarItemsGenerator = (items: TSidebarItem[]) => {
  return items.map((item) => {
    return {
      icon: item.icon,
      title: item.title,
      path: item.path,
    };
  });
};
