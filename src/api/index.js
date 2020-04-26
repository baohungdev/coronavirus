import Axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

    let changeableURL = url;

    if (country) {
        changeableURL = `${url}/countries/${country}`
    }

    try {
        const {
            data: {
                confirmed,
                deaths,
                recovered,
                lastUpdate
            }
        } = await Axios.get(changeableURL);
        const modifiedData = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        };
        return modifiedData;
    } catch (error) {}
}

export const fetchDailyData = async () => {
    try {
        const {
            data
        } = await Axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed,
            deaths: dailyData.deaths,
            data: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {}
}

export const fetchCountries = async () => {
    try {
        const {
            data: {
                countries
            }
        } = await Axios.get(`${url}/countries`);
        const response = countries.map((country) => country.name);
        return response;
    } catch (error) {

    }
}