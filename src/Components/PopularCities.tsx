import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css"

const PopularCities = () => {
  return (
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
  );
};

export default PopularCities;
