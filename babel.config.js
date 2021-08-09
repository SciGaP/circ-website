module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/circ-website/'
    : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
