import fs from 'fs'

export default class Main {
    constructor(config) {
        const { staticDir, bundleName, port } = config
        this.staticDir = staticDir
        this.bundleName = bundleName
        this.port = parseInt(port) | 9000
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