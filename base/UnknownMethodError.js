import BaseError from "./BaseError";

export default class UnknownMethodError extends BaseError {
	constructor(message) {
		super(message);
	}
}