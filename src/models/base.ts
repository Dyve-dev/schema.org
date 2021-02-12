export const JSONLD_OPEN_TAG = `<script type="application/ld+json">`;
export const JSONLD_CLOSE_TAG = `</script>`;
export class Base {
  _data: any;

  render = (minifiy: boolean = false) => {
    if (minifiy) {
      return JSONLD_OPEN_TAG + JSON.stringify(this._data) + JSONLD_CLOSE_TAG;
    } else {
      return JSONLD_OPEN_TAG + JSON.stringify(this._data, null, 2) + JSONLD_CLOSE_TAG;
    }
  };

  json = (minifiy: boolean = false) => {
    if (minifiy) {
      return JSON.stringify(this._data);
    } else {
      return JSON.stringify(this._data, null, 2);
    }
  };
  get data() {
    const D = { ...this._data };
    delete D['@context'];
    return D;
  }
  get withContext() {
    return this._data;
  }
}
