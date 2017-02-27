const autoprefixer = require('autoprefixer');
const vmin = require('postcss-vmin');
const pixrem = require('pixrem'); //solving issues with rem units for ie9 and 10
const willChange = require('postcss-will-change'); // better rendering animation for ie11

module.exports = {
  plugins: [
    willChange,
    autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],
    }),
    vmin,
    pixrem,
  ],
};
