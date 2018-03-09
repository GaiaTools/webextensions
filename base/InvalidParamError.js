export default class InvalidParamError extends TypeError {
    constructor() {
        this.name = InvalidParamError.name;
    }
}