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
const ctx = document.getElementById("priceChart");

let priceChart = null;

async function loadHistory() {

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/history/bitcoin"
        );

        const data = await response.json();

        const labels = data.prices.map(item =>
            new Date(item[0]).toLocaleDateString()
        );

        const values = data.prices.map(item =>
            item[1]
        );

        const ctx =
            document.getElementById("priceChart");

        if (priceChart) {
            priceChart.destroy();
        }

        priceChart = new Chart(ctx, {
            type: "line",

            data: {
                labels: labels,

                datasets: [{
                    label: "Bitcoin - 7 Days",
                    data: values,
                    tension: 0.3,
                    fill: false
                }]
            },

            options: {
                responsive: true,

                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });

    } catch (error) {

        console.error(
            "Failed to load price history:",
            error
        );

    }
}
loadHistory();
async function searchCoins() {

    const query =
        document.getElementById("coinSearch").value.trim();

    if (!query) {
        return;
    }

    const results =
        document.getElementById("searchResults");

    results.innerHTML = "Searching...";

    try {

        const response = await fetch(
            `http://127.0.0.1:8000/search/${query}`
        );

        const data = await response.json();

        const coins = data.coins.slice(0, 5);

        results.innerHTML = coins.map(coin => `
            <div class="search-result">

                <img
                    src="${coin.thumb}"
                    alt="${coin.name}"
                    width="30"
                >

                <strong>${coin.name}</strong>

                <span>
                    ${coin.symbol.toUpperCase()}
                </span>

            </div>
        `).join("");

    } catch (error) {

        results.innerHTML =
            "Unable to search cryptocurrencies.";

        console.error(error);
    }
}
const coins = data.coins.slice(0, 5);

results.innerHTML = coins.map(coin => `
    <div
        class="search-result"
        onclick="selectCoin('${coin.id}')"
    >

        <img
            src="${coin.thumb}"
            alt="${coin.name}"
            width="30"
        >

        <strong>${coin.name}</strong>

        <span>
            ${coin.symbol.toUpperCase()}
        </span>

    </div>
`).join("");
function selectCoin(coinId) {

    if (!portfolio.includes(coinId)) {

        portfolio.push(coinId);

        localStorage.setItem(
            "portfolio",
            JSON.stringify(portfolio)
        );

        renderPortfolio();

    }

    alert(
        `Added ${coinId} to your portfolio`
    );
}
function renderPortfolio() {

    const container =
        document.getElementById("portfolio");

    if (portfolio.length === 0) {

        container.innerHTML =
            "<p>No cryptocurrencies added yet.</p>";

        return;
    }

    container.innerHTML = portfolio.map(coin => `
        <div class="search-result">

            <strong>${coin}</strong>

            <input
                type="number"
                min="0"
                step="0.0001"
                id="amount-${coin}"
                placeholder="Amount"
            >

            <button
                onclick="removeCoin('${coin}')"
            >
                Remove
            </button>

        </div>
    `).join("");
}
renderPortfolio();
function removeCoin(coinId) {

    portfolio =
        portfolio.filter(
            coin => coin !== coinId
        );

    localStorage.setItem(
        "portfolio",
        JSON.stringify(portfolio)
    );

    renderPortfolio();
}
function removeCoin(coinId) {

    portfolio =
        portfolio.filter(
            coin => coin !== coinId
        );

    localStorage.setItem(
        "portfolio",
        JSON.stringify(portfolio)
    );

    renderPortfolio();
}
