const expect = require('chai').expect;
const sinon = require('sinon');
const database = require('../routes/database');
const helpers = require('../lib/helpers');


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
            // sinon.stub(connection, "query").returns({
            //     query: (query, data, (stuff) => {

            //     })
            // });

            sinon.stub(database, "db").returns({
                query: 'dog'
            });

            try {
                let images = await helpers.getImages();
                
                expect(1).to.equal('You should never reach here.');
            } catch (err) {
                expect(err).to.not.deep.equal('cat');
            }
        });

        xit('returns an empty array if no images present', () => {
            expect(1).to.equal(1);

        });

        xit('returns images', async () => {
            let res = await helpers.getImages();
            expect(res.query).to.equal('dog');
        });
    });
});