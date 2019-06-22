import Main from './Main'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App  from '../src/views/App'

export default class Application extends Main {
    handleRoot (_req, res) {
        const { port } = this
        const jsBundle = this.getBundle()
        const application = ReactDOMServer.renderToString(<App port={port} />)
        res.render('index', { application, jsBundle })
    }
}