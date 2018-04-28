import BaseError from "./BaseError";

export default class UnknownPropertyError extends BaseError {
	constructor(message) {
		super(message);
	}
}