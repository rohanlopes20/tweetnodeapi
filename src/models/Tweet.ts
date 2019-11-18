import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
	uid : {
		type : String,
		required : true
	},
	content 	: {
		type 	: String,
		required : true
	},
	created_at 	: {
		type : Date,
		default : Date.now
	},
	updated_at 	: {
		type : Date,
		default : Date.now
	}
});

export const Tweet = mongoose.model("Tweet", tweetSchema, "tweetsV2");
