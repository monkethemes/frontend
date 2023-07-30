import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/theme/:id',
    component: { render: () => null },
  },
  {
    path: '/upload',
    component: { render: () => null },
  },
  {
    path: '/user/:userId',
    component: { render: () => null }, 
  },
  {
    path: '/edit/:id',
    component: { render: () => null },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;