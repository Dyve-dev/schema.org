"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.JSONLD_CLOSE_TAG = exports.JSONLD_OPEN_TAG = void 0;
exports.JSONLD_OPEN_TAG = `<script type="application/ld+json">`;
exports.JSONLD_CLOSE_TAG = `</script>`;
class Base {
    constructor() {
        this.render = (minifiy = false) => {
            if (minifiy) {
                return exports.JSONLD_OPEN_TAG + JSON.stringify(this._data) + exports.JSONLD_CLOSE_TAG;
            }
            else {
                return exports.JSONLD_OPEN_TAG + JSON.stringify(this._data, null, 2) + exports.JSONLD_CLOSE_TAG;
            }
        };
        this.json = (minifiy = false) => {
            if (minifiy) {
                return JSON.stringify(this._data);
            }
            else {
                return JSON.stringify(this._data, null, 2);
            }
        };
    }
    get data() {
        const D = { ...this._data };
        delete D['@context'];
        return D;
    }
    get withContext() {
        return this._data;
    }
}
exports.Base = Base;
