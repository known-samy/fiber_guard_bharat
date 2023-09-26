
import { connectToDB,database } from "@/app/utils/database";


export async function GET(req,{ params }) {

    await connectToDB();

    const Prices = database.collection('Prices');

    const query = { data: 'woolprices' };

    const doc = await Prices.findOne(query);
    

    let body = params.year;

    
    if(!body){
        var year = new Date().getFullYear();
        return new Response(JSON.stringify(doc.year[year]),{status: 200});
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