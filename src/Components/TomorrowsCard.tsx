// https://api.weatherbit.io/v2.0/forecast/daily?lat=-34.7984&lon=-58.45316614322921&key=911f70efe3c74664ac8a9262e1da2862
import React, { useEffect, useState } from "react";
import styles from "@/styles/Cards.module.css";
import Image from "next/image";
import dia_semana from "@/Libs/diaDeLaSemana";

interface ICardData {
  icon: string;
  temp_min: number;
  temp_max: number;
  description: string;
  wind: number;
  windDir: string;
  dia: string
}

const TomorrowsCard: React.FC<ICardData> = (props) => {
  const [dia, setDia] = useState<string>("");

  useEffect(() => {
    setDia(dia_semana(props.dia));
  }, [])

  return (
    <div className={styles.tomorrowCard}>
      <p>{dia}</p>
      <p>{props.description}</p>
      <div>
        <Image
          src={`/img/icons/${props.icon}.png`}
          width={72}
          height={72}
          alt="weather"
        />
      </div>
      <div className={styles.minmax}>
        <p style={{ color: "blue" }}>{props.temp_min}°</p>
        <p>&nbsp;/&nbsp;</p>
        <p style={{ color: "red" }}>{props.temp_max}°</p>
      </div>
      <p style={{ fontSize: "12px" }}>Wind {props.wind}km/h</p>
    </div>
  );
};

export default TomorrowsCard;
