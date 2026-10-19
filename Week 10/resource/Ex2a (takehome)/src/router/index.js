import { createRouter, createWebHistory } from 'vue-router'

import MainMenu from '../components/MainMenu.vue';
import RatingSelector from '../components/RatingSelector.vue';
import CourseReview from '../components/CourseReview.vue';


const history = createWebHistory()
const routes = [
  {
    path: '/',
    component: MainMenu    // this component will appear when path is /
  },
  {
    path: '/RatingSelector/',
    component: RatingSelector
  },
  {
    path: '/CourseReview/',
    component: CourseReview
  },
]

const router = createRouter({
    history,
    routes
  });

export default router;