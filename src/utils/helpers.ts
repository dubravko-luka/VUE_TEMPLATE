import { v1 } from '@/router/v1/config';
import { useRouter } from 'vue-router';
import { menu } from './constants';
import type { TypeBreadcrumb } from '@/types/types';

export const validateRouter = async (currentPathname: string) => {
  const router = useRouter();

  let flag = false;
  await Object.entries(v1).map(([, path]) => {
    if (currentPathname === path) {
      flag = true;
    }
    return false;
  });

  if (!flag) router.push(v1.dashboard);
};

export const getBreadcrumb = (currentPathname: string): TypeBreadcrumb[] => {
  return menu.filter((item) => item.to === currentPathname) ?? [];
};
