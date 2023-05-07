//read the value of text box

function dollarrupeec(){
    let usd = document.getElementById("usdInput").value;
    let result = usd * 81.75;
    document.getElementById("result").innerText="Result:₹" + result;
}