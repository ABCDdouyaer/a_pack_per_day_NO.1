const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/wangwei/Desktop/study/a_pack_per_day/nodePack/0091/.docz/src/pages/404.js")))
}

