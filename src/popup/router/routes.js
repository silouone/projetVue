import Home from './pages/Home'
import Categories from './pages/Categories'
import Favoris from './pages/Favoris'
export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/Favoris',
    name: 'Favoris',
    component: Favoris
  }
];
