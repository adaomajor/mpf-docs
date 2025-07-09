export default {
  // site-level options
  lang: 'en-US',
  title: 'MPF documentation',
  description: 'A lightweight and powerful PHP framework | Adão Major',
  
  themeConfig: {
    logo: '/logo.ico',
    nav: [
      { text: 'MPF - github', link: 'https://github.com/adaomajor/mpf' },
      { text: 'Adão Major',
        items: [
              { text: 'github', link: 'https://github.com/adaomajor' },
              { text: 'youtube', link: 'https://www.youtube.com/@adaomajor' },
              { text: 'linkedin', link: 'https://www.linkedin.com/in/adaomajor' },
              { text: 'facebook', link: 'https://facebook.com/adao.major.0' },
              { text: 'X - Twitter', link: 'https://x.com/gh0xt_am' },
              { text: 'buy me a coffee', link: 'https://buymeacoffee.com/adaomajor'}
        ]
      }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Instalation', link: '/intro/instalation' },
          { text: 'CLI', link: '/intro/cli' },
        ]
      },
      {
        text: 'Router',
        items: [
          { text: 'Router', link: '/routes/' },
          { text: 'Anonymous Function', link: '/routes/#anonymous-function' },
          { text: 'Controller', link: '/routes/#passing-controller' },
          { text: 'Url Parameters', link: '/routes/#passing-parameters' },
          { text: 'Views', link: '/routes/#views' },
          { text: 'Fallback', link: '/routes/#fallback' },
          { text: 'Static Files', link: '/routes/#static-files' },
        ]
      },
      {
        text: 'Request & Response',
        items: [
          { text: 'Req', link: '/req-res/req' },
          { text: 'Res', link: '/req-res/res' },
        ]
      },
      {
        text: 'Views',
        items: [
          { text: 'View', link: '/views/' },
          { text: 'Creating View', link: '/views/#creating-view' },
          { text: 'Setting Data', link: '/views/#passing-data-through-view' },
          { text: 'Getting Data', link: '/views/#getting-data-through-view' }
        ]
      },
      {
        text: 'Controller', items : [
          { text: 'Controller', link: '/controller/' },
          { text: 'Creating Controller', link: '/controller/#creating-controller' },
          { text: 'Calling Controller Method', link: '/controller/#calling-controller-method' },
        ]
      },
      {
        text: 'Model',
        items: [
          { text: 'Models', link: '/model/' },
          { text: 'Migrate', link: '/model/' },
          { text: 'Model Fields Type', link: '/model/#model-fields-type' },
          { text: 'Saving Data', link: '/model/saving' },
          { text: 'Finding Data', link: '/model/finding' },
          { text: 'Deleting Data', link: '/model/deleting' },
          { text: 'Foreign Key', link: '/model/fk' },
          { text: 'Join', link: '/model/join' }
        ]
      }
    ]
  }
}