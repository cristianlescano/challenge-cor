# Challenge -Project Cor
[![N|Solid](https://projectcor.com/es/wp-content/uploads/2020/11/logo-dark-8.png)](https://projectcor.com/es/)

### _por Cristian Lescano_


Challenge del la empresa Project Cor, desarrollado con TypeScript
Descripción del challenge :
> Dada una lista de palabras, determine si las palabras se pueden encadenar para formar un círculo. 
Una palabra X se puede colocar delante de otra palabra Y en un círculo si el último carácter de X es el mismo que el primer carácter de Y.

Por ejemplo, las palabras 
```javascript
['chair','height','racket', 'touch','tunic']
```
pueden formar el siguiente círculo: 
```
chair --> racket --> touch --> height --> tunic
```
El resultado tiene que ser un archivo de texto con una palabra
por línea, por ejemplo:
```
chair
racket
touch
height
tunic
```
Es muy importante la lógica y la performance del algoritmo.


Link de la necesidad: https://cristianlescano.github.io/challenge-cor.pdf

## Instalación

El proyecto requiere [Node.js](https://nodejs.org/) v18+ para correr.

Descargar el proyecto e instalar las dependencias.

```sh
git clone git@github.com:cristianlescano/challenge-cor.git
cd challenge-cor
npm i
```

## Ejecucion
Se puede probar mediante el comando:
```sh
cd challenge-cor
npm start
```
El archivo de texto solicitado en el challenge se va a ubicar en /output/resultado.txt

## Test
Se escribieron primero los test (TDD), para ejecutarlos mendiante el comando:
```sh
npm run test
```

