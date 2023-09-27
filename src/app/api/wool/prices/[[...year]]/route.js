// import { NextResponse } from "next/server";
// import { data } from "./data";
import { MongoClient,ObjectId } from "mongodb";
import { connectToDB ,database } from "@/app/utils/database";

var id = new ObjectId("65137dea4ff974eb2dd95065");

export async function GET(req,{ params }) {

    await connectToDB();

    const Prices = database.collection("prices");

    const query = { _id: id };
    const doc = await Prices.findOne(query);
    console.log("query completed")
    console.log(doc.year['2023']);

    let body = params.year;
    var year = new Date().getFullYear();
    if(!body){
        
        return new Response(JSON.stringify({"2023":doc.year[year]}),{status: 200});
    }
    if(body.length == 1){
        if(body[0] < 2003 || body[0] > year){
            return new Response("Invalid Year", {status: 400});
        }
        return new Response(JSON.stringify(doc.year[body[0]]),{status: 200});
    }
    if(body.length == 2){
        if(body[0] < 2003 || body[0] > year || body[1] < 2003 || body[1] > year){
            return new Response("Invalid Year", {status: 400});
        }
        var newdata = {};
        for(var i = body[0]; i <= body[1]; i++){
            newdata[i] = doc.year[i];
        }
        return new Response(JSON.stringify(newdata));
    }
    return new Response(JSON.stringify(doc.year[2023]),{status: 200});
}