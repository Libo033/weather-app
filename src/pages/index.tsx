// https://dribbble.com/shots/20288381-Weather-Forecasting-Web-App-UI
// https://api.weatherbit.io/v2.0/current?lat=-34.7984&lon=-58.45316614322921&key=911f70efe3c74664ac8a9262e1da2862&include=minutely
import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import BigCard from "@/Components/BigCard";
import PopularCities from "@/Components/PopularCities";
import TomorrowsCard from "@/Components/TomorrowsCard";
import { useEffect, useState } from "react";

export default function Home({ data }: any) {
  const [ciudadName, setCiudadName] = useState("");

  const acomodarCiudad = (ciudad: "string") => {
    let ciudadFinal: string = ciudad.slice(
      ciudad.indexOf("/") + 1,
      ciudad.length
    );
    ciudadFinal = ciudadFinal.replace("/", ", ").replace("_", " ");

    return ciudadFinal;
  };

  useEffect(() => {
    setCiudadName(acomodarCiudad(data.timezone));
  }, []);

  return (
    <Layout title="Home">
      <div className={styles.lowclouds}>
        <div className={styles.navigator}>
          <BigCard
            temperatura={data.data[0].temp}
            viento={Math.round(data.data[0].wind_spd * 3.6)}
            humedad={data.data[0].rh}
            nubes={data.data[0].clouds}
            vis={Math.round(data.data[0].vis)}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.liboWeather}>Libo Weather ®</h3>
          <h2 className={styles.cityTxt}>{ciudadName}</h2>
          <h1 className={styles.titleTemp}>
            {data.data[0].weather.description}
          </h1>
          <h3 className={styles.nextDaysTitle}>Next days:</h3>
          <div className={styles.tomorrowCardsContainer}>
            <TomorrowsCard
              icon={""}
              posibilidad_lluvia={""}
              temp_min={""}
              temp_max={""}
              dia={""}
              wind={""}
            />
            <TomorrowsCard
              icon={""}
              posibilidad_lluvia={""}
              temp_min={""}
              temp_max={""}
              dia={""}
              wind={""}
            />
            <TomorrowsCard
              icon={""}
              posibilidad_lluvia={""}
              temp_min={""}
              temp_max={""}
              dia={""}
              wind={""}
            />
            <TomorrowsCard
              icon={""}
              posibilidad_lluvia={""}
              temp_min={""}
              temp_max={""}
              dia={""}
              wind={""}
            />
            <TomorrowsCard
              icon={""}
              posibilidad_lluvia={""}
              temp_min={""}
              temp_max={""}
              dia={""}
              wind={""}
            />
            <TomorrowsCard
              icon={""}
              posibilidad_lluvia={""}
              temp_min={""}
              temp_max={""}
              dia={""}
              wind={""}
            />
          </div>
          <PopularCities />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?lat=-34.7984&lon=-58.45316614322921&key=911f70efe3c74664ac8a9262e1da2862`,
    { method: "GET" }
  );
  const data = await res.json();

  return { props: { data } };
}
