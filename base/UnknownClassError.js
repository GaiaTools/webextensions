import BaseError from "./BaseError";

export default class UnknownClassError extends BaseError {
	constructor(message) {
		super(message);
	}
}