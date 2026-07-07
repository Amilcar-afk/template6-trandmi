import type { RouteObject } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/home/page';
import Products from '@/pages/products/page';
import Laboratory from '@/pages/laboratory/page';
import Distribution from '@/pages/distribution/page';
import Professional from '@/pages/professional/page';
import Quote from '@/pages/quote/page';
import Contact from '@/pages/contact/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/laboratory',
    element: <Laboratory />,
  },
  {
    path: '/distribution',
    element: <Distribution />,
  },
  {
    path: '/professional',
    element: <Professional />,
  },
  {
    path: '/quote',
    element: <Quote />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;