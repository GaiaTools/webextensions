import BaseError from "./BaseError";

export default class InvalidParamError extends BaseError {
	constructor(message) {
		super(message);
	}
}