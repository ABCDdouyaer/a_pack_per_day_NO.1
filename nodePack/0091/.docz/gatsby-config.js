const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Test',
    description: '>',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Test',
        description: '>',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091',
          templates:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/package.json',
          docz:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz',
          cache:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/.cache',
          app:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/app',
          appPublic:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/public',
          appNodeModules:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/node_modules',
          appPackageJson:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/package.json',
          appYarnLock:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/gatsby-config.js',
          gatsbyBrowser:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/gatsby-browser.js',
          gatsbyNode:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/gatsby-node.js',
          gatsbySSR:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/gatsby-ssr.js',
          importsJs:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/app/imports.js',
          rootJs:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/app/root.jsx',
          indexJs:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/app/index.jsx',
          indexHtml:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/app/index.html',
          db:
            '/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
