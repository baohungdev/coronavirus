import React, { Component } from "react";
import { fetchData } from "./api";
import { Cards, Chart, CountryPicker, IconList } from "./components";
import styles from "./App.module.css";
import image from "./images/image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render = () => {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className="image" src={image} alt="" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <IconList />
      </div>
    );
  };
}
export default App;
