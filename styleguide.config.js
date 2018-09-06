const path = require('path');

module.exports = {
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
  skipComponentsWithoutExample: true,
  propsParser: require('react-docgen-typescript').parse,
  getComponentPathLine(componentPath) {
    let name = path.basename(componentPath, '.tsx')
    let dir = path.dirname(componentPath)
    if (name === 'index') {
      name = dir.split('/').pop()
    } else {
      dir = `${dir}/${name}` 
    }
    return `import ${name} from '${dir}';`
  }
}