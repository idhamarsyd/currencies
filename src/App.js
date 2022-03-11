// import logo from "./logo.svg";
import "./App.css";
import { React, useState, useEffect } from "react";
import LoadingText from "./components/LoadingText";
import HeaderText from "./components/HeaderText";
import Table from "./components/TableStructure";
import DescriptionText from "./components/DescriptionText";

const App = () => {
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
          <td className="table-data">{name}</td>
          <td className="table-data">{buyRates[index]}</td>
          <td className="table-data">{rates[index]}</td>
          <td className="table-data">{sellRates[index]}</td>
        </tr>
      );
    });
    return setData;
  };

  return (
    <div className="App">
      <div className="table-section">
        <HeaderText title="Currencies" />
        {currenciesTable.loading ? (
          <LoadingText title="Loading" />
        ) : (
          [
            <Table data={displayData(currenciesTable.content)} />,
            <DescriptionText content="Ini adalah currency untuk beberapa mata uang." />,
          ]
        )}
      </div>
    </div>
  );
};

export default App;
