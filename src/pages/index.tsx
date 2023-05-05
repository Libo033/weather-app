// https://dribbble.com/shots/20288381-Weather-Forecasting-Web-App-UI
// https://api.weatherbit.io/v2.0/current?lat=-34.7984&lon=-58.45316614322921&key=911f70efe3c74664ac8a9262e1da2862&include=minutely
import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
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
    <Layout title="Home">
      <div className={styles.lowclouds}>
        <div className={styles.navigator}>
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
                <Image
                  src={"/img/wind.png"}
                  width={24}
                  height={24}
                  alt="wind"
                />
                <p className={styles.miniTitle}>Wind Speed</p>
                <p>12km/h</p>
              </div>
              <div className={styles.miniContainer}>
                <Image
                  src={"/img/gota.png"}
                  width={24}
                  height={24}
                  alt="drop"
                />
                <p className={styles.miniTitle}>Humidity</p>
                <p>9%</p>
              </div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.miniContainer}>
                <Image
                  src={"/img/nube.png"}
                  width={24}
                  height={24}
                  alt="wind"
                />
                <p className={styles.miniTitle}>Cloud Coverage</p>
                <p>38%</p>
              </div>
              <div className={styles.miniContainer}>
                <Image
                  src={"/img/vision.png"}
                  width={24}
                  height={24}
                  alt="drop"
                />
                <p className={styles.miniTitle}>Visibility</p>
                <p>16km</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.liboWeather}>Libo Weather ®</h3>
          <h2 className={styles.cityTxt}>Buenos Aires, Argentina</h2>
          <h1 className={styles.titleTemp}>Clear sky</h1>
          <div className={styles.popularContainer}>
            <h3 className={styles.popularTitle}>Popular Cities</h3>
            <div className={styles.popularCities}>
              <div className={styles.popularCityCard}>
                <Image
                  src={"/img/uparrow.png"}
                  width={24}
                  height={24}
                  alt="arrow"
                  style={{ marginBottom: "0.6rem", alignSelf: "center" }}
                />
                <h4 className={styles.popularCityTitle}>Rio de Janeiro</h4>
              </div>
              <div className={styles.popularCityCard}>
                <Image
                  src={"/img/uparrow.png"}
                  width={24}
                  height={24}
                  alt="arrow"
                  style={{ marginBottom: "0.6rem", alignSelf: "center" }}
                />
                <h4 className={styles.popularCityTitle}>Tokyo</h4>
              </div>
              <div className={styles.popularCityCard}>
                <Image
                  src={"/img/uparrow.png"}
                  width={24}
                  height={24}
                  alt="arrow"
                  style={{ marginBottom: "0.6rem", alignSelf: "center" }}
                />
                <h4 className={styles.popularCityTitle}>Miami</h4>
              </div>
              <div className={styles.popularCityCard}>
                <Image
                  src={"/img/uparrow.png"}
                  width={24}
                  height={24}
                  alt="arrow"
                  style={{ marginBottom: "0.6rem", alignSelf: "center" }}
                />
                <h4 className={styles.popularCityTitle}>London</h4>
              </div>
              <div className={styles.popularCityCard}>
                <Image
                  src={"/img/uparrow.png"}
                  width={24}
                  height={24}
                  alt="arrow"
                  style={{ marginBottom: "0.6rem", alignSelf: "center" }}
                />
                <h4 className={styles.popularCityTitle}>Qatar</h4>
              </div>
              <div className={styles.popularCityCardLast}>
                <Image
                  src={"/img/uparrow.png"}
                  width={24}
                  height={24}
                  alt="arrow"
                  style={{ marginBottom: "0.6rem", alignSelf: "center" }}
                />
                <h4 className={styles.popularCityTitleLast}>New York</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
