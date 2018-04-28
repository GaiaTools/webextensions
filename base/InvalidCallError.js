import BaseError from "./BaseError";

export default class InvalidCallError extends BaseError {
	constructor(message) {
		super(message);
	}
}