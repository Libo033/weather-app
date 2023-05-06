const acomodarCiudad = (ciudad: "string") => {
  let ciudadFinal: string = ciudad.slice(
    ciudad.indexOf("/") + 1,
    ciudad.length
  );
  ciudadFinal = ciudadFinal.replace("/", ", ").replace("_", " ");

  return ciudadFinal;
};

export default acomodarCiudad