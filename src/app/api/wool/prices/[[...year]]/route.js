import { NextResponse } from "next/server";
import { data } from "./data";

export async function GET(req,{ params }) {
    let body = params.year;
    var year = new Date().getFullYear();
    if(!body){
        return new Response(JSON.stringify(data[year]),{status: 200});
    }
    if(body.length == 1){
        if(body[0] < 2003 || body[0] > year){
            return new Response("Invalid Year", {status: 400});
        }
        return new Response(JSON.stringify(data[body[0]]),{status: 200});
    }
    if(body.length == 2){
        if(body[0] < 2003 || body[0] > year || body[1] < 2003 || body[1] > year){
            return new Response("Invalid Year", {status: 400});
        }
        var newdata = {};
        for(var i = body[0]; i <= body[1]; i++){
            newdata[i] = data[i];
        }
        return new Response(JSON.stringify(newdata));
    }
    return new Response(JSON.stringify(data[2010]),{status: 200});
}