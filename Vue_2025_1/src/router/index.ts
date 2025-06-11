import OptionsView from '@/views/OptionsView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CompositionView from '@/views/CompositionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OptionsView,
    },
    {
      path: '/composition',
      name: 'composition',
      component: CompositionView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
