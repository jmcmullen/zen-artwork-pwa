const IndexPage = () =>
  import(/* webpackChunkName: "index" */ './pages/IndexPage').then(
    m => m.default,
  );
const GallaryPage = () =>
  import(/* webpackChunkName: "gallary" */ './pages/GallaryPage').then(
    m => m.default,
  );

export default [
  {
    path: '/',
    name: 'main.index',
    component: IndexPage,
  },
  {
    path: '/gallary',
    name: 'main.gallary',
    component: GallaryPage,
  },
];
