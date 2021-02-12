const chai = require('chai');
const { WebSiteJsonLd, OrganizationJsonLd } = require('../dist');

chai.should();

describe('Schema.org', () => {
  it('WebSite', async () => {
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
});
