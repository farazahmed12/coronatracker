import * as React from "react";

import CountryPicker from "../CountryPicker/CountryPicker";

export default function ButtonAppBar({ handleCountryChange }) {
  return (
    <nav className="navbar navbar-dark bg-warning text-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand text-dark">Covid-19 Tracker App</h2>

        <CountryPicker
          className="text-dark"
          handleCountryChange={handleCountryChange}
        />
      </div>
    </nav>
  );
}
