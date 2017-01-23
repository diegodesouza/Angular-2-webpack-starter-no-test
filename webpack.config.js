// Look in ./config folder for webpack.dev.js or webpack.common for common config
//
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    module.exports = require('./config/webpack.prod');
  } else {
    module.exports = require('./config/webpack.dev');
}
