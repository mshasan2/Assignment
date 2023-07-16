import { expect } from "chai";
import { describe } from "mocha";
import chaiHttp from "chai-http";
import chai from "chai";

chai.use(chaiHttp);

describe("Search Flights", () => {
    it ("Search with no Params", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/search')
        .end((err, res) => {
            expect(res.status).to.equal(400);
            done();
        });
    });

    it ("Search with incorrect Params", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/search/?orgin=Madrid')
        .end((err, res) => {
            expect(res.status).to.equal(400);
            done();
        });
    });

    it ("Empty search Destination", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/search?destination=""')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(0);
            done();
        });
    } );

    it ("Empty search Origin", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/search?origin=""')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(0);
            done();
        });
    } );

    it ("Search Origin Santander", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/search?origin=Santander')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(1);
            done();
        });
    } );

    it ("Search Destination Malaga", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/search?destination=Malaga')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(3);
            done();
        });
    } );

    it ("Search Destination Monroe", (done) => {
        const result = [
            {
                "_id": "64af2a9b88e6c467048aa5ac",
                "id": 296643,
                "created_at": "2019-09-20T00:36:44.000Z",
                "updated_at": "2019-09-20T00:36:44.000Z",
                "flight_identifier": "65376340-1088-4d5f-8db1-48d7b7119b4e",
                "flt_num": 3257,
                "scheduled_origin_gate": "5",
                "scheduled_destination_gate": "Any",
                "out_gmt": "2019-02-10T07:50:23.000Z",
                "in_gmt": "2019-02-10 04:19:16",
                "off_gmt": "2019-02-10 03:15:07",
                "on_gmt": "2019-02-10 04:13:58",
                "destination": "MLU",
                "origin": "DFW",
                "destination_full_name": "Monroe Regl",
                "origin_full_name": "Dallas-ft Worth Intl"
            }
        ];
        chai.request('http://localhost:4000')
        .get('/api/flights/search?destination=Monroe Regl')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(1);
            expect(res.body).to.deep.equal(result);
            done();
        });
    });

});

describe("Suggest Flights", () => {
    it ("Suggest with empty string", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/suggest/""')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(0);
            done();
        });
    } );

    it ("Suggest with string 'a'", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/suggest/a')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(10);
            done();
        });
    } );

    it ("Suggest with string Monroe", (done) => {
        const result = [
            "Monroe Regl"
        ];
        chai.request('http://localhost:4000')
        .get('/api/flights/suggest/Monroe')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(1);
            expect(res.body).to.deep.equal(result);
            done();
        });
    });


    it ("Suggest with non-existant station name", (done) => {
        chai.request('http://localhost:4000')
        .get('/api/flights/suggest/zqqqqq')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(0);
            done();
        });
    } );

})