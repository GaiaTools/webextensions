export default class Logger {
    static get LELEL_ERROR() {
        return 0x01;
    }

    static get LEVEL_WARNING() {
        return 0x02
    }

    static get LEVEL_INFO() {
        return 0x04;
    }

    static get LEVEL_TRACE() {
        return 0x08;
    }

    error(message) {
        let time = performance.now();
        if(ENV === 'prod') {
            return false;
        }

        console.log(message);
    }
    
    clear() {
        console.clear();
    }
}