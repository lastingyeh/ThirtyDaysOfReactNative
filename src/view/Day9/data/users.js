const users = [
  {
    thumbnail:
      'https://technical.ly/philly/wp-content/uploads/sites/2/2014/03/foundingfather-octocat.png',
    title: 'MSFT in Business CA',
    subTitle: '@msft_businessCA',
    recommended: true
  },
  {
    thumbnail:
      'http://384uqqh5pka2ma24ild282mv.wpengine.netdna-cdn.com/wp-content/uploads/2016/06/github-inspectocat.png',
    title: 'RE/MAX First',
    subTitle: '@ReMaxFirst2',
    recommended: false
  },
  {
    thumbnail: 'http://www.drtomwalker.com/img/github-8-256.png',
    title: 'Mirela Rahneva',
    subTitle: '@MirelaRahneva',
    recommended: false
  },
  {
    thumbnail:
      'https://technical.ly/philly/wp-content/uploads/sites/2/2014/03/foundingfather-octocat.png',
    title: 'MSFT in Business CA',
    subTitle: '@msft_businessCA',
    recommended: true
  },
  {
    thumbnail:
      'http://384uqqh5pka2ma24ild282mv.wpengine.netdna-cdn.com/wp-content/uploads/2016/06/github-inspectocat.png',
    title: 'RE/MAX First',
    subTitle: '@ReMaxFirst2',
    recommended: false
  },
  {
    thumbnail: 'http://www.drtomwalker.com/img/github-8-256.png',
    title: 'Mirela Rahneva',
    subTitle: '@MirelaRahneva',
    recommended: false
  },
  {
    thumbnail:
      'https://technical.ly/philly/wp-content/uploads/sites/2/2014/03/foundingfather-octocat.png',
    title: 'MSFT in Business CA',
    subTitle: '@msft_businessCA',
    recommended: true
  },
  {
    thumbnail:
      'http://384uqqh5pka2ma24ild282mv.wpengine.netdna-cdn.com/wp-content/uploads/2016/06/github-inspectocat.png',
    title: 'RE/MAX First',
    subTitle: '@ReMaxFirst2',
    recommended: false
  },
  {
    thumbnail: 'http://www.drtomwalker.com/img/github-8-256.png',
    title: 'Mirela Rahneva',
    subTitle: '@MirelaRahneva',
    recommended: false
  },
  {
    thumbnail:
      'https://technical.ly/philly/wp-content/uploads/sites/2/2014/03/foundingfather-octocat.png',
    title: 'MSFT in Business CA',
    subTitle: '@msft_businessCA',
    recommended: true
  },
  {
    thumbnail:
      'http://384uqqh5pka2ma24ild282mv.wpengine.netdna-cdn.com/wp-content/uploads/2016/06/github-inspectocat.png',
    title: 'RE/MAX First',
    subTitle: '@ReMaxFirst2',
    recommended: false
  },
  {
    thumbnail: 'http://www.drtomwalker.com/img/github-8-256.png',
    title: 'Mirela Rahneva',
    subTitle: '@MirelaRahneva',
    recommended: false
  }
];

const data = [...users].map((user, index) => {
  return { ...user, key: index };
});

export default data;
