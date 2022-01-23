import React from "react";

import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { fetchData } from "./api/index";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    loading: true,
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData, loading: false });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country, loading } = this.state;

    return loading ? (
      <div className="d-flex justify-content-center mt-5">
        <div
          class="spinner-border text-warning"
          style={{ width: "6rem", height: "6rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      <React.Fragment>
        <Navbar handleCountryChange={this.handleCountryChange} />
        <div className={`container`}>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
