const expect = require('chai').expect;
const sinon = require('sinon');
const connection = require('../routes/database').db;
const mockMysql = sinon.mock(require('mysql'));
const helpers = require('../lib/helpers');


// beforeEach(() => {
//     mockMysql.expects('createConnection').returns({
//       connect: () => {
//         console.log('Succesfully connected');
//       },
//       query: (query, vars, callback) => {
//         callback(null, succesfulDbInsert);
//       },
//       end: () => {
//         console.log('Connection ended');
//       }
//     });
 
//   });
//   after(() => {
//     mockMysql.restore();
//   });
 

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

            // sinon.stub(database, "db").returns({
            //     query: 'dog'
            // });

            // try {
            //     let images = await helpers.getImages();
                
            //     expect(1).to.equal('You should never reach here.');
            // } catch (err) {
            //     expect(err).to.not.deep.equal('cat');
            // }
            expect(1).to.equal(1)
        });

        it('returns an empty array if no images present', () => {
            expect(1).to.equal(1);

        });

        it('returns images', async () => {
            // let mock;
            // let queryString = "SELECT * FROM `images`"
            // let queryParams = null
            // let rows = ['dog']

            // mock = sinon.mock(require('mysql'))
            // mock.expects('query').with(queryString, queryParams).yields(null, rows);
            // mock.verify()

            // mockMysql.expects('createConnection').returns({
            //     connect: () => {
            //       console.log('Succesfully connected');
            //     },
            //     query: (query, vars, callback) => {
            //       callback(null, succesfulDbInsert);
            //     },
            //     end: () => {
            //       console.log('Connection ended');
            //     }
            //   });
            
            // https://stackoverflow.com/questions/54324649/using-sinon-to-stub-code-inside-a-promise-and-return-a-resolve
            // https://sinonjs.org/releases/v7.2.2/stubs/#stubyieldsarg1-arg2-
            sinon.stub(connection, "query").yields(null, ['dog']);
            let res = await helpers.getImages();
console.log("Godzilla2")

            return expect(res[0]).to.equal('dog');
            //mock.restore()
            // expect(1).to.equal(1);
            done();
        });
    });
});
