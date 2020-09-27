import React from 'react';

const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard'));
const Profile = React.lazy(() => import('./containers/Profile'));
const ChangePass = React.lazy(() => import('./containers/Profile/ChangePassword'));
const UserForm = React.lazy(() => import('./containers/Users/UserForm'));
const UserList = React.lazy(() => import('./containers/Users/UserList'));
const UserDetails = React.lazy(() => import('./containers/Users/UserDetails'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Prifile', component: Profile },
  { path: '/change-password', name: 'Change Password', component: ChangePass },

  //------------------------------ Manage User --------------------------------
  { path: '/user', exact: true, name: "Users", component: UserList },
  { path: '/user/add', name: "Add", component: UserForm },
  { path: '/user/edit/:userId', name: "Edit", component: UserForm },
  { path: '/user/list', name: "List", component: UserList },
  { path: '/user/details/:userId', name: "Details", component: UserDetails },

];

export default routes;
