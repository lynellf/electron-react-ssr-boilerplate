import fs from 'fs'
import config from '../config.json'

export default class Main {
    constructor() {
        this.staticDir = config.staticDir
        this.bundleName = config.bundleName
        this.port = config.port
    }

    getBundle () {
        const { bundleName, staticDir } = this
        const fileNames = fs.readdirSync(staticDir)
        const query = new RegExp(`${bundleName}.*.js`)
        const file = fileNames.filter(file => file.match(query))
        const hasFile = file !== null
        if (hasFile) return file[0]
        return null
    }
}