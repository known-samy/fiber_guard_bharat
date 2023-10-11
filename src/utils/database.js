import { MongoClient,ObjectId } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
client.connect();
export var database;

export async function connectToDB() {
    try {
      var id = new ObjectId("65137dea4ff974eb2dd95065");
      database = client.db("fiberguard1");

    }
    catch (err) {
      console.log(err);
  }
}