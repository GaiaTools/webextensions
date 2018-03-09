export default class InvalidCallError extends ReferenceError {
    constructor() {
        this.name = InvalidCallError.name;
    }
}