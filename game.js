let age = 20;
let money = 50000;
let etfStockPrice = 300000;

let items = {
    'Flip machine': { count: 0, income: 25, max: 500, type: 'ability' },
    'ETF Stock': { count: 0, income: 0.1 / 100, max: Infinity, type: 'investment' },
    'ETF Bonds': { count: 0, income: 0.07 / 100, max: Infinity, type: 'investment' },
    'Lemonade Stand': { count: 0, income: 30, max: 1000, type: 'real estate' },
    'Ice Cream Truck': { count: 0, income: 120, max: 500, type: 'real estate' },
    'House': { count: 0, income: 32000, max: 100, type: 'real estate' },
    'TownHouse': { count: 0, income: 64000, max: 100, type: 'real estate' },
    'Mansion': { count: 0, income: 500000, max: 20, type: 'real estate' },
    'Industrial Space': { count: 0, income: 2200000, max: 10, type: 'real estate' },
    'Hotel Skyscraper': { count: 0, income: 25000000, max: 5, type: 'real estate' },
    'Bullet-Speed Sky Railway': { count: 0, income: 30000000000, max: 1, type: 'real estate' }
};

function work() {
    money += 25 + items['Flip machine'].count * items['Flip machine'].income;
    updateScreen();
}

function buy(item, price) {
    if (money >= price && items[item].count < items[item].max) {
        money -= price;
        items[item].count++;
        if (item == 'ETF Stock') {
            etfStockPrice *= 1.1;  // 価格を10%上げます
        }
        updateScreen();
    }
}

function updateScreen() {
    document.getElementById('age').textContent = age;
    document.getElementById('money').textContent = money.toFixed(2);
}

setInterval(function () {
    age += 1 / 365;
    money += items['ETF Stock'].count * items['ETF Stock'].income * money;
    money += items['ETF Bonds'].count * items['ETF Bonds'].income * money;

    for (let item in items) {
        if (items[item].type == 'real estate') {
            money += items[item].count * items[item].income;
        }
    }
    updateScreen();
}, 1000);
