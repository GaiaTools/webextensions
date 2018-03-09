export default class InvalidValueError extends TypeError {
    constructor() {
        this.name = InvalidValueError.name;
    }
}