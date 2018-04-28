import BaseError from "./BaseError";

export default class InvalidRouteError extends BaseError {
	constructor(message) {
		super(message);
	}
}