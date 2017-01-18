const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
const should = chai.should;

let client = request(app);

describe('POST /gallery', () => {

  it('should redirect user back to /gallery if successful', (done) =>{
    client
      .post('/gallery')
      .type('form')
      .send({
        link: 'www.google.com',
        description: 'testing route'
      })
      .end(function(err, res) {
        if(err) {
          throw new Error(err);
        }
        expect(res.header.location).to.equal('/');
        done();
      });
  });
});

describe('PUT/gallery/:id', () => {

  it('should redirect user to back to /gallery/id if successful', (done) => {
    client
    .post('/gallery/')
    .type('form')
    .send({
      link: 'www.jay.com',
      description: 'new project'
    })
    .end((err, res) => {
      if(err) {
        throw new Error(err);
      }
      expect(res.header.location).to.equal('/');

      client
        .put('/gallery/1')
        .type('form')
        .send({
          id: 1,
          link: 'www.estefania.com',
          description: 'updated project'
        })
        .end((err, res) => {
          if(err) {
            throw new Error(err);
          }
          expect(res.header.location).to.equal('/gallery/1');
        });

        client
          .delete('/gallery/1')
          .type('form')
          .send({
            id:1
          })
          .end((err, res) => {
            if(err) {
              throw new Error(err);
            }
            expect(res.header.location).to.equal('/');
            done();
          });

    });


  });
});
