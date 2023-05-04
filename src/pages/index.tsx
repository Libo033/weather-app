// https://dribbble.com/shots/20288381-Weather-Forecasting-Web-App-UI
import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    //className={styles.}
    <Layout title="Home">
      <div className={styles.page}>
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
              <p>04/05/2023</p>
              <p>16:41 pm</p>
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
          <div>
            <h3 className={styles.liboWeather}>Popular Cities</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
