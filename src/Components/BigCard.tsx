import React, { useEffect, useState } from "react";
import styles from "@/styles/Cards.module.css";
import Image from "next/image";

interface IBigCardData {
  temperatura: number;
  viento: number;
  humedad: number;
  nubes: number;
  vis: number;
}

const BigCard: React.FC<IBigCardData> = (props) => {
  const [hora, setHora] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [seconds, setseconds] = useState<number>(0);
  var today = new Date();

  useEffect(() => {
    setHora(
      today.getHours().toString() +
        ":" +
        (today.getMinutes().toString().length === 1
          ? "0" + today.getMinutes().toString()
          : today.getMinutes().toString())
    );
    setFecha(
      (today.getDay().toString().length === 1
        ? "0" + today.getDay().toString()
        : today.getDay().toString()) +
        "/" +
        ((today.getMonth() + 1).toString().length
          ? "0" + (today.getMonth() + 1).toString()
          : (today.getMonth() + 1).toString()) +
        "/" +
        today.getFullYear().toString()
    );
  }, [seconds]);

  setTimeout(() => {
    setseconds(today.getSeconds());
  }, 1000);

  return (
    <div className={styles.navContainer}>
      <div className={styles.timeContainer}>
        <p>{fecha}</p>
        <p>{hora}</p>
      </div>
      <div className={styles.tempContainer}>
        <h2 className={styles.temph2}>{props.temperatura}°</h2>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.miniContainer}>
          <Image src={"/img/wind.png"} width={24} height={24} alt="wind" />
          <p className={styles.miniTitle}>Wind Speed</p>
          <p>{props.viento}km/h</p>
        </div>
        <div className={styles.miniContainer}>
          <Image src={"/img/gota.png"} width={24} height={24} alt="drop" />
          <p className={styles.miniTitle}>Humidity</p>
          <p>{props.humedad}%</p>
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.miniContainer}>
          <Image src={"/img/nube.png"} width={24} height={24} alt="wind" />
          <p className={styles.miniTitle}>Cloud Coverage</p>
          <p>{props.nubes}%</p>
        </div>
        <div className={styles.miniContainer}>
          <Image src={"/img/vision.png"} width={24} height={24} alt="drop" />
          <p className={styles.miniTitle}>Visibility</p>
          <p>{props.vis}km</p>
        </div>
      </div>
      <a
        href="https://www.weatherbit.io"
        rel="noopener noreferrer"
        target="_blanck"
        style={{ color: "white", marginBottom: "1rem" }}
      >
        WeatherBit API
      </a>
    </div>
  );
};

export default BigCard;
