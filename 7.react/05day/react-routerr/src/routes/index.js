import Home from '../pages/Home';
import Hot from '../pages/Hot';
import Pins from '../pages/Pins';
import Type from '../pages/Type';

const routes = [
  {
    path: '/',
    component: Home,
    title: '首页',
  },
  {
    path: '/type',
    component: Type,
    title: '类型',
  },
  {
    path: '/pins',
    component: Pins,
    title: '插脚',
  },
  {
    path: '/hot',
    component: Hot,
    title: '热点',
  },
];

export default routes;
