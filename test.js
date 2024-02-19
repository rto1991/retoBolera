const calcularPuntuacion = require("./calcularPuntuacion");

// Función para imprimir con color
function imprimirResultadoTest(testName, passed) {
  const mensaje = passed ? `V ${testName} CORRECTO ` : `X ${testName} fallado`;
  const color = passed ? "\x1b[32m" : "\x1b[31m"; // verde si pasa, rojo si falla
  console.log(`${color}${mensaje}\x1b[0m`);
}

// Casos de prueba
function test1() {
  const result = calcularPuntuacion("20x1");
  imprimirResultadoTest("Test 1", result === 20);
}

function test2() {
  const result = calcularPuntuacion("20x0");
  imprimirResultadoTest("Test 2", result === 0);
}

function test3() {
  const result = calcularPuntuacion("10x3 & 10x0");
  imprimirResultadoTest("Test 3", result === 30);
}

function test4() {
  const result = calcularPuntuacion("5 & 5 & 3 & 17x0");
  imprimirResultadoTest("Test 4", result === 16);
}

function test5() {
  const result = calcularPuntuacion("0 & 5 & 5 & 3 & 16x0");
  imprimirResultadoTest("Test 5", result === 13);
}

function test6() {
  const result = calcularPuntuacion("5 & 5 & 3 & 17x1");
  imprimirResultadoTest("Test 6", result === 33);
}

function test7() {
  const result = calcularPuntuacion("10 & 3 & 2 & 16x0");
  imprimirResultadoTest("Test 7", result === 20);
}

function test8() {
  const result = calcularPuntuacion("0 & 10 & 3 & 2 & 16x0");
  imprimirResultadoTest("Test 8", result === 18);
}

function test9() {
  const result = calcularPuntuacion("10 & 3 & 2 & 16x1");
  imprimirResultadoTest("Test 9", result === 36);
}

function test10() {
  const result = calcularPuntuacion("18x0 & 10 & 1 & 1");
  imprimirResultadoTest("Test 10", result === 12);
}

function test11() {
  const result = calcularPuntuacion("18x0 & 5 & 5 & 1");
  imprimirResultadoTest("Test 11", result === 11);
}

function test12() {
  const result = calcularPuntuacion("12x10");
  imprimirResultadoTest("Test 12", result === 300);
}

// Ejecución de los tests
test1();
test2();
test3();
test4();
test5();
test6();
test7();
test8();
test9();
test10();
test11();
test12();
