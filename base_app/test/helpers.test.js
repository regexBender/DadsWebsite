const expect = require('chai').expect;
const sinon = require('sinon');
const connection = require('../routes/database').db;
const mockMysql = sinon.mock(require('mysql'));
const helpers = require('../lib/helpers');

describe('lib/helpers', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('add', () => {
        it('adds numbers', () => {
            expect(helpers.add(1, 2)).to.equal(3);
            expect(helpers.add(1, -1)).to.equal(0);
            expect(helpers.add(-1, -1)).to.equal(-2);
        });
    });
    describe('getImages', () => {
        it('returns an error if unable to query images', async () => {
            const myErr = "There was error!";
            sandbox.stub(connection, "query").yields(myErr);
            try {
                await helpers.getImages();
                expect(1).to.equal(2); // We should never get here.
            } catch (err) {
                expect(err).to.deep.equal(myErr);
            }
        });

        it('returns an empty array if no images present', async () => {
            sandbox.stub(connection, "query").yields(null, []);
            const res = await helpers.getImages();
            expect(res).to.deep.equal([]);
        });

        it('returns images', async () => {
            // https://stackoverflow.com/questions/54324649/using-sinon-to-stub-code-inside-a-promise-and-return-a-resolve
            // https://sinonjs.org/releases/v7.2.2/stubs/#stubyieldsarg1-arg2-
            sandbox.stub(connection, "query").yields(null, ['dog']);
            const res = await helpers.getImages();
            expect(res[0]).to.equal('dog');
        });
    });
});
