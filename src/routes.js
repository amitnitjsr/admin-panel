import React from 'react';

const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard'));
const Profile = React.lazy(() => import('./containers/Profile'));
const ChangePass = React.lazy(() => import('./containers/Profile/ChangePassword'));
const UserForm = React.lazy(() => import('./containers/Users/UserForm'));
const UserList = React.lazy(() => import('./containers/Users/UserList'));
const UserDetails = React.lazy(() => import('./containers/Users/UserDetails'));

const CMSForm = React.lazy(() => import('./containers/CMS/CMSForm'));
const CMSList = React.lazy(() => import('./containers/CMS/CMSList'));
const CMSDetails = React.lazy(() => import('./containers/CMS/CMSDetails'));

const EmailForm = React.lazy(() => import('./containers/Email/EmailForm'));
const EmailList = React.lazy(() => import('./containers/Email/EmailList'));
const EmailDetails = React.lazy(() => import('./containers/Email/EmailDetails'));

const SettingForm = React.lazy(() => import('./containers/Setting/SettingForm'));


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

  //------------------------------ Manage CMS --------------------------------
  { path: '/cms', exact: true, name: "CMS", component: CMSList },
  { path: '/cms/add', name: "Add", component: CMSForm },
  { path: '/cms/edit/:cmsId', name: "Edit", component: CMSForm },
  { path: '/cms/list', name: "List", component: CMSList },
  { path: '/cms/details/:cmsId', name: "Details", component: CMSDetails },

  //------------------------------ Manage Email --------------------------------
  { path: '/email', exact: true, name: "Email", component: EmailList },
  { path: '/email/add', name: "Add", component: EmailForm },
  { path: '/email/edit/:emailId', name: "Edit", component: EmailForm },
  { path: '/email/list', name: "List", component: EmailList },
  { path: '/email/details/:emailId', name: "Details", component: EmailDetails },

  //------------------------------ Manage Setting --------------------------------
  { path: '/setting', exact: true, name: "Setting", component: SettingForm },

];

export default routes;
