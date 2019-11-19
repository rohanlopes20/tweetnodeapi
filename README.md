# Tweet REST API

This project provides below REST APIs for tweets :

| API        | HTTP Method           | URL  |
| ------------- |-------------| -----|
| Add new tweet      | POST | localhost:3000/api/tweets |
| Get all tweets      | GET      |   localhost:3000/api/tweets |
| Get all tweets with pagination | GET      |    localhost:3000/api/tweets?page=1&limit=5 |
| Get all tweet(s) with content | GET      |    localhost:3000/api/tweets?searchText=blabla |
| Get a single tweet based on uid | GET      |    localhost:3000/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee |
| Update tweet based on uid | PUT      |    localhost:3000/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee |
| Delete tweet based on uid | DELETE      |    localhost:3000/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee |


## Getting started
```
npm install
npm run build
npm start
```

## API requests

```
curl -H 'Content-Type: application/json' -X GET localhost:3000/api/tweets
curl -H 'Content-Type: application/json' -X GET localhost:3000/api/tweets/04e33410-09de-11ea-ba9c-832e05e78bf1
curl -H 'Content-Type: application/json' -X POST --data "{\"content\" : \"test\"}" localhost:3000/api/tweets
curl -H 'Content-Type: application/json' -X PUT --data "{\"content\" : \"updated tweet\"}" localhost:3000/api/tweets/04e33410-09de-11ea-ba9c-832e05e78bf1
curl -H 'Content-Type: application/json' -X DELETE localhost:3000/api/tweets/04e33410-09de-11ea-ba9c-832e05e78bf1

```

## Get Tweet

 Get tweet API provides options to retrive tweets. It also provides below options. By default it will return 10 tweets of 1st page.

 | Detail        | Query Param  | Eg  |
| ------------- |-------------| -----|
| Get N page tweets     | page=<numOfPage> | localhost:3000/api/tweets?page=3 |
| Get N tweets      | limit=<numOfTweets>      |   localhost:3000/api/tweets?limit=10 |
| Search tweet by content | searchText=<contentToSearch>      |    localhost:3000/api/tweets?searchText=bla |

## Run test cases

Currently test cases are failing :sweat:

```
$ npm test

> tweetapi@1.0.0 test /opt/projects/node/tweetapi
> jest --forceExit --coverage --verbose

 PASS  test/app.test.ts
  GET /random-url
    ✓ should return 404 (37ms)

  console.error src/app.ts:949
    MongoDB connection error. Please make sure MongoDB is running. MongoTimeoutError: Server selection timed out after 30000 ms

  console.error src/app.ts:949
    MongoDB connection error. Please make sure MongoDB is running. MongoTimeoutError: Server selection timed out after 30000 ms

 FAIL  test/api.test.ts (45.19s)
  Waiting to connect to db
    ✓ waiting.... (1002ms)
  GET /api
    ✓ should return 404 NOT FOUND (21ms)
  GET /api/tweets
    ✕ should return all tweets (5006ms)
    ✕ should return all tweets based on pagination (6462ms)
    ✕ should return all tweets based on search (6937ms)
    ✕ should return all tweets based on uid (7284ms)
    ✕ post a tweet (5619ms)
    ✕ update tweet based on uid (6182ms)
    ✕ delete tweet based on uid (5011ms)

  ● GET /api/tweets › should return all tweets

    : Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:

      19 | 
      20 | describe("GET /api/tweets", () => {
    > 21 |     it("should return all tweets", (done) => {
         |     ^
      22 |         return request(App).get("/api/tweets")
      23 |         	.then((res) => {
      24 |         		const body = res.body;

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.Object.<anonymous>.describe (test/api.test.ts:21:5)
      at Object.<anonymous> (test/api.test.ts:20:1)

  ● GET /api/tweets › should return all tweets based on pagination

    : Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:

      35 | 
      36 | describe("GET /api/tweets", () => {
    > 37 |     it("should return all tweets based on pagination", (done) => {
         |     ^
      38 |         return request(App).get("/api/tweets?page=3&limit=2&searchText=")
      39 |             .then((res) => {
      40 |                 const body = res.body;

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.Object.<anonymous>.describe (test/api.test.ts:37:5)
      at Object.<anonymous> (test/api.test.ts:36:1)

  ● GET /api/tweets › should return all tweets based on search

    : Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:

      51 | 
      52 | describe("GET /api/tweets", () => {
    > 53 |     it("should return all tweets based on search", (done) => {
         |     ^
      54 |         return request(App).get("/api/tweets?page=0&limit=0&searchText=first tweet")
      55 |             .then((res) => {
      56 |                 const body = res.body;

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.Object.<anonymous>.describe (test/api.test.ts:53:5)
      at Object.<anonymous> (test/api.test.ts:52:1)

  ● GET /api/tweets › should return all tweets based on uid

    : Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:

      67 | 
      68 | describe("GET /api/tweets", () => {
    > 69 |     it("should return all tweets based on uid", (done) => {
         |     ^
      70 |         return request(App).get("/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee")
      71 |             .then((res) => {
      72 |                 const body = res.body;

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.Object.<anonymous>.describe (test/api.test.ts:69:5)
      at Object.<anonymous> (test/api.test.ts:68:1)

  ● GET /api/tweets › post a tweet

    : Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:

      83 | 
      84 | describe("GET /api/tweets", () => {
    > 85 |     it("post a tweet", (done) => {
         |     ^
      86 |         return request(App).post("/api/tweets")
      87 |             .send({ content : "test" })
      88 |             .then((res) => {

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.Object.<anonymous>.describe (test/api.test.ts:85:5)
      at Object.<anonymous> (test/api.test.ts:84:1)

  ● GET /api/tweets › update tweet based on uid

    : Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:

       98 | 
       99 | describe("GET /api/tweets", () => {
    > 100 |     it("update tweet based on uid", (done) => {
          |     ^
      101 |         return request(App).put("/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee")
      102 |             .send({ content : "test content updated" })
      103 |             .then((res) => {

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.Object.<anonymous>.describe (test/api.test.ts:100:5)
      at Object.<anonymous> (test/api.test.ts:99:1)

  ● GET /api/tweets › delete tweet based on uid

    : Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:

      112 | 
      113 | describe("GET /api/tweets", () => {
    > 114 |     it("delete tweet based on uid", (done) => {
          |     ^
      115 |         return request(App).delete("/api/tweets/5eb2e300-09d4-11ea-be0e-c50eed244eee")
      116 |             .then((res) => {
      117 |                 const body = res.body;

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.Object.<anonymous>.describe (test/api.test.ts:114:5)
      at Object.<anonymous> (test/api.test.ts:113:1)

-----------------|----------|----------|----------|----------|-------------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |    66.67 |    40.63 |       50 |    66.67 |                   |
 src             |    94.74 |       50 |       50 |    94.74 |                   |
  app.ts         |    94.74 |       50 |       50 |    94.74 |                19 |
 src/controllers |       50 |       40 |       50 |       50 |                   |
  api.ts         |       50 |       40 |       50 |       50 |... 79,90,91,92,96 |
 src/models      |      100 |      100 |      100 |      100 |                   |
  Tweet.ts       |      100 |      100 |      100 |      100 |                   |
 src/utils       |      100 |      100 |      100 |      100 |                   |
  secrets.ts     |      100 |      100 |      100 |      100 |                   |
-----------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 failed, 1 passed, 2 total
Tests:       7 failed, 3 passed, 10 total
Snapshots:   0 total
Time:        45.689s
Ran all test suites.
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
npm ERR! Test failed.  See above for more details.

```