function dia_semana(fechaX: string) {
  let fecha = fechaX.split("-");
  if (fecha.length != 3) {
    return "";
  }

  var regular = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
  var bisiesto = [0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
  var semana = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var dia = parseInt(fecha[2]);
  var mes = parseInt(fecha[1]) - 1;
  var anno = parseInt(fecha[0]);

  if (anno % 4 == 0 && !(anno % 100 == 0 && anno % 400 != 0)) {
    mes = bisiesto[mes];
  } else {
    mes = regular[mes];
  }

  return semana[
    Math.ceil(
      Math.ceil(
        Math.ceil((anno - 1) % 7) +
          Math.ceil(
            (Math.floor((anno - 1) / 4) -
              Math.floor((3 * (Math.floor((anno - 1) / 100) + 1)) / 4)) %
              7
          ) +
          mes +
          (dia % 7)
      ) % 7
    )
  ];
}

export default dia_semana