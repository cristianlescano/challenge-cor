import { encontrarCadenaCircular } from '../src/index';

describe('encontrarCadenaCircular', () => {
    it('should return a valid circular string', () => {
        const palabras = ['chair','height','racket','touch','tunic'];
        const result = encontrarCadenaCircular(palabras);
        expect(result).toEqual(['chair','racket','touch','height','tunic']);
    });

    it('should return null if no valid circular string is found', () => {
        const palabras = ['asignar', 'puesto', 'al', 'chino'];
        const result = encontrarCadenaCircular(palabras);
        expect(result).toBeNull();
    });
});