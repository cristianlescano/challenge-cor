import * as fs from 'fs';
import * as path from 'path';
import { escribirResultado } from '../src/writeText';

describe('escribirResultado', () => {
    afterEach(() => {
        // Elimino el directorio de salida y su contenido después de cada prueba
        const dir = './output';
        if (fs.existsSync(dir)) {
            fs.rmdirSync(dir, { recursive: true });
        }
    });

    it('should create the output directory if it does not exist', () => {
        escribirResultado(['chair', 'racket', 'touch', 'height', 'tunic']);

        const dir = './output';
        expect(fs.existsSync(dir)).toBe(true);
    });

    it('should write the result to a text file', () => {
        const resultado = ['chair', 'racket', 'touch', 'height', 'tunic'];
        escribirResultado(resultado);

        const rutaArchivo = path.join('./output', 'resultado.txt');
        expect(fs.existsSync(rutaArchivo)).toBe(true);

        const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
        expect(contenido).toBe(resultado.join('\n'));
    });

    it('should not create the output directory if the result is null', () => {
        escribirResultado(null);

        const dir = './output';
        expect(fs.existsSync(dir)).toBe(false);
    });
});