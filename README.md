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
