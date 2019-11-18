import request from "supertest";
import { expect } from "chai";
import { App, Mongoose } from "../src/app";

describe("GET /api", () => {
    it("should return 404 NOT FOUND", () => {
        return request(App).get("/api")
            .expect(404);
    });
});

describe("GET /api/tweets", () => {
	before((done) => {
		Mongoose.connect("mongodb://localhost:27017", { 
			useNewUrlParser: true,
			useCreateIndex: true, 
			useUnifiedTopology: true,
		 	useFindAndModify: false 
	 	})
		.then(() => done())
		.catch((err) => done(err));
	});

	after((done) => {
		Mongoose.disconnect()
		.then(() => done())
		.catch((err) => done(err));
	});

    it("should return all tweets", (done) => {
        return request(App).get("/api/tweets")
        	.then((res) => {
        		const body = res.body;
        		// expect(body).to.contain.property("_id");
        		// expect(body).to.contain.property("content");
        		// expect(body).to.contain.property("created_at");
        		// expect(body).to.contain.property("updated_at");
        		done();
        	})
    	.catch(err => done(err));
    })
});