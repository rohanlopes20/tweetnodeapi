import request from "supertest";
import { expect } from "chai";
import { App } from "../src/app";

describe("Waiting to connect to db", () => {
    it("waiting....", (done) => {
        setTimeout(() => {
            done();
        }, 1000);
    });
});

describe("GET /api", () => {
    it("should return 404 NOT FOUND", () => {
        return request(App).get("/api")
            .expect(404);
    });
});

describe("GET /api/tweets", () => {
    it("should return all tweets", (done) => {
        return request(App).get("/api/tweets")
        	.then((res) => {
        		const body = res.body;
                console.log(body);
        		// expect(body).to.contain.property("uid");
        		// expect(body).to.contain.property("content");
        		// expect(body).to.contain.property("created_at");
        		// expect(body).to.contain.property("updated_at");
        		done();
        	})
    	   .catch(err => done(err));
    });
});

describe("GET /api/tweets", () => {
    it("should return all tweets based on pagination", (done) => {
        return request(App).get("/api/tweets?page=3&limit=2&searchText=")
            .then((res) => {
                const body = res.body;
                console.log(body);
                // expect(body).to.contain.property("uid");
                // expect(body).to.contain.property("content");
                // expect(body).to.contain.property("created_at");
                // expect(body).to.contain.property("updated_at");
                done();
            })
           .catch(err => done(err));
    });
});

describe("GET /api/tweets", () => {
    it("should return all tweets based on search", (done) => {
        return request(App).get("/api/tweets?page=0&limit=0&searchText=first tweet")
            .then((res) => {
                const body = res.body;
                console.log(body);
                // expect(body).to.contain.property("uid");
                // expect(body).to.contain.property("content");
                // expect(body).to.contain.property("created_at");
                // expect(body).to.contain.property("updated_at");
                done();
            })
           .catch(err => done(err));
    });
});

describe("GET /api/tweets", () => {
    it("should return all tweets based on uid", (done) => {
        return request(App).get("/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee")
            .then((res) => {
                const body = res.body;
                console.log(body);
                // expect(body).to.contain.property("uid");
                // expect(body).to.contain.property("content");
                // expect(body).to.contain.property("created_at");
                // expect(body).to.contain.property("updated_at");
                done();
            })
           .catch(err => done(err));
    });
});

describe("GET /api/tweets", () => {
    it("post a tweet", (done) => {
        return request(App).post("/api/tweets")
            .send({ content : "test" })
            .then((res) => {
                const body = res.body;
                console.log(body);
                // expect(body).to.contain.property("uid");
                // expect(body).to.contain.property("message");
                done();
            })
           .catch(err => done(err));
    });
});

describe("GET /api/tweets", () => {
    it("update tweet based on uid", (done) => {
        return request(App).put("/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee")
            .send({ content : "test content updated" })
            .then((res) => {
                const body = res.body;
                console.log(body);
                // expect(body).to.contain.property("message");
                done();
            })
           .catch(err => done(err));
    });
});

describe("GET /api/tweets", () => {
    it("delete tweet based on uid", (done) => {
        return request(App).delete("/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee")
            .then((res) => {
                const body = res.body;
                console.log(body);
                // expect(body).to.contain.property("message");
                done();
            })
           .catch(err => done(err));
    });
});