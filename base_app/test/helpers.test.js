const expect = require('chai').expect;
const sinon = require('sinon');
const helpers = require('../lib/helpers');
const database = require('../routes/database.js');

describe('lib/helpers', () => {
    describe('add', () => {
        it('adds numbers', () => {
            expect(helpers.add(1, 2)).to.equal(3);
            expect(helpers.add(1, -1)).to.equal(0);
            expect(helpers.add(-1, -1)).to.equal(-2);
        });
    });
    describe('getImages', () => {
        it('returns an error if unable to query images', async () => {
            sinon.stub(datdbase, "db").returns({
                query: (query, data, (stuff) => {

                });
            })
            try {
                await helpers.getImages();
                expect(1).to.equal('You should never reach here.');
            } catch (err) {
                expect(err).to.not.deep.equal('cat');
            }
        });

        xit('returns an empty array if no images present', () => {

        });

        xit('returns images', () => {

        });
    });
});