// import logo from "./logo.svg";
import "./App.css";
import { React, useState, useEffect } from "react";

const App = () => {
  // const [currencies, setCurrencies] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  const [currenciesTable, setTable] = useState({
    content: {},
    loading: true,
  });

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=ea1be70744ce4473b77c2988cc9ba717&symbols=CAD,IDR,JPY,CHF,EUR,GBP"
    )
      .then((response) => response.json())
      .then((response) =>
        setTable({
          content: response.rates,
          loading: false,
        })
      )
      .catch((err) => console.log("Ooops ada Error!"));
  }, []);

  const displayData = (data) => {
    const names = Object.keys(data);
    const rates = Object.values(data);

    const buyRates = rates.map((rate) => {
      const rateValue = parseFloat(rate) + parseFloat(rate) * (5 / 100);
      return rateValue.toFixed(4);
    });

    const sellRates = rates.map((rate) => {
      const rateValue = parseFloat(rate) - parseFloat(rate) * (5 / 100);
      return rateValue.toFixed(4);
    });

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

  const loadTable = () => {
    if (!currenciesTable.loading) {
      return (
        <table className="table-container">
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy </th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>{displayData(currenciesTable.content)}</tbody>
        </table>
      );
    } else {
      return <h4>Loading...</h4>;
    }
  };

  return (
    <div className="App">
      <div className="table-section">
        <h1>Currencies</h1>
        {loadTable()}
      </div>
    </div>
  );
};
export default App;
