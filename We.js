import Logger from './base/Logger';
import InvalidConfigError from './base/InvalidConfigError';

performance.mark('START_TIME');

let _logger = new WeakMap();

export default class We {
    static get logger() {
        if(_logger.get(this) === undefined) {
            _logger.set(this, new Logger);
        }

        return _logger.get(this);
    }

    static set logger(logger) {
        if(!(logger instanceof Logger)) {
            throw new InvalidConfigError(`Logger configuration must be an instance of Logger`);
        }
        _logger.set(this, logger);
    }

    static get log(message, category = 'application') {
        this.logger.log(message, Logger.LELEL_DEBUG, category)
    }

    static get warn(message, category = 'application') {
        this.logger.log(message, Logger.LELEL_WARN, category)
    }

    static get error(message, category = 'application') {
        this.logger.log(message, Logger.LELEL_ERROR, category)
    }
}