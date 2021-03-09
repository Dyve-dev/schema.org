const chai = require('chai');
chai.should();

module.exports = function testRender(O) {
  const jsonld = O.render();
  jsonld.should.be.a('string');
  jsonld.should.contain('<script type="application/ld+json">');
  jsonld.slice(-parseInt('</script>'.length)).should.equal('</script>');
};
