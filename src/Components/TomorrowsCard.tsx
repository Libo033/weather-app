// https://api.weatherbit.io/v2.0/forecast/daily?lat=-34.7984&lon=-58.45316614322921&key=911f70efe3c74664ac8a9262e1da2862
import React from 'react'
import styles from '@/styles/Cards.module.css'
import Image from 'next/image'

/*
interface ICardData {
  icon: string
  posibilidad_lluvia: string
  temp_min: string
  temp_max: string
  dia: string
  wind: string
}
*/

const TomorrowsCard = () => {
  return (
    <div className={styles.tomorrowCard}>
      <p>Mañana</p>
      <div>
        <Image src={'/img/icons/a01d.png'} width={72} height={72} alt='weather' />
        <p style={{textAlign: 'center'}}>21%</p>
      </div>
      <div className={styles.minmax}>
        <p style={{color: 'blue'}}>12°</p>
        <p>&nbsp;/&nbsp;</p>
        <p style={{color: 'red'}}>19°</p>
      </div>
      <p style={{fontSize: '13px'}}>Wind 12km/h <strong>NE</strong></p>
    </div>
  )
}

export default TomorrowsCard