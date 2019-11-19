import express from "express";
import bodyParser from "body-parser";
import mongo from "connect-mongo";
import mongoose from "mongoose";

import * as apis from "./controllers/api";
import { MONGODB_URI } from "./utils/secrets";

const app: express.Application = express();

const mongoUrl = MONGODB_URI;

mongoose.connect(mongoUrl, { 
	useNewUrlParser: true,
	useCreateIndex: true, 
	useUnifiedTopology: true,
 	useFindAndModify: false 
})
.then(() => { 
	console.log('connected to db');
}).catch(err => {
	console.error('MongoDB connection error. Please make sure MongoDB is running. ' + err);
});


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.get('/api/tweets', apis.getTweets);
app.post('/api/tweets', apis.createATweets);
app.get('/api/tweets/:uid', apis.getTweetsByUid);
app.put('/api/tweets/:uid', apis.updateTweetsByUid);
app.delete('/api/tweets/:uid', apis.deleteTweetsByUid);

export const Mongoose = mongoose;
export const App = app;