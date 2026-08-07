async function loadPrices(){

try{

const response =
await fetch("http://127.0.0.1:8000/prices");

prices =
await response.json();

...

}catch(error){

document.getElementById("prices").innerHTML=
`
<div class="card">
Unable to load cryptocurrency prices.
</div>
`;

}

}async function loadPrices(){

    const response = await fetch("http://127.0.0.1:8000/prices");

    const data = await response.json();

    document.getElementById("prices").innerHTML=
    `
    <div class="card">
        <h2>Bitcoin</h2>
        <p>$${data.bitcoin.usd}</p>
    </div>

    <div class="card">
        <h2>Ethereum</h2>
        <p>$${data.ethereum.usd}</p>
    </div>

    <div class="card">
        <h2>Solana</h2>
        <p>$${data.solana.usd}</p>
    </div>
    `;

}
document.getElementById("btc").value =
localStorage.getItem("btc") || 0;

document.getElementById("eth").value =
localStorage.getItem("eth") || 0;

document.getElementById("sol").value =
localStorage.getItem("sol") || 0;
loadPrices();
let prices = {};

async function loadPrices(){

    const response = await fetch("http://127.0.0.1:8000/prices");

    prices = await response.json();

    document.getElementById("prices").innerHTML=
`
<div class="card">

<h2>Bitcoin</h2>
<p>$${prices.bitcoin.usd}</p>

<h2>Ethereum</h2>
<p>$${prices.ethereum.usd}</p>

<h2>Solana</h2>
<p>$${prices.solana.usd}</p>

</div>
`;

}

function calculatePortfolio(){

const btc =
Number(document.getElementById("btc").value);

const eth =
Number(document.getElementById("eth").value);

const sol =
Number(document.getElementById("sol").value);

const total =
btc*prices.bitcoin.usd+
eth*prices.ethereum.usd+
sol*prices.solana.usd;

document.getElementById("total").innerHTML=
"$"+total.toLocaleString(undefined,{
minimumFractionDigits:2,
maximumFractionDigits:2
});

}

loadPrices();
setInterval(loadPrices, 60000);
function toggleTheme(){

    document.body.classList.toggle("light");

    const button =
    document.getElementById("themeButton");

    if(document.body.classList.contains("light")){

        button.innerHTML="☀️ Light Mode";

    }else{

        button.innerHTML="🌙 Dark Mode";

    }

}
document
.getElementById("searchCoin")
.addEventListener("input",function(){

const value=this.value.toLowerCase();

document
.querySelectorAll(".card")
.forEach(card=>{

card.style.display=
card.innerText.toLowerCase().includes(value)
?"block":"none";

});

});
