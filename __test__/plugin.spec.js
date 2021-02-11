const fs = require('fs');
const { join } = require('path');
const chai = require('chai');
const { spawn } = require('child_process');
const { WebSite } = require('../dist');
const rimraf = require('rimraf');

chai.should();

describe('Schema.org', () => {
  /* before((done) => {
    rimraf('./_site/**', (err) => {
      if (err) {
        console.error(err);
      }
      done();
    });
  }); */

  it('test1', async () => {
    const wb = new WebSite();
    const r = wb.render();
    console.log(r);
  });
  /* it('_site/index.html should not be empty', async () => {
    const content = fs.readFileSync(join(__dirname, '_site/index.html'), 'utf-8');
    content.length.should.gt(600);
  }); */
});
