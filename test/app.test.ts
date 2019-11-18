import request from "supertest";
import { App } from "../src/app";

describe("GET /random-url", () => {
    it("should return 404", (done) => {
        request(App).get("/reset")
            .expect(404, done);
    });
});