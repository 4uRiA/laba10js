// Массивы с информацией о велосипедах
const natashaBike = {
    brand: "Giant",
    color: "розовый",
    price: 25690,
    currency: "₽",
    country: "Россия🇷🇺"
};

const vityaBike = {
    brand: "TREK",
    color: "синий",
    price: 12000,
    currency: "$",
    country: "США🇺🇸"
};

const svetaBike = {
    brand: "Merida",
    color: "зелёный",
    price: 15684,
    currency: "€",
    country: "Германия🇩🇪"
};

const katyaBike = {
    brand: "CUBE",
    color: "чёрный",
    price: 96300,
    currency: "₽",
    country: "Россия🇷🇺"
};

// Курсы валют
const exchangeRates = {
    "$": 75, // курс доллара к рублю
    "€": 85, // курс евро к рублю
    "₽": 1   // рубль к рублю
};

// Функция для перевода цены в рубли
function convertToRuble(price, currency) {
    return price * exchangeRates[currency];
}

// Сравнение цен в рублях
const bikes = [natashaBike, vityaBike, svetaBike, katyaBike];
let maxPrice = 0;
let winner = "";

// Определение победителя
bikes.forEach(bike => {
    const priceInRuble = convertToRuble(bike.price, bike.currency);
    if (priceInRuble > maxPrice) {
        maxPrice = priceInRuble;
        winner = bike.brand; // сохраняем название фирмы победителя
    }
});

// Вывод результата
console.log(`Победитель - велосипед ${winner}. Он получил килограмм конфет!`);
