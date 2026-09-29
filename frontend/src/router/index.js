import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LearnNumberView from '../views/LearnNumberView.vue';
import LearnLetterView from '../views/LearnAlphabetView.vue';
import LearnColorView from '../views/LearnColorView.vue';
import LearnShapeView from '../views/LearnShapeView.vue';
import LearnAnimalView from '../views/LearnAnimalView.vue';
import LearnFruitView from '../views/LearnFruitView.vue';
import LearnVegetableView from '../views/LearnVegetableView.vue';
import LearnBodyPartView from '../views/LearnBodyPartView.vue';
import LearnClothingView from '../views/LearnClothingView.vue';
import LearnTransportView from '../views/LearnTransportView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/numbers',
    name: 'numbers',
    component: LearnNumberView,
    meta: { title: 'Learn Numbers' }
  },
  {
    path: '/letters',
    name: 'letters',
    component: LearnLetterView,
    meta: { title: 'Learn Letters' }
  },
  {
    path: '/colors',
    name: 'colors',
    component: LearnColorView,
    meta: { title: 'Learn Colors' }
  },
  {
    path: '/shapes',
    name: 'shapes',
    component: LearnShapeView,
    meta: { title: 'Learn Shapes' }
  },
  {
    path: '/animals',
    name: 'animals',
    component: LearnAnimalView,
    meta: { title: 'Learn Animals' }
  },
  {
    path: '/fruits',
    name: 'fruits',
    component: LearnFruitView,
    meta: { title: 'Learn Fruits' }
  },
  {
    path: '/vegetables',
    name: 'vegetables',
    component: LearnVegetableView,
    meta: { title: 'Learn Vegetables' }
  },
  {
    path: '/body-parts',
    name: 'body-parts',
    component: LearnBodyPartView,
    meta: { title: 'Learn Body Parts' }
  },
  {
    path: '/clothing',
    name: 'clothing',
    component: LearnClothingView,
    meta: { title: 'Learn Clothing' }
  },
  {
    path: '/transportation',
    name: 'transportation',
    component: LearnTransportView,
    meta: { title: 'Learn Transportation' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;