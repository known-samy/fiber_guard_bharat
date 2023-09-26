

export async function GET(req, res) {
    var data;
    await fetch('https://newsapi.org/v2/everything?q=((+wool AND +sheep )+textile OR +sheep OR -DEALS OR -SHOPPING)&sortBy=relevancy&language=en&apiKey=c366b44004da48c1867dc3ff23e08e90&pageSize=100')
        .then(response => response.json())
        .then(json => data = json)
  
    return new Response(JSON.stringify(data), {status: 200})
}