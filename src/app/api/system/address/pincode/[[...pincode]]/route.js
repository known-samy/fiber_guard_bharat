import {parseString} from 'xml2js';
import axios from 'axios';

export async function GET(req,{ params }) {

    let pincode = params.pincode;
    var result1={};

    //checking if pincode is available or not
    if(!pincode){
        return new Response("PINCODE Required", {status: 400});
    }

    //req url building
    var url= `https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6?api-key=${process.env.data_gov_key}&format=xml&filters%5Bpincode%5D=${pincode}`;
    
    //fetching data from data.gov.in
    await axios.get(url,{headers: {'Content-Type': 'application/xml'}})
    .then((response) => {
        //parsing xml response to json
        parseString(response.data, function (err, result) {
            result1=result;
        });
    })
    .catch((error) => {
        //throwing error if any
        return new Response("Some Error Occured :(", {status: 400});
    });

    var data;

    //checking if data is available or not
    try{ data=result1.result.records[0].item[0] }    
    catch(err){
        return new Response("Invalid Pincode", {status: 400});
    }

    //returning response
    return new Response(JSON.stringify(data),{status: 200});
}