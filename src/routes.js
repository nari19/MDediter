import React from 'react';

const MDediter = React.lazy(() => import('./MDediter'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'MD editer', component: MDediter }
];

export default routes;
