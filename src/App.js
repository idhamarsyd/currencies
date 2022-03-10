// import logo from "./logo.svg";
import "./App.css";
import { React, useState, useEffect } from "react";

const App = () => {
  const [currencies, setCurrencies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     "https://api.currencyfreaks.com/latest?apikey=ea1be70744ce4473b77c2988cc9ba717"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setCurrencies(data.rates))
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoading(false));
  // }, []);
  const displayData = (data) => {
    const names = Object.keys(data);
    const rates = Object.values(data);
    const setData = names.map((name, index) => {
      return (
        <tr>
          <td>{name}</td>
          <td>{rates[index]}</td>
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
      <ul></ul>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Currencies</th>
          </tr>
        </thead>
        <tbody>{displayData(currencies)}</tbody>
      </table>
    </div>
  );
};
export default App;
