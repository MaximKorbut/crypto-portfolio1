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
