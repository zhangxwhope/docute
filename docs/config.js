const langs = [
  { title: 'English', path: '/', matchPath: /^\// },
  { title: '简体中文', path: '/zh-cn/', matchPath: /^\/zh-cn/ }
]

docute.init({
  title: 'Docute',
  nav: {
    default: [
      // 首页
      {title: 'Home', path: '/'},
      // 关于
      {title: 'About', path: '/about'},
      {
        title: 'Languages',
        type: 'dropdown',
        items: langs
      },
    ],
    'zh-cn': [
      {title: '首页', path: '/zh-cn/'},
      {title: '关于', path: '/zh-cn/about'},
      {
        title: '语言选择',
        type: 'dropdown',
        items: langs
      },
    ]
  }
})