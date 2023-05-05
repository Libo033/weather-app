import styles from '@/styles/Home.module.css'

function backImage(code: number) {
  switch (code) {
    case 200: case 201: case 202: case 230: case 231: case 232: case 233:
      return styles.thunderstorm;
    case 300: case 301: case 302:
      return styles.drizzle;
    case 500: case 501:
      return styles.ligthrain;
    case 502: case 511: case 520: case 521: case 522:
      return styles.heavyrain;
    case 600: case 601: case 602: case 610: case 611: case 612: case 621: case 622: case 623:
      return styles.snow;
    case 700: case 711: case 721: case 731: case 714: case 751:
      return styles.fog;
    case 800:
      return styles.clear_sky;
    case 801: case 802: case 803:
      return styles.lowclouds;
    case 804: case 900:
      return styles.cloudy;
    default:
      break;
  }
}

export default backImage;
