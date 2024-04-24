import * as fs from 'fs';
import * as path from 'path';

export function escribirResultado(resultado: string[] | null): void {
    // Si no hay resultado, no hacemos nada
    if (!resultado) return;

    // Creamos el directorio /output si no existe
    const dir = './output';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    // Creamos el archivo de texto y escribimos el resultado
    const rutaArchivo = path.join(dir, 'resultado.txt');
    const contenido = resultado.join('\n');
    fs.writeFileSync(rutaArchivo, contenido);
}