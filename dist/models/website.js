"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSiteJsonLd = void 0;
const base_1 = require("./base");
const WebSiteEntity = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
};
class WebSiteJsonLd extends base_1.Base {
    constructor(data) {
        super();
        this._data = {
            ...WebSiteEntity,
        };
        this._data = {
            ...this._data,
            ...data,
        };
    }
}
exports.WebSiteJsonLd = WebSiteJsonLd;
