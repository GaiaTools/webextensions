import BaseError from "./BaseError";

export default class InvalidConfigError extends BaseError {
	constructor(message) {
		super(message);
	}
}