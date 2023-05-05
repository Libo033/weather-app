// https://dribbble.com/shots/20288381-Weather-Forecasting-Web-App-UI
// https://api.weatherbit.io/v2.0/current?lat=-34.7984&lon=-58.45316614322921&key=911f70efe3c74664ac8a9262e1da2862&include=minutely
import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import BigCard from "@/Components/BigCard";
import PopularCities from "@/Components/PopularCities";
import TomorrowsCard from "@/Components/TomorrowsCard";

export default function Home() {


  return (
    <Layout title="Home">
      <div className={styles.lowclouds}>
        <div className={styles.navigator}>
          <BigCard />
        </div>
        <div className={styles.info}>
          <h3 className={styles.liboWeather}>Libo Weather ®</h3>
          <h2 className={styles.cityTxt}>Buenos Aires, Argentina</h2>
          <h1 className={styles.titleTemp}>Clear sky</h1>
          <h3 className={styles.nextDaysTitle}>Next days:</h3>
          <div className={styles.tomorrowCardsContainer}>
            <TomorrowsCard />
            <TomorrowsCard />
            <TomorrowsCard />
            <TomorrowsCard />
            <TomorrowsCard />
            <TomorrowsCard />
          </div>
          <PopularCities />
        </div>
      </div>
    </Layout>
  );
}
