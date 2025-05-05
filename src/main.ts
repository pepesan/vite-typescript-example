import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import {variables} from "./modulos/variables.ts";
import {tipos} from "./modulos/tipos.ts";
import {arrays} from "./modulos/arrays.ts";
import {estructuras} from "./modulos/estructuras.ts";
import {funciones} from "./modulos/funciones.ts";
import {clases} from "./modulos/clases.ts";
import {genericos} from "./modulos/generics.ts";

import {ejerciciosClases} from "./ejercicios/clases.ts";
import {ejercicios} from "./ejercicios/ejercicios.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p id="resultados">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// ejemplos de variables
variables();
// ejemplos de tipos
tipos();
// ejemplos de arrays
arrays();
// Ejemplos de estructuras de control
estructuras();
// Ejemplos de funciones
funciones();
// ejemplos de clases
clases();
// Ejemplos de Genericos
genericos()

// Ejercicios
ejercicios(document.querySelector<HTMLParagraphElement>("#resultados"));
ejerciciosClases();
