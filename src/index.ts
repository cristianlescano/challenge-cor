import { escribirResultado } from "./writeText";

export function encontrarCadenaCircular(palabras: string[]): string[] | null {
    function esCadenaValida(cadena: string[]): boolean {
        const esUltimaPalabra = (indice: number) => indice === cadena.length - 1;
        const ultimaLetraEsIgualAInicialSiguiente = (palabra: string, indice: number) => 
            palabra.slice(-1) === cadena[indice + 1][0];
        
        const todasLasPalabrasCumplenRegla = cadena.every((palabra, indice) => 
            esUltimaPalabra(indice) || ultimaLetraEsIgualAInicialSiguiente(palabra, indice));
        
        const inicialIgualAFinal = cadena[0][0] === cadena[cadena.length - 1].slice(-1);
        
        return todasLasPalabrasCumplenRegla && inicialIgualAFinal;
    }

    function buscarCadenaCircular(cadena: string[], palabrasRestantes: string[]): string[] | null {
        // si ya tengo todas las palabras y la cadena es valida, retorno la cadena
        if (cadena.length === palabras.length && esCadenaValida(cadena)) {
            return cadena;
        }

        for (const palabra of palabrasRestantes) {
            // filtro si es la 1ra vez que paso o si la ultima letra de la palabra anterior es igual a la inicial de la palabra actual
            if (cadena.length === 0 || cadena[cadena.length - 1].slice(-1) === palabra[0]) {
                // agrego la palabra actual a la cadena
                const nuevaCadena = [...cadena, palabra];
                // filtro las palabras restantes para no repetir la palabra actual
                const nuevasPalabrasRestantes = palabrasRestantes.filter(p => p !== palabra);
                const resultado = buscarCadenaCircular(nuevaCadena, nuevasPalabrasRestantes);
                if (resultado) {
                    return resultado;
                }
            }
        }

        return null;
    }

    return buscarCadenaCircular([], palabras);
}

const palabras = ['chair','height','racket','touch','tunic'];
const resultado = encontrarCadenaCircular(palabras);
escribirResultado(resultado);
if (resultado) {
  console.log(resultado.join("\n"));
} else {
  console.log("No se encontró una cadena circular.");
}