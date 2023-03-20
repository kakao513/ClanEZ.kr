"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRoutes = void 0;
const express_1 = require("express");
class indexRoutes {
    get indexRoutes() {
        return this._indexRoutes;
    }
    constructor() {
        this._indexRoutes = (0, express_1.Router)();
    }
}
exports.indexRoutes = indexRoutes;
