import React from 'react';

const nari19 = React.lazy(() => import('./views/nari19'));
const MDediter = React.lazy(() => import('./views/App/MDediter'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/nari19', name: 'nari19', component: nari19 },
  { path: '/app/md-editer', name: 'MD editer', component: MDediter }
];

export default routes;
