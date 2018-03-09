export default class UnknownClassError extends ReferenceError {
    constructor() {
        this.name = UnknownClassError.name;
    }
}