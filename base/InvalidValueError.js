import BaseError from "./BaseError";

export default class InvalidValueError extends BaseError {
	constructor(message) {
		super(message);
	}
}