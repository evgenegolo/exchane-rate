import axios from "axios";

const key = process.env;

const config = {
  headers: {
    apikey: "XjX12c27QOa9vGUvr6NGuxHM8VoGdk09",
  },
};

const testRequest = () => {
  axios
    .get(
      "https://api.apilayer.com/exchangerates_data/convert?to=GBP&from=eur&amount=5",
      config
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
};

export default testRequest;
