export default class Utils {
    getPort() {
        const port = localStorage.getItem('port')
        return port
    }
}