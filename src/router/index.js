import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  //  User Pages
  {
    path: '/',
    component: () => import('../views/LoginView.vue'),
  },
  //  DashBoard Pages
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/DashboardProducts.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/DashboardProduct.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/DashboardOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/DashboardCoupons.vue'),
      },
      {
        path: 'articles',
        component: () => import('../views/DashboardArticles.vue'),
      },
      {
        path: 'article/:articleId',
        component: () => import('../views/DashboardArticle.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/FrontCart.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
