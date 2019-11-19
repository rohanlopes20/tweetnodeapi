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

## Run test cases
```
npm test
```
Currently test cases are failing :sweat:

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