require.extensions['.css'] = function () {
  return null;
};
require.extensions['.png'] = function () {
  return null;
};
require.extensions['.jpg'] = function () {
  return null;
};

require('babel-register')();