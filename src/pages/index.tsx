// https://dribbble.com/shots/20288381-Weather-Forecasting-Web-App-UI
// https://api.weatherbit.io/v2.0/current?lat=-34.7984&lon=-58.45316614322921&key=911f70efe3c74664ac8a9262e1da2862&include=minutely
import styles from "@/styles/Home.module.css";
import Layout from "@/Components/Layout";
import BigCard from "@/Components/BigCard";
import PopularCities from "@/Components/PopularCities";
import TomorrowsCard from "@/Components/TomorrowsCard";
import { useEffect, useState } from "react";
import backImage from "@/Libs/backgroundImage";
import acomodarCiudad from "@/Libs/FormatoNombreCiudad";
import { useRouter } from "next/router";

interface ITCardsData {
  weather: { icon: string; description: string };
  min_temp: number;
  max_temp: number;
  wind_spd: number;
  wind_cdir_full: string;
  valid_date: string;
}

export default function Home({ data }: any) {
  const router = useRouter();
  const [ciudadName, setCiudadName] = useState<string>("");
  const [estiloFondo, setEstiloFondo] = useState<string | undefined>();

  const getPosition = ( ) => {
    navigator.geolocation.getCurrentPosition((data) => {
      router.push(`/?lat=${data.coords.latitude}&lon=${data.coords.longitude}`)
    })
  }

  useEffect(() => {
    setCiudadName(acomodarCiudad(data.timezone || "2017-04-01"));
    setEstiloFondo(backImage(data[0].weather.code || 200))
    getPosition()
  }, []);

  return (
    <Layout title="Home">
      <div className={estiloFondo}>
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
            {data &&
              data.data
                .slice(1, 7)
                .map((dia: ITCardsData) => (
                  <TomorrowsCard 
                    key={dia.valid_date}
                    icon={dia.weather.icon}
                    temp_min={Math.round(dia.min_temp)}
                    temp_max={Math.round(dia.max_temp)}
                    description={dia.weather.description}
                    wind={Math.round(dia.wind_spd * 3.6)}
                    windDir={dia.wind_cdir_full}
                    dia={dia.valid_date}
                  />
                ))}
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
