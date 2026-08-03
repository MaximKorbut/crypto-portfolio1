async function loadPrices(){

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
"$"+total.toFixed(2);

}

loadPrices();
