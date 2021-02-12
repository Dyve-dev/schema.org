"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonJsonLd = void 0;
const base_1 = require("./base");
const OrganizationEntity = {
    '@context': 'https://schema.org',
    '@type': 'Person',
};
class PersonJsonLd extends base_1.Base {
    constructor(data) {
        super();
        this._data = {
            //@ts-ignore
            ...OrganizationEntity,
        };
        this._data = {
            //@ts-ignore
            ...this._data,
            ...data,
        };
    }
}
exports.PersonJsonLd = PersonJsonLd;
