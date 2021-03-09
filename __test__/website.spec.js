const chai = require('chai');
const { WebSiteJsonLd, OrganizationJsonLd } = require('../dist');
const testRender = require('./render.test');

chai.should();

describe('Website', () => {
  it('json', async () => {
    const org = new OrganizationJsonLd({
      name: 'dyve',
    });
    const wb = new WebSiteJsonLd({
      url: 'https://dyve.dev',
      creator: org.data,
      description: 'first web site',
    });

    wb.data.should.be.a('object');
    wb.data.should.have.property('@type').equal('WebSite');
    wb.data.should.have.property('description').equal('first web site');
    wb.data.should.have.property('url').equal('https://dyve.dev');
    wb.withContext.should.have.property('@context');
  });
  it('render', async () => {
    const wb = new WebSiteJsonLd({
      url: 'https://dyve.dev',
      description: 'first web site',
    });
    testRender(wb);
  });
});
