export default class UnknownPropertyError extends ReferenceError {
    constructor() {
        this.name = UnknownPropertyError.name;
    }
}