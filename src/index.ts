import nunjucks from 'nunjucks';
import path from 'path';

class Schema {
  constructor() {
    nunjucks.configure(path.join(__dirname, '../templates/'));
  }
}

export class WebSite extends Schema {
  constructor() {
    super();
  }
  render = (data?: any) => {
    return nunjucks.render('website.ldjson.njk', data);
  };
}
