import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);
  // 1-urlden id al
  const { id } = useParams();
  // 2-coin'in detay verilerini ve fiyat geçmişini APiden al
  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);

  // classdan örnek al

  const model = new DetailModel(coin);
  console.log(model);

  return <DetailView model={model} />;
};

export default DetailController;
