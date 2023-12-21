import IncomeTaxView from 'Frontend/views/helloworld/IncomeTaxView';
import MainLayout from 'Frontend/views/MainLayout.js';
import { createBrowserRouter, RouteObject } from 'react-router-dom';


export const routes = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <IncomeTaxView />, handle: { title: 'Hello World' } },
    ],
  },
] as RouteObject[];

export default createBrowserRouter(routes);
