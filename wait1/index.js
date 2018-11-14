const $ = require('./common/jq');
const inner_buffer = require('./inner_bundle/inner_buffer');
const inner_process = require('./inner_bundle/inner_process');
const inner_global = require('./inner_bundle/inner_global');
// const inner_http = require('./inner_bundle/inner_http');//跨域

inner_buffer();
inner_process();
inner_global();
// inner_http();
