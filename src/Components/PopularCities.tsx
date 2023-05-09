import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const PopularCities = () => {
  const router = useRouter();

  const weatherOf = (lat: number, lon: number) => {
    router.push(`/?lat=${lat}&lon=${lon}`);
  };

  return (
    <div className={styles.popularContainer}>
      <h3 className={styles.popularTitle}>Popular Cities</h3>
      <div className={styles.popularCities}>
        <div
          className={styles.popularCityCard}
          onClick={() => weatherOf(-22.9256, -43.2166)}
        >
          <Image
            src={"/img/uparrow.png"}
            width={24}
            height={24}
            alt="arrow"
            style={{ marginBottom: "0.6rem", alignSelf: "center" }}
          />
          <h4 className={styles.popularCityTitle}>Rio de Janeiro</h4>
        </div>
        <div
          className={styles.popularCityCard}
          onClick={() => weatherOf(35.6901, 139.7548)}
        >
          <Image
            src={"/img/uparrow.png"}
            width={24}
            height={24}
            alt="arrow"
            style={{ marginBottom: "0.6rem", alignSelf: "center" }}
          />
          <h4 className={styles.popularCityTitle}>Tokyo</h4>
        </div>
        <div
          className={styles.popularCityCard}
          onClick={() => weatherOf(25.7852, -80.2125)}
        >
          <Image
            src={"/img/uparrow.png"}
            width={24}
            height={24}
            alt="arrow"
            style={{ marginBottom: "0.6rem", alignSelf: "center" }}
          />
          <h4 className={styles.popularCityTitle}>Miami</h4>
        </div>
        <div
          className={styles.popularCityCard}
          onClick={() => weatherOf(51.5087, -0.1303)}
        >
          <Image
            src={"/img/uparrow.png"}
            width={24}
            height={24}
            alt="arrow"
            style={{ marginBottom: "0.6rem", alignSelf: "center" }}
          />
          <h4 className={styles.popularCityTitle}>London</h4>
        </div>
        <div
          className={styles.popularCityCard}
          onClick={() => weatherOf(25.3004, 51.5223)}
        >
          <Image
            src={"/img/uparrow.png"}
            width={24}
            height={24}
            alt="arrow"
            style={{ marginBottom: "0.6rem", alignSelf: "center" }}
          />
          <h4 className={styles.popularCityTitle}>Doha</h4>
        </div>
        <div
          className={styles.popularCityCardLast}
          onClick={() => weatherOf(40.7813, -73.9651)}
        >
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
  );
};

export default PopularCities;
