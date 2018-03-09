export default class UnknownMethodError extends ReferenceError {
    constructor() {
        this.name = UnknownMethodError.name;
    }
}