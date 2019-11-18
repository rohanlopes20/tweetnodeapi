"use strict";

import { Response, Request, NextFunction } from "express";
import { Tweet } from "../models/Tweet";
import { v1 as uuid } from "uuid";


export const getTweets = (req: Request, res: Response) => {
	let searchQuery: string  = req.query.searchText || "";
	let limit: number = (searchQuery == "") ?( parseInt(req.query.limit) || 10 ) : 0; 
	let page: number  = (searchQuery == "") ? (req.query.page || 0) : 0; 
	let query = (searchQuery == "") ? {} : { content : searchQuery };

	const tweets = Tweet.find(query, { uid:1, content : 1, created_at : 1, updated_at : 1, _id : 0 },  (err: any, tweets: any) => {
		if (err) {
			console.error("Error in getTweets api call : ", err);
			res.send({
				message : "Error in getting tweets."
			});
	    } else {
	    	let response = (Array.isArray(tweets) && tweets.length) ? tweets : { message : "No tweets."};
			res.send(response);
	    }
  	})
  	.limit(limit)
  	.skip(page*limit);
};

export const getTweetsByUid = (req: Request, res: Response) => {

    const tweet = Tweet.find({ uid: req.params.uid }, { uid:1, content : 1, created_at : 1, updated_at : 1, _id : 0 }, (err: any, tweet: any) => {
	    if (err) {
	    	console.error("Error in getTweetsByUid api call : ", err);
			res.send({
				message : "Error in getting tweets."
			});
	    } else {
	    	let response = (Array.isArray(tweet) && tweet.length) ? tweet : { message : "No tweets."};
			res.send(response);
	    }
  	});
};

export const createATweets = (req: Request, res: Response) => {
	const uuidValue = uuid();
    const tweet = new Tweet({
    	uid : uuidValue,
    	content : req.body.content,
    });

    tweet.save((err: any) => {
		if (err) {
			console.error("Error in createATweets api call : ", err);
			res.send({
				message : "Error in creating tweets."
			});
	    } else {
			res.send({
				uid : uuidValue,
				message : "Tweet posted Successfully."
			});
	    }
  	});
};

export const updateTweetsByUid = (req: Request, res: Response) => {
    const uid 	  = req.params.uid;
    let tweetJson = req.body;

    tweetJson.updated_at = new Date();
    
    const tweet = Tweet.findOneAndUpdate({ uid: uid }, tweetJson, (err: any, tweet: any) => {
		if (err) {
			console.error("Error in createATweets api call : ", err);
			res.send({
				message : "Error in updating tweet."
			});
		} else {
			res.send({
				message : "Successfully updated Tweet!"
			});
		}
    });
};

export const deleteTweetsByUid = (req: Request, res: Response) => {
    const uid = req.params.uid;

    const tweet = Tweet.deleteOne({ uid: uid }, (err: any) => {
	    if (err) {
			console.error("Error in deleteTweetsByUid api call : ", err);	    	
			res.send({
				message : "Error in deleting tweet!"
			});
	    } else {
	      	res.send({
				message : "Successfully deleted tweet!"
			});
	    }
  	});
};
