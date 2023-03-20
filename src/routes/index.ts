import { Router } from "express";

export class indexRoutes {
	private _indexRoutes: Router;

	get indexRoutes() {
		return this._indexRoutes
	}
	constructor() {
		this._indexRoutes = Router();
	}
}