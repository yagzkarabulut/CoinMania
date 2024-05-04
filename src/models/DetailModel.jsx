import axios from "axios";
import { FaPercent } from "react-icons/fa";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { SiCoinmarketcap } from "react-icons/si";

export default class DetailModel {
  constructor(coin) {
    // coin verilerini classdan alınıcak örneğin içine gönderir
    this.coin = coin;
    console.log(coin);
    // detay verilerinden olan bir dizi
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStackFill />,
        label: "24s Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];
    // grafik için kullanılacak dizi
    this.graphicData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: "id",
          label: "Fiyat",
          data: coin?.history.map((i) => i.priceUsd),
          backgroundColor: "orange",
          borderColor: "orange",
        },
      ],
    };
  }
  //   apiden hem fiyat hem detay verisini al
  static async getCoin(id) {
    const res = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    return {
      detail: res[0].data.data,
      history: res[1].data.data,
    };
  }
}
