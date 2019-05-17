import React from 'react';

const MDediter = React.lazy(() => import('./views/App/MDediter'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/app/md-editer', name: 'MD editer', component: MDediter }
];

export default routes;
