const express = require('express')
const { join } = require('path')
const webpack = require('webpack')

const app = express()

console.log('DEBUG MODE')
console.log(join(__dirname, '../public'))

const wpconfig = require('../config/webpack.config.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const compiler = webpack(wpconfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: wpconfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use('/public', express.static(join(__dirname, '../public/')))

app.get('*', (req, res) => res.sendFile(join(__dirname, '../public/index.html')))

let port = "3000";
switch (true) {
    case (process.env.APP_PORT !== undefined):
        port = process.env.APP_PORT
        break;
    default:
        break;
}

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
    }
})
