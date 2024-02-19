function calcularPuntuacion(input) {
  const tiradas = input.split(" & ");
  let puntuacion = 0;
  let ronda = 1;
  let tirada = 1;

  for (let i = 0; i < tiradas.length; i++) {
    if (tiradas[i].includes("x")) {
      const [cantidad, bolo] = tiradas[i].split("x");
      puntuacion += parseInt(cantidad) * parseInt(bolo);
      break;
    } else {
      const bolos = tiradas[i].split(" ");
      let suma = 0;
      for (let j = 0; j < bolos.length; j++) {
        if (bolos[j] === "/") {
          suma += 10 - parseInt(bolos[j - 1]);
        } else if (bolos[j] === "10") {
          if (ronda === 10) {
            suma += 10;
            if (tirada < 3) tirada++;
          } else if (tiradas[i + 1].includes("10")) {
            suma += 10 + parseInt(tiradas[i + 1][0]);
          } else {
            suma += 10 + parseInt(tiradas[i + 1]);
          }
        } else {
          suma += parseInt(bolos[j]);
        }
      }
      puntuacion += suma;
    }

    if (tirada === 2) {
      ronda++;
      tirada = 1;
    } else {
      tirada++;
    }
  }

  return puntuacion;
}

module.exports = calcularPuntuacion;
