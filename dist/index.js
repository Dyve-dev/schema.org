"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSite = void 0;
const nunjucks_1 = __importDefault(require("nunjucks"));
const path_1 = __importDefault(require("path"));
class Schema {
    constructor() {
        nunjucks_1.default.configure(path_1.default.join(__dirname, '../templates/'));
    }
}
class WebSite extends Schema {
    constructor() {
        super();
        this.render = (data) => {
            return nunjucks_1.default.render('website.ldjson.njk', data);
        };
    }
}
exports.WebSite = WebSite;
