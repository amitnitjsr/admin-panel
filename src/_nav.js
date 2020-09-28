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
    {
      name: 'Manage CMS',
      url: '/cms',
      icon: 'fa fa-cog',
      children: [
        {
          name: 'Add',
          url: '/cms/add',
          icon: 'fa fa-user-plus',
        },
        {
          name: 'List',
          url: '/cms/list',
          icon: 'fa fa-list-alt',
        }
      ]
    },
    {
      name: 'Email Template',
      url: '/email',
      icon: 'fa fa-envelope',
      children: [
        {
          name: 'Add',
          url: '/email/add',
          icon: 'fa fa-user-plus',
        },
        {
          name: 'List',
          url: '/email/list',
          icon: 'fa fa-list-alt',
        }
      ]
    },
    {
      name: 'Manage Setting',
      url: '/setting',
      icon: 'fa fa-cogs',
      // children: [
      //   {
      //     name: 'Add',
      //     url: '/user/add',
      //     icon: 'fa fa-user-plus',
      //   },
      //   {
      //     name: 'List',
      //     url: '/user/list',
      //     icon: 'fa fa-list-alt',
      //   }
      // ]
    },
  ],
};
