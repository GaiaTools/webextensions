import BaseError from "./BaseError";

export default class NotSupportedError extends BaseError {
	constructor(message) {
		super(message);
	}
}