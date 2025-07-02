import OptionsView from '@/views/OptionsView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CompositionView from '@/views/CompositionView.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OptionsView,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/composition',
      name: 'composition',
      component: CompositionView,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/views/PostsView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/posts/:post',
      name: 'post',
      component: () => import('@/views/PostView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
  ],
});

const isAuth = true;

router.beforeEach((to) => {
  if (to.name === 'post' && !isAuth) {
    alert('Авторизуйтесь!');
    return {
      name: 'home',
    };
  }
});

export default router;
