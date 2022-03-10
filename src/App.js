// import logo from "./logo.svg";
import "./App.css";
import { React, useState, useEffect } from "react";

const App = () => {
  const [currencies, setCurrencies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const displayData = (data) => {
    const names = Object.keys(data);
    const rates = Object.values(data);
    console.log(rates);

    const buyRates = rates.map((rate) => {
      const rateValue = parseFloat(rate) + parseFloat(rate) * (5 / 100);
      return rateValue.toFixed(4);
    });

    const sellRates = rates.map((rate) => {
      const rateValue = parseFloat(rate) - parseFloat(rate) * (5 / 100);
      return rateValue.toFixed(4);
    });
    // console.log(sellRates);
    const setData = names.map((name, index) => {
      return (
        <tr>
          <td>{name}</td>
          <td>{buyRates[index]}</td>
          <td>{rates[index]}</td>
          <td>{sellRates[index]}</td>
        </tr>
      );
    });
    return setData;
  };

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=ea1be70744ce4473b77c2988cc9ba717&symbols=CAD,IDR,JPY,CHF,EUR,GBP"
    )
      .then((response) => response.json())
      .then((response) => setCurrencies(response.rates))
      .catch((err) => console.log("Ooops ada Error!"));
  }, []);

  return (
    <div className="App">
      <h1>Assignment 2 Currencies</h1>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy </th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>{displayData(currencies)}</tbody>
      </table>
    </div>
  );
};
export default App;
