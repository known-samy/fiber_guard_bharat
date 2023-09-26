
import { MongoClient } from "mongodb";


let isConnected = false;
const client = new MongoClient(process.env.MONGODB_URI);
export var database;

export const connectToDB = async () => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return;
    }
    try{
        database = client.db('FiberGuard');
        
        isConnected = true;
        console.log('=> using new database connection');
    }
    catch(err){
        console.log(err)
    }

};
