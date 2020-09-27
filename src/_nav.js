export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Manage User',
      url: '/user',
      icon: 'fa fa-users',
      children: [
        {
          name: 'Add',
          url: '/user/add',
          icon: 'fa fa-user-plus',
        },
        {
          name: 'List',
          url: '/user/list',
          icon: 'fa fa-list-alt',
        }
      ]
    },
  ],
};
