const chai = require('chai');
const { OrganizationJsonLd, PersonJsonLd } = require('../dist');

chai.should();

describe('Schema.org', () => {
  it('Orgnization', async () => {
    const org = new OrganizationJsonLd({
      name: 'dyve',
    });
    org.data.should.be.a('object');
    org.data.should.have.property('@type').equal('Organization');
    org.data.should.have.property('name').equal('dyve');
    org.withContext.should.have.property('@context');
    org.withContext.should.have.property('@type').equal('Organization');
    org.withContext.should.have.property('name').equal('dyve');
  });
  it('Person', async () => {
    const org = new PersonJsonLd({
      name: 'Albert',
      familyName: 'Einstein',
    });
    org.data.should.be.a('object');
    org.data.should.have.property('@type').equal('Person');
    org.data.should.have.property('name').equal('Albert');
    org.withContext.should.have.property('@context');
    org.withContext.should.have.property('@type').equal('Person');
    org.withContext.should.have.property('name').equal('Albert');
    org.withContext.should.have.property('familyName').equal('Einstein');
  });
});
