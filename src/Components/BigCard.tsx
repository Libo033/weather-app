import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const BigCard = () => {
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
      <div className={styles.navInput}>
        <input
          className={styles.cityInput}
          type="text"
          placeholder="Your city..."
        />
      </div>
      <div className={styles.timeContainer}>
        <p>{fecha}</p>
        <p>{hora}</p>
      </div>
      <div className={styles.tempContainer}>
        <h2 className={styles.temph2}>21°</h2>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.miniContainer}>
          <Image src={"/img/wind.png"} width={24} height={24} alt="wind" />
          <p className={styles.miniTitle}>Wind Speed</p>
          <p>12km/h</p>
        </div>
        <div className={styles.miniContainer}>
          <Image src={"/img/gota.png"} width={24} height={24} alt="drop" />
          <p className={styles.miniTitle}>Humidity</p>
          <p>9%</p>
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.miniContainer}>
          <Image src={"/img/nube.png"} width={24} height={24} alt="wind" />
          <p className={styles.miniTitle}>Cloud Coverage</p>
          <p>38%</p>
        </div>
        <div className={styles.miniContainer}>
          <Image src={"/img/vision.png"} width={24} height={24} alt="drop" />
          <p className={styles.miniTitle}>Visibility</p>
          <p>16km</p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
