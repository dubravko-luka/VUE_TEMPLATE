import { createRouter, createWebHistory } from 'vue-router';
import { v1 } from './config';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Users from '@/views/Users/Users.vue';
import Products from '@/views/Products/Products.vue';
import Orders from '@/views/Orders/Orders.vue';
import Categories from '@/views/Categories/Categories.vue';
import Settings from '@/views/Settings/Settings.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: v1.dashboard,
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: v1.users,
      name: 'Users',
      component: Users
    },
    {
      path: v1.products,
      name: 'Products',
      component: Products
    },
    {
      path: v1.orders,
      name: 'Orders',
      component: Orders
    },
    {
      path: v1.categories,
      name: 'Categories',
      component: Categories
    },
    {
      path: v1.settings,
      name: 'Settings',
      component: Settings
    }
  ]
});

export default router;
