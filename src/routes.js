import React from 'react';

const nari19 = React.lazy(() => import('./views/nari19'));
const MDediter = React.lazy(() => import('./views/App/MDediter'));
const MemoPrint = React.lazy(() => import('./views/App/MemoPrint'));
// =========================================================
// const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/Base/Cards'));
// const Carousels = React.lazy(() => import('./views/Base/Carousels'));
// const Collapses = React.lazy(() => import('./views/Base/Collapses'));
// const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
// const Forms = React.lazy(() => import('./views/Base/Forms'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/nari19', name: 'nari19', component: nari19 },
  { path: '/app/md-editer', name: 'MD editer', component: MDediter },
  { path: '/app/memo-print', name: 'Memo Print', component: MemoPrint },
  // =========================================================
  // { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/theme', exact: true, name: 'Theme', component: Colors },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
];

export default routes;
